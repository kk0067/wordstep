// 成人高考专升本英语阅读题库 第十批（最后一批）
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一至九批不重复）：抑郁症、睡眠障碍、马拉松、太极、茶道、书法、脱口秀、电竞、碳中和、她经济
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_10 = [
  {
    id: "r091",
    title: "When the Mind Goes Quiet for Too Long",
    type: "成考标准",
    level: "D",
    category: "抑郁症",
    wordCount: 291,
    text: "For most people, sadness arrives like rain and leaves like a cloud. A bad day passes, a good meal restores the appetite, and sleep comes back. But for some, the quiet does not lift. Morning arrives, yet the world stays grey, and even the smallest task—making tea, answering a message—feels heavier than it should. This is depression, and it is far more common than many admit.\n\nDepression is not ordinary sadness, and it is not a sign of weakness. Doctors describe it as a medical condition that affects mood, sleep, appetite, and concentration. It can be triggered by loss, by long stress at work, by a season of short days, or sometimes by nothing the patient can name. It does not ask whether a person is strong or busy; it can visit teachers, farmers, students, and parents alike.\n\nBecause it lives inside the mind, depression is often hidden. A person may smile at the office and still come home to an empty chair, staring at the wall for hours. Friends assume everything is fine because the face looks normal. Yet inside, the engine that used to drive interest in hobbies, friends, and weekends has slowly run out of fuel.\n\nThankfully, the old advice to \"cheer up\" has been replaced by something more useful. Treatment often combines talking with a trained professional and, when needed, medication that balances the chemicals involved in mood. Regular exercise, steady meals, and a regular sleep schedule also help more than many expect. No one recovers overnight, and relapse is common, but most people who seek support do feel lighter months later.\n\nThe greatest barrier is often silence. Saying the words \"I have not been myself lately\" is not giving up; it is the first door back.",
    translation: "对大多数人来说，悲伤像雨一样来临，又像云一样散去。糟糕的一天会过去，一顿好饭能恢复胃口，睡眠也会回来。但对有些人来说，那份沉重不会消散。早晨到了，世界却依然灰蒙蒙的，哪怕最小的事——泡杯茶、回条消息——也比本该的样子更沉重。这就是抑郁症，它比许多人承认的要常见得多。\n\n抑郁症不是普通的悲伤，也不是软弱的表现。医生把它描述为一种影响情绪、睡眠、食欲和注意力的疾病。它可能由失去、长期工作压力、白昼短暂的季节引发，有时也找不到患者说得清的原因。它不会先问一个人是否坚强或忙碌；教师、农民、学生、父母都可能被它找上。\n\n因为它藏在心里，抑郁症往往不被看见。一个人可能在办公室微笑，回家后却坐在空椅子前，盯着墙发呆好几个小时。朋友以为一切都好，因为脸上看起来正常。然而在内心，那台曾驱动着对爱好、朋友和周末的兴趣的引擎，已经慢慢熄了火。\n\n值得庆幸的是，过去\"开心一点\"的老建议，已被更有用的做法取代。治疗常常包括与受过训练的专业人员交谈，并在需要时辅以平衡情绪相关化学物质的药物。规律锻炼、稳定饮食和固定作息，效果也比许多人想象的更好。没有人一夜之间康复，复发也并不少见，但大多数寻求帮助的人，几个月后确实会感到轻松一些。\n\n最大的障碍往往是沉默。说出\"我最近不太像我自己\"并不是放弃，而是回到正常的第一扇门。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, how do doctors describe depression?",
        options: [
          "As a medical condition affecting mood, sleep, appetite and concentration",
          "As ordinary sadness that will disappear by itself",
          "As a sign of weakness that strong people never have",
          "As a disease caused only by short winter days"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：Doctors describe it as a medical condition that affects mood, sleep, appetite, and concentration.",
          correctReason: "原文直接给出医生对抑郁症的定义，即一种影响情绪、睡眠、食欲和注意力的疾病，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第1段说普通人的悲伤会散去，而抑郁症的沉重不会，二者不同。",
          wrongC: "相反：第2段明确说它不是软弱的表现。",
          wrongD: "以偏概全：白昼短暂只是可能诱因之一，并非唯一原因。",
          errorType: "定位错误：考生须抓住第2段\"medical condition\"后四个并列受影响方面。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about a person who smiles at the office but stares at the wall at home?",
        options: [
          "He is deliberately pretending to be happy at work",
          "His depression may be hidden from the people around him",
          "He simply prefers staying at home alone to working",
          "He has already fully recovered from his illness"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：A person may smile at the office and still come home to an empty chair, staring at the wall for hours. Friends assume everything is fine because the face looks normal.",
          correctReason: "表面微笑而内心呆滞，正说明旁人以为一切正常，抑郁症被隐藏起来，B可合理推出。",
          wrongA: "过度推断：原文并未说他在\"故意假装\"快乐，只说外表正常、内心沉重。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文未把这种状态描述为偏好独处。",
          wrongD: "相反：他正处于沉默与沉重之中，并未康复。",
          errorType: "推理过度：考生须区分\"隐藏症状\"与\"故意伪装\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"relapse\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "complete recovery without any return of symptoms",
          "taking medicine for the first time",
          "the illness returning after seeming to improve",
          "avoiding professional treatment on purpose"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段：No one recovers overnight, and relapse is common, but most people who seek support do feel lighter months later.",
          correctReason: "句意为\"没人一夜康复，relapse很常见，但寻求帮助者数月后会轻松些\"，与\"康复后又复发\"最吻合，C正确。",
          wrongA: "相反：完全不复发正是relapse的反面。",
          wrongB: "无据：首次服药与病情反复无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：relapse指病情本身的变化，不是刻意回避治疗。",
          errorType: "语境误判：考生须抓住\"recover overnight\"与\"feel lighter months later\"之间的对比。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward saying \"I have not been myself lately\"?",
        options: [
          "It should be avoided because it shows weakness",
          "It is useless advice offered by untrained friends",
          "It is a dangerous sign that treatment should stop",
          "It is a brave and useful first step toward recovery"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：Saying the words \"I have not been myself lately\" is not giving up; it is the first door back.",
          correctReason: "作者明确指出说出这句话不是放弃，而是回到正常的第一扇门，态度是鼓励和肯定，D准确传达。",
          wrongA: "相反：作者反对把它看作软弱。",
          wrongB: "相反：作者认为这句话有用，并非无用建议。",
          wrongC: "相反：作者主张寻求帮助，而非停止治疗。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度误判：考生须抓住末段\"not giving up\"与\"first door back\"的肯定语气。"
        }
      }
    ]
  },
  {
    id: "r092",
    title: "What Happens When the Night Refuses to Let You Sleep",
    type: "成考标准",
    level: "D",
    category: "睡眠障碍",
    wordCount: 320,
    text: "The clock beside the bed reads 3:12 a.m. The room is dark, the body is tired, yet the mind is wide awake. This is not an occasional bad night. For millions of adults, lying awake while the rest of the world sleeps has become a regular affair. Doctors call this condition insomnia, and it deserves more attention than it usually receives.\n\nMost people think insomnia simply means \"not sleeping enough.\" In fact, it is judged by more than the number of hours. A person may lie in bed for eight hours but wake up several times, feel unrefreshed in the morning, and struggle to focus at work. Sleep experts explain that sleep has stages: light sleep, deep sleep, and the stage in which dreams occur. Cutting these stages short night after night affects memory, mood, and the body's ability to repair itself.\n\nThe causes are as varied as the patients themselves. Stress at work, an unsettled mind, heavy coffee late in the day, or a bedroom too bright and too warm can all keep sleep away. Screens, in particular, have been blamed. The light from a phone may tell the brain that the day has not ended, delaying the signal that prepares the body for rest.\n\nYet insomnia is not always best treated with pills. Doctors first suggest simple changes: a regular bedtime, a cooler room, no screens for an hour before bed, and a short walk in daylight. When these do not work, talking therapy that examines the fears and habits tied to the bed often succeeds where medicine alone fails. The aim is not a perfect eight hours every night, but nights from which one wakes feeling restored.\n\nSleep, in the end, is not wasted time. It is the hour in which the brain quietly files away the day, and a society that treats it as a luxury often pays the price in tired employees and shorter tempers.",
    translation: "床头的钟指着凌晨3点12分。房间很暗，身体很累，头脑却异常清醒。这不是偶尔一个糟糕的夜晚。对数百万成年人来说，在世界沉睡时独自醒着，已经成了常事。医生把这种状况称为失眠，它值得比平时更多的关注。\n\n多数人以为失眠只是\"睡得不够\"。事实上，判断失眠不能只看小时数。一个人可能在床上躺了八小时，却一夜醒来好几次，早上仍觉不解乏，工作中难以集中注意力。睡眠专家解释说，睡眠分几个阶段：浅睡、深睡，以及做梦的阶段。夜复一夜地把这些阶段切断，会影响记忆、情绪和身体的自我修复能力。\n\n原因和患者本人一样五花八门。工作压力、心绪不宁、傍晚喝了太多咖啡，或卧室太亮太暖，都可能把睡眠挡在门外。手机屏幕尤其常被指责。屏幕发出的光可能告诉大脑：白天还没结束，从而推迟身体准备休息的信号。\n\n然而失眠并不总是最好靠药物来解决。医生首先建议做些简单改变：固定的就寝时间、凉一点的房间、睡前一小时不看屏幕，以及在白天散一小会儿步。当这些不奏效时，通过谈话疗法检查与床有关的恐惧和习惯，往往能取得单纯用药达不到的效果。目标不是每晚完美睡足八小时，而是醒来时感到恢复了精力。\n\n说到底，睡眠不是被浪费的时间。它是大脑悄悄整理白天记忆的时光；而一个把睡眠当成奢侈品的社会，往往要为疲惫的员工和更急躁的脾气付出代价。",
    questions: [
      {
        questionType: "细节题",
        question: "According to sleep experts, why is lying in bed for eight hours not enough to judge sleep quality?",
        options: [
          "Because eight hours is considered too long for most adults",
          "Because sleep has different stages that may be cut short",
          "Because the clock beside the bed often shows the wrong time",
          "Because dreaming only happens after midnight"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Sleep experts explain that sleep has stages: light sleep, deep sleep, and the stage in which dreams occur. Cutting these stages short night after night affects memory, mood...",
          correctReason: "专家指出睡眠分浅睡、深睡和做梦阶段，若各阶段被反复打断，即便躺八小时也不解乏，B准确说明原因。",
          wrongA: "无据：原文并未说八小时太长。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：时钟走时错误与睡眠质量判断无关。",
          wrongD: "无据：原文未说做梦只发生在午夜之后。",
          errorType: "定位错误：考生须回到第2段\"sleep has stages\"这一关键句。"
        }
      },
      {
        questionType: "细节题",
        question: "Why have phone screens been blamed for poor sleep, according to the passage?",
        options: [
          "The light may signal the brain that the day has not ended",
          "Phones make the bedroom too warm and too bright",
          "Phones always play loud music after midnight",
          "Phone batteries usually run out at night"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段末：The light from a phone may tell the brain that the day has not ended, delaying the signal that prepares the body for rest.",
          correctReason: "原文指出手机光线可能告诉大脑白天尚未结束，推迟入睡信号，A与原文完全一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "张冠李戴：卧室太亮太暖是另一诱因，并非手机屏幕被指责的原因。",
          wrongC: "无据：原文未说手机午夜后播放吵闹音乐。",
          wrongD: "无据：原文未提电池在夜间耗尽。",
          errorType: "信息错位：考生须区分手机光线问题与卧室环境问题。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the doctor's first choice of treatment for insomnia?",
        options: [
          "They always advise taking sleeping pills at once",
          "They prefer simple habit changes before medication",
          "They believe insomnia cannot be treated at all",
          "They require every patient to sleep eight hours exactly"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：Doctors first suggest simple changes: a regular bedtime, a cooler room, no screens...",
          correctReason: "医生首先建议固定作息、调整环境等简单改变，药物和谈话疗法在此之后，可推断他们偏好先调整习惯再用药，B正确。",
          wrongA: "相反：第4段首句说失眠不总是最好靠药片。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文明确给出多种有效方法。",
          wrongD: "相反：末句说目标并非每晚完美八小时。",
          errorType: "推理方向错误：考生须抓住\"first suggest\"与\"when these do not work\"的先后顺序。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of the passage?",
        options: [
          "Insomnia is a common problem with practical solutions beyond pills",
          "Everyone should sleep exactly eight hours every night",
          "Phones are the only cause of all sleep problems",
          "Pills are the best cure for all kinds of insomnia"
        ],
        correct: 0,
        explanation: {
          location: "全文：第2段讲睡眠阶段，第3段讲诱因，第4段讲先调整习惯再考虑药物。",
          correctReason: "全文既指出失眠普遍，又说明其判断标准、诱因与以习惯调整为先的疗法，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：末句说目标并非完美八小时。",
          wrongC: "片面：手机只是被指责的原因之一，并非唯一原因。",
          wrongD: "相反：第4段明确说药物并非首选。",
          errorType: "主旨片面：考生若只看第3段易误选C，须把握全文\"原因+非药物优先\"主线。"
        }
      }
    ]
  },
  {
    id: "r093",
    title: "Why Thousands Run Twenty-Six Miles for No Prize",
    type: "成考标准",
    level: "D",
    category: "马拉松",
    wordCount: 334,
    text: "On a cold Sunday morning, a city wakes up to find its main streets closed. Tens of thousands of runners line up at a starting line, wearing numbers on their chests. Most of them are not fast enough to win anything. In fact, the first runner will finish long before the last one has covered even half the distance. Yet they keep coming back, year after year, to run a marathon.\n\nA marathon is a race of about forty-two kilometers. The distance comes from an old story about a soldier who ran from a battlefield to carry a message of victory, then fell silent. Modern runners do not run for a message of war; they run for reasons they find hard to explain to their non-running friends. Some want to prove they can finish what they started. Some want a goal that takes months of quiet training. A few simply want to see a city from a road that is usually full of cars.\n\nThe training itself is often harder than the race. A runner may spend five months building up from three kilometers to thirty, running in rain, in wind, and before the sun rises. Along the way, knees ache, shoes wear out, and mornings feel too cold to leave a warm bed. This slow preparation is where the real change happens: a person learns to show up even when enthusiasm fades.\n\nOn race day, the crowd along the route does something no solo training can. Strangers clap, children hand out cups of water, and a band plays on a corner. By the thirty-fifth kilometer, when the legs feel like wood, that noise carries runners forward more than any personal will. Cross the line, and the medal around the neck is less important than the quiet thought: I did it.\n\nNo one needs a medal to live. But many runners say the marathon does not change their body as much as it changes the story they tell themselves about what they can finish.",
    translation: "一个寒冷的周日清晨，一座城市醒来时发现主干道已经封闭。数以万计的跑者在起跑线上排成一列，胸前别着号码。他们当中大多数人快不到能赢任何东西。事实上，第一名冲线时，最后一名可能才跑完一半的距离。然而他们年复一年地回来，跑一场马拉松。\n\n马拉松是一场约四十二公里的赛跑。这个距离源自一个古老的故事：一名士兵从战场跑回传递胜利的消息，随后倒在地上不再作声。现代跑者奔跑并非为了传递战报；他们为的是那些难以向不跑步的朋友解释的理由。有人想证明自己能完成开始过的事；有人想要一个需要数月默默训练的目标；还有人只是想从一条平时挤满汽车的道路上看看这座城市。\n\n训练本身往往比比赛更艰难。一名跑者可能花五个月从三公里加到三十公里，在雨里、风里、太阳升起之前奔跑。一路上，膝盖会疼，鞋子会磨坏，清晨冷得让人不愿离开暖和的被窝。正是在这种缓慢的准备中，真正的改变发生了：一个人学会在热情褪去时依然出现。\n\n比赛当天，赛道边的人群做着任何独自训练都做不到的事。陌生人为你鼓掌，孩子们递来水杯，街角有乐队在演奏。到了第三十五公里，当双腿像木头一样沉重时，那些声响比任何个人意志更能推着跑者前进。冲过终点线时，挂在脖子上的奖牌，远不如那句安静的念头重要：我做到了。\n\n没有人活着需要一块奖牌。但许多跑者说，马拉松改变的与其说是身体，不如说是他们对\"自己能完成什么\"所讲的那个故事。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, where does the distance of a marathon come from?",
        options: [
          "A story about a soldier running to carry a message of victory",
          "The average distance people walk in one month",
          "A rule set by modern car manufacturers",
          "The length of the longest city street in the world"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：The distance comes from an old story about a soldier who ran from a battlefield to carry a message of victory, then fell silent.",
          correctReason: "原文明确指出马拉松距离源自士兵从战场奔跑传递捷报的古老故事，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未提及月平均步行距离。",
          wrongC: "无据：与汽车制造商无关。",
          wrongD: "无据：并非世界最长城市街道的长度。",
          errorType: "定位错误：考生须抓住第2段\"comes from an old story\"这一来源句。"
        }
      },
      {
        questionType: "推理题",
        question: "What does the author suggest about the training period?",
        options: [
          "It is the easiest part of running a marathon",
          "It builds determination when enthusiasm fades",
          "It requires no effort after the first month",
          "It is less important than race day itself"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：This slow preparation is where the real change happens: a person learns to show up even when enthusiasm fades.",
          correctReason: "作者指出缓慢训练中真正的改变发生了——在热情褪去时仍坚持到场，即培养了毅力，B正确。",
          wrongA: "相反：第3段首句说训练比比赛更艰难。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：训练要持续五个月，辛苦且漫长。",
          wrongD: "相反：作者强调训练才是真正改变发生的地方。",
          errorType: "推理方向错误：考生须区分\"训练苦\"与\"训练塑造人\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"that noise\" in Paragraph 4 refers to ____.",
        options: [
          "the heavy sound of runners' tired legs",
          "the loud ringing of the starting bell",
          "the cheers, music and crowds along the route",
          "the traffic on the closed city streets"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段：Strangers clap, children hand out cups of water, and a band plays on a corner... that noise carries runners forward...",
          correctReason: "that noise承接上文陌生人鼓掌、孩子递水、乐队演奏，指赛道边人群的欢呼与音乐，C正确。",
          wrongA: "无据：腿沉不是声音来源，原文说腿像木头。",
          wrongB: "无据：起点铃声在比赛开始时，与第35公里无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：街道是封闭的，并无交通噪音。",
          errorType: "指代错误：考生须就近往前找clap、band等并列名词。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To explain why ordinary people take on the hard challenge of a marathon",
          "To prove that marathon winners are always the fastest runners",
          "To advise readers to stop running in cold weather",
          "To compare marathon medals with other sports prizes"
        ],
        correct: 0,
        explanation: {
          location: "全文标题与末段：...the marathon does not change their body as much as it changes the story they tell themselves about what they can finish.",
          correctReason: "全文从普通人参赛动机、训练磨砺到冲线体验，回答\"为什么普通人要跑四十二公里\"，A准确传达目的。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第1段说大多数人快不到能赢。",
          wrongC: "无据：作者并未建议停止在冷天跑步。",
          wrongD: "无据：末段说奖牌本身不重要，未与其他运动奖品比较。",
          errorType: "主旨偏移：考生须区分\"解释普通人参赛\"与\"讨论赢家或奖牌\"。"
        }
      }
    ]
  },
  {
    id: "r094",
    title: "The Slow Art of Moving Tea from Pot to Cup",
    type: "成考标准",
    level: "D",
    category: "茶道",
    wordCount: 338,
    text: "In a room with plain wooden walls, a woman lifts a small pot with both hands and pours a thin stream of hot water into a cup. There is no hurry. The water is heated to a temperature she knows by heart, the leaves were measured to a gram, and every movement takes as long as it needs. This is a tea ceremony, a practice that turns an ordinary drink into a kind of silent performance.\n\nThe roots of the tea ceremony stretch back centuries, when tea was first traded along distant roads and later became part of quiet gatherings among scholars. Over time, it developed rules: how to clean the bowl, how to greet the guests, how to pour so that the last drop falls exactly right. These rules are not empty formality. They are meant to hold the present moment still, so that the people in the room forget the day's worries and attend only to the warmth in their hands.\n\nWestern visitors are often surprised by how little tea is actually drunk. A ceremony may last an hour, during which the guest sips only a few times. What matters is not the amount but the attention: the smell of the steamed powder, the sound of water, the way the light falls on the bowl. In a culture that measures meetings by their speed, this deliberate slowness feels almost rebellious.\n\nCritics argue that such a ceremony is too difficult for modern life. A working person, they say, cannot prepare a fire, grind leaves, and sit still for an hour every morning. Yet teachers of the art reply that its value lies not in the full ceremony but in the habit it trains. Taking one slow minute to notice a cup, they say, already carries the spirit into a rushed day. A hurried person who pauses for one thoughtful sip has, in a small way, begun the practice.\n\nThe tea itself, after all, was never the whole point. The point was the pause between two busy lives.",
    translation: "在一间墙壁朴素的木屋里，一位女子双手举起一把小壶，把一线细而热的水注入杯中。没有人着急。水温她凭经验就知道，茶叶按克称好，每个动作都从容不迫地完成。这就是茶道——一种把普通饮品变成无声表演的修行。\n\n茶道的根源可追溯到数百年前，那时茶叶最初沿着遥远的道路被贩运，后来成为文人安静聚会的一部分。随着时间推移，它形成了规矩：如何洁碗、如何迎客、如何斟茶使最后一滴恰到好处地落下。这些规矩并非空洞的形式。它们的用意是让当下这一刻静止下来，让屋内的人忘掉整日的烦忧，只专注于手心的暖意。\n\n西方访客常惊讶于真正喝下去的茶少得可怜。一场仪式可能持续一小时，客人只小口喝上几次。重要的不是量，而是注意力：蒸茶粉的香气、水的声音、光落在茶碗上的样子。在一个以速度衡量会面的文化里，这种刻意的缓慢几乎带有反叛的意味。\n\n批评者说，这样的仪式对现代生活太难。他们说，一个上班族不可能每天早晨生火、磨叶、静坐一小时。然而茶道老师回应说，它的价值不在于完整仪式，而在于它训练的习惯。他们说，哪怕只花缓慢的一分钟去注意一只杯子，也已把这种精神带进了匆忙的一天。一个匆忙的人若能停下来用心品一口茶，便已在小小的意义上开始了这门修行。\n\n说到底，茶本身从来不是全部的意义。意义在于两段忙碌人生之间的那次停顿。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what are the rules of the tea ceremony meant to do?",
        options: [
          "To make the ceremony as short as possible",
          "To hold the present moment still and free guests from daily worries",
          "To ensure that guests drink as much tea as possible",
          "To prove that the host is a better trader than the guests"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：They are meant to hold the present moment still, so that the people in the room forget the day's worries and attend only to the warmth in their hands.",
          correctReason: "原文明确说茶道规矩意在让当下静止，使屋内人忘记烦忧、专注手心暖意，B准确复述。",
          wrongA: "相反：第3段说一场仪式可能持续一小时，并不追求简短。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第3段说真正喝下去的茶很少。",
          wrongD: "无据：与主人、客人的交易能力无关。",
          errorType: "定位错误：考生须抓住第2段\"meant to\"后的目的状语。"
        }
      },
      {
        questionType: "推理题",
        question: "Why does the author call the deliberate slowness of tea \"almost rebellious\"?",
        options: [
          "Because it breaks the modern habit of valuing speed",
          "Because it is against the law of the country",
          "Because it teaches guests to shout at each other",
          "Because it replaces every other tradition"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：In a culture that measures meetings by their speed, this deliberate slowness feels almost rebellious.",
          correctReason: "在以速度衡量一切的现代文化中，刻意的缓慢显得近乎反叛，即它打破了\"越快越好\"的习惯，A可推出。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未涉及任何法律问题。",
          wrongC: "无据：茶道强调安静专注，并非教人对人喊叫。",
          wrongD: "无据：原文未说它取代其他传统。",
          errorType: "推理过度：rebellious是比喻，指与快节奏文化相悖，并非真的违法或对抗。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"deliberate\" in Paragraph 3 is closest in meaning to ____.",
        options: [
          "quick and careless",
          "slowly and on purpose",
          "loud and noisy",
          "expensive and rare"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：In a culture that measures meetings by their speed, this deliberate slowness feels almost rebellious.",
          correctReason: "deliberate修饰slowness，与\"以速度衡量\"形成对比，意为\"有意为之、从容不迫\"，B正确。",
          wrongA: "相反：匆忙粗心与deliberate相反。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：茶道强调安静，与吵闹无关。",
          wrongD: "无据：原文讨论节奏，与昂贵稀有无关。",
          errorType: "语境误判：考生须抓住\"slowness\"与\"speed\"的对照。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward a hurried person who pauses for one thoughtful sip?",
        options: [
          "The author thinks it is a small but meaningful start",
          "The author considers it a complete waste of time",
          "The author believes it proves the ceremony is useless",
          "The author demands that such a person attend a full ceremony"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：A hurried person who pauses for one thoughtful sip has, in a small way, begun the practice.",
          correctReason: "作者认为哪怕匆忙的人停下来用心品一口，也已在小小的意义上开始了修行，态度是肯定与鼓励，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：作者认为它有价值，并非浪费时间。",
          wrongC: "相反：作者借此说明完整仪式之外的价值。",
          wrongD: "相反：老师明确说价值不在完整仪式。",
          errorType: "态度误判：考生须抓住\"in a small way, begun the practice\"的肯定语气。"
        }
      }
    ]
  },
  {
    id: "r095",
    title: "The Brush, the Ink, and the Patient Hand",
    type: "成考标准",
    level: "D",
    category: "书法",
    wordCount: 336,
    text: "On a folded sheet of paper, a young student lowers a brush until its tip just touches the surface. A breath is held. Then, with one slow pull, a single line of black ink appears—thick where the hand presses, thin where it rises. This is the first lesson of calligraphy, an art in which the quality of a line matters more than the meaning of the words it forms.\n\nCalligraphy has long been treated not merely as writing but as a mirror of the person. In the tradition from which it grew, a scholar's character was read from his handwriting before his words were read. A trembling line showed uncertainty; a steady, generous stroke suggested confidence. Even today, students who practice it say that their calligraphy changes as their mood does—angry hands make sharp, nervous lines, while calm hands make rounded, patient ones.\n\nThe tools themselves demand respect. The ink stick is ground against a stone with water, drop by drop, for ten or fifteen minutes, rather than simply poured from a bottle. The brush is made of animal hair tied to a bamboo handle, and its soft tip can hold more ink than it seems. To use them well, a student must sit straight, breathe evenly, and move from the shoulder rather than the wrist. Such details sound unimportant until one notices how they train the whole body to wait.\n\nCritics say calligraphy is out of date in an age of keyboards. Why spend fifteen minutes grinding ink when a typed letter appears in a second? Yet teachers reply that the very point is the waiting. A screen gives instant words; the brush gives a relationship with time. In a life of messages that arrive and vanish, the inked line remains, a mark that a human hand was present, breathing and slow.\n\nNo one expects every child to become a master. But a generation that never touches wet ink may lose the sense that a single well-made line can hold a whole person inside it.",
    translation: "在一张折好的纸上，一名年轻学生把毛笔落下，直到笔锋刚刚碰到纸面。他屏住呼吸。接着，随着缓慢的一笔拉出，一道墨线出现了——手下按时粗，提笔时变细。这就是书法的第一课：在这门艺术里，线条的质量比它所构成的文字含义更重要。\n\n书法长期以来不只是书写，更被视为书写者的一面镜子。在它所源自的传统中，学者的品格先被人从笔迹里读出，然后才读他写下的文字。颤抖的线条显出犹豫；沉稳而宽厚的笔画流露出自信。即使在今天，练习书法的学生也说，字随心境而变——愤怒的手写出尖利、紧张的线条，平静的手写出圆润、耐心的线条。\n\n工具本身也要求人尊重。墨锭要蘸着水在砚台上一滴一滴地磨上十到十五分钟，而不是从瓶里直接倒出。毛笔由兽毛扎在竹柄上制成，柔软的笔锋能含住比看起来更多的墨。要使用好这些工具，学生必须坐直、呼吸均匀，用肩带动而非仅靠手腕。这些细节看似无关紧要，直到你注意到它们如何训练整个身体去等待。\n\n批评者说，在键盘时代，书法已经过时。为什么磨十五分钟墨，而一封信一秒钟就能打完？然而老师回应说，重点恰恰在于等待。屏幕给出即时的文字；毛笔给出一段与时间的关系。在一个消息来了又走的时代，墨迹长存——它标记着：一只人手曾在场，呼吸着，缓慢着。\n\n没有人指望每个孩子都成为大师。但一个从未碰过湿墨的世代，可能会失去这样一种感受：一条写好的线条里，能装下一个完整的人。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what did people in the tradition of calligraphy use to read from a scholar's handwriting?",
        options: [
          "The scholar's character before his words",
          "The price of the paper he used",
          "The number of lines he wrote",
          "The color of the ink he bought"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：In the tradition from which it grew, a scholar's character was read from his handwriting before his words were read.",
          correctReason: "原文明确说传统中人们先从笔迹读出学者的品格，然后才读他的文字，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未提纸张价格。",
          wrongC: "无据：写字行数与读字无关。",
          wrongD: "无据：墨色深浅可反映情绪，但并非人们从中读出品格的依据。",
          errorType: "定位错误：考生须抓住第2段\"character was read...before his words\"。"
        }
      },
      {
        questionType: "细节题",
        question: "Why does a student have to grind ink for ten to fifteen minutes instead of using bottled ink?",
        options: [
          "Because bottled ink is forbidden by law",
          "Because the passage suggests the waiting itself is part of the training",
          "Because ground ink costs much less than bottled ink",
          "Because no bottles can be opened by students"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：The ink stick is ground...for ten or fifteen minutes... 及第4段：the very point is the waiting.",
          correctReason: "磨墨的等待与第4段\"重点在于等待\"相呼应，说明研磨过程本身就是训练的一部分，B正确。",
          wrongA: "无据：原文未提及法律禁止瓶装墨。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文未比较价格。",
          wrongD: "无据：原文未说学生不能开瓶。",
          errorType: "信息错位：考生须把第3段磨墨细节与第4段\"waiting\"主旨关联。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the comparison between a typed letter and a brush line?",
        options: [
          "Typing a letter is always a dishonest act",
          "Brush writing gives a slower, more human relationship with time",
          "A typed letter disappears more slowly than ink",
          "Keyboards should be thrown away at once"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：A screen gives instant words; the brush gives a relationship with time. In a life of messages that arrive and vanish, the inked line remains...",
          correctReason: "屏幕给出即时文字，毛笔则让人建立与时间的关系，墨迹长存而消息易逝，可推出毛笔书写提供了更慢、更具人文感的时间体验，B正确。",
          wrongA: "无据：作者并未说打字不诚实。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说消息来了又走，墨迹长存。",
          wrongD: "极端：作者并未主张扔掉键盘。",
          errorType: "推理过度：考生须区分\"毛笔重等待\"与\"否定打字\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"generous\" in Paragraph 2 (\"a steady, generous stroke\") is closest in meaning to ____.",
        options: [
          "narrow and sharp",
          "giving away money freely",
          "wide and ample",
          "trembling with fear"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：A trembling line showed uncertainty; a steady, generous stroke suggested confidence.",
          correctReason: "与trembling line颤抖形成对比，generous stroke指笔画宽厚开阔，与confidence呼应，C正确。",
          wrongA: "相反：窄而尖利与generous相反。",
          wrongB: "双关误读：此处generous修饰笔画，不是指花钱大方。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：颤抖恐惧是trembling line所表现的。",
          errorType: "词义双关误判：考生须根据stroke（笔画）这一语境判断generous指形态而非金钱。"
        }
      }
    ]
  },
  {
    id: "r096",
    title: "Standing Alone on the Stage",
    type: "成考标准",
    level: "D",
    category: "脱口秀",
    wordCount: 330,
    text: "Under a single warm light, a man walks to the microphone, holds it with both hands, and waits for the room to go quiet. He has no band, no props, no partner. His only material is his own life: the awkward date, the rude customer, the way his mother calls him every Sunday. This is stand-up comedy, a form in which one person stands alone and makes strangers laugh at things they usually only suffer in silence.\n\nStand-up is older than it looks. Its ancestors were the speakers who stood on street corners, telling jokes to whoever would stop. What makes modern stand-up different is its honesty. A comic does not play a character; he plays an exaggerated version of himself. The joke about a bad job is funny because many in the audience have held one. The laughter that follows is recognition more than surprise: we are not alone in this.\n\nYet the profession is harder than it appears. Before a comic earns a paid stage, he may spend years testing jokes in tiny rooms where five people have come to drink rather than to listen. A joke that kills one night may die the next, and the comic must learn which lines belong to which crowd. Success is not measured by a single great night but by the slow narrowing of a list: cutting the weak jokes, repeating the strong ones, and watching the stage grow brighter year by year.\n\nCritics say stand-up has become too rude, crossing lines that used to protect an audience. Defenders reply that the stage is precisely where such lines can be tested—with the safety that the audience can always leave. The best comics, they note, turn the spotlight on themselves first, admitting their own weaknesses before they touch anyone else's.\n\nA stand-up show is, in the end, a shared agreement: for one hour, strangers may laugh at the things that hurt, and leave the theatre a little lighter than they came in.",
    translation: "在一束温暖的灯光下，一名男子走向麦克风，双手握住它，等待房间安静下来。他没有乐队，没有道具，也没有搭档。他唯一的素材就是自己的生活：尴尬的约会、粗鲁的顾客、母亲每个周日打来的电话。这就是脱口秀——一个人独自站着，让陌生人对那些他们通常只能默默忍受的事发笑。\n\n脱口秀比看上去更古老。它的祖先就是站在街角、对任何愿意停下的人讲笑话的那些人。让现代脱口秀不同的，是它的诚实。喜剧演员不是在扮演一个角色；他扮演的是夸张版的自己。关于烂工作的笑话之所以好笑，是因为观众里许多人都干过那样的工作。随之而来的笑，更多是认出，而非意外：原来我们都不是一个人。\n\n然而这一行比看上去更难。在挣到一个付费舞台之前，他可能要花好几年在小房间里测试笑话，那里只有五个人来喝酒，而不是来听。一个今晚大获成功的笑话，明晚可能冷场，演员必须学会哪些台词属于哪群观众。成功不是用一个辉煌之夜来衡量的，而是靠一份清单慢慢收窄：剪掉弱笑话，重复强笑话，看着舞台一年年变亮。\n\n批评者说，脱口秀变得太粗俗，越过了过去保护观众的界线。辩护者回应说，舞台恰恰是测试这些界线的地方——而且观众随时可以安全离场。他们指出，最好的喜剧演员先把聚光灯对准自己，在触碰别人之前先承认自己的弱点。\n\n说到底，脱口秀演出是一份共同的约定：在一小时里，陌生人可以对那些令人难过的事发笑，走出剧场时比进来时轻松一点。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what makes modern stand-up different from its street-corner ancestors?",
        options: [
          "It always uses a full band and stage props",
          "It performs only for silent audiences who never laugh",
          "It relies on the comic's honest, exaggerated self rather than a character",
          "It requires no microphone and no stage at all"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：What makes modern stand-up different is its honesty. A comic does not play a character; he plays an exaggerated version of himself.",
          correctReason: "原文明确说现代脱口秀的不同在于诚实，演员演的是夸张版的自己而非角色，C与原文一致。",
          wrongA: "相反：第1段说他没有乐队、没有道具。",
          wrongB: "无据：观众是会笑的，并非从不笑。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文第1段说他手持麦克风站在舞台上。",
          errorType: "定位错误：考生须抓住第2段\"does not play a character\"这一对比。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about why a joke about a bad job is funny?",
        options: [
          "It describes events that no one in the room has ever lived",
          "It depends on loud music played between every line",
          "It is always about politicians and famous film stars",
          "It echoes working experiences the audience recognizes from their own lives"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：The joke about a bad job is funny because many in the audience have held one. The laughter...is recognition more than surprise.",
          correctReason: "作者指出笑来自\"认出\"而非\"意外\"，即观众在笑话里看到了自己的经历，D可推出。",
          wrongA: "相反：原文说许多观众都干过那样的工作。",
          wrongB: "无据：原文说没有乐队，并非靠音乐逗笑。",
          wrongC: "无据：素材是演员自己的日常，不是政客和影星。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理方向错误：考生须区分\"陌生意外\"与\"认出共鸣\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"kills\" in Paragraph 3 (\"A joke that kills one night may die the next\") is closest in meaning to ____.",
        options: [
          "makes the audience leave in anger",
          "breaks the comedian's microphone",
          "succeeds loudly and wins strong laughter",
          "causes the comedian to feel deeply sad"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：A joke that kills one night may die the next...cutting the weak jokes, repeating the strong ones.",
          correctReason: "kills与die形成对比，并与\"strong ones\"相呼应，指当晚大获成功、赢得满堂笑，C正确。",
          wrongA: "相反：观众愤怒离场与\"成功\"相反。",
          wrongB: "无据：原文未提麦克风损坏。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：kills描述笑话的现场效果，不是演员情绪。",
          errorType: "语境误判：考生须抓住kill与die的反义对照。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of Paragraph 4?",
        options: [
          "It lists the full names of famous stand-up comedians",
          "It teaches readers how to buy cheap tickets",
          "It proves that all comedy is dangerous",
          "It presents and responds to criticism about what the stage may joke about"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：Critics say stand-up has become too rude... Defenders reply that the stage is precisely where such lines can be tested...",
          correctReason: "第4段先摆出批评者的\"太粗俗\"观点，再由辩护者回应，功能是呈现并回应争议，D准确概括。",
          wrongA: "无据：第4段未列举任何喜剧演员姓名。",
          wrongB: "无据：与购票无关。",
          wrongC: "过度：原文只讨论内容界线，并未说喜剧本身危险。",
          wrongD: "（本题D为正确答案）",
          errorType: "段落功能误判：考生须识别\"Critics say... Defenders reply...\"的辩论结构。"
        }
      }
    ]
  },
  {
    id: "r097",
    title: "When Sitting at a Desk Becomes a Sport",
    type: "成考标准",
    level: "D",
    category: "电竞",
    wordCount: 318,
    text: "In a stadium holding thousands of people, two teams sit in front of glowing screens. The players wear headsets, their fingers moving so fast that the eye can hardly follow. A huge screen above them shows the battle inside the game, and the crowd roars as a single move turns the match. This is an e-sports final, and it has left many older viewers confused: how can sitting still be a sport?\n\nThe confusion comes from what we mean by \"sport.\" Traditionally, sport demanded running, jumping, and sweat. E-sports players sit, yet the skills they need are far from easy. They must read a fast-changing battlefield, react in milliseconds, and cooperate with four teammates under enormous pressure. Studies of top players have shown that their hands can move several times a second, and their decision-making under stress is as sharp as that of athletes in older games.\n\nThe industry has grown quickly. Leagues now sign players to long contracts, broadcast matches around the world, and offer scholarships to skilled teenagers. For the first time, a child who is not the fastest runner in the class can dream of a professional future without leaving a desk. That promise has changed families as much as players: parents who once saw games as a waste of time now watch their son's matches on a live stream.\n\nYet questions remain. Doctors warn that long sitting, late nights, and endless screens strain the eyes, back, and sleep. Players who retire in their early twenties must then build a second career at an age when others are only starting their first. The industry, still young, has not fully solved how to protect the people it depends on.\n\nWhether e-sports will be called an Olympic event one day is less important than the reality already here: for millions of young people, a desk and a headset have become a stage as real as any field.",
    translation: "在一座容纳数千人的体育场里，两支队伍坐在发光的屏幕前。选手戴着耳机，手指快得眼睛几乎跟不上。头顶的大屏幕播放着游戏里的战斗，一个操作扭转战局时，观众爆发出欢呼。这就是一场电竞决赛，它让许多年长观众困惑：坐着不动怎么能算一项运动？\n\n困惑来自我们对\"运动\"的定义。传统上，运动需要奔跑、跳跃和汗水。电竞选手确实坐着，但他们所需的技能一点也不轻松。他们必须读懂瞬息万变的战场，在毫秒间做出反应，并在巨大压力下与四名队友配合。对顶尖选手的研究显示，他们的手每秒可以移动好几次，在压力下的决策，与传统项目运动员一样敏锐。\n\n这个行业成长迅速。联盟如今与选手签长期合同，向全世界转播比赛，还为有天赋的青少年提供奖学金。第一次，一个不是班上跑得最快的孩子，也可以不离开书桌就梦想职业未来。这一承诺既改变了选手，也改变了家庭：曾经把游戏视为浪费时间的父母，如今会在直播里看儿子的比赛。\n\n然而问题依然存在。医生警告说，久坐、熬夜和无尽的屏幕会损害眼睛、背部和睡眠。二十出头就退役的选手，不得不在别人刚开始第一份事业的年纪，去建立第二段职业。这个年轻的行业，还没有完全解决如何保护它所依赖的人。\n\n电竞有一天会不会被列为奥运项目，远不如已经到来的现实重要：对数百万年轻人来说，一张书桌和一副耳机，已经成了和任何赛场一样真实的舞台。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what skills do e-sports players need?",
        options: [
          "They must run faster than traditional athletes",
          "They need only good eyesight and no teamwork",
          "They must lift heavy weights before each match",
          "They must read a fast-changing game, react quickly and cooperate with teammates"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：They must read a fast-changing battlefield, react in milliseconds, and cooperate with four teammates under enormous pressure.",
          correctReason: "原文连续列出三项能力：读懂瞬息万变的战局、毫秒级反应、与队友配合，D完整覆盖。",
          wrongA: "相反：第1段说他们坐着不动。",
          wrongB: "相反：原文强调要与四名队友配合。",
          wrongC: "无据：与举重训练无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住第2段三个并列动词read/react/cooperate。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the attitude of some parents toward e-sports?",
        options: [
          "All parents forbid their children from playing games",
          "Parents prefer their children to run in stadiums rather than sit at a desk",
          "Some parents have changed from seeing games as a waste to watching their children's matches",
          "Parents no longer care about their children's careers at all"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：parents who once saw games as a waste of time now watch their son's matches on a live stream.",
          correctReason: "曾经视游戏为浪费时间的父母如今看儿子直播比赛，可推出部分家长态度发生了转变，C正确。",
          wrongA: "极端：原文只说曾经反对，并非所有父母一直禁止。",
          wrongB: "无据：原文未比较跑步与电竞的偏好。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：父母看比赛正说明他们在意。",
          errorType: "推理过度：考生须区分\"曾经反对\"与\"一直禁止\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"strain\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "damage or weaken through overuse",
          "protect and care for carefully",
          "reward and praise generously",
          "heal and restore completely"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Doctors warn that long sitting, late nights, and endless screens strain the eyes, back, and sleep.",
          correctReason: "医生警告久坐、熬夜和屏幕会怎样眼睛、背部和睡眠，结合语境strain意为\"过度使用而损伤\"，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：保护与医生警告的方向相反。",
          wrongC: "无据：与奖励表扬无关。",
          wrongD: "相反：治愈恢复与strain相反。",
          errorType: "语境误判：考生须抓住doctors warn这一负面语境。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's overall attitude toward e-sports?",
        options: [
          "He fully rejects e-sports as a completely fake activity",
          "He believes e-sports will replace all traditional sports",
          "He thinks teenagers should retire from e-sports immediately",
          "He acknowledges both its real popularity and its unsolved health problems"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段讲行业成长，第4段讲医生警告与退役问题，末段承认其舞台真实。",
          correctReason: "作者既写电竞已成为数百万年轻人真实的舞台，又指出久坐、退役早等未解决问题，态度是辩证承认两面，D准确。",
          wrongA: "相反：末段明确说舞台真实。",
          wrongB: "极端：原文未说取代所有传统运动。",
          wrongC: "相反：作者讨论问题，并未要求青少年立即退役。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度误判：考生须区分\"批评健康问题\"与\"全盘否定\"。"
        }
      }
    ]
  },
  {
    id: "r098",
    title: "The Long Road to a Cooler Planet",
    type: "成考标准",
    level: "D",
    category: "碳中和",
    wordCount: 316,
    text: "The term appears in nearly every speech by a world leader these days: carbon neutrality. It sounds technical, yet its meaning is simple. To be carbon neutral is to balance the amount of carbon dioxide released into the air with an equal amount removed from it. In other words, the net addition to the atmosphere becomes zero. Every country, city, and large company has begun to ask how it will reach this balance, most often by a date around mid-century.\n\nThe reason for the hurry is no secret. Carbon dioxide traps heat in the air, and decades of burning coal, oil, and gas have raised the planet's average temperature. The effects are no longer distant reports: longer droughts, stronger storms, and coasts that sit a little higher each year. Scientists agree that stopping further rise requires not small cuts but a deep change in how societies produce and use energy.\n\nReaching neutrality has two sides. The first is to cut emissions at the source—by driving electric cars, insulating homes, and switching power plants from coal to wind and sunlight. The second is to absorb what cannot yet be cut, by planting forests, restoring wetlands, and experimenting with machines that catch carbon directly from the air. Neither side is optional; a plan that only plants trees while still burning coal is a plan that will not hold.\n\nCritics argue that the cost is too high for developing nations that still need cheap energy. Supporters reply that the cost of doing nothing—lost harvests, flooded cities, and millions of displaced people—would be far higher. They point out that the price of wind and sunlight has fallen so sharply that clean energy is now often the cheaper choice, not the dearer one.\n\nNo country will reach zero alone. But the quiet truth is that the same energy system that warms the planet can, if rebuilt wisely, also cool it again.",
    translation: "如今，这个词几乎出现在每一位世界领导人的演讲中：碳中和。它听起来技术性很强，含义却很简单。所谓碳中和，就是把排放到空气中的二氧化碳量，与从空气中移除的等量二氧化碳相平衡。换句话说，大气中的净增量为零。每个国家、城市和大公司都已开始追问自己将如何实现这一平衡，目标日期大多定在本世纪中叶前后。\n\n匆忙的原因已不是秘密。二氧化碳会把热量困在空气中，而数十年燃烧煤炭、石油和天然气，已使地球平均气温上升。其影响不再是远方的报道：更长的干旱、更强的风暴，以及每年升高一点点的海岸线。科学家一致认为，要阻止进一步上升，需要的不是小幅削减，而是社会生产和使用能源方式的深刻变革。\n\n实现碳中和有两个方面。其一是从源头削减排放——开电动车、给房屋保温、把发电厂从煤炭改为风和阳光。其二是吸收暂时无法削减的部分，方法包括植树、恢复湿地，以及试验直接从空气中捕捉碳的机器。两者缺一不可；一个只种树却仍在烧煤的计划，是站不住脚的。\n\n批评者说，对仍需要廉价能源的发展中国家而言，代价太高。支持者回应说，什么都不做的代价——歉收、被淹的城市、数百万流离失所者——会高得多。他们指出，风和阳光的价格已大幅下跌，清洁能源如今往往是更便宜的选择，而不是更贵的那个。\n\n没有哪个国家能独自实现零排放。但一个安静的事实是：曾经让地球变暖的同一套能源系统，如果被明智地重建，也能让它重新凉下来。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, what does \"carbon neutrality\" mean?",
        options: [
          "Using only wood for all energy needs",
          "Stopping all industrial activity by mid-century",
          "Banning all cars from city streets",
          "Balancing carbon released with carbon removed so the net addition is zero"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：To be carbon neutral is to balance the amount of carbon dioxide released into the air with an equal amount removed from it...the net addition to the atmosphere becomes zero.",
          correctReason: "原文直接定义碳中和为排放与移除相平衡、净增量为零，D与原文一致。",
          wrongA: "无据：与只烧木材无关。",
          wrongB: "极端：原文说的是转型能源，不是停止一切工业。",
          wrongC: "片面：原文只是提到电动车，并非禁止所有汽车。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住第1段\"net addition...becomes zero\"这一定义句。"
        }
      },
      {
        questionType: "细节题",
        question: "Why is reaching neutrality described as having \"two sides\"?",
        options: [
          "Because it depends on whether it is summer or winter",
          "Because it must be completed twice a year",
          "Because it requires cutting emissions at the source and absorbing what remains",
          "Because it affects only the richest nations"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：The first is to cut emissions at the source... The second is to absorb what cannot yet be cut...",
          correctReason: "第3段用first/second列出两条路径——源头削减与吸收残余，C准确概括。",
          wrongA: "无据：与季节无关。",
          wrongB: "无据：并非一年做两次。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：末段说没有哪个国家能独自实现。",
          errorType: "信息错位：考生须抓住第3段first/second两条路径。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the price of clean energy from Paragraph 4?",
        options: [
          "It is always more expensive than fossil fuels",
          "It is fixed by world leaders each year",
          "It has nothing to do with government policy",
          "It has dropped enough to often be the cheaper choice"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：the price of wind and sunlight has fallen so sharply that clean energy is now often the cheaper choice, not the dearer one.",
          correctReason: "原文明确说风电光电价格大幅下跌，清洁能源如今常是更便宜的选择，D可直接推出。",
          wrongA: "相反：原文说cleaner choice cheaper。",
          wrongB: "无据：价格由市场决定，并非领导人年度定价。",
          wrongC: "无据：原文未说与政策无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理方向错误：考生须抓住\"fallen so sharply\"与\"cheaper choice\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"absorb\" in Paragraph 3 is closest in meaning to ____.",
        options: [
          "release into the atmosphere",
          "take in and hold (carbon dioxide)",
          "measure with scientific instruments",
          "sell on the open market"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：The second is to absorb what cannot yet be cut, by planting forests...machines that catch carbon directly from the air.",
          correctReason: "后面解释为通过植树、机器直接从空气中捕捉碳，可知absorb意为\"吸收并持有二氧化碳\"，B正确。",
          wrongA: "相反：释放到大气中正是要避免的。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文讨论吸收碳，不是测量。",
          wrongD: "无据：与市场买卖无关。",
          errorType: "语境误判：考生须抓住\"catch carbon directly from the air\"这一同义解释。"
        }
      }
    ]
  },
  {
    id: "r099",
    title: "The Slow Shadow That Follows You",
    type: "成考标准",
    level: "D",
    category: "太极",
    wordCount: 336,
    text: "In a park before sunrise, a group of people moves as if through water. One arm rises like a wave; another sinks like a leaf. Their knees are bent, their weight shifts slowly from one leg to the other, and no sound is made except the birds. This is tai chi, a martial art that has forgotten how to fight—or rather, it has chosen to fight only against weakness, stiffness, and stress.\n\nTai chi was born in China centuries ago, rooted in the idea that a soft force can overcome a hard one. Its forms are slow sequences of poses, each flowing into the next without pause. Unlike a gym class, where the goal is to push the body harder, tai chi asks the body to listen: to notice where the shoulder has climbed toward the ear, where the breath has caught, where the mind has raced ahead.\n\nHospitals have become interested in it for a quiet reason. Because the movements are gentle and the breathing is steady, tai chi puts little stress on the joints while still training balance and focus. Older adults who practice it regularly have been found to fall less often—a benefit that matters more than any weight lifted, since a single fall can change an older person's life. The practice also asks the mind to stay in the present, which is why many describe it as moving meditation.\n\nCritics, especially those raised on fast sports, ask why anyone should sweat so little. They compare it to walking slowly around a room. Teachers answer that the comparison misses the point. Walking is automatic; tai chi is deliberate. The same slow arm that looks simple is, in fact, a precise study of balance, and years of practice reveal layers that a first glance hides.\n\nNo one masters tai chi quickly. A student may spend ten years on the first few forms and still be asked to slow down. In a culture that rewards speed, that slowness may be the hardest lesson of all.",
    translation: "日出前的公园里，一群人动作得像在水中穿行。一条手臂像波浪般升起，另一条像树叶般落下。他们屈膝，重心缓慢地从一条腿移到另一条腿，除了鸟鸣，别无杂音。这就是太极——一门已经忘记如何打斗的武术，或者说，它选择只与软弱、僵硬和压力作斗争。\n\n太极诞生于数百年前的中国，其根基在于\"柔能克刚\"的理念。它的套路是一连串缓慢的姿势，一个接一个不间断地流动。健身课的目标是把身体推得更狠，而太极则请身体去倾听：注意肩膀何时耸向了耳朵，呼吸在哪里卡住了，心思又跑到了多远之前。\n\n医院对它产生兴趣，原因安静而实在。因为动作柔和、呼吸平稳，太极几乎不给关节增加负担，却仍在训练平衡与专注。研究发现，规律练太极的老年人更少跌倒——这种益处比举起多重的东西都重要，因为一次跌倒就能改变一位老人的生活。太极还要求心神停在当下，这就是为什么许多人把它形容为\"动中冥想\"。\n\n批评者，尤其是那些从小练快节奏运动的人，问为什么出这么少汗。他们把它比作在房间里慢走。老师回答说，这种比较没说到点上。走路是自动的；太极是有意识的。那看似简单的慢手臂，其实是对平衡的精密研究，多年练习才能展开第一眼所藏的层次。\n\n没有人能很快掌握太极。一个学生可能在头几个套路上花上十年，仍被要求再慢一点。在一个奖励速度的文化里，那份慢，也许才是最难的一课。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what is the central idea behind tai chi?",
        options: [
          "A hard force must always win in combat",
          "Speed is the key to every martial art",
          "A soft force can overcome a hard one",
          "Fighting is the only purpose of any martial art"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：Tai chi was born in China centuries ago, rooted in the idea that a soft force can overcome a hard one.",
          correctReason: "原文直接给出太极的核心理念——柔能克刚，C与原文一致。",
          wrongA: "相反：原文说柔能克刚，并非刚必胜。",
          wrongB: "相反：太极强调慢，而非速度。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第1段说它已选择只与软弱僵硬作斗争。",
          errorType: "定位错误：考生须抓住第2段\"rooted in the idea\"这一核心句。"
        }
      },
      {
        questionType: "细节题",
        question: "Why have hospitals become interested in tai chi?",
        options: [
          "Because it makes patients sweat heavily",
          "Because it replaces all forms of surgery",
          "Because it cures all diseases in a single week",
          "Because it trains balance gently and helps older adults fall less"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：...tai chi puts little stress on the joints while still training balance and focus. Older adults who practice it regularly have been found to fall less often...",
          correctReason: "医院看重的是太极柔和不伤关节、训练平衡并减少老人跌倒，D准确概括。",
          wrongA: "相反：第4段说批评者问为什么出这么少汗。",
          wrongB: "无据：原文未说取代手术。",
          wrongC: "无据：原文未说一周治愈百病。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须回到第3段hospitals have become interested之后的原因。"
        }
      },
      {
        questionType: "推理题",
        question: "What does the comparison \"walking is automatic; tai chi is deliberate\" suggest?",
        options: [
          "Tai chi is exactly the same as casual walking",
          "Tai chi requires conscious attention to each movement",
          "Walking is clearly better exercise than tai chi",
          "Tai chi must always be performed in complete silence"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：Walking is automatic; tai chi is deliberate. The same slow arm that looks simple is, in fact, a precise study of balance...",
          correctReason: "deliberate与automatic相对，说明太极要求对每个动作有意识地关注，B正确。",
          wrongA: "相反：老师正是在反驳\"太极像走路\"的比较。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文并未评价走路更好。",
          wrongD: "无据：与是否绝对安静无关。",
          errorType: "推理方向错误：考生须抓住automatic与deliberate的反义对照。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of the passage?",
        options: [
          "Tai chi is a fast sport suitable for young athletes only",
          "Tai chi should replace every hospital treatment",
          "Tai chi is a slow, deliberate practice that trains both body and mind",
          "Tai chi is no different from a casual walk in the park"
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段讲柔能克刚与倾听身体，第3段讲平衡与动中冥想，第4段讲有意识的练习。",
          correctReason: "全文围绕太极\"慢而有意识\"展开，既练平衡呼吸，又训练当下专注，C完整概括。",
          wrongA: "相反：太极慢，且老人也练。",
          wrongB: "极端：医院只是对它感兴趣，并非取代所有治疗。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第4段老师明确反驳这种比较。",
          errorType: "主旨片面：考生须把握\"身体+心神\"双线，勿被第4段批评者带偏。"
        }
      }
    ]
  },
  {
    id: "r100",
    title: "The Rise of the Wallet That Decides",
    type: "成考标准",
    level: "D",
    category: "她经济",
    wordCount: 331,
    text: "For decades, advertising was written as if the family's money spent itself. A man stood in the kitchen, a woman handed him a product, and the choice was made. That picture has faded. Today, women in many countries not only earn their own incomes but also make the majority of household spending decisions—from the family car to the children's education, from the weekly shopping to the next holiday. Marketers have given this shift a name: the she economy.\n\nThe she economy is not simply about women buying more. It is about companies finally noticing what women actually want. For years, products were designed by men for men, and women were expected to adjust. A laptop too heavy to carry, a handbag too small for a water bottle, a car built without a single cup holder in the back—these small signs told half the population that the market was not built for them. That is now changing. New brands design clothing for real bodies, banking apps that a nurse can use between shifts, and travel packages planned around the lives women actually lead.\n\nThe change reaches beyond shopping. Because women control so much spending, their preferences shape whole industries. Health food, fitness, home decoration, and language courses have all grown faster in directions chosen by women. Politicians have also noticed: policies on childcare, paid leave, and safety on public transport are debated more loudly when the voters they affect can decide the next election.\n\nYet the she economy has limits. It works best where women have equal pay and safe conditions at work. A woman cannot spend freely if she earns less than a man beside her, or if she is expected to hand over her salary. The real power of the trend, then, is not only better products on shelves but a slow push toward equality itself.\n\nThe wallet, in the end, has always been a vote. The she economy is the sound of half the population finally making itself heard.",
    translation: "数十年来，广告的写法仿佛家里的钱会自己花出去。男人站在厨房里，女人把产品递给他，选择就完成了。那幅画面已经褪色。如今，许多国家的女性不仅自己挣钱，还主导着家庭大部分开支决定——从家用车到孩子的教育，从每周采购到下一次度假。营销人员给这一转变起了个名字：她经济。\n\n她经济不只是女性买得更多。它意味着公司终于开始注意女性真正想要什么。多年来，产品由男性为男性设计，女性被期待去适应。一台重得拎不动的笔记本电脑、一个装不下水瓶的手提包、一辆后座连一个杯架都没有的汽车——这些小小的信号告诉一半人口：市场不是为她们造的。如今这正在改变。新品牌为真实的身材设计服装，为护士换班间隙可用而设计银行应用，围绕女性真实的生活设计旅行套餐。\n\n这种变化超出购物本身。因为女性控制着如此大的开支，她们的偏好塑造着整个行业。健康食品、健身、家居装饰和语言课程，都沿着女性选择的方向更快地成长。政客们也注意到了：育儿、带薪休假、公共交通安全等政策，在它们所影响的选民能够决定下一次选举时，被讨论得更加响亮。\n\n然而她经济有其限度。它在女性拥有同工同酬和安全工作条件的地方才能最好地发挥作用。如果女性挣得比身边的男性少，或被要求上交工资，她就无法自由消费。因此，这一趋势真正的力量，不仅是货架上更好的产品，更是对平等本身的缓慢推动。\n\n说到底，钱包一直都是一张选票。她经济，就是半数人口终于发出自己声音的动静。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what is the \"she economy\"?",
        options: [
          "An economy run entirely by women politicians",
          "A shop that sells only products for women",
          "A tax system designed to punish men",
          "The shift in which women earn incomes and make most household spending decisions"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：women...not only earn their own incomes but also make the majority of household spending decisions...Marketers have given this shift a name: the she economy.",
          correctReason: "原文在第1段末尾用冒号定义她经济：女性自己挣钱并主导家庭大部分开支决定，D与原文一致。",
          wrongA: "无据：她经济讲的是消费，不是女性政客执政。",
          wrongB: "无据：并非只卖女性用品的商店。",
          wrongC: "无据：与惩罚男性的税制无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住第1段冒号前的this shift所指。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about products designed \"by men for men\"?",
        options: [
          "They often ignored women's real daily needs",
          "They were always cheaper than other products",
          "They were sold only through online stores",
          "They were carefully designed for women's bodies"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：products were designed by men for men, and women were expected to adjust...these small signs told half the population that the market was not built for them.",
          correctReason: "后文举的笔记本过重、包太小、车没有杯架等例子，都说明这些产品忽视了女性真实的日常需求，A可推出。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未比较价格。",
          wrongC: "无据：原文未限定销售渠道。",
          wrongD: "相反：原文说由男性为男性设计。",
          errorType: "推理方向错误：考生须把举例与\"market not built for them\"挂钩。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"shift\" in Paragraph 1 (\"Marketers have given this shift a name\") is closest in meaning to ____.",
        options: [
          "a work schedule that runs at night",
          "a small mistake made in advertising",
          "a short trip taken by car",
          "a change or movement from one state to another"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：That picture has faded. Today, women...not only earn their own incomes but also make the majority of household spending decisions...Marketers have given this shift a name.",
          correctReason: "this shift承接上文\"过去画面褪色、今天女性自己挣钱并主导开支\"的变化，意为状态的改变，D正确。",
          wrongA: "多义干扰：shift有\"轮班\"之意，但此处指变化。",
          wrongB: "无据：并非广告错误。",
          wrongC: "无据：与驾车出行无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "多义误判：考生须用this shift的就近指代（过去vs今天的对比）来锁定词义。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward the she economy?",
        options: [
          "He believes it is only a short-term advertising trick",
          "He argues women should hand over salaries to husbands",
          "He sees it as a positive trend tied to equality, with real limits",
          "He believes it will seriously harm men's spending"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段：Yet the she economy has limits...The real power of the trend...is...a slow push toward equality itself.",
          correctReason: "作者既指出她经济有现实限度（同工同酬、工作条件），又肯定其推动平等的力量，态度辩证积极，C准确。",
          wrongA: "相反：末段说钱包是选票，并非短期花招。",
          wrongB: "相反：第4段反对女性被要求上交工资。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文未说损害男性消费。",
          errorType: "态度误判：考生须抓住第4段Yet转折后的辩证语气。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_10 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_10 = READING_BATCH_10;
}
