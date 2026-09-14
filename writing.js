// 成考专升本英语作文题库
// 10 个高频题目：题型不重复，词数 100-120，贴近成考真题
const WRITING_DATA = [
  {
    id: "w001",
    title: "感谢老师的帮助（感谢信）",
    type: "书信",
    category: "教育",
    requirement: "你是李华。在备考期间，你的英语老师王老师在学习上给了你很多帮助。请你写一封感谢信，内容包括：1）表达你的感谢；2）举一个具体例子说明他/她是怎样帮助你的；3）再次表达感谢并送上祝福。词数 100 左右。",
    wordCount: 100,
    template: "第一段：开门见山，说明写信目的——表达感谢（I am writing to express my gratitude for...）\n第二段：具体回忆老师的帮助，举一个真实小例子（课后讲题、考前鼓励等），并写出取得的进步\n第三段：再次真诚感谢，送上祝福与署名",
    usefulSentences: [
      "I am writing to express my sincere gratitude for your help.",
      "Thank you so much for your kindness and patience.",
      "It was very kind of you to help me with my English.",
      "Without your help, I wouldn't have made such great progress.",
      "Thanks to you, I became confident in English.",
      "I will keep your advice in mind forever.",
      "Best wishes to you and your family."
    ],
    sample: "Dear Mr. Wang,\nI am writing to express my sincere gratitude for your generous help with my English study.\nDuring the preparation for the exam, you always stayed after class to explain difficult grammar points to me patiently. When I felt worried and wanted to give up, it was you who encouraged me and told me to be confident. Thanks to your help, my English has improved a lot and I finally did well in the exam.\nThank you again from the bottom of my heart. I wish you good health and all the best.\nYours,\nLi Hua",
    analysis: "结构：标准三段式。第一段一句话点明写信目的；第二段用一个具体场景（课后讲题、考前鼓励）把“感谢”落到实处，避免空喊口号，并写出结果（进步、考好）；第三段再次感谢加祝福收尾。\n亮点句型：① I am writing to express my sincere gratitude for... 是感谢信万能开头；② it was you who... 用强调句突出对方的帮助，比 you helped me 更有情感；③ Thanks to your help... 表“多亏了……”，是高分短语。\n用词：gratitude、generous、patiently、improve a lot、from the bottom of my heart 等词朴素但得体，符合成考书信要求，不堆砌难词。"
  },
  {
    id: "w002",
    title: "给朋友的英语学习建议（建议信）",
    type: "书信",
    category: "学习方法",
    requirement: "你是李华。你的朋友张华写信告诉你，他在英语学习上遇到了困难，听力和写作都跟不上，很焦虑。请你写一封回信，安慰他并提出至少两条具体的学习建议。词数 100 左右。",
    wordCount: 100,
    template: "第一段：表示同情理解，说明写信目的——提建议（Here are some suggestions for you.）\n第二段：给出 2-3 条具体建议，每条用连接词引出（First... / Second... / Besides...）\n第三段：表达希望建议有用，并送上鼓励与署名",
    usefulSentences: [
      "I'm sorry to hear that you have difficulty in learning English.",
      "Here are some suggestions for you.",
      "Why not listen to English for 20 minutes every day?",
      "You'd better keep a diary in English.",
      "It is a good idea to read aloud in the morning.",
      "Don't be afraid of making mistakes.",
      "Practice makes perfect.",
      "I hope you will find these suggestions helpful."
    ],
    sample: "Dear Zhang Hua,\nI'm sorry to hear that you are having trouble with your English study. As your friend, I'd like to give you some useful advice.\nFirst, why not listen to English for 20 minutes every day? The more you listen, the easier it becomes. Second, you'd better keep a diary in English, because writing every day is the best way to improve your writing. Besides, don't be afraid of making mistakes, since practice makes perfect.\nI hope you will find these suggestions helpful. I'm sure your English will get better soon.\nYours,\nLi Hua",
    analysis: "结构：三段式建议信。第一段先共情（I'm sorry to hear...）再引出建议；第二段用 First / Second / Besides 三条建议，条理清晰，每条都可直接套用；第三段鼓励收尾。\n亮点句型：① Why not...? 提出建议的经典句型；② The more..., the easier... “越……越……”是成考高频结构；③ You'd better... / Don't be afraid of... 都是建议类书信必备句。\n用词：have trouble with、advice、diary、practice makes perfect（熟能生巧）等表达地道，建议具体可操作，不会写空话。"
  },
  {
    id: "w003",
    title: "邀请外教参加英语晚会（邀请信）",
    type: "书信",
    category: "社交活动",
    requirement: "你是李华。你们班将于下周五晚上举办英语晚会，想邀请外教 Mr. Smith 参加。请写一封邀请信，说明晚会的时间、地点和活动内容，并邀请他表演一个小节目。词数 100 左右。",
    wordCount: 100,
    template: "第一段：说明写信目的——发出邀请（I am writing to invite you to...）\n第二段：介绍活动细节：时间、地点、节目内容，并发出更热情的邀请（若能表演节目更好）\n第三段：请对方告知能否参加，期待回复与署名",
    usefulSentences: [
      "I am writing to invite you to take part in...",
      "The activity will be held in... at...",
      "We have prepared many interesting programs, such as...",
      "It would be our great honor if you could come.",
      "We would be very glad if you could give us a short performance.",
      "Please let us know whether you can come.",
      "I'm looking forward to your early reply."
    ],
    sample: "Dear Mr. Smith,\nI am writing, on behalf of our class, to invite you to our English evening party.\nThe party will be held in our classroom, Room 301, at 7:00 p.m. next Friday. We have prepared many interesting programs, such as English songs, short plays and story-telling. We have also prepared some fruit and drinks for everyone. It would be our great honor if you could give us a short performance. We all hope you can come and spend a happy evening with us.\nPlease let us know whether you can come. I'm looking forward to your early reply.\nYours sincerely,\nLi Hua",
    analysis: "结构：三段式邀请信。第一段代表全班发出邀请；第二段按“时间→地点→节目→再邀请表演”的顺序把信息交代完整；第三段请对方确认并期待回复。\n亮点句型：① on behalf of our class “代表全班”，书面得体；② be held in... at... 用于交代时间地点；③ It would be our great honor if you could... 是非常礼貌的邀请句型；④ whether 引导宾语从句，请对方确认。\n用词：program、performance、evening party、sincerely 等用词正式礼貌，符合邀请外教的语境。"
  },
  {
    id: "w004",
    title: "申请暑期英语夏令营志愿者（申请信）",
    type: "书信",
    category: "工作求职",
    requirement: "你是李华。你在报纸上看到某机构招聘暑期英语夏令营志愿者的广告。请写一封申请信，介绍自己的年龄、英语水平、相关经历和性格，说明你为什么适合这份工作。词数 100 左右。",
    wordCount: 100,
    template: "第一段：说明信息来源与写信目的——申请职位（I am writing to apply for...）\n第二段：介绍自身条件：年龄、英语水平、相关经历、性格特点，并总结自己适合这份工作\n第三段：恳请对方考虑，期待回复与署名",
    usefulSentences: [
      "I learned from the newspaper that you need volunteers.",
      "I am writing to apply for the position of...",
      "I am good at English, especially spoken English.",
      "I have rich experience in communicating with foreigners.",
      "I think I am quite fit for this job.",
      "I am outgoing, patient and fond of children.",
      "I would be thankful if you could consider my application.",
      "I'm looking forward to your reply."
    ],
    sample: "Dear Sir or Madam,\nI learned from the newspaper that you need volunteers for your summer English camp. I am writing to apply for this position.\nI am 20 years old and I am good at English, especially spoken English. Last year I worked as a guide for some foreign tourists, so I have rich experience in communicating with foreigners. Besides, I am outgoing, patient and fond of children. I think I am quite fit for this job.\nI would be thankful if you could consider my application. I am looking forward to your reply.\nYours sincerely,\nLi Hua",
    analysis: "结构：三段式申请信。第一段交代信息来源和申请目的；第二段用“年龄+英语水平+经历+性格”四个卖点证明自己，最后一句 I think I am quite fit for this job 总结；第三段礼貌收尾。\n亮点句型：① apply for the position of... 申请职位固定说法；② have rich experience in doing... “有丰富的……经验”；③ be fit for... “适合……”；④ be fond of... “喜欢……”，都是求职类高频搭配。\n用词：volunteer、camp、guide、outgoing、patient、application 等词准确专业，自我介绍有细节（当过导游），显得真实可信。"
  },
  {
    id: "w005",
    title: "为失约道歉（道歉信）",
    type: "书信",
    category: "人际交往",
    requirement: "你是李华。你答应了朋友 Tom 一起去听音乐会，但因为母亲突然生病，你没能去成，也没能提前通知他。请写一封道歉信，表达歉意，说明原因，并提出补救办法。词数 100 左右。",
    wordCount: 100,
    template: "第一段：直接道歉并说明所为何事道歉（I am terribly sorry that...）\n第二段：诚恳解释原因（母亲生病送医、太忙没来得及通知），表达内疚\n第三段：提出补救办法（再约一次），再次请求原谅与署名",
    usefulSentences: [
      "I am terribly sorry that I couldn't...",
      "I am writing to say sorry to you.",
      "The reason is that my mother suddenly fell ill.",
      "I was so busy that I forgot to tell you in time.",
      "I feel really sorry for making you wait.",
      "Would it be possible if we...?",
      "I sincerely hope you can accept my apology."
    ],
    sample: "Dear Tom,\nI am terribly sorry that I couldn't go to the concert with you last Saturday. I am writing to say sorry to you.\nThe reason is that my mother suddenly fell ill and I had to take her to the hospital that day. I was so busy looking after her that I completely forgot to tell you in time. I know you had been looking forward to this concert, and I feel really sorry for making you wait alone.\nWould it be possible for us to go to another concert this weekend? I sincerely hope you can accept my apology.\nYours,\nLi Hua",
    analysis: "结构：三段式道歉信。第一段开门见山直接道歉；第二段先给客观原因（母亲生病），再承认自己的疏忽（忘了通知），态度诚恳不找借口；第三段用再约一场来补救。\n亮点句型：① The reason is that... “原因是……”解释理由；② so...that... “如此……以至于……”说明为何没通知；③ Would it be possible for us to...? 委婉提出补救；④ accept my apology “接受我的道歉”。\n用词：terribly、fell ill、completely、forgive 相关表达自然得体，语气真诚，朋友间书信不过分正式。"
  },
  {
    id: "w006",
    title: "投诉购买的电子词典（投诉信）",
    type: "书信",
    category: "消费维权",
    requirement: "你是李华。上周你在某商店买了一部电子词典，回家后发现按键失灵，有时无法开机，打电话也没人接。请写一封投诉信，说明购买情况、产品问题和造成的麻烦，并要求退换或退款。词数 100 左右。",
    wordCount: 100,
    template: "第一段：说明写信目的——投诉，并交代购买时间与物品（I am writing to make a complaint about...）\n第二段：具体描述产品问题（按键、开机）以及给你带来的不便\n第三段：明确提出要求（换新或退款），希望尽快处理并期待回复",
    usefulSentences: [
      "I am writing to make a complaint about...",
      "I bought... from your shop last week.",
      "However, there is something wrong with it.",
      "Some of the buttons don't work.",
      "It caused me much trouble in my study.",
      "I would like you to change a new one for me.",
      "I insist on a full refund.",
      "I hope you can deal with it as soon as possible."
    ],
    sample: "Dear Sir or Madam,\nI am writing to make a complaint about an electronic dictionary I bought from your shop last week.\nIt looked nice when I bought it, but two days later, it went wrong. Some of the buttons don't work, and sometimes it cannot be turned on at all. I called your shop several times, but nobody answered. This has caused me much trouble in my study.\nI would like you to change a new one for me or give me a full refund. I hope you can deal with it as soon as possible.\nYours sincerely,\nLi Hua",
    analysis: "结构：三段式投诉信。第一段表明投诉对象和购买时间；第二段按“出问题→具体故障→联系不上→造成麻烦”推进，有理有据；第三段明确提出两个解决方案，要求尽快处理。\n亮点句型：① make a complaint about... “投诉……”；② there is something wrong with... “……出问题了”；③ It caused me much trouble... “给我造成很大麻烦”；④ change a new one / give a full refund “换新/全额退款”，要求具体。\n用词：electronic dictionary、button、refund、deal with 等词准确，语气坚定但不失礼貌，是投诉信的标准语气。"
  },
  {
    id: "w007",
    title: "举办英语演讲比赛的通知（通知）",
    type: "通知",
    category: "校园活动",
    requirement: "你是校学生会的李华。学校将举办英语演讲比赛。请以学生会的名义写一则通知，内容包括：比赛目的、时间、地点、参赛对象和报名方式。词数 100 左右。",
    wordCount: 100,
    template: "标题：Notice\n第一段：说明目的与活动——为提高英语口语，学生会决定举办演讲比赛\n第二段：交代具体信息：时间、地点、参加对象、报名时间与地点、评委等\n第三段：欢迎大家积极参加，落款学生会及日期",
    usefulSentences: [
      "In order to improve our spoken English, we will hold...",
      "The activity will take place in... at... on...",
      "All the students are welcome to take part in it.",
      "Those who want to join please sign up before...",
      "We will invite some teachers to work as judges.",
      "We are looking forward to your active participation.",
      "The Students' Union"
    ],
    sample: "Notice\nIn order to improve our spoken English, the Students' Union has decided to hold an English speech contest.\nThe contest will take place in the school hall at 2:00 p.m. next Friday. All the students in our school are welcome to take part in it. Those who want to join please sign up at the Students' Union office before this Thursday. We will invite three English teachers to work as judges, and the top three winners will get nice prizes.\nWe are looking forward to your active participation.\nThe Students' Union\nSeptember 14, 2026",
    analysis: "结构：通知文体，开头有 Notice 标题，结尾有落款和日期。正文第一段点目的，第二段把时间、地点、对象、报名、评委五项信息交代完整，第三段号召参与。\n亮点句型：① In order to... 引出目的，通知必用；② take place “举行”，比 hold 更正式；③ Those who... please sign up... “想参加的人请……报名”；④ work as judges “担任评委”。\n用词：speech contest、sign up、judge、participation 等词规范，信息齐全、格式正确，是成考通知题的标准写法。"
  },
  {
    id: "w008",
    title: "在线学习还是课堂学习？（观点对比议论文）",
    type: "议论文",
    category: "教育科技",
    requirement: "现在越来越多的人选择在线学习。有人认为在线学习方便灵活，也有人认为在教室面对面学习更好。请写一篇短文，分别谈谈两种观点，并给出你自己的看法。词数 100-120。",
    wordCount: 120,
    template: "第一段：引出现象——在线学习越来越流行，人们看法不一\n第二段：分别陈述两种观点：正方（方便灵活）用 On the one hand；反方（课堂更好）用 On the other hand\n第三段：给出自己的看法——两者各有优势，选适合自己的最重要",
    usefulSentences: [
      "Nowadays, online learning is becoming more and more popular.",
      "People have different opinions about it.",
      "Some people think that..., while others argue that...",
      "On the one hand,... On the other hand,...",
      "It is easy to get distracted when studying at home.",
      "As far as I am concerned,...",
      "In a word, the most important thing is to..."
    ],
    sample: "Nowadays, online learning is becoming more and more popular. People have different opinions about it.\nSome people think online learning is very convenient. We can study at any time and any place, and we can choose what we like. However, others believe that learning in the classroom is better. Face-to-face communication helps students learn better, and it is easy to get distracted when studying at home.\nAs far as I am concerned, both ways have their own advantages. We can choose the way that suits us best. In a word, the most important thing is to keep studying hard.",
    analysis: "结构：典型观点对比型议论文。第一段引出话题；第二段用 Some... However, others... 把正反两方各写两句，平衡不偏；第三段 As far as I am concerned 给出折中立场。\n亮点句型：① Some people think..., while others argue that... 观点对比万能开头；② On the one hand / On the other hand 可替换使用；③ As far as I am concerned... “在我看来”；④ In a word 总结。\n用词：convenient、face-to-face、distracted、advantages、suit 等词表达准确，论证简洁，符合成考议论文“观点清楚、有连接词”的评分要求。"
  },
  {
    id: "w009",
    title: "How to Keep Healthy（问题解决/建议类议论文）",
    type: "议论文",
    category: "健康生活",
    requirement: "健康对每个人都很重要。请以“How to Keep Healthy”为题写一篇短文，谈谈健康的重要性，并给出至少三点保持健康的建议（如运动、饮食、睡眠等）。词数 100-120。",
    wordCount: 120,
    template: "第一段：点明健康的重要性，引出如何保持健康的话题\n第二段：用连接词分三点给出建议：运动（First of all）、饮食（Besides）、睡眠（Finally）\n第三段：总结——养成好习惯，才能健康快乐生活",
    usefulSentences: [
      "As we all know, health is more important than wealth.",
      "It is necessary for us to know how to keep healthy.",
      "First of all, we should take enough exercise.",
      "Besides, we need a balanced diet.",
      "Finally, enough sleep is also important.",
      "Going to bed early is good for our health.",
      "In short, if we form good habits, we will enjoy a happy life."
    ],
    sample: "How to Keep Healthy\nAs we all know, health is more important than wealth. Without a strong body, we can do nothing. So it is necessary for us to know how to keep healthy.\nFirst of all, we should take enough exercise, such as walking, running and playing ball games. Besides, we need a balanced diet. We should eat more fruit and vegetables and less junk food. Finally, enough sleep is also important, and going to bed early is good for our health.\nIn short, if we form good living habits, we will enjoy a healthy and happy life.",
    analysis: "结构：问题解决型议论文。第一段用谚语式句子点出健康重要；第二段用 First of all / Besides / Finally 三条建议层层展开；第三段 In short 总结。\n亮点句型：① As we all know... “众所周知”；② health is more important than wealth “健康比财富重要”，经典对比；③ It is necessary for us to... “我们有必要……”；④ In short 总结全文。\n用词：balanced diet、junk food、form good habits 都是健康话题高频词，建议具体（走路、跑步、早睡），不空泛，便于记忆套用。"
  },
  {
    id: "w010",
    title: "人们休闲方式的变化（图表作文）",
    type: "图表作文",
    category: "社会生活",
    requirement: "下表展示了某城市人们 2015 年与 2025 年休闲方式的变化：看电视的人减少，上网和旅游的人增多。请根据这一数据写一篇短文，描述这些变化并简要分析原因。词数 100-120。",
    wordCount: 120,
    template: "第一段：引出图表——图表展示了某城市人们十年间休闲方式的变化\n第二段：具体描述数据变化：看电视下降，上网和旅游上升，用数字对比（翻倍、下降很多）\n第三段：分析原因（生活变好、追求更多彩的生活）并总结",
    usefulSentences: [
      "The chart shows the changes in people's ways of spending free time.",
      "Great changes have taken place in the past ten years.",
      "More and more people enjoy surfing the Internet and traveling.",
      "The number of people who... has doubled.",
      "The number of... has dropped a lot.",
      "There are several reasons for this change.",
      "In a word, people's activities are becoming richer and more colorful."
    ],
    sample: "The chart shows the changes in people's ways of spending free time in a city from 2015 to 2025.\nIn 2015, most people spent their free time watching TV. However, great changes have taken place in the past ten years. Now more and more people enjoy surfing the Internet and traveling. The number of people who like traveling has doubled, while the number of those who watch TV has dropped a lot.\nThere are several reasons for this change. People's lives are becoming better, and they want to relax in more interesting ways. In a word, people's free-time activities are becoming richer and more colorful.",
    analysis: "结构：图表作文标准三段。第一段一句话概括图表主题与时间跨度；第二段“今昔对比”：先写过去（看电视），再写现在（上网、旅游上升），用 doubled / dropped a lot 给出变化幅度；第三段分析原因并总结。\n亮点句型：① The chart shows that... 图表作文开头；② Great changes have taken place... “发生了巨大变化”；③ The number of... has doubled/dropped... 描述数据变化；④ while 连接对比；⑤ There are several reasons for this. 引出原因。\n用词：surf the Internet、double、drop、relax、colorful 等词地道，数据描述句式可直接套用到其他图表题。"
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { WRITING_DATA };
}
if (typeof window !== "undefined") {
  window.WRITING_DATA = WRITING_DATA;
}
