// 成人高考专升本英语阅读题库 第五批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一、二、三、四批不重复）：诗歌、戏剧、语言学习、跨文化交流、全球化、领导力、终身学习、自由职业、养老金、垃圾分类
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_5 = [
  {
    id: "r041",
    title: "Why Poetry Still Matters",
    type: "成考标准",
    level: "D",
    category: "诗歌",
    wordCount: 328,
    text: "People often say that poetry is dead. They picture a dusty book on a high shelf, written in a language no one speaks, about feelings no one remembers. Yet this picture is misleading. Poetry has never really disappeared; it has simply moved into places we do not always notice. It lives in the song lyrics we hum in the shower, in the advertising slogans stuck on buses, and in the short lines we send to friends late at night when ordinary words feel too heavy.\n\nThe truth is that human beings have always turned to poetry when the moment matters most. We read a short verse at a wedding, a few lines at a funeral, and a familiar poem at a graduation. Prose can explain an argument or report a fact, but only poetry can compress a whole life into twenty words. This is why, during wars and disasters, governments and newspapers have sometimes called on poets rather than generals to help the public understand what has happened.\n\nSome people complain that they \"do not understand\" modern poetry. This complaint usually mixes up two different things. Reading a difficult poem is not the same as solving a math problem, where there is one correct answer hidden behind a code. A poem asks you to slow down, to notice a word twice, and to allow several meanings to live at once. If a line feels strange, the poem may be doing its job: it is forcing you to look at a familiar thing as if for the first time.\n\nSchools are partly to blame for the prejudice. When poetry is taught only as something to be analysed for exams, students learn to fear it. They forget that before it was a school subject, poetry was a way of singing, loving, and grieving. Perhaps the best reason to read a poem tonight is not to pass a test, but to remember that language can still surprise you.",
    translation: "人们常说诗歌已经死了。他们想象一本积满灰尘的书放在高高的书架上，用一种没人说的语言写成，写着没人记得的感情。然而这幅画面是误导人的。诗歌从未真正消失；它只是搬进了我们不总是注意到的地方。它活在我们洗澡时哼的歌词里，活在贴在公交车上的广告标语里，也活在深夜里我们发给朋友的短短几行字里——那时寻常的字眼显得太重。\n\n事实是，每当时刻至关重要，人类总会转向诗歌。我们在婚礼上读一小节诗，在葬礼上念几行，在毕业典礼上背一首熟悉的诗。散文可以解释一个论点或报道一件事实，但只有诗歌能把整段人生压缩进二十个词。这就是为什么在战争和灾难期间，政府和报纸有时会请诗人而不是将军来帮助公众理解究竟发生了什么。\n\n有些人抱怨自己\"读不懂\"现代诗。这种抱怨通常把两件不同的事混在了一起。读一首难懂的诗，并不像解一道数学题——后者有一个藏在编码后面的标准答案。一首诗请你慢下来，把一个词读两遍，并容许几种意思同时存在。如果一句诗让你觉得陌生，那也许正是它在起作用：它逼你把熟悉的事物当成第一次见到那样去看。\n\n学校对这种偏见也负有部分责任。当诗歌只被当作要为考试分析的东西来教时，学生就学会了害怕它。他们忘了，在成为一门学科之前，诗歌原本是歌唱、相爱和哀悼的方式。今晚读一首诗最好的理由，也许不是为了通过考试，而是为了提醒自己：语言仍然能让你惊讶。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, where does poetry still live today?",
        options: [
          "In song lyrics, advertising slogans, and late-night messages to friends",
          "Only in dusty books kept on high library shelves",
          "Mainly in the speeches given by generals during wars",
          "Almost entirely in school exam papers and textbooks"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：It lives in the song lyrics we hum in the shower, in the advertising slogans stuck on buses, and in the short lines we send to friends late at night...",
          correctReason: "原文明确列举歌词、公交广告标语和深夜发给朋友的短行，与A完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：这正是人们对诗歌的过时误解，作者说这幅画面是misleading（误导）的。",
          wrongC: "张冠李戴：第2段说危机时请诗人而非将军，并非说诗歌活在将军的演讲里。",
          wrongD: "相反：末段说诗歌被当成考试分析的对象是学生害怕它的原因之一，并非诗歌的主要所在。",
          errorType: "定位错误：考生需定位第1段'It lives in...'三个并列宾语，不能凭'high shelf'误选B。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"compress\" in Paragraph 2 probably means ____.",
        options: [
          "to add many details and explain at great length",
          "to press or squeeze something into a smaller form",
          "to rewrite a poem in a completely different language",
          "to keep a secret and refuse to share it"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：only poetry can compress a whole life into twenty words.",
          correctReason: "把'整个人生'装进'二十个词'，可见compress意为'压缩、使变小'，B正确。",
          wrongA: "相反：这是'展开、详述'，与'二十个词'相反。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无中生有：上下文谈的是诗的凝练，不是翻译。",
          wrongD: "无中生有：与'保密'无关。",
          errorType: "单词问题：考生需抓住'a whole life into twenty words'这一对比推断'压缩'义。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about why poets are called on during wars and disasters?",
        options: [
          "Poets are better trained than generals in military strategy",
          "Newspapers refuse to print ordinary news reports about disasters",
          "Poetry can express emotion and meaning that plain reporting cannot",
          "Governments prefer poets because they write shorter articles"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：called on poets rather than generals to help the public understand what has happened.",
          correctReason: "散文只能报道事实，而诗能把一生压缩成二十词，故危机时请诗人帮助公众'理解'，C准确推出。",
          wrongA: "无中生有：原文未比较军事素养，且明确说请诗人而非将军。",
          wrongB: "无据：报纸并未拒绝报道，只是另请诗人帮助理解。",
          wrongC: "（本题C为正确答案）",
          wrongD: "过度推断/肤浅：请诗人不是因为文章短，而是因为诗能传达情感与意义。",
          errorType: "推理过度：考生易把'二十个词'误读为'短'而选D，须体会诗的表达力。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Modern poetry is too difficult and should be given up",
          "Schools should stop teaching poetry for exams altogether",
          "Poetry exists only at weddings, funerals, and graduations",
          "Poetry is alive in everyday life, and slowing down to read it still matters"
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段诗活在日常，第2段诗在关键时刻的力量，第3段读诗需慢下来，末段诗仍能让人惊喜。",
          correctReason: "文章既反驳'诗已死'，又说明诗仍在日常并值得慢读，D完整概括。",
          wrongA: "相反：作者主张读诗有价值。",
          wrongB: "以偏概全：作者批评的是'只为考试分析'的教法，并非完全取消教学。",
          wrongC: "绝对化：第2段婚礼等只是举例，诗不限于这些场合。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨片面：考生若只看第3段'读不懂'，易误选A或B，须兼顾首末段。"
        }
      }
    ]
  },

  {
    id: "r042",
    title: "Why Theatre Refuses to Disappear",
    type: "成考标准",
    level: "D",
    category: "戏剧",
    wordCount: 318,
    text: "Cinemas and television have spoiled us. When we watch a film, the image is perfect: every sound has been recorded three times, every light has been planned by a team, and an actor's worst take has been thrown away. In the theatre, none of this protection exists. The actor on stage can forget a line, trip over a rope, or simply cough. Yet these small risks are exactly why the theatre refuses to disappear.\n\nThe magic of live performance depends on a contract between two groups of strangers. The actors promise to give their full energy, and the audience promises to pay attention. In return, something happens that a recorded movie cannot copy: the people in the room become a single group, breathing at the same speed, laughing at the same second. A famous actor once said that the stage was not the play itself, but the space between the actors and the audience. Without that shared warmth, a theatre is just an empty room with chairs.\n\nThis is also why theatre is expensive and difficult to maintain. Every night, the entire set, the costumes, the lighting, and twenty people must be gathered again, even if only half the seats are sold. A film can be shown ten thousand times for almost no extra cost, but a play has to be rebuilt from scratch each evening. Small theatre companies, which depend on ticket sales that barely cover the rent, often survive only because their members believe the work is worth the trouble.\n\nCritics sometimes argue that in the age of streaming, going out to sit in the dark with strangers is an old-fashioned habit. They have a point. But they miss the larger truth. Technology can copy a face and a voice, yet it cannot copy the feeling that, tonight, in this room, the story is happening for the first and last time. Television will always be with us. So, for better or worse, will the theatre.",
    translation: "电影院和电视把我们惯坏了。看电影时，画面是完美的：每个声音都录了三遍，每束光都由团队设计过，演员最差的一条镜头早被删掉。在剧场里，这种保护一概不存在。台上的演员可能忘词、被绳子绊倒，或者只是咳一声。然而正是这些小小的风险，让戏剧拒绝消失。\n\n现场演出的魔力，依赖于两组陌生人之间的一份约定。演员许诺拿出全部精力，观众许诺集中注意力。作为回报，会发生一件录好的电影复制不了的事：屋子里的人成为一个整体，用同样的节奏呼吸，在同一秒发笑。一位名演员曾说，舞台并不是戏本身，而是演员与观众之间的那片空间。没有那份共同的暖意，剧场不过是一间摆着椅子的空屋子。\n\n这也正是戏剧昂贵、难以维持的原因。每一晚，整套布景、服装、灯光和二十个人都必须重新聚齐，哪怕座位只卖出一半。一部电影几乎不花额外成本就能放映一万次，但一出戏每个晚上都得从零重建。小型剧团靠勉强够付房租的门票生存下来，往往只是因为成员们相信这份工作值得费这个劲。\n\n批评者有时说，在流媒体时代，出门去和陌生人一起坐在黑暗里是种过时的习惯。他们有几分道理。但他们漏掉了更大的真相。技术能复制一张脸和一个声音，却复制不了那种感受：今晚，就在这间屋子里，这个故事正在第一次、也是最后一次发生。电视会一直陪着我们。而戏剧，无论好坏，也会如此。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, how is the theatre different from a film?",
        options: [
          "Theatre actors never make mistakes once the curtain rises",
          "The theatre has no recorded retakes and involves real-time risk",
          "Films use sound engineers while theatres use none at all",
          "Cinemas usually offer much more comfortable seats"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：every sound has been recorded three times... an actor's worst take has been thrown away. In the theatre, none of this protection exists.",
          correctReason: "电影可重录、删改最差镜头，而剧场没有这种保护，演员现场可能出错，B准确概括。",
          wrongA: "相反：原文说演员可能忘词、绊倒，并非从不犯错。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文未比较是否使用音响工程师。",
          wrongD: "无据：文章不谈座椅舒适度。",
          errorType: "细节误读：考生须抓住'none of this protection exists'，不能凭印象选A。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"This\" in \"This is also why theatre is expensive and difficult to maintain\" (Paragraph 3) refers to the fact that ____.",
        options: [
          "a film can be shown ten thousand times at almost no cost",
          "ticket sales of small companies barely cover the rent",
          "a whole play must be rebuilt from scratch every single night",
          "actors sometimes forget their lines on the stage"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：Every night, the entire set... must be gathered again... a play has to be rebuilt from scratch each evening.",
          correctReason: "This指代上一段现场演出的特性延伸出的'每晚从零重建'，正是戏剧昂贵的原因，C正确。",
          wrongA: "这是电影便宜的原因，不是戏剧昂贵的原因。",
          wrongB: "这是结果/处境，而非This所指的原因。",
          wrongC: "（本题C为正确答案）",
          wrongD: "第1段提到的现场小风险，与成本昂贵无直接因果。",
          errorType: "指代错误：考生须向上文找'每晚重聚布景服装灯光'这一根因。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about small theatre companies from Paragraph 3?",
        options: [
          "They make large profits from loyal audiences",
          "They prefer streaming because it costs them less",
          "They usually employ more than twenty actors on stage",
          "They continue partly out of belief rather than profit"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：Small theatre companies... often survive only because their members believe the work is worth the trouble.",
          correctReason: "门票勉强够付房租，成员靠'相信值得'才撑下去，说明靠信念而非盈利维持，D正确。",
          wrongA: "相反：原文说barely cover the rent（勉强够付房租），并非大赚。",
          wrongB: "无据：原文未说剧团偏好流媒体。",
          wrongC: "偷换数字：原文说二十个人（含布景服装灯光团队），不都是台上演员。",
          wrongD: "（本题D为正确答案）",
          errorType: "细节混淆：考生须区分'二十个人'是全体工作人员而非仅演员。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude towards theatre in the streaming age?",
        options: [
          "It remains valuable despite competition from technology",
          "It should be replaced by streaming as soon as possible",
          "It is old-fashioned and will disappear within a few years",
          "It is far too expensive to be taken seriously"
        ],
        correct: 0,
        explanation: {
          location: "原文末段：They have a point. But they miss the larger truth... So, for better or worse, will the theatre.",
          correctReason: "作者承认批评有几分道理，但强调技术复制不了现场感，戏剧将与电视同在，态度是肯定其价值，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：作者明确反对'戏剧过时'论。",
          wrongC: "相反：作者说戏剧refuses to disappear且will...will the theatre。",
          wrongD: "片面：成本高是事实，但作者并未因此否定戏剧价值。",
          errorType: "态度误判：考生须读出'But they miss the larger truth'后的转折与肯定。"
        }
      }
    ]
  },

  {
    id: "r043",
    title: "It Is Never Too Late to Learn a Language",
    type: "成考标准",
    level: "D",
    category: "语言学习",
    wordCount: 326,
    text: "Many adults give up on a foreign language before they even begin. They tell themselves that children are born linguists, that after the age of twenty the brain hardens, and that any sentence they produce will sound forever foreign. Researchers who study language have found that this picture is far too simple. Age certainly brings advantages to the young: children pick up pronunciation without effort and are rarely embarrassed by mistakes. But grown-ups have weapons of their own, and those weapons are stronger than most learners realise.\n\nThe first advantage is meaning. A child repeats a word because the teacher points to an apple. An adult connects the word to twenty things she already knows: her job, her travels, the recipe she reads on the packet. Studies of adult learners show that those who link new vocabulary to their own lives remember far more than those who simply memorise lists. This is why a phrase book bought at an airport is forgotten by next week, while a sentence needed to ask for a hospital address stays in the mind for years.\n\nThe second advantage is patience and method. Children absorb language slowly, over years, without choosing to. Adults can decide to study, plan a timetable, and check their own progress. The mistake most adult learners make is confusing fluency with perfection. They wait until every sentence is grammatically correct before opening their mouths, and so they open them almost never. A learner who speaks badly is, in practice, a learner who speaks; a learner who waits for perfection speaks to no one.\n\nNone of this means that age is no problem. Pronunciation does become harder, and the accent that a child learns stays for life. But the goal of adult learning should not be to sound like a child. It is to be understood, to be able to ask, to negotiate, to laugh across a border. By that measure, most adults could learn far more than they believe they are allowed to.",
    translation: "许多成年人甚至还没开始就放弃了外语。他们对自己说，孩子天生就是语言学家，二十岁以后大脑就硬化了，他们说出的任何句子听起来都会永远带着外国腔。研究语言的学者发现，这幅画面过于简单。年龄确实给年轻人带来优势：孩子毫不费力地学会发音，也很少因犯错而尴尬。但成年人也有自己的武器，而且这些武器比大多数学习者以为的更强大。\n\n第一个优势是意义。孩子重复一个词，是因为老师指着一个苹果。成年人则把这个词和她已经知道的二十样东西联系起来：她的工作、她的旅行、她在包装袋上读到的食谱。对成年学习者的研究表明，把生词和自己生活联系起来的人，比单纯死记单词表的人记得多得多。这就是为什么在机场买的会话簿下周就被忘了，而一句用来问路找医院的话却能记好几年。\n\n第二个优势是耐心和方法。孩子在多年里被动地吸收语言，并非出于选择。成年人可以决定去学、安排时间表、检查自己的进度。多数成年学习者犯的错误，是把流利和完美混为一谈。他们等到每句话都语法正确才开口，结果几乎永远不开口。一个说得不好的学习者，实际上是一个肯说的人；而等待完美的人，等于对着空气说话。\n\n这一切并不意味着年龄不成问题。发音确实变得更难，孩子时期学会的口音会跟一辈子。但成年人学语言的目标不该是听起来像个孩子，而是被人听懂、能够提问、能够协商、能够隔着国境一起笑。用这个标准衡量，大多数成年人能学会的，远比他们自以为被允许学会的多。",
    questions: [
      {
        questionType: "信息定位题",
        question: "According to the passage, which group remembers new vocabulary better?",
        options: [
          "Adults who memorise long word lists bought at the airport",
          "Children who repeat after teachers without thinking",
          "Adults who connect new words to their own life experience",
          "Students who only read phrase books before travelling"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：those who link new vocabulary to their own lives remember far more than those who simply memorise lists.",
          correctReason: "原文直接比较'联系自身生活者'远胜'死记单词表者'，C正确。",
          wrongA: "相反：死记机场会话簿下周即忘。",
          wrongB: "无据：文章未把儿童单纯跟读列为记忆更好者。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：会话簿正是被遗忘的例子。",
          errorType: "定位错误：考生须定位第2段比较结构'link...to their own lives'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"absorb\" in \"Children absorb language slowly, over years\" probably means ____.",
        options: [
          "to refuse and reject it completely",
          "to learn it actively and on purpose",
          "to translate it word by word",
          "to take it in gradually without effort"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：Children absorb language slowly, over years, without choosing to.",
          correctReason: "由'缓慢、多年、并非出于选择'可知absorb意为'不知不觉地吸收'，D正确。",
          wrongA: "相反：是拒绝而非吸收。",
          wrongB: "相反：这是成年人'decide to study'的主动行为，不是孩子的状态。",
          wrongC: "无据：与逐词翻译无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生须抓住'without choosing to'这一关键线索。"
        }
      },
      {
        questionType: "细节题",
        question: "Why do most adult learners fail to speak, according to Paragraph 3?",
        options: [
          "They wait for perfect grammar before opening their mouths",
          "They cannot remember any new vocabulary at all",
          "They are too embarrassed to study together with children",
          "They spend too much time travelling abroad"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：They wait until every sentence is grammatically correct before opening their mouths, and so they open them almost never.",
          correctReason: "原文直接给出原因：等到句句语法正确才开口，结果几乎不开口，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：第2段说成年人记忆词汇更好，并非记不住。",
          wrongC: "无据：文章未提与儿童一起学习。",
          wrongD: "无据：旅行在第2段只是联想例子。",
          errorType: "细节定位：考生须定位第3段'wait until...correct'句。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the passage mainly about?",
        options: [
          "Children learn foreign languages better than adults in every respect",
          "Adults have real advantages in learning a language and should not give up",
          "Pronunciation is the only difficult part of adult language study",
          "Airport phrase books are the best tool for adult learners"
        ],
        correct: 1,
        explanation: {
          location: "全文：第1段反驳'成人学不了'，第2、3段讲成人两大优势，末段鼓励成人以沟通为目标。",
          correctReason: "文章核心是成人有意义联想和方法两大优势，不应放弃，B完整概括。",
          wrongA: "相反：文章说成人有自己的武器，并非孩子处处更强。",
          wrongB: "（本题B为正确答案）",
          wrongC: "片面：发音变难只是末段让步，并非全文主旨。",
          wrongD: "相反：会话簿正是被遗忘的反例。",
          errorType: "主旨片面：考生若只看首段'孩子有优势'易误选A，须看后文转折。"
        }
      }
    ]
  },

  {
    id: "r044",
    title: "When the Same Gesture Means Two Opposite Things",
    type: "成考标准",
    level: "D",
    category: "跨文化交流",
    wordCount: 319,
    text: "An American manager once praised a Chinese employee in public, expecting thanks and a bright smile. Instead, the young man looked down, mumbled a modest reply, and spent the rest of the day worrying that his colleagues would now dislike him. The manager concluded that the employee lacked confidence. The employee concluded that the manager was noisy and strange. Neither of them realised that they had just run into one of the most common problems in global work: the same gesture can mean opposite things in two cultures.\n\nCross-cultural misunderstanding is rarely about rudeness. It is about rules that no one has written down. In some countries, looking a superior in the eye shows honesty. In others, it shows disrespect. In one culture, silence after a question means disagreement; in another, it means careful respect. When two people meet, they bring two sets of these unwritten rules, and because neither set is taught in school, neither person can explain why they feel uneasy. The result is often a quiet judgment: the other side is cold, or proud, or simply wrong.\n\nWise organisations do not solve this by forcing everyone to behave in one way. They train people to pause. Before reacting to a strange custom, they ask what the other person might have meant. They learn that a handshake can be firm or soft, that deadlines can be flexible or sacred, and that a refusal delivered with a smile may mean \"no\" or \"maybe tomorrow\". This habit of pausing is more useful than any phrase book, because it treats difference as information rather than as insult.\n\nIn a world where offices, markets, and friendships now cross borders every hour, this skill is no longer optional. People who can read the room without rushing to judge will not always be loved, but they will be trusted. And trust, across a table or an ocean, is the real currency of doing business together.",
    translation: "一位美国经理曾当众表扬一名中国员工，期待对方道谢并露出灿烂的微笑。结果，这个年轻人低下头，含糊地谦虚了几句，剩下的一整天都在担心同事们现在会讨厌他。经理得出结论：这个员工缺乏自信。员工得出结论：这个经理又吵又怪。两人都没意识到，他们刚刚撞上了全球职场最常见的问题之一：同一个手势，在两种文化里可能意思相反。\n\n跨文化误解很少是因为无礼，而是因为一些从未写下来的规则。在有些国家，直视上级的眼睛表示诚实；在另一些国家，这却表示不敬。在一种文化里，提问后沉默意味着不同意；在另一种文化里，沉默意味着恭敬地倾听。两个人相遇时，各自带着两套不成文的规则，而由于这两套规则学校都不教，谁也说不清自己为什么心里不舒服。结果往往是默默下判断：对方冷漠、傲慢，或者干脆是错的。\n\n聪明的机构不靠强迫所有人按一种方式行事来解决这个问题。他们训练人们先停一下。在对陌生习俗做出反应之前，先问问对方本意可能是什么。他们了解到，握手可以有力也可以轻柔，截止日期可以灵活也可以神圣不可更改，带着微笑说出的拒绝可能是'不'，也可能是'也许明天吧'。这种停顿的习惯比任何会话手册都有用，因为它把差异当作信息，而不是侮辱。\n\n在一个办公室、市场和友谊每小时都跨越国境的世界里，这种技能已不再是可有可无。那些能读懂气氛而不急于下判断的人，不一定人人喜欢，但一定会被信任。而信任，隔着一张桌子或一片大洋，才是彼此做生意时真正的货币。",
    questions: [
      {
        questionType: "细节题",
        question: "What happened between the American manager and the Chinese employee?",
        options: [
          "The manager punished the employee for arriving late",
          "The employee refused to work in the American office",
          "Both sides finally agreed on a public reward",
          "Both misunderstood each other's reaction to public praise"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：The manager concluded that the employee lacked confidence. The employee concluded that the manager was noisy and strange.",
          correctReason: "经理以为员工缺自信，员工以为经理又吵又怪，双方都误读了对方对表扬的反应，D正确。",
          wrongA: "无据：原文讲的是当众表扬，并非迟到惩罚。",
          wrongB: "无据：员工并未拒绝工作。",
          wrongC: "无据：没有达成奖励共识，而是产生误解。",
          wrongD: "（本题D为正确答案）",
          errorType: "细节定位：考生须抓住两次conclude的误读。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the unwritten cultural rules mentioned in Paragraph 2?",
        options: [
          "They are rarely taught in school but actually guide real behaviour",
          "They are written down clearly in international law",
          "They happen to be the same in nearly every country",
          "They mainly matter during formal dinner conversations"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：rules that no one has written down... neither set is taught in school, neither person can explain why they feel uneasy.",
          correctReason: "规则不成文、学校不教，却支配着眼神、沉默等真实行为，A正确推出。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说no one has written down。",
          wrongC: "相反：同一动作在不同国家意思相反。",
          wrongD: "以偏概全：规则涵盖职场眼神、沉默等，不限于晚宴。",
          errorType: "推理过度：考生须区分'不成文'与'不存在'。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of Paragraph 3?",
        options: [
          "To list the mistakes that organisations usually make",
          "To offer a practical way to handle cultural differences",
          "To compare handshakes in different countries in detail",
          "To prove that phrase books are completely useless"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：Wise organisations... train people to pause... ask what the other person might have meant.",
          correctReason: "第3段讲聪明机构训练员工'先停顿、再询问本意'的具体做法，即提出应对方法，B正确。",
          wrongA: "无据：本段讲的是'聪明机构'的正确做法，不是罗列错误。",
          wrongB: "（本题B为正确答案）",
          wrongC: "细节干扰：握手只是举例之一，并非全段目的。",
          wrongD: "过度：原文说停顿'比会话手册更有用'，并非说手册毫无用处。",
          errorType: "段落主旨误判：考生须区分举例与段落功能。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the best title for this passage?",
        options: [
          "Why American Managers Are Always Wrong",
          "A Short History of Global Business Travel",
          "Reading Between Cultures: Avoiding Cross-border Misunderstanding",
          "How to Learn Foreign Languages More Quickly"
        ],
        correct: 2,
        explanation: {
          location: "全文：跨文化误解现象、不成文规则、停顿应对、信任即货币。",
          correctReason: "全文围绕跨文化误解及其应对展开，C最贴切。",
          wrongA: "以偏概全/偏颇：开头例子不代表'美国经理总是错'。",
          wrongB: "无据：文章不涉及商务旅行史。",
          wrongC: "（本题C为正确答案）",
          wrongD: "跑题：第3段只是说停顿比会话手册有用，并非讲语言学习方法。",
          errorType: "主旨概括：考生须抓住cross-cultural misunderstanding主线。"
        }
      }
    ]
  },

  {
    id: "r045",
    title: "The Honest Argument About Globalisation",
    type: "成考标准",
    level: "D",
    category: "全球化",
    wordCount: 327,
    text: "Walk into almost any city in the world and you can drink the same coffee, eat the same burger, and watch the same film as someone on another continent. This is the face of globalisation that critics love to attack: a world where local shops close, where high streets look alike, and where a child in Beijing wears the same T-shirt as a child in Berlin. They call it cultural loss, and they have a point. A village that loses its own bread, its own songs, and its own accents has lost something that money cannot buy back.\n\nYet globalisation is not only a destroyer. It is also a lift. Fifty years ago, a farmer in a poor country could sell his crop only to the market down the road. Today, through ports and containers, the same harvest can reach a shop three oceans away. The money that returns can pay for a child's school uniform, a roof that does not leak, and a clinic down the lane. Poverty, in numbers that economists can measure, has fallen in almost every region that opened itself to trade. To pretend this is nothing would be dishonest.\n\nThe honest argument is harder than slogans. The question is not whether globalisation is good or evil, but how its costs are shared. The profits of a free market are real, but they are not spread evenly. The factory worker whose plant moved abroad, the small shopkeeper who cannot compete with a website, the fisherman whose river was polluted by a distant industry - these people paid a price that the global number never mentions. A fair global system is one in which the winners help pay for the losers, through retraining, through pensions, and through rules that keep the worst factories in check.\n\nGlobalisation is not going to be undone by a wall or a speech. The choice, in the end, is between a system that serves only a few and one that tries to lift as many as it can. That choice is political, and it is ours.",
    translation: "走进世界上几乎任何一座城市，你都能喝到和另一块大陆上的人一样的咖啡，吃到一样的汉堡，看一样的电影。这正是批评者最爱攻击的全球化面孔：本地小店关门，商业街长得千篇一律，北京的孩子和柏林的孩子穿一样的T恤。他们称之为文化流失，这话有几分道理。一个失去了自己的面包、自己的歌、自己口音的村庄，确实失去了金钱买不回来的东西。\n\n然而全球化不只是破坏者，它也是一台升降机。五十年前，穷国的一个农民只能把作物卖给路边的集市。今天，通过港口和集装箱，同一份收成可以抵达三个大洋之外的商店。寄回来的钱，可以付孩子的校服、不漏雨的屋顶、巷口的诊所。用经济学家能计量的数字看，几乎每一个向贸易开放的地区，贫困都下降了。假装这一切毫无意义，那才是不诚实。\n\n真正诚实的争论，比口号更难。问题不在于全球化是好是坏，而在于它的代价如何分担。自由市场的利润是真实的，但它没有均匀地分配。工厂迁到海外的工人、打不过网店的小店主、河流被远方工厂污染的渔民——这些人付出了全球数字从未提及的代价。一个公平的全球体系，应当让受益者通过再培训、养老金和约束最差工厂的规则，来帮助受损者。\n\n全球化不会因为一堵墙或一次演讲就被推翻。说到底，选择在于：一个只服务少数人的体系，和一个尽力托举尽可能多人的体系。这个选择是政治的，也是我们自己的。",
    questions: [
      {
        questionType: "词义猜测题",
        question: "The word \"slogans\" in \"The honest argument is harder than slogans\" probably means ____.",
        options: [
          "short simple phrases used to influence opinion",
          "long and detailed scientific research reports",
          "ancient folk songs sung in remote villages",
          "official names given to world cities"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：The honest argument is harder than slogans. The question is not whether globalisation is good or evil...",
          correctReason: "与'真正诚实的争论'对比的，是简单喊'好或坏'的口号式说法，slogans意为口号，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：科学报告详尽，与'short simple'相反。",
          wrongC: "无据：与民歌无关。",
          wrongD: "无据：与城市名称无关。",
          errorType: "单词问题：考生须抓住'harder than'对比'好或坏'的简单站队。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 2, how has trade helped farmers in poor countries?",
        options: [
          "It has lowered the price of local bread in their villages",
          "It has closed the local market down the road to protect them",
          "It allows their harvest to be sold in distant shops overseas",
          "It has given every farmer a free school uniform"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：through ports and containers, the same harvest can reach a shop three oceans away.",
          correctReason: "贸易让收成跨越三大洋卖到远方商店，C正确。",
          wrongA: "无据：原文未说降低面包价格。",
          wrongB: "相反：不是关闭本地集市，而是把市场扩展到海外。",
          wrongC: "（本题C为正确答案）",
          wrongD: "偷换概念：寄回的钱可以付校服钱，并非贸易直接免费发校服。",
          errorType: "细节偷换：考生须区分'钱可付校服'与'免费校服'。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing Paragraph 3?",
        options: [
          "To prove that globalisation is entirely evil",
          "To argue that the costs of globalisation should be fairly shared",
          "To describe how a factory worker learns a new trade",
          "To praise the profits of free markets"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：The question is not whether globalisation is good or evil, but how its costs are shared... the winners help pay for the losers.",
          correctReason: "第3段核心主张是'代价如何分担'，让受益者补偿受损者，B正确。",
          wrongA: "相反：作者反对简单的善恶判断。",
          wrongB: "（本题B为正确答案）",
          wrongC: "细节干扰：再培训只是举例，不是段落目的。",
          wrongD: "片面：承认利润真实，但主旨是分担代价而非赞美利润。",
          errorType: "目的误判：考生须抓住'but how its costs are shared'这一主张。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the author's view of globalisation?",
        options: [
          "It should be stopped immediately by raising walls",
          "It is a complete success with no disadvantages at all",
          "It benefits only factory workers in rich countries",
          "It brings real gains but needs fair sharing of its costs"
        ],
        correct: 3,
        explanation: {
          location: "全文：第2段讲脱贫收益，第3段讲代价分担，末段选'try to lift as many as it can'。",
          correctReason: "作者既承认脱贫收益，又要求公平分担代价，D完整推出。",
          wrongA: "相反：末段说墙挡不住全球化。",
          wrongB: "极端：作者明确指出受损者存在。",
          wrongC: "无据：全球化也惠及穷国农民，并非只富国企工人。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度极端化：考生须避免把作者立场推到'全好'或'全坏'。"
        }
      }
    ]
  },

  {
    id: "r046",
    title: "The Quiet Leader",
    type: "成考标准",
    level: "D",
    category: "领导力",
    wordCount: 329,
    text: "The word \"leader\" usually brings to mind a tall figure at the front of a room, voice raised, pointing at a screen. Yet studies of real workplaces show that the most effective leaders are often not the loudest people in the room. They are the ones who speak last, who ask questions instead of giving orders, and who make the shyest member of the team feel that an idea has been heard. Authority, in other words, is not the same as leadership.\n\nA leader's first job is to create a situation in which other people can do their best. This sounds simple and is in fact hard. It means controlling the wish to be the cleverest person in the meeting. When a new plan is proposed by a junior worker, a weak leader hears a threat; a strong leader hears a gift and asks how it can be improved. Teams where leaders interrupt and judge early become silent. Teams where leaders listen carefully become creative, because people no longer fear that their thought will be laughed at.\n\nThe second job of a leader is to take responsibility when things go wrong. In weak teams, the blame moves downward: the manager blames the supervisor, the supervisor blames the worker. In strong teams, the leader stands up and says, \"This was my decision, and I will fix it.\" This single sentence does more for loyalty than any bonus. People will forgive a mistake; they will not forgive a leader who disappears when the mistake is discovered.\n\nNone of this means that a leader should be soft or always agreeable. Decisions still have to be made, and sometimes those decisions will make people unhappy. But a good leader earns the right to be obeyed in the same way a good doctor earns the right to be trusted: by showing, over time, that the patient comes first. In the end, people do not follow a title. They follow a person they believe will protect them, listen to them, and carry the load when it gets heavy.",
    translation: "'领导'这个词，通常让人想起一个高个子站在房间前头，提高嗓门，指着屏幕。然而对真实职场的研究表明，最有成效的领导往往不是屋里嗓门最大的人。他们是最后一个开口的人，是提问而非下命令的人，是让团队里最害羞的成员也觉得自己的想法被听到了的人。换句话说，职权不等于领导力。\n\n领导的第一项工作，是创造一个让其他人能发挥最佳水平的环境。这听起来简单，其实很难。它意味着克制住'在会上做最聪明的人'的冲动。当一个基层员工提出新方案时，软弱的领导听到的是威胁；强大的领导听到的是礼物，并追问它如何能改进。领导爱打断、爱早下判断的团队会变得沉默；领导认真倾听的团队会变得有创造力，因为人们不再担心自己的想法被嘲笑。\n\n领导的第二项工作，是在出问题时承担责任。在软弱的团队里，责任向下传递：经理怪主管，主管怪工人。在强大的团队里，领导站出来说：'这是我的决定，我来解决。'这一句话对忠诚的作用，胜过任何奖金。人们会原谅错误；但不会原谅一个在错误被发现时消失不见的领导。\n\n这一切并不意味着领导应该软弱，或一味顺从。决定仍然要做，而有些决定难免让人不快。但好领导赢得被服从的权利，就像好医生赢得被信任的权利一样：靠长期让人看到病人放在第一位。说到底，人们追随的不是头衔，而是一个他们相信会保护自己、倾听自己、并在担子变重时一起扛的人。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, effective leaders are often those who ____.",
        options: [
          "raise their voices and give orders in meetings",
          "speak last and listen to quieter team members",
          "interrupt junior workers to show their power",
          "depend entirely on their official title for respect"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：They are the ones who speak last... make the shyest member of the team feel that an idea has been heard.",
          correctReason: "高效领导最后发言、提问而非命令、让害羞者被听见，B正确。",
          wrongA: "相反：他们不是嗓门最大的人。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：爱打断的领导让团队沉默。",
          wrongD: "相反：末段说人们追随的不是头衔。",
          errorType: "细节误读：考生须抓住speak last和shyest member。"
        }
      },
      {
        questionType: "推理题",
        question: "Why do some teams become silent according to Paragraph 2?",
        options: [
          "Because leaders interrupt and judge ideas early, so people fear speaking",
          "Because the workers simply have no ideas at all",
          "Because the meetings are held in a foreign language",
          "Because the bonus system rewards staying quiet"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：Teams where leaders interrupt and judge early become silent... people no longer fear that their thought will be laughed at.",
          correctReason: "领导早打断、早评判，人们怕被嘲笑便不敢发言，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：另一类团队同样的人变得有创造力，说明不是没有想法。",
          wrongC: "无据：与语言无关。",
          wrongD: "无据：奖金在第3段，且未说奖励沉默。",
          errorType: "因果误判：考生须区分'被打断'与'没想法'。"
        }
      },
      {
        questionType: "指代题",
        question: "The phrase \"This single sentence\" in Paragraph 3 refers to \"____\".",
        options: [
          "\"You are all doing a great job this year.\"",
          "\"I will give everyone a bigger bonus this year.\"",
          "\"The fault lies with the worker, not with me.\"",
          "\"This was my decision, and I will fix it.\""
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：the leader stands up and says, \"This was my decision, and I will fix it.\" This single sentence does more for loyalty...",
          correctReason: "This single sentence紧接引述的承担责任那句话，D正确。",
          wrongA: "无据：原文未出现此类表扬。",
          wrongB: "相反：原文说这句话胜过奖金，并非奖金句本身。",
          wrongC: "相反：这正是软弱团队向下推诿的做法。",
          wrongD: "（本题D为正确答案）",
          errorType: "指代错误：考生须就近向上找直接引语。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "A leader should always agree with every team member",
          "A loud voice is the key to successful leadership",
          "True leadership means listening, taking responsibility, and earning trust",
          "Leaders must blame workers when projects go wrong"
        ],
        correct: 2,
        explanation: {
          location: "全文：第1段职权≠领导力，第2段倾听，第3段担责，第4段赢得信任。",
          correctReason: "文章三段分别讲倾听、担责、赢得信任，C完整概括。",
          wrongA: "相反：末段说领导仍须做让人不快的决定。",
          wrongB: "相反：开篇即否定嗓门最大者。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第3段批评向下推诿责任。",
          errorType: "主旨概括：考生须综合三段，不能只取一段。"
        }
      }
    ]
  },

  {
    id: "r047",
    title: "Why Learning Should Never End",
    type: "成考标准",
    level: "D",
    category: "终身学习",
    wordCount: 325,
    text: "When people leave school, many believe that the long process of learning is finally over. The certificate is on the wall, the textbooks are thrown away, and the brain can now rest. This belief is one of the most expensive mistakes a worker can make. In an economy where a skill can become outdated in five years, the person who stops learning at twenty-five is, in effect, agreeing to fall behind.\n\nLifelong learning does not mean that every adult should go back to university and study for another degree. It means something smaller, and more useful: keeping the habit of curiosity alive. It can be a ten-minute podcast during the commute, an online course after dinner, or simply asking an older colleague to explain how the machine really works. What matters is not the paper at the end, but the fact that the brain is being asked, again and again, to understand something it did not understand yesterday.\n\nThe benefits go beyond the workplace. Studies of healthy ageing have repeatedly shown that older people who keep solving problems, learning new languages, or taking up an instrument tend to keep their memories longer and report higher satisfaction with life. The brain, it turns out, behaves like a muscle: those who use it stay stronger, while those who rest it gradually lose what they had. This is not a rule that guarantees health, but it is a habit that pays off in almost every direction.\n\nThe real challenge is motivation. It is easy to read a bestseller or watch a video. It is harder to sit down with a difficult subject, make mistakes, and feel foolish. Adults often give up because they measure themselves against experts. But lifelong learning is not a race. A person who can read one page of a hard book in January, and two pages by June, is quietly winning. The question is not \"Am I smart enough?\" The question is \"What do I want to understand next?\"",
    translation: "毕业离校时，许多人以为漫长的学习过程终于结束了。证书挂在墙上，课本被扔掉，大脑终于可以休息。这种想法是一个工作者所能犯的代价最高的错误之一。在一项技能五年内就可能过时的经济里，二十五岁就停止学习的人，实际上是在同意自己落后。\n\n终身学习并不意味着每个成年人都该回到大学再读一个学位。它意味着一件更小、也更有用的事：让好奇的习惯活下去。它可以是通勤时听的十分钟播客，晚饭后的一门网课，或者只是请一位年长的同事解释机器到底怎么运转。重要的不是最后那张纸，而是大脑被一次又一次地要求去理解昨天还不懂的东西。\n\n这些好处不止于职场。关于健康老龄化的研究一再表明，持续解难题、学新语言或学乐器的老年人，往往记忆力保持得更久，对生活的满意度也更高。事实证明，大脑就像肌肉：用它的人保持强壮，闲置它的人则逐渐失去原有的能力。这并非保证健康的定律，但它是一个几乎在各方面都有回报的习惯。\n\n真正的挑战是动力。读一本畅销书、看一段视频很容易。难的是坐下来啃一个难懂的科目，犯错误，感到自己很笨。成年人常放弃，是因为拿专家来衡量自己。但终身学习不是赛跑。一个人一月能读一页难书，到六月能读两页，就是在悄悄赢。问题不是'我够聪明吗？'，而是'接下来我想弄懂什么？'",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what is lifelong learning mainly about?",
        options: [
          "Returning to university for another full degree",
          "Reading bestsellers only for entertainment",
          "Keeping curiosity alive through small regular efforts",
          "Throwing away textbooks after graduation"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：It means something smaller... keeping the habit of curiosity alive.",
          correctReason: "终身学习是保持好奇的小习惯（播客、网课、请教同事），C正确。",
          wrongA: "相反：第2段首句说不必再读学位。",
          wrongB: "片面：畅销书只是末段反衬'容易'的例子，并非主旨。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：扔课本是被批评的错误观念。",
          errorType: "细节误读：考生须抓住'smaller and more useful'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"outdated\" in \"a skill can become outdated in five years\" probably means ____.",
        options: [
          "very modern and up to date",
          "no longer useful because it is out of date",
          "sold at a very high market price",
          "kept secret from other workers"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：a skill can become outdated in five years... agreeing to fall behind.",
          correctReason: "技能五年后让人'落后'，说明它因过时而不再有用，outdated意为过时的，B正确。",
          wrongA: "相反：modern与outdated意思相反。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：与售价无关。",
          wrongD: "无据：与保密无关。",
          errorType: "单词问题：考生须由'fall behind'反推词义。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the brain from the ageing studies in Paragraph 3?",
        options: [
          "It stays stronger when kept active, much like a muscle",
          "It naturally weakens at a fixed age no matter what",
          "It can only learn new languages after the age of sixty",
          "It simply stops working once people retire"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：The brain... behaves like a muscle: those who use it stay stronger...",
          correctReason: "大脑像肌肉，常用则强，A正确推出。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：研究反驳了'到固定年龄自然衰退'的宿命论。",
          wrongC: "无据：未说六十岁后才学语言。",
          wrongD: "相反：退休老人持续用脑者记忆更好。",
          errorType: "推理极端化：考生须避免把比喻推成'只要用脑就一定健康'。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward adult lifelong learning?",
        options: [
          "Doubtful, believing it may already be too late",
          "Critical of adults who take online courses",
          "Indifferent, treating it as a purely personal choice",
          "Encouraging, viewing it as a habit worth keeping"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：A person who can read one page... is quietly winning. The question is 'What do I want to understand next?'",
          correctReason: "作者鼓励每天进步一点、不问聪不聪明，态度是鼓励的，D正确。",
          wrongA: "相反：文章开头即说现在开始正是时候。",
          wrongB: "相反：网课是第2段肯定的例子。",
          wrongC: "相反：作者态度鲜明，并非冷漠。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度误判：考生须读出末段'quietly winning'的鼓励语气。"
        }
      }
    ]
  },

  {
    id: "r048",
    title: "The Freedom and the Fear of Freelance Work",
    type: "成考标准",
    level: "D",
    category: "自由职业",
    wordCount: 328,
    text: "A generation ago, a career was imagined as a ladder. You joined a company, climbed step by step, and the company looked after your health insurance, your pension, and your retirement dinner. That ladder still exists for some, but for a fast-growing number of workers it has been replaced by something more like a pool. A freelancer swims between projects, clients, and months, with no fixed route and no guaranteed shore. The freedom is real, and so is the anxiety.\n\nThe advantages are the reason many choose this life. You can work from a balcony, set your own hours, and take three months off in winter if your clients agree. Nobody breathes over your shoulder to check that you arrived at nine. For creative workers, programmers, translators, and designers, this independence can produce the best work of their lives, because they choose projects that interest them instead of completing tasks they were assigned. Surveys of freelancers usually show high levels of satisfaction with the variety of their days.\n\nThe disadvantages, however, are not romantic. Income jumps from month to month, and the work that fills June may disappear in July. No employer pays your social insurance while you lie sick. A holiday must be earned twice: once doing the work that pays for it, and again worrying about the clients who may leave you while you are gone. Many freelancers describe the loneliness as the hardest part. There is no team lunch, no colleague to complain to, and no one who asks whether you are feeling well.\n\nThe best freelancers are those who plan as seriously as a company. They set aside money for quiet months. They say no to clients who do not pay on time. They build a small network of peers to share work and, just as importantly, to share a coffee. The pool can be a wonderful place to swim. But only if you remember that the water has no edge, and that you must learn to float.",
    translation: "上一代人想象中的职业是一架梯子。你加入一家公司，一级一级往上爬，公司照料你的医保、养老金和退休晚宴。这架梯子对某些人依然存在，但对越来越多的工作者来说，它已被更像一个水池的东西取代。自由职业者在项目、客户和月份之间游动，没有固定路线，也没有靠岸的保证。自由是真实的，焦虑也是。\n\n好处正是许多人选择这种生活的原因。你可以在阳台上办公，自己定时间，只要客户同意，冬天还能连休三个月。没有人趴在你身后盯着你是不是九点到岗。对创意工作者、程序员、翻译和设计师来说，这种独立能让他们做出一生中最好的作品，因为他们选自己感兴趣的项目，而不是完成派下来的任务。对自由职业者的调查通常显示，他们对日子的丰富多样满意度很高。\n\n然而坏处并不浪漫。收入月月起伏，六月排满的活七月可能就没了。你生病躺着时，没有雇主替你交社保。一个假期要挣两次：先做挣钱的活，再担心你不在时客户会不会走。许多自由职业者说，孤独才是最难的部分。没有团队午餐，没有可抱怨的同事，也没人问你身体好不好。\n\n最出色的自由职业者，是那些像经营公司一样认真规划的人。他们为清闲的月份存钱。他们对不按时付款的客户说不。他们建立一小圈同行网络，既分享工作，也同样重要地，分享一杯咖啡。水池可以是个游泳的好地方。但前提是你记得水没有边，你得学会自己浮起来。",
    questions: [
      {
        questionType: "信息定位题",
        question: "According to the passage, how is a freelancer's career described?",
        options: [
          "As a ladder with clear steps upward in one company",
          "As a fixed route ending at a guaranteed retirement dinner",
          "As a paid position with full social insurance",
          "As a pool: free-moving but with no fixed edge or guarantee"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：it has been replaced by something more like a pool... no fixed route and no guaranteed shore.",
          correctReason: "作者把自由职业比作水池：自由游动但无边无际、无靠岸保证，D正确。",
          wrongA: "相反：梯子是上一代'公司雇员'的比喻，已被取代。",
          wrongB: "相反：退休晚宴是旧模式，自由职业没有保障。",
          wrongC: "相反：第3段说生病时没人替你交社保。",
          wrongD: "（本题D为正确答案）",
          errorType: "比喻定位：考生须区分ladder与pool两个比喻。"
        }
      },
      {
        questionType: "细节题",
        question: "Why do surveys show high satisfaction among many freelancers?",
        options: [
          "Because they never need to work during the summer",
          "Because their income is perfectly steady every month",
          "Because they enjoy choosing varied projects and flexible hours",
          "Because a colleague always checks on their health"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：they choose projects that interest them... high levels of satisfaction with the variety of their days.",
          correctReason: "自选有趣项目、时间灵活、日子多样，故满意度高，C正确。",
          wrongA: "无据：原文只说冬天可休假三月，并非夏天不工作。",
          wrongB: "相反：第3段说收入月月起伏。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第3段说没人问你身体好不好。",
          errorType: "细节交叉：考生须区分第2段好处与第3段坏处。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about freelancers who say \"no\" to late-paying clients?",
        options: [
          "They are being rude and will lose all their work",
          "They are protecting their own financial stability",
          "They prefer to work only for huge famous companies",
          "They have no other clients to rely on"
        ],
        correct: 1,
        explanation: {
          location: "原文末段：They say no to clients who do not pay on time... plan as seriously as a company.",
          correctReason: "认真规划者拒绝拖欠款客户，是为保障自身财务稳定，B正确。",
          wrongA: "过度推断：说不并非粗鲁，原文未说会失去所有工作。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文未说只接大公司。",
          wrongD: "相反：他们还建了同行网络分享工作，并非孤立无援。",
          errorType: "推理过度：考生须体会'认真规划'的积极含义。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of the passage?",
        options: [
          "Freelancing offers real freedom but requires careful self-management",
          "Freelancing is always a poor choice compared with a stable job",
          "Companies should pay social insurance for freelancers",
          "Creative workers should never work for a company again"
        ],
        correct: 0,
        explanation: {
          location: "全文：第1段自由与焦虑并存，第2段自由的好处，第3段现实困难，末段需像公司一样规划。",
          correctReason: "文章既讲自由职业的真实自由，又强调必须认真自我管理，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "极端：作者客观描述两面，并未否定自由职业。",
          wrongC: "无据：文章主张自我管理，未要求公司代交社保。",
          wrongD: "极端：作者未说再也不该进公司。",
          errorType: "主旨偏颇：考生须避免因第3段困难而选B。"
        }
      }
    ]
  },

  {
    id: "r049",
    title: "The Promise of a Pension",
    type: "成考标准",
    level: "D",
    category: "养老金",
    wordCount: 336,
    text: "When a young person starts their first job, the idea of a pension feels like a distant, even boring, subject. Sixty-five seems unimaginably far away, and there are rent bills, train tickets, and phone bills to worry about now. Yet the money set aside each month is one of the most important habits a worker can build. Pensions are not a tax; they are the promise that a person who has worked for forty years will not have to beg on the street at seventy.\n\nThe promise is under pressure. Across the developed world, families have fewer children, people live longer, and the number of retired people grows faster than the number of workers who support them. In simple terms, fewer working hands must carry more older bodies. Politicians have delayed the hard choices for decades, because raising the retirement age or cutting benefits makes voters angry. But the maths will not wait for an election. Either contributions rise, or benefits fall, or people work a few years longer. No plan that avoids all three for long can survive.\n\nThe problem is not only about numbers, but about dignity. A pension that barely covers food leaves an older person dependent on their children, on charity, or on medicine they cannot afford. Surveys consistently show that the fear of being poor in old age is one of the deepest worries of working people, even those who earn well. This fear shapes decisions long before retirement: where to live, what job to take, whether to start a family. A pension system that people trust therefore does more than pay money; it gives them the confidence to plan a whole life.\n\nFor the young, the practical advice is simple and slightly unwelcome: start now. A small amount saved in the twenties grows over decades far more than a large amount saved in the fifties, simply because of time. The system will change many times before any of us retires. But the habit of setting something aside, early and regularly, will still be the one habit that no reform can take away.",
    translation: "年轻人刚参加第一份工作时，养老金这个话题感觉遥远，甚至乏味。六十五岁似乎远得难以想象，眼下要愁的是房租、火车票和话费。然而每个月存下的那笔钱，是一个工作者能养成的最重要的习惯之一。养老金不是税；它是一个承诺：一个工作了四十年的人，到七十岁不必上街乞讨。\n\n这个承诺正承受压力。在发达国家，家庭孩子更少，人活得更长，退休人数增长得比供养他们的劳动者人数更快。简单说，就是更少的劳动之手要扛更多的年迈之躯。政客们把艰难抉择拖延了几十年，因为提高退休年龄或削减福利都会惹选民生气。但数学不会等到选举。要么缴费增加，要么福利下降，要么人们多工作几年。任何长期回避这三条的方案都撑不下去。\n\n问题不只是数字，还有尊严。一份刚够吃饭的养老金，会让老人依赖子女、依赖慈善，或买不起药。调查一致显示，对老来受穷的恐惧，是工作者最深的忧虑之一，即便收入不错的人也不例外。这种恐惧早在退休前就影响着种种决定：住在哪里、做什么工作、要不要成家。因此，一套人们信任的养老金制度，不只是发钱，它还给予人们规划整个人生的信心。\n\n对年轻人来说，实用的建议简单而略带刺耳：现在就开始。二十多岁存下的一小笔钱，几十年下来会比五十多岁才存的一大笔涨得多得多，仅仅因为时间。在我们任何人退休之前，这套制度还会改很多次。但早早、规律地存下一点这个习惯，仍将是任何改革都夺不走的那一个习惯。",
    questions: [
      {
        questionType: "词义猜测题",
        question: "The word \"dignity\" in Paragraph 3 probably means ____.",
        options: [
          "the sense of being respected and able to live independently",
          "the total amount spent on medicine each year",
          "the speed at which a population grows older",
          "the political power held by retired voters"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：The problem is not only about numbers, but about dignity... leaves an older person dependent...",
          correctReason: "养老金不够会让人依赖子女、买不起药，失去的正是被尊重、独立生活的尊严，dignity意为尊严，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "片面：医药费只是依赖的表现之一，不是dignity本身。",
          wrongC: "无据：与人口老龄化速度无关。",
          wrongD: "无据：与退休选民政治权力无关。",
          errorType: "单词问题：考生须由'dependent'反推dignity=独立自尊。"
        }
      },
      {
        questionType: "细节题",
        question: "Why has the pension promise come under pressure, according to Paragraph 2?",
        options: [
          "Because people now retire much earlier than they want to",
          "Because there are fewer workers supporting more retirees",
          "Because governments have printed too much paper money",
          "Because young workers refuse to work at all"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：fewer working hands must carry more older bodies.",
          correctReason: "孩子少、寿命长，退休者增速快于劳动者，故供款压力大，B正确。",
          wrongA: "无据：原文说政客考虑推迟退休年龄，并非人们想更早退休。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：文章未提印钞。",
          wrongD: "无据：年轻人只是不重视养老，并非拒绝工作。",
          errorType: "细节定位：考生须抓住'fewer hands carry more bodies'。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the function of the last paragraph?",
        options: [
          "To complain that the pension system is completely broken",
          "To describe the history of the retirement age worldwide",
          "To list the medicines that older people cannot afford",
          "To give young workers practical advice about saving early"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：For the young, the practical advice is simple... start now.",
          correctReason: "末段直接给年轻人'现在就开始存'的实用建议，D正确。",
          wrongA: "片面：制度会变，但并非完全崩坏，作者还给出可行做法。",
          wrongB: "无据：未讲退休年龄历史。",
          wrongC: "细节错位：这是第3段内容，非末段。",
          wrongD: "（本题D为正确答案）",
          errorType: "段落功能误判：考生须区分问题陈述与行动建议。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about saving money in your twenties?",
        options: [
          "It has no real effect compared with saving later",
          "It is impossible because young people earn nothing",
          "Time makes early savings grow much more than later savings",
          "It is a habit that future reforms will remove"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：A small amount saved in the twenties grows over decades far more than a large amount saved in the fifties, simply because of time.",
          correctReason: "因时间复利，二十多岁存小钱胜过五十多岁存大钱，C正确推出。",
          wrongA: "相反：原文强调早存效果远好。",
          wrongB: "无据：原文未说年轻人赚不到钱。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：末段说这个习惯改革夺不走。",
          errorType: "推理反向：考生须抓住'simply because of time'。"
        }
      }
    ]
  },

  {
    id: "r050",
    title: "Four Bins Under the Kitchen Sink",
    type: "成考标准",
    level: "D",
    category: "垃圾分类",
    wordCount: 324,
    text: "In a city kitchen, the rubbish bin used to be one object, hidden under the sink. Now, in a growing number of neighbourhoods, it has become four: one for food waste, one for paper and plastic, one for dangerous things like batteries, and one for everything else. The change is small in shape but large in meaning. It asks every citizen to think, twice a day, about where their coffee cup and banana peel actually go.\n\nCities introduced these rules for reasons that are rarely sentimental. Landfill space is running out, and burying plastic that takes four hundred years to break down is no longer acceptable. Burning the wrong waste, such as batteries or chemicals, can send poisonous smoke into the air of surrounding streets. Separating waste at home is simply the cheapest way to handle a problem that will only get worse as cities grow. A city that does not sort its rubbish now will spend far more cleaning up later.\n\nYet the policy works only when people actually follow it. In practice, the first year is usually messy. Residents throw a yogurt pot into the wrong bag because they are tired after work. Buildings place the four bins too far from the lift. The rules themselves differ from one district to the next, which makes an honest effort feel like a guessing game. Officials who introduce the system by shouting fines before explaining the reason quickly lose the trust they need. Success comes from signs in the lift, from schools teaching children, and from neighbours who remind each other with a smile.\n\nWaste sorting, in the end, is a small act with a large lesson. It shows that a clean city is not produced by engineers alone. It is produced by millions of ordinary decisions, repeated every morning and evening. That sounds like a burden. But it can also feel like belonging: the place where you live asks something of you, and you give it, without being asked twice.",
    translation: "在城市的厨房里，垃圾桶曾经只是水槽下的一样东西。如今，在越来越多的小区里，它变成了四个：一个装厨余，一个装纸和塑料，一个装电池之类的危险物，一个装其他所有东西。这个变化外形很小，意义却很大。它要求每位市民每天两次去想，自己的咖啡杯和香蕉皮究竟去了哪里。\n\n城市推出这些规定，很少出于多愁善感的理由。填埋场空间快用完了，把需要四百年才能分解的塑料埋进地下，已经不再可接受。烧错垃圾，比如电池或化学品，会把有毒烟气送进周围街道的空气里。在家里把垃圾分类，只是处理一个随着城市扩张只会越来越糟的问题的最省钱办法。现在不分垃圾的城市，将来要花多得多的钱去清理。\n\n然而，政策只有在人们真的照做时才有效。实际情况是，头一年通常一团糟。居民下班后太累，把酸奶盒扔错了袋子。楼里把四个桶放得离电梯太远。规则本身又因区而异，让人认真做也像在猜谜。官员若先喊罚款、不解释原因，很快就会失去所需的信任。成功来自电梯里的告示、来自学校教孩子、来自邻居微笑着互相提醒。\n\n说到底，垃圾分类是一个小动作，却带着一堂大课。它表明，一座干净的城市不是工程师单独造出来的，而是由千百万个平凡的决定、每天早晚重复而成。这听起来像负担。但它也可以让人有归属感：你住的地方向你索取一点，而你无需被提醒第二遍就给了。",
    questions: [
      {
        questionType: "细节题",
        question: "Why do cities introduce waste-sorting rules, according to Paragraph 2?",
        options: [
          "Because residents asked for more colourful bins",
          "Because landfill space is limited and burning wrong waste is harmful",
          "Because four bins take up less space than one",
          "Because food waste can be sold as animal feed"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Landfill space is running out... Burning the wrong waste... can send poisonous smoke into the air.",
          correctReason: "填埋场将满、烧错垃圾产毒烟，故推行分类，B正确。",
          wrongA: "无据：与桶的颜色无关。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：四个桶更占地方，原文未说更省空间。",
          wrongD: "无据：文章未提厨余作饲料出售。",
          errorType: "细节定位：考生须抓住landfill和poisonous smoke两点。"
        }
      },
      {
        questionType: "推理题",
        question: "Why does the first year of a new sorting system usually become messy?",
        options: [
          "Because all residents refuse to cooperate on principle",
          "Because the rubbish bins are too cheap to last",
          "Because rules are unclear and people are tired, so mistakes happen easily",
          "Because children are forbidden from learning about waste"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：tired after work... rules themselves differ... feel like a guessing game.",
          correctReason: "累、规则各区不同像猜谜，故易出错，C正确推出。",
          wrongA: "绝对化：原文说的是失误，并非所有人原则上拒绝。",
          wrongB: "无据：未说桶质量差。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第3段说学校教孩子正是成功之道。",
          errorType: "推理极端化：考生须区分'易出错'与'拒绝合作'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"sentimental\" in \"reasons that are rarely sentimental\" probably means ____.",
        options: [
          "based on emotion rather than practical reasons",
          "extremely expensive and wasteful",
          "written in an official foreign language",
          "related to long-distance overseas travel"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：Cities introduced these rules for reasons that are rarely sentimental. Landfill space is running out...",
          correctReason: "后文给出的都是填埋将满、有毒烟气等现实理由，说明出台规定并非出于感情用事，sentimental意为多愁善感的，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：与花钱多少无关。",
          wrongC: "无据：与官方语言无关。",
          wrongD: "无据：与跨国旅行无关。",
          errorType: "单词问题：考生须用后文现实理由反推词义。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To demand heavier fines for careless citizens",
          "To prove that waste sorting is impossible in big cities",
          "To describe the history of plastic over the last century",
          "To explain why sorting matters and how it can succeed with cooperation"
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段现象，第2段为何重要，第3段如何成功（告示、学校、邻里），末段归属感。",
          correctReason: "文章既解释垃圾分类的必要，又说明靠合作才能成功，D正确。",
          wrongA: "相反：第3段批评先喊罚款的做法。",
          wrongB: "相反：末段说垃圾分类可以做到。",
          wrongC: "无据：塑料四百年分解只是举例，并非讲塑料史。",
          wrongD: "（本题D为正确答案）",
          errorType: "目的误判：考生须兼顾'为何重要'与'如何成功'。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_5 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_5 = READING_BATCH_5;
}
