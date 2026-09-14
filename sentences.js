// ============================================================
// 成人高考专升本 · 英语长难句库（100句）
// 语法覆盖：定语从句25 / 状语从句20 / 名词性从句15 / 非谓语15
//           被动语态5 / 比较结构5 / 强调倒装省略5 / 并列复合句10
// 难度：1=较简单 2=中等 3=较难
// ============================================================

const LONG_SENTENCES = [

  // ---------- 定语从句（25句：s001-s025） ----------
  {
    id: "s001",
    sentence: "The researchers who conducted the study found that regular exercise can improve both physical health and mental well-being.",
    translation: "进行这项研究的人员发现，规律锻炼既能改善身体健康，也能改善心理状态。",
    structure: "先抓主干：The researchers found（研究人员发现）。who conducted the study 是插在中间的定语从句，修饰 researchers，意思是“做这项研究的人”，先把它括起来不看，句子就清楚了。found 后面 that 又是一个宾语从句。",
    grammar: "定语从句（who，限制性）",
    keywords: ["conduct a study", "regular exercise", "well-being"],
    difficulty: 2
  },
  {
    id: "s002",
    sentence: "The new library, which was built last year, offers students a quiet place to read and study.",
    translation: "这座去年建成的新图书馆为学生提供了一个安静的阅读和学习场所。",
    structure: "主干是 The new library offers students a place（新图书馆为学生提供了一个地方）。中间 which was built last year 用两个逗号隔开，是补充说明“去年建的”，不影响主干，先跳过它就能读懂。",
    grammar: "定语从句（which，非限制性）",
    keywords: ["offer", "quiet", "study"],
    difficulty: 1
  },
  {
    id: "s003",
    sentence: "People who cannot manage their time well often feel stressed even when they have only a few tasks to do.",
    translation: "不善于管理时间的人，即使手头只有几件事要做，也常常感到压力很大。",
    structure: "主干：People feel stressed（人感到压力大）。who cannot manage their time well 是修饰 people 的定语从句，说的是“哪一类人”。句末 even when 还带了一个让步时间状语从句。",
    grammar: "定语从句（who，限制性）",
    keywords: ["manage time", "stressed", "even when"],
    difficulty: 2
  },
  {
    id: "s004",
    sentence: "Many countries have introduced laws that require factories to reduce the amount of waste they produce.",
    translation: "许多国家已经出台法律，要求工厂减少其产生的废弃物数量。",
    structure: "主干：Many countries have introduced laws（很多国家出台了法律）。that require factories... 是修饰 laws 的定语从句，说明法律“要求什么”。最后 they produce 又是省略了 that 的小定语从句，修饰 waste。",
    grammar: "定语从句（that + 省略关系词）",
    keywords: ["introduce laws", "require", "waste"],
    difficulty: 2
  },
  {
    id: "s005",
    sentence: "The professor whose lecture we attended yesterday explained the theory in a way that everyone could understand.",
    translation: "我们昨天听了他讲座的那位教授，用一种人人都能听懂的方式解释了这个理论。",
    structure: "主干：The professor explained the theory（教授解释了理论）。whose lecture we attended 中 whose 表示“这位教授的”，修饰 professor；后面 that everyone could understand 又修饰 way。",
    grammar: "定语从句（whose + that）",
    keywords: ["attend a lecture", "explain", "in a way"],
    difficulty: 3
  },
  {
    id: "s006",
    sentence: "There are still many remote villages where children have to walk several miles to reach the nearest school.",
    translation: "仍有许多偏远村庄，那里的孩子得走上好几英里才能到最近的学校。",
    structure: "主干：There are many remote villages（有很多偏远村庄）。where 引导的定语从句修饰 villages，where 在从句里充当地点，相当于 in the villages，说明“在那些村子里孩子要走很远”。",
    grammar: "定语从句（where，限制性）",
    keywords: ["remote", "several miles", "nearest"],
    difficulty: 2
  },
  {
    id: "s007",
    sentence: "I still remember the day when I first arrived in this city and felt completely lost.",
    translation: "我仍然记得第一次来到这座城市、完全不知所措的那一天。",
    structure: "主干：I still remember the day（我记得那一天）。when 引导定语从句修饰 the day，when 在从句里充当时间，相当于 on that day，交代“那一天发生了什么”。",
    grammar: "定语从句（when，限制性）",
    keywords: ["arrive in", "feel lost", "remember"],
    difficulty: 1
  },
  {
    id: "s008",
    sentence: "The speed at which technology develops has made it difficult for older people to keep up with new products.",
    translation: "技术发展的速度之快，让老年人很难跟得上新产品的步伐。",
    structure: "主干：The speed has made it difficult（速度让事情变得困难）。at which technology develops 是“介词+which”形式的定语从句，修饰 speed，相当于 at the speed。it 是形式宾语，真正的内容在 to keep up with...。",
    grammar: "定语从句（介词+which）",
    keywords: ["at the speed", "keep up with", "develop"],
    difficulty: 3
  },
  {
    id: "s009",
    sentence: "The company decided to close its oldest branch, which surprised everyone who had worked there for years.",
    translation: "公司决定关闭它最老的分公司，这让所有在那里工作多年的人都感到意外。",
    structure: "主干：The company decided to close its branch（公司决定关掉分公司）。逗号后的 which 指代前面整件事，引导非限制性定语从句，表示“这件事让人意外”；后面 who had worked there 又修饰 everyone。",
    grammar: "定语从句（which 指代整句 + who）",
    keywords: ["close", "branch", "be surprised"],
    difficulty: 3
  },
  {
    id: "s010",
    sentence: "The volunteers who helped collect donations said they were moved by how generously local people gave.",
    translation: "帮忙募集捐款的志愿者说，当地人的慷慨让他们深受感动。",
    structure: "主干：The volunteers said（志愿者说）。who helped collect donations 修饰 volunteers，说明“哪些志愿者”；said 后面省略了 that，是宾语从句，里面又套了 how 引导的宾语从句。",
    grammar: "定语从句（who）+ 宾语从句",
    keywords: ["volunteer", "donation", "generously"],
    difficulty: 2
  },
  {
    id: "s011",
    sentence: "The report warns that children who spend too much time on screens may have difficulty concentrating in class.",
    translation: "报告警告说，花太多时间看屏幕的孩子，上课可能难以集中注意力。",
    structure: "主干：The report warns（报告警告）。that 引导宾语从句；从句里 children 是主语，who spend too much time on screens 是修饰 children 的定语从句，先跳过它，就能抓住 children may have difficulty（孩子可能有困难）。",
    grammar: "定语从句（who）+ 宾语从句",
    keywords: ["warn", "concentrate", "have difficulty doing"],
    difficulty: 2
  },
  {
    id: "s012",
    sentence: "It is a small country whose economy depends mainly on tourism and agriculture.",
    translation: "那是一个小国，其经济主要依赖旅游业和农业。",
    structure: "主干：It is a small country（它是个小国）。whose economy depends on... 是修饰 country 的定语从句，whose 表示“这个国家的”，补充说明它的经济靠什么。",
    grammar: "定语从句（whose，限制性）",
    keywords: ["depend on", "tourism", "agriculture"],
    difficulty: 1
  },
  {
    id: "s013",
    sentence: "The online course is designed for adults who live in areas where there are no night schools.",
    translation: "这门网课是为住在没有夜校地区的成年人设计的。",
    structure: "主干：The online course is designed for adults（这门网课为成年人设计）。who live in areas 修饰 adults；where there are no night schools 又修饰 areas，一层套一层，分别翻译即可。",
    grammar: "定语从句（who + where 双层）",
    keywords: ["design for", "area", "night school"],
    difficulty: 3
  },
  {
    id: "s014",
    sentence: "There are moments in life when a single decision can change the direction of your entire career.",
    translation: "人生中有些时刻，一个决定就能改变你整个事业的方向。",
    structure: "主干：There are moments（有这样一些时刻）。when 引导定语从句修饰 moments，相当于 at those moments，说明“在这些时刻会发生什么”。",
    grammar: "定语从句（when，限制性）",
    keywords: ["moment", "decision", "career"],
    difficulty: 2
  },
  {
    id: "s015",
    sentence: "The doctor suggested a diet that includes more vegetables and less sugar.",
    translation: "医生建议采用一种多吃蔬菜、少吃糖的饮食方案。",
    structure: "主干：The doctor suggested a diet（医生建议一种饮食）。that includes more vegetables... 修饰 diet，说明这种饮食“包含什么”。句子短，但包含完整的定语从句结构。",
    grammar: "定语从句（that，限制性）",
    keywords: ["suggest", "diet", "include"],
    difficulty: 1
  },
  {
    id: "s016",
    sentence: "The student to whom the prize was awarded had never expected such great recognition.",
    translation: "获奖的那位学生从未料到自己会获得如此高的认可。",
    structure: "主干：The student had never expected recognition（这个学生没料到认可）。to whom the prize was awarded 是“介词+whom”定语从句，修饰 student，相当于 the prize was awarded to the student，意思是“被颁奖的学生”。",
    grammar: "定语从句（介词+whom）",
    keywords: ["award a prize", "expect", "recognition"],
    difficulty: 3
  },
  {
    id: "s017",
    sentence: "The old factory, where thousands of workers used to be employed, has been turned into a shopping mall.",
    translation: "这座曾雇用数千名工人的老工厂，如今已被改造成一家购物中心。",
    structure: "主干：The old factory has been turned into a shopping mall（老工厂被改造成商场）。逗号中间 where...employed 是非限制性定语从句，补充工厂“过去是什么样”，先跳过它主干很清楚。",
    grammar: "定语从句（where，非限制性）",
    keywords: ["be employed", "turn into", "used to do"],
    difficulty: 2
  },
  {
    id: "s018",
    sentence: "I truly believe that anything that is worth doing at all is worth doing well.",
    translation: "我真心认为，任何值得一做的事，都值得把它做好。",
    structure: "主干：I believe（我认为）。believe 后面 that 引导宾语从句；从句里 anything 是主语，that is worth doing at all 是修饰 anything 的定语从句——先行词是 anything 时关系词常用 that，这是成考常考的谚语句型。",
    grammar: "宾语从句 + 定语从句（that 修饰不定代词）",
    keywords: ["be worth doing", "at all", "do well"],
    difficulty: 2
  },
  {
    id: "s019",
    sentence: "The couple moved to a town whose people were friendly and willing to help newcomers.",
    translation: "这对夫妇搬到了一个小镇，那里的人很友好，也愿意帮助新来者。",
    structure: "主干：The couple moved to a town（这对夫妇搬到一个镇）。whose people were friendly 修饰 town，whose 表示“这个镇的（人）”，把小镇和镇上的人联系起来。",
    grammar: "定语从句（whose，限制性）",
    keywords: ["willing to", "newcomer", "move to"],
    difficulty: 2
  },
  {
    id: "s020",
    sentence: "The new policy, which took effect in January, has already reduced traffic jams in the city center.",
    translation: "这项一月起生效的新政策，已经缓解了市中心的交通拥堵。",
    structure: "主干：The new policy has reduced traffic jams（新政策减少了拥堵）。逗号中间 which took effect in January 是补充说明政策“何时生效”的非限制性定语从句，去掉不影响主干。",
    grammar: "定语从句（which，非限制性）",
    keywords: ["take effect", "reduce", "traffic jam"],
    difficulty: 2
  },
  {
    id: "s021",
    sentence: "A teacher who truly cares about students will notice when someone in the class is having trouble.",
    translation: "真正关心学生的老师，会注意到班里谁遇到了困难。",
    structure: "主干：A teacher will notice（老师会注意到）。who truly cares about students 修饰 teacher，限定“什么样的老师”；notice 后面 when 引导宾语从句，作“注意到”的内容。",
    grammar: "定语从句（who）+ 宾语从句",
    keywords: ["care about", "notice", "have trouble"],
    difficulty: 2
  },
  {
    id: "s022",
    sentence: "This is the laboratory where the famous experiment was carried out fifty years ago.",
    translation: "这就是五十年前进行那次著名实验的实验室。",
    structure: "主干：This is the laboratory（这就是那间实验室）。where 引导定语从句修饰 laboratory，相当于 in the laboratory，说明“在这间实验室里做过实验”。",
    grammar: "定语从句（where，限制性）",
    keywords: ["carry out", "experiment", "fifty years ago"],
    difficulty: 2
  },
  {
    id: "s023",
    sentence: "The summer when I worked as a volunteer in the hospital taught me more about life than any textbook did.",
    translation: "我在医院做志愿者的那个夏天，比任何教科书都更让我懂得了生活。",
    structure: "主干：The summer taught me more（那个夏天教会我更多）。when I worked as a volunteer 修饰 summer；句末 than any textbook did 是比较状语，did 代替前面的 taught me more。",
    grammar: "定语从句（when）+ 比较状语",
    keywords: ["work as", "volunteer", "more...than"],
    difficulty: 3
  },
  {
    id: "s024",
    sentence: "The vegetables that are grown without chemicals often cost more, but many people still prefer to buy them.",
    translation: "不用化学药剂种植的蔬菜通常更贵，但很多人还是愿意买。",
    structure: "前半句主干：The vegetables cost more（蔬菜更贵）。that are grown without chemicals 修饰 vegetables，说明是“怎么种出来的菜”；后半句 but 并列，主干是 many people prefer to buy them。",
    grammar: "定语从句（that，被动式）+ 并列句",
    keywords: ["grow", "chemical", "prefer to"],
    difficulty: 2
  },
  {
    id: "s025",
    sentence: "He passed the exam with excellent grades, which made his parents extremely proud.",
    translation: "他以优异的成绩通过了考试，这让他的父母非常骄傲。",
    structure: "主干：He passed the exam（他通过了考试）。逗号后的 which 指代“他考得好”这整件事，引导非限制性定语从句，翻译时常说“这一点/这件事”。",
    grammar: "定语从句（which 指代整句，非限制性）",
    keywords: ["pass the exam", "excellent", "be proud of"],
    difficulty: 2
  },

  // ---------- 状语从句（20句：s026-s045） ----------
  {
    id: "s026",
    sentence: "When the fire alarm rang, everyone in the building left as calmly as they could.",
    translation: "火警铃声响起时，楼里的每个人都尽可能镇定地离开了。",
    structure: "先抓主干：everyone left（所有人都离开了）。句首 When the fire alarm rang 是时间状语从句，交代“什么时候发生的”；as calmly as they could 是方式状语。",
    grammar: "时间状语从句（when）",
    keywords: ["alarm", "as...as one can", "calmly"],
    difficulty: 1
  },
  {
    id: "s027",
    sentence: "Because she had missed too many classes, she had to spend the whole summer catching up on her studies.",
    translation: "因为缺课太多，她不得不花整个暑假把落下的功课补回来。",
    structure: "主干：she had to spend the summer catching up（她不得不花暑假补课）。句首 Because... 是原因状语从句，解释“为什么要补”；catching up on 是 spend time doing 结构。",
    grammar: "原因状语从句（because）",
    keywords: ["miss classes", "catch up on", "spend time doing"],
    difficulty: 2
  },
  {
    id: "s028",
    sentence: "If you follow this training plan step by step, you will be able to run a full marathon within a year.",
    translation: "如果你按这个训练计划一步一步来，一年内就能跑完一场全程马拉松。",
    structure: "主干：you will be able to run a marathon（你将能跑马拉松）。句首 If... 是条件状语从句，主句用将来时、从句用现在时表将来，这是 if 条件句的重点。",
    grammar: "条件状语从句（if）",
    keywords: ["follow", "step by step", "be able to"],
    difficulty: 2
  },
  {
    id: "s029",
    sentence: "Although the project was far more difficult than they had expected, the team refused to give up.",
    translation: "尽管这个项目比他们预想的难得多，团队还是拒绝放弃。",
    structure: "主干：the team refused to give up（团队拒绝放弃）。句首 Although... 是让步状语从句，表示“虽然很难，但还是不放弃”；里面 than they had expected 是比较结构。",
    grammar: "让步状语从句（although）",
    keywords: ["far more...than", "expect", "give up"],
    difficulty: 2
  },
  {
    id: "s030",
    sentence: "The government has planted millions of trees so that the desert will not spread further.",
    translation: "政府已经种了数百万棵树，目的是阻止沙漠进一步扩张。",
    structure: "主干：The government has planted trees（政府种了树）。so that... 是目的状语从句，翻译为“为了/以便”，从句里常出现 will / can / may 这类情态动词。",
    grammar: "目的状语从句（so that）",
    keywords: ["millions of", "so that", "spread"],
    difficulty: 2
  },
  {
    id: "s031",
    sentence: "The lecture was so boring that half the students fell asleep before it ended.",
    translation: "讲座太无聊了，一半的学生在结束前就睡着了。",
    structure: "主干：The lecture was boring（讲座很无聊）。so...that... 是结果状语从句，意为“如此……以至于……”，boring 后面接 that 引导的结果。",
    grammar: "结果状语从句（so...that）",
    keywords: ["so...that", "boring", "fall asleep"],
    difficulty: 2
  },
  {
    id: "s032",
    sentence: "The research team kept working on the experiment until they found a clear and reliable result.",
    translation: "研究团队一直做这个实验，直到找到清晰可靠的结果才停下。",
    structure: "主干：The team kept working（团队一直在工作）。until... 是时间状语从句，表示“动作一直持续到某个时间点为止”，翻译为“直到……才”。",
    grammar: "时间状语从句（until）",
    keywords: ["keep doing", "until", "reliable"],
    difficulty: 2
  },
  {
    id: "s033",
    sentence: "You cannot master a foreign language unless you practice speaking it every single day.",
    translation: "除非你每天都练习口语，否则你无法真正掌握一门外语。",
    structure: "主干：You cannot master a language（你掌握不了语言）。unless 相当于 if...not，引导条件状语从句，翻译为“除非……否则不”，是成考高频词。",
    grammar: "条件状语从句（unless）",
    keywords: ["master", "unless", "practice doing"],
    difficulty: 2
  },
  {
    id: "s034",
    sentence: "Even though he was born into a poor family, he managed to graduate from a top university.",
    translation: "尽管出身贫寒，他还是设法从一所名牌大学毕业了。",
    structure: "主干：he managed to graduate（他设法毕业了）。句首 Even though... 是让步状语从句，比 though 语气更强，表示“尽管出身差，但结果很好”。",
    grammar: "让步状语从句（even though）",
    keywords: ["be born into", "manage to do", "graduate from"],
    difficulty: 2
  },
  {
    id: "s035",
    sentence: "Since you have already finished your report, you may leave the office a little earlier today.",
    translation: "既然你已经把报告写完了，今天可以早点下班。",
    structure: "主干：you may leave the office earlier（你可以早点走）。句首 Since... 这里不是“自从”，而是“既然”，引导原因状语从句，说明“既然条件已具备，就可以……”。",
    grammar: "原因状语从句（since 既然）",
    keywords: ["since", "finish", "a little earlier"],
    difficulty: 2
  },
  {
    id: "s036",
    sentence: "While some people prefer to study alone, others believe that group discussion improves learning.",
    translation: "有些人喜欢独自学习，而另一些人则认为小组讨论更能促进学习。",
    structure: "主干：others believe（另一些人认为）。句首 While... 这里表示对比，“而、然而”，不是时间；believe 后面 that 是宾语从句。",
    grammar: "对比/让步状语从句（while 而）",
    keywords: ["prefer to do", "group discussion", "improve"],
    difficulty: 2
  },
  {
    id: "s037",
    sentence: "As long as you keep trying, you will eventually find a method that suits your own learning style.",
    translation: "只要你坚持尝试，最终一定会找到适合自己学习风格的方法。",
    structure: "主干：you will find a method（你会找到方法）。As long as... 是条件状语从句，意为“只要”，语气比 if 更强调条件充分；that suits your style 又修饰 method。",
    grammar: "条件状语从句（as long as）+ 定语从句",
    keywords: ["as long as", "keep trying", "suit"],
    difficulty: 3
  },
  {
    id: "s038",
    sentence: "The school has set up a special fund in order that students from poor families can afford textbooks.",
    translation: "学校设立了一项专项基金，好让贫困家庭的学生也能负担得起课本。",
    structure: "主干：The school has set up a fund（学校设立了基金）。in order that... 是目的状语从句，比 so that 更正式，从句里有情态动词 can，翻译为“为了、好让”。",
    grammar: "目的状语从句（in order that）",
    keywords: ["set up", "fund", "afford"],
    difficulty: 3
  },
  {
    id: "s039",
    sentence: "It was such a warm autumn day that many people chose to have a picnic in the park.",
    translation: "那是个如此暖和的秋日，很多人都选择去公园野餐。",
    structure: "主干：It was a warm day（那是个暖和的日子）。such...that... 是结果状语从句，注意搭配：such + (a/an) + 形容词 + 名词 + that，和 so + 形容词 + that 区分开。",
    grammar: "结果状语从句（such...that）",
    keywords: ["such...that", "choose to do", "have a picnic"],
    difficulty: 2
  },
  {
    id: "s040",
    sentence: "While city life offers more job opportunities, life in the countryside is quieter and less stressful.",
    translation: "城市生活能提供更多工作机会，而乡村生活则更安静、压力也更小。",
    structure: "主干：life is quieter and less stressful（生活更安静、压力更小）。句首 While... 表示前后对比，“而、相比之下”，把城市和乡村并列比较。",
    grammar: "对比状语从句（while 而）",
    keywords: ["offer", "opportunity", "countryside"],
    difficulty: 2
  },
  {
    id: "s041",
    sentence: "Once you form a good reading habit, you will be amazed at how quickly your vocabulary grows.",
    translation: "一旦养成良好的阅读习惯，你会惊讶于自己的词汇量增长得有多快。",
    structure: "主干：you will be amazed（你会感到惊讶）。句首 Once... 是时间/条件状语从句，意为“一旦”；at 后面 how 引导宾语从句，作“惊讶”的内容。",
    grammar: "时间状语从句（once）+ 宾语从句",
    keywords: ["form a habit", "be amazed at", "vocabulary"],
    difficulty: 3
  },
  {
    id: "s042",
    sentence: "You can borrow this reference book, provided that you return it before this Friday.",
    translation: "你可以借这本参考书，前提是在本周五之前归还。",
    structure: "主干：You can borrow the book（你可以借书）。provided that... 是条件状语从句，意思和 as long as / on condition that 一样，意为“假如、前提是”，成考阅读偶尔出现。",
    grammar: "条件状语从句（provided that）",
    keywords: ["borrow", "provide that", "return"],
    difficulty: 3
  },
  {
    id: "s043",
    sentence: "Now that everyone is here, let us begin the meeting and discuss the new schedule together.",
    translation: "既然大家都到齐了，我们就开始开会，一起讨论新的日程安排。",
    structure: "主干：let us begin the meeting（我们开始开会）。句首 Now that... 是原因状语从句，意为“既然、由于”，常放在句首引出已知理由。",
    grammar: "原因状语从句（now that）",
    keywords: ["now that", "discuss", "schedule"],
    difficulty: 2
  },
  {
    id: "s044",
    sentence: "As soon as the results were announced, the whole class burst into cheers and laughter.",
    translation: "成绩一公布，全班立刻爆发出欢呼和笑声。",
    structure: "主干：the class burst into cheers（全班爆发出欢呼）。As soon as... 是时间状语从句，意为“一……就……”，表示两个动作紧紧相连。",
    grammar: "时间状语从句（as soon as）",
    keywords: ["as soon as", "announce", "burst into"],
    difficulty: 2
  },
  {
    id: "s045",
    sentence: "No matter how hard the task is, she always manages to finish it before the deadline.",
    translation: "无论任务有多难，她总能在截止日期前完成。",
    structure: "主干：she manages to finish it（她总能完成）。句首 No matter how hard... 是让步状语从句，相当于 however hard，翻译为“无论多难”，hard 要紧跟 how。",
    grammar: "让步状语从句（no matter how）",
    keywords: ["no matter", "manage to do", "deadline"],
    difficulty: 3
  },

  // ---------- 名词性从句（15句：s046-s060） ----------
  {
    id: "s046",
    sentence: "What many learners fail to realize is that mistakes are a natural part of the learning process.",
    translation: "很多学习者没有意识到的是，犯错本就是学习过程中很自然的一部分。",
    structure: "主干：What... is that...（……的是……）。句首 What many learners fail to realize 是主语从句，作整个句子的主语；that 后面是表语从句，说明“是什么”。",
    grammar: "主语从句（what）+ 表语从句（that）",
    keywords: ["fail to do", "realize", "natural"],
    difficulty: 3
  },
  {
    id: "s047",
    sentence: "The survey shows that more than sixty percent of young people read the news on their phones every day.",
    translation: "调查显示，超过百分之六十的年轻人每天用手机看新闻。",
    structure: "主干：The survey shows（调查显示）。that 引导宾语从句，作 shows 的内容，从句本身是完整的句子：more than sixty percent... read the news。that 在口语中常省略。",
    grammar: "宾语从句（that）",
    keywords: ["survey", "percent", "on phones"],
    difficulty: 1
  },
  {
    id: "s048",
    sentence: "The main reason why he changed his job is that he wanted a shorter commute.",
    translation: "他换工作的主要原因，是他想缩短通勤时间。",
    structure: "主干：The main reason is that...（主要原因是……）。why he changed his job 是定语从句修饰 reason；that he wanted... 是表语从句，说明 reason 的内容。",
    grammar: "表语从句（that）+ 定语从句（why）",
    keywords: ["reason", "commute", "change a job"],
    difficulty: 2
  },
  {
    id: "s049",
    sentence: "The fact that he passed the exam without any preparation surprised all his classmates.",
    translation: "他毫无准备就通过了考试，这一事实让所有同学都很惊讶。",
    structure: "主干：The fact surprised his classmates（这个事实让同学惊讶）。that he passed the exam 是同位语从句，说明 fact 的具体内容，不是修饰 fact（因为不缺成分），这是同位语从句的判断关键。",
    grammar: "同位语从句（that）",
    keywords: ["fact", "without preparation", "surprise"],
    difficulty: 3
  },
  {
    id: "s050",
    sentence: "It is widely believed that regular reading can sharpen a person's thinking and imagination.",
    translation: "人们普遍认为，经常阅读可以锻炼人的思维和想象力。",
    structure: "主干骨架：It is believed that...（人们认为……）。It 是形式主语，真正的主语是后面 that 引导的从句，为避免头重脚轻把 it 放前面，翻译时直接译从句即可。",
    grammar: "主语从句（it 作形式主语）",
    keywords: ["It is believed that", "regular", "sharpen"],
    difficulty: 2
  },
  {
    id: "s051",
    sentence: "I wonder whether it is necessary to look up every new word when reading a long article.",
    translation: "我想知道，读长文章时是否有必要把每个生词都查一遍。",
    structure: "主干：I wonder（我想知道）。whether... 引导宾语从句，作 wonder 的内容，whether 意为“是否”，不能换成 that；从句里 it 是形式主语，真正主语是 to look up...。",
    grammar: "宾语从句（whether）",
    keywords: ["wonder", "whether", "look up"],
    difficulty: 2
  },
  {
    id: "s052",
    sentence: "The question remains how we can reduce the cost of healthcare without lowering its quality.",
    translation: "问题仍然在于：我们如何在不降低医疗质量的前提下降低成本。",
    structure: "主干：The question remains...（问题仍然是……）。how we can reduce... 是表语从句，接在 remain 后面，说明“问题是什么”，how 在从句中表示方式。",
    grammar: "表语从句（how）",
    keywords: ["remain", "reduce the cost", "healthcare"],
    difficulty: 3
  },
  {
    id: "s053",
    sentence: "There is no doubt that exercise plays an important role in keeping both body and mind healthy.",
    translation: "毫无疑问，锻炼对保持身心健康起着重要作用。",
    structure: "主干：There is no doubt（毫无疑问）。that exercise plays an important role 是同位语从句，说明 doubt 的内容，There is no doubt that 是成考常考固定句型。",
    grammar: "同位语从句（that）",
    keywords: ["There is no doubt", "play a role in", "keep healthy"],
    difficulty: 2
  },
  {
    id: "s054",
    sentence: "No one fully understands what caused the ancient city to disappear so suddenly.",
    translation: "没有人完全清楚，究竟是什么让这座古城如此突然地消失了。",
    structure: "主干：No one understands（没人理解）。what caused the ancient city to disappear 是宾语从句，what 在从句中作主语，意为“什么东西”，引导整个从句作 understands 的内容。",
    grammar: "宾语从句（what）",
    keywords: ["understand", "cause sb. to do", "disappear"],
    difficulty: 2
  },
  {
    id: "s055",
    sentence: "That the earth's temperature is rising has been confirmed by scientists around the world.",
    translation: "地球气温正在上升，这一点已得到世界各地科学家的证实。",
    structure: "主干：That... has been confirmed（……已被证实）。句首 That the earth's temperature is rising 是主语从句，that 不充当成分但不能省略，引导整个句子作主语。",
    grammar: "主语从句（that）+ 被动语态",
    keywords: ["temperature", "confirm", "rise"],
    difficulty: 3
  },
  {
    id: "s056",
    sentence: "His suggestion is that we should hold the meeting online to save everyone's time.",
    translation: "他的建议是，我们应该在线开会，以节省大家的时间。",
    structure: "主干：His suggestion is that...（他的建议是……）。that 引导表语从句，因为主语是 suggestion，从句里用 should + 动词原形（should 可省略），这是虚拟语气常见考点。",
    grammar: "表语从句（that，含虚拟语气）",
    keywords: ["suggestion", "hold a meeting", "save time"],
    difficulty: 3
  },
  {
    id: "s057",
    sentence: "The news that the river had been seriously polluted spread quickly among local residents.",
    translation: "这条河被严重污染的消息，很快就在当地居民中传开了。",
    structure: "主干：The news spread quickly（消息传开了）。that the river had been polluted 是同位语从句，说明 news 的内容；不要误以为是定语从句，因为从句里不缺 news 这个成分。",
    grammar: "同位语从句（that）",
    keywords: ["news", "pollute", "resident"],
    difficulty: 3
  },
  {
    id: "s058",
    sentence: "The article explains how a small habit practiced daily can lead to big changes over time.",
    translation: "这篇文章解释了，每天坚持的小习惯，如何随着时间积累带来巨大改变。",
    structure: "主干：The article explains（文章解释）。how a small habit can lead to big changes 是宾语从句，how 表示“如何”；practiced daily 是过去分词作定语，修饰 habit。",
    grammar: "宾语从句（how）+ 分词作定语",
    keywords: ["explain", "lead to", "over time"],
    difficulty: 3
  },
  {
    id: "s059",
    sentence: "Whether online learning can fully replace traditional classrooms is still under debate.",
    translation: "在线学习能否完全取代传统课堂，仍在争论之中。",
    structure: "主干：Whether... is still under debate（……仍在争论）。句首 Whether online learning can replace... 是主语从句，whether 意为“是否”，不能换成 if（句首不用 if）。",
    grammar: "主语从句（whether）",
    keywords: ["whether", "replace", "under debate"],
    difficulty: 3
  },
  {
    id: "s060",
    sentence: "Whoever wants to join the volunteer program must sign up before the end of this week.",
    translation: "任何想加入志愿者项目的人，都必须在本周末之前报名。",
    structure: "主干：Whoever must sign up（任何人都必须报名）。Whoever wants to join... 引导主语从句，相当于 anyone who...，在从句中作主语，翻译为“凡是……的人”。",
    grammar: "主语从句（whoever）",
    keywords: ["whoever", "join", "sign up"],
    difficulty: 3
  },

  // ---------- 非谓语动词（15句：s061-s075） ----------
  {
    id: "s061",
    sentence: "To master a foreign language requires patience, regular practice, and a genuine interest in its culture.",
    translation: "掌握一门外语，需要耐心、规律的练习，以及对其文化真正的兴趣。",
    structure: "主干骨架：To master a language requires...（掌握语言需要……）。句首 To master... 是动词不定式作主语，谓语用单数 requires，后面三个并列名词作宾语。",
    grammar: "不定式作主语",
    keywords: ["master", "require", "genuine"],
    difficulty: 2
  },
  {
    id: "s062",
    sentence: "Watching documentaries is one of the most effective ways to learn about history without reading thick books.",
    translation: "看纪录片是了解历史最有效的方式之一，而且不用读厚厚的书。",
    structure: "主干：Watching documentaries is one of the ways（看纪录片是方式之一）。Watching... 是动名词作主语；to learn about history 是不定式作定语修饰 ways。",
    grammar: "动名词作主语 + 不定式作定语",
    keywords: ["documentary", "effective", "one of the + 最高级"],
    difficulty: 2
  },
  {
    id: "s063",
    sentence: "Filled with confidence, the young speaker walked onto the stage and began her presentation.",
    translation: "满怀信心地，这位年轻的演讲者走上舞台，开始了她的展示。",
    structure: "主干：the speaker walked onto the stage and began（演讲者走上台、开始）。句首 Filled with confidence 是过去分词作状语，逻辑主语是 speaker，相当于 The speaker was filled with confidence。",
    grammar: "过去分词作状语",
    keywords: ["be filled with", "confidence", "presentation"],
    difficulty: 2
  },
  {
    id: "s064",
    sentence: "The best way to reduce stress is to take regular exercise and get enough sleep.",
    translation: "缓解压力最好的方法，是经常锻炼并保证充足睡眠。",
    structure: "主干：The best way is to take exercise and get sleep（最好的方法是锻炼和睡眠）。to reduce stress 是不定式作定语修饰 way；to take... 是不定式作表语。",
    grammar: "不定式作定语 + 不定式作表语",
    keywords: ["the best way to do", "reduce stress", "get enough sleep"],
    difficulty: 2
  },
  {
    id: "s065",
    sentence: "Many students are afraid of making mistakes when they speak a foreign language in public.",
    translation: "很多学生在公共场合说外语时，害怕犯错。",
    structure: "主干：Many students are afraid（学生害怕）。of making mistakes 是动名词作介词 of 的宾语，be afraid of doing 是固定搭配；when 引导时间状语从句。",
    grammar: "动名词作介词宾语",
    keywords: ["be afraid of", "make mistakes", "in public"],
    difficulty: 1
  },
  {
    id: "s066",
    sentence: "The road leading to the ancient temple is narrow and is covered with fallen leaves in autumn.",
    translation: "通往古寺的那条路很窄，秋天还铺满了落叶。",
    structure: "主干：The road is narrow and is covered（路很窄、被覆盖）。leading to the ancient temple 是现在分词作定语修饰 road，相当于 which leads to...，表示“通向……的路”。",
    grammar: "现在分词作定语",
    keywords: ["lead to", "ancient", "be covered with"],
    difficulty: 2
  },
  {
    id: "s067",
    sentence: "The teacher encouraged us to express our own opinions instead of memorizing the textbook word by word.",
    translation: "老师鼓励我们表达自己的观点，而不是逐字逐句地死记课本。",
    structure: "主干：The teacher encouraged us to express opinions（老师鼓励我们表达观点）。encourage sb. to do 是不定式作宾补；instead of 后面接动名词 memorizing。",
    grammar: "不定式作宾补 + 动名词",
    keywords: ["encourage sb. to do", "express opinions", "instead of"],
    difficulty: 2
  },
  {
    id: "s068",
    sentence: "Having finished his research paper ahead of time, Tom decided to take a short trip to the coast.",
    translation: "汤姆提前完成了研究论文，于是决定去海边短途旅行一趟。",
    structure: "主干：Tom decided to take a trip（汤姆决定去旅行）。句首 Having finished... 是现在分词的完成式作状语，表示“完成论文”这个动作先于“决定旅行”发生，逻辑主语是 Tom。",
    grammar: "现在分词完成式作状语",
    keywords: ["having done", "ahead of time", "decide to do"],
    difficulty: 3
  },
  {
    id: "s069",
    sentence: "Spending too much time on social media may do harm to young people's ability to focus.",
    translation: "花太多时间刷社交媒体，可能会损害年轻人的专注力。",
    structure: "主干：Spending too much time may do harm（花太多时间可能有害）。Spending... 是动名词短语作主语；to focus 是不定式作定语修饰 ability，“……的能力”。",
    grammar: "动名词作主语 + 不定式作定语",
    keywords: ["spend time on", "do harm to", "focus"],
    difficulty: 2
  },
  {
    id: "s070",
    sentence: "The book written by the famous historian has been translated into more than twenty languages.",
    translation: "那位著名历史学家写的这本书，已被翻译成二十多种语言。",
    structure: "主干：The book has been translated（书已被翻译）。written by the historian 是过去分词作定语修饰 book，相当于 which was written by...，因为书是“被写”，所以用过去分词。",
    grammar: "过去分词作定语 + 被动语态",
    keywords: ["write by", "translate into", "more than"],
    difficulty: 2
  },
  {
    id: "s071",
    sentence: "Many young people move to big cities in search of better jobs and more opportunities for their children.",
    translation: "许多年轻人搬到大城市，为的是找更好的工作，也为了给孩子争取更多机会。",
    structure: "主干：Many people move to cities（很多人搬到城市）。in search of better jobs... 是介词短语作目的状语，相当于 to look for...，of 后接名词作宾语。",
    grammar: "介词短语作目的状语",
    keywords: ["move to", "in search of", "opportunity"],
    difficulty: 1
  },
  {
    id: "s072",
    sentence: "Not knowing which bus to take, the lost tourist walked up to a passerby and asked for directions.",
    translation: "因为不知道该坐哪路车，这位迷路的游客走上前去，向一位路人问路。",
    structure: "主干：the tourist walked up and asked（游客走上前、询问）。句首 Not knowing which bus to take 是现在分词的否定式作原因状语，逻辑主语是 tourist，相当于 Because he didn't know...。",
    grammar: "现在分词作原因状语",
    keywords: ["not knowing", "walk up to", "ask for directions"],
    difficulty: 3
  },
  {
    id: "s073",
    sentence: "I strongly suggest reviewing your notes once a week rather than cramming everything before the exam.",
    translation: "我强烈建议你每周复习一次笔记，而不是在考试前临时抱佛脚。",
    structure: "主干：I suggest reviewing your notes（我建议复习笔记）。suggest 后面接动名词 reviewing，不能接不定式；rather than 后接动名词 cramming，和 reviewing 并列。",
    grammar: "动名词作宾语（suggest doing）",
    keywords: ["suggest doing", "review", "rather than"],
    difficulty: 2
  },
  {
    id: "s074",
    sentence: "When he woke up the next morning, he found himself locked inside a dark and empty room.",
    translation: "第二天早上醒来时，他发现自己被锁在一间又黑又空的房间里。",
    structure: "主干：he found himself locked（他发现自己被锁着）。locked inside... 是过去分词作宾语补足语，补充说明 himself 的状态；find + 宾语 + 宾补是高频结构。",
    grammar: "过去分词作宾补（find + 宾 + 宾补）",
    keywords: ["wake up", "find oneself done", "lock"],
    difficulty: 3
  },
  {
    id: "s075",
    sentence: "She grew up in a small town, only to discover later that the world was far bigger than she had imagined.",
    translation: "她在小镇长大，结果后来才发现，世界远比她想象的要大。",
    structure: "主干：She grew up in a small town（她在小镇长大）。only to discover... 是不定式作结果状语，常表示出乎意料的结果，翻译为“结果却……”；that 后是 discover 的宾语从句。",
    grammar: "不定式作结果状语（only to do）",
    keywords: ["grow up", "only to do", "discover"],
    difficulty: 3
  },

  // ---------- 被动语态（5句：s076-s080） ----------
  {
    id: "s076",
    sentence: "The old theatre, which was built a century ago, has been carefully restored and reopened to the public.",
    translation: "这座建于一个世纪前的老剧院，经过精心修复后已重新向公众开放。",
    structure: "主干：The old theatre has been restored and reopened（老剧院已被修复、重新开放）。which was built... 是非限制性定语从句，也是被动；主句 has been restored 是现在完成时的被动。",
    grammar: "被动语态（现在完成时被动）+ 定语从句",
    keywords: ["build", "restore", "open to the public"],
    difficulty: 3
  },
  {
    id: "s077",
    sentence: "It is reported that the new high-speed railway will be completed by the end of next year.",
    translation: "据报道，这条新高铁将于明年底前建成。",
    structure: "主干骨架：It is reported that...（据报道……）。It 是形式主语，that 从句是真正主语；从句里 will be completed 是一般将来时的被动，表示“将被建成”。",
    grammar: "被动语态（It is reported that）",
    keywords: ["It is reported that", "high-speed", "complete"],
    difficulty: 2
  },
  {
    id: "s078",
    sentence: "Children should be encouraged to ask questions rather than simply accept everything they are taught.",
    translation: "应该鼓励孩子提问，而不是让他们被动地接受所教的一切。",
    structure: "主干：Children should be encouraged（孩子应被鼓励）。encourage sb. to do 的被动形式是 sb. be encouraged to do；they are taught 是省略了 that 的定语从句，修饰 everything。",
    grammar: "被动语态（情态动词被动）",
    keywords: ["encourage", "rather than", "accept"],
    difficulty: 2
  },
  {
    id: "s079",
    sentence: "Once the problem was discovered, immediate steps were taken to prevent it from happening again.",
    translation: "问题一旦被发现，就立即采取了措施，以防它再次发生。",
    structure: "主干：steps were taken（措施被采取）。Once... 是时间状语从句，用被动 was discovered；主句 were taken 也是被动；to prevent... 是不定式作目的状语。",
    grammar: "被动语态（一般过去时被动）",
    keywords: ["once", "take steps", "prevent...from"],
    difficulty: 2
  },
  {
    id: "s080",
    sentence: "Many of the traditions that have been passed down for centuries are now facing the risk of disappearing.",
    translation: "许多流传了几个世纪的传统，如今正面临消失的风险。",
    structure: "主干：Many of the traditions are facing the risk（许多传统正面临风险）。that have been passed down 是定语从句，用现在完成时的被动，表示“一直被流传下来”。",
    grammar: "被动语态（定语从句中完成被动）",
    keywords: ["tradition", "pass down", "face the risk of"],
    difficulty: 3
  },

  // ---------- 比较结构（5句：s081-s085） ----------
  {
    id: "s081",
    sentence: "The more you read, the more confident you will feel when you meet unfamiliar words.",
    translation: "你读得越多，遇到生词时就会越自信。",
    structure: "主干：The more... the more...（越……越……）。这是“the + 比较级，the + 比较级”句型，前半句是条件，后半句是结果，两个比较级都要紧跟 the。",
    grammar: "比较结构（the + 比较级, the + 比较级）",
    keywords: ["the more...the more", "confident", "unfamiliar"],
    difficulty: 2
  },
  {
    id: "s082",
    sentence: "Compared with last year, the number of students who choose to study abroad has dropped sharply.",
    translation: "与去年相比，选择出国留学的学生人数大幅下降。",
    structure: "主干：the number has dropped（数量下降了）。Compared with last year 是过去分词短语作比较状语；who choose to study abroad 是定语从句修饰 students。",
    grammar: "比较结构（compared with）+ 定语从句",
    keywords: ["compare with", "the number of", "study abroad"],
    difficulty: 2
  },
  {
    id: "s083",
    sentence: "A good teacher is far more than someone who simply delivers knowledge from a textbook.",
    translation: "一位好老师，远不止是简单地照本宣科的人。",
    structure: "主干：A good teacher is far more than someone（好老师远不止是某人）。more than 意为“不只是”；who simply delivers... 是定语从句修饰 someone。",
    grammar: "比较结构（more than 不只是）",
    keywords: ["more than", "deliver", "textbook"],
    difficulty: 2
  },
  {
    id: "s084",
    sentence: "The climate in the south is generally milder than that in the north, especially during the cold winter months.",
    translation: "南方的气候总体上比北方温和，尤其是在寒冷的冬季几个月。",
    structure: "主干：The climate is milder than that（气候比那更温和）。than 后面用 that 指代前面的 climate，避免重复；especially... 是介词短语作状语，突出比较范围。",
    grammar: "比较结构（milder than，that 指代）",
    keywords: ["climate", "mild", "that 指代"],
    difficulty: 2
  },
  {
    id: "s085",
    sentence: "Reading a book is not the same as watching a film; the former allows you to imagine things in your own way.",
    translation: "读书和看电影不一样；前者让你能用自己的方式去想象。",
    structure: "主干：Reading is not the same as watching（读书不同于看电影）；后半句 the former allows you to imagine（前者让你想象）。the former... the latter... 是成对出现的对比表达。",
    grammar: "比较结构（the former...the latter）",
    keywords: ["the same as", "the former", "in one's own way"],
    difficulty: 2
  },

  // ---------- 强调/倒装/省略（5句：s086-s090） ----------
  {
    id: "s086",
    sentence: "It was through hard work and determination that she finally achieved her dream of becoming a doctor.",
    translation: "正是通过努力和决心，她才最终实现了当医生的梦想。",
    structure: "这是强调句：It is/was + 被强调部分 + that + 其余。被强调的是方式状语 through hard work and determination；去掉 It was...that 后句子仍然完整：She achieved her dream through hard work. 这是判断强调句的方法。",
    grammar: "强调句（It is...that）",
    keywords: ["It was...that", "determination", "achieve one's dream"],
    difficulty: 3
  },
  {
    id: "s087",
    sentence: "Rarely do people in their twenties realize how valuable good health is until they lose it.",
    translation: "二十多岁的人很少意识到健康有多宝贵，直到失去它才明白。",
    structure: "主干：people realize（人们意识到）。句首 Rarely 是否定副词放在句首，句子要部分倒装，所以加了助动词 do；正常语序是 People rarely realize...。how 引导宾语从句。",
    grammar: "否定词前置引起倒装",
    keywords: ["rarely", "倒装 do", "until"],
    difficulty: 3
  },
  {
    id: "s088",
    sentence: "Only when you step out of your comfort zone will you truly understand what you are capable of.",
    translation: "只有走出舒适区，你才会真正明白自己有多大潜力。",
    structure: "主干：you will understand（你会明白）。句首 Only + 状语从句 when... 放在句首，主句要部分倒装，所以 will 提到主语 you 前面；what 引导宾语从句。",
    grammar: "Only 开头引起倒装",
    keywords: ["only + 状语", "comfort zone", "be capable of"],
    difficulty: 3
  },
  {
    id: "s089",
    sentence: "Though tired after a long day's work, the father still played games with his little daughter.",
    translation: "尽管忙了一整天很累，这位父亲还是陪小女儿玩了游戏。",
    structure: "主干：the father still played games（父亲还是玩了游戏）。Though tired... 是让步状语从句的省略形式，完整是 Though he was tired...；当从句主语和主句主语一致、且含 be 动词时，可以省略“主语+be”。",
    grammar: "状语从句的省略（though + 形容词）",
    keywords: ["though 省略", "play games with", "a long day's work"],
    difficulty: 2
  },
  {
    id: "s090",
    sentence: "The report does point out several serious problems that have been ignored by the public for too long.",
    translation: "这份报告确实指出了几个被公众忽视太久的严重问题。",
    structure: "主干：The report points out problems（报告指出问题）。does point out 中的 does 是强调谓语动词，表示“确实、的确”，用于一般现在时且主语是第三人称单数时；that 引导定语从句。",
    grammar: "强调谓语（do/does/did + 动词原形）",
    keywords: ["does + 动词原形", "point out", "ignore"],
    difficulty: 3
  },

  // ---------- 并列复合句（10句：s091-s100） ----------
  {
    id: "s091",
    sentence: "The Internet has changed the way we communicate, and it has also changed the way we shop, work, and learn.",
    translation: "互联网改变了我们的交流方式，也改变了我们购物、工作和学习的方式。",
    structure: "这是由 and 连接的两个并列分句，前后结构对称。每个分句里 the way 后面都接了省略 that/in which 的定语从句（we communicate / we shop...）。",
    grammar: "并列复合句（and）+ 定语从句省略",
    keywords: ["the way", "communicate", "and 并列"],
    difficulty: 2
  },
  {
    id: "s092",
    sentence: "He had practiced the speech dozens of times, but he still felt nervous when he finally stood on the stage.",
    translation: "这段演讲他练了几十遍，但真站上台时，他还是感到紧张。",
    structure: "由 but 连接两个并列分句，表示转折。前半句主干 He had practiced（他练过），后半句主干 he felt nervous（他紧张）；when 引导时间状语从句。",
    grammar: "并列复合句（but 转折）",
    keywords: ["practice", "dozens of times", "nervous"],
    difficulty: 2
  },
  {
    id: "s093",
    sentence: "You can travel by train, or you can drive yourself; either way, the journey will take about five hours.",
    translation: "你可以坐火车，也可以自己开车；不管哪种方式，路程都要花大约五个小时。",
    structure: "由分号连接两个并列大句。前半句用 or 提供两个选择（by train / drive）；后半句 either way 作状语，主干是 the journey will take five hours。",
    grammar: "并列复合句（or 选择 + 分号并列）",
    keywords: ["by train", "or", "either way"],
    difficulty: 2
  },
  {
    id: "s094",
    sentence: "The company offers good training, and it provides competitive salaries, so many young graduates apply every year.",
    translation: "这家公司提供良好的培训，还给出有竞争力的薪水，所以每年都有很多年轻毕业生申请。",
    structure: "第一层 and 连接两个并列的好处（培训好 + 薪水高），第二层 so 引出结果（因此很多人申请）。是 and + so 两层并列，先因后果。",
    grammar: "并列复合句（and + so 因果）",
    keywords: ["provide", "competitive", "apply for"],
    difficulty: 2
  },
  {
    id: "s095",
    sentence: "It was late at night, yet the office was still crowded with people who were working on the urgent project.",
    translation: "已经是深夜了，办公室里却仍然挤满了正在赶紧急项目的人。",
    structure: "由 yet（然而）连接两个并列分句，表转折：前半句 It was late（很晚了），后半句 the office was crowded（办公室还很挤）；who 引导定语从句修饰 people。",
    grammar: "并列复合句（yet 转折）+ 定语从句",
    keywords: ["late at night", "be crowded with", "urgent"],
    difficulty: 2
  },
  {
    id: "s096",
    sentence: "Reading broadens the mind, while traveling provides experience that no book can fully describe.",
    translation: "读书能开阔眼界，而旅行能带来任何书本都无法完全描述的体验。",
    structure: "由 while 连接两个并列分句表示对比：Reading broadens the mind（读书开阔思维），traveling provides experience（旅行提供体验）；that 引导定语从句修饰 experience。",
    grammar: "并列复合句（while 对比）+ 定语从句",
    keywords: ["broaden the mind", "experience", "while"],
    difficulty: 2
  },
  {
    id: "s097",
    sentence: "The old factory has been turned into a museum, and thousands of visitors come here every month to learn about local history.",
    translation: "老工厂已被改造成博物馆，每月有成千上万的游客来这里了解当地历史。",
    structure: "由 and 连接两个并列分句：前半句讲工厂的变化（has been turned into，被动），后半句讲结果（游客来参观）。to learn about... 是不定式作目的状语。",
    grammar: "并列复合句（and）+ 被动语态",
    keywords: ["turn into", "thousands of", "learn about"],
    difficulty: 2
  },
  {
    id: "s098",
    sentence: "She had neither the money nor the time to go on holiday, but she did not complain about it at all.",
    translation: "她既没钱也没时间去度假，但她一点也没有抱怨。",
    structure: "由 but 连接两个并列分句。前半句用 neither...nor...（既不……也不……）连接两个并列宾语；后半句 she did not complain（她没抱怨），at all 加强语气。",
    grammar: "并列复合句（but）+ neither...nor",
    keywords: ["neither...nor", "go on holiday", "not...at all"],
    difficulty: 2
  },
  {
    id: "s099",
    sentence: "The storm destroyed many houses, but no one was seriously injured, which the local news reported the next day.",
    translation: "暴风雨摧毁了许多房屋，但没有人受重伤；当地新闻第二天报道了这件事。",
    structure: "由 but 连接两个并列分句（房屋被毁 + 无人重伤），逗号后 which 指代前面整句话，引导非限制性定语从句，作 reported 的宾语，意为“这件事”。",
    grammar: "并列复合句（but）+ which 指代整句",
    keywords: ["destroy", "injure", "report"],
    difficulty: 3
  },
  {
    id: "s100",
    sentence: "Practice makes perfect, and patience pays off; these two simple rules have helped countless learners succeed.",
    translation: "熟能生巧，耐心终有回报；这两条简单的原则，已经帮助无数学习者取得了成功。",
    structure: "由分号连接两个并列大句。前半句用 and 连接两句谚语（Practice makes perfect / patience pays off）；后半句 these two simple rules 是主语，指代前面两句。",
    grammar: "并列复合句（and + 分号）",
    keywords: ["practice makes perfect", "pay off", "countless"],
    difficulty: 2
  }
];

// 导出（兼容浏览器 <script> 与 Node 两种引用方式）
if (typeof module !== "undefined" && module.exports) {
  module.exports = LONG_SENTENCES;
}
