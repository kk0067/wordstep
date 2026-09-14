// 成人高考专升本英语阅读题库 第三批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一、二批不重复）：音乐、电影、阅读习惯、网络安全、时间管理、动物保护、太空探索、人工智能、传统节日、图书馆
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_3 = [
  {
    id: "r021",
    title: "Why Music Matters More Than You Think",
    type: "成考标准",
    level: "D",
    category: "音乐",
    wordCount: 278,
    text: "Most people listen to music every day without really thinking about it. It plays in cafes, in lifts, and through the earphones of passengers on the morning bus. Yet music is far more than a pleasant background sound. Researchers have found that it affects the body and the mind in ways that speech alone cannot.\n\nWhen a familiar song begins, people often respond before they are fully aware of it. Their heart rate changes, their foot starts tapping, and old memories may suddenly return. This is why music is widely used with patients who suffer from serious memory loss. Even when they cannot recognise their own children, some of them can still sing the songs they learned as teenagers. Doctors believe that music reaches parts of the brain that ordinary conversation cannot touch.\n\nMusic also has a powerful effect on groups. Soldiers have marched to drums for thousands of years, and workers once sang together to make heavy tasks feel lighter. In sports stadiums, a shared song can turn thousands of strangers into a single crowd. Scientists suggest that this power comes from rhythm: when many bodies move to the same beat, people feel connected.\n\nOf course, taste in music remains deeply personal. A piece that comforts one listener may annoy another. Still, almost everyone agrees that certain songs can change their mood in minutes. You do not need to be a musician to enjoy this benefit. Simply choosing the right record when you feel tired or anxious may be the cheapest medicine available. In a noisy world, music remains one of the few languages that every human being understands.",
    translation: "大多数人每天听音乐，却很少认真去想它。音乐在咖啡馆里、电梯中、在早班巴士乘客的耳机里播放着。然而，音乐远不止是悦耳的背景声。研究人员发现，它以言语本身无法做到的方式影响着身体和心灵。\n\n当一首熟悉的歌响起时，人们往往还没完全意识到，身体就已经做出了反应。心率发生变化，脚开始打拍子，旧日的记忆可能突然涌回。这就是为什么音乐被广泛用于患有严重记忆丧失的病人。即使他们认不出自己的孩子，其中一些人仍然能唱出十几岁时学过的歌。医生认为，音乐触达了普通谈话无法触及的大脑区域。\n\n音乐对群体也有强大的影响。几千年来，士兵随着鼓点行进，工人们曾经一起歌唱，让繁重的任务显得轻松些。在体育场里，一首共同的歌能把成千上万的陌生人变成一个整体人群。科学家认为，这种力量来自节奏：当许多身体跟随同一节拍运动时，人们会感到彼此相连。\n\n当然，音乐品味仍然非常个人化。一段让一位听者感到安慰的曲子，可能会惹恼另一个人。尽管如此，几乎所有人都同意，某些歌曲能在几分钟内改变情绪。你不需要成为音乐家就能享受这种益处。当你感到疲惫或焦虑时，选一张合适的唱片，也许是手头最便宜的良药。在一个嘈杂的世界里，音乐仍然是每个人都能理解的少数几种语言之一。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, why is music widely used with memory-loss patients?",
        options: [
          "It can reach parts of the brain that ordinary conversation cannot touch.",
          "It can completely cure serious memory diseases.",
          "It is cheaper than any other form of medicine.",
          "It helps patients recognise their own children quickly."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段最后一句：Doctors believe that music reaches parts of the brain that ordinary conversation cannot touch.",
          correctReason: "原文直接指出音乐能触及普通谈话无法触及的大脑区域，这是它被用于记忆丧失病人的原因，与A完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "过度推断：文章只说帮助唤起记忆，并未说能'完全治愈'疾病，completely过于绝对。",
          wrongC: "偷换概念：末段'最便宜的良药'是比喻，并非真的比较药价，且这不是用于病人的原因。",
          wrongD: "相反/偷换：原文说即使认不出孩子仍能唱歌，并非音乐帮他们认出孩子。",
          errorType: "定位错误：考生需定位第2段医生观点句，不能凭末段比喻误选C。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about rhythm from Paragraph 3?",
        options: [
          "It is mainly used to train soldiers in modern armies.",
          "It can make people who do not know each other feel connected.",
          "It has no effect on people living in cities.",
          "It was invented by sports fans in stadiums."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：when many bodies move to the same beat, people feel connected.",
          correctReason: "原文说明跟随同一节奏能让陌生人感到彼此相连，B选项准确概括。",
          wrongA: "以偏概全/过时：古代士兵随鼓点行进只是举例，不能推出现代军队靠节奏训练。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：节奏与是否住在城市无关。",
          wrongD: "相反/无依据：节奏已存在数千年，并非体育场球迷发明。",
          errorType: "推理错误：考生若只看stadium例子，容易把节奏的起源误当成球迷发明。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"taste\" in Paragraph 4 probably means ____.",
        options: [
          "the sense that allows you to know flavours",
          "a small amount of food you try before buying",
          "a personal preference for particular kinds of music",
          "the ability to sing in tune with others"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段第1句：Of course, taste in music remains deeply personal.",
          correctReason: "由'in music''个人化'可知taste此处指对音乐的个人喜好，C选项正确。",
          wrongA: "字面义干扰：这是taste的'味觉'本义，不符合此处语境。",
          wrongB: "字面义干扰：这是'品尝一小口'的意思，与音乐无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "词义错误：taste在这里不是'唱歌是否在调上'的能力。",
          errorType: "单词问题：考生若只记taste=味道，需根据'in music''个人化'语境推断出'喜好'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Everyone should learn to play a musical instrument.",
          "Classical music is the best treatment for serious illness.",
          "Loud music in stadiums should be reduced.",
          "Music influences both the individual mind and group connection."
        ],
        correct: 3,
        explanation: {
          location: "全文：第2段讲对个人大脑与记忆的影响，第3段讲对群体的联结作用。",
          correctReason: "文章既讲音乐对个人身心的作用，又讲它把群体联结在一起，D选项完整概括正反两面。",
          wrongA: "过度推断：文章说不必成为音乐家也能享受音乐，并未要求人人学乐器。",
          wrongB: "过度推断/绝对：文章未说古典音乐是最好疗法。",
          wrongC: "原文未提及：文章批评的不是体育场噪音。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生若只看第2段记忆病人，容易误选片面的B。"
        }
      }
    ]
  },

  {
    id: "r022",
    title: "Why Do We Still Go to the Cinema?",
    type: "成考标准",
    level: "D",
    category: "电影",
    wordCount: 282,
    text: "Now that most people can stream films at home on a television that hangs on the wall, some writers have been predicting the death of the cinema for years. According to them, paying for a ticket, buying overpriced popcorn, and sitting in the dark with strangers must soon seem absurd. Yet the cinema has not disappeared. In fact, when a popular film opens, the ticket offices are as busy as ever.\n\nPart of the explanation is technology. The cinema screen is still far larger than anything a family could fit into their living room, and the sound system shakes the walls in a way that home speakers cannot copy. Directors know this. They design certain scenes specifically for the big screen, where sweeping landscapes and roaring action can truly surround the audience. Watching such a film on a phone would feel like reading a postcard from a mountain instead of standing on it.\n\nBut technology is only half the answer. The other half is social. Going out to watch a film is an event. Friends arrive together, wait in line together, and talk about the ending over dinner afterwards. At home, by contrast, the same film can be paused, talked through, or abandoned halfway when someone remembers a text message. The cinema demands your full attention, and many people value this rare experience of complete focus.\n\nNone of this means that streaming is in danger. Both ways of watching will probably survive, because they satisfy different needs. A person may choose the cinema once a month for a shared occasion, yet stream quietly alone on an ordinary Tuesday evening. Far from being replaced, the cinema has become something closer to a special occasion — less frequent, but more meaningful.",
    translation: "如今大多数人都能在挂在墙上的电视上在家流媒体看电影，一些作家多年来一直预言电影院即将消亡。在他们看来，买票、买价格虚高的爆米花、和陌生人坐在黑暗里，这些事很快就会显得荒谬。然而电影院并没有消失。事实上，一部热门电影上映时，售票处依旧像往常一样繁忙。\n\n一部分解释在于技术。电影院的银幕仍然比任何家庭客厅里放得下的屏幕都大得多，音响系统以家用音箱无法复制的方式震动着墙壁。导演们清楚这一点。他们专门为大屏幕设计某些场景，让壮阔的风景和轰鸣的动作真正包围观众。在手机上看这样的电影，感觉就像读一张来自山上的明信片，而不是真正站在山上。\n\n但技术只是答案的一半，另一半是社交。出门看电影是一件'大事'。朋友们一起到达，一起排队，事后一起吃晚饭讨论结局。相比之下，在家里，同一部电影随时可以暂停、边看边聊，或者在某人想起一条短信时看到一半就放弃。电影院要求你全神贯注，许多人珍视这种难得的完全专注的体验。\n\n这一切并不意味着流媒体岌岌可危。两种观看方式很可能都会存续，因为它们满足不同的需求。一个人可能一个月去一次电影院，把它当作一次相聚的活动，却在普通的周二晚上独自安静地流媒体观影。电影院非但没有被取代，反而变得更像一个特殊的场合——频率更低，却更有意义。",
    questions: [
      {
        questionType: "细节题",
        question: "Why have some writers predicted the death of the cinema?",
        options: [
          "Because cinemas have raised their ticket prices to an impossible level.",
          "Because people can now watch films comfortably at home through streaming.",
          "Because most films are not worth watching any more.",
          "Because cinemas refused to show action movies."
        ],
        correct: 1,
        explanation: {
          location: "原文第1段第1句：Now that most people can stream films at home...",
          correctReason: "原文指出既然人们能在家流媒体看电影，一些作家便预言电影院会消亡，与B一致。",
          wrongA: "偷换/细节：'爆米花贵'只是附带提到，不是其预言的理由。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：文章没有说电影本身不值得看。",
          wrongD: "相反：第2段说导演专门为大屏幕设计动作场面。",
          errorType: "定位错误：考生需定位第1段streaming句，不能把'爆米花贵'误当主因。"
        }
      },
      {
        questionType: "指代题",
        question: "What does \"such a film\" in Paragraph 2 refer to?",
        options: [
          "A postcard bought during a journey.",
          "A message read on a mobile phone.",
          "A film designed with sweeping landscapes and big action scenes.",
          "A documentary about mountains."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：They design certain scenes specifically for the big screen, where sweeping landscapes and roaring action...",
          correctReason: "such a film承接上文，指那些为大屏幕设计的、有壮阔风景和大动作场面的电影，C正确。",
          wrongA: "比喻干扰：postcard是比喻，不是'电影'本身。",
          wrongB: "原文未提及：text message出现在第3段，与此处无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "范围缩小：山景只是举例，不专指纪录片。",
          errorType: "指代错误：考生需往前找such film所指代的'为大屏幕设计的场景'。"
        }
      },
      {
        questionType: "信息定位题",
        question: "According to Paragraph 3, how is watching at home different from watching in the cinema?",
        options: [
          "Home viewing is always more expensive than going out.",
          "Home viewing makes friends wait in longer lines.",
          "Home viewing is designed by famous directors.",
          "Home viewing is easier to interrupt because of texts or phone calls."
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：the same film can be paused... when someone remembers a text message.",
          correctReason: "原文指出在家看随时会因短信被打断，与D一致。",
          wrongA: "相反：家里看通常更便宜。",
          wrongB: "相反：排队是电影院的事。",
          wrongC: "偷换：导演为大屏幕设计，不是为家庭。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需在第3段找到paused/text message这一对比。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude towards the future of the cinema?",
        options: [
          "Objective: it will continue to exist alongside streaming.",
          "Doubtful: it will probably disappear within a few years.",
          "Critical: cinemas should lower their popcorn prices.",
          "Enthusiastic: everyone should go out to the cinema every night."
        ],
        correct: 0,
        explanation: {
          location: "原文最后一段：Both ways of watching will probably survive...",
          correctReason: "作者客观认为两种观影方式会并存，电影院会作为特殊场合存续，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：作者明确说电影院不会消失。",
          wrongC: "原文未提及：作者没有批评爆米花价格。",
          wrongD: "过度推断：作者说一个月一次即可，并非每晚都去。",
          errorType: "态度判断错误：考生需抓住最后一段'两种方式并存'的客观语气。"
        }
      }
    ]
  },

  {
    id: "r023",
    title: "The Lost Art of Deep Reading",
    type: "成考标准",
    level: "D",
    category: "阅读习惯",
    wordCount: 286,
    text: "A hundred years ago, reading was a slower and quieter activity. Families would spend long evenings with a single book, and the writer was expected to hold the reader's attention over many pages. Today, that kind of reading is becoming unusual. Instead of a novel, many people scroll through short messages, news headlines, and online posts during every free minute.\n\nResearchers who study attention have noticed a real difference. When people read a long article on paper, they tend to follow the writer's argument from beginning to end. When they read the same words on a screen, however, they often skim. Their eyes jump from heading to heading, and they may leave the page within a minute without understanding anything deeply. The problem is not that screens are harmful; it is that readers have learned to treat every screen page as something to be skipped through quickly.\n\nThis habit carries a cost. Deep reading — the slow, concentrated kind — is what allows us to follow a complex argument, to imagine characters' feelings, and to notice the subtle details that a writer hides between the lines. Such thinking cannot be rushed. If the brain gets used to constant quick changes, it may gradually lose the patience required for a single, difficult book.\n\nFortunately, the solution is simple. Readers do not have to throw away their phones. They only need to protect a small part of each day for uninterrupted reading — twenty minutes away from notifications, with a real book or a printed article. The goal is not to reject modern technology, but to give the mind a quiet period in which it can think deeply. In a world of endless scrolling, the ability to finish one long book has almost become a skill worth practising.",
    translation: "一百年前，阅读是一种更慢、更安静的活动。一家人会伴着一本书度过漫长的夜晚，而作者则要在许多页里始终抓住读者的注意力。如今，那种阅读正变得不常见。在每一个空闲的分钟里，许多人翻阅的不是小说，而是短消息、新闻标题和网络帖子。\n\n研究注意力的学者注意到一个真实的差别。当人们在纸上读一篇长文章时，往往会从头至尾跟着作者的思路走。然而，当他们在屏幕上读到同样的文字时，却常常略读。眼睛在一个标题又一个标题之间跳跃，他们可能不到一分钟就离开页面，什么也没有深入理解。问题不在于屏幕有害，而在于读者已经学会把每一个屏幕页面都当成要快速滑过的东西。\n\n这种习惯是有代价的。深度阅读——那种缓慢而专注的阅读——正是让我们跟上复杂论证、想象人物情感、注意到作者隐藏在字里行间的细微细节的方式。这样的思考无法仓促。如果大脑习惯了不断的快速切换，它可能会逐渐失去读一本有难度的书所需要的耐心。\n\n幸运的是，解决办法很简单。读者不必扔掉手机。他们只需要每天留出一小段时间不被打扰地阅读——二十分钟远离通知，捧一本真正的书或一篇打印好的文章。目标不是拒绝现代科技，而是给心灵一段可以深度思考的安静时光。在一个无尽滑动的世界里，读完一本长书的能力，几乎已经成了一项值得练习的技能。",
    questions: [
      {
        questionType: "细节题",
        question: "According to researchers, how do people usually read a long article on a screen?",
        options: [
          "They follow the writer's argument from start to finish.",
          "They read it more carefully than they read on paper.",
          "They skim it and jump between headings quickly.",
          "They always print it out before reading it."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：they often skim. Their eyes jump from heading to heading...",
          correctReason: "原文指出人们在屏幕上读长文章时往往略读、在标题间跳跃，与C一致。",
          wrongA: "偷换对象：这是'在纸上读'时的做法，不是屏幕上。",
          wrongB: "相反：屏幕上反而读得更粗略。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：没有说人们会打印出来。",
          errorType: "细节混淆：考生需区分on paper与on screen两种情形。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"subtle\" in Paragraph 3 probably means ____.",
        options: [
          "loud and easily noticed",
          "bright and colourful",
          "simple and repeated",
          "small and not easy to notice"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：notice the subtle details that a writer hides between the lines.",
          correctReason: "由'hides between the lines(隐藏在字里行间)'可知subtle指细微、不易察觉，D正确。",
          wrongA: "相反：subtle是隐蔽的，不是响亮易察觉。",
          wrongB: "无关词义：与色彩无关。",
          wrongC: "无关词义：不是'简单重复'。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生可由'隐藏在字里行间'推出'细微、不易察觉'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about deep reading from the passage?",
        options: [
          "It requires patience and cannot be done in a rush.",
          "It is only possible when reading novels.",
          "It makes the brain prefer quick changes.",
          "It is a habit that the modern world encourages."
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：Such thinking cannot be rushed.",
          correctReason: "原文说深度阅读这种思考无法仓促进行，可见它需要耐心，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "范围缩小：文章说复杂论证、人物感受都需要深读，不只限于小说。",
          wrongC: "相反：习惯快速切换会'失去'深读所需的耐心。",
          wrongD: "相反：现代社会的刷屏恰恰削弱了深读。",
          errorType: "推理错误：考生若把第3段反面表述当作正面结论，容易误选C。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To persuade readers to throw away all electronic devices.",
          "To advise readers to set aside quiet time for focused reading.",
          "To explain why paper books are more expensive than screens.",
          "To describe the history of newspapers over the last century."
        ],
        correct: 1,
        explanation: {
          location: "原文最后一段：protect a small part of each day for uninterrupted reading...",
          correctReason: "作者建议每天留出一小段不被打扰的时间专注阅读，B准确概括写作目的。",
          wrongA: "过度推断：作者明确说不必扔掉手机，只需留出时间。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：文章没有比较价格。",
          wrongD: "范围缩小/无关：一百年前只是背景，不是描述报纸史。",
          errorType: "目的判断错误：考生易把'不必扔手机'误读成'扔掉手机'而误选A。"
        }
      }
    ]
  },

  {
    id: "r024",
    title: "Staying Safe in the Digital World",
    type: "成考标准",
    level: "D",
    category: "网络安全",
    wordCount: 281,
    text: "Almost every adult now banks, shops, and talks to friends through a phone or a computer. This convenience is hard to give up, but it also means that personal information travels across networks every single day. Criminals know this, and they spend a great deal of effort trying to steal that information for their own profit.\n\nThe most common threat is not a mysterious hacker sitting in a dark room. It is usually much simpler. A person receives an email that looks as if it comes from their bank, asking them to confirm a password. If they click the link and type in their details, the criminals immediately have everything they need. These false messages are designed to look real, and even careful users can be fooled when they are tired or in a hurry.\n\nThere are, however, habits that sharply reduce the risk. The first rule is never to click a link in an unexpected message, no matter how official it appears. Instead, the user should open the bank's own app or website directly. The second rule is to use different passwords for different services. It may be convenient to remember one short word, but if that single word is stolen, every account is exposed at once. Finally, users should turn on the extra protection known as two-step verification, which requires a code sent to the phone in addition to the password.\n\nNone of these steps takes more than a few minutes, yet they block the vast majority of attacks. The real danger lies in the belief that \"it will never happen to me\". Online safety is not a product you buy once and forget. It is a habit you practise every day, and a little attention now can save a great deal of trouble later.",
    translation: "如今几乎每个成年人都通过手机或电脑办理银行业务、购物、和朋友聊天。这种便利很难割舍，但它也意味着个人信息每天都在网络间流转。罪犯深知这一点，他们花费大量精力试图窃取这些信息以谋取私利。\n\n最常见的威胁并不是坐在黑暗房间里的神秘黑客。它通常要简单得多。一个人收到一封看似来自银行的邮件，要求他确认密码。如果他点击链接并输入自己的详细信息，罪犯立刻就得到了他们所需要的一切。这些虚假消息被设计得十分逼真，即便是细心的用户，在疲惫或匆忙时也可能上当。\n\n然而，有一些习惯能大幅降低风险。第一条规则是：无论一条出乎意料的消息看起来多么正式，都绝不要点击其中的链接。相反，用户应该直接打开银行自己的应用程序或网站。第二条规则是为不同的服务使用不同的密码。记住一个短词也许很方便，但如果那个单词被盗，所有账户会立刻暴露在外。最后，用户应该开启被称为两步验证的额外保护，它除了密码之外，还要求输入发送到手机上的验证码。\n\n这些步骤花不了几分钟，却能挡住绝大多数攻击。真正的危险在于'这种事不会发生在我身上'的想法。网络安全不是你买一次就能一劳永逸的产品。它是你每天都要践行的习惯，现在稍加留意，日后就能省去一大堆麻烦。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what is the most common online threat?",
        options: [
          "A mysterious hacker living in a distant country.",
          "A virus that attacks the computer hardware.",
          "A friend who shares your password by accident.",
          "A false email that looks like it comes from your bank."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：The most common threat is not a mysterious hacker... It is usually much simpler.",
          correctReason: "原文说最常见威胁不是神秘黑客，而是看似来自银行的虚假邮件，D正确。",
          wrongA: "与原文相反：文章说最常见威胁'不是'神秘黑客。",
          wrongB: "原文未提及：未提到硬件病毒。",
          wrongC: "原文未提及：朋友泄露并非所指威胁。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需注意'not...It is usually'的转折，把真正的威胁找准。"
        }
      },
      {
        questionType: "推理题",
        question: "Why are careful users sometimes fooled by false messages?",
        options: [
          "Because they are tired or in a hurry and stop checking carefully.",
          "Because the messages are written by grammar experts.",
          "Because banks ask customers to check emails daily.",
          "Because phones automatically open all unknown links."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段最后一句：even careful users can be fooled when they are tired or in a hurry.",
          correctReason: "疲惫或匆忙时人们会放松检查，所以细心的用户也会上当，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没说骗子是语法专家。",
          wrongC: "无关：银行鼓励直接打开app，与此无关。",
          wrongD: "与事实/原文相反：手机不会自动打开未知链接。",
          errorType: "推理错误：考生需从'tired or in a hurry'推出放松了警惕。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"exposed\" in Paragraph 3 probably means ____.",
        options: [
          "protected from all danger",
          "put at risk of being attacked",
          "covered with a thick lock",
          "shared only with family"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：if that single word is stolen, every account is exposed at once.",
          correctReason: "密码被盗后账户会立刻暴露、面临风险，exposed意为'使暴露/处于危险'，B正确。",
          wrongA: "相反：exposed是暴露，不是受保护。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：exposed意味着不安全，不是上了锁。",
          wrongD: "相反/缩小：暴露是向罪犯敞开，不是只给家人。",
          errorType: "单词问题：考生可由'password被偷'推出账户'面临风险'。"
        }
      },
      {
        questionType: "细节题",
        question: "What does the writer suggest users do to reduce online risk?",
        options: [
          "Use one simple password that is easy to remember.",
          "Never use a phone for banking.",
          "Open the bank's app directly instead of clicking links in messages.",
          "Check all emails within one minute."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：the user should open the bank's own app or website directly.",
          correctReason: "作者建议直接打开银行应用或网站，而不是点击消息中的链接，C正确。",
          wrongA: "相反：作者建议不同服务用不同密码。",
          wrongB: "过度推断：作者并未说不能用手机银行，只建议开启验证。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：与'一分钟'无关。",
          errorType: "细节混淆：考生需区分'点链接'（错）与'直接打开app'（对）。"
        }
      }
    ]
  },

  {
    id: "r025",
    title: "Making Time for What Matters",
    type: "成考标准",
    level: "D",
    category: "时间管理",
    wordCount: 276,
    text: "Many people complain that they never have enough time. They work long hours, answer messages late into the night, and still feel that important tasks are never finished. Yet the real problem is rarely a shortage of hours. Everyone has the same twenty-four hours each day. The problem is usually how those hours are spent.\n\nThe most successful people do not simply work harder; they work with a plan. At the start of each day, they write down the few tasks that truly matter, instead of reacting to whatever message arrives first. This is important because small, urgent requests can easily fill the whole day while the job that really matters is left untouched. By choosing the most important task first, they make sure that progress is made on what counts.\n\nAnother useful habit is to group similar tasks together. Answering twenty emails in one period is far quicker than answering one email every half hour, because the mind does not have to restart its focus again and again. Studies on attention suggest that switching between jobs costs time — often more than people realise. Protecting long blocks of uninterrupted time, even on a busy day, usually improves both speed and quality.\n\nNone of this means that every minute must be planned. Rest and quiet walks are not wasted hours; they often give the mind the space it needs to solve difficult problems. Good time management, in the end, is not about filling the day completely. It is about removing the unimportant so that the essential has room to grow. The goal is to be busy with purpose, rather than merely to be busy.",
    translation: "许多人抱怨自己的时间永远不够。他们长时间工作，回复消息直到深夜，却仍然觉得重要的任务永远做不完。然而真正的问题很少在于时间不够用。每个人每天都有同样的二十四小时。问题通常在于这些时间是如何被花掉的。\n\n最成功的人并不是单纯更努力地工作；他们是带着计划工作。每天一开始，他们会写下真正重要的那几件事，而不是对最先到达的消息做出反应。这一点很重要，因为琐碎而紧急的请求很容易占满一整天，而真正重要的工作却无人问津。通过先选择最重要的任务，他们确保在要紧的事情上取得进展。\n\n另一个有用的习惯是把相似的任务归到一起做。在一个时间段里回复二十封邮件，远快于每半小时回复一封，因为大脑不必一次次重新集中注意力。关于注意力的研究表明，在不同任务间切换是要付出时间的——往往比人们意识到的更多。即使在忙碌的一天，留出几段不被打扰的整块时间，通常也能同时提高速度和质量。\n\n这一切并不意味着每一分钟都必须被规划好。休息和安静的散步不是被浪费的时间；它们常常给大脑提供解决难题所需的空间。好的时间管理，归根结底，不是把一天完全填满，而是把不重要的事情剔除，让重要的事情有生长的空间。目标是有目的地忙碌，而不只是单纯地忙碌。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what is the real reason people feel they have no time?",
        options: [
          "They do not plan how to spend their hours properly.",
          "They actually have fewer hours than other people.",
          "They sleep far more than is necessary.",
          "They work too slowly at simple tasks."
        ],
        correct: 0,
        explanation: {
          location: "原文第1段最后两句：Everyone has the same twenty-four hours... The problem is usually how those hours are spent.",
          correctReason: "原文说问题不在小时数，而在时间如何被规划使用，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：文章说每个人都有同样的24小时。",
          wrongC: "原文未提及：没有提到睡眠过多。",
          wrongD: "原文未提及：文章未归因于'做事慢'。",
          errorType: "定位错误：考生需抓住'不是小时数少，而是怎么用'。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of Paragraph 2?",
        options: [
          "To describe how messages are delivered around the world.",
          "To warn readers against working long hours.",
          "To explain why working with a plan matters and what it means.",
          "To introduce the most famous successful businessman."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：The most successful people... work with a plan... choosing the most important task first.",
          correctReason: "第2段围绕'按计划工作、先做最重要的事'展开，解释其意义，C正确。",
          wrongA: "无关：消息如何传递与本段主旨无关。",
          wrongB: "偷换：第1段才谈长工时，本段讲计划。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：没有提到具体名人。",
          errorType: "段落作用判断：考生需概括本段中心，而非抓举例细节。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about switching between tasks?",
        options: [
          "It is the best way to deal with urgent messages.",
          "It wastes more time than most people expect.",
          "It always improves the quality of the final work.",
          "It has no effect on people with strong focus."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：switching between jobs costs time — often more than people realise.",
          correctReason: "切换任务所费时间往往比人们意识到的更多，即比预期更耗时，B正确。",
          wrongA: "相反：文章建议把邮件集中处理，而非频繁切换。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：频繁切换降低效率。",
          wrongD: "原文未提及：文章没说对专注者无影响。",
          errorType: "推理错误：考生需从'more than people realise'推出'比预期更耗时'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "People should work as many hours as possible.",
          "Rest is completely unnecessary for busy workers.",
          "Planning every minute of the day is the only solution.",
          "Good time management means choosing important tasks and leaving room for rest."
        ],
        correct: 3,
        explanation: {
          location: "全文：第2段讲先做重要事，末段讲留出休息。",
          correctReason: "文章既主张优先做重要任务，又强调要留出休息空间，D完整概括。",
          wrongA: "相反：文章反对一味忙。",
          wrongB: "相反：末段说休息不是浪费时间。",
          wrongC: "过度绝对：文章明确说不必把每分钟都规划。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生易把'计划'误读成'把每分钟填满'。"
        }
      }
    ]
  },

  {
    id: "r026",
    title: "Cities for People and Wildlife Alike",
    type: "成考标准",
    level: "D",
    category: "动物保护",
    wordCount: 284,
    text: "When most people picture wildlife, they imagine deep forests or faraway national parks. Yet wild animals live closer to us than we think. Foxes walk through city gardens at night, birds nest on tall office buildings, and insects rest on the plants along busy streets. As cities grow, the relationship between people and these creatures has become a question worth taking seriously.\n\nThe pressure on urban wildlife is real. Green spaces are often reduced to make room for new roads and shops. Bright street lights confuse migrating birds, which may circle a lit building until they drop from tiredness. Cats that roam freely kill large numbers of birds every year. Even the water running off our roofs can carry chemicals into the streams where fish raise their young.\n\nHowever, citizens have begun to fight back in practical ways. Rooftops and balconies are being turned into small gardens that provide food for bees and butterflies. Some offices have promised to switch off unnecessary lights during the spring bird migration. Groups of volunteers plant native flowers along rivers, which helps insects and, in turn, the birds that feed on them. These changes may look small, but they add up quickly across a whole city.\n\nExperts argue that coexistence is neither expensive nor complicated. A city that supports wildlife is usually a healthier place for people too: cleaner air, quieter water, and the simple pleasure of spotting a bird outside the window. Protecting animals is therefore not a choice between nature and progress. It is a way of building a city that people can be proud to live in — one that does not forget the other living things that share the same streets.",
    translation: "当大多数人想象野生动物时，他们想到的是幽深的森林或遥远的国家公园。然而野生动物住得比我们以为的更近。狐狸在夜里穿过城市的花园，鸟儿把巢筑在高大的办公楼上，昆虫停歇在繁忙街道两旁的植物上。随着城市扩张，人与这些生物之间的关系，已成为一个值得认真对待的问题。\n\n城市野生生物所承受的压力是真实的。绿地常常被挤占，为新建的道路和商店腾出空间。明亮的路灯会使迁徙的鸟类迷失方向，它们可能绕着一栋灯火通明的大楼盘旋，直到因疲惫而坠落。自由游荡的猫每年捕杀大量的鸟类。甚至从屋顶流下的雨水，也会把化学物质带入溪流，而鱼正是在那里养育幼鱼。\n\n然而，市民们已经开始以实际行动反击。屋顶和阳台正被改造成小花园，为蜜蜂和蝴蝶提供食物。一些办公楼已承诺在春季候鸟迁徙期间关闭不必要的灯光。志愿者群体沿着河流种植本地花卉，这有助于昆虫，进而有助于以昆虫为食的鸟类。这些改变看起来很小，但在整座城市中迅速累积起来。\n\n专家们认为，共存既不昂贵也不复杂。一个善待野生生物的城市，通常对人来说也是一个更健康的地方：更清洁的空气、更清澈的水，以及在窗外看到一只鸟的简单乐趣。因此，保护动物并不是在自然与发展之间二选一。它是一种建造令人自豪的城市的方式——一座不会忘记与我们共享同一条街的其他生命的城市。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why may migrating birds circle a lit building until they drop?",
        options: [
          "They are attracted by the warm air inside the building.",
          "They are confused by bright street and building lights.",
          "They are looking for a place to rest and breed.",
          "They follow other birds that have already got lost."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Bright street lights confuse migrating birds, which may circle a lit building...",
          correctReason: "原文说明亮灯光使候鸟迷失方向，它们才绕着大楼盘旋，B正确。",
          wrongA: "原文未提及：并非被室内暖空气吸引。",
          wrongB: "（本题B为正确答案）",
          wrongC: "偷换：鸟类盘旋是因光困惑，不是特意找繁殖地。",
          wrongD: "原文未提及：与跟随其他鸟无关。",
          errorType: "定位错误：考生需抓住'lights confuse'这一因果。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"roam\" in Paragraph 2 probably means ____.",
        options: [
          "stay locked inside a house",
          "sleep for long hours",
          "eat only prepared food",
          "wander freely without control"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：Cats that roam freely kill large numbers of birds...",
          correctReason: "由'自由、捕杀鸟类'可知roam指不受约束地四处游荡，D正确。",
          wrongA: "相反：roam是自由走动，不是关在家里。",
          wrongB: "无关词义：与睡眠时长无关。",
          wrongC: "无关词义：与吃什么无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生可由'自由、捕杀鸟类'推出'四处游荡'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the small actions mentioned in Paragraph 3?",
        options: [
          "They cost so much that few cities can afford them.",
          "They have no real effect on wildlife at all.",
          "Their value grows when many people do them together.",
          "They are carried out mainly by international companies."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：These changes may look small, but they add up quickly across a whole city.",
          correctReason: "这些小改变在整座城市中迅速累积，说明众人一起做时价值会放大，C正确。",
          wrongA: "相反：末段专家说共存不贵。",
          wrongB: "相反：文章明确说这些行动有帮助。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：行动由市民志愿者完成，不是公司。",
          errorType: "推理错误：考生需从'add up across a whole city'推出'聚少成多'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of the passage?",
        options: [
          "Cities can and should be shared with wildlife in practical ways.",
          "Wild animals should be moved far away from cities.",
          "Building new roads is the only way to develop a city.",
          "Protecting nature is expensive and impractical."
        ],
        correct: 0,
        explanation: {
          location: "全文：第2段讲压力，第3段讲市民行动，末段讲共存。",
          correctReason: "文章主张以实际行动让城市与野生动物共存，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：文章主张城市与动物共存，不是赶走动物。",
          wrongC: "原文未提及：文章批评道路挤占绿地。",
          wrongD: "相反：专家说共存既不贵也不复杂。",
          errorType: "主旨判断错误：考生若只看第2段问题，易误选悲观选项。"
        }
      }
    ]
  },

  {
    id: "r027",
    title: "Why We Keep Looking Up",
    type: "成考标准",
    level: "D",
    category: "太空探索",
    wordCount: 288,
    text: "For thousands of years, human beings have looked at the night sky and wondered what lies beyond. Early farmers watched the stars to decide when to plant their crops, while ancient storytellers turned groups of stars into heroes and monsters. Today, that same curiosity has led to space stations, robotic explorers, and telescopes that see farther than any human eye ever could.\n\nYet space exploration has always been an expensive and risky activity. A single rocket can cost as much as a small hospital, and every launch carries the chance of failure. Critics ask a fair question: when there are so many problems on Earth — poverty, disease, and worn-out schools — why spend so much money reaching for the stars?\n\nThe answer given by scientists is more convincing than it first appears. The technology developed for space has already improved life on our own planet. The materials used in light, strong spacesuits are now found in running shoes and wheelchairs. The digital cameras in many phones are direct descendants of equipment built to photograph distant planets. Even the satellites that circle the Earth help us predict floods, measure droughts, and warn farmers of storms before they arrive.\n\nBeyond these practical benefits, however, there is something harder to measure. Sending humans into space forces us to see our own planet from a new distance. Photographs of the Earth taken from the Moon show a small, fragile world floating in darkness. That single image has changed how many people feel about protecting the environment. Space exploration, in the end, may be the best tool we have for understanding where we live — and for reminding us how small we are.",
    translation: "数千年来，人类一直仰望夜空，好奇那之外究竟有什么。早期的农民观察星辰，以决定何时播种；古代的说书人则把一簇簇星星编成英雄与怪物的故事。今天，同样的好奇心带来了空间站、机器人探测器，以及比任何人眼看得更远的望远镜。\n\n然而，太空探索一直是一项昂贵而冒险的活动。一枚火箭的造价可以抵得上一家小医院，而每一次发射都伴随着失败的可能。批评者提出了一个很有道理的问题：当地球上还有那么多问题——贫困、疾病、破旧的学校——为什么要花这么多钱去够星星？\n\n科学家给出的答案，比乍看之下更有说服力。为太空开发的技术，已经改善了我们在自己星球上的生活。轻便而坚固的宇航服所用的材料，如今出现在跑鞋和轮椅上。许多手机里的数码相机，正是为拍摄遥远行星而制造的设备的直接后代。就连环绕地球运行的卫星，也帮助我们预测洪水、测量干旱，并在风暴来临之前向农民发出预警。\n\n然而，除了这些实际好处之外，还有一些更难以衡量的东西。把人类送入太空，迫使我们从一个新的距离看待我们自己的星球。从月球拍摄的地球照片，展示了一个漂浮在黑暗中的渺小而脆弱的世界。那一张照片改变了许多人对保护环境的看法。归根结底，太空探索也许是我们理解自己身处何方、并提醒自己有多么渺小的最好工具。",
    questions: [
      {
        questionType: "细节题",
        question: "What did early farmers use the stars for?",
        options: [
          "To write stories about heroes and monsters.",
          "To build telescopes for their villages.",
          "To decide the right time to plant crops.",
          "To predict wars with neighbouring villages."
        ],
        correct: 2,
        explanation: {
          location: "原文第1段：Early farmers watched the stars to decide when to plant their crops.",
          correctReason: "原文明确说早期农民观星是为了决定何时播种，C正确。",
          wrongA: "张冠李戴：编英雄故事的是古代storytellers，不是农民。",
          wrongB: "原文未提及：望远镜是现代产物。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：与预测战争无关。",
          errorType: "细节混淆：考生需区分农民与说书人对星星的不同用途。"
        }
      },
      {
        questionType: "推理题",
        question: "Why do critics question space exploration?",
        options: [
          "They believe money should first solve urgent problems on Earth.",
          "They think rockets are actually very cheap to build.",
          "They believe the stars are not worth watching.",
          "They are afraid of travelling too quickly."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：when there are so many problems on Earth... why spend so much money...",
          correctReason: "批评者认为地球还有贫困、疾病等紧迫问题，钱应先用来解决这些，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：批评者正是嫌太贵。",
          wrongC: "原文未提及：并未说星空不值得看。",
          wrongD: "原文未提及：与速度恐惧无关。",
          errorType: "推理错误：考生需从poverty, disease, worn-out schools推出'先解决地球问题'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"descendants\" in Paragraph 3 probably refers to ____.",
        options: [
          "ancient human bones found in deserts",
          "expensive rockets thrown away after use",
          "diseases carried from planet to planet",
          "later products that developed from earlier equipment"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：The digital cameras in many phones are direct descendants of equipment built to photograph distant planets.",
          correctReason: "手机相机是由拍行星的设备发展而来的'后代产品'，descendants此处指衍生事物，D正确。",
          wrongA: "词义错误：descendant此处非'人类后裔/骨头'。",
          wrongB: "无关词义：与废弃火箭无关。",
          wrongC: "无关词义：与疾病无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生可由'手机相机由太空设备发展而来'推出'后代产品/衍生事物'。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude towards space exploration?",
        options: [
          "Completely doubtful: it is a waste of public money.",
          "Supportive: it brings both practical benefits and a new view of Earth.",
          "Uninterested: the author never gives an opinion.",
          "Angry: rockets should be banned immediately."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段讲技术好处，第4段讲环保视野。",
          correctReason: "作者既讲太空技术的实际好处，又讲它带来对地球的新认识，持支持态度，B正确。",
          wrongA: "相反：那是critic的观点，作者反驳之。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：作者明确给出支持理由。",
          wrongD: "相反：作者并未主张禁火箭。",
          errorType: "态度判断错误：考生需区分critic与作者本人的立场。"
        }
      }
    ]
  },

  {
    id: "r028",
    title: "Living With Machines That Learn",
    type: "成考标准",
    level: "D",
    category: "人工智能",
    wordCount: 289,
    text: "A generation ago, a computer did only what it was clearly told to do. If you wanted it to recognise a face or translate a sentence, a programmer had to write exact rules for every possible case. Today's artificial intelligence is different. Instead of following fixed rules, these systems learn from millions of examples and improve themselves the more data they are shown. This shift has already changed how we shop, drive, and search for information.\n\nThe benefits are easy to see. Messaging apps translate foreign languages in a second. Doctors use computer programs to spot early signs of disease that the human eye might miss. Factories run machines that predict when a part will break, so repairs can be made before anything actually goes wrong. In each case, the machine does not replace the human being; it handles the dull, repetitive part of the job and leaves people freer to use their judgement.\n\nYet the same power raises serious worries. Because these systems learn from data, they may also learn the unfair habits hidden in that data. A programme used to review job applications, for instance, might unfairly favour one group of applicants if the earlier examples it studied were biased. No single person wrote that unfair rule, which makes it hard to know who is responsible when something goes wrong. Privacy is another concern, since such systems need huge amounts of personal information in order to learn.\n\nMost experts do not believe that artificial intelligence will simply take over human work overnight. They argue instead that the real task is to guide it well. That means writing clearer rules about its use, teaching people the new skills it requires, and accepting that some jobs will change. The machines are here to stay. The choice is not whether to use them, but how wisely.",
    translation: "一代人以前，电脑只做别人明确吩咐它做的事。如果你想让它识别一张脸或翻译一句话，程序员就得为每一种可能的情况写出精确的规则。今天的人工智能则不同。这些系统不是遵循固定规则，而是从数百万个例子中学习，并且给它看的数据越多，它就越能自我改进。这一转变已经改变了我们购物、开车和搜索信息的方式。\n\n好处显而易见。即时通讯应用能在一秒内翻译外语。医生用电脑程序发现人眼可能漏掉的疾病早期迹象。工厂里的机器能预测某个零件何时会损坏，从而在真正出问题之前就完成修理。在每一种情况下，机器都没有取代人；它处理工作中枯燥重复的部分，让人能更自由地运用自己的判断。\n\n然而，同样的力量也引发了严重的担忧。由于这些系统是从数据中学习，它们也可能学到隐藏在数据里的不公习惯。例如，一个用于审查求职申请的程序，如果它学习的早期样本带有偏见，就可能不公平地偏袒某一组申请者。没有哪一个人写下那条不公的规则，这使得出了问题时很难知道该由谁负责。隐私是另一个担忧，因为这类系统需要大量个人信息才能学习。\n\n大多数专家并不认为人工智能会一夜之间接管人类的工作。他们反而认为，真正的任务是好好引导它。那意味着为它的使用制定更清晰的规则，教给人们它所需要的新技能，并接受有些工作将会改变。机器已经留了下来。我们要选择的不是要不要使用它们，而是要多明智地使用它们。",
    questions: [
      {
        questionType: "细节题",
        question: "How is today's artificial intelligence different from older computers?",
        options: [
          "It costs less money than ordinary computers.",
          "It never makes any mistake at all.",
          "It was invented by a single famous programmer.",
          "It learns from examples instead of following fixed rules."
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：Instead of following fixed rules, these systems learn from millions of examples...",
          correctReason: "原文说今天的AI不遵循固定规则，而是从数百万例子中学习，D正确。",
          wrongA: "原文未提及：未比较价格。",
          wrongB: "相反：第3段说AI会出错。",
          wrongC: "原文未提及：与某一位程序员无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需抓住'instead of following fixed rules'对比句。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about biased data used by an AI programme?",
        options: [
          "It always leads to faster and fairer decisions.",
          "It may cause the system to treat some applicants unfairly.",
          "It has no connection to real human habits.",
          "It can be completely removed with no effort."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：might unfairly favour one group of applicants if the earlier examples... were biased.",
          correctReason: "若学习样本带偏见，系统会不公平地偏袒某组申请者，B正确。",
          wrongA: "相反：偏见数据导致不公，不是更公平。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：文章说系统会'学到数据中隐藏的不公习惯'。",
          wrongD: "过度推断：文章并未说能毫不费力地彻底清除。",
          errorType: "推理错误：考生需从'learn the unfair habits'推出'对部分申请者不公'。"
        }
      },
      {
        questionType: "细节题",
        question: "According to the passage, what should people do about AI?",
        options: [
          "Guide it well and learn the new skills it requires.",
          "Stop using it completely before it causes harm.",
          "Let machines make all the decisions for them.",
          "Keep all personal data completely secret from everyone."
        ],
        correct: 0,
        explanation: {
          location: "原文最后一段：the real task is to guide it well... teaching people the new skills it requires.",
          correctReason: "专家认为真正的任务是好好引导AI，并教人们所需新技能，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：作者说机器会留下来，不应停止使用。",
          wrongC: "相反：文章说机器做重复部分，人用判断。",
          wrongD: "过度推断：文章承认隐私担忧，但未说彻底保密。",
          errorType: "细节混淆：考生需把'隐私担忧'与'应对方式'分开。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in this passage?",
        options: [
          "To persuade readers that AI will take over the world soon.",
          "To introduce a course on how to programme computers.",
          "To present both the benefits and the challenges of artificial intelligence.",
          "To describe the history of the Internet in detail."
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段讲好处，第3段讲担忧，末段讲应对。",
          correctReason: "文章既讲AI的好处，又讲偏见与隐私挑战，并给出应对方向，C完整概括。",
          wrongA: "相反：专家不认为AI会一夜接管。",
          wrongB: "原文未提及：与编程课程无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "范围缩小：AI只是之后的发展，并非详述互联网史。",
          errorType: "目的判断错误：考生易把第3段担忧当作全文目的，误选悲观项。"
        }
      }
    ]
  },

  {
    id: "r029",
    title: "Keeping Old Festivals Alive",
    type: "成考标准",
    level: "D",
    category: "传统节日",
    wordCount: 287,
    text: "In nearly every culture, certain days are set apart from ordinary life. They mark the changing of the seasons, the harvest of the year, or the memory of loved ones. For generations, these festivals have been passed down through food, songs, and ceremonies that families repeat year after year. In recent decades, however, many of these traditions have become harder to keep alive.\n\nYoung people growing up in cities often experience festivals in a very different way from their grandparents. The dishes that once took two or three days to prepare can now be ordered from a restaurant. The poems and folk songs that parents used to teach their children are rarely heard on the radio, which now plays the same popular music everywhere. Some families still gather, but the gathering has come to look more like a regular dinner than a ceremony. In short, the form survives while the meaning quietly fades.\n\nYet this loss is not inevitable. Across the country, local communities have begun to act. Villages hold public ceremonies where elders teach the young how the festival was celebrated long ago. Schools invite craftsmen to show the handmade objects that once decorated every home during the holiday. Cities, too, have organised fairs where visitors can taste traditional food, watch old dances, and listen to stories that might otherwise be forgotten.\n\nExperts point out that a festival does not need to stay exactly as it was a hundred years ago to remain alive. It only needs to mean something to the people celebrating it. A modern family can keep an old custom while adding a new one, as long as the day continues to bring them together. Festivals are, after all, living traditions — not frozen objects in a museum, but shared habits that people keep choosing to repeat.",
    translation: "在几乎每一种文化中，都有一些日子被从平凡生活中单独划出来。它们标志着季节的更替、一年的丰收，或是对所爱之人的怀念。一代又一代，这些节日通过食物、歌曲和仪式流传下来，家家户户年复一年地重复。然而近几十年来，其中许多传统变得越来越难维持下去。\n\n在城市里长大的年轻人，体验节日的方式往往与祖辈大不相同。曾经要花两三天准备的菜肴，如今可以从餐馆点来。父母过去教给孩子的诗歌和民歌，现在广播里很少听到——广播到处播放着同样的流行音乐。一些家庭仍然团聚，但这种聚会看起来更像一顿平常的晚饭，而不像一场仪式。简言之，形式还在，意义却在悄悄褪色。\n\n然而这种流失并非不可避免。全国各地的社区已经开始行动。村庄举办公共仪式，由长辈教年轻人这个节日在很久以前是如何庆祝的。学校请来手艺人，展示过去每逢节日就装点每户人家的手工物件。城市也组织起市集，游客可以品尝传统食物、观看古老的舞蹈、聆听那些若非如此便会被遗忘的故事。\n\n专家指出，一个节日不必原封不动地保持一百年前的样子，也能延续生命。它只需要对庆祝它的人有意义。现代家庭可以保留旧习俗，同时加入新习俗，只要这一天继续把他们聚在一起。节日终究是活的传统——不是博物馆里冻结的展品，而是人们不断选择重复的共同习惯。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, how do young people in cities experience festivals differently?",
        options: [
          "They often order festival dishes from restaurants instead of preparing them.",
          "They refuse to gather with their families at all.",
          "They still hear traditional folk songs on the radio every day.",
          "They celebrate the harvest more carefully than their grandparents."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：The dishes that once took two or three days to prepare can now be ordered from a restaurant.",
          correctReason: "原文指出过去要花两三天准备的节日菜肴，如今可从餐馆点来，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "过度推断：文章说家人仍聚会，只是不像仪式，并非完全不聚。",
          wrongC: "相反：广播里传统民歌很少听到。",
          wrongD: "相反：文章说意义在淡化，并非更用心。",
          errorType: "细节混淆：考生需区分'仍聚会'与'意义淡化'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"inevitable\" in Paragraph 3 probably means ____.",
        options: [
          "easily changed by the weather",
          "widely celebrated by young people",
          "completely forgotten by everyone",
          "certain to happen and impossible to prevent"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段第1句：Yet this loss is not inevitable.",
          correctReason: "Yet转折说这种流失'并非不可避免'，即人们可以阻止，inevitable意为'不可避免的'，D正确。",
          wrongA: "无关词义：与天气变化无关。",
          wrongB: "无关词义：与年轻人庆祝无关。",
          wrongC: "语义过强：inevitable不等于'被遗忘'。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生可由Yet转折（损失可避免）推出inevitable=不可避免。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from what experts say in the last paragraph?",
        options: [
          "Festivals must remain exactly as they were a century ago.",
          "A tradition can stay alive even if it changes over time.",
          "Old customs should never be mixed with new ones.",
          "Festivals are better kept in museums than at home."
        ],
        correct: 1,
        explanation: {
          location: "原文末段：a festival does not need to stay exactly as it was... to remain alive.",
          correctReason: "专家说节日不必百年原样也能延续，说明传统随时间改变仍可活着，B正确。",
          wrongA: "相反：专家说不必百年不变。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：专家说可以加入新习俗。",
          wrongD: "相反：末段说不是博物馆里的冻结物品。",
          errorType: "推理错误：考生需抓住'不必原样保留仍可活着'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "All old festivals should be stopped immediately.",
          "Modern music has completely destroyed traditional culture.",
          "Traditional festivals are fading but can be kept alive through community efforts.",
          "Restaurant food is always healthier than home cooking."
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段讲淡化，第3段讲社区行动，末段讲活的传统。",
          correctReason: "文章既讲传统节日意义在淡化，又讲社区行动可使其延续，C完整概括。",
          wrongA: "相反：文章主张保留。",
          wrongB: "过度推断：广播音乐只是细节，非全文主旨。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：与健康无关。",
          errorType: "主旨判断错误：考生易把第2段问题当作全文，忽略第3段对策。"
        }
      }
    ]
  },

  {
    id: "r030",
    title: "The Quiet Revolution of the Modern Library",
    type: "成考标准",
    level: "D",
    category: "图书馆",
    wordCount: 288,
    text: "Ask a young person today what a library is, and they may picture nothing more than a silent room full of dusty books. That picture is not entirely wrong, but it is far from complete. Over the past twenty years, public libraries have quietly turned into something much wider — places where people do almost everything except simply borrow a book.\n\nWalk into a modern branch on a Saturday morning, and the variety of activities is surprising. A retired man may be learning how to use a tablet at a computer table, while a group of students prepares a presentation in a meeting room. Downstairs, parents read aloud to toddlers, and a trainer helps a middle-aged woman search for a new job online. Books are still everywhere, of course, but they share the shelves with DVDs, music scores, and even tools that can be borrowed for home repairs.\n\nThese changes have been driven by a simple belief: information should belong to everyone. A family that cannot afford a private computer or a paid course can still walk in and use the library's free services. In this sense, the library has become one of the few public spaces that does not ask people to buy anything. It offers a desk, the Internet, and expert help to the teenager writing a university application and the immigrant learning the local language with equal care.\n\nOf course, libraries still face threats. Some local governments, seeing fewer people borrowing novels, have tried to cut their budgets. Yet the numbers tell a different story: visits have risen sharply as these new services have grown. The modern library is not dying. It is, on the contrary, one of the most useful institutions a city has — a reminder that a public space does not have to profit in order to matter.",
    translation: "如今问一个年轻人图书馆是什么，他脑海里浮现的也许不过是一间满是落满灰尘的书的安静房间。这个画面并非全错，却远不完整。在过去二十年里，公共图书馆已经悄悄变成了一种更广阔的地方——人们在那里几乎什么都做，唯独不只是借一本书。\n\n周六早晨走进一家现代分馆，活动之多样令人惊讶。一位退休老人也许正在电脑桌前学习如何使用平板，而一群学生则在会议室里准备演示文稿。楼下，父母给学步的幼儿朗读，一位培训师帮一位中年女性在网上找新工作。当然，书仍然随处可见，但它们与DVD、乐谱，甚至可借回家修理用的工具一起摆在书架上。\n\n这些变化背后是一个简单的信念：信息应当属于每一个人。一个买不起私人电脑或付费课程的家庭，仍然可以走进来使用图书馆的免费服务。从这个意义上说，图书馆已经成为少数几个不要求人买任何东西的公共空间之一。它为撰写大学申请的青少年和学习当地语言的移民，同样细心地提供一张书桌、网络和专业帮助。\n\n当然，图书馆仍然面临威胁。一些地方政府看到借小说的人少了，便试图削减预算。然而数字讲出了另一个故事：随着这些新服务的增长，到访人数大幅上升。现代图书馆并没有衰落。相反，它是一座城市所拥有的最有用的公共机构之一——它提醒人们，一个公共空间不必靠盈利也能有其价值。",
    questions: [
      {
        questionType: "细节题",
        question: "What might a retired man be doing in a modern library on a Saturday?",
        options: [
          "Borrowing an expensive novel to take home.",
          "Learning how to use a computer tablet.",
          "Repairing broken tools in the basement.",
          "Giving a paid course to young students."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：A retired man may be learning how to use a tablet at a computer table...",
          correctReason: "原文说退休老人可能在电脑桌前学用平板，B正确。",
          wrongA: "偷换：借书只是仍然存在的部分，不是本题所指的退休老人活动。",
          wrongB: "（本题B为正确答案）",
          wrongC: "偷换：可借的工具用于家里修理，不是在地下室修。",
          wrongD: "相反：图书馆服务免费，不是收费课程。",
          errorType: "定位错误：考生需在第2段找到retired man这一具体例子。"
        }
      },
      {
        questionType: "信息定位题",
        question: "According to the passage, which of the following can people borrow from a modern library?",
        options: [
          "Tools for home repairs.",
          "A private computer to keep at home.",
          "A university degree.",
          "Paid online courses."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：...even tools that can be borrowed for home repairs.",
          correctReason: "原文明确说连用于家庭修理的工具都可以借，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：图书馆提供免费使用，不是把私人电脑借回家。",
          wrongC: "原文未提及：图书馆不能借学位。",
          wrongD: "相反：图书馆课程免费，不是借付费课程。",
          errorType: "信息定位错误：考生需在第2段列举物中找'tools'。"
        }
      },
      {
        questionType: "指代题",
        question: "What does \"It\" refer to in the sentence \"It offers a desk, the Internet, and expert help...\"?",
        options: [
          "A private family.",
          "A paid course.",
          "The modern public library.",
          "A university application."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：In this sense, the library has become... It offers a desk...",
          correctReason: "It承接上句主语the library，指现代公共图书馆，C正确。",
          wrongA: "相反：私人家庭恰恰负担不起。",
          wrongB: "相反：图书馆不收费，不是付费课程。",
          wrongC: "（本题C为正确答案）",
          wrongD: "偷换：申请大学是学生做的事，不是It。",
          errorType: "指代错误：考生需往前找It指代的the library。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Libraries should close because nobody reads novels.",
          "Public libraries are mainly for retired people.",
          "Modern libraries charge high fees for their services.",
          "Modern libraries have developed into free public spaces offering many services."
        ],
        correct: 3,
        explanation: {
          location: "全文：第2段列举活动，第3段讲免费公共空间。",
          correctReason: "文章指出现代图书馆已发展成提供多种服务的免费公共空间，D完整概括。",
          wrongA: "相反：末段说图书馆不会消亡。",
          wrongB: "范围缩小：退休老人只是一个例子。",
          wrongC: "相反：图书馆不收费。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生易被某一类读者（老人/学生）的细节吸引而误选。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_3 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_3 = READING_BATCH_3;
}
