// WordStep 阅读数据层
// 基础过渡阅读 + 成考标准阅读批次（分批加载）
// 移除了旧的模板批量生成内容

// ===== 基础过渡阅读（80-180词，给基础弱时搭桥用）=====
const BASIC_READINGS = [
  {
    id: "b001", title: "每天一点点", type: "基础过渡", level: "A", category: "学习方法",
    text: "Li Ming works in a shop. He wants to learn English. Every evening, he reads for thirty minutes. He is tired, but he does not give up. After a month, he can read some short stories. He finds that a little practice every day works better than studying for a whole day once a month.",
    translation: "李明在一家商店工作。他想学英语。每天晚上，他阅读三十分钟。他很累，但没有放弃。一个月后，他能读一些短篇故事。他发现每天一点点练习比一个月学一整天效果更好。",
    question: "李明每晚阅读多长时间？", questionType: "细节题",
    options: ["30分钟", "一小时", "一整晚", "30天"], correct: 0,
    explain: "定位 Every evening（每晚），后面是 thirty minutes（三十分钟）。", tip: "先读题，再回原文找时间、地点或人物。",
    questions: null
  },
  {
    id: "b002", title: "为什么要走路", type: "基础过渡", level: "A", category: "健康",
    text: "Many people go to work by car. Anna walks to work every day. Her home is near her office. She thinks walking is good for her health. It also helps her save money. She arrives at work feeling fresh and ready to start the day.",
    translation: "许多人开车去上班。安娜每天步行上班。她的家离办公室很近。她认为走路有益于健康。走路也帮助她省钱。她到达工作地点时感觉精神焕发，准备好开始新的一天。",
    question: "安娜认为走路有什么好处？", questionType: "细节题",
    options: ["可以更晚起床", "有益健康，还能省钱", "能买一辆新车", "可以不用工作"], correct: 1,
    explain: "good for her health 和 save money 分别对应有益健康、省钱。also 连接两项好处。", tip: "also、and 常连接并列信息。",
    questions: null
  },
  {
    id: "b003", title: "网上学习", type: "基础过渡", level: "A", category: "教育",
    text: "Learning online is popular. People can study at home and choose their own time. However, it is easy to stop studying when no teacher is there. A study plan can help people keep learning. Students who follow a plan usually make better progress than those who study whenever they feel like it.",
    translation: "网上学习很受欢迎。人们可以在家学习，并选择自己的时间。然而，没有老师在场时，人们很容易停止学习。学习计划能帮助人们继续学下去。按照计划学习的学生通常比那些想学才学的学生进步更大。",
    question: "这段话建议用什么帮助坚持学习？", questionType: "细节题",
    options: ["买电脑", "停止学习", "去学校", "制订学习计划"], correct: 3,
    explain: "最后一句 A study plan can help people keep learning. 给出建议。", tip: "遇到 however、but，要注意转折之后的信息。",
    questions: null
  },
  {
    id: "b004", title: "小小的改变", type: "基础过渡", level: "A", category: "习惯",
    text: "Jack used to go to bed late. He often felt tired at work. Last week, he decided to turn off his phone at ten. Now he sleeps better and has more time to read in the morning. He says that changing one small habit can make a big difference in daily life.",
    translation: "杰克过去常常晚睡。他上班时经常感觉疲惫。上周，他决定十点关掉手机。现在他睡得更好，早上也有更多时间阅读。他说改变一个小习惯能在日常生活中产生很大影响。",
    question: "杰克为什么做出改变？", questionType: "推理题",
    options: ["他工作时经常很累", "他想买新手机", "他不能阅读", "他不喜欢早晨"], correct: 0,
    explain: "第二句 He often felt tired at work. 描述改变前的问题，由此可推断他是因为疲惫才改变。", tip: "used to、last week、now 是区分过去和现在的线索。",
    questions: null
  },
  {
    id: "b005", title: "社区图书馆", type: "基础过渡", level: "B", category: "公共服务",
    text: "The small town of Greenfield opened a new library last month. Before that, people had to travel twenty kilometers to borrow books. The new library has over five thousand books, a reading room, and a small computer center. Many elderly people visit it every morning to read newspapers. Students come in the afternoon to do homework. The town mayor says that a library is more than a building with books; it is a place where the community comes together.",
    translation: "格林菲尔德小镇上个月开了一家新图书馆。在此之前，人们不得不走二十公里去借书。新图书馆有五千多本书、一个阅览室和一个小型电脑中心。许多老人每天上午来读报纸。学生下午来做作业。镇长说，图书馆不仅仅是一座有书的建筑，它是社区聚集的地方。",
    question: "新图书馆开放前，人们借书需要走多远？", questionType: "细节题",
    options: ["五公里", "二十公里", "五十公里", "两百公里"], correct: 1,
    explain: "第二句 Before that, people had to travel twenty kilometers to borrow books. 直接给出答案。", tip: "数字信息是细节题常考点。",
    questions: null
  }
];

// ===== 成考标准阅读（从批次文件加载）=====
let FORMAL_READINGS = [];
if (typeof READING_BATCH_1 !== "undefined" && Array.isArray(READING_BATCH_1)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_1);
}
if (typeof READING_BATCH_2 !== "undefined" && Array.isArray(READING_BATCH_2)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_2);
}
if (typeof READING_BATCH_3 !== "undefined" && Array.isArray(READING_BATCH_3)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_3);
}

if (typeof READING_BATCH_4 !== "undefined" && Array.isArray(READING_BATCH_4)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_4);
}

if (typeof READING_BATCH_5 !== "undefined" && Array.isArray(READING_BATCH_5)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_5);
}

if (typeof READING_BATCH_6 !== "undefined" && Array.isArray(READING_BATCH_6)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_6);
}

if (typeof READING_BATCH_7 !== "undefined" && Array.isArray(READING_BATCH_7)) {
  FORMAL_READINGS = FORMAL_READINGS.concat(READING_BATCH_7);
}

// 合并：基础过渡在前，成考标准在后
READINGS = BASIC_READINGS.concat(FORMAL_READINGS);

// 统计
const CONTENT_STATS = {
  vocabulary: typeof WORDS !== "undefined" ? WORDS.length : 0,
  readings: READINGS.length,
  basicReadings: BASIC_READINGS.length,
  formalReadings: FORMAL_READINGS.length,
  totalQuestions: READINGS.reduce((sum, r) => {
    if (r.questions && Array.isArray(r.questions)) return sum + r.questions.length;
    if (r.question) return sum + 1;
    return sum;
  }, 0),
  formalQuestions: FORMAL_READINGS.reduce((sum, r) => {
    if (r.questions && Array.isArray(r.questions)) return sum + r.questions.length;
    return sum;
  }, 0)
};
