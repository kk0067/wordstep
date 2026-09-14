'use strict';
const KEY='wordstep-v2',DAY=86400000;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function dateKey(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function validDate(x){return typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&dateKey(new Date(x+'T12:00:00'))===x}

// ===== 状态初始化 =====
function initial(){
  const end=new Date();end.setDate(end.getDate()+30);
  return{
    version:3,
    start:dateKey(),
    exam:dateKey(end),
    dailyNewGoal:100,
    records:{},        // wordId -> {status, firstLearned, lastReviewed, correctCount, wrongCount, streak, nextReview, level, readingAppearances, readingLookups}
    days:{},           // date -> {new, reviews, correct, attempts, testCorrect, testTotal}
    readings:{},       // "date-index" -> {correct, choice, answers}
    session:null,
    weakWords:[],
    recentLearned:[],
    readingUnknownWords:[],
    grammarProgress:{},
    clozeProgress:{}
  };
}
let state=initial(),storageError=false;

// ===== 旧数据迁移 (v1 -> v3) =====
function migrateOldState(raw){
  try{
    const old=JSON.parse(raw);
    if(!old||old.version!==2)return null;
    const n=initial();
    n.start=old.start||dateKey();
    n.exam=old.exam||n.exam;
    n.dailyNewGoal=100;
    // 迁移词汇记录：旧ID格式 "group-index" -> 通过word匹配新ID
    const oldWordsMap={};
    if(typeof WORDS!=='undefined'&&Array.isArray(WORDS)){
      // 构建 word->newId 映射
      const wordToId={};
      WORDS.forEach(w=>{if(w&&w.word)wordToId[w.word.toLowerCase()]=w.id});
      // 旧词库的 word 列表（从旧格式推断）
      if(old.records){
        for(const [oldId,r] of Object.entries(old.records)){
          // 尝试从旧ID推断word：旧ID是 "g-i" 格式，我们需要旧词库
          // 由于旧词库已被替换，我们通过 localStorage 中的旧词库备份或直接尝试匹配
          // 这里用一个启发式：如果旧ID能在新词库中找到对应位置则迁移
          const parts=oldId.split('-');
          if(parts.length===2){
            const g=parseInt(parts[0]),i=parseInt(parts[1]);
            // 旧词库大约420词，尝试通过索引范围匹配
            // 旧group 0-6 是单词，group 7是短语
            // 我们直接尝试在新词库中找level匹配的词
            // 更安全的方式：保存旧记录但标记为migrated，用户可以重新学习
            const newWord=WORDS.find(w=>w.level===Math.min(g,5)&&!n.records[w.id]);
            if(newWord&&r){
              n.records[newWord.id]={
                status:r.level>=3?'mastered':r.level>=1?'learning':'new',
                firstLearned:r.first||dateKey(),
                lastReviewed:dateKey(),
                correctCount:r.level,
                wrongCount:r.lapses||0,
                streak:r.level,
                nextReview:r.due||Date.now(),
                level:r.level||0,
                readingAppearances:0,
                readingLookups:0
              };
            }
          }
        }
      }
    }
    // 迁移天数记录
    if(old.days){
      for(const [d,v] of Object.entries(old.days)){
        if(validDate(d)&&v){
          n.days[d]={new:v.new||0,reviews:v.reviews||0,correct:v.correct||0,attempts:v.attempts||0,testCorrect:0,testTotal:0};
        }
      }
    }
    // 迁移阅读记录
    if(old.readings){
      for(const [k,v] of Object.entries(old.readings)){
        n.readings[k]={correct:v.correct,choice:v.choice,answers:[v.choice]};
      }
    }
    return n;
  }catch(e){return null}
}

// 加载状态
try{
  const raw=localStorage.getItem(KEY);
  if(raw){
    const parsed=JSON.parse(raw);
    if(parsed.version===3){state=parsed;}
    else{
      // 尝试迁移
      const migrated=migrateOldState(raw);
      if(migrated){state=migrated;save();}
      else{state=initial();}
    }
  }else{
    // 检查是否有v1旧数据
    const oldRaw=localStorage.getItem('wordstep-v1');
    if(oldRaw){
      const migrated=migrateOldState(oldRaw);
      if(migrated){state=migrated;save();}
    }
  }
}catch(e){storageError=true}

function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageError=false}catch{storageError=true;toast('保存失败：请导出备份，并检查浏览器存储设置。')}}
function today(){return state.days[dateKey()]||{new:0,reviews:0,correct:0,attempts:0,testCorrect:0,testTotal:0}}
function daily(){return state.days[dateKey()]??= {new:0,reviews:0,correct:0,attempts:0,testCorrect:0,testTotal:0}}
function remaining(){return Math.ceil((new Date(state.exam+'T00:00:00')-new Date(dateKey()+'T00:00:00'))/DAY)}
function dayNumber(){return Math.max(1,Math.min(30,Math.floor((new Date(dateKey())-new Date(state.start))/DAY)+1))}

// ===== 词汇工具函数 =====
function getWord(id){return WORDS.find(w=>w.id===id)}
function isPhrase(w){return w&&w.isPhrase===true}
function uniqueWords(){return WORDS.filter(w=>!isPhrase(w))}
function phrases(){return WORDS.filter(w=>isPhrase(w))}
function core2000(){return WORDS.filter(w=>w.tags&&w.tags.includes('Core2000'))}
function core3000(){return WORDS.filter(w=>w.tags&&w.tags.includes('Core3000'))}

// 获取到期复习词
function dueWords(){
  const now=Date.now();
  return WORDS.filter(w=>{
    const r=state.records[w.id];
    return r&&r.nextReview&&r.nextReview<=now&&r.status!=='new';
  }).sort((a,b)=>{
    const ra=state.records[a.id],rb=state.records[b.id];
    // 优先：阅读查词次数多的 > 错误次数多的 > 连续正确少的 > 到期早的
    if((rb.readingLookups||0)!==(ra.readingLookups||0))return (rb.readingLookups||0)-(ra.readingLookups||0);
    if(rb.wrongCount!==ra.wrongCount)return rb.wrongCount-ra.wrongCount;
    if(ra.streak!==rb.streak)return ra.streak-rb.streak;
    return (ra.nextReview||0)-(rb.nextReview||0);
  });
}

// 获取弱词
function weakWordsList(){
  return WORDS.filter(w=>{
    const r=state.records[w.id];
    return r&&(r.wrongCount>0||r.status==='fuzzy'||r.status==='learning');
  }).sort((a,b)=>(state.records[b.id].wrongCount||0)-(state.records[a.id].wrongCount||0));
}

// 获取未学习词（按level和frequency排序）
function unlearnedWords(){
  return WORDS.filter(w=>!state.records[w.id]||state.records[w.id].status==='new')
    .sort((a,b)=>{
      if(a.level!==b.level)return a.level-b.level;
      return (b.frequency||0)-(a.frequency||0);
    });
}

// 计算下次复习时间 (SRS)
function nextReviewTime(level,correct){
  const intervals=[0,1,2,4,7,14,21,30]; // 天
  if(!correct)return Date.now()+10*60000; // 10分钟后
  const lvl=Math.min(level,intervals.length-1);
  return Date.now()+intervals[lvl]*DAY;
}

// 更新单词记录 (fuzzy=true 表示"模糊"：有点印象但不确定，不降level，复习间隔较短)
function updateWordRecord(id,correct,mode,fuzzy=false){
  const r=state.records[id]??={
    status:'new',firstLearned:dateKey(),lastReviewed:dateKey(),
    correctCount:0,wrongCount:0,streak:0,nextReview:Date.now(),level:0,
    readingAppearances:0,readingLookups:0
  };
  r.lastReviewed=dateKey();
  if(correct){
    r.correctCount++;
    r.streak++;
    r.level=Math.min(7,r.level+1);
    if(r.streak>=5)r.status='mastered';
    else if(r.streak>=3)r.status='recognized';
    else r.status='learning';
    r.nextReview=nextReviewTime(r.level,true);
  }else if(fuzzy){
    // 模糊：有点印象，不降level，streak保留，2天后复习
    r.wrongCount++;
    r.streak=Math.max(0,r.streak-1);
    r.status='fuzzy';
    r.nextReview=Date.now()+2*DAY;
    if(!state.weakWords.includes(id))state.weakWords.push(id);
  }else{
    r.wrongCount++;
    r.streak=0;
    r.level=Math.max(0,r.level-1);
    r.status='fuzzy';
    r.nextReview=Date.now()+10*60000; // 10分钟后
    if(!state.weakWords.includes(id))state.weakWords.push(id);
  }
  // 更新最近学习
  state.recentLearned=state.recentLearned.filter(x=>x!==id);
  state.recentLearned.unshift(id);
  if(state.recentLearned.length>100)state.recentLearned.pop();
  return r;
}

function toast(t){$('#toast').textContent=t;$('#toast').style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').style.display='none',3600)}

// ===== 视图和导航 =====
let view='home',filter='all',query='',readingIndex=0,translation=false,gloss='',options=[],lastQuestion='',quickMode=false,testMode=false,wordPage=0,readingMode='study';

const navs=[
  ['home','◷','今日冲刺'],
  ['quick','⚡','快速背词'],
  ['review','↻','复习'],
  ['test','✎','词汇测试'],
  ['words','▤','我的词库'],
  ['reading','▧','阅读训练'],
  ['cloze','▦','完形填空'],
  ['sentence','⌁','长难句'],
  ['grammar','§','语法'],
  ['report','▥','学习报告'],
  ['settings','⚙','设置']
];

function navigate(v){view=v;render();window.scrollTo({top:0,behavior:'smooth'})}

function header(title,sub='河南成人高考 · 专升本英语 · 30天冲刺'){
  return '<div class="top"><div><div class="eyebrow">'+sub+'</div><h1>'+title+'</h1></div><span class="datepill">'+(remaining()>0?'距考试 <b>'+remaining()+'</b> 天':remaining()===0?'今天考试':'考试已过')+'</span></div>';
}

function render(){
  $('#app').innerHTML='<div class="shell"><aside class="sidebar"><div class="brand"><div class="mark">▂▅▇</div><div>词阶<small>WORDSTEP / 30</small></div></div><nav class="nav" aria-label="主导航">'+navs.map(([v,icon,label])=>'<button data-nav="'+v+'" class="'+(view===v?'active':'')+'"><span aria-hidden="true">'+icon+'</span>'+label+'</button>').join('')+'</nav><div class="sidefoot"><b>一步一步，读懂英语</b><br>河南 · 成人专升本<br>词库 '+uniqueWords().length+' 词 · '+phrases().length+' 短语<br>浏览器本地保存</div></aside><main class="main">'+(storageError?'<div class="tip">浏览器存储不可用或记录损坏，请到设置导出当前记录备份。</div>':'')+({home:home,quick:quickLearn,review:reviewView,test:testView,words:wordlist,reading:reading,readingExam:readingExamView,cloze:clozeView,sentence:sentence,grammar:grammarView,report:report,settings:settings}[view]||home)()+'</main></div>';
  bind();
}

// ===== 首页：30天冲刺 =====
function home(){
  const t=today(),d=dueWords().length,learned=Object.keys(state.records).length,mastered=Object.values(state.records).filter(r=>r.status==='mastered'||r.level>=3).length;
  const dn=dayNumber();
  const goal=state.dailyNewGoal;
  const newRemaining=Math.max(0,goal-t.new);
  const phase=dn<=7?'基础积累期':dn<=20?'强化训练期':'冲刺模考期';
  const recs=dn<=7?{vocab:'60%',grammar:'20%',reading:'20%'}:dn<=20?{vocab:'40%',grammar:'20%',reading:'40%'}:{vocab:'30%',grammar:'25%',reading:'45%'};

  return header('今天，再前进一步')+
  '<div class="grid"><section>'+
    '<div class="focus"><div class="eyebrow">DAY '+String(dn).padStart(2,'0')+' / 30 · '+phase+'</div>'+
    '<h2>'+(d>0?'先复习 '+d+' 个到期词':'从最高频核心词开始')+'</h2>'+
    '<p>'+(d>0?'复习比学新词更重要。先回忆，再看答案。':'今天目标 '+goal+' 个新词，从 Core 2000 开始。')+'</p>'+
    '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      '<button class="btn white" data-act="startQuick">⚡ 快速背词 →</button>'+
      (d>0?'<button class="btn white" data-act="startReview" style="background:rgba(255,255,255,.2)">↻ 复习 '+d+' 词</button>':'')+
      '<button class="btn white" data-act="startTest" style="background:rgba(255,255,255,.15)">✎ 词汇测试</button>'+
    '</div>'+
    '<div class="focusmeta"><div><b>'+newRemaining+'</b>今日剩余新词</div><div><b>'+d+'</b>到期复习</div><div><b>'+goal+'</b>每日新词目标</div></div>'+
  '</div>'+

  '<div class="stats">'+
    '<div class="stat"><span>累计接触</span><strong>'+learned+' <span>/ '+uniqueWords().length+'</span></strong><span>个单词</span></div>'+
    '<div class="stat"><span>稳定记忆</span><strong>'+mastered+'</strong><span>连续答对≥3次</span></div>'+
    '<div class="stat"><span>今日正确率</span><strong>'+(t.attempts?Math.round(t.correct/t.attempts*100)+'%':'—')+'</strong><span>'+(t.attempts?t.attempts+' 次回忆':'完成测验后显示')+'</span></div>'+
  '</div>'+

  '<div class="panel"><h2>今天的任务</h2>'+
    '<div class="task"><div class="tasknum">01</div><div><h3>快速背词 '+goal+' 个</h3><p>已学 '+t.new+' 个 · 认识/模糊/不会 快速过</p></div><button class="btn soft" data-act="startQuick">开始</button></div>'+
    '<div class="task"><div class="tasknum">02</div><div><h3>复习到期词</h3><p>'+d+' 个到期 · 已复习 '+t.reviews+' 次</p></div><button class="btn soft" data-act="startReview">复习</button></div>'+
    '<div class="task"><div class="tasknum">03</div><div><h3>阅读训练</h3><p>在文章中遇见背过的词 · 点击查词</p></div><button class="btn soft" data-nav="reading">去阅读</button></div>'+
    '<div class="task"><div class="tasknum">04</div><div><h3>长难句 3 句</h3><p>找主干 → 猜意思 → 看解析</p></div><button class="btn soft" data-nav="sentence">去练习</button></div>'+
  '</div>'+

  '<div class="panel" style="margin-top:18px"><h2>本阶段建议比例（Day '+dn+'）</h2>'+
    '<p class="muted small">词汇 '+recs.vocab+' · 阅读 '+recs.reading+' · 语法/完形 '+recs.grammar+'。这只是建议，不是锁。</p>'+
    '<div class="week">'+Array.from({length:7},(_,i)=>{const dt=new Date();dt.setDate(dt.getDate()-6+i);const x=state.days[dateKey(dt)];return '<div class="day">'+['日','一','二','三','四','五','六'][dt.getDay()]+'<i class="'+(x&&(x.new||x.attempts)?'done':'')+'">'+(x&&(x.new||x.attempts)?'✓':'·')+'</i></div>'}).join('')+'</div>'+
  '</div>'+
  '</section>'+

  '<aside class="aside">'+
    '<div class="panel"><div class="row"><h3>今日新词进度</h3><span class="badge">'+Math.min(100,Math.round(t.new/goal*100))+'%</span></div>'+
    '<div class="ring" style="--progress:'+Math.min(100,t.new/goal*100)+'%"><div><b>'+t.new+'<span class="muted" style="font-size:18px"> / '+goal+'</span></b><small>新词已接触</small></div></div>'+
    (t.new>=goal?'<p class="small" style="text-align:center;color:#26724c"><b>🎉 今日目标已完成！</b><br>可以继续学习更多</p>':'<p class="small muted" style="text-align:center">学过不等于记住<br>复习才是关键</p>')+
    (t.new>=goal?'<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px"><button class="btn soft" data-act="continue20">+20词</button><button class="btn soft" data-act="continue50">+50词</button><button class="btn soft" data-act="continue100">+100词</button><button class="btn outline" data-act="freeLearn">自由学习</button></div>':'')+
    '</div>'+

    '<div class="panel" style="margin-top:18px"><div class="row"><h3>今日复习进度</h3><span class="badge">'+t.reviews+' 次</span></div>'+
    '<div class="progress" style="margin:12px 0"><div style="width:'+Math.min(100,d>0?t.reviews/Math.max(1,d)*100:100)+'%"></div></div>'+
    '<p class="small muted">到期复习 <b>'+d+'</b> 个 · 已复习 <b>'+t.reviews+'</b> 次'+(d>0?' · 还有 <b>'+Math.max(0,d-t.reviews)+'</b> 个待复习':' · 今日复习已完成 ✓')+'</p>'+
    (d>0?'<button class="btn soft" data-act="startReview" style="margin-top:10px;width:100%">↻ 开始复习</button>':'')+
    '</div>'+

    '<div class="panel note"><span class="badge">核心数据</span>'+
    '<h3 style="margin-top:16px">词库概况</h3>'+
    '<p class="small">Unique Words：<b>'+uniqueWords().length+'</b><br>Phrases：<b>'+phrases().length+'</b><br>Core 2000：<b>'+core2000().length+'</b><br>Core 3000：<b>'+core3000().length+'</b></p>'+
    '<button class="linkbtn" data-act="reviewWeak" style="margin-top:14px">易错词（'+weakWordsList().length+'） →</button>'+
    '</div>'+
  '</aside></div>'+
  '<div class="footer">词库基于成人高考专升本英语大纲与真题高频词构建。自编练习，并非官方完整考纲或真题。</div>';
}

// ===== 快速背词模式 =====
function startQuick(count){
  const goal=count||state.dailyNewGoal;
  const t=today();
  const alreadyToday=t.new;
  const need=Math.max(0,goal-alreadyToday);
  // 优先取未学的，按level和frequency排序
  let ws=unlearnedWords().slice(0,Math.max(need,20));
  if(ws.length<5){
    // 新词不够，加入弱词
    ws=ws.concat(weakWordsList().slice(0,20));
  }
  if(!ws.length){toast('暂时没有可学习的词，可以去复习或阅读。');return}
  state.session={mode:'quick',queue:ws.map(w=>({id:w.id,stage:'learn'})),done:0,total:ws.length,feedback:null,correct:0,startTime:Date.now()};
  save();view='quick';render();
}

function quickLearn(){
  const s=state.session;
  if(!s||s.mode!=='quick'){
    return header('快速背词')+'<div class="panel"><p>选择每次学习的词数：</p>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      [20,50,80,100,120,150].map(n=>'<button class="btn" data-act="quick'+n+'">'+n+' 词</button>').join('')+
      '</div><p class="muted small" style="margin-top:16px">快速背词只显示 单词/音标/词性/核心意思，操作 认识/模糊/不会 后快速下一词。点击展开查看例句和搭配。</p></div>';
  }
  const item=s.queue[0];
  if(!item){
    const elapsed=Math.round((Date.now()-s.startTime)/1000);
    return header('本组完成')+'<div class="learnwrap panel wordcard">'+
      '<span class="badge green">已保存</span>'+
      '<h2 style="margin-top:24px">完成 '+s.done+' 词，用时 '+elapsed+' 秒</h2>'+
      '<div class="resultnum">'+s.correct+'<span style="font-size:18px"> 认识</span></div>'+
      '<p class="muted">不认识的词会在10分钟后再次出现，并加入复习队列。</p>'+
      '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">'+
      '<button class="btn" data-act="finishQuick">回到首页</button>'+
      '<button class="btn outline" data-act="continueQuick">继续学 '+state.dailyNewGoal+' 词</button>'+
      '<button class="btn soft" data-act="startReview">去复习</button>'+
      '</div></div>';
  }
  const w=getWord(item.id);
  if(!w){s.queue.shift();save();render();return ''}
  const showDetail=item.showDetail;

  return header('快速背词 · '+s.done+' / '+(s.done+s.queue.length))+
  '<div class="learnwrap">'+
    '<div class="row small muted"><button class="linkbtn" data-nav="home">← 暂停</button><span>已完成 '+s.done+' · 还剩 '+s.queue.length+'</span></div>'+
    '<div class="progress"><div style="width:'+Math.min(100,s.done/(s.done+s.queue.length)*100)+'%"></div></div>'+
    '<div class="panel wordcard">'+
      '<span class="badge">Level '+w.level+' · '+(w.tags&&w.tags.includes('Core2000')?'Core 2000':w.tags&&w.tags.includes('Core3000')?'Core 3000':'')+'</span>'+
      '<div class="word" lang="en">'+esc(w.word)+'</div>'+
      '<div class="phonetic">'+esc(w.phonetic||'')+'</div>'+
      '<div class="pos">'+esc(w.partOfSpeech||'')+'</div>'+
      '<button class="speaker" data-speak="'+esc(w.word)+'">◖)) 听发音</button>'+
      '<div class="meaning">'+esc(w.meaning)+'</div>'+
      (w.examMeaning?'<div class="exam-meaning">考试：'+esc(w.examMeaning)+'</div>':'')+
      (showDetail?detailSection(w):(w.example||w.collocations||w.commonUsage||w.examUsage||w.specialMeaning||w.wordFamily||w.confuseWith?'<button class="linkbtn" data-act="toggleDetail" style="margin-top:10px">展开详情（例句/搭配/用法）</button>':''))+
      '<div class="answerbar" style="margin-top:28px">'+
        '<button class="btn" style="background:#26724c" data-act="know">✓ 认识</button>'+
        '<button class="btn" style="background:#d4930a" data-act="fuzzy">~ 模糊</button>'+
        '<button class="btn" style="background:#b44529" data-act="unknown">✗ 不会</button>'+
      '</div>'+
      '<div class="hint">键盘：1=认识 2=模糊 3=不会</div>'+
    '</div>'+
  '</div>';
}

function detailSection(w){
  let html='<div class="example">';
  if(w.example){html+='<p lang="en"><b>例句：</b>'+esc(w.example)+(w.translation?' <button class="linkbtn" data-speak="'+esc(w.example)+'">◖))</button>':'')+'</p>';}
  if(w.translation){html+='<p>'+esc(w.translation)+'</p>';}
  if(w.collocations&&w.collocations.length){html+='<p><b>搭配：</b>'+w.collocations.map(esc).join('；')+'</p>';}
  if(w.commonUsage){html+='<p><b>用法：</b>'+esc(w.commonUsage)+'</p>';}
  if(w.examUsage){html+='<p><b>考试用法：</b>'+esc(w.examUsage)+'</p>';}
  if(w.specialMeaning){html+='<p style="color:#b44529"><b>熟词生义：</b>'+esc(w.specialMeaning)+'</p>';}
  if(w.wordFamily&&w.wordFamily.length){html+='<p><b>同根词：</b>'+w.wordFamily.map(esc).join(', ')+'</p>';}
  if(w.confuseWith&&w.confuseWith.length){html+='<p><b>易混词：</b>'+w.confuseWith.map(esc).join(', ')+'</p>';}
  html+='</div>';
  return html;
}

function quickAnswer(known){
  const s=state.session;if(!s||s.mode!=='quick'||!s.queue[0])return;
  const item=s.queue.shift();
  const correct=known==='know';
  const fuzzy=known==='fuzzy';
  const r=updateWordRecord(item.id,correct,'quick',fuzzy);
  const d=daily();
  if(!state.records[item.id]||state.records[item.id].firstLearned===dateKey())d.new++;
  d.attempts++;if(correct)d.correct++;
  s.done++;s.correct+=correct?1:0;
  // 只有"不会"的词才插入队列后面立即重试；"模糊"的词2天后复习
  if(!correct&&!fuzzy&&!item.retry){
    s.queue.splice(Math.min(3,s.queue.length),0,{id:item.id,stage:'learn',retry:true});
  }
  save();render();
}

// ===== 复习模式 =====
function startReview(){
  const ws=dueWords();
  if(!ws.length){
    // 没有到期词，用弱词
    const weak=weakWordsList();
    if(!weak.length){toast('目前没有需要复习的词，太棒了！可以学新词或阅读。');return}
    ws=weak.slice(0,30);
  }
  const reviewSet=ws.slice(0,Math.min(ws.length,30));
  state.session={mode:'review',queue:reviewSet.map(w=>({id:w.id,stage:'test'})),done:0,total:reviewSet.length,feedback:null,correct:0,startTime:Date.now()};
  save();view='review';render();
}

function reviewView(){
  const s=state.session;
  if(!s||s.mode!=='review'){
    const d=dueWords().length,w=weakWordsList().length;
    return header('复习中心')+'<div class="panel">'+
      '<h2>复习队列</h2>'+
      '<p>到期复习：<b>'+d+'</b> 个 · 易错词：<b>'+w+'</b> 个</p>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      '<button class="btn" data-act="startReview">开始复习（最多30词）</button>'+
      '<button class="btn outline" data-act="reviewAll">复习所有到期词</button>'+
      '</div>'+
      '<p class="muted small" style="margin-top:16px">复习采用四选一释义测试。答错的词会在10分钟后再次出现，并提高复习优先级。</p>'+
      (w>0?'<h3 style="margin-top:20px">易错词列表（前20）</h3><div>'+weakWordsList().slice(0,20).map(w=>'<span class="word-chip">'+esc(w.word)+'</span>').join('')+'</div>':'')+
    '</div>';
  }
  const item=s.queue[0];
  if(!item){
    const elapsed=Math.round((Date.now()-s.startTime)/1000);
    const pct=s.done?Math.round(s.correct/s.done*100):0;
    return header('复习完成')+'<div class="learnwrap panel wordcard">'+
      '<span class="badge green">已保存</span>'+
      '<h2 style="margin-top:24px">复习 '+s.done+' 词，正确率 '+pct+'%</h2>'+
      '<div class="resultnum">'+s.correct+'<span style="font-size:18px"> / '+s.done+' 正确</span></div>'+
      '<p class="muted">用时 '+elapsed+' 秒。答错的词已加入高频复习队列。</p>'+
      '<button class="btn" data-act="finishReview">回到首页</button>'+
      (dueWords().length>0?'<button class="btn outline" style="margin-left:12px" data-act="startReview">继续复习</button>':'')+
    '</div>';
  }
  const w=getWord(item.id);
  if(!w){s.queue.shift();save();render();return ''}
  const key=item.id+'-'+item.stage;
  if(lastQuestion!==key){
    options=s.feedback&&Array.isArray(s.optionIds)&&s.optionIds.length===4?s.optionIds.map(id=>getWord(id)):choices(w);
    lastQuestion=key;s.optionIds=options.map(x=>x.id);
  }
  const fb=s.feedback;
  return header('复习 · '+s.done+' / '+(s.done+s.queue.length))+
  '<div class="learnwrap">'+
    '<div class="row small muted"><button class="linkbtn" data-nav="home">← 暂停</button><span>已完成 '+s.done+' · 还剩 '+s.queue.length+'</span></div>'+
    '<div class="progress"><div style="width:'+Math.min(100,s.done/(s.done+s.queue.length)*100)+'%"></div></div>'+
    '<div class="panel wordcard">'+
      '<span class="badge">复习测试</span>'+
      '<div class="word" lang="en">'+esc(w.word)+'</div>'+
      '<div class="phonetic">'+esc(w.phonetic||'')+'</div>'+
      '<button class="speaker" data-speak="'+esc(w.word)+'">◖)) 听发音</button>'+
      '<p class="muted small">选择它的中文意思</p>'+
      '<div class="choicegrid">'+options.map((o,i)=>'<button class="choice '+(fb?(o.id===w.id?'correct':fb.choice===i?'wrong':''):'')+'" data-choice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o.meaning)+'</button>').join('')+'</div>'+
      (fb?'<div class="feedback" role="status"><b>'+(fb.correct?'答对了。':'这次没记住。')+'</b> '+esc(w.word)+' = '+esc(w.meaning)+'<br>'+(w.examMeaning?'<span class="small">考试：'+esc(w.examMeaning)+'</span>':'')+'</div>'+
      (w.example?'<div class="example"><p lang="en">'+esc(w.example)+'</p>'+(w.translation?'<p>'+esc(w.translation)+'</p>':'')+'</div>':'')+
      '<div class="answerbar"><button class="btn" data-act="next">继续 →</button></div>':
      '<div class="answerbar"><button class="btn outline" data-act="unknown">还不认识，看答案</button></div>')+
    '</div>'+
  '</div>';
}

function choices(w){
  // 优先同词性、同level(±1)的词作干扰项，更有迷惑性
  const samePos=WORDS.filter(x=>x.id!==w.id&&x.meaning!==w.meaning&&!isPhrase(x)&&x.partOfSpeech===w.partOfSpeech&&Math.abs((x.level||0)-(w.level||0))<=1);
  const samePosAny=WORDS.filter(x=>x.id!==w.id&&x.meaning!==w.meaning&&!isPhrase(x)&&x.partOfSpeech===w.partOfSpeech);
  const pool=samePos.length>=3?samePos:(samePosAny.length>=3?samePosAny:WORDS.filter(x=>x.id!==w.id&&x.meaning!==w.meaning&&!isPhrase(x)));
  const picked=[w];
  while(picked.length<4&&pool.length){
    const p=pool[Math.floor(Math.random()*pool.length)];
    if(!picked.some(x=>x.meaning===p.meaning))picked.push(p);
  }
  while(picked.length<4)picked.push({id:'fake'+picked.length,meaning:'其他'});
  return picked.sort(()=>Math.random()-.5);
}

function answer(i){
  const s=state.session;if(!s||s.feedback||s.queue[0]?.stage!=='test')return;
  const id=s.queue[0].id,correct=i>=0&&options[i]?.id===id;
  updateWordRecord(id,correct,s.mode);
  const d=daily();d.attempts++;if(correct)d.correct++;d.reviews++;
  s.feedback={correct,choice:i};s.done++;s.correct+=correct?1:0;
  save();render();
}

function next(){
  const s=state.session;if(!s?.feedback)return;
  const item=s.queue.shift();
  if(!s.feedback.correct&&!item.retry)s.queue.splice(Math.min(3,s.queue.length),0,{id:item.id,stage:'test',retry:true});
  s.feedback=null;save();render();
}

// ===== 词汇测试 =====
function startTest(count){
  const n=count||20;
  // 从已学词中随机抽取
  const learned=WORDS.filter(w=>state.records[w.id]&&state.records[w.id].status!=='new');
  if(learned.length<4){toast('至少学过4个词才能测试。先去背词吧！');return}
  const pool=learned.length>=n?learned:learned;
  const shuffled=[...pool].sort(()=>Math.random()-.5).slice(0,n);
  state.session={mode:'test',queue:shuffled.map(w=>({id:w.id,stage:'test',qtype:['en2zh','zh2en','context','collocation'][Math.floor(Math.random()*4)]})),done:0,total:shuffled.length,feedback:null,correct:0,startTime:Date.now(),wrongList:[]};
  save();view='test';render();
}

function testView(){
  const s=state.session;
  if(!s||s.mode!=='test'){
    return header('词汇测试')+'<div class="panel">'+
      '<h2>选择测试题量</h2>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      [20,50,100].map(n=>'<button class="btn" data-act="test'+n+'">'+n+' 题</button>').join('')+
      '</div>'+
      '<p class="muted small" style="margin-top:16px">题型包括：英译中、中译英、语境选义、固定搭配。从已学词中随机抽取。</p>'+
      '<p class="small">已学词：<b>'+WORDS.filter(w=>state.records[w.id]).length+'</b> 个可用于测试</p>'+
    '</div>';
  }
  const item=s.queue[0];
  if(!item){
    const pct=s.done?Math.round(s.correct/s.done*100):0;
    const elapsed=Math.round((Date.now()-s.startTime)/1000);
    return header('测试完成')+'<div class="learnwrap panel wordcard">'+
      '<span class="badge green">测试结果</span>'+
      '<h2 style="margin-top:24px">正确率 '+pct+'%</h2>'+
      '<div class="resultnum">'+s.correct+'<span style="font-size:18px"> / '+s.done+' 正确</span></div>'+
      '<p class="muted">用时 '+elapsed+' 秒。</p>'+
      (s.wrongList&&s.wrongList.length?'<div class="example"><p><b>需要复习的词：</b></p><p>'+s.wrongList.map(id=>{const w=getWord(id);return w?esc(w.word)+' ('+esc(w.meaning)+')':''}).join('；')+'</p></div>':'')+
      '<div class="answerbar"><button class="btn" data-act="finishTest">回到首页</button>'+
      (s.wrongList&&s.wrongList.length?'<button class="btn outline" data-act="reviewWrong">复习错题</button>':'')+'</div>'+
    '</div>';
  }
  const w=getWord(item.id);
  if(!w){s.queue.shift();save();render();return ''}
  const fb=s.feedback;
  const qtype=item.qtype||'en2zh';

  let questionHtml='';
  if(qtype==='en2zh'){
    if(lastQuestion!==item.id+qtype){options=choices(w);lastQuestion=item.id+qtype;s.optionIds=options.map(x=>x.id)}
    questionHtml='<div class="word" lang="en">'+esc(w.word)+'</div><div class="phonetic">'+esc(w.phonetic||'')+'</div><p class="muted small">选择中文意思</p><div class="choicegrid">'+options.map((o,i)=>'<button class="choice '+(fb?(o.id===w.id?'correct':fb.choice===i?'wrong':''):'')+'" data-testchoice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o.meaning)+'</button>').join('')+'</div>';
  }else if(qtype==='zh2en'){
    if(lastQuestion!==item.id+qtype){
      const pool=WORDS.filter(x=>x.id!==w.id&&!isPhrase(x));
      const picked=[w];while(picked.length<4&&pool.length){const p=pool[Math.floor(Math.random()*pool.length)];if(!picked.some(x=>x.word===p.word))picked.push(p)}
      options=picked.sort(()=>Math.random()-.5);lastQuestion=item.id+qtype;s.optionIds=options.map(x=>x.id);
    }
    questionHtml='<div class="meaning" style="font-size:28px">'+esc(w.meaning)+'</div><p class="muted small">选择对应的英文单词</p><div class="choicegrid">'+options.map((o,i)=>'<button class="choice '+(fb?(o.id===w.id?'correct':fb.choice===i?'wrong':''):'')+'" data-testchoice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. <span lang="en">'+esc(o.word)+'</span></button>').join('')+'</div>';
  }else if(qtype==='context'){
    // 语境选义：用例句考词义
    const ex=w.example||('The '+w.word+' is important.');
    questionHtml='<div class="example"><p lang="en">'+ex.replace(new RegExp(w.word,'i'),'_____')+'</p>'+(w.translation?'<p>'+w.translation.replace(new RegExp(w.meaning.split('；')[0],'g'),'_____')+'</p>':'')+'</div><p class="muted small">根据语境，_____ 是什么意思？</p>';
    if(lastQuestion!==item.id+qtype){options=choices(w);lastQuestion=item.id+qtype;s.optionIds=options.map(x=>x.id)}
    questionHtml+='<div class="choicegrid">'+options.map((o,i)=>'<button class="choice '+(fb?(o.id===w.id?'correct':fb.choice===i?'wrong':''):'')+'" data-testchoice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o.meaning)+'</button>').join('')+'</div>';
  }else{
    // 固定搭配
    const colls=w.collocations&&w.collocations.length?w.collocations:[''];
    questionHtml='<div class="word" lang="en">'+esc(w.word)+'</div><p class="muted small">选择正确的搭配</p>';
    if(lastQuestion!==item.id+qtype){
      const correctColl=colls[0]||w.word;
      const wrongs=['very '+w.word,'much '+w.word,'many '+w.word];
      options=[{id:w.id,meaning:correctColl},{id:'w1',meaning:wrongs[0]},{id:'w2',meaning:wrongs[1]},{id:'w3',meaning:wrongs[2]}].sort(()=>Math.random()-.5);
      lastQuestion=item.id+qtype;s.optionIds=options.map(x=>x.id);
    }
    questionHtml+='<div class="choicegrid">'+options.map((o,i)=>'<button class="choice '+(fb?(o.id===w.id?'correct':fb.choice===i?'wrong':''):'')+'" data-testchoice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o.meaning)+'</button>').join('')+'</div>';
  }

  return header('词汇测试 · '+s.done+' / '+s.total)+
  '<div class="learnwrap">'+
    '<div class="progress"><div style="width:'+Math.min(100,s.done/s.total*100)+'%"></div></div>'+
    '<div class="panel wordcard">'+
      '<span class="badge">'+({en2zh:'英译中',zh2en:'中译英',context:'语境选义',collocation:'固定搭配'}[qtype]||'测试')+'</span>'+
      questionHtml+
      (fb?'<div class="feedback"><b>'+(fb.correct?'✓ 正确':'✗ 错误')+'</b> '+esc(w.word)+' = '+esc(w.meaning)+'</div><div class="answerbar"><button class="btn" data-act="nextTest">下一题 →</button></div>':'')+
    '</div>'+
  '</div>';
}

function testAnswer(i){
  const s=state.session;if(!s||s.mode!=='test'||s.feedback||!s.queue[0])return;
  const id=s.queue[0].id,correct=options[i]?.id===id;
  updateWordRecord(id,correct,'test');
  const d=daily();d.attempts++;if(correct)d.correct++;d.testTotal++;if(correct)d.testCorrect++;
  s.feedback={correct,choice:i};s.done++;s.correct+=correct?1:0;
  if(!correct&&!s.wrongList.includes(id))s.wrongList.push(id);
  save();render();
}

// ===== 词库浏览 =====
function wordlist(){
  const ws=WORDS.filter(w=>{
    if(filter==='all')return true;
    if(filter==='learned')return state.records[w.id];
    if(filter==='unlearned')return !state.records[w.id];
    if(filter==='mistakes')return weakWordsList().some(x=>x.id===w.id);
    if(filter==='core2000')return w.tags&&w.tags.includes('Core2000');
    if(filter==='core3000')return w.tags&&w.tags.includes('Core3000');
    if(filter==='phrases')return isPhrase(w);
    if(filter.startsWith('level'))return w.level===parseInt(filter.split('l')[1]);
    return true;
  }).filter(w=>!query||(w.word+' '+w.meaning).toLowerCase().includes(query.toLowerCase()));

  const levelNames=['基础起步','最高频核心','成考核心','阅读高频','考试识别','低频补充'];
  const pageSize=100;
  const totalPages=Math.max(1,Math.ceil(ws.length/pageSize));
  if(wordPage>=totalPages)wordPage=totalPages-1;
  const pageWords=ws.slice(wordPage*pageSize,(wordPage+1)*pageSize);
  return header('我的词库')+
  '<p class="muted small">共 '+uniqueWords().length+' 词 + '+phrases().length+' 短语。Core 2000：'+core2000().length+' · Core 3000：'+core3000().length+'</p>'+
  '<input class="search" id="search" aria-label="搜索" placeholder="搜索单词或中文意思" value="'+esc(query)+'">'+
  '<div class="filters">'+
    [['all','全部'],['learned','已学'],['unlearned','未学'],['mistakes','易错'],['core2000','Core2000'],['core3000','Core3000'],['phrases','短语'],
    ...[0,1,2,3,4,5].map(l=>['level'+l,'L'+l+' '+levelNames[l]])
    ].map(([v,l])=>'<button data-filter="'+v+'" class="'+(filter===v?'selected':'')+'">'+l+'</button>').join('')+
  '</div>'+
  '<div class="panel"><div class="row"><h3>'+ws.length+' 个词条</h3><span class="small muted">第 '+(wordPage+1)+'/'+totalPages+' 页 · 点击查看详情</span></div>'+
  '<div id="wordrows">'+(pageWords.length?pageWords.map(w=>{
    const r=state.records[w.id];
    const statusText=r?(r.status==='mastered'?'熟练':r.status==='recognized'?'认识':r.status==='fuzzy'?'模糊':'学习中'):'未学习';
    return '<div class="wordrow"><div><button class="linkbtn" style="padding:0;text-align:left" data-detail="'+w.id+'"><strong lang="en">'+esc(w.word)+'</strong></button><small>'+statusText+' · L'+w.level+(w.tags&&w.tags.includes('Core2000')?' · Core2000':'')+'</small></div><span class="small">'+esc(w.partOfSpeech||'')+' '+esc(w.meaning)+'</span><button class="speaker" data-speak="'+esc(w.word)+'">◖))</button></div>';
  }).join(''):'<div class="empty">没有找到对应单词。</div>')+'</div>'+
  (totalPages>1?'<div class="row" style="margin-top:16px;justify-content:center;gap:8px;flex-wrap:wrap">'+
    '<button class="btn outline" data-act="wordPrev" '+(wordPage===0?'disabled':'')+'>← 上一页</button>'+
    '<span class="small muted" style="align-self:center">第 '+(wordPage+1)+' / '+totalPages+' 页</span>'+
    '<button class="btn outline" data-act="wordNext" '+(wordPage>=totalPages-1?'disabled':'')+'>下一页 →</button>'+
  '</div>':'')+'</div>';
}

function detail(id){
  const w=getWord(id);if(!w)return;
  const r=state.records[id];
  const dlg=document.createElement('dialog');
  dlg.style.cssText='border:1px solid #e3e8f2;border-radius:18px;max-width:650px;width:92%;padding:28px;color:#172443;max-height:90vh;overflow-y:auto';
  dlg.innerHTML='<button class="btn outline" id="closedialog">关闭</button>'+
    '<div class="word" style="font-size:40px">'+esc(w.word)+'</div>'+
    '<div class="phonetic">'+esc(w.phonetic||'')+' '+esc(w.partOfSpeech||'')+'</div>'+
    '<div class="meaning">'+esc(w.meaning)+'</div>'+
    (w.examMeaning?'<div class="exam-meaning">考试：'+esc(w.examMeaning)+'</div>':'')+
    (r?'<p class="small muted">学习状态：'+r.status+' · 正确'+r.correctCount+'次 · 错误'+r.wrongCount+'次 · 连续正确'+r.streak+'次</p>':'')+
    detailSection(w)+
    '<div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">'+
    '<button class="btn" id="addReview">加入复习</button>'+
    '<button class="btn outline" id="speakWord">◖)) 朗读</button>'+
    '</div>';
  document.body.append(dlg);dlg.showModal();
  dlg.querySelector('#closedialog').onclick=()=>dlg.close();
  dlg.onclose=()=>dlg.remove();
  dlg.querySelector('#speakWord').onclick=()=>speak(w.word);
  dlg.querySelector('#addReview').onclick=()=>{
    const rec=state.records[id]??={status:'learning',firstLearned:dateKey(),lastReviewed:dateKey(),correctCount:0,wrongCount:0,streak:0,nextReview:Date.now(),level:0,readingAppearances:0,readingLookups:0};
    rec.nextReview=Date.now();rec.status='fuzzy';
    state.records[id]=rec;save();toast('已加入复习队列');dlg.close();
  };
  dlg.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak));
}

// ===== 阅读（保留现有功能，后续大改） =====
function reading(){
  if(typeof READINGS==='undefined'||!READINGS.length)return header('阅读训练')+'<div class="panel"><p>阅读题库正在重建中...</p></div>';
  const r=READINGS[readingIndex],saved=state.readings[dateKey()+'-'+readingIndex];
  const prev=(readingIndex-1+READINGS.length)%READINGS.length,next=(readingIndex+1)%READINGS.length;
  const nav='<div class="row" style="margin-bottom:16px"><button class="btn outline" data-reading="'+prev+'">← 上一篇</button><span class="badge">第 '+(readingIndex+1)+' / '+READINGS.length+' 篇</span><button class="btn outline" data-reading="'+next+'">下一篇 →</button></div>';
  // 词汇高亮：已学过的词加class
  const learnedWords=new Set(Object.keys(state.records||{}).map(id=>{const w=getWord(id);return w?w.word.toLowerCase():''}).filter(Boolean));
  const highlightWord=w=>{
    const low=w.toLowerCase();
    const cls=learnedWords.has(low)?' class="word-known"':'';
    return '<button data-gloss="'+w+'"'+cls+'>'+w+'</button>';
  };
  const formalCount=READINGS.filter(x=>x.level==='D'||x.type==='成考标准').length;
  const modeToggle='<div class="row" style="margin-bottom:12px"><span class="small muted">模式：</span>'+
    '<button class="btn '+(readingMode==='study'?'':'outline')+'" data-act="setStudyMode" style="padding:8px 14px;font-size:13px">📖 学习模式（可查词）</button>'+
    '<button class="btn '+(readingMode==='exam'?'':'outline')+'" data-act="setExamMode" style="padding:8px 14px;font-size:13px">📝 考试模式（禁查词）</button></div>';
  const renderText=(text)=>readingMode==='exam'&&!saved?text.replace(/\n/g,'<br>'):text.replace(/\n/g,'<br>').replace(/[A-Za-z]+/g,highlightWord);
  return header('阅读训练','成考标准'+formalCount+'篇 · 基础过渡'+(READINGS.length-formalCount)+'篇 · '+(readingMode==='exam'?'考试模式：提交后可查词和翻译':'学习模式：点击单词查词，已学词高亮'))+'<div class="learnwrap">'+nav+modeToggle+'<div class="panel"><div class="row"><h2>'+esc(r.title)+'</h2><span class="badge">'+(r.type||'阅读')+(r.category?' · '+esc(r.category):'')+'</span></div>'+
  (readingMode==='exam'&&!saved?'<p class="small muted">考试模式：请独立完成，提交后可查看查词、翻译和解析。</p>':'<p class="small muted">点击英文单词可查意思。<span class="word-known" style="border-bottom:2px solid #26724c;padding:0 2px">绿色下划线</span>表示你已学过的词。</p>')+
  (r.questions&&r.questions.length?
    // 多题模式
    '<p class="reading" lang="en">'+renderText(r.text||'')+'</p>'+
    (gloss&&(readingMode==='study'||saved)?'<div class="tip" role="status">'+esc(gloss)+'</div>':'')+
    ((readingMode==='study'||saved)?'<div class="row"><button class="linkbtn" data-act="translate">'+(translation?'收起':'查看')+'全文翻译</button><button class="speaker" data-speak="'+esc(r.text||'')+'">◖)) 朗读全文</button></div>':'')+
    (translation&&(readingMode==='study'||saved)?'<div class="tip">'+esc(r.translation||'')+'</div>':'')+
    '<div class="reading-questions">'+r.questions.map((q,qi)=>{
      const userAns=saved&&saved.answers?saved.answers[qi]:null;
      const exp=q.explanation?('<b>['+esc(q.questionType||'')+']</b> 定位：'+esc(q.explanation.location||'')+'<br><b>正确答案：</b>'+esc(q.explanation.correctReason||'')+(q.explanation.wrongA?'<br>A: '+esc(q.explanation.wrongA):'')+(q.explanation.wrongB?'<br>B: '+esc(q.explanation.wrongB):'')+(q.explanation.wrongC?'<br>C: '+esc(q.explanation.wrongC):'')+(q.explanation.wrongD?'<br>D: '+esc(q.explanation.wrongD):'')):(q.explain||'');
      return '<div class="qblock"><h3>'+(qi+1)+'. '+esc(q.question)+'</h3><div class="choicegrid">'+q.options.map((o,i)=>'<button class="choice '+(saved?(i===q.correct?'correct':userAns===i?'wrong':''):'')+'" data-rq="'+readingIndex+'-'+qi+'-'+i+'" '+(saved?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o)+'</button>').join('')+'</div>'+(saved?'<div class="feedback small">'+exp+'</div>':'')+'</div>';
    }).join('')+'</div>'+
    (!saved?'<div class="answerbar"><button class="btn" data-act="submitReading">提交本篇答案</button></div>':'')
    :
    // 单题模式（兼容旧数据）
    '<h3>'+esc(r.question)+'</h3><p class="reading" lang="en">'+r.text.replace(/[A-Za-z]+/g,highlightWord)+'</p>'+
    (gloss?'<div class="tip" role="status">'+esc(gloss)+'</div>':'')+
    '<div class="row"><button class="linkbtn" data-act="translate">'+(translation?'收起':'查看')+'全文翻译</button><button class="speaker" data-speak="'+esc(r.text)+'">◖)) 朗读全文</button></div>'+
    (translation?'<div class="tip">'+esc(r.translation||'')+'</div>':'')+
    '<div class="choicegrid">'+(r.options||[]).map((o,i)=>'<button class="choice '+(saved?(i===r.correct?'correct':saved.choice===i?'wrong':''):'')+'" data-reading-choice="'+i+'" '+(saved?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o)+'</button>').join('')+'</div>'+
    (saved?'<div class="feedback"><b>'+(saved.correct?'答对了！':'正确答案是 '+String.fromCharCode(65+r.correct)+'。')+'</b><br>'+esc(r.explain||'')+'</div>':'')
  )+
  '</div>'+nav+
  '<div class="row" style="margin-top:16px"><button class="btn" data-act="startReadingExam">📝 5篇20题阅读实战</button><span class="small muted">模拟真实考试阅读部分</span></div>'+
  '<p class="footer">阅读题库正在逐步重建为成考标准难度。</p></div>';
}

// 阅读答题（多题模式）
let readingAnswers={};
function answerReadingQuestion(readingIdx,qIdx,choice){
  const key=readingIdx+'-'+qIdx;
  readingAnswers[key]=choice;
}
function submitReading(){
  const r=READINGS[readingIndex];
  if(!r||!r.questions||!r.questions.length)return;
  const answers=r.questions.map((q,qi)=>readingAnswers[readingIndex+'-'+qi]??-1);
  const correct=answers.filter((a,i)=>a===r.questions[i].correct).length;
  state.readings[dateKey()+'-'+readingIndex]={correctCount:correct,total:r.questions.length,correct:correct===r.questions.length,choice:answers[0],answers};
  // 记录阅读中遇到的生词
  save();toast('本篇答对 '+correct+' / '+r.questions.length+' 题');render();
}

// ===== 5篇20题阅读实战 =====
let examSession=null;
function startReadingExam(){
  const formal=READINGS.filter(r=>r.level==='D'||r.type==='成考标准');
  if(formal.length<5){toast('成考标准阅读不足5篇，当前'+formal.length+'篇');return;}
  // 随机选5篇
  const shuffled=[...formal].sort(()=>Math.random()-0.5).slice(0,5);
  examSession={
    articles:shuffled,
    currentArticle:0,
    answers:{},
    startTime:Date.now(),
    submitted:false
  };
  view='readingExam';render();
}
function readingExamView(){
  if(!examSession)return header('阅读实战')+'<div class="panel"><p>请从阅读训练页开始实战。</p></div>';
  const s=examSession;
  if(s.submitted){
    // 结果页
    let totalCorrect=0,totalQ=0;
    const typeStats={};
    s.articles.forEach((art,ai)=>{
      art.questions.forEach((q,qi)=>{
        totalQ++;
        const userAns=s.answers[ai+'-'+qi];
        if(userAns===q.correct)totalCorrect++;
        const t=q.questionType||'其他';
        if(!typeStats[t])typeStats[t]={correct:0,total:0};
        typeStats[t].total++;
        if(userAns===q.correct)typeStats[t].correct++;
      });
    });
    const elapsed=Math.round((Date.now()-s.startTime)/1000);
    const mins=Math.floor(elapsed/60),secs=elapsed%60;
    return header('阅读实战结果')+'<div class="learnwrap"><div class="panel wordcard">'+
      '<span class="badge green">已完成</span>'+
      '<h2 style="margin-top:24px">正确率 '+Math.round(totalCorrect/totalQ*100)+'%</h2>'+
      '<div class="resultnum">'+totalCorrect+'<span style="font-size:18px"> / '+totalQ+' 题正确</span></div>'+
      '<p>用时：'+mins+'分'+secs+'秒</p>'+
      '<h3 style="margin-top:20px">各题型正确率</h3>'+
      '<div>'+Object.entries(typeStats).map(([t,st])=>'<div class="wordrow"><span>'+esc(t)+'</span><span class="small">'+st.correct+'/'+st.total+' ('+Math.round(st.correct/st.total*100)+'%)</span></div>').join('')+'</div>'+
      '<h3 style="margin-top:20px">各篇详情</h3>'+
      '<div>'+s.articles.map((art,ai)=>{
        const ac=art.questions.filter((q,qi)=>s.answers[ai+'-'+qi]===q.correct).length;
        return '<div class="wordrow"><span>'+(ai+1)+'. '+esc(art.title)+'</span><span class="small">'+ac+'/'+art.questions.length+'</span></div>';
      }).join('')+'</div>'+
      '<div class="answerbar" style="margin-top:24px"><button class="btn" data-act="examBack">返回阅读</button><button class="btn outline" data-act="startReadingExam">再来一次</button></div>'+
      '</div></div>';
  }
  // 做题页
  const art=s.articles[s.currentArticle];
  const learnedWords=new Set(Object.keys(state.records||{}).map(id=>{const w=getWord(id);return w?w.word.toLowerCase():''}).filter(Boolean));
  const highlightWord=w=>{
    const low=w.toLowerCase();
    const cls=learnedWords.has(low)?' class="word-known"':'';
    return '<button data-gloss="'+w+'"'+cls+'>'+w+'</button>';
  };
  return header('阅读实战 · 第 '+(s.currentArticle+1)+' / 5 篇')+
  '<div class="learnwrap"><div class="panel">'+
  '<div class="row"><h2>'+esc(art.title)+'</h2><span class="badge">'+esc(art.category||'')+'</span></div>'+
  '<p class="small muted">考试模式：禁止查词，提交后才能查看解析。已学词绿色下划线。</p>'+
  '<p class="reading" lang="en">'+(art.text||'').replace(/\n/g,'<br>').replace(/[A-Za-z]+/g,highlightWord)+'</p>'+
  '<div class="reading-questions">'+art.questions.map((q,qi)=>{
    const userAns=s.answers[s.currentArticle+'-'+qi];
    return '<div class="qblock"><h3>'+(qi+1)+'. '+esc(q.question)+'</h3><div class="choicegrid">'+q.options.map((o,i)=>'<button class="choice '+(userAns===i?'selected':'')+'" data-examq="'+s.currentArticle+'-'+qi+'-'+i+'">'+String.fromCharCode(65+i)+'. '+esc(o)+'</button>').join('')+'</div></div>';
  }).join('')+'</div>'+
  '<div class="answerbar">'+
    (s.currentArticle>0?'<button class="btn outline" data-act="examPrev">← 上一篇</button>':'')+
    '<span class="small">第 '+(s.currentArticle+1)+' / 5 篇</span>'+
    (s.currentArticle<4?'<button class="btn" data-act="examNext">下一篇 →</button>':'<button class="btn" data-act="examSubmit">提交全部答案</button>')+
  '</div></div></div>';
}
function examAnswer(articleIdx,qIdx,choice){
  if(!examSession||examSession.submitted)return;
  examSession.answers[articleIdx+'-'+qIdx]=choice;
  render();
}
function examSubmit(){
  if(!examSession)return;
  examSession.submitted=true;
  // 记录实战成绩
  if(!state.examHistory)state.examHistory=[];
  let correct=0,total=0;
  examSession.articles.forEach((art,ai)=>art.questions.forEach((q,qi)=>{total++;if(examSession.answers[ai+'-'+qi]===q.correct)correct++;}));
  state.examHistory.push({date:dateKey(),correct,total,time:Math.round((Date.now()-examSession.startTime)/1000)});
  save();render();
}

// ===== 完形填空 =====
const CLOZE_TESTS=(typeof CLOZE_DATA!=="undefined"&&Array.isArray(CLOZE_DATA)&&CLOZE_DATA.length)?CLOZE_DATA:[];
let clozeIndex=0,clozeAnswers={},clozeSubmitted=false;
function clozeView(){
  if(!CLOZE_TESTS.length){
    return header('完形填空')+'<div class="panel"><h2>完形填空</h2><p class="muted">完形填空题库正在建设中。将按成考标准：约200词、15空、4选1，考查上下文/词义辨析/固定搭配/连接关系/语法/逻辑。</p><h3 style="margin-top:20px">即将上线</h3><div style="display:flex;gap:8px;flex-wrap:wrap">'+['教育','工作','健康','科技','环境','文化','社会','人物','心理','生活'].map(t=>'<span class="word-chip">'+t+'</span>').join('')+'</div></div>';
  }
  const c=CLOZE_TESTS[clozeIndex];
  const saved=state.clozes?state.clozes[c.id]:null;
  const prev=(clozeIndex-1+CLOZE_TESTS.length)%CLOZE_TESTS.length,next=(clozeIndex+1)%CLOZE_TESTS.length;
  const nav='<div class="row" style="margin-bottom:16px"><button class="btn outline" data-cloze="'+prev+'">← 上一篇</button><span class="badge">第 '+(clozeIndex+1)+' / '+CLOZE_TESTS.length+' 篇</span><button class="btn outline" data-cloze="'+next+'">下一篇 →</button></div>';
  // 渲染文章，空格用按钮替换
  const renderText=(text)=>{
    return text.replace(/___(\d+)___/g,(m,n)=>{
      const blank=c.blanks.find(b=>b.index===+n);
      if(!blank)return m;
      const userAns=clozeSubmitted?(clozeAnswers[n]??-1):(clozeAnswers[n]??-1);
      const isCorrect=clozeSubmitted&&userAns===blank.correct;
      const isWrong=clozeSubmitted&&userAns!==blank.correct&&userAns>=0;
      return '<button class="cloze-blank '+(isCorrect?'correct':isWrong?'wrong':'')+'" data-clozeblank="'+n+'">'+(userAns>=0?String.fromCharCode(65+userAns):'___'+n+'___')+'</button>';
    });
  };
  return header('完形填空','成考标准 · 约200词 · 15空 · 4选1')+'<div class="learnwrap">'+nav+'<div class="panel">'+
  '<div class="row"><h2>'+esc(c.title)+'</h2><span class="badge">'+esc(c.category||'')+'</span></div>'+
  '<p class="small muted">点击空格选择答案。提交后查看解析。</p>'+
  '<p class="reading cloze-text" lang="en">'+renderText(c.text)+'</p>'+
  // 当前选中空格的选项
  (clozeCurrentBlank?(()=>{
    const b=c.blanks.find(x=>x.index===clozeCurrentBlank);
    if(!b)return '';
    return '<div class="panel" style="margin-top:16px;background:#f8f9fa"><h4>第 '+b.index+' 空 <span class="badge">'+esc(b.testType||'')+'</span></h4><div class="choicegrid">'+b.options.map((o,i)=>'<button class="choice '+(clozeAnswers[b.index]===i?'selected':'')+(clozeSubmitted?(i===b.correct?'correct':clozeAnswers[b.index]===i?'wrong':''):'')+'" data-clozechoice="'+b.index+'-'+i+'" '+(clozeSubmitted?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o)+'</button>').join('')+'</div>'+(clozeSubmitted?'<div class="feedback small"><b>正确答案：'+String.fromCharCode(65+b.correct)+'</b><br>'+esc(b.explanation||'')+'</div>':'')+'</div>';
  })():'')+
  (!clozeSubmitted?'<div class="answerbar"><button class="btn" data-act="submitCloze">提交本篇答案</button></div>':
  '<div class="answerbar"><button class="btn outline" data-act="resetCloze">重新做</button></div>')+
  '</div>'+nav+'</div>';
}
let clozeCurrentBlank=null;
function answerCloze(blankIdx,choice){
  if(clozeSubmitted)return;
  clozeAnswers[blankIdx]=choice;
  clozeCurrentBlank=blankIdx;
  render();
}
function submitCloze(){
  const c=CLOZE_TESTS[clozeIndex];
  if(!c)return;
  clozeSubmitted=true;
  let correct=0;
  c.blanks.forEach(b=>{if(clozeAnswers[b.index]===b.correct)correct++;});
  if(!state.clozes)state.clozes={};
  state.clozes[c.id]={correct,total:c.blanks.length,answers:{...clozeAnswers},date:dateKey()};
  save();toast('本篇答对 '+correct+' / '+c.blanks.length+' 空');render();
}
function resetCloze(){
  clozeAnswers={};clozeSubmitted=false;clozeCurrentBlank=null;render();
}

// ===== 长难句（优先使用外部sentences.js数据，否则用内置5句） =====
const _BUILTIN_SENTENCES=[
  {en:'Although many people believe that technology makes life easier, some researchers argue that it can also create new forms of stress.',zh:'虽然许多人认为技术让生活更容易，但一些研究者认为它也会带来新的压力。',structure:'主句：some researchers argue。Although引导让步状语从句；两个that引导宾语从句。',grammar:'让步状语从句 + 宾语从句'},
  {en:'The book that I borrowed from the library last week provides a clear explanation of how the human brain stores memories.',zh:'我上周从图书馆借的那本书清楚地解释了人脑如何储存记忆。',structure:'主句：The book provides explanation。that引导定语从句修饰book；how引导宾语从句。',grammar:'定语从句 + 宾语从句'},
  {en:'If students want to improve their English quickly, they should spend at least thirty minutes every day reading articles that are slightly above their current level.',zh:'如果学生想快速提高英语，他们应该每天至少花30分钟阅读略高于当前水平的文章。',structure:'主句：they should spend time reading。If引导条件状语从句；that引导定语从句。',grammar:'条件状语从句 + 定语从句 + spend time doing'},
  {en:'What surprised me most was that the students who had practiced every day scored much higher than those who only studied before the exam.',zh:'最让我惊讶的是，每天练习的学生比那些只在考试前学习的学生得分高得多。',structure:'主句：What surprised me was that...。What引导主语从句；that引导表语从句；两个who引导定语从句。',grammar:'主语从句 + 表语从句 + 定语从句 + 比较级'},
  {en:'Because the cost of living has increased rapidly in recent years, many young people find it difficult to save money even though they work full-time.',zh:'由于近年来生活成本快速上涨，许多年轻人发现即使全职工作也很难存钱。',structure:'主句：many young people find it difficult。Because引导原因状语从句；even though引导让步状语从句；it作形式宾语。',grammar:'原因状语从句 + 让步状语从句 + 形式宾语it'}
];
// 统一格式：兼容外部{sentence,translation,structure,grammar,keywords,difficulty}和内置{en,zh,structure,grammar}
const _EXT_SENTENCES=(typeof LONG_SENTENCES!=="undefined"&&Array.isArray(LONG_SENTENCES)&&LONG_SENTENCES.length>5)?LONG_SENTENCES:null;
const LONG_SENTENCES=_EXT_SENTENCES?
  _EXT_SENTENCES.map(s=>({en:s.sentence||s.en,zh:s.translation||s.zh,structure:s.structure,grammar:s.grammar,keywords:s.keywords||[],difficulty:s.difficulty||2})):
  _BUILTIN_SENTENCES;
let sentenceIndex=0;
function sentence(){
  const s=LONG_SENTENCES[sentenceIndex%LONG_SENTENCES.length];
  const dailyCount=Math.min(5,LONG_SENTENCES.length);
  const todayStart=(dayNumber()-1)*dailyCount%LONG_SENTENCES.length;
  return header('每日长难句','先找主干，再看翻译 · 共 '+LONG_SENTENCES.length+' 句 · 今日推荐 '+dailyCount+' 句')+
  '<div class="learnwrap"><div class="panel">'+
    '<span class="badge">第 '+(sentenceIndex%LONG_SENTENCES.length+1)+' / '+LONG_SENTENCES.length+' 句</span>'+
    '<p class="reading" lang="en" style="margin-top:16px">'+esc(s.en)+'</p>'+
    '<button class="speaker" data-speak="'+esc(s.en)+'">◖)) 朗读</button>'+
    '<div class="answerbar" style="margin-top:20px">'+
      '<button class="btn soft" data-act="showStructure">查看结构</button>'+
      '<button class="btn soft" data-act="showTranslation">查看翻译</button>'+
      '<button class="btn soft" data-act="showGrammar">查看语法</button>'+
    '</div>'+
    '<div id="sentenceDetail"></div>'+
    '<div class="row" style="margin-top:20px">'+
      '<button class="btn outline" data-act="prevSentence">← 上一句</button>'+
      '<button class="btn outline" data-act="nextSentence">下一句 →</button>'+
    '</div>'+
  '</div>'+
  '<div class="tip"><b>练习方法：</b>先自己读一遍 → 圈出谓语动词找主干 → 猜意思 → 再看结构和翻译。</div></div>';
}

function showSentenceDetail(type){
  const s=LONG_SENTENCES[sentenceIndex%LONG_SENTENCES.length];
  const el=$('#sentenceDetail');
  if(!el)return;
  let html=el.innerHTML;
  if(type==='structure')html+='<div class="feedback"><b>句子结构：</b>'+esc(s.structure)+'</div>';
  if(type==='translation')html+='<div class="feedback"><b>翻译：</b>'+esc(s.zh)+'</div>';
  if(type==='grammar')html+='<div class="feedback"><b>语法点：</b>'+esc(s.grammar)+'</div>';
  el.innerHTML=html;
}

// ===== 语法（占位，后续完整开发） =====
// ===== 语法系统框架 =====
// 语法点数据（优先从外部grammar.js加载，否则用占位）
const _GRAMMAR_PLACEHOLDER=[
  {id:"g01",title:"一般现在时",category:"时态",frequency:10,level:1,explanation:"表示经常发生的动作或存在的状态。关键词：always, usually, often, sometimes, every day。第三人称单数动词加s/es。",examples:[{en:"She works in a hospital.",zh:"她在医院工作。"},{en:"They usually go to school by bus.",zh:"他们通常坐公交上学。"}],breakdown:"先找主语：She/They。再找动词：works/go。第三人称单数she用works，复数they用原形go。",examTip:"成考常考第三人称单数变化，以及时间标志词判断时态。",commonMistakes:["忘记第三人称单数加s","把一般现在时和现在进行时混淆"],basicQuestions:[
    {question:"She ___ to school every day.",options:["go","goes","going","went"],correct:1,type:"基础题",explanation:"主语she是第三人称单数，every day表示经常性动作，用一般现在时，动词加es→goes。"},
    {question:"They ___ football on weekends.",options:["play","plays","playing","played"],correct:0,type:"基础题",explanation:"主语they是复数，on weekends表示经常性，用一般现在时，动词用原形play。"},
    {question:"My father ___ in a hospital.",options:["work","works","working","worked"],correct:1,type:"基础题",explanation:"主语my father是第三人称单数，用一般现在时，动词加s→works。"}
  ],examQuestions:[
    {question:"The sun ___ in the east.",options:["rise","rises","rose","rising"],correct:1,type:"成考题",explanation:"太阳从东方升起是客观真理，用一般现在时。主语the sun是第三人称单数，动词加s→rises。"},
    {question:"Water ___ at 100 degrees Celsius.",options:["boil","boils","boiled","boiling"],correct:1,type:"成考题",explanation:"水在100度沸腾是客观事实，用一般现在时。water不可数，视为第三人称单数，动词加s→boils。"},
    {question:"He ___ his homework before dinner every day.",options:["finish","finishes","finished","finishing"],correct:1,type:"成考题",explanation:"every day表示经常性，主语he是第三人称单数，一般现在时动词加es→finishes。"}
  ]},
  {id:"g02",title:"一般过去时",category:"时态",frequency:9,level:1,explanation:"表示过去某个时间发生的动作或存在的状态。关键词：yesterday, last week, ago, in 2020。规则动词加ed，不规则动词需记忆。",examples:[{en:"He went to Beijing yesterday.",zh:"他昨天去了北京。"},{en:"We visited the museum last week.",zh:"我们上周参观了博物馆。"}],breakdown:"先找时间标志：yesterday/last week → 用过去时。动词go→went，visit→visited。",examTip:"成考常考不规则动词的过去式，以及时间状语与时态的对应。",commonMistakes:["不规则动词过去式记错","在过去时中仍用动词原形"],basicQuestions:[
    {question:"I ___ to the park yesterday.",options:["go","goes","went","going"],correct:2,type:"基础题",explanation:"yesterday是过去时间标志，go的过去式是went。"},
    {question:"She ___ a letter last night.",options:["write","writes","wrote","writing"],correct:2,type:"基础题",explanation:"last night表示过去，write的过去式是wrote。"},
    {question:"They ___ in Beijing two years ago.",options:["live","lives","lived","living"],correct:2,type:"基础题",explanation:"two years ago表示过去，live是规则动词，过去式加d→lived。"}
  ],examQuestions:[
    {question:"He ___ his keys yesterday and couldn't open the door.",options:["lose","loses","lost","losing"],correct:2,type:"成考题",explanation:"yesterday表示过去，lose的过去式是lost（不规则）。"},
    {question:"The meeting ___ at 3 o'clock last Friday.",options:["begin","begins","began","beginning"],correct:2,type:"成考题",explanation:"last Friday表示过去，begin的过去式是began（不规则）。"},
    {question:"She ___ English very well when she was young.",options:["speak","speaks","spoke","speaking"],correct:2,type:"成考题",explanation:"when she was young表示过去时间，speak的过去式是spoke（不规则）。"}
  ]},
  {id:"g03",title:"定语从句",category:"从句",frequency:9,level:2,explanation:"用一个句子修饰名词或代词。先行词是人用who/that，是物用which/that，是谁的用whose，是地点用where，是时间用when。技巧：先把中间修饰部分拿掉，找出主句的'谁+做什么'。",examples:[{en:"The book that I bought yesterday is very interesting.",zh:"我昨天买的那本书很有趣。"},{en:"The man who is standing there is my teacher.",zh:"站在那里的那个人是我的老师。"}],breakdown:"主句：The book is very interesting。that I bought yesterday是定语从句，修饰book。先拿掉中间部分，主句就清楚了。",examTip:"成考阅读中大量出现定语从句，看懂它就能看懂长句。语法题常考关系词的选择。",commonMistakes:["关系词用错（who/which/where混淆）","把定语从句当成两个独立句子"],basicQuestions:[
    {question:"The man ___ is standing there is my teacher.",options:["who","which","where","when"],correct:0,type:"基础题",explanation:"先行词the man是人，关系词用who。"},
    {question:"The book ___ I bought yesterday is interesting.",options:["who","which","where","when"],correct:1,type:"基础题",explanation:"先行词the book是物，关系词用which（或that）。"},
    {question:"This is the school ___ I studied.",options:["who","which","where","when"],correct:2,type:"基础题",explanation:"先行词the school是地点，关系词用where（=in which）。"}
  ],examQuestions:[
    {question:"I will never forget the day ___ I first came to this city.",options:["which","who","when","where"],correct:2,type:"成考题",explanation:"先行词the day是时间，关系词用when（=on which）。"},
    {question:"The girl ___ mother is a doctor studies very hard.",options:["who","whose","which","whom"],correct:1,type:"成考题",explanation:"表示'谁的'，关系词用whose。the girl's mother = whose mother。"},
    {question:"This is the best film ___ I have ever seen.",options:["which","that","who","whose"],correct:1,type:"成考题",explanation:"先行词被最高级the best修饰时，关系词只能用that，不能用which。"}
  ]},
  {id:"g04",title:"宾语从句",category:"从句",frequency:8,level:2,explanation:"用一个句子作动词的宾语。引导词：that（陈述事实，可省略）、if/whether（是否）、what/when/where/why/how（疑问词）。注意：从句用陈述语序，时态与主句呼应。",examples:[{en:"I think that English is important.",zh:"我认为英语很重要。"},{en:"She asked me where I lived.",zh:"她问我住在哪里。"}],breakdown:"主句：I think / She asked me。后面that/where引导的句子是宾语，作think/asked的宾语。注意where I lived是陈述语序，不是where did I live。",examTip:"成考常考宾语从句的语序（陈述语序）和时态呼应。",commonMistakes:["宾语从句用疑问语序","时态不与主句呼应"],basicQuestions:[
    {question:"I think ___ English is important.",options:["that","what","when","where"],correct:0,type:"基础题",explanation:"后面是陈述事实，引导词用that（可省略）。"},
    {question:"She asked me ___ I lived.",options:["that","where","when","what"],correct:1,type:"基础题",explanation:"问「住在哪里」，引导词用where。注意从句用陈述语序where I lived。"},
    {question:"Do you know ___ he will come?",options:["if","that","what","which"],correct:0,type:"基础题",explanation:"问「是否」，引导词用if或whether。"}
  ],examQuestions:[
    {question:"Could you tell me ___?",options:["where does he live","where he lives","where he live","where did he live"],correct:1,type:"成考题",explanation:"宾语从句必须用陈述语序：主语he+谓语lives，不能用does he live。he是第三人称单数，用lives。"},
    {question:"I don't know ___ he will arrive.",options:["when","when will","when does","that when"],correct:0,type:"成考题",explanation:"宾语从句用陈述语序，引导词when后直接跟主语he+谓语will arrive，不能加will/does。"},
    {question:"She asked me ___ I had finished my homework.",options:["that","if","what","which"],correct:1,type:"成考题",explanation:"问「是否完成了作业」，引导词用if或whether。主句是过去时asked，从句用过去完成时had finished表示「过去的过去」。"}
  ]},
  {id:"g05",title:"被动语态",category:"语态",frequency:8,level:2,explanation:"主语是动作的承受者。结构：be + 过去分词。各种时态的被动：am/is/are + done（一般现在），was/were + done（一般过去），will be + done（一般将来），can/must be + done（情态动词）。",examples:[{en:"English is spoken all over the world.",zh:"全世界都说英语。"},{en:"The bridge was built in 1990.",zh:"这座桥建于1990年。"}],breakdown:"主动：People speak English. → 被动：English is spoken (by people)。宾语English变主语，动词加be+done。",examTip:"成考常考各种时态的被动结构，以及by短语的用法。",commonMistakes:["忘记be动词","过去分词写错"],basicQuestions:[
    {question:"English ___ all over the world.",options:["speak","speaks","is spoken","spoke"],correct:2,type:"基础题",explanation:"English是动作的承受者（被说），用被动语态。一般现在时被动：is+过去分词spoken。"},
    {question:"The bridge ___ in 1990.",options:["build","builds","was built","built"],correct:2,type:"基础题",explanation:"bridge是被建造的，用被动。in 1990是过去时间，一般过去时被动：was+过去分词built。"},
    {question:"The room ___ every day.",options:["clean","cleans","is cleaned","cleaned"],correct:2,type:"基础题",explanation:"room是被打扫的，用被动。every day表示经常性，一般现在时被动：is+过去分词cleaned。"}
  ],examQuestions:[
    {question:"The letter ___ yesterday.",options:["was sent","is sent","sent","sends"],correct:0,type:"成考题",explanation:"letter是被寄出的，用被动。yesterday是过去时间，一般过去时被动：was+过去分词sent。"},
    {question:"These books ___ to the library last week.",options:["return","returned","were returned","are returned"],correct:2,type:"成考题",explanation:"books是被归还的，用被动。last week是过去时间，主语是复数，一般过去时被动：were+过去分词returned。"},
    {question:"The new hospital ___ next year.",options:["will build","will be built","builds","built"],correct:1,type:"成考题",explanation:"hospital是被建造的，用被动。next year是将来时间，一般将来时被动：will be+过去分词built。"}
  ]},
  {id:"g06",title:"非谓语动词",category:"非谓语",frequency:9,level:3,explanation:"不作谓语的动词形式：不定式(to do)、动名词(doing)、分词(doing/done)。不定式表目的或将来；动名词作主语/宾语；现在分词表主动进行；过去分词表被动完成。",examples:[{en:"I want to learn English well.",zh:"我想学好英语。"},{en:"Swimming is good for health.",zh:"游泳对健康有益。"},{en:"The boy standing there is my brother.",zh:"站在那里的男孩是我弟弟。"}],breakdown:"to learn是want的宾语（不定式）；Swimming是主语（动名词）；standing there修饰boy（现在分词，主动）。",examTip:"成考语法题重点，常考某些动词后接to do还是doing，以及分词作定语。",commonMistakes:["enjoy/finish/practice后接to do（应该是doing）","现在分词和过去分词混淆"],basicQuestions:[
    {question:"I want ___ English well.",options:["learn","to learn","learning","learned"],correct:1,type:"基础题",explanation:"want后面接不定式to do作宾语：want to learn。"},
    {question:"___ is good for health.",options:["Swim","Swims","Swimming","Swam"],correct:2,type:"基础题",explanation:"动词作主语时要用动名词形式doing：Swimming is good for health。"},
    {question:"He enjoys ___ books.",options:["read","to read","reading","reads"],correct:2,type:"基础题",explanation:"enjoy后面接动名词doing作宾语：enjoy reading。类似的还有finish, practice, mind, suggest。"}
  ],examQuestions:[
    {question:"She decided ___ abroad for further study.",options:["go","to go","going","went"],correct:1,type:"成考题",explanation:"decide后面接不定式to do：decide to go。类似的还有want, hope, plan, promise, refuse。"},
    {question:"The boy ___ under the tree is my brother.",options:["stand","stands","standing","stood"],correct:2,type:"成考题",explanation:"standing under the tree是现在分词短语作定语，修饰the boy，表示主动进行（男孩正站在树下）。"},
    {question:"I look forward to ___ you soon.",options:["see","seeing","saw","seen"],correct:1,type:"成考题",explanation:"look forward to中的to是介词，后面接动名词doing：look forward to seeing。类似的还有be used to（习惯于）, devote to。"}
  ]}
];
const GRAMMAR_TOPICS=(typeof GRAMMAR_DATA!=="undefined"&&Array.isArray(GRAMMAR_DATA)&&GRAMMAR_DATA.length)?GRAMMAR_DATA:_GRAMMAR_PLACEHOLDER;
let grammarViewMode='list',grammarCurrentId=null,grammarSession=null;

function grammarView(){
  if(grammarViewMode==='detail'&&grammarCurrentId){
    return grammarDetail(grammarCurrentId);
  }
  if(grammarViewMode==='practice'&&grammarSession){
    return grammarPracticeView();
  }
  // 列表页
  const learned=Object.keys(state.grammarProgress||{}).length;
  const byCategory={};
  GRAMMAR_TOPICS.forEach(g=>{byCategory[g.category]=(byCategory[g.category]||0)+1});
  return header('成考高频语法','30天冲刺 · 按考试频率排序 · 共'+GRAMMAR_TOPICS.length+'个语法点')+
  '<div class="panel"><div class="row"><h2>语法点列表</h2><span class="badge">已学 '+learned+' / '+GRAMMAR_TOPICS.length+'</span></div>'+
  '<p class="muted small">按成考实际考查频率排序。每个语法点：人话讲解 → 简单例子 → 拆句子 → 考试怎么考 → 易错点 → 练习题。</p>'+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0">'+Object.entries(byCategory).map(([cat,cnt])=>'<span class="word-chip">'+cat+' ('+cnt+')</span>').join('')+'</div>'+
  '<div>'+GRAMMAR_TOPICS.map((g,i)=>{
    const prog=state.grammarProgress&&state.grammarProgress[g.id];
    const status=prog?(prog.mastered?'已掌握':prog.practiceCount?'练习中':'已阅读'):'未学习';
    return '<div class="wordrow"><div><button class="linkbtn" style="padding:0;text-align:left" data-grammar="'+g.id+'"><strong>'+(i+1)+'. '+esc(g.title)+'</strong></button><small>'+esc(g.category)+' · 频率'+g.frequency+'/10 · 难度L'+g.level+'</small></div><span class="small">'+status+'</span><span class="badge '+(prog&&prog.mastered?'green':'')+'">'+status+'</span></div>';
  }).join('')+'</div></div>';
}

function grammarDetail(id){
  const g=GRAMMAR_TOPICS.find(x=>x.id===id);
  if(!g){grammarViewMode='list';return grammarView();}
  // 标记为已阅读
  if(!state.grammarProgress)state.grammarProgress={};
  if(!state.grammarProgress[id])state.grammarProgress[id]={read:true,practiceCount:0,correct:0,wrong:0,mastered:false,wrongQuestions:[]};
  else state.grammarProgress[id].read=true;
  save();
  return header(esc(g.title),esc(g.category)+' · 频率'+g.frequency+'/10 · 难度L'+g.level)+
  '<div class="learnwrap">'+
  '<div class="row small muted"><button class="linkbtn" data-act="grammarBack">← 返回列表</button></div>'+
  '<div class="panel">'+
    '<span class="badge">'+esc(g.category)+'</span>'+
    '<h2 style="margin-top:12px">'+esc(g.title)+'</h2>'+
    '<div class="example"><p><b>📖 一句话讲懂：</b></p><p>'+esc(g.explanation||'')+'</p></div>'+
    (g.examples&&g.examples.length?'<div class="example"><p><b>📝 简单例子：</b></p>'+g.examples.map(e=>'<p lang="en">'+esc(e.en)+'</p><p>'+esc(e.zh)+'</p>').join('')+'</div>':'')+
    (g.breakdown?'<div class="example"><p><b>🔍 拆句子：</b></p><p>'+esc(g.breakdown)+'</p></div>':'')+
    (g.examTip?'<div class="exam-meaning"><b>🎯 考试怎么考：</b>'+esc(g.examTip)+'</div>':'')+
    (g.commonMistakes&&g.commonMistakes.length?'<div class="example"><p><b>⚠️ 容易错哪里：</b></p>'+g.commonMistakes.map(m=>'<p>· '+esc(m)+'</p>').join('')+'</div>':'')+
    '<div class="answerbar" style="margin-top:24px">'+
      '<button class="btn" data-act="grammarPractice">开始练习</button>'+
      '<button class="btn outline" data-act="grammarBack">返回列表</button>'+
    '</div>'+
  '</div></div>';
}

function grammarPracticeView(){
  const s=grammarSession;
  if(!s||!s.questions||!s.questions.length){grammarViewMode='list';return grammarView();}
  const q=s.questions[s.index];
  if(!q){
    // 完成
    const pct=s.total?Math.round(s.correct/s.total*100):0;
    return header('语法练习完成')+'<div class="learnwrap panel wordcard">'+
      '<span class="badge green">已保存</span>'+
      '<h2 style="margin-top:24px">正确率 '+pct+'%</h2>'+
      '<div class="resultnum">'+s.correct+'<span style="font-size:18px"> / '+s.total+' 正确</span></div>'+
      '<div class="answerbar"><button class="btn" data-act="grammarBack">返回列表</button></div></div>';
  }
  const fb=s.feedback;
  return header('语法练习 · '+(s.index+1)+' / '+s.questions.length)+
  '<div class="learnwrap"><div class="panel wordcard">'+
    '<span class="badge">'+esc(q.type||'语法题')+'</span>'+
    '<h3 style="margin-top:16px">'+esc(q.question)+'</h3>'+
    '<div class="choicegrid">'+(q.options||[]).map((o,i)=>'<button class="choice '+(fb?(i===q.correct?'correct':fb.choice===i?'wrong':''):'')+'" data-gchoice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o)+'</button>').join('')+'</div>'+
    (fb?'<div class="feedback"><b>'+(fb.correct?'✓ 正确':'✗ 错误')+'</b><br>'+esc(q.explanation||'')+'</div><div class="answerbar"><button class="btn" data-act="grammarNext">下一题 →</button></div>':'')+
  '</div></div>';
}

// ===== 学习报告 =====
function report(){
  const r=Object.values(state.records),read=Object.values(state.readings);
  const totalDays=Object.keys(state.days).length;
  const totalNew=Object.values(state.days).reduce((s,d)=>s+(d.new||0),0);
  const totalReviews=Object.values(state.days).reduce((s,d)=>s+(d.reviews||0),0);
  const totalCorrect=Object.values(state.days).reduce((s,d)=>s+(d.correct||0),0);
  const totalAttempts=Object.values(state.days).reduce((s,d)=>s+(d.attempts||0),0);
  const readCorrect=read.reduce((s,x)=>s+(x.correctCount!=null?x.correctCount:(x.correct?(x.answers?x.answers.length:1):0)),0);
  const readTotal=read.reduce((s,x)=>s+(x.total||(x.answers?x.answers.length:1)),0);
  return header('学习报告','只展示真实记录，不预测分数')+
  '<div class="stats">'+
    '<div class="stat"><span>词库覆盖</span><strong>'+Math.round(Object.keys(state.records).length/uniqueWords().length*100)+'%</strong><span>'+Object.keys(state.records).length+' / '+uniqueWords().length+'</span></div>'+
    '<div class="stat"><span>稳定记忆</span><strong>'+r.filter(x=>x.level>=3||x.status==='mastered').length+'</strong><span>连续答对≥3次</span></div>'+
    '<div class="stat"><span>总正确率</span><strong>'+(totalAttempts?Math.round(totalCorrect/totalAttempts*100)+'%':'—')+'</strong><span>'+totalAttempts+' 次回忆</span></div>'+
  '</div>'+
  '<div class="panel"><h2>学习统计</h2>'+
  '<p>学习天数：<b>'+totalDays+'</b> 天 · 累计学新词：<b>'+totalNew+'</b> · 累计复习：<b>'+totalReviews+'</b> 次</p>'+
  '<p>阅读作答：<b>'+read.length+'</b> 篇 · 答对 <b>'+readCorrect+'</b> / '+readTotal+' 题 · 阅读正确率：<b>'+(readTotal?Math.round(readCorrect/readTotal*100)+'%':'—')+'</b></p>'+
  '<p>易错词：<b>'+weakWordsList().length+'</b> 个</p>'+
  '</div>'+
  '<div class="panel" style="margin-top:18px"><h2>目前建议</h2>'+
  '<p>先完成今日复习，再进入阅读和长难句训练。数据积累不足时，系统不预测考试分数。</p>'+
  '<p class="muted">成人高考还包括：词汇语法、完形填空、补全对话、翻译和写作。</p>'+
  '</div>';
}

// ===== 设置 =====
function settings(){
  return header('学习设置')+'<div class="settings">'+
  '<form id="settingsform" class="panel"><h2>备考安排</h2>'+
  '<div class="field"><label for="exam">目标考试日期</label><input id="exam" name="exam" type="date" value="'+state.exam+'" required><p class="small muted">请按准考证修改。</p></div>'+
  '<div class="field"><label for="dailyGoal">每天新词目标</label><select id="dailyGoal" name="dailyGoal">'+
  [50,80,100,120,150].map(n=>'<option value="'+n+'" '+(state.dailyNewGoal===n?'selected':'')+'>'+n+' 词/天</option>').join('')+
  '<option value="custom" '+(state.dailyNewGoal>150?'selected':'')+'>自定义</option>'+
  '</select><p class="small muted">这是目标不是上限。完成后可以继续学习更多。</p></div>'+
  (state.dailyNewGoal>150?'<div class="field"><label for="customGoal">自定义目标</label><input id="customGoal" type="number" min="10" max="500" value="'+state.dailyNewGoal+'"></div>':'')+
  '<button class="btn" type="submit">保存设置</button></form>'+

  '<div class="panel" style="margin-top:20px"><h2>学习记录与备份</h2>'+
  '<p class="small muted">记录只保存在当前浏览器，不会自动跨设备同步。清除浏览器数据可能丢失进度。换设备前先导出备份。</p>'+
  '<button class="btn outline" data-act="export">导出备份</button>'+
  '<label for="importfile" class="btn outline" style="display:inline-block;cursor:pointer">导入备份</label>'+
  '<input id="importfile" type="file" accept=".json,application/json" class="sr">'+
  '<p class="small muted" style="margin-top:10px">导入会替换当前记录。</p>'+
  '<button class="btn danger" data-act="resetAll" style="margin-top:10px">重置所有学习数据</button>'+
  '</div></div>';
}

// ===== 发音 =====
function speak(text){
  if(!('speechSynthesis'in window)){toast('当前浏览器不支持朗读。');return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.78;
  const voices=speechSynthesis.getVoices();
  const v=voices.find(v=>v.lang==='en-US')||voices.find(v=>v.lang.startsWith('en'));
  if(v)u.voice=v;
  u.onerror=()=>toast('朗读暂不可用。');
  speechSynthesis.speak(u);
}

// ===== 查词 =====
function lookup(word){
  const low=word.toLowerCase();
  const w=WORDS.find(x=>x.word.toLowerCase()===low);
  if(w){
    // 记录阅读查词
    if(!state.readingUnknownWords.includes(w.id))state.readingUnknownWords.push(w.id);
    const r=state.records[w.id];
    if(r){r.readingLookups=(r.readingLookups||0)+1;r.nextReview=Math.min(r.nextReview,Date.now()+30*60000);}
    save();
    return w.word+' '+w.phonetic+' '+w.partOfSpeech+'：'+w.meaning+(w.examMeaning?'（考试：'+w.examMeaning+'）':'')+(r?'【已学习】':'【未学习】');
  }
  if(typeof GLOSS!=='undefined'&&GLOSS[low])return GLOSS[low];
  return '这个词暂未收录；可展开全文翻译辅助理解。';
}

// ===== 事件绑定 =====
function bind(){
  document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav));
  document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak));
  document.querySelectorAll('[data-act]').forEach(b=>b.onclick=()=>actions[b.dataset.act]?.());
  document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>answer(+b.dataset.choice));
  document.querySelectorAll('[data-testchoice]').forEach(b=>b.onclick=()=>testAnswer(+b.dataset.testchoice));
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;wordPage=0;render()});
  document.querySelectorAll('[data-reading]').forEach(b=>b.onclick=()=>{readingIndex=+b.dataset.reading;translation=false;gloss='';readingAnswers={};render()});
  document.querySelectorAll('[data-gloss]').forEach(b=>b.onclick=()=>{gloss=lookup(b.dataset.gloss);render()});
  document.querySelectorAll('[data-reading-choice]').forEach(b=>b.onclick=()=>{
    const k=dateKey()+'-'+readingIndex;if(state.readings[k])return;
    const i=+b.dataset.readingChoice;
    state.readings[k]={choice:i,correct:i===READINGS[readingIndex].correct,answers:[i]};save();render();
  });
  document.querySelectorAll('[data-rq]').forEach(b=>b.onclick=()=>{
    const [ri,qi,ci]=b.dataset.rq.split('-').map(Number);
    answerReadingQuestion(ri,qi,ci);
    // 视觉反馈
    document.querySelectorAll('[data-rq="'+ri+'-'+qi+'"]').forEach(x=>x.classList.remove('selected'));
    b.classList.add('selected');
  });
  document.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>detail(b.dataset.detail));
  document.querySelectorAll('[data-grammar]').forEach(b=>b.onclick=()=>{grammarCurrentId=b.dataset.grammar;grammarViewMode='detail';render()});
  document.querySelectorAll('[data-gchoice]').forEach(b=>b.onclick=()=>grammarAnswer(+b.dataset.gchoice));
  document.querySelectorAll('[data-examq]').forEach(b=>b.onclick=()=>{const p=b.dataset.examq.split('-');examAnswer(+p[0],+p[1],+p[2])});
  document.querySelectorAll('[data-cloze]').forEach(b=>b.onclick=()=>{clozeIndex=+b.dataset.cloze;clozeAnswers={};clozeSubmitted=false;clozeCurrentBlank=null;render()});
  document.querySelectorAll('[data-clozeblank]').forEach(b=>b.onclick=()=>{clozeCurrentBlank=+b.dataset.clozeblank;render()});
  document.querySelectorAll('[data-clozechoice]').forEach(b=>b.onclick=()=>{const p=b.dataset.clozechoice.split('-');answerCloze(+p[0],+p[1])});
  if($('#search'))$('#search').oninput=e=>{const pos=e.target.selectionStart;query=e.target.value;render();$('#search').focus();$('#search').setSelectionRange(pos,pos)};
  if($('#settingsform'))$('#settingsform').onsubmit=e=>{
    e.preventDefault();
    const d=$('#exam').value;
    if(!validDate(d)){toast('请选择有效的考试日期');return}
    state.exam=d;
    const goalSel=$('#dailyGoal');
    if(goalSel.value==='custom'){
      const cg=$('#customGoal');
      if(cg)state.dailyNewGoal=Math.max(10,Math.min(500,parseInt(cg.value)||100));
    }else{
      state.dailyNewGoal=parseInt(goalSel.value);
    }
    save();render();toast('设置已保存');
  };
  if($('#importfile'))$('#importfile').onchange=async e=>{
    const f=e.target.files[0];if(!f)return;
    try{
      if(f.size>5000000)throw Error('文件过大');
      const n=JSON.parse(await f.text());
      if(!n||n.version!==3)throw Error('备份格式不正确');
      if(confirm('导入将替换当前学习记录，确定继续吗？')){state=n;save();render();toast('备份已恢复')}
    }catch(err){toast('未导入：'+err.message)}
  };
}

// ===== 动作 =====
const actions={
  startQuick:()=>startQuick(),
  startReview:()=>startReview(),
  startTest:()=>startTest(20),
  reviewWeak:()=>{
    const ws=weakWordsList().slice(0,30);
    if(!ws.length){toast('没有易错词');return}
    state.session={mode:'review',queue:ws.map(w=>({id:w.id,stage:'test'})),done:0,total:ws.length,feedback:null,correct:0,startTime:Date.now()};
    save();view='review';render();
  },
  reviewAll:()=>{
    const ws=dueWords();
    if(!ws.length){toast('没有到期复习词');return}
    state.session={mode:'review',queue:ws.map(w=>({id:w.id,stage:'test'})),done:0,total:ws.length,feedback:null,correct:0,startTime:Date.now()};
    save();view='review';render();
  },
  know:()=>quickAnswer('know'),
  fuzzy:()=>quickAnswer('fuzzy'),
  unknown:()=>{if(state.session?.mode==='quick')quickAnswer('unknown');else answer(-1)},
  toggleDetail:()=>{if(state.session?.queue[0]){state.session.queue[0].showDetail=!state.session.queue[0].showDetail;render()}},
  next:()=>next(),
  nextTest:()=>{const s=state.session;if(!s?.feedback)return;s.queue.shift();s.feedback=null;save();render()},
  finishQuick:()=>{state.session=null;save();navigate('home')},
  continueQuick:()=>{state.session=null;save();startQuick()},
  finishReview:()=>{state.session=null;save();navigate('home')},
  finishTest:()=>{state.session=null;save();navigate('home')},
  reviewWrong:()=>{
    const s=state.session;if(!s||!s.wrongList||!s.wrongList.length){toast('没有错题');return}
    const ws=s.wrongList.map(id=>getWord(id)).filter(Boolean);
    state.session={mode:'review',queue:ws.map(w=>({id:w.id,stage:'test'})),done:0,total:ws.length,feedback:null,correct:0,startTime:Date.now()};
    save();view='review';render();
  },
  translate:()=>{translation=!translation;render()},
  submitReading:()=>submitReading(),
  showStructure:()=>showSentenceDetail('structure'),
  showTranslation:()=>showSentenceDetail('translation'),
  showGrammar:()=>showSentenceDetail('grammar'),
  prevSentence:()=>{sentenceIndex=(sentenceIndex-1+LONG_SENTENCES.length)%LONG_SENTENCES.length;render()},
  nextSentence:()=>{sentenceIndex=(sentenceIndex+1)%LONG_SENTENCES.length;render()},
  export:()=>{
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='词阶学习备份-'+dateKey()+'.json';a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已导出备份');
  },
  resetAll:()=>{
    if(confirm('确定要重置所有学习数据吗？此操作不可恢复！建议先导出备份。')){
      state=initial();save();render();toast('已重置');
    }
  },
  continue20:()=>startQuick(20),
  wordPrev:()=>{if(wordPage>0){wordPage--;render()}},
  wordNext:()=>{wordPage++;render()},
  setStudyMode:()=>{readingMode='study';render()},
  setExamMode:()=>{readingMode='exam';translation=false;gloss='';render()},
  continue50:()=>startQuick(50),
  continue100:()=>startQuick(100),
  freeLearn:()=>{view='words';filter='unlearned';render()},
  quick20:()=>startQuick(20),quick50:()=>startQuick(50),quick80:()=>startQuick(80),
  quick100:()=>startQuick(100),quick120:()=>startQuick(120),quick150:()=>startQuick(150),
  test20:()=>startTest(20),test50:()=>startTest(50),test100:()=>startTest(100),
  grammarBack:()=>{grammarViewMode='list';grammarCurrentId=null;grammarSession=null;render()},
  grammarPractice:()=>{
    const g=GRAMMAR_TOPICS.find(x=>x.id===grammarCurrentId);
    if(!g)return;
    const qs=(g.examQuestions&&g.examQuestions.length?g.examQuestions:[]).concat(g.basicQuestions||[]);
    if(!qs.length){toast('该语法点暂无练习题，敬请期待');return}
    grammarSession={topicId:g.id,questions:qs,index:0,total:0,correct:0,feedback:null};
    grammarViewMode='practice';render();
  },
  grammarNext:()=>{
    if(!grammarSession||!grammarSession.feedback)return;
    grammarSession.index++;grammarSession.feedback=null;render();
  },
  startReadingExam:()=>startReadingExam(),
  examNext:()=>{if(examSession&&examSession.currentArticle<4){examSession.currentArticle++;render();}},
  examPrev:()=>{if(examSession&&examSession.currentArticle>0){examSession.currentArticle--;render();}},
  examSubmit:()=>examSubmit(),
  examBack:()=>{examSession=null;view='reading';render();},
  submitCloze:()=>submitCloze(),
  resetCloze:()=>resetCloze()
};

function grammarAnswer(i){
  const s=grammarSession;if(!s||s.feedback||!s.questions[s.index])return;
  const q=s.questions[s.index];
  const correct=i===q.correct;
  s.feedback={correct,choice:i};
  s.total++;s.correct+=correct?1:0;
  // 记录进度
  if(!state.grammarProgress)state.grammarProgress={};
  const prog=state.grammarProgress[s.topicId]??={read:true,practiceCount:0,correct:0,wrong:0,mastered:false,wrongQuestions:[]};
  prog.practiceCount++;
  if(correct)prog.correct++;else{prog.wrong++;if(!prog.wrongQuestions.includes(s.index))prog.wrongQuestions.push(s.index)}
  if(prog.correct>=5&&prog.correct/(prog.correct+prog.wrong)>=0.8)prog.mastered=true;
  save();render();
}

// 键盘快捷键
document.addEventListener('keydown',e=>{
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||document.querySelector('dialog[open]'))return;
  if(view==='quick'){
    if(e.key==='1')actions.know();
    if(e.key==='2')actions.fuzzy();
    if(e.key==='3')actions.unknown();
  }
  if((view==='review'||view==='test')&&['1','2','3','4'].includes(e.key)){
    if(view==='review')answer(+e.key-1);else testAnswer(+e.key-1);
  }
  if(e.key==='Enter'&&state.session?.feedback){e.preventDefault();
    if(view==='review')next();
    else if(view==='test')actions.nextTest();
  }
});

// 初始化
render();
