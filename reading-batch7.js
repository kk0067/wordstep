// 成人高考专升本英语阅读题库 第七批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一至六批不重复）：咖啡文化、冥想正念、远程医疗、独居生活、国潮国货、露营、二手经济、网络诈骗、职业教育、宠物经济
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_7 = [
  {
    id: "r061",
    title: "The Coffee Shop That Was Never About the Coffee",
    type: "成考标准",
    level: "D",
    category: "咖啡文化",
    wordCount: 310,
    text: "Coffee has been drunk for centuries, but the modern coffee shop means something that the beans themselves cannot explain. A cup of coffee costs little to make, yet customers pay several times more for a seat, a lamp, and a few hours away from home. What they are buying, in the end, is not a drink but a place.\n\nThis idea is not new. In seventeenth-century London, coffee houses served as the offices of the day. Merchants, writers and politicians gathered there to read the latest newspapers, make deals, and argue about philosophy. A man who had no desk of his own could still do business in a coffee house from morning until night. Some of the world's famous banks began as the meeting tables of these noisy rooms.\n\nToday the same pattern appears wherever a young middle class is growing. People come to coffee shops with laptops, not because the coffee is better than what they make at home, but because the alternative is a tiny rented room or an office where they cannot wait to leave. The shop offers what economists call a third place, neither home nor work, where one may sit for as long as the cup lasts without being asked to leave.\n\nOf course, this convenience has its limits. Shops cannot remain open if nobody buys anything, and a writer who stays for six hours with one small coffee is, politely speaking, a burden. The successful ones therefore design their seats to be comfortable enough to stay, but not soft enough to sleep in.\n\nYet the deeper reason for the coffee shop's success is emotional rather than economic. Loneliness has become one of the quiet problems of city life. A person sitting alone, surrounded by other warm bodies, does not feel quite so alone. That feeling, more than any bean, is what people pay for.",
    translation: "咖啡已经被人们饮用了好几个世纪，但现代咖啡馆所意味的东西，却不是咖啡豆本身能解释的。一杯咖啡成本很低，顾客却愿意多付好几倍的价钱，只为买一个座位、一盏灯，以及几小时远离家的时光。说到底，他们买的不是一杯饮品，而是一个地方。\n\n这个念头并不新鲜。在十七世纪的伦敦，咖啡馆就是当时的办公室。商人、作家和政客聚在那里，读最新的报纸、谈生意、争论哲学。一个没有自己办公桌的人，也可以在咖啡馆里从早忙到晚。世界上一些著名的银行，就起源于这些喧闹房间里的会议桌。\n\n今天，只要年轻的中产阶级在成长，同样的情形就会出现。人们带着笔记本电脑走进咖啡馆，并不是因为店里的咖啡比家里煮得好喝，而是因为另一个选择要么是一间狭小的出租屋，要么是一间让人迫不及待想离开的办公室。咖啡馆提供了经济学家所谓的\"第三空间\"——既不是家，也不是工作场所，一杯咖啡喝多久，就能坐多久，而不会有人来催你走。\n\n当然，这种方便也有它的限度。如果什么都不买，店铺就开不下去；一位作家只点一小杯咖啡却坐上六个小时，说得客气些，也是个负担。于是成功的咖啡馆会把椅子设计得让人愿意坐下去，却又软不到能在上面睡着。\n\n然而咖啡馆成功更深层的原因，是情感上的，而不是经济上的。孤独，已经成为城市生活中悄悄蔓延的问题之一。一个人独自坐着，身边有其他有温度的人，就不会觉得那么孤单。那种感觉，胜过任何一颗咖啡豆，才是人们真正付钱购买的东西。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why do customers pay much more than the coffee costs to make?",
        options: [
          "They are buying a place to stay rather than just the drink",
          "They cannot make coffee at home at all",
          "The beans in shops are far more expensive than anywhere else",
          "They are forced to pay for the newspapers on the table"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：What they are buying, in the end, is not a drink but a place.",
          correctReason: "首段末句直接点明顾客买的是一个地方而不只是一杯饮品，A与原文完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第3段说人们在家也会煮咖啡，并非完全不会做。",
          wrongC: "无据：原文首句说咖啡豆本身解释不了咖啡馆的意义，并未说豆子价格最贵。",
          wrongD: "无据：原文未提顾客被强制为报纸付钱。",
          errorType: "定位错误：考生须抓住\"not a drink but a place\"这一转折核心。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the coffee houses of seventeenth-century London?",
        options: [
          "They were mainly used as hotels for travellers",
          "They had no newspapers or books at all",
          "They served as informal offices for people without their own desks",
          "They were forbidden to merchants and politicians"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：A man who had no desk of his own could still do business in a coffee house from morning until night.",
          correctReason: "原文说没有自己办公桌的人也能在咖啡馆做生意，可推出咖啡馆是没有办公室者的非正式办公场所，C正确。",
          wrongA: "无据：原文说咖啡馆是当时的办公室，并非旅馆。",
          wrongB: "相反：第2段说人们在那里读最新的报纸。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第2段明确说商人、作家和政客聚集于此。",
          errorType: "推理过度：考生须区分\"办公场所\"与\"旅馆\"，勿把gathered误读为被禁止。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"burden\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "a loyal customer who buys a great deal",
          "someone who causes trouble or extra cost to others",
          "a skilled worker who repairs coffee machines",
          "a regular reader of the daily newspapers"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：a writer who stays for six hours with one small coffee is, politely speaking, a burden.",
          correctReason: "只买一小杯却坐六小时的人，对店铺而言是负担/添麻烦的人，B与语境吻合。",
          wrongA: "相反：忠实买很多的顾客对店铺是好事，不是burden。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文讨论的是顾客，不是修机器的人。",
          wrongD: "无据：读报是第2段的内容，与burden无关。",
          errorType: "语境误判：考生须抓住\"坐六小时只点一小杯\"的成本关系推断词义。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Coffee beans are far too expensive in modern shops",
          "London's banks should never have left the coffee houses",
          "Coffee shops should refuse all customers with laptops",
          "The coffee shop succeeds mainly as a social and emotional space"
        ],
        correct: 3,
        explanation: {
          location: "全文：首段说买的是地方，中段讲\"第三空间\"，末段点明情感而非经济原因。",
          correctReason: "全文首尾呼应，强调咖啡馆作为社交与情感空间的价值，D完整概括。",
          wrongA: "无据：原文说成本低、顾客多付钱买的是座位，并未批评豆子太贵。",
          wrongB: "无据：举伦敦银行只是历史例证，并非主张银行不该离开。",
          wrongC: "相反：第3段说人们带笔记本进店，原文并未主张拒绝。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨片面：考生若只盯第4段\"限制\"易误选C，须看末段情感主线。"
        }
      }
    ]
  },
  {
    id: "r062",
    title: "Ten Minutes That Do Not Disappear",
    type: "成考标准",
    level: "D",
    category: "冥想正念",
    wordCount: 310,
    text: "A few years ago, if you told your manager that you were going to spend ten minutes sitting quietly with your eyes closed in the middle of a busy afternoon, the answer would probably have been a strange look. Today, however, more and more companies, schools and hospitals encourage exactly this. The practice is called meditation, and it has spread from religious temples into ordinary offices without anyone quite planning it.\n\nMeditation, in its simplest form, is not about emptying the mind. Anyone who has tried it knows that thoughts keep arriving by themselves. The real skill is noticing the thought and gently letting it pass, like watching a leaf float down a river instead of jumping in to catch it. Researchers have found that regular practice can lower blood pressure and improve sleep, though the effect is usually modest rather than magical.\n\nThe attraction, however, is not medical so much as practical. Modern people are surrounded by messages that arrive every second: a work email, a friend's message, a news headline. The brain, trained to answer immediately, slowly loses the ability to be bored. Meditation trains the opposite muscle: the ability to sit with nothing happening and not feel that something is wrong.\n\nCritics argue that it has become a fashion sold in expensive courses, and in some ways they are right. You do not need a special app, a comfortable cushion, or a famous teacher. You need a chair, a clock, and ten minutes.\n\nThe danger of any popular habit is that people do it in order to feel calmer, and then feel anxious when they are not calmer after one week. If that happens, the practice itself has just become another task to fail. Perhaps the honest test is simpler: after ten minutes of sitting, are you a little kinder to the person you will meet next?",
    translation: "几年前，如果你告诉经理，你要在忙碌的午后闭上眼睛安静坐十分钟，对方多半会投来奇怪的眼神。然而今天，越来越多的公司、学校和医院恰恰在鼓励这件事。这种练习叫冥想，它就这样在无人刻意安排的情况下，从宗教寺庙走进了普通办公室。\n\n冥想最简单的形式，并不是把脑子清空。任何试过的人都知道，念头会自己不断冒出来。真正的技巧，是注意到那个念头，再轻轻放它过去，就像看着一片叶子顺河漂走，而不是跳下水去抓它。研究发现，坚持练习有助于降低血压、改善睡眠，不过效果通常是温和的，并非什么魔法。\n\n然而它吸引人的地方，与其说是医学上的，不如说是实用上的。现代人被每秒抵达的信息包围：一封工作邮件、一条朋友消息、一个新闻标题。大脑被训练得必须立刻回应，便慢慢失去了\"感到无聊\"的能力。冥想训练的恰恰是相反的那块肌肉：让你能在什么都没发生时坐得住，而不觉得哪里出了问题。\n\n批评者说，它已经变成一门靠昂贵课程贩卖的时髦生意；在某些方面，他们说得对。你并不需要一个特殊的应用、一个舒服的坐垫，或者一位名师。你只需要一把椅子、一个钟，和十分钟。\n\n任何流行习惯都有一个危险：人们为了变得更平静去做它，结果一周后还没平静，反而更焦虑。一旦如此，这项练习本身就成了又一件会让人失败的任务。也许真正的检验更简单：静坐十分钟之后，你对下一个要见的人，是不是稍微和善了一点？",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what is the real skill of meditation?",
        options: [
          "To empty the mind completely of every thought",
          "To notice thoughts and let them pass gently",
          "To think hard about one's problems until they disappear",
          "To remember as many new ideas as possible"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：The real skill is noticing the thought and gently letting it pass.",
          correctReason: "原文直接给出冥想的真正技巧是觉察念头并轻轻放走，B与之一致。",
          wrongA: "相反：首句说冥想不是empty the mind。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文强调不追念头像抓叶子，并非埋头苦想问题。",
          wrongD: "无据：与\"记住更多想法\"无关。",
          errorType: "正反混淆：考生须区分\"清空脑子\"与\"觉察后放下\"两个对立概念。"
        }
      },
      {
        questionType: "信息定位题",
        question: "Which of the following does the writer say is NOT necessary for meditation?",
        options: [
          "A chair to sit on",
          "Ten minutes of quiet time",
          "A clock to mark the passing minutes",
          "An expensive app, a cushion and a famous teacher"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：You do not need a special app, a comfortable cushion, or a famous teacher. You need a chair, a clock, and ten minutes.",
          correctReason: "原文明确说app、坐垫、名师并不需要，真正需要的是椅子、钟和十分钟，D为正确项。",
          wrongA: "相反：椅子是原文列出的必需品之一。",
          wrongB: "相反：十分钟是原文列出的必需品之一。",
          wrongC: "相反：钟是原文列出的必需品之一。",
          wrongD: "（本题D为正确答案）",
          errorType: "排除误判：本题为\"哪个不需要\"，须用原句逐项排除必需品。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the brain of modern people from Paragraph 3?",
        options: [
          "It is so used to constant messages that it struggles with doing nothing",
          "It naturally prefers silence to any form of news",
          "It grows stronger the fewer emails it receives",
          "It completely stops working after ten minutes of sitting"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：The brain, trained to answer immediately, slowly loses the ability to be bored.",
          correctReason: "原文说大脑被训练得必须立刻回应，渐渐失去无聊的能力，可推出它难以忍受无所事事，A正确。",
          wrongB: "相反：原文说现代人被信息包围，并非天生偏爱安静。",
          wrongC: "无据：原文未说收邮件越少大脑越强。",
          wrongA: "（本题A为正确答案）",
          wrongD: "无据且夸张：静坐十分钟并不会让大脑完全停止工作。",
          errorType: "推理极端化：考生须把\"loses the ability to be bored\"合理转译为\"难以闲着\"。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What does the writer seem to suggest in the last paragraph?",
        options: [
          "People should give up meditation if they are not calmer in a week",
          "A famous teacher is the only reliable guide to meditation",
          "The goal is a small kindness to others, rather than a magical immediate change",
          "Meditation works only for people inside religious temples"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：are you a little kinder to the person you will meet next?",
          correctReason: "末段把检验标准落在\"对下一个人更和善一点\"，而非立刻变平静，C符合作者态度。",
          wrongA: "相反：末段批评\"一周没效果就焦虑\"，并非建议放弃。",
          wrongB: "相反：第4段说并不需要famous teacher。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：首段说冥想已从寺庙走进办公室。",
          errorType: "态度误读：考生须把握作者温和、不神化的笔调。"
        }
      }
    ]
  },
  {
    id: "r063",
    title: "The Doctor on the Screen",
    type: "成考标准",
    level: "D",
    category: "远程医疗",
    wordCount: 316,
    text: "Last winter, a farmer in a remote village woke with a cough that would not go away. In the past, he would have had to spend half a day on a bus, wait in a crowded county hospital, and return home poorer and no clearer about what was wrong. This time, however, he sat in front of a small camera at the village clinic, described his symptoms to a doctor in the city, and received a clear answer within the hour.\n\nThis is telemedicine, and it has changed medicine more quietly than any new drug. Using a video call, ordinary sensors, and shared electronic records, a patient in the countryside can now be examined by specialists who once would have been hundreds of kilometres away. For people with chronic illnesses, who used to travel long distances every few weeks for a simple check, the savings in time and money are enormous.\n\nYet the technology is not a full replacement. A doctor cannot feel a swollen throat or press a painful stomach through a screen. Serious emergencies still require an ambulance, and a camera can never replace the trust built in a real room. The best clinics know this, and they use video visits only for the cases where they are safe: a follow-up, a common cold, a result that needs explaining.\n\nThere is also a quieter risk. As more care moves onto the phone, elderly patients who have never learned to use a smartphone may find themselves left behind, while their grandchildren book appointments in seconds. A fair telemedicine system has to keep a phone line and a human operator for everyone else.\n\nWhen it is well designed, telemedicine does not try to replace the hospital. It simply frees the hospital beds and the doctors' hands for the cases that truly need them, while the rest of us get our answers without losing a working day.",
    translation: "去年冬天，偏远村子里的一位农民一觉醒来，咳嗽总也好不了。放在过去，他得坐半天汽车，在拥挤的县医院里排队，回到家时钱花了不少，病也没弄明白。然而这一次，他坐在村卫生室的一台小摄像头前，把症状讲给城里的医生听，不到一个小时就得到了明确的答复。\n\n这就是远程医疗，它对医学的改变，比任何一种新药都来得更安静。借助视频通话、普通的传感器和共享的电子病历，乡下的病人现在也能让曾经远在几百公里之外的专家给自己看病。对于那些慢性病患者来说，过去每隔几周就要长途奔波去做一次简单复查，如今省下的时间和金钱是巨大的。\n\n然而这项技术并不能完全取代传统就医。医生隔着屏幕摸不到肿胀的喉咙，也按不到疼痛的肚子。危急急症仍需要救护车，一台摄像头永远替代不了在真实诊室里建立起来的信任。最好的诊所明白这一点，因此只把视频问诊用在安全的病例上：术后复查、普通感冒、一项需要解释清楚的检查结果。\n\n还有一个更隐蔽的风险。随着更多医疗服务搬上手机，那些从没学会用智能手机的老年患者，可能发现自己被落在了后面，而他们的孙辈几秒钟就能挂好号。一个公平的远程医疗系统，必须为其他人保留一条电话热线和一位真人接线员。\n\n设计良好的远程医疗，并不试图取代医院。它只是把病床和医生的双手，腾给真正需要它们的病例；而我们其余的人，也不必再牺牲一个工作日，就能得到答复。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, what did the farmer do differently this time?",
        options: [
          "He took a bus to the county hospital as usual",
          "He waited at home for a doctor to visit him",
          "He described his symptoms to a city doctor through a camera",
          "He bought a new kind of cough medicine at a local shop"
        ],
        correct: 2,
        explanation: {
          location: "原文第1段：he sat in front of a small camera at the village clinic, described his symptoms to a doctor in the city.",
          correctReason: "原文说他在村卫生室对着摄像头向城里医生描述症状，C与之一致。",
          wrongA: "相反：坐半天汽车去县医院是\"过去\"的做法。",
          wrongB: "无据：原文未说医生上门。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文未提买药，只说看医生。",
          errorType: "时态混淆：考生须区分In the past与This time的对比。"
        }
      },
      {
        questionType: "推理题",
        question: "Why does the writer say telemedicine is not a full replacement?",
        options: [
          "Because some physical examinations cannot be done through a screen",
          "Because video calls are too expensive for farmers",
          "Because city doctors refuse to treat patients online",
          "Because cameras cannot show any symptoms at all"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：A doctor cannot feel a swollen throat or press a painful stomach through a screen.",
          correctReason: "隔着屏幕无法触诊，这是不能完全取代的根本原因，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第2段说远程医疗为病人节省时间和金钱。",
          wrongC: "无据：原文未说医生拒绝线上接诊。",
          wrongD: "极端化：屏幕并非什么症状都看不到，只是无法触诊。",
          errorType: "极端化：考生勿把\"不能触诊\"夸大为\"什么都看不见\"。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main purpose of Paragraph 4?",
        options: [
          "To praise smartphones as the best medical tool ever invented",
          "To argue that telemedicine should be stopped immediately",
          "To describe how grandchildren book their own appointments",
          "To point out a fairness problem that still needs to be solved"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：elderly patients ... may find themselves left behind ... A fair telemedicine system has to keep a phone line and a human operator.",
          correctReason: "第4段指出老人可能被落下，强调系统须保留电话和人工，即提出公平问题，D正确。",
          wrongA: "相反：该段语气是担忧而非赞扬。",
          wrongB: "过度推断：原文只说需保留替代渠道，并未主张停用远程医疗。",
          wrongC: "细节干扰：孙辈挂号只是举例，并非段落目的。",
          wrongD: "（本题D为正确答案）",
          errorType: "段落作用误判：考生须识别本段为\"提出隐患+对策\"。"
        }
      },
      {
        questionType: "细节题",
        question: "According to the last paragraph, when is telemedicine well designed?",
        options: [
          "When it replaces all hospitals completely",
          "When it frees hospitals for truly serious cases while handling routine ones",
          "When every patient is forced to use a smartphone",
          "When it stops all ambulance services"
        ],
        correct: 1,
        explanation: {
          location: "原文末段：It simply frees the hospital beds and the doctors' hands for the cases that truly need them.",
          correctReason: "设计良好即把医院资源留给真正需要的重症，常规问题线上解决，B正确。",
          wrongA: "相反：首句说does not try to replace the hospital。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第4段说还要为不会用手机的人保留电话。",
          wrongD: "相反：第3段说急症仍需要救护车。",
          errorType: "正反混淆：考生须抓住\"frees ... for the cases that truly need them\"。"
        }
      }
    ]
  },
  {
    id: "r064",
    title: "A Table for One",
    type: "成考标准",
    level: "D",
    category: "独居生活",
    wordCount: 305,
    text: "Thirty years ago, a young person eating dinner alone in a restaurant might have been pitied. People assumed that something had gone wrong: a quarrel with the family, a lost job, or simply bad luck. Today, however, a table for one is one of the fastest-growing sights in nearly every large city. More adults live alone than at any point in history, and the number keeps rising.\n\nThere are several reasons for this. People marry later, if they marry at all. Young workers move hundreds of kilometres from their hometowns to find jobs, leaving the family home behind. And, perhaps most importantly, being single has slowly changed from a failure to a choice. A generation that grew up sharing bedrooms now wants a flat where nobody else uses their mug.\n\nLiving alone is not, however, the lonely nightmare that parents imagine. Studies have found that single adults are often more likely to call friends, join clubs, and eat out than married neighbours, because they must build their own social life instead of sharing one with a partner. The freedom is real: you can play music at midnight, leave a book open on the sofa, and decide dinner by yourself.\n\nYet freedom has a second side. The same people who celebrate their independence can also wake up with a fever and realize there is no one to call for a glass of water. Bills, repairs and small accidents fall entirely on one pair of hands. For this reason, the happiest single people are usually those who have built a wide circle of friends and neighbours, not those who live behind a locked door.\n\nSociety still worries that living alone makes people selfish. The evidence suggests something more interesting: it teaches them to ask for help, which is a skill many married people never need to learn.",
    translation: "三十年前，一个年轻人独自在饭馆吃饭，多半会被人同情。人们会断定他一定出了什么事：和家里吵了架、丢了工作，或者纯粹运气不好。然而今天，一人桌几乎在每一座大城市里都成了增长最快的景象之一。独居的成年人比历史上任何时期都多，而且这个数字还在上升。\n\n造成这一现象的原因有好几个。人们结婚越来越晚，甚至干脆不结婚。年轻的打工人离开家乡几百公里去外地找工作，把父母的家留在了身后。而也许最重要的是，单身已经慢慢从一种\"失败\"变成了一种\"选择\"。这一代从小挤在卧室里长大的人，现在渴望一间谁也不会乱动自己杯子的公寓。\n\n然而独居，并不像父母想象的那样是一场孤独的噩梦。研究发现，单身成年人往往比已婚的邻居更爱给朋友打电话、参加社团、下馆子，因为他们必须自己搭建社交圈，而不是和伴侣共享一个。这种自由是真实的：你可以在半夜放音乐，可以把一本书摊在沙发上，可以自己决定晚饭吃什么。\n\n但自由也有另一面。那些为自己独立而欢呼的人，也可能某天发烧醒来，才发现身边连个帮忙倒杯水的人都没有。账单、修理和大大小小的意外，全落在一双手上。正因如此，过得最快乐的独居者，通常是那些建起了一圈朋友和邻居的人，而不是把自己反锁在门后的人。\n\n社会仍然担心，独居会让人变得自私。但证据指向一个更有意思的结论：它教会人开口求助，而这恰恰是许多已婚人士一辈子都不需要学的技能。",
    questions: [
      {
        questionType: "推理题",
        question: "Why was a person eating alone in a restaurant probably pitied thirty years ago?",
        options: [
          "Because restaurants then refused to serve single customers",
          "Because people were not allowed to travel far from home",
          "Because food was simply too expensive for one person",
          "Because people assumed being alone meant something had gone wrong"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：People assumed that something had gone wrong: a quarrel with the family, a lost job, or simply bad luck.",
          correctReason: "三十年前人们看到独食者会假设他出了状况，D与原文直接对应。",
          wrongA: "无据：原文未说餐馆拒绝接待单身顾客。",
          wrongB: "无据：与是否允许远行无关。",
          wrongC: "无据：原文未从价格角度解释同情。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住assumed something had gone wrong。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 3, single adults often tend to ____.",
        options: [
          "stop calling their friends completely",
          "join clubs and eat out more often than married neighbours",
          "share a flat with a married neighbour downstairs",
          "never play music at midnight"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：single adults are often more likely to call friends, join clubs, and eat out than married neighbours.",
          correctReason: "原文说单身成年人更常打电话、参加社团、下馆子，B与原文一致。",
          wrongA: "相反：原文说他们更常给朋友打电话。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文说他们自己建社交圈，并非与已婚邻居合租。",
          wrongD: "相反：第3段举例说可以在半夜放音乐。",
          errorType: "正反混淆：考生须区分more likely与never/completely。"
        }
      },
      {
        questionType: "指代题",
        question: "In Paragraph 4, the phrase \"one pair of hands\" refers to ____.",
        options: [
          "the hands of a married neighbour downstairs",
          "the hands of friends in a wide circle",
          "the single person living alone",
          "the hands used to lock the door at night"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段：Bills, repairs and small accidents fall entirely on one pair of hands.",
          correctReason: "本段讨论独居者独自面对账单与意外，one pair of hands指代独居者本人，C正确。",
          wrongA: "无据：邻居之手不在本句语境。",
          wrongB: "相反：朋友是下一句\"最快乐的独居者\"所建圈子的人，并非本句所指。",
          wrongC: "（本题C为正确答案）",
          wrongD: "字面误解：lock the door虽同段出现，但并非one pair of hands的指代对象。",
          errorType: "指代误判：考生须结合本段\"自由的另一面\"这一主语判断。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the passage mainly about?",
        options: [
          "Living alone is a complex choice with both freedom and hidden costs",
          "Marriage is becoming unnecessary in modern cities",
          "Young workers should immediately return to their hometowns",
          "Single people are generally more selfish than married people"
        ],
        correct: 0,
        explanation: {
          location: "全文：第2段讲从失败到选择，第3段讲自由，第4段讲代价，末段平衡收尾。",
          correctReason: "文章既写独居的自由，也写其代价，态度平衡，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "过度推断：原文只说结婚变晚、单身变多，并未主张婚姻不必要。",
          wrongC: "无据：原文未建议年轻人返乡。",
          wrongD: "相反：末段说独居者学会求助，并非更自私。",
          errorType: "主旨极端化：考生勿把\"结婚晚\"推成\"婚姻没必要\"。"
        }
      }
    ]
  },
  {
    id: "r065",
    title: "When the Home-Grown Flag Comes Back",
    type: "成考标准",
    level: "D",
    category: "国潮国货",
    wordCount: 308,
    text: "Ten years ago, a young shopper buying a pair of sports shoes in a Chinese city would probably have chosen a famous foreign brand. The label, it was believed, meant quality, style and even a certain confidence. Today, the same shopper is just as likely to buy a sports shoe designed by a young Chinese studio, printed with a pattern from an ancient poem, and advertised on a short-video app by an actor in traditional clothing.\n\nThis change has been called guochao, a word that mixes the Chinese word for country with the word for tide. It describes a sudden wave of pride in domestic design: lipstick inspired by painted faces in the opera, ice cream shaped like the roofs of old palaces, and T-shirts carrying characters from folk tales.\n\nAt first, shop owners worried that the wave would last one season. Instead, it has lasted years. Several reasons lie behind its staying power. The quality of local factories has finally caught up, so a domestic product no longer has to apologize for being cheaper. The internet lets a small designer test an idea on ten thousand young customers within a week, instead of waiting for a department store's permission. And the generation now buying these products grew up in a richer country, so wearing something made at home no longer feels like a compromise.\n\nNot everyone is pleased. Some buyers complain that the trend is mostly clever marketing: a familiar label with a traditional pattern printed on it, at a higher price. There is truth in this. A flag printed on a T-shirt does not by itself make the T-shirt better.\n\nYet the deeper shift is not about any one product. It is the quiet loss of the old feeling that foreign is automatically better. Whether the wave survives or settles, that feeling is unlikely to return.",
    translation: "十年前，一个中国城市里的年轻人去买运动鞋，多半会选一个外国名牌。人们相信，那个商标代表着品质、款式，甚至某种自信。而今天，这位年轻人很可能转身买下一双由中国年轻工作室设计的运动鞋，鞋上印着取自古诗的纹样，在短视频应用里由一位身着古装的演员代言。\n\n这场变化被称为\"国潮\"——这个词把\"国家\"与\"潮流\"两个汉字合在了一起。它描述的，是一股对本土设计突然涌起的自豪感：灵感来自戏曲脸谱的口红、造型像故宫飞檐的冰淇淋、印着民间故事人物的T恤。\n\n起初，店主们担心这股风潮只能火一个季度。结果它火了好几年。背后有几个原因。本土工厂的质量终于追了上来，国货不再需要因为便宜而道歉。互联网让小设计师一周之内就能把一个点子摆在上万名年轻顾客面前，而不必等百货公司点头。如今掏钱的这一代人，是在一个更富裕的国家长大的，穿上国产货也不再觉得是一种将就。\n\n并非所有人都买账。有些顾客抱怨说，这股潮流大多是聪明的营销：熟悉的牌子上印个传统纹样，再把价格抬高。这话有几分道理。一面旗印在T恤上，并不能让T恤本身变好。\n\n然而更深层的变化，并不关乎某一件商品。它是那种\"外国货自动更高级\"的旧感觉，正在悄悄消失。无论这股浪潮最终是延续还是退去，那种旧感觉恐怕都不会回来了。",
    questions: [
      {
        questionType: "细节题",
        question: "Ten years ago, what did a famous foreign sports label mainly suggest to young Chinese shoppers?",
        options: [
          "Quality, style and confidence",
          "Low price and poor quality",
          "Close links with ancient poetry",
          "Free delivery to small towns"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：The label, it was believed, meant quality, style and even a certain confidence.",
          correctReason: "十年前外国商标被认为代表品质、款式与自信，A与原文完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：这正是当时被反驳的印象，外国品牌象征高级而非劣质。",
          wrongC: "张冠李戴：古诗纹样是今天国潮鞋的特征。",
          wrongD: "无据：原文未提送货到小镇。",
          errorType: "定位错误：考生须抓住quality, style and confidence这三个并列名词。"
        }
      },
      {
        questionType: "推理题",
        question: "Why has the guochao wave lasted for years instead of one season?",
        options: [
          "Because foreign brands closed all their shops in China",
          "Because young customers dislike the internet",
          "Because department stores forced designers to leave",
          "Because local quality improved, the internet enables fast testing, and buyers feel more confident"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：Several reasons lie behind its staying power. The quality of local factories has finally caught up... The internet lets a small designer test an idea... And the generation now buying these products grew up in a richer country...",
          correctReason: "第3段给出三个原因：质量追上、互联网快速试款、买家更自信，D完整概括。",
          wrongA: "无据：原文未说外国品牌关店。",
          wrongB: "相反：原文说互联网帮助小设计师，年轻人并不反感网络。",
          wrongC: "相反：原文说不必再等百货公司许可，并非被赶走。",
          wrongD: "（本题D为正确答案）",
          errorType: "归纳不全：考生须把第3段三个并列原因合并，勿只取其一。"
        }
      },
      {
        questionType: "细节题",
        question: "What complaint do some buyers make about guochao products?",
        options: [
          "They are never advertised on short-video apps",
          "They are sometimes clever marketing with a traditional pattern at a higher price",
          "They are too cheap to be taken seriously by anyone",
          "They are designed only for elderly customers"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：Some buyers complain that the trend is mostly clever marketing: a familiar label with a traditional pattern printed on it, at a higher price.",
          correctReason: "原文说部分顾客抱怨这是聪明营销——印个传统纹样再抬价，B一致。",
          wrongA: "相反：第1段说国货正是在短视频应用上打广告。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：抱怨的是价格抬高而非太便宜。",
          wrongD: "无据：原文未说只面向老人。",
          errorType: "正反混淆：考生须抓住higher price这一关键。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the writer's purpose in the last paragraph?",
        options: [
          "To call for foreign brands to leave the Chinese market",
          "To advise buyers to remove all flags from their T-shirts",
          "To point out a deeper cultural shift behind the fashion wave",
          "To predict that guochao will disappear within one season"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：Yet the deeper shift is not about any one product. It is the quiet loss of the old feeling that foreign is automatically better.",
          correctReason: "末段把讨论从单品提升到文化心理的转变，目的是点出深层变化，C正确。",
          wrongA: "无据：原文并未呼吁外国品牌退出。",
          wrongB: "曲解：\"旗印在T恤上不代表T恤变好\"是让步举例，不是建议撕旗。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：原文说无论浪潮延续或退去，旧感觉不会回来，并非预测一季消失。",
          errorType: "目的误判：考生须识别末段的升华句the deeper shift。"
        }
      }
    ]
  },
  {
    id: "r066",
    title: "Why the City Dreams of a Tent",
    type: "成考标准",
    level: "D",
    category: "露营",
    wordCount: 317,
    text: "On a spring weekend, a city park outside Shanghai can hold thousands of tents, crowded almost shoulder to shoulder, as if a small town had grown overnight on the grass. The people inside them are not serious explorers. Most have never slept under the stars before. They drive from their apartments, set up a tent bought online, cook simple noodles on a small stove, and return to their warm beds by evening.\n\nThis sudden popularity of camping puzzles older hikers, who spent decades waiting for others to discover the outdoors. Yet the new campers are not looking for hardship. They are looking for the opposite: a way to feel outside without actually leaving the comfort of the city. Their tents carry lamps, folding tables, and even small coffee machines. The point is not to survive in nature. The point is to photograph a comfortable version of it and share it.\n\nCamping has therefore become less a sport than a form of weekend theatre. People spend more on equipment than they would on a short holiday, then use the equipment three times a year. Shops sell the dream as much as the gear: the catalogue shows friends laughing by a lake at sunset, never the moment when the rain arrives and the tent leaks.\n\nThis is not as foolish as it sounds. A generation that grew up indoors, studying under lamps and looking at screens, has rediscovered that a warm meal outside tastes different from the same meal on a kitchen table. The feeling, not the distance, is what they are paying for.\n\nThe best advice for a beginner is honest: start small. Borrow a tent, choose a safe site near a car, and accept that the first night will be colder and noisier than expected. Those who survive it usually go back. Those who do not, usually admit, quietly, that the kitchen table was fine all along.",
    translation: "一个春日周末，上海郊外的一座公园里能支起成千上万顶帐篷，几乎肩并肩挤在一起，仿佛一夜之间草地上长出了一座小镇。帐篷里的人并不是什么严肃的探险者。他们当中多数人以前从没在星空下睡过觉。他们从公寓开车出来，搭起一顶网购的帐篷，在小炉上煮一碗简单的面条，傍晚就回到自己暖和的床上。\n\n露营突然流行，让老一辈徒步爱好者很困惑——他们花了几十年，才等到别人愿意走进户外。然而这些新露营者追求的并不是吃苦。他们追求的恰恰相反：一种身在户外、却又不真正离开城市舒适圈的方式。他们的帐篷里装着灯、折叠桌，甚至小型咖啡机。重点不是在自然里求生，而是拍下一个舒适版的自然，再分享出去。\n\n于是露营与其说是一项运动，不如说是一场周末演出。人们花在装备上的钱，比一次短途度假还多，结果一年只用三次。商店卖的既是装备，也是梦想：画册上是朋友们在湖边夕阳下大笑的画面，却从不展示下雨时帐篷漏水的那一幕。\n\n这事儿并不像听起来那么傻。这一代在室内长大、在灯下读书、对着屏幕的年轻人，重新发现了一件事：一顿在户外吃的热饭，和在自家餐桌上吃的同一顿饭，味道就是不一样。他们付钱买的，是那种感觉，而不是那段距离。\n\n给新手最诚恳的建议是：从小处开始。借一顶帐篷，选一个离车近的安全营地，并做好心理准备——第一晚会比你想象的更冷、更吵。挺过来的人通常会再去。挺不过来的人，多半会悄悄承认：其实自家的餐桌一直就挺好。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, what do most new city campers actually do?",
        options: [
          "They spend weeks climbing distant mountains",
          "They set up tents near the city and return home by evening",
          "They refuse to drive and walk for days",
          "They sleep outdoors for the whole season"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：They drive from their apartments, set up a tent bought online... and return to their warm beds by evening.",
          correctReason: "原文说他们搭帐篷、煮面、傍晚回家，B与之一致。",
          wrongA: "相反：首段说他们不是serious explorers。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说他们从公寓开车出来。",
          wrongD: "相反：他们傍晚就回到暖和的床上。",
          errorType: "正反混淆：考生须抓住new campers并非真正的野外探险者。"
        }
      },
      {
        questionType: "推理题",
        question: "Why do older hikers feel puzzled about the camping boom?",
        options: [
          "Because the outdoors they loved was discovered in a comfort-focused way they did not expect",
          "Because young people now refuse to buy any outdoor equipment",
          "Because tents have suddenly become much cheaper",
          "Because city parks now ban serious explorers"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：This sudden popularity ... puzzles older hikers, who spent decades waiting for others to discover the outdoors. Yet the new campers are not looking for hardship.",
          correctReason: "老一辈等了几十年才等来户外被发现，可年轻人却带着咖啡机要舒适，这种方式出乎他们意料，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第3段说年轻人花大价钱买装备。",
          wrongC: "无据：原文未说帐篷变便宜。",
          wrongD: "无据：原文未说公园禁止探险者。",
          errorType: "推理过度：困惑来自方式差异，而非装备或价格。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"theatre\" in Paragraph 3 is closest in meaning to ____.",
        options: [
          "a building where films are shown",
          "a dangerous kind of storm in the mountains",
          "a performance or scene designed to look attractive",
          "a long-distance walking competition"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：Camping has therefore become less a sport than a form of weekend theatre. ... the catalogue shows friends laughing by a lake at sunset.",
          correctReason: "下文说画册只展示美好画面，可见theatre指\"表演/摆拍\"式的场景，C正确。",
          wrongA: "字面误解：此处并非指电影院建筑。",
          wrongB: "无据：theatre与山中风雪无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第3段明确说less a sport。",
          errorType: "熟词生义：考生须借\"画册只展示美好画面\"推断比喻义。"
        }
      },
      {
        questionType: "细节题",
        question: "What does the writer honestly advise beginners to do?",
        options: [
          "Buy the most expensive tent immediately",
          "Choose a site deep in the wild mountains",
          "Wait for a perfectly sunny season",
          "Start small, borrow gear, and pick a safe site near a car"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：start small. Borrow a tent, choose a safe site near a car, and accept that the first night will be colder and noisier than expected.",
          correctReason: "原文直接给出从小处开始、借装备、选离车近的安全营地，D一致。",
          wrongA: "相反：建议是borrow而非立刻买最贵。",
          wrongB: "相反：建议选离车近、安全的地方，而非深山。",
          wrongC: "相反：原文要你接受第一晚又冷又吵，而非等好天气。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须把末段三条建议合并。"
        }
      }
    ]
  },
  {
    id: "r067",
    title: "The Second Life of Old Things",
    type: "成考标准",
    level: "D",
    category: "二手经济",
    wordCount: 306,
    text: "A sofa bought last year for two thousand yuan can often be sold for eight hundred. A textbook used for one term might still look new. A winter jacket, tried once and found too bright, hangs in the back of a wardrobe until the owner forgets it exists. For years, the natural home for these things was the rubbish corner or the storage room. Today, more and more of them are finding a second owner.\n\nThe second-hand market has grown quickly, and it is not driven mainly by poor people who cannot afford new things. Many of the buyers are young, well-off city workers who actually prefer the used item. A used bag carries a story. A second-hand bookshelf costs less and leaves the shop without the sharp smell of new chemicals. In a city where every product feels the same, an old object is, strangely, more personal.\n\nSelling has also become easier than ever. A few photos, a clear description, and a message group are enough to find a buyer in the next building. What once required a weekend stall at a noisy market now happens during a lunch break.\n\nThere are, of course, problems. Some sellers describe a broken item as almost new. Buyers cannot always test an object before paying. Trust, as in any market, has to be earned by honest descriptions and fair prices.\n\nYet the larger meaning is hopeful. Throwing something away has always been the cheapest choice in the short run, but the most expensive in the long run, because the rubbish has to go somewhere. A society that learns to pass things on is, at least in a small way, learning to be less wasteful. The second life of an old object is not just a bargain. It is a quieter kind of wealth: owning less, and caring more.",
    translation: "去年花两千元买来的沙发，常常八百元就能转手。只用了一学期的课本，看上去可能还跟新的一样。一件试穿过一次、觉得颜色太艳的冬装，挂在衣柜深处，直到主人都忘了它的存在。多少年来，这些东西的天然归宿，是垃圾角或储藏室。而今天，它们当中越来越多，正在找到第二位主人。\n\n二手市场迅速扩大，而且推动它的主要并不是买不起新东西的穷人。许多买家反而是年轻、收入不错的城市打工人，他们其实更喜欢那件用过的物品。一只旧包带着一段故事。一个二手书架更便宜，离开店铺时也没有那股刺鼻的新化学气味。在一座什么商品都长得差不多的城市里，一件旧东西反而奇怪地更有个性。\n\n买卖也比以往任何时候都容易。几张照片、一段清楚的描述、再加一个微信群，就足够在隔壁楼里找到买家。曾经需要在喧闹集市上摆一个周末摊的事，如今趁午休就能办完。\n\n当然，问题也不少。有些卖家把坏了的东西说成几乎全新。买家付款前并不总能当场试用。信任，和任何市场一样，要靠诚实的描述和公道的价格一点点挣来。\n\n然而更大的意义是令人乐观的。把东西扔掉，短期看总是最省事儿，长期看却最昂贵，因为垃圾总得有个去处。一个学会把东西传下去的社会，至少在很小的一件事上，学会了少浪费。一件旧物的第二次生命，不只是一笔划算的买卖。它是一种更安静的财富：拥有得更少，在乎得更多。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, many young second-hand buyers are mainly attracted by ____.",
        options: [
          "their inability to buy anything new at all",
          "a wish to collect only broken objects",
          "the character and story that used items seem to carry",
          "the desire to resell the items at once for a high profit"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：A used bag carries a story. ... an old object is, strangely, more personal.",
          correctReason: "原文说旧物带着故事、更有个性，这正是年轻人喜欢它的原因，C正确。",
          wrongA: "相反：第2段说买家往往well-off，并非买不起新货。",
          wrongB: "无据：原文未说只买坏东西。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文讨论的是使用价值与情感，并非倒卖牟利。",
          errorType: "定位错误：考生须抓住story与personal两个关键词。"
        }
      },
      {
        questionType: "细节题",
        question: "What problem does Paragraph 4 mainly describe?",
        options: [
          "Second-hand markets have completely closed down",
          "Photos cannot be taken inside a buyer's home",
          "Buyers are never allowed to pay online",
          "Dishonest descriptions and the lack of testing can weaken trust"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：Some sellers describe a broken item as almost new. Buyers cannot always test an object before paying. Trust ... has to be earned.",
          correctReason: "第4段指出夸大描述、无法试用，进而影响信任，D概括准确。",
          wrongA: "相反：第2段说二手市场在迅速扩大。",
          wrongB: "无据：第3段说拍几张照片就能卖。",
          wrongC: "无据：原文未禁止线上付款。",
          wrongD: "（本题D为正确答案）",
          errorType: "段落主旨误判：考生须抓住problems与trust两句。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the last paragraph?",
        options: [
          "Throwing things away may seem cheap but creates long-term costs",
          "Rubbish never actually goes anywhere at all",
          "A bargain is always more important than quality",
          "Owning more objects always brings real happiness"
        ],
        correct: 0,
        explanation: {
          location: "原文末段：Throwing something away has always been the cheapest choice in the short run, but the most expensive in the long run.",
          correctReason: "扔掉东西短期省、长期贵，可推出它会造成长远代价，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "曲解：原文说垃圾总得有去处，并非哪里都不去。",
          wrongC: "无据：原文强调少浪费，未说便宜永远比质量重要。",
          wrongD: "相反：末段主张owning less。",
          errorType: "推理极端化：考生须区分短期省与长期贵。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the passage mainly arguing?",
        options: [
          "Second-hand shops should replace all new shops",
          "The used-goods trade reflects a slower, less wasteful way of living",
          "Old objects always have a better story than new ones",
          "Young city workers are too poor to buy new products"
        ],
        correct: 1,
        explanation: {
          location: "全文：第1段旧物找新主人，第2段情感价值，第4段问题，末段上升到少浪费的生活方式。",
          correctReason: "文章借二手市场讨论一种少浪费、重故事的生活态度，B完整概括。",
          wrongA: "极端化：原文只说旧物有价值，并未主张取代新店。",
          wrongB: "（本题B为正确答案）",
          wrongC: "绝对化：原文说旧物more personal，并非always better。",
          wrongD: "相反：第2段说年轻买家往往well-off。",
          errorType: "主旨绝对化：考生须警惕always/all等绝对词。"
        }
      }
    ]
  },
  {
    id: "r068",
    title: "The Voice That Is Not Quite Right",
    type: "成考标准",
    level: "D",
    category: "网络诈骗",
    wordCount: 293,
    text: "Mrs. Wang, a retired teacher, received a video call from someone claiming to be her grandson. The face on the screen looked like him, and the voice trembled as he explained that he had caused a traffic accident in another city and needed fifty thousand yuan immediately, or the police would put him in prison. Under pressure, she sent the money before the real grandson even knew anything was wrong. By the time the call was reported, the account was already empty.\n\nStories like this are no longer rare. Online fraud has changed from a messy email with bad grammar into a calm, professional business. Criminals now collect real names, family relations and recent photos from public posts, so their messages sound like news about someone you actually know. A few seconds of cloned voice, recorded from a public video, can make a worried mother believe that the son on the phone is begging for help.\n\nThe most dangerous fraud, however, is not always the most dramatic. It often arrives slowly: a customer service message about a wrong order, an investment plan that always pays the first small profit, a government notice demanding payment before an angry deadline. In each case, the victim is not stupid. They are rushed. The trick is to remove the time that thinking requires.\n\nThat is why the only reliable protection is a rule older than any technology: never send money or passwords while you are frightened, excited, or alone in a hurry. Hang up. Call the person back through a number you already know. Ask a third person in the room what they think.\n\nFraud will not disappear. But a victim who learns to wait ten minutes is often a victim who gets to keep the money.",
    translation: "退休教师王老师接到一通视频电话，对方自称是她的孙子。屏幕上的脸看着像他，声音还发着抖，说自己在外地出了交通事故，急需五万元，不然警察就要把他抓进牢里。她在压力之下，钱就转了过去，而真正的孙子这时还完全不知情。等到这通电话被报了警，那个账户早就空空如也。\n\n这样的故事，如今已经不再稀罕。网络诈骗早已从一封语法糟糕的混乱邮件，变成了一门冷静而专业的生意。骗子如今会从公开的动态里收集真实姓名、家庭关系和近期照片，于是他们发来的消息，听起来就像关于一个你确实认识的人的新闻。从一段公开视频里截取短短几秒、克隆出来的声音，就能让一位忧心忡忡的母亲相信，电话那头的儿子正在苦苦求救。\n\n然而最危险的诈骗，往往并不是最戏剧化的那种。它常常来得很慢：一条说你订单出错的客服消息，一个总会先付给你一点甜头的投资计划，一份限期内必须交钱的政府通知。在每一种情形里，受害者都不笨。他们是被催着走。花招的关键，就是夺走思考所需要的时间。\n\n正因如此，唯一可靠的防护，是一条比任何技术都古老的原则：永远不要在害怕、激动、或者一个人赶时间的时候，把钱或密码发出去。挂断电话。用你本来就知道的号码，再把对方打回去。问问屋里另一个人怎么看。\n\n诈骗不会消失。但一个学会等十分钟的受害者，往往也是那个把钱保住的人。",
    questions: [
      {
        questionType: "细节题",
        question: "What made Mrs. Wang send the money so quickly?",
        options: [
          "She recognized a real police officer on the screen",
          "The real grandson himself told her to send it",
          "She had just earned fifty thousand yuan that week",
          "The caller claimed to be her grandson in urgent trouble and pressed her"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：someone claiming to be her grandson ... needed fifty thousand yuan immediately ... Under pressure, she sent the money.",
          correctReason: "骗子冒充孙子、称出事故急需用钱并施压，王老师因此转账，D正确。",
          wrongA: "无据：屏幕上是冒充的孙子，并非真警察。",
          wrongB: "相反：真正的孙子当时还不知情。",
          wrongC: "无据：原文未说她当周赚了五万。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住claiming to be her grandson与under pressure。"
        }
      },
      {
        questionType: "细节题",
        question: "Why do modern fraud messages sound so believable?",
        options: [
          "They are written by real government officials",
          "They use old-fashioned, bad grammar on purpose",
          "Criminals gather real personal details and even clone voices",
          "They always promise to pay the victim money first"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：Criminals now collect real names, family relations and recent photos from public posts ... A few seconds of cloned voice, recorded from a public video...",
          correctReason: "骗子收集真实个人信息并克隆声音，故消息逼真，C正确。",
          wrongA: "无据：冒充政府通知是第3段的骗局，并非真官员所写。",
          wrongB: "相反：第2段说诈骗已摆脱bad grammar，变得专业。",
          wrongC: "（本题C为正确答案）",
          wrongD: "片面：先付小利只是第3段某一种投资骗局，不是消息逼真的根本原因。",
          errorType: "以偏概全：考生须区分第2段共性原因与第3段个别花招。"
        }
      },
      {
        questionType: "推理题",
        question: "According to Paragraph 3, what is the common trick behind slow, quiet fraud?",
        options: [
          "Giving victims more time to think everything over",
          "Removing the time needed for calm thinking by creating pressure",
          "Calling the victim's neighbours directly to confirm the story",
          "Refusing to mention any money at all"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：The trick is to remove the time that thinking requires.",
          correctReason: "原文直接点出花招在于夺走思考所需的时间，即制造压力，B正确。",
          wrongA: "相反：原文恰恰说受害者被夺走思考时间。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文未说骗子联系邻居。",
          wrongD: "无据：骗局始终围绕要钱，并非不提钱。",
          errorType: "正反混淆：考生须抓住remove the time that thinking requires。"
        }
      },
      {
        questionType: "细节题",
        question: "What practical protection does the writer suggest?",
        options: [
          "Never send money or passwords while frightened or hurried; call back through a known number",
          "Always answer every unknown call immediately",
          "Trust any message that mentions the government",
          "Keep all passwords written on the phone screen"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：never send money or passwords while you are frightened, excited, or alone in a hurry ... Call the person back through a number you already know.",
          correctReason: "原文建议不要在慌乱时转账，并通过已知号码回拨，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第4段说先挂断，并非立刻接听陌生来电。",
          wrongC: "相反：第3段把\"政府通知限期交钱\"列为骗局。",
          wrongD: "无据且危险：原文未建议把密码写在屏幕上。",
          errorType: "正反混淆：考生须把第4段三条建议合并为A。"
        }
      }
    ]
  },
  {
    id: "r069",
    title: "The School That Fixes Real Things",
    type: "成考标准",
    level: "D",
    category: "职业教育",
    wordCount: 281,
    text: "For a long time, going to a university was seen as the only respectable path for a bright young person. The student who preferred to repair machines, cook meals, or build houses was quietly told that they had chosen the second-best road. In recent years, however, this attitude has begun to change, and vocational education has been pushed into the centre of public attention.\n\nThe reason is economic rather than sentimental. Factories that once needed millions of simple workers now need fewer, but much more skilled ones. A modern robot line cannot be run by someone who only knows how to press a button; it requires a technician who can read a diagram, find a fault, and teach others on the team. Society has slowly understood that a country cannot be built only by graduates sitting in offices.\n\nGood vocational schools, however, are harder to build than they sound. A classroom with old textbooks produces the wrong kind of graduate. What students need is real equipment, real problems, and teachers who have themselves worked in the trade. This costs money, and it takes time, because a training centre cannot be ordered from a catalogue.\n\nThere is also a cultural problem to solve. Parents still worry that a vocational diploma will close doors, and their worry is not baseless. Until salaries and promotion paths in skilled trades are visibly respected, many families will continue to push their children toward an examination they may not enjoy.\n\nThe honest conclusion is not that universities are bad, but that a healthy society needs many roads. The young person who builds, fixes and cooks should not be reminded every day that they took the lower road.",
    translation: "长久以来，读大学被视为一个聪明年轻人唯一体面的出路。那个更愿意修机器、做饭、盖房子的学生，会被悄悄告知：你选了一条二流的路。然而近年来，这种态度开始改变，职业教育被推到了公众关注的中心。\n\n原因是经济上的，而不是感情上的。那些曾经需要上百万简单工人的工厂，如今要的人更少，却更精。一条现代化的机器人生产线，不能交给只会按按钮的人来开；它需要一位能看懂图纸、找出故障、还能带教团队的技术员。社会慢慢明白：一个国家，不能只靠坐在办公室里的毕业生来建设。\n\n然而，办一所好的职业学校，远比听起来要难。一间摆着旧课本的教室，培养不出对路的毕业生。学生真正需要的，是真设备、真问题，以及自己也在这一行干过的老师。这既费钱，又费时，因为一个实训中心没法从商品目录上下单买来。\n\n还有一个文化上的问题要解决。家长仍然担心一张职业院校的文凭会把路走死，而这种担心并非毫无根据。只要技术工种的工资和晋升通道还没有被看得见地尊重，许多家庭就会继续把孩子往一场他们也许并不喜欢的考试里推。\n\n诚恳的结论并不是大学不好，而是一个健康的社会需要许多条路。那个盖房子、修机器、掌勺做饭的年轻人，不该每天都被提醒自己走了一条次等的路。",
    questions: [
      {
        questionType: "细节题",
        question: "Why has vocational education moved to the centre of public attention recently?",
        options: [
          "Modern factories need more highly skilled technicians, not just button-pressers",
          "Universities have completely closed down",
          "Young people now refuse to learn any practical skill",
          "Old textbooks have suddenly become fashionable"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：Factories ... now need fewer, but much more skilled ones. A modern robot line cannot be run by someone who only knows how to press a button.",
          correctReason: "工业升级需要高素质技术工人，这是职业教育受重视的经济原因，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：末段说大学并非不好，并未关闭。",
          wrongC: "相反：原文恰恰呼吁重视技能学习。",
          wrongD: "相反：第3段说旧课本培养不出对路的人。",
          errorType: "定位错误：考生须抓住economic rather than sentimental与skilled ones。"
        }
      },
      {
        questionType: "推理题",
        question: "According to Paragraph 3, what makes a good vocational school?",
        options: [
          "The largest possible collection of old textbooks",
          "Real equipment, real problems, and teachers with trade experience",
          "A training centre ordered directly from a foreign catalogue",
          "Examinations that are longer than those in universities"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：What students need is real equipment, real problems, and teachers who have themselves worked in the trade.",
          correctReason: "原文直接列出真设备、真问题、有行业经验的教师，B正确。",
          wrongA: "相反：第3段批评old textbooks。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：末句说training centre cannot be ordered from a catalogue。",
          wrongD: "无据：原文未比较考试长短。",
          errorType: "正反混淆：考生须区分第3段的\"需要\"与\"不能\"。"
        }
      },
      {
        questionType: "细节题",
        question: "What worry do parents still hold about vocational education?",
        options: [
          "Vocational schools are too expensive to run",
          "Skilled workers already earn higher salaries than graduates",
          "Their children dislike eating cooked meals",
          "A vocational diploma may close doors in their future careers"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：Parents still worry that a vocational diploma will close doors.",
          correctReason: "家长担心职业文凭会把未来的路走死，D与原文一致。",
          wrongA: "无据：办学贵是第3段作者提到的成本，不是家长的担忧。",
          wrongB: "相反：第4段说技术工种的工资尚未被充分尊重。",
          wrongC: "无据：原文与是否爱吃饭无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住close doors这一原短语。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the writer's main point?",
        options: [
          "Universities should be replaced by vocational schools",
          "Skilled trades will soon pay less than office jobs",
          "A healthy society needs many respected roads, including skilled work",
          "All examinations should be cancelled for young people"
        ],
        correct: 2,
        explanation: {
          location: "全文：末段a healthy society needs many roads. The young person who builds, fixes and cooks should not be reminded ... they took the lower road.",
          correctReason: "文章主张社会应尊重多元出路，技术工种也是正路，C正确。",
          wrongA: "相反：末段说honest conclusion is not that universities are bad。",
          wrongB: "相反：第4段说要让技术工种工资被尊重，而非会更低。",
          wrongC: "（本题C为正确答案）",
          wrongD: "过度推断：原文只说别再把孩子往不喜欢的考试里推，并非取消一切考试。",
          errorType: "主旨极端化：考生勿把\"多条路\"误读为\"否定大学/取消考试\"。"
        }
      }
    ]
  },
  {
    id: "r070",
    title: "The Family Member with Four Legs",
    type: "成考标准",
    level: "D",
    category: "宠物经济",
    wordCount: 299,
    text: "In a growing number of Chinese apartments, dinner is prepared for two bowls, not two people. The smaller bowl, often decorated with fish bones, belongs to a cat or a dog that the owner describes, without embarrassment, as a child. This once-unusual habit has become big business: pet food, pet hospitals, pet hotels and even pet photography now form an industry that many young people build their careers around.\n\nThe economic side is easy to measure. Owners buy specialized food, regular health checks, and clothes that match the season. When they travel, they pay for a hotel where the animal is walked twice a day. A sick pet can cost as much as a small family holiday. Yet most owners do not complain, because they feel they are paying for love, not for a product.\n\nThe deeper reason is demographic. A generation of only children grew up with fewer brothers and sisters, and many now delay marriage and parenthood. A pet, in their twenties and thirties, offers the daily warmth that a larger family used to provide: something that greets you at the door, something that is always happy to see you, something that depends on you completely.\n\nDoctors and psychologists, however, raise a warning. Pets do reduce stress and encourage exercise, especially for the lonely. But they are not children, and they cannot solve a loneliness that runs too deep. An animal that cannot speak cannot share a real argument, forgive a complicated mistake, or stay up with you while you think about a hard decision.\n\nThe wisest owners seem to understand this. They love their animals well, and they also keep their friends, their walks outside, and the habit of talking to people. The four-legged family member is a joy. It is not, by itself, a life.",
    translation: "在中国越来越多的公寓里，晚饭是为两只碗准备的，而不是两个人。那只小一点的碗，常点缀着鱼骨，属于一只猫或一只狗——它的主人会毫不尴尬地把它称作\"孩子\"。这个曾经不寻常的习惯，如今成了一门大生意：宠物食品、宠物医院、宠物旅馆，甚至宠物摄影，凑成了一个让许多年轻人以此谋生的行业。\n\n经济上的那一面很容易衡量。主人买专用粮、定期体检、应季的衣服。出远门时，他们会花钱住一家一天能遛两次宠物的旅馆。一只生病的宠物，花掉的钱抵得上一次小型家庭旅行。可大多数主人并不抱怨，因为他们觉得自己买的是爱，而不是一件商品。\n\n更深层的原因在人口结构上。独生子女这一代长大时身边兄弟姐妹就少，如今许多人又推迟结婚和生育。于是在二三十岁的年纪，一只宠物提供了过去大家庭才给得了的日常温暖：那个在门口迎接你的小东西，那个见到你永远高兴的小东西，那个完完全全依赖你的小东西。\n\n然而医生和心理学家提出了警告。宠物确实能减轻压力、鼓励人出门活动，尤其对孤独者如此。但它们不是孩子，也无法化解那种扎得太深的孤独。一只不会说话的动物，没法陪你认真吵一架，没法原谅一个复杂的过错，也没法在你为一个艰难决定辗转难眠时，陪你熬到天亮。\n\n最聪明的主人似乎懂得这一点。他们好好爱自己的动物，同时也留住朋友、留住户外散步、保留和人说话的习惯。这位四条腿的家庭成员是一份快乐。但它本身，并不是一种生活。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why do most pet owners not complain about the costs?",
        options: [
          "Because pet food is given free by animal hospitals",
          "Because they feel they are paying for love rather than a product",
          "Because pets never get sick at all",
          "Because young people earn unlimited money"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Yet most owners do not complain, because they feel they are paying for love, not for a product.",
          correctReason: "原文直接说明主人觉得买的是爱而非商品，B一致。",
          wrongA: "无据：原文说主人花钱买专用粮和体检，并非免费。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第2段提到a sick pet会花很多钱。",
          wrongD: "无据且夸张：原文未说收入无限。",
          errorType: "定位错误：考生须抓住paying for love, not for a product。"
        }
      },
      {
        questionType: "推理题",
        question: "Why does the writer mention \"a generation of only children\" in Paragraph 3?",
        options: [
          "To argue that brothers and sisters are no longer needed",
          "To show that pets are cheaper than raising children",
          "To explain the emotional need that pets help fill in delayed adulthood",
          "To prove that single children are lonelier than everyone else"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：A generation of only children grew up with fewer brothers and sisters, and many now delay marriage and parenthood. A pet ... offers the daily warmth that a larger family used to provide.",
          correctReason: "独生子女+推迟婚育，造成情感空缺，宠物恰好填补，C正确。",
          wrongA: "无据：原文并未主张兄弟姐妹不再需要。",
          wrongB: "无据：原文未比较养宠物与养孩子的花费。",
          wrongC: "（本题C为正确答案）",
          wrongD: "极端化：原文说宠物对孤独者有益，并非断言独生子女比所有人都孤独。",
          errorType: "推理极端化：考生须区分\"填补空缺\"与\"比谁都孤独\"。"
        }
      },
      {
        questionType: "细节题",
        question: "What warning do doctors and psychologists raise in Paragraph 4?",
        options: [
          "Pets reduce stress but cannot replace deep human relationships",
          "Pets should never be walked outside",
          "Animals can never feel happy when they are alone",
          "Pet hospitals are generally unsafe"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Pets do reduce stress ... But they are not children, and they cannot solve a loneliness that runs too deep.",
          correctReason: "医生承认宠物减压，但指出它化解不了深层孤独、替代不了人际，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第4段说宠物encourage exercise，即鼓励户外活动。",
          wrongC: "无据：原文未说宠物独处时不会快乐。",
          wrongD: "无据：原文未批评宠物医院安全。",
          errorType: "正反混淆：考生须抓住But后的转折。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the writer's overall attitude toward pets?",
        options: [
          "Pets should be forbidden in small apartments",
          "A pet can fully replace a family",
          "The pet industry should be closed down",
          "Pets are a real joy, but not a substitute for human relationships"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：The four-legged family member is a joy. It is not, by itself, a life.",
          correctReason: "作者既承认宠物带来快乐，又强调它本身不是生活、替代不了人际，D准确概括态度。",
          wrongA: "无据：原文从未主张禁止养宠物。",
          wrongB: "相反：第4段说宠物cannot solve a loneliness that runs too deep。",
          wrongC: "无据：原文客观描述宠物经济，并未要求关闭。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度片面：考生勿只取\"joy\"或只取\"not a life\"。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_7 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_7 = READING_BATCH_7;
}