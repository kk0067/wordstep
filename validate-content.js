/* WordStep 内容质量校验工具
 * 用法: node validate-content.js
 * 检查: 词汇重复/缺字段/短语误算, 阅读重复/词数/题型/选项/解析
 */
const fs=require('fs'),vm=require('vm');

// 加载所有词汇文件
let vocabSrc='';
const vocabFiles=['words.js','vocab-level0-1.js','vocab-level2-3.js','vocab-level4-5-phrases.js'];
for(const f of vocabFiles){
  if(fs.existsSync(f))vocabSrc+=fs.readFileSync(f,'utf8')+'\n';
}
// 加载阅读数据
if(fs.existsSync('content-data.js'))vocabSrc+=fs.readFileSync('content-data.js','utf8')+'\n';

const ctx={};
vm.createContext(ctx);
try{
  vm.runInContext(vocabSrc+`
    ;if(typeof WORDS==='undefined'){
      var WORDS=[];
      if(typeof VOCAB_LEVEL_0_1!=='undefined')WORDS=WORDS.concat(VOCAB_LEVEL_0_1);
      if(typeof VOCAB_LEVEL_2_3!=='undefined')WORDS=WORDS.concat(VOCAB_LEVEL_2_3);
      if(typeof VOCAB_LEVEL_4_5!=='undefined')WORDS=WORDS.concat(VOCAB_LEVEL_4_5);
      if(typeof VOCAB_PHRASES!=='undefined')WORDS=WORDS.concat(VOCAB_PHRASES);
    }
    this.W=WORDS;this.R=typeof READINGS!=='undefined'?READINGS:[];
  `,ctx);
}catch(e){
  console.error('加载数据失败:',e.message);
  process.exit(1);
}

const W=ctx.W||[],R=ctx.R||[];
const problems=[];
const warnings=[];

console.log('========== 词汇校验 ==========');

// 1. ID检查
const ids=W.map(w=>w.id);
const dupeIds=ids.filter((id,i)=>ids.indexOf(id)!==i);
if(dupeIds.length){problems.push('重复ID: '+dupeIds.slice(0,10).join(', ')+(dupeIds.length>10?'...':''));}

// 2. 单词重复检查（不区分大小写）
const wordsLower=W.filter(w=>!w.isPhrase).map(w=>w.word&&w.word.toLowerCase());
const dupeWords=wordsLower.filter((w,i)=>w&&wordsLower.indexOf(w)!==i);
if(dupeWords.length){problems.push('重复单词: '+[...new Set(dupeWords)].slice(0,15).join(', ')+(dupeWords.length>15?'...':''));}

// 3. 缺字段检查
const requiredFields=['id','word','phonetic','partOfSpeech','meaning','level','frequency','tags'];
for(const w of W){
  for(const f of requiredFields){
    if(w[f]===undefined||w[f]===null||w[f]===''){
      problems.push('缺字段 '+f+': '+(w.word||w.id||'unknown'));
    }
  }
  if(w.level!==undefined&&(w.level<0||w.level>5)){
    problems.push('level越界: '+w.word+' ('+w.level+')');
  }
  if(w.frequency!==undefined&&(w.frequency<1||w.frequency>10)){
    problems.push('frequency越界: '+w.word+' ('+w.frequency+')');
  }
}

// 4. 统计
const uniqueWords=W.filter(w=>!w.isPhrase);
const phrases=W.filter(w=>w.isPhrase);
const core2000=W.filter(w=>w.tags&&w.tags.includes('Core2000'));
const core3000=W.filter(w=>w.tags&&w.tags.includes('Core3000'));
const levelCounts={};
for(const w of uniqueWords){levelCounts[w.level]=(levelCounts[w.level]||0)+1;}

console.log('Unique Words:',uniqueWords.length);
console.log('Phrases:',phrases.length);
console.log('Core 2000:',core2000.length);
console.log('Core 3000:',core3000.length);
console.log('Level分布:',JSON.stringify(levelCounts));
console.log('重复ID:',dupeIds.length);
console.log('重复单词:',[...new Set(dupeWords)].length);

// 5. 短语误算检查（包含空格的非短语标记）
const misclassified=W.filter(w=>!w.isPhrase&&w.word&&w.word.includes(' '));
if(misclassified.length){warnings.push('可能误算为单词的短语: '+misclassified.slice(0,10).map(w=>w.word).join(', '));}

console.log('\n========== 阅读校验 ==========');

// 阅读检查
if(R.length){
  console.log('文章总数:',R.length);
  const formal=R.filter(r=>r.level==='D'||r.type&&r.type.includes('标准'));
  const basic=R.filter(r=>r.level!=='D'&&(!r.type||!r.type.includes('标准')));
  console.log('成考标准:',formal.length);
  console.log('基础过渡:',basic.length);

  // 题目统计
  let totalQuestions=0;
  const qTypes={};
  for(const r of R){
    const qs=r.questions||(r.question?[{question:r.question,options:r.options,correct:r.correct}]:[]);
    totalQuestions+=qs.length;
    for(const q of qs){
      const qt=q.questionType||'未标注';
      qTypes[qt]=(qTypes[qt]||0)+1;
    }
  }
  console.log('总题数:',totalQuestions);
  console.log('平均每篇题数:',(totalQuestions/R.length).toFixed(1));
  console.log('题型分布:',JSON.stringify(qTypes));

  // 词数统计
  const wordCounts=R.map(r=>(r.text||'').split(/\s+/).filter(Boolean).length);
  console.log('词数范围:',Math.min(...wordCounts)+'-'+Math.max(...wordCounts));
  console.log('平均词数:',Math.round(wordCounts.reduce((a,b)=>a+b,0)/wordCounts.length));

  // 重复正文
  const bodies=R.map(r=>(r.text||'').trim());
  const repeatedBodies=bodies.length-new Set(bodies).size;
  console.log('重复正文:',repeatedBodies);

  // 重复题目
  const allQuestions=R.flatMap(r=>(r.questions||(r.question?[{question:r.question}]:[])).map(q=>q.question));
  const repeatedQuestions=allQuestions.length-new Set(allQuestions).size;
  console.log('重复题目:',repeatedQuestions);

  // 答案分布
  const answerDist={0:0,1:0,2:0,3:0};
  for(const r of R){
    const qs=r.questions||(r.question?[{correct:r.correct}]:[]);
    for(const q of qs){if(q.correct>=0&&q.correct<=3)answerDist[q.correct]++;}
  }
  console.log('答案分布 A/B/C/D:',JSON.stringify({A:answerDist[0],B:answerDist[1],C:answerDist[2],D:answerDist[3]}));

  // 每篇题数检查
  for(const r of R){
    const qs=r.questions||(r.question?[1]:[]);
    if(qs.length<4&&r.level==='D')warnings.push('成考标准文章题数不足4: '+(r.title||r.id));
    if(qs.length===0)problems.push('无题目: '+(r.title||r.id));
    // 选项检查
    for(const q of qs){
      if(q.options&&q.options.length!==4)problems.push('选项数不是4: '+(r.title||r.id));
      if(q.correct===undefined)problems.push('无正确答案: '+(r.title||r.id));
    }
    // 词数检查
    const wc=(r.text||'').split(/\s+/).length;
    if(r.level==='D'&&wc<200)warnings.push('成考标准文章词数偏少('+wc+'): '+(r.title||r.id));
  }

  if(repeatedBodies>5)problems.push('大量重复正文 ('+repeatedBodies+')，需要编辑审查');
  if(repeatedQuestions>10)problems.push('大量重复题目 ('+repeatedQuestions+')，需要编辑审查');
}else{
  console.log('暂无阅读数据');
}

console.log('\n========== 结果 ==========');
console.log('问题:',problems.length);
console.log('警告:',warnings.length);
if(problems.length){
  console.error('\n--- 问题列表 ---');
  problems.slice(0,30).forEach(p=>console.error(' -',p));
  if(problems.length>30)console.error(' ... 还有 '+(problems.length-30)+' 个问题');
}
if(warnings.length){
  console.log('\n--- 警告列表 ---');
  warnings.slice(0,20).forEach(w=>console.log(' !',w));
}
if(problems.length){process.exit(1);}
console.log('\n✓ 校验通过');
