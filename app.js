'use strict';
const KEY='wordstep-v1',DAY=86400000;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function dateKey(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function initial(){const end=new Date();end.setDate(end.getDate()+30);return{version:1,start:dateKey(),exam:dateKey(end),minutes:30,records:{},days:{},readings:{},session:null}}
let state=initial(),storageError=false;
try{const raw=localStorage.getItem(KEY);if(raw)state=validate(JSON.parse(raw))}catch{storageError=true}
function validate(s){
 if(!s||s.version!==1||![30,60].includes(s.minutes)||!validDate(s.start)||!validDate(s.exam)||!s.records||!s.days||!s.readings)throw Error('备份格式不正确');
 const n=initial();Object.assign(n,{start:s.start,exam:s.exam,minutes:s.minutes});
 for(const [id,r] of Object.entries(s.records)){if(!WORDS.some(w=>w.id===id)||!r||!Number.isFinite(r.due)||!Number.isInteger(r.level)||r.level<0||r.level>5||!Number.isInteger(r.lapses)||r.lapses<0||!validDate(r.first))throw Error('词汇记录无效');n.records[id]={due:r.due,level:r.level,lapses:r.lapses,first:r.first}}
 for(const [d,v] of Object.entries(s.days)){if(!validDate(d)||!v||!['new','reviews','correct','attempts'].every(k=>Number.isInteger(v[k])&&v[k]>=0))throw Error('学习记录无效');n.days[d]={new:v.new,reviews:v.reviews,correct:v.correct,attempts:v.attempts}}
 for(const [k,v] of Object.entries(s.readings)){if(!/^\d{4}-\d{2}-\d{2}-[0-4]$/.test(k)||!v||typeof v.correct!=='boolean'||!Number.isInteger(v.choice)||v.choice<0||v.choice>3)throw Error('阅读记录无效');n.readings[k]={correct:v.correct,choice:v.choice}}
 if(s.session&&Array.isArray(s.session.queue)&&s.session.queue.length<=1000&&s.session.queue.every(x=>WORDS.some(w=>w.id===x.id)&&['learn','test'].includes(x.stage))&&['learn','review','mistakes'].includes(s.session.mode)&&Number.isInteger(s.session.done)&&s.session.done>=0&&Number.isInteger(s.session.total)&&s.session.total>=0){n.session={...s.session,feedback:s.session.feedback&&typeof s.session.feedback.correct==='boolean'&&Number.isInteger(s.session.feedback.choice)?s.session.feedback:null}}
 return n
}
function validDate(x){return typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&dateKey(new Date(x+'T12:00:00'))===x}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageError=false}catch{storageError=true;toast('保存失败：请导出备份，并检查浏览器存储设置。')}}
function today(){return state.days[dateKey()]||{new:0,reviews:0,correct:0,attempts:0}}
function daily(){return state.days[dateKey()]??= {new:0,reviews:0,correct:0,attempts:0}}
function remaining(){return Math.ceil((new Date(state.exam+'T00:00:00')-new Date(dateKey()+'T00:00:00'))/DAY)}
function goal(){return remaining()<=7?5:state.minutes===30?15:25}
function due(){return WORDS.filter(w=>state.records[w.id]&&state.records[w.id].due<=Date.now()).sort((a,b)=>state.records[a.id].due-state.records[b.id].due)}
function mistakes(){return WORDS.filter(w=>state.records[w.id]?.lapses>0&&state.records[w.id].level<3)}
function toast(t){$('#toast').textContent=t;$('#toast').style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').style.display='none',3600)}
let view='home',filter='all',query='',readingIndex=0,translation=false,gloss='',options=[],lastQuestion='';
const navs=[['home','◷','今日学习'],['words','▤','我的词库'],['reading','▧','短句阅读'],['plan','▦','30天计划'],['settings','⚙','学习设置']];
function navigate(v){view=v;render();window.scrollTo({top:0,behavior:'smooth'})}
function header(title,sub='河南成人高考 · 专升本英语'){return '<div class="top"><div><div class="eyebrow">'+sub+'</div><h1>'+title+'</h1></div><span class="datepill">'+(remaining()>0?'距目标日期 <b>'+remaining()+'</b> 天':remaining()===0?'今天是目标日期':'目标日期已过')+'</span></div>'}
function render(){
 $('#app').innerHTML='<div class="shell"><aside class="sidebar"><div class="brand"><div class="mark">▂▅▇</div><div>词阶<small>WORDSTEP / 30</small></div></div><nav class="nav" aria-label="主导航">'+navs.map(([v,icon,label])=>'<button data-nav="'+v+'" class="'+(view===v||(view==='learn'&&v==='home')?'active':'')+'"><span aria-hidden="true">'+icon+'</span>'+label+'</button>').join('')+'</nav><div class="sidefoot"><b>一步一步，读懂英语</b><br>河南 · 成人专升本<br>每天 '+state.minutes+' 分钟 · 浏览器本地保存</div></aside><main class="main">'+(storageError?'<div class="tip">浏览器存储不可用或记录损坏，请到设置导出当前记录备份。</div>':'')+({home:home,learn:learning,words:wordlist,reading:reading,plan:plan,settings:settings}[view]||home)()+'</main></div>';
 bind();
}
function home(){
 const t=today(),d=due().length,learned=Object.keys(state.records).length,mastered=Object.values(state.records).filter(r=>r.level>=3).length;
 const day=Math.max(1,Math.min(30,Math.floor((new Date(dateKey())-new Date(state.start))/DAY)+1));
 return header('今天，再前进一步')+'<div class="grid"><section><div class="focus"><div class="eyebrow">DAY '+String(day).padStart(2,'0')+' / 30 · '+(remaining()<=7?'考前回顾':'基础积累')+'</div><h2>'+(state.session?'接着上次，继续学':d?'先复习，才能真正记住':'从最常用的词开始')+'</h2><p>'+(d?'有 '+d+' 个词到了复习时间。先试着回忆，再看答案。':'不用一次记很多。今天学一点，明天再见一面。')+'</p><button class="btn white" data-act="start">'+(state.session?'继续上次学习':d?'开始今日复习':'开始今日学习')+' <span aria-hidden="true">→</span></button><div class="focusmeta"><div><b>'+Math.max(0,goal()-t.new)+'</b>今日剩余新词</div><div><b>'+d+'</b>到期复习</div><div><b>'+state.minutes+' <small>min</small></b>每日时间预算</div></div></div><div class="stats"><div class="stat"><span>累计接触</span><strong>'+learned+' <span>/ '+WORDS.length+'</span></strong><span>个单词与短语</span></div><div class="stat"><span>稳定记忆</span><strong>'+mastered+'</strong><span>连续答对至少3次</span></div><div class="stat"><span>今日正确率</span><strong>'+(t.attempts?Math.round(t.correct/t.attempts*100)+'%':'—')+'</strong><span>'+(t.attempts?'完成 '+t.attempts+' 次回忆':'完成测验后显示')+'</span></div></div><div class="panel"><h2>今天的三小步</h2><div class="task"><div class="tasknum">01</div><div><h3>把旧词记牢</h3><p>'+d+' 个到期 · 已复习 '+t.reviews+' 次</p></div><button class="btn soft" data-act="review">复习</button></div><div class="task"><div class="tasknum">02</div><div><h3>认识 '+goal()+' 个新词</h3><p>先看意思，再选释义 · 已学 '+t.new+' 个</p></div><button class="btn soft" data-act="new">学新词</button></div><div class="task"><div class="tasknum">03</div><div><h3>在短文里认出它们</h3><p>点击生词查看解释 · 约5分钟</p></div><button class="btn soft" data-nav="reading">去练习</button></div></div></section><aside class="aside"><div class="panel"><div class="row"><h3>今日新词进度</h3><span class="badge">'+Math.min(100,Math.round(t.new/goal()*100))+'%</span></div><div class="ring" style="--progress:'+Math.min(100,t.new/goal()*100)+'%"><div><b>'+t.new+'<span class="muted" style="font-size:18px"> / '+goal()+'</span></b><small>新词已接触</small></div></div><p class="small muted" style="text-align:center">学过不等于记住<br>之后的回忆测验才是关键</p><div class="week">'+Array.from({length:7},(_,i)=>{const dt=new Date();dt.setDate(dt.getDate()-6+i);const x=state.days[dateKey(dt)];return '<div class="day">'+['日','一','二','三','四','五','六'][dt.getDay()]+'<i class="'+(x&&(x.new||x.attempts)?'done':'')+'">'+(x&&(x.new||x.attempts)?'✓':'·')+'</i></div>'}).join('')+'</div></div><div class="panel note"><span class="badge">零基础小提醒</span><h3 style="margin-top:16px">先认出意思，再追求拼写</h3><p>遇到 I、you、because 这样的短词也别跳过。它们能帮你看清“谁做了什么”和句子之间的关系。</p><button class="linkbtn" data-act="mistakes" style="margin-top:14px">回顾易错词（'+mistakes().length+'） →</button></div></aside></div><div class="footer">基础冲刺词库：'+WORDS.length+' 个词与短语；自编练习，并非官方完整考纲或真题。背词之外，仍需安排语法、语音、写作与真题练习。</div>';
}
function start(mode='auto'){
 if(state.session?.queue.length){view='learn';render();return}
 if(mode==='auto')mode=due().length?'review':'learn';
 let ws=mode==='review'?due():mode==='mistakes'?mistakes():WORDS.filter(w=>!state.records[w.id]).slice(0,Math.max(0,goal()-today().new));
 if(!ws.length){toast(mode==='learn'?'今天的新词目标已完成，可以练习短文或复习易错词。':'目前没有需要复习的词，可以开始学新词。');return}
 ws=ws.slice(0,mode==='learn'?goal():20);
 state.session={mode,queue:ws.map(w=>({id:w.id,stage:state.records[w.id]?'test':'learn'})),done:0,total:ws.length,feedback:null,correct:0};save();view='learn';lastQuestion='';render()
}
function choices(w){
 const pool=WORDS.filter(x=>x.id!==w.id&&x.meaning!==w.meaning);const picked=[w];
 while(picked.length<4){const p=pool[Math.floor(Math.random()*pool.length)];if(!picked.some(x=>x.meaning===p.meaning))picked.push(p)}
 return picked.sort(()=>Math.random()-.5)
}
function learning(){
 const s=state.session;if(!s){view='home';return home()}
 const item=s.queue[0];if(!item)return header('这一组，完成了')+'<div class="learnwrap panel wordcard"><span class="badge green">练习已保存</span><h2 style="margin-top:24px">每一次回忆，都在加深印象</h2><div class="resultnum">'+s.done+'<span style="font-size:18px"> 次回忆</span></div><p class="muted">本组答对 '+s.correct+' 次。易错词会在短时间后再次提醒。</p><button class="btn" data-act="finish">回到今日学习</button><button class="btn outline" style="margin-left:12px" data-act="finishread">练一篇短文</button></div>';
 const w=WORDS.find(x=>x.id===item.id);
 const key=item.id+'-'+item.stage;
 if(lastQuestion!==key){options=s.feedback&&Array.isArray(s.optionIds)&&s.optionIds.length===4&&s.optionIds.every(id=>WORDS.some(x=>x.id===id))?s.optionIds.map(id=>WORDS.find(x=>x.id===id)):choices(w);lastQuestion=key;s.optionIds=options.map(x=>x.id)}
 const learn=item.stage==='learn',fb=s.feedback;
 return header(learn?'先认识它，再试着回忆':'不翻答案，你还记得吗？','一组最多20个复习词 · 可随时暂停')+'<div class="learnwrap"><div class="row small muted"><button class="linkbtn" data-nav="home">← 暂停并返回</button><span>已完成 '+s.done+' 次回忆 · 还剩 '+s.queue.length+' 项</span></div><div class="progress"><div style="width:'+Math.min(100,s.done/(s.done+s.queue.length)*100)+'%"></div></div><div class="panel wordcard"><span class="badge">'+esc(w.category)+'</span><div class="word" lang="en">'+esc(w.word)+'</div><button class="speaker" data-speak="'+esc(w.word)+'">◖)) 听发音</button>'+(learn?'<div class="meaning">'+esc(w.meaning)+'</div>'+example(w)+'<div class="answerbar"><button class="btn" data-act="learned">看完了，稍后考考我 →</button></div><div class="hint">先读单词和意思；别用汉字谐音代替发音。</div>':'<p class="muted small">选择它的中文意思</p><div class="choicegrid">'+options.map((o,i)=>'<button class="choice '+(fb?(o.id===w.id?'correct':fb.choice===i?'wrong':''):'')+'" data-choice="'+i+'" '+(fb?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(o.meaning)+'</button>').join('')+'</div>'+(fb?'<div class="feedback" role="status"><b>'+(fb.correct?'答对了。':'这次没记住也没关系。')+'</b> '+esc(w.word)+' = '+esc(w.meaning)+'<br><span class="small">'+(fb.correct?'已安排下一次复习。':'稍后会再考一次；仍不熟悉的词会保留在易错词中。')+'</span></div>'+example(w)+'<div class="answerbar"><button class="btn" data-act="next">继续 →</button></div>':'<div class="answerbar"><button class="btn outline" data-act="unknown">还不认识，看看答案</button></div>'))+'</div></div>';
}
function example(w){return w.example?'<div class="example"><p lang="en">'+esc(w.example[0])+' <button class="linkbtn" data-speak="'+esc(w.example[0])+'" aria-label="朗读例句">◖))</button></p><p>'+esc(w.example[1])+'</p><p class="small muted">'+esc(w.example[2])+'</p></div>':'<div class="tip">记忆方法：朗读一次 → 看中文意思 → 在下一步遮住意思回忆。这个词暂未配专属例句。</div>'}
function learned(){
 const s=state.session;if(!s||s.queue[0]?.stage!=='learn')return;const item=s.queue.shift();
 if(!state.records[item.id]){state.records[item.id]={due:Date.now(),level:0,lapses:0,first:dateKey()};daily().new++}
 s.queue.splice(Math.min(2,s.queue.length),0,{id:item.id,stage:'test'});save();render()
}
function answer(i){
 const s=state.session;if(!s||s.feedback||s.queue[0]?.stage!=='test')return;
 const id=s.queue[0].id,correct=i>=0&&options[i]?.id===id,r=state.records[id]??={due:Date.now(),level:0,lapses:0,first:dateKey()};
 if(correct){r.level=Math.min(5,r.level+1);r.due=Date.now()+[0,1,3,7,14,21][r.level]*DAY}else{r.level=0;r.lapses++;r.due=Date.now()+10*60000}
 const d=daily();d.attempts++;if(correct)d.correct++;if(s.mode!=='learn')d.reviews++;
 s.feedback={correct,choice:i};s.done++;s.correct+=correct?1:0;
 save();render()
}
function next(){
 const s=state.session;if(!s?.feedback)return;const item=s.queue.shift();
 // 每个词在同一组最多额外重试一次，防止无限挫败循环。
 if(!s.feedback.correct&&!item.retry)s.queue.splice(Math.min(3,s.queue.length),0,{id:item.id,stage:'test',retry:true});
 s.feedback=null;save();render()
}
function wordlist(){
 const ws=WORDS.filter(w=>(filter==='all'||filter==='learned'&&state.records[w.id]||filter==='mistakes'&&mistakes().some(x=>x.id===w.id)||filter===String(w.group))&&(!query||(w.word+' '+w.meaning).toLowerCase().includes(query.toLowerCase())));
 return header('我的词库')+'<p class="muted small">从基础词到阅读短语，共 '+WORDS.length+' 个。先学习排在前面的词，不必一开始追求全部记住。</p><input class="search" id="search" aria-label="搜索英文或中文" placeholder="搜索单词或中文意思" value="'+esc(query)+'"><div class="filters">'+[['all','全部'],['learned','已接触'],['mistakes','易错词'],...groups.map((g,i)=>[String(i),g[0]])].map(([v,l])=>'<button data-filter="'+v+'" class="'+(filter===v?'selected':'')+'">'+l+'</button>').join('')+'</div><div class="panel"><div class="row"><h3>'+ws.length+' 个词与短语</h3><span class="small muted">点击单词，查看学习卡</span></div><div id="wordrows">'+(ws.length?ws.map(w=>'<div class="wordrow"><div><button class="linkbtn" style="padding:0;text-align:left" data-detail="'+w.id+'"><strong lang="en">'+esc(w.word)+'</strong></button><small>'+ (state.records[w.id]?(state.records[w.id].level>=3?'稳定记忆':'正在复习'):'尚未学习')+'</small></div><span class="small">'+esc(w.meaning)+'</span><button class="speaker" data-speak="'+esc(w.word)+'">◖)) 听发音</button></div>').join(''):'<div class="empty">没有找到对应单词。试试其他关键词。</div>')+'</div></div>';
}
function reading(){
 const r=READINGS[readingIndex],saved=state.readings[dateKey()+'-'+readingIndex];
 return header('把单词放回句子里','自编入门练习 · 不是历年真题')+'<div class="learnwrap"><div class="filters">'+READINGS.map((x,i)=>'<button data-reading="'+i+'" class="'+(i===readingIndex?'selected':'')+'">'+(i+1)+'. '+x.title+'</button>').join('')+'</div><div class="panel"><div class="row"><h2>'+r.title+'</h2><span class="badge">入门阅读 '+(readingIndex+1)+' / '+READINGS.length+'</span></div><p class="small muted">先读下方问题，再找答案。点击英文单词可查意思。</p><h3>'+r.question+'</h3><p class="reading" lang="en">'+r.text.replace(/[A-Za-z]+/g,w=>'<button data-gloss="'+w+'">'+w+'</button>')+'</p>'+(gloss?'<div class="tip" role="status">'+esc(gloss)+'</div>':'')+'<div class="row"><button class="linkbtn" data-act="translate">'+(translation?'收起':'查看')+'全文翻译</button><button class="speaker" data-speak="'+esc(r.text)+'">◖)) 朗读全文</button></div>'+(translation?'<div class="tip">'+r.translation+'</div>':'')+'<div class="choicegrid">'+r.options.map((o,i)=>'<button class="choice '+(saved?(i===r.correct?'correct':saved.choice===i?'wrong':''):'')+'" data-reading-choice="'+i+'" '+(saved?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+o+'</button>').join('')+'</div>'+(saved?'<div class="feedback"><b>'+(saved.correct?'答对了！':'正确答案是 '+String.fromCharCode(65+r.correct)+'。')+'</b><br>'+r.explain+'</div><div class="answerbar"><button class="btn" data-act="nextreading">'+(readingIndex<READINGS.length-1?'下一篇短文':'回到第一篇')+'</button></div>':'')+'<div class="tip"><b>阅读方法</b><br>'+r.tip+'</div></div><p class="footer">这些短文用于从零起步，不代表成人高考的实际难度。完成后请结合正式真题练习。</p></div>';
}
function plan(){
 return header('30天，把时间用在关键处')+'<div class="panel" style="margin-bottom:22px"><div class="row"><div><h2>每天 '+state.minutes+' 分钟，先保住复习</h2><p class="muted small" style="margin:0">'+(state.minutes===30?'10分钟复习 + 15分钟新词 + 5分钟短文':'20分钟复习 + 25分钟新词 + 15分钟短文与句型')+'。复习积压时，优先旧词，少学新词。</p></div><button class="btn soft" data-nav="settings">调整</button></div></div><div class="planlist">'+[['01—07','先搭句子的骨架','人称代词、be动词、常用动作和连接词。看懂“谁 + 做什么”，每天跟读基础例句。'],['08—14','把词放进生活','时间、人物、地点、常见描述。练习找人物、时间、原因，不逐字翻译整篇文章。'],['15—23','连接到阅读和做题','阅读核心词与常见短语。复习易错词，注意 but、because、however 前后的关系。'],['24—30','少学新词，多做回顾','距目标日期7天内，新词目标降到5个。回顾旧词，并在软件外安排真题、语法、语音和写作。']].map(([days,title,text])=>'<div class="panel"><div class="eyebrow">DAY '+days+'</div><h2>'+title+'</h2><p>'+text+'</p></div>').join('')+'</div><div class="panel" style="margin-top:22px"><h2>软件怎样帮你记住？</h2><p class="small muted">先看词义，再做选择回忆。答对后，按约1、3、7、14、21天后的间隔复习；答错后，稍后在本组重试一次，并安排10分钟后复习。连续答对至少3次标为“稳定记忆”，这不是考试掌握率。</p><p class="small muted">备考范围参考成人高考2024年版大纲启用通知；本软件词库和练习为自编基础材料，未宣称覆盖全部考点。</p><a class="small" href="https://www.neea.edu.cn/html1/report/2404/568-1.htm" target="_blank" rel="noopener">查看中国教育考试网大纲通知 ↗</a></div>';
}
function settings(){
 return header('按你的节奏学习')+'<div class="settings"><form id="settingsform" class="panel"><h2>你的备考安排</h2><div class="field"><label for="exam">目标考试日期</label><input id="exam" name="exam" type="date" value="'+state.exam+'" required><p class="small muted">默认是首次使用后30天，仅为计划日期，请按准考证修改。</p></div><div class="field"><label for="minutes">每天能花多少时间？</label><select id="minutes" name="minutes"><option value="30" '+(state.minutes===30?'selected':'')+'>30分钟 · 每天15个新词</option><option value="60" '+(state.minutes===60?'selected':'')+'>60分钟 · 每天25个新词</option></select><p class="small muted">最后7天自动降到每天5个新词。时间为建议分配，不是计时器。</p></div><button class="btn" type="submit">保存学习安排</button></form><div class="panel" style="margin-top:20px"><h2>学习记录与备份</h2><p class="small muted">记录只保存在当前浏览器，不会自动跨设备同步。清除浏览器数据可能丢失进度。换手机或电脑前先导出备份，再在另一设备导入。</p><button class="btn outline" data-act="export">导出备份</button><label for="importfile" class="btn outline" style="display:inline-block;cursor:pointer">导入备份</label><input id="importfile" type="file" accept=".json,application/json" class="sr"><p class="small muted">导入会替换当前记录，导入前会要求你确认。发音使用设备的英语语音；若没有声音，请检查音量或英语语音包。</p></div></div>';
}
function speak(text){
 if(!('speechSynthesis'in window)){toast('当前浏览器不支持朗读，请用支持语音的浏览器打开。');return}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.78;const voices=speechSynthesis.getVoices();const v=voices.find(v=>v.lang==='en-US')||voices.find(v=>v.lang.startsWith('en'));if(v)u.voice=v;u.onerror=()=>toast('朗读暂不可用，请检查设备音量和英语语音设置。');speechSynthesis.speak(u)
}
function lookup(word){const low=word.toLowerCase();return GLOSS[low]||WORDS.find(w=>w.word.toLowerCase()===low)?.meaning||'这个词暂未收录；可展开全文翻译辅助理解。'}
function bind(){
 document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav));
 document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak));
 document.querySelectorAll('[data-act]').forEach(b=>b.onclick=()=>actions[b.dataset.act]?.());
 document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>answer(+b.dataset.choice));
 document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;render()});
 document.querySelectorAll('[data-reading]').forEach(b=>b.onclick=()=>{readingIndex=+b.dataset.reading;translation=false;gloss='';render()});
 document.querySelectorAll('[data-gloss]').forEach(b=>b.onclick=()=>{gloss=b.dataset.gloss+'：'+lookup(b.dataset.gloss);render()});
 document.querySelectorAll('[data-reading-choice]').forEach(b=>b.onclick=()=>{const k=dateKey()+'-'+readingIndex;if(state.readings[k])return;const i=+b.dataset.readingChoice;state.readings[k]={choice:i,correct:i===READINGS[readingIndex].correct};save();render()});
 document.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>detail(b.dataset.detail));
 if($('#search'))$('#search').oninput=e=>{const pos=e.target.selectionStart;query=e.target.value;render();$('#search').focus();$('#search').setSelectionRange(pos,pos)};
 if($('#settingsform'))$('#settingsform').onsubmit=e=>{e.preventDefault();const d=$('#exam').value;if(!validDate(d)){toast('请选择有效的考试日期');return}state.exam=d;state.minutes=+$('#minutes').value;save();render();toast('学习安排已保存')};
 if($('#importfile'))$('#importfile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>2000000)throw Error('文件过大');const n=validate(JSON.parse(await f.text()));if(confirm('导入将替换当前学习记录，确定继续吗？')){state=n;save();render();toast('备份已恢复')}}catch(err){toast('未导入：'+err.message)}};
}
function detail(id){
 const w=WORDS.find(x=>x.id===id);const dlg=document.createElement('dialog');dlg.style.cssText='border:1px solid #e3e8f2;border-radius:18px;max-width:650px;width:92%;padding:28px;color:#172443';
 dlg.innerHTML='<button class="btn outline" id="closedialog">关闭</button><div class="word" style="font-size:40px">'+esc(w.word)+'</div><div class="meaning">'+esc(w.meaning)+'</div>'+example(w);
 document.body.append(dlg);dlg.showModal();dlg.querySelector('#closedialog').onclick=()=>dlg.close();dlg.onclose=()=>dlg.remove();dlg.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak))
}
const actions={start:()=>start(),review:()=>start('review'),new:()=>start('learn'),mistakes:()=>start('mistakes'),learned,next,unknown:()=>answer(-1),finish:()=>{state.session=null;save();navigate('home')},finishread:()=>{state.session=null;save();navigate('reading')},translate:()=>{translation=!translation;render()},nextreading:()=>{readingIndex=(readingIndex+1)%READINGS.length;translation=false;gloss='';render()},export:()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='词阶学习备份-'+dateKey()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已导出备份')}};
document.addEventListener('keydown',e=>{if(view!=='learn'||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||document.querySelector('dialog[open]'))return;if(['1','2','3','4'].includes(e.key)){answer(+e.key-1)}if(e.key==='Enter'&&state.session?.feedback){e.preventDefault();next()}});
render();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'get_learning_summary',description:'Read the current local learning progress without changing it.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute(input){if(input&&Object.keys(input).length)throw Error('No input fields allowed');return{learned:Object.keys(state.records).length,due:due().length,today:today(),dailyNewGoal:goal(),examDate:state.exam}}})).catch(()=>{})}catch{}}

