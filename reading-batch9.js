// 成人高考专升本英语阅读题库 第九批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一至八批不重复）：舞蹈、小说、难民、谈判、兼职、实习、公共卫生、社区花园、方言保护、网络暴力
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_9 = [
  {
    id: "r081",
    title: "Dancing without Watching the Clock",
    type: "成考标准",
    level: "D",
    category: "舞蹈",
    wordCount: 305,
    text: "In a small hall above a busy street, twenty ordinary people are stepping forward and back to a slow tune. They are not professionals. Some are over sixty, and one man has two left feet. Yet no one is watching the clock, and no one is keeping score. This is dance as many people come to know it—not on a stage, but in a neighborhood studio.\n\nDance is often judged by what we see on television: perfect bodies, difficult jumps, silent judges holding up cards. That image makes many adults believe they are too old, too stiff, or too unmusical to ever begin. Yet the real value of dancing has little to do with such performances. When people move together to the same rhythm, their bodies forget the chairs and desks they have sat in all week. A teacher calls out a step, a partner answers with a smile, and for a moment the room feels like a single breathing thing.\n\nResearchers who study aging have long noted that older adults who take dance classes fall less often and remember names more clearly than those who do not. The reason is not magic. A dancer must watch, listen, count, and balance all at once, and such full-body attention keeps the mind as well as the body awake. The music helps, too; few pills can lift a mood as quickly as a familiar tune.\n\nCritics say dance classes are a luxury, too expensive for someone on a tight budget. But many communities now offer free evening lessons in town halls, and a pair of comfortable shoes costs less than a monthly gym bill. Perhaps the deepest reason people keep coming is simpler: after a long day of being told what to do, dance is one of the few times when you move because you choose to.",
    translation: "在一条繁忙街道楼上的小厅里，二十位普通人正随着一支缓慢的曲子前后移步。他们不是专业舞者。有些人已年过六十，还有一位男士手脚不太协调。然而没有人盯着时钟，也没有人在记分。这就是许多人认识的舞蹈——不在舞台上，而在社区的舞蹈室里。\n\n人们常常通过电视上的画面来评判舞蹈：完美的身材、高难度的跳跃、举着牌子沉默的评委。那样的画面让许多成年人觉得自己太老、太僵硬、太没有乐感，永远也学不会。然而舞蹈真正的价值，与那样的表演几乎无关。当人们随着同一节奏一起移动，他们的身体便忘掉了整周久坐的椅子和办公桌。老师喊出一个舞步，舞伴微笑着回应，有那么一刻，整个房间仿佛成了一起呼吸的生命体。\n\n研究衰老的学者早就注意到：上舞蹈课的老年人比不上的更少跌倒，也更能记住别人的名字。这其中没有什么魔法。舞者必须同时观看、聆听、数拍并保持平衡，这种全身参与的注意力，让头脑和身体一样保持清醒。音乐也有帮助：几乎没有哪种药片能像一支熟悉的曲子那样迅速地改善心情。\n\n批评者说舞蹈课是一种奢侈，对预算紧张的人来说太贵。但如今许多社区都在镇公所提供免费的晚间课程，一双舒服的鞋子也比一张健身月卡便宜。也许人们坚持来上课，最深层的原因更简单：在一整天被人指挥该做什么之后，舞蹈是少数几个你因为自己想动才动的时刻之一。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 3, why do dance classes help older adults stay healthy?",
        options: [
          "Dancing requires watching, listening, counting and balancing at the same time",
          "Dancing allows them to perform on television in front of judges",
          "Dancing replaces the need for any kind of medicine",
          "Dancing helps them become professional dancers before sixty"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：A dancer must watch, listen, count, and balance all at once, and such full-body attention keeps the mind as well as the body awake.",
          correctReason: "原文明确指出跳舞需要同时观看、聆听、数拍和保持平衡，这种全身参与的注意力使身心保持清醒，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：电视上的专业表演是第2段用来对比的画面，并非老年人上课的目的。",
          wrongC: "夸大：原文只说音乐改善心情比药片快，并未说舞蹈能取代一切药物。",
          wrongD: "无据：原文说他们并非专业舞者，更没有说要在六十岁前成为职业舞者。",
          errorType: "定位错误：考生须抓住第3段\"must watch, listen, count, and balance all at once\"这一具体机制。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the television image of dance described in Paragraph 2?",
        options: [
          "It shows that dance is mainly a hobby for retired people",
          "It may discourage ordinary adults from starting to dance",
          "It proves that older adults should never learn to dance",
          "It is the only true purpose of any dance class"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：That image makes many adults believe they are too old, too stiff, or too unmusical to ever begin.",
          correctReason: "电视上完美专业的形象让许多成年人误以为自己太老太僵硬而不敢开始，可推出它会阻碍普通人学舞的意愿，B正确。",
          wrongA: "无据：电视形象与退休人群爱好无关，原文并未这样说。",
          wrongC: "相反：第3段恰恰证明老年人上课有益。",
          wrongD: "无据：原文第2段说真正价值与那种表演几乎无关。",
          errorType: "推理过度：考生须区分\"电视形象带来误解\"与\"电视形象是唯一目的\"，勿走极端。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"luxury\" in the last paragraph is closest in meaning to ____.",
        options: [
          "something that is free for everyone",
          "something necessary for daily life",
          "something expensive and not truly necessary",
          "something dangerous to one's health"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：Critics say dance classes are a luxury, too expensive for someone on a tight budget.",
          correctReason: "后面紧跟着解释\"对预算紧张的人来说太贵\"，可知luxury指昂贵、非必需的东西，C与语境吻合。",
          wrongA: "相反：若人人免费就不会被说成奢侈。",
          wrongB: "相反：必需品不会被批评为奢侈。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文讨论价格，与健康危险无关。",
          errorType: "语境误判：考生须利用破折号后的解释\"too expensive\"来锁定词义。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Only professional dancers can truly enjoy dancing",
          "Television judges should give higher scores to older dancers",
          "Dance classes should be forbidden in town halls",
          "Ordinary people can gain health and freedom from dance beyond the stage"
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段写普通人在社区跳舞，第3段写对身心的益处，末段写自主选择带来的深层快乐。",
          correctReason: "全文围绕\"舞台之外的舞蹈\"展开，既讲健康益处又讲自主选择的精神收获，D完整概括。",
          wrongA: "相反：第1段强调他们不是专业舞者也乐在其中。",
          wrongB: "无据：原文并未建议评委提高打分。",
          wrongC: "相反：末段说许多社区在镇公所提供免费课程，是被支持的。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨片面：考生若只盯第2段电视画面易误选B，须把握全文\"普通人+社区舞蹈\"主线。"
        }
      }
    ]
  },
  {
    id: "r082",
    title: "Why We Still Read Novels When Screens Are Everywhere",
    type: "成考标准",
    level: "D",
    category: "小说",
    wordCount: 324,
    text: "On a bus that rolls through the morning traffic, more than one passenger holds up a phone whose screen is already glowing. Yet a few still carry a small paper book, its corners bent from months of reading. They are not refusing technology; they are choosing a slower company. These are the readers of novels, and their habit is older than every app in the phone.\n\nA novel does not shout. It does not pop up a message or shake the screen. Instead, it asks you to lend it your attention, page after page, while a story grows in a world that only exists inside your head. That patient relationship is exactly what busy modern life seems to remove. When you read a novel, no one is collecting your clicks, no clock is counting down, and the next chapter appears only when you turn to it.\n\nDefenders of novels point out what the pages quietly teach. Following a long plot means following cause and effect, learning how one decision leads to another. Walking through another person's life trains a skill called empathy: the ability to feel what a stranger might feel. Studies among schoolchildren have suggested that those who read fiction often understand the feelings of their classmates better than those who spend the same time on short videos.\n\nCritics reply that novels are too slow for a world that moves in seconds. They ask why anyone should spend ten hours on a made-up life when a ten-minute video can explain the same idea. But that comparison misses the point. A video tells you about a feeling; a novel lets you live inside it, step by step. You cannot hurry a sentence and still remember the road it took you down.\n\nNo one argues that novels should replace the phone. Yet as long as there are corners on books bent by hands, the story-telling habit that began around ancient fires will not disappear tonight.",
    translation: "在一辆穿过早高峰车流的公交车上，不止一位乘客举着屏幕已经亮起的手机。然而仍有几个人带着一本小小的纸质书，书角因几个月的翻阅已经卷起。他们并不是在拒绝科技，而是在选择一种更慢的陪伴。这些人就是小说读者，他们的习惯比手机里任何一款应用都更古老。\n\n小说不会大喊大叫。它不会弹出消息，也不会震动屏幕。相反，它请你把注意力一页一页地借给它，让一个只存在于你脑海中的世界慢慢成形。这种耐心的关系，恰恰是忙碌的现代生活似乎正在抽走的东西。当你读小说时，没有人在统计你的点击，没有倒计时在跳动，下一章只会在你翻开它时才出现。\n\n小说的维护者指出了书页悄悄教会人的东西。跟随一条漫长的情节线，意味着跟随因果，学习一个决定如何引出下一个决定。走进另一个人的人生，会训练一种叫做共情的能力：感受陌生人可能感受的东西的能力。针对学童的研究表明，读小说的孩子往往比把同样时间花在短视频上的孩子更能理解同学的感受。\n\n批评者回应说，对一个以秒为单位运转的世界而言，小说太慢了。他们问，既然十分钟的视频就能讲清同一个道理，为什么还要花十个小时去过一段虚构的人生？但这种比较搞错了重点。视频告诉你一种感受；小说则让你一步步住进那种感受里。你不能一边匆匆翻过句子，一边还记得它带你走过的路。\n\n没有人主张小说应当取代手机。然而，只要还有被手翻卷角的书页，那串始于古老篝火旁的讲故事的习惯，今晚就不会消失。",
    questions: [
      {
        questionType: "信息定位题",
        question: "According to Paragraph 2, what is the main difference between a novel and a phone app?",
        options: [
          "A novel always costs more money than a phone app",
          "A novel asks for patient attention instead of interrupting users",
          "A novel can collect clicks and shake the screen",
          "A novel appears only after a ten-minute countdown"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：It does not pop up a message or shake the screen. Instead, it asks you to lend it your attention, page after page...",
          correctReason: "第2段对比指出小说不弹窗、不震动，而是请你耐心投入注意力，B准确概括这一区别。",
          wrongA: "无据：原文并未比较小说与应用的价格。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说小说不会收集点击、不会震动屏幕。",
          wrongD: "无据：倒计时是第4段批评者提到的现代节奏，与小说无关。",
          errorType: "定位错误：考生须回到第2段，勿与第4段内容混淆。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the skill of \"empathy\" mentioned in Paragraph 3?",
        options: [
          "It means making more money from a made-up life",
          "It is the ability to follow a long plot with no mistakes",
          "It helps readers understand what other people may feel",
          "It is something that every short video can teach directly"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：...a skill called empathy: the ability to feel what a stranger might feel.",
          correctReason: "原文冒号后直接解释empathy即感受陌生人可能感受的能力，可推出它帮助读者理解他人情绪，C正确。",
          wrongA: "无据：empathy是情感能力，与赚钱无关。",
          wrongB: "偷换概念：跟随情节训练的是因果思维，不是empathy本身。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第3段对比的是读小说的孩子更理解同学，短视频并未被说成能教共情。",
          errorType: "概念误读：考生须以冒号后的定义为准，勿把相邻概念混为一谈。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"hurry\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "read a sentence with full attention",
          "keep a book as a lifelong treasure",
          "turn a page slowly and carefully",
          "move through a sentence too fast to remember it"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：You cannot hurry a sentence and still remember the road it took you down.",
          correctReason: "句意为\"你不能匆匆翻过一个句子，却还记得它带你走过的路\"，hurry即过快地掠过，D与语境吻合。",
          wrongA: "相反：全身心关注与hurry相反。",
          wrongB: "无据：原文讨论阅读速度，与珍藏书籍无关。",
          wrongC: "相反：慢慢翻页正是hurry的反面。",
          wrongD: "（本题D为正确答案）",
          errorType: "语境误判：考生须抓住\"cannot...and still remember\"的对比关系。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main purpose of this passage?",
        options: [
          "To explain why novels still matter in a screen-filled age",
          "To persuade readers to throw away all their phones",
          "To prove that novels are slower than every video",
          "To criticize schoolchildren for watching short videos"
        ],
        correct: 0,
        explanation: {
          location: "全文标题与末段：...the story-telling habit that began around ancient fires will not disappear tonight.",
          correctReason: "全文层层论证小说在屏幕时代依然提供耐心、共情与沉浸体验，回应\"为什么还在读小说\"，A准确概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "极端：末段明确说没有人主张用小说取代手机。",
          wrongC: "片面：慢只是批评者的观点，作者借此说明小说的独特价值，并非单纯论证它慢。",
          wrongD: "片面且过度：第3段只是用学童研究说明共情，并未批评孩子。",
          errorType: "主旨偏移：考生须区分作者\"辩护小说价值\"与\"简单对比快慢\"。"
        }
      }
    ]
  },
  {
    id: "r083",
    title: "The Long Walk to a New Classroom",
    type: "成考标准",
    level: "D",
    category: "难民",
    wordCount: 329,
    text: "When a family leaves their home in a hurry, they seldom think about school. They think about the border, the night on the ground, the water that will not come. Yet within a year or two, the children who crossed those borders begin to ask a quieter question: when can I sit in a classroom again?\n\nRefugee children are not merely delayed students. They are children who have seen maps redrawn around them, who have heard their parents whisper about a street that no longer exists. Studies by relief agencies have found that on average, a refugee child misses more than two years of schooling before reaching a safe place. During those lost years, many forget what it feels like to raise a hand without fear.\n\nThe classrooms that finally welcome them are often crowded. A teacher may face forty children from four countries, speaking three languages, and every level of readiness. Some know letters; some do not. Some are older than their classmates because they had to wait. The teacher cannot teach everyone the same lesson at the same speed, yet the materials on the desk were written for a single average child.\n\nThis is where simple projects do their best work. Tutors who visit after school help a girl catch up on maths while she learns the local language. Volunteers who share stories let a boy discover that the adventures he remembers are not strange, but common to every child who has ever left home. Such efforts cost little, yet they return much: a quiet hand slowly rising again.\n\nNo school can fully erase what a child has walked through. A refugee does not become a new child by changing a country. But a classroom that expects a child to learn, rather than only to recover, can remind him that his future is not fixed by the road behind him. That reminder, repeated day after day, is what finally turns a long walk into a new beginning.",
    translation: "当一家人匆匆离开家园时，他们很少想到学校。他们想到的是边境、地上的那一夜、怎么也送不来的水。然而一两年后，那些跨过边境的孩子开始问一个更安静的问题：我什么时候能再坐进一间教室？\n\n难民儿童不只是\"被耽误了的学生\"。他们是看着自己周围的地图被重新绘制的孩子，是听着父母低声说起一条已经不复存在的街道的孩子。救助机构的调查发现，一名难民儿童在抵达安全之地之前，平均要缺课两年以上。在那些流失的岁月里，许多人忘了毫无恐惧地举起一只手是什么感觉。\n\n终于接纳他们的教室往往很拥挤。一位老师可能面对四十名来自四个国家的孩子，他们说着三种语言，准备程度各不相同。有的认识字母，有的还不认识。有人因为等待太久而比同班同学年长。老师无法用同样的进度教所有人同一堂课，可桌上的教材却是为一个\"平均水平的孩子\"写的。\n\n正是在这种时候，一些朴素的项目发挥了最大的作用。放学后前来辅导的志愿者帮一个女孩在学当地语言的同时补上数学。分享故事的志愿者让一个男孩发现，他记忆中的那些历险并不奇怪，而是每一个离开过家的孩子都曾经历的。这样的努力花费不多，回报却很大：一只曾经安静的手，慢慢又举了起来。\n\n没有哪所学校能完全抹去一个孩子走过的路。换了一个国家，难民并不会变成一个全新的孩子。然而，一间期待孩子去学习、而不只是去恢复的教室，可以提醒他：他的未来并不被身后那条路所决定。这样的提醒日复一日，最终把一段漫长的跋涉，变成一个新的开始。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, how much schooling does a refugee child usually miss before reaching safety?",
        options: [
        "Less than two months of primary school",
        "About two weeks of summer holiday",
        "On average more than two years of schooling",
        "No schooling at all after leaving home"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：on average, a refugee child misses more than two years of schooling before reaching a safe place.",
          correctReason: "原文直接给出平均缺课两年以上的数据，C与原文一致。",
          wrongA: "与原文相差极大：原文是两年，不是两个月。",
          wrongB: "与原文相差极大：两周假期与两年缺课完全不同。",
          wrongC: "（本题C为正确答案）",
          wrongD: "绝对化：原文说平均缺课两年多，并非完全没有上过学。",
          errorType: "数字误读：考生须抓住more than two years这一具体量级，勿被近义干扰项迷惑。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"them\" in the first sentence of Paragraph 3 refers to ____.",
        options: [
          "the borders that were crossed at night",
          "the relief agencies that collect data",
          "the teachers who are over forty years old",
          "the refugee children who finally reach a safe place"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：The classrooms that finally welcome them are often crowded. 指代上文第2段末提到的缺课后抵达安全地的孩子。",
          correctReason: "上文主语一直是refugee children，教室\"终于接纳他们\"中的them即这些难民儿童，D正确。",
          wrongA: "无据：边境不会被教室接纳。",
          wrongB: "无据：救助机构是做研究的主体，不是被教室接纳的对象。",
          wrongC: "偷换：下文提到一名老师面对四十名学生，them不可能指老师本人。",
          wrongD: "（本题D为正确答案）",
          errorType: "指代回溯错误：考生须把代词与上文核心讨论对象refugee children挂钩。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the tutors and volunteers mentioned in Paragraph 4?",
        options: [
          "They offer low-cost help that helps rebuild children's confidence",
          "They are hired by governments with very high salaries",
          "They mainly teach children how to cross borders safely",
          "They replace the regular teachers in crowded classrooms"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Such efforts cost little, yet they return much: a quiet hand slowly rising again.",
          correctReason: "原文说这些努力花费不多却回报很大，让曾经安静的手重新举起，可推出它们低成本地重建了孩子的自信，A正确。",
          wrongB: "相反：原文明确说cost little，与高薪相反。",
          wrongC: "无据：志愿者做的是课后辅导和分享故事，不是教越境。",
          wrongD: "无据：原文说tutors visit after school，并未取代常规教师。",
          errorType: "推理过度：考生须抓住cost little与return much的对比。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To argue that refugee children should be sent back home",
          "To show how education can help refugee children start again",
          "To criticize governments for building crowded classrooms",
          "To describe the geography of the border at night"
        ],
        correct: 1,
        explanation: {
          location: "全文末句：...is what finally turns a long walk into a new beginning.",
          correctReason: "全文从缺课、拥挤教室、志愿辅导写到教室\"期待学习\"的提醒，核心是说明教育如何帮助难民儿童重新开始，B正确。",
          wrongA: "相反：全文在讨论如何接纳他们，而非遣返。",
          wrongB: "（本题B为正确答案）",
          wrongC: "片面：拥挤教室只是困难之一，作者并未把矛头指向政府。",
          wrongD: "无据：第1段只是引入，并非文章目的。",
          errorType: "目的误判：考生须区分\"描写困难\"与\"倡导教育价值\"，勿把背景当目的。"
        }
      }
    ]
  },
  {
    id: "r084",
    title: "The Art of Asking without Pushing",
    type: "成考标准",
    level: "D",
    category: "谈判",
    wordCount: 298,
    text: "Two people sit across a table. One wants a lower price; the other wants to keep it. On the surface, this is a simple fight over numbers. Yet every experienced negotiator knows that the hardest deal is rarely lost over the number itself—it is lost because one side talked too much, or prepared too little.\n\nNegotiation is often pictured as a battle of strong voices. We imagine a clever expert who overwhelms the other side with confident words. Real skill, however, looks quieter. The strongest negotiators listen first. They let the other side state what they truly need, and they repeat it back to show they have understood. People rarely refuse a deal when they feel heard; they much more often walk away when they feel judged.\n\nPreparation matters more than charm. Before the meeting, a wise negotiator writes down three things: the best price he hopes for, the lowest price he can accept, and the point at which he will simply stand up and leave. Without that walk-away line, every smile becomes a trap, because you cannot judge how far to push. With it, even a long silence feels safe, since you already know what \"no\" looks like.\n\nTiming is also a silent partner. A proposal made too early is usually a gift; a proposal made too late is usually a regret. The trick is to wait until the other side has shown enough need that they start to fear losing the deal, rather than fearing making it.\n\nIn the end, a good negotiation is not a victory over a person. It is the construction of a deal that both sides can live with tomorrow. The best result is one in which neither side remembers who \"won,\" but both sides come back to work again next year.",
    translation: "两个人隔着一张桌子坐下。一方想要更低的价格，另一方想守住原价。表面上看，这是一场关于数字的简单争夺。然而每一位有经验的谈判者都知道，最难谈成的交易很少输在数字本身——它输在一方话太多，或者准备太少。\n\n谈判常常被描绘成一场强声线之间的较量。我们想象的，是一位聪明的专家用自信的言辞压过对方。然而真正的技巧看起来要安静得多。最强的谈判者先倾听。他们让对方说出自己真正需要什么，再复述一遍，以表明自己听懂了。当人们感到被理解时，很少拒绝一笔交易；他们更常在感到被评判时转身离开。\n\n准备比魅力更重要。开会之前，聪明的谈判者会写下三件事：他希望拿到的最好价格、他能接受的最低价格、以及到哪一点他会干脆起身离开。没有这条\"走人线\"，每一个微笑都会变成陷阱，因为你无法判断该推到多远。有了它，即使一段漫长的沉默也让人安心，因为你早已知道\"不行\"长什么样。\n\n时机也是一位沉默的搭档。提得太早的方案通常是一份礼物；提得太晚的方案通常是一声叹息。诀窍在于等到对方流露出足够的需要，开始担心失去这笔交易，而不是担心做成这笔交易。\n\n说到底，一场好的谈判不是对某个人的胜利。它是在搭建一份双方明天都能接受的约定。最好的结果，是双方都记不清究竟是谁\"赢了\"，却都愿意明年再来合作。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what do strong negotiators usually do first?",
        options: [
          "They speak as loudly as possible to control the table",
          "They prepare a list of clever jokes to charm the other side",
          "They immediately announce their lowest acceptable price",
          "They listen carefully and repeat what the other side needs"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：The strongest negotiators listen first. They let the other side state what they truly need, and they repeat it back to show they have understood.",
          correctReason: "原文明确说最强的谈判者先倾听，并复述对方需求，D与原文一致。",
          wrongA: "相反：这正是被否定的\"强声线\"想象。",
          wrongB: "无据：原文并未提到用笑话增加魅力。",
          wrongC: "相反：亮出底线价格是第3段会前准备，且不应在桌上立即宣布。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住listen first与repeat it back两个动作。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The phrase \"walk-away line\" in Paragraph 3 is closest in meaning to ____.",
        options: [
          "the point at which a negotiator will simply end the talk and leave",
          "a line of chairs placed along the wall of the meeting room",
          "a friendly handshake used to close a successful deal",
          "the longest speech a negotiator is allowed to make"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：...the point at which he will simply stand up and leave. Without that walk-away line...",
          correctReason: "上文刚解释为\"干脆起身离开的那一点\"，walk-away line即谈判者决定离场的底线，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "字面误读：这是习语，并非真指墙边的一排椅子。",
          wrongC: "无据：握手是成交动作，与离场底线相反。",
          wrongD: "无据：原文讨论价格底线，不限制发言时长。",
          errorType: "习语误读：考生须以上一句的释义为准，勿按字面拆解。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the example of a proposal \"made too early\" in Paragraph 4?",
        options: [
          "Early proposals are always the most successful ones",
          "It may give away an advantage before the other side shows real need",
          "It guarantees that the other side will refuse the deal",
          "It means the negotiator did not prepare a walk-away line"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：A proposal made too early is usually a gift... The trick is to wait until the other side has shown enough need...",
          correctReason: "把过早的方案比作\"礼物\"，并说要等到对方流露出足够需要，可推出过早出价等于白送优势，B正确。",
          wrongA: "相反：原文说过早通常是礼物（吃亏），并非最成功。",
          wrongB: "（本题B为正确答案）",
          wrongC: "绝对化：原文说usually，并非保证对方一定拒绝。",
          wrongD: "无据：提得太早与是否准备走人线无必然联系。",
          errorType: "推理过度：考生须区分\"通常吃亏\"与\"必然失败\"。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward a \"good negotiation\" according to the last paragraph?",
        options: [
          "It is a war in which the stronger voice should win",
          "It should aim at one side's total victory over the other",
          "It builds a deal both sides can live with and return to later",
          "It should be finished as quickly as possible"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：A good negotiation is not a victory over a person. It is the construction of a deal that both sides can live with tomorrow.",
          correctReason: "作者明确反对\"战胜对方\"，主张建立双方明天都能接受、明年还愿再来的约定，C准确传达作者态度。",
          wrongA: "相反：作者明说不是对一个人的胜利。",
          wrongB: "相反：一方全胜正是作者所反对的。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：第4段反而强调要等待时机，并非越快越好。",
          errorType: "态度误判：考生须区分\"战胜对手\"与\"长期合作\"两种价值观。"
        }
      }
    ]
  },
  {
    id: "r085",
    title: "Working Two Worlds at Once",
    type: "成考标准",
    level: "D",
    category: "兼职",
    wordCount: 333,
    text: "By seven in the morning, Lin has already put on a clean shirt. By eight, he is sitting in a classroom taking notes. By three in the afternoon, he is behind a counter, ringing up coffee cups. By ten at night, he returns to his books, tired but awake. He is one of millions of students who hold a part-time job while studying, and the line between his two worlds is thinner than it looks.\n\nThe reasons are as ordinary as the money on the table. Tuition, rent, and the bus fare home do not wait for a diploma. For many students, a part-time job is not a choice but a calculation: two hours of standing means a week of meals. Supporters add that such work teaches lessons the classroom cannot. A student who has dealt with an angry customer learns patience; one who has counted a till at midnight learns reliability. These are the habits that employers later call \"experience.\"\n\nYet the same line can cut both ways. Teachers report that students who work more than twenty hours a week often arrive in class with their eyes half closed, and their written work is turned in late, if it is turned in at all. Sleep, that quiet student of memory, leaves when a job keeps calling. A grade lost in March cannot be easily recovered in June.\n\nWise employers and universities have begun to notice. Some shops now limit shifts during exam weeks; some colleges offer early classes so that students can work in the evening. Neither side wants the student to break between two demands. The goal is not to choose work over study, nor study over work, but to keep the two from fighting each other.\n\nLin does not dream of being rich. He dreams of finishing his degree without losing his health in the meantime. That modest goal, repeated by a million tired students, may be the quietest—and most honest—measure of what it costs to study while you earn.",
    translation: "早上七点，林已经穿好一件干净衬衫。八点，他坐在教室里记笔记。下午三点，他站在柜台后，一杯杯地结账。晚上十点，他回到书本前，疲惫却清醒。他是数百万边读书边做兼职的学生之一，而他两个世界之间的那条线，比看上去要细。\n\n原因就像桌上的钱一样朴素。学费、房租、回家的车费不会等到文凭发下来。对许多学生来说，兼职不是选择，而是一道算术题：站两个小时，就够吃一周饭。支持者还说，这样的工作能教会课堂教不了的东西。应对过发火顾客的学生学会了耐心；深夜数过收银机的学生学会了可靠。这些正是雇主日后所说的\"经验\"。\n\n然而同一条线也可能两面割伤。老师们反映，每周工作超过二十小时的学生常常半睁着眼走进教室，作业要么交得很晚，要么干脆不交。睡眠——那位安静的记忆学生——在工作电话不断打来时就离开了。三月丢掉的成绩，六月很难补回来。\n\n明智的雇主和大学已经开始注意到这一点。有些店铺在考试周限制排班，有些大学把课排在早间，好让学生晚上能去上班。双方都不希望学生在两种要求之间被压垮。目标不是让工作压倒学习，也不是让学习压倒工作，而是让二者不要互相打架。\n\n林并不梦想发财。他梦想的是拿到学位的同时，别把身体也搭进去。这个朴素的目标，被百万个疲惫的学生重复着，也许就是\"边挣钱边读书\"所要付出代价的、最安静也最诚实的一把标尺。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why do many students take a part-time job?",
        options: [
          "Because tuition, rent and daily costs must be paid",
          "Because they want to become famous shop owners",
          "Because the classroom has no lessons at all",
          "Because employers ask students to work for free"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：Tuition, rent, and the bus fare home do not wait for a diploma. For many students, a part-time job is not a choice but a calculation...",
          correctReason: "原文明确说学费、房租、车费等现实开销迫使学生打工，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文并未说学生想当有名的店主。",
          wrongC: "无据：原文说工作教会课堂教不了的东西，并非课堂毫无课程。",
          wrongD: "相反：打工有报酬，原文从未提免费劳动。",
          errorType: "定位错误：考生须抓住not a choice but a calculation这一因果。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Part-time jobs should be completely forbidden for all students",
          "Students should never spend a single hour on paid work",
          "Part-time work brings real experience but can also harm study if unbalanced",
          "Employers should pay students twice the normal salary"
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段讲收入与经验的好处，第3段讲睡眠与成绩的代价，第4段讲双方协调。",
          correctReason: "全文既肯定兼职带来的经济与经验价值，又指出过度兼职会损害学习，主张二者平衡，C完整概括。",
          wrongA: "相反：作者主张协调而非禁止。",
          wrongB: "极端：原文承认兼职的现实必要性。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文未讨论薪水翻倍。",
          errorType: "主旨片面：考生勿因第3段困难而误选A，须兼顾第2段好处。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"reliability\" in Paragraph 2 is closest in meaning to ____.",
        options: [
          "the habit of arriving late and leaving early",
          "the quality of being trusted to finish what you start",
          "the skill of making angry customers laugh",
          "the ability to count money very fast"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：one who has counted a till at midnight learns reliability. These are the habits that employers later call \"experience.\"",
          correctReason: "深夜数收银机体现的是被托付、能完成任务的可靠，reliability即可靠性，B正确。",
          wrongA: "相反：迟到早退正是不可靠。",
          wrongB: "（本题B为正确答案）",
          wrongC: "偷换：让顾客发笑对应上文的patience，不是reliability。",
          wrongD: "片面：数钱快只是动作，reliability指长期可被信任的品质。",
          errorType: "词义窄化：考生勿把具体动作当成整词含义。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the measures taken by shops and colleges in Paragraph 4?",
        options: [
          "They prove that part-time jobs are unnecessary",
          "They suggest that students should give up their degrees",
          "They mean that sleep is no longer important for students",
          "They show that work and study can be arranged to support each other"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：Some shops now limit shifts during exam weeks; some colleges offer early classes so that students can work in the evening.",
          correctReason: "店铺限排班、学校调课时，双方为学生协调，可推出工作与学习可以被安排成互相支撑，D正确。",
          wrongA: "无据：这些措施是为了让兼职可持续，并非否定兼职。",
          wrongB: "相反：措施保护学生完成学位。",
          wrongC: "相反：第3段恰恰强调睡眠的重要。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理方向错误：考生须读出协调而非放弃。"
        }
      }
    ]
  },
  {
    id: "r086",
    title: "The First Desk by the Window",
    type: "成考标准",
    level: "D",
    category: "实习",
    wordCount: 315,
    text: "On his first morning, Xiao Chen carried a bag that held more books than tools. He had been told to report to a corner desk by the window, and for the first two hours he mostly stared out of that window. He was an intern: a student paid almost nothing, expected to know almost everything, and allowed to admit almost nothing.\n\nAn internship is a strange bridge. On one side stands the classroom, where questions have clear answers. On the other side stands the office, where the real question is usually which problem matters first. The intern's job is to cross from one side to the other without falling in the river in between. This is why many internships look, from the outside, like doing small errands, but from the inside are months of watching how adults actually work.\n\nThe best internships are not those that pay the most. They are those that give the young person real, if small, responsibility. A company that only makes its interns copy files learns nothing about them, and teaches them nothing. A company that lets an intern run one small report from start to finish, and then sits down to explain what was weak, has given more than any salary ever could.\n\nYet internships have also attracted criticism. Some companies treat interns as cheap labour, promising experience in exchange for endless coffee runs and photocopying. Such places collect bright faces but keep their doors closed. Students are warned in return to ask, before signing, who will review their work and what they will actually do.\n\nFor Xiao Chen, the window desk eventually became a place to learn how to ask. By the end of three months, he no longer stared outside; he was comparing two sets of numbers with a real question in his head. That change, more than any certificate, was what the internship was really for.",
    translation: "第一天早上，小陈拎着一个包，里面的书比工具还多。他被告知去窗边一张角落的桌子报到，头两个小时，他多半只是望着那扇窗外面发呆。他是一名实习生：几乎不拿薪水，却被期待什么都懂，又几乎什么都不能承认。\n\n实习是一座奇怪的桥。一头是课堂，那里的问题都有清楚的答案。另一头是办公室，那里真正的问题通常是\"哪一个问题才最该先解决\"。实习生的任务就是从这一头走到那一头，而不在中间那条河里掉下去。这就是为什么许多实习在外人看来像是跑跑腿，身在其中却是好几个月的时间，观察成年人究竟是怎样工作的。\n\n最好的实习，并不是薪水最高的那些。而是那些肯把哪怕很小的真实责任交到年轻人手里的实习。一家只让实习生复印文件的公司，既不了解他们，也教不会他们什么。一家让实习生从头到尾做完一份小小的报告，再坐下来指出哪里不足的公司，给的比任何薪水都多。\n\n然而实习也引来了批评。有些公司把实习生当成廉价劳动力，承诺用经验来交换没完没了的跑腿和复印。这样的地方收着一张张年轻的面孔，门却始终关着。学生们也被提醒：签约之前先问清楚，谁会点评你的工作，你实际会做什么。\n\n对小陈来说，那张窗边的桌子最终成了学习如何提问的地方。三个月结束时，他不再望着窗外发呆；他正在脑子里带着一个真正的问题，比较两组数字。这一变化，比任何一张证书都更贴近实习的真正目的。",
    questions: [
      {
        questionType: "信息定位题",
        question: "According to Paragraph 2, what is the difference between a classroom and an office for an intern?",
        options: [
          "The classroom pays more money than the office",
          "The classroom has clear answers while the office asks which problem matters first",
          "The office has no questions at all",
          "The classroom is where adults actually work"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：On one side stands the classroom, where questions have clear answers. On the other side stands the office, where the real question is usually which problem matters first.",
          correctReason: "原文直接对比：课堂问题有明确答案，办公室的真问题是哪个问题最优先，B准确复述。",
          wrongA: "无据：原文未比较课堂与办公室的报酬。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：办公室满是问题，只是没有标准答案。",
          wrongD: "相反：第2段说办公室才是成年人工作的地方。",
          errorType: "定位错误：考生须抓住where引导的两个定语从句。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the internships that only let interns copy files?",
        options: [
          "They are the best kind of internships available",
          "They pay the highest salary in the industry",
          "They help interns finish real reports quickly",
          "They offer little real learning to the interns"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：A company that only makes its interns copy files learns nothing about them, and teaches them nothing.",
          correctReason: "原文说这样的公司既不了解实习生，也教不会他们，可推出学到的真实东西很少，D正确。",
          wrongA: "相反：原文把这种公司作为反面例子。",
          wrongB: "无据：原文未把它们与最高薪水挂钩。",
          wrongC: "无据：只复印文件不可能让人独立完成报告。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理反向：考生勿把负面例子当作推荐做法。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 4, what are students advised to do before signing an internship contract?",
        options: [
          "Ask who will review their work and what they will actually do",
          "Accept any coffee run without asking questions",
          "Refuse every internship that promises no pay",
          "Copy as many files as possible on the first day"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Students are warned in return to ask, before signing, who will review their work and what they will actually do.",
          correctReason: "原文直接建议签约前问清谁来点评工作、实际做什么，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文批评的正是默默接受无尽跑腿。",
          wrongC: "无据：原文未说所有无薪实习都必须拒绝。",
          wrongD: "无据：首日复印文件被作为负面例子。",
          errorType: "定位错误：考生须抓住who will review与what they will actually do两问。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the function of the last paragraph in the passage?",
        options: [
          "It introduces a new topic about window desks",
          "It criticizes Xiao Chen for staring outside",
          "It brings the opening example to a close and shows the real point of an internship",
          "It lists the salary Xiao Chen received at the end"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：For Xiao Chen, the window desk eventually became a place to learn how to ask... That change, more than any certificate, was what the internship was really for.",
          correctReason: "末段回扣第1段\"望着窗外\"的小陈，以他的转变点明实习真正目的，起到首尾呼应、收束全文的作用，C正确。",
          wrongA: "无据：窗边桌子只是贯穿例子，并非新话题。",
          wrongB: "无据：作者并未批评小陈发呆。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：全文未提小陈的具体薪水。",
          errorType: "结构误判：考生须识别首尾呼应的写作手法。"
        }
      }
    ]
  },
  {
    id: "r087",
    title: "The Doctor Who Never Sees Patients",
    type: "成考标准",
    level: "D",
    category: "公共卫生",
    wordCount: 311,
    text: "Dr. Wang has a medical degree, yet in a whole week she may not examine a single patient. She does not write prescriptions, and she rarely holds a stethoscope. Instead, she looks at numbers: how many people caught a fever in one district last week, whether a school has clean water, why a particular illness is rising in a certain age group. She is a public health doctor, and her job is to keep the illness from arriving in the first place.\n\nMost people think of medicine as a white coat, a quiet room, and one doctor leaning over one patient. That picture is true, but it is only half the story. For every patient who is cured in a hospital bed, there are dozens who never become patients because something was changed earlier—a vaccine offered at school, a pipe repaired, a lesson taught to mothers. These quiet preventions save far more lives than the most famous operation, yet they happen in nobody's memory.\n\nPublic health work is therefore a science of crowds. It asks not \"why is this person ill?\" but \"why are so many people in this place ill?\" When the answer points to dirty water or crowded housing, the doctor cannot simply write a pill. She must talk to officials, publish reports, and argue for changes that may take years. The reward is not a single thank-you, but a neighborhood where the next generation grows up without the same illness.\n\nCritics sometimes call such work expensive and slow. Why spend money watching numbers, they ask, when a hospital bed feels so immediate? The answer lies in history. In the last century, long lives were added not mainly by curing the sick, but by stopping disease before it spread. A doctor who never sees a single face may, in the end, be the doctor who saves the most faces.",
    translation: "王医生有医学学位，可在一整个星期里，她也许都没给一位病人做过检查。她不开处方，也很少拿听诊器。她看的是数字：上周一个片区有多少人发烧，一所学校的水是否干净，某种病为什么在某个年龄段里上升。她是一名公共卫生医生，她的工作是让疾病从一开始就不来。\n\n大多数人对医学的想象是一件白大褂、一间安静的屋子，一位医生俯身面对一位病人。这幅画是真的，但它只是故事的一半。每有一位病人在病床上被治愈，就有几十位因为更早的某个改变而根本没有成为病人——学校提供的一针疫苗、修好的一根水管、教给母亲们的一堂课。这些安静的预防挽救的生命，比最有名的一台手术还多，却没有被任何人记住。\n\n因此，公共卫生是一门关于人群的科学。它不问\"这个人为什么生病？\"而问\"为什么这个地方这么多人都生病？\"当答案指向脏水或拥挤的住房，医生就不能简单地开一片药。她必须去和官员谈、去发表报告、去争取一些可能要花好几年的改变。她得到的回报不是某一句感谢，而是一个街区，让下一代在没有同一种病的环境里长大。\n\n批评者有时说这种工作昂贵又缓慢。他们问：一张病床看起来那么直接，为什么要把钱花在盯着数字上？答案藏在历史里。上一个世纪，人类寿命的延长，主要不是靠治好病人，而是靠在疾病蔓延之前就把它拦住。一位从未见过某张脸的医生，最终也许恰恰是救了最多脸的那位医生。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, what does Dr. Wang usually do in her weekly work?",
        options: [
          "She examines a hundred patients in a quiet room",
          "She writes prescriptions with a stethoscope around her neck",
          "She studies data on illnesses, water quality and age groups",
          "She performs famous operations in a hospital"
        ],
        correct: 2,
        explanation: {
          location: "原文第1段：she looks at numbers: how many people caught a fever in one district last week, whether a school has clean water, why a particular illness is rising in a certain age group.",
          correctReason: "原文明确说她看数字——发烧人数、学校水质、某病在某年龄段上升，C与原文一致。",
          wrongA: "相反：第1段说她一周可能不检查一位病人。",
          wrongB: "相反：原文说她不开处方、很少拿听诊器。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：著名手术在第2段是与公共卫生相对的画面。",
          errorType: "定位错误：考生须抓住looks at numbers后的三个并列举例。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Public health works quietly to prevent illness from reaching crowds",
          "Public health doctors should open their own hospitals",
          "Operations are less important than any vaccine",
          "Critics are completely wrong about medicine"
        ],
        correct: 0,
        explanation: {
          location: "全文：第1段介绍公卫医生看数字，第2段讲预防比治疗救人更多，末段回扣\"从未见过某张脸却救最多脸\"。",
          correctReason: "全文围绕公共卫生以人群为对象、靠早期预防救人的特点展开，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文并未建议公卫医生开私人医院。",
          wrongC: "绝对化：原文说预防救人更多，并非否定手术的价值。",
          wrongD: "绝对化：作者只是回应批评，未说批评者全错。",
          errorType: "主旨极端化：考生勿把比较关系读成一方完全无用。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"it\" in the last sentence \"stopping disease before it spread\" refers to ____.",
        options: [
          "the hospital bed that feels immediate",
          "the public health report published by Dr. Wang",
          "the long life added by a famous operation",
          "the disease that might have spread"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：...long lives were added not mainly by curing the sick, but by stopping disease before it spread.",
          correctReason: "it指代前文中的disease，即\"在疾病蔓延之前拦住它\"，D正确。",
          wrongA: "无据：病床不会\"蔓延\"。",
          wrongB: "无据：报告不会spread。",
          wrongC: "无据：长寿与手术都不是被\"拦住\"的对象。",
          wrongD: "（本题D为正确答案）",
          errorType: "指代回溯错误：考生须抓住stop disease before it spread的搭配。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward the work of public health doctors?",
        options: [
          "He doubts whether they really need a medical degree",
          "He respects their quiet contribution even though it is less visible",
          "He agrees with the critics that such work is a waste of money",
          "He believes they should replace hospital doctors completely"
        ],
        correct: 1,
        explanation: {
          location: "原文末句：A doctor who never sees a single face may, in the end, be the doctor who saves the most faces.",
          correctReason: "作者用\"救了最多脸\"的赞美之词收尾，明确肯定公卫医生不显眼却伟大的贡献，B正确。",
          wrongA: "无据：第1段说她有医学学位，并未质疑学位必要性。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：作者在末段反驳了批评者。",
          wrongD: "极端：作者只是强调预防价值，并未主张取代医院医生。",
          errorType: "态度误判：考生须识别末句的赞美语气。"
        }
      }
    ]
  },
  {
    id: "r088",
    title: "Tomatoes in the Space Between Buildings",
    type: "成考标准",
    level: "D",
    category: "社区花园",
    wordCount: 335,
    text: "Behind two tall apartment blocks lies a narrow patch of land that was once rubbish. Broken chairs lay beside a wall covered in posters. No one walked through it because there was nothing to walk to. Last spring, however, the residents of both blocks carried their own tools and changed it, one bag of soil at a time. Now it is a community garden: a few raised beds, a wooden bench, and tomatoes climbing up a stick.\n\nA community garden is, on the surface, a small thing. A few square metres of earth, a handful of plants, a sign with everyone's name. Yet cities are discovering that such small plots do work no balcony can do. They turn neighbours who only nod in the lift into people who water the same tomatoes together. They give children who have only seen vegetables in plastic a chance to pull a carrot from the dirt and understand where dinner begins.\n\nThe benefits go beyond food. Studies of city neighbourhoods have found that streets with a shared garden tend to know one another better, and neighbours look out for one another more after a garden appears. In a city where most doors lock all day, a garden is one of the few places where a door stands open by habit. Old people who sit alone for hours suddenly have a reason to step outside; teenagers looking for something to do are handed a watering can instead of a screen.\n\nOf course, such gardens need rules. Who waters when someone leaves for a holiday? Who decides what to plant? Without a simple agreement, a shared bed can become a shared argument. The gardens that last are usually the ones where neighbours meet, talk, and write down a short list together.\n\nThe tomatoes on the stick this autumn will be eaten by a hundred hands. But the real harvest may be quieter: a street that, for the first time, feels like a place people belong to rather than merely pass through.",
    translation: "在两栋高高的居民楼之间，有一块狭长的空地，曾经堆满垃圾。破椅子靠在贴满海报的墙边。没有人走过那里，因为那里没有可去的地方。然而去年春天，两栋楼的居民带上自己的工具，一袋土一袋土地改变了它。如今它成了一座社区花园：几张抬高的种植床、一条木长椅，还有顺着竹竿往上爬的番茄。\n\n一座社区花园，表面上看是件小事。几平方米的土地、一小把植物、一块写着所有人名字的牌子。然而城市发现，这样的小地块能做任何阳台都做不到的事。它们把只在电梯里点头的邻居，变成一起给番茄浇水的人。它们让只在塑料袋里见过蔬菜的孩子，有机会从泥土里拔出一根胡萝卜，明白晚餐从哪里开始。\n\n它的好处不止于食物。对城市街区的研究发现，有共享花园的街道，邻居彼此更熟悉，花园出现之后也更愿意互相照看。在一座大多数门整天紧锁的城市里，花园是少数几扇出于习惯而敞开的门之一。独自坐上好几个小时的老人，忽然有了走出门外的理由；无所事事的少年，被递来一把水壶，而不是一块屏幕。\n\n当然，这样的花园需要规则。有人去度假时谁来浇水？种什么由谁决定？没有一份简单的约定，一块共享的菜畦也可能变成一场共享的争吵。能长久存在的花园，往往是邻居们聚在一起聊过、一起写下一张简短清单的那些。\n\n秋天竹竿上的番茄，会被一百双手摘下来吃掉。但真正的收获也许更安静：一条街，第一次让人觉得是一个\"属于\"的地方，而不只是\"路过\"的地方。",
    questions: [
      {
        questionType: "推理题",
        question: "What can be inferred about the narrow patch of land before last spring?",
        options: [
          "It was a popular meeting place for children",
          "It had a wooden bench and climbing tomatoes",
          "It had been turned into a clean public park",
          "It was abandoned and regarded as rubbish by the residents"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：lies a narrow patch of land that was once rubbish. Broken chairs lay beside a wall... No one walked through it...",
          correctReason: "原文说那块地曾是垃圾、破椅靠墙、没人经过，可推出它被居民废弃、当作垃圾场，D正确。",
          wrongA: "相反：原文说没有人走过，孩子并无去处。",
          wrongB: "相反：木椅与番茄是改造后的样子。",
          wrongC: "相反：改造前它脏乱，并非干净公园。",
          wrongD: "（本题D为正确答案）",
          errorType: "时间混淆：考生须区分改造前后两种状态。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 3, what happens in a neighbourhood after a shared garden appears?",
        options: [
          "Most doors in the street are locked even more tightly",
          "Neighbours tend to know and look out for one another better",
          "Children are no longer allowed to step outside",
          "Teenagers spend more time alone with screens"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：Streets with a shared garden tend to know one another better, and neighbours look out for one another more after a garden appears.",
          correctReason: "原文直接给出花园出现后邻里更熟悉、更互相照看的结论，B与原文一致。",
          wrongA: "相反：花园是少数习惯敞开的门之一。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文说老人有了出门理由，并未禁止孩子外出。",
          wrongD: "相反：原文说少年被递水壶而不是屏幕。",
          errorType: "定位错误：考生须抓住know one another better与look out for one another more。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"harvest\" in the last paragraph is closest in meaning to ____.",
        options: [
          "the tomato that falls off the stick",
          "the lock that no longer works",
          "what is gained or produced as a result of the garden",
          "the rubbish thrown away by the residents"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：The tomatoes on the stick this autumn will be eaten by a hundred hands. But the real harvest may be quieter: a street that...",
          correctReason: "前句说番茄被一百双手吃掉，后句用But转折说\"真正的收获\"更安静，harvest此处为引申义\"成果、收获\"，C正确。",
          wrongA: "字面窄化：番茄只是表面收获，作者指的是更深层的社区关系。",
          wrongB: "无据：harvest与锁无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：垃圾是改造前的状态。",
          errorType: "词义引申误判：考生须读出But之后的比喻义。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "A small community garden can bring neighbours together and rebuild a sense of belonging",
          "Communities should replace all apartment blocks with gardens",
          "Tomatoes grow best when they climb up wooden sticks",
          "Rubbish should be thrown away by the city government"
        ],
        correct: 0,
        explanation: {
          location: "全文末句：...a street that, for the first time, feels like a place people belong to rather than merely pass through.",
          correctReason: "全文从一块垃圾地到社区花园，层层讲邻里关系与归属感的重建，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "极端：原文只是利用两楼间的空地，并非推倒居民楼。",
          wrongC: "片面：番茄只是细节意象，并非主旨。",
          wrongD: "无据：原文未要求政府清运垃圾。",
          errorType: "主旨片面：考生勿被\"垃圾\"\"番茄\"等细节带偏。"
        }
      }
    ]
  },
  {
    id: "r089",
    title: "Grandmother's Words That No Longer Fit on a Screen",
    type: "成考标准",
    level: "D",
    category: "方言保护",
    wordCount: 342,
    text: "Grandmother says a word that does not appear in any dictionary of the national language. It describes the exact feeling of warm rice porridge on a cold morning. The grandchild nods politely and then turns back to a phone whose keyboard has no key for it. This small everyday scene is the quiet story of dialects, the local ways of speaking that once made every valley sound like its own country.\n\nFor centuries, dialects were the natural music of home. A child learned one at his mother's knee, and another, if he ever left home, at school. As cities grew and railways joined distant towns, however, a common national language became a practical need. People who spoke different dialects could not understand each other in a single crowded train, so a shared language was taught in every classroom. This was useful, and it was also necessary.\n\nYet usefulness comes at a price. When the national language is the only one on television, on phones, and in textbooks, children start to treat their grandparents' speech as old-fashioned. They answer in the national language even when grandmother uses the dialect. Within a generation, the words for mist on the river, for the best way to dry bamboo, for the prayers of harvest—words carrying a whole local way of seeing the world—begin to disappear from the mouths of the young.\n\nLinguists warn that a lost dialect is not merely a missing accent. It is a library of observations: names for every kind of rain, expressions for the way grandparents comfort a crying child. When the last person who speaks it well dies, that library is burned.\n\nProtecting a dialect does not mean refusing the national language. It means giving children one more door: the door that lets them speak to grandmother fully, and remember exactly what she meant. Some towns now record old speakers and teach dialect songs in schools. The goal is not to freeze speech in time, but to make sure the words grandmother loves have somewhere to go after she is gone.",
    translation: "祖母说了一个词，它在任何一本国语词典里都查不到。它形容的是寒冷早晨一口热粥下肚的那种确切感觉。孙子礼貌地点点头，然后转回身去看手机，而那部手机的键盘上没有为这个词准备的按键。这个小小的日常场景，正是方言安静的故事——那些曾经让每一道山谷听起来都像一个独立王国的本地说法。\n\n几个世纪以来，方言是家天然的音乐。孩子在母亲膝边学会一种，若离开家乡，又在学校学另一种。然而随着城市扩大、铁路把遥远的城镇连在一起，一种共同的国语成了现实的需要。说着不同方言的人在同一列拥挤的火车上彼此听不懂，于是每间教室都教起了共同语。这有用，也是必要的。\n\n然而有用是有代价的。当国语是电视、手机和课本上唯一的语言，孩子们便开始把祖父母的话当作过时的东西。即使祖母用方言，他们也用国语回答。在一代人之间，那些形容河上薄雾、形容晒竹子最好方法、形容丰收时祈祷的词——那些承载着一整套本地世界观的词——开始从年轻人的嘴边消失。\n\n语言学家提醒说，失去一种方言，不只是少了一种口音。它是一座收藏着种种观察的图书馆：为每一种雨起的名字、祖辈安慰哭闹孩子的说法。当最后一个把它说好的人去世，这座图书馆也就被付之一炬。\n\n保护方言并不意味着拒绝国语。它意味着多给孩子一扇门：一扇让他们能完整地对祖母说话、准确记住她本意的门。如今有些镇子开始录下老人们的声音，在学校教方言歌谣。目标不是把语言冻结在时间里，而是确保祖母热爱的那些词，在她走后还有地方可去。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why did a common national language become necessary?",
        options: [
          "Because people from different dialect areas could not understand each other in crowded trains and cities",
          "Because grandmothers refused to speak their local dialect",
          "Because dictionaries of dialects had all been lost",
          "Because phones did not have enough keys"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：People who spoke different dialects could not understand each other in a single crowded train, so a shared language was taught in every classroom.",
          correctReason: "原文直接给出原因：不同方言者在拥挤火车上彼此听不懂，故需共同语，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：祖母仍说方言，是孩子不用。",
          wrongC: "无据：原文未提方言词典遗失。",
          wrongD: "偷换：手机没有那个按键是第1段的比喻，并非推广国语的原因。",
          errorType: "定位错误：考生须抓住so引出的因果句。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in mentioning \"a library of observations\" in Paragraph 4?",
        options: [
          "To suggest that all dialects should be written down in books",
          "To show that dialects are mainly useful for building libraries",
          "To prove that old people have bad memories",
          "To explain why losing a dialect means losing a whole way of seeing the world"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：It is a library of observations: names for every kind of rain, expressions for the way grandparents comfort a crying child.",
          correctReason: "作者用图书馆比喻方言承载的观察与生活智慧，旨在说明失去方言等于失去一整套世界观，D正确。",
          wrongA: "无据：作者并非主张把所有方言写成书。",
          wrongB: "字面误读：图书馆是比喻，并非真指建图书馆。",
          wrongC: "无据：原文未讨论老人记忆力。",
          wrongD: "（本题D为正确答案）",
          errorType: "修辞误判：考生须读出library是比喻，勿按字面理解。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the child in Paragraph 3 who answers in the national language?",
        options: [
          "He was forced by his school to forget the dialect completely",
          "He may gradually lose the dialect that grandmother speaks",
          "He will immediately become a famous linguist",
          "He prefers the dialect on television"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：They answer in the national language even when grandmother uses the dialect. Within a generation...words...begin to disappear from the mouths of the young.",
          correctReason: "孩子日常用国语回应，可推出一代人内方言会从他嘴边流失，B正确。",
          wrongA: "无据：原文说的是电视、手机、课本环境，并非学校强制遗忘。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文与语言学家成名无关。",
          wrongD: "相反：原文说国语是电视上唯一的语言。",
          errorType: "推理过度：考生须区分\"环境影响\"与\"强制命令\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"freeze\" in the last paragraph is closest in meaning to ____.",
        options: [
          "to keep speech alive by recording it",
          "to refuse to teach dialect songs in schools",
          "to stop speech from changing and developing",
          "to translate every dialect word into the national language"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：The goal is not to freeze speech in time, but to make sure the words grandmother loves have somewhere to go...",
          correctReason: "与but之后\"让词有地方可去\"相对，freeze in time指把语言凝固、不让它随时间变化，C正确。",
          wrongA: "相反：录音是作者支持的做法，不是freeze。",
          wrongB: "无据：原文未说拒绝教方言歌谣。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文讨论保护，不是逐词翻译。",
          errorType: "语境误判：考生须抓住not...but...的对比关系。"
        }
      }
    ]
  },
  {
    id: "r090",
    title: "The Letters That Follow You Home",
    type: "成考标准",
    level: "D",
    category: "网络暴力",
    wordCount: 339,
    text: "A teenager posts a short video to share a happy day. The next morning, hundreds of unkind comments wait for her. Some call her ugly; some warn her to disappear; a few repeat the same insult over and over, from accounts with no real name. She did not leave her room, yet she feels as if she has been shouted at in the street. This is cyberbullying, and it does not end when the screen goes dark.\n\nTraditional bullying, people used to think, was a schoolyard problem: a bigger child, a weaker one, a corner after class. It stopped when the bell rang and the victim walked home. Online, there is no bell. A message sent at midnight reaches a bedroom, a pocket, a watch on the wrist. The home that was once a safe room has, through the same screen, become another classroom where the voices never leave.\n\nResearchers have found that victims of repeated online insults often sleep badly, lose interest in hobbies they once loved, and begin to avoid school. The harm is not in the number of comments, but in their persistence. A cruel message in a physical room can be answered by walking away; a cruel message in a phone follows you from the bus to the dinner table to the bed.\n\nSchools and platforms have begun to act. Students are taught not to join a comment storm, even when it feels like a joke. Platforms now offer buttons to block an account, report a post, and step away. Yet these tools work only when bystanders choose to use them. Silence from those who watch—hundreds of people reading without acting—itself becomes a kind of encouragement.\n\nNo law can make a stranger kind. But a young person who is told, again and again, that the insults are not the truth, that the screen can be closed, and that walking away is allowed, is a young person much harder to hurt. The letters that follow you home, after all, were never addressed to your real name.",
    translation: "一个青少年上传了一段短视频，想分享开心的一天。第二天早上，几百条不友善的评论在等她。有人骂她丑，有人叫她消失，还有一些人用没有真实姓名的账号反复重复同一句侮辱。她并没有离开房间，却觉得像在街上被人当众呵斥。这就是网络暴力，而且屏幕熄灭之后它也不会结束。\n\n人们过去以为，传统的欺凌是校园问题：一个高大的孩子、一个弱小的孩子、课后的一个角落。铃声一响，受害者走回家，事情就停了。在网上，没有铃声。午夜发出的一条消息，能抵达卧室、口袋、手腕上的手表。家这个曾经安全的房间，通过同一块屏幕，变成了另一间声音永远不离开的教室。\n\n研究者发现，长期遭受网络侮辱的受害者常常睡不好，对曾经热爱的爱好失去兴趣，并开始逃避上学。伤害的大小，不在于评论的数量，而在于它们的纠缠不休。现实房间里一句刻薄的话，你走开就能回应；手机里一句刻薄的话，却跟着你从公交车跟到餐桌，再跟到床上。\n\n学校和平台已经开始行动。学生们被教导不要加入评论风暴，哪怕那看起来只是个玩笑。平台现在提供按钮，可以拉黑账号、举报帖子、退出页面。然而这些工具只有在旁观者愿意使用时才起作用。围观者的沉默——成百上千人只是看着却不行动——本身就成了一种鼓励。\n\n没有哪条法律能让一个陌生人变得善良。然而一个被反复告知的年轻人会更难被伤害：那些侮辱不是真相，屏幕可以关掉，走开是被允许的。毕竟，那些跟着你回家的信，从来不是写在你真名上的。",
    questions: [
      {
        questionType: "推理题",
        question: "What can be inferred from the comparison between traditional bullying and cyberbullying?",
        options: [
          "Traditional bullying is always more harmful than online bullying",
          "Online bullying can reach the victim even at home and never truly ends",
          "There is a bell that ends cyberbullying at midnight",
          "Victims of online bullying never sleep badly"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Online, there is no bell... The home that was once a safe room has, through the same screen, become another classroom where the voices never leave.",
          correctReason: "传统欺凌铃声一响就结束，而网络欺凌没有铃声、能追到家，可推出它即使在家也不停止，B正确。",
          wrongA: "无据：原文并未比较哪种欺凌伤害更大。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说Online, there is no bell。",
          wrongD: "相反：第3段说受害者常常睡不好。",
          errorType: "推理反向：考生须抓住no bell与voices never leave。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 3, what makes online insults especially harmful?",
        options: [
          "They keep following the victim through daily life and do not stop",
          "They are usually written in a foreign language",
          "They always come from the victim's best friends",
          "They are shorter than any offline message"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：The harm is not in the number of comments, but in their persistence... a cruel message in a phone follows you from the bus to the dinner table to the bed.",
          correctReason: "原文明确说伤害不在数量而在纠缠不休，跟着受害者从公交车到餐桌再到床上，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未提外语问题。",
          wrongC: "无据：评论来自匿名账号，并非好友。",
          wrongD: "无据：原文未比较消息长短。",
          errorType: "定位错误：考生须抓住not...but...强调persistence。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"them\" in \"these tools work only when bystanders choose to use them\" (Paragraph 4) refers to ____.",
        options: [
          "the unkind comments sent at midnight",
          "the students who join comment storms",
          "the buttons to block, report and step away",
          "the cruel messages that follow victims to bed"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段：Platforms now offer buttons to block an account, report a post, and step away. Yet these tools work only when bystanders choose to use them.",
          correctReason: "前句刚列出block/report/step away等按钮工具，them指代这些平台功能，C正确。",
          wrongA: "无据：评论不会被\"使用\"。",
          wrongB: "无据：学生是人，不是被使用的工具。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：刻薄消息是被举报的对象，不是被使用的工具。",
          errorType: "指代回溯错误：考生须把these tools与buttons挂钩。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward those who watch online insults without acting?",
        options: [
          "He praises them for staying calm",
          "He thinks they are the true victims",
          "He believes they should be legally punished",
          "He treats their silence as a kind of silent encouragement"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：Silence from those who watch—hundreds of people reading without acting—itself becomes a kind of encouragement.",
          correctReason: "作者明确指出旁观者的沉默本身就是一种鼓励，D准确传达作者态度。",
          wrongA: "相反：作者并不赞美这种沉默。",
          wrongB: "无据：原文未把旁观者称为真正的受害者。",
          wrongC: "无据：末段说没有法律能让陌生人善良，并未主张惩罚旁观者。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度极端化：考生勿把批评升级为法律惩罚。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_9 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_9 = READING_BATCH_9;
}
