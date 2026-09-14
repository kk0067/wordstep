/* 内容发布前检查：node validate-content.js */
const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync('words.js','utf8')+fs.readFileSync('content-data.js','utf8');const ctx={};vm.createContext(ctx);vm.runInContext(src+';this.W=WORDS;this.R=READINGS;',ctx);
const W=ctx.W,R=ctx.R,ids=a=>a.map(x=>x.id),dupe=a=>a.filter((x,i)=>a.indexOf(x)!==i);
const problems=[];if(dupe(ids(W)).length)problems.push('Duplicate vocabulary IDs');if(dupe(W.map(x=>x.word.toLowerCase())).length)problems.push('Duplicate vocabulary words');if(dupe(ids(R)).length)problems.push('Duplicate reading IDs');
for(const r of R){if(!r.id||!r.text||r.text.split(/\s+/).length<20)problems.push('Short reading: '+r.id);if(!Array.isArray(r.options)||r.options.length!==4)problems.push('Options: '+r.id);if(!Number.isInteger(r.correct)||r.correct<0||r.correct>3)problems.push('Answer: '+r.id);if(!r.level||!r.type)problems.push('Missing level/type: '+r.id)}
console.log('Vocabulary:',W.length,'entries');console.log('Readings:',R.length,'articles');console.log('Questions:',R.length);console.log('Levels:',JSON.stringify(R.reduce((a,x)=>(a[x.level]=(a[x.level]||0)+1,a),{})));console.log('Duplicate IDs:',dupe(ids(W).concat(ids(R))).length);console.log('Invalid answers:',problems.filter(x=>x.startsWith('Answer')).length);if(problems.length){console.error(problems.slice(0,20).join('\n'));process.exit(1)}
