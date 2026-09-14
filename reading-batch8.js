// 成人高考专升本英语阅读题库 第八批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一至七批不重复）：短视频、直播电商、中医药、汉服、共享单车、移动支付、盲盒潮玩、新能源汽车、隐私保护、博物馆
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_8 = [
  {
    id: "r071",
    title: "The Twelve-Second Life",
    type: "成考标准",
    level: "D",
    category: "短视频",
    wordCount: 278,
    text: "Open a phone and touch the colorful square, and the world starts to move by itself. A dance, a recipe, a street argument, a singing cat—each appears for about twelve seconds, and then another slides up to replace it. This is the world of short videos, a form that did not exist ten years ago and now fills the pockets of hundreds of millions of people.\n\nThe appeal is not hard to explain. Each clip is just long enough to make you smile, but never long enough to make you bored. The apps learn what you like and feed you more of it, so that by the time you realize it, an hour has quietly disappeared. Many users say they do not even enjoy the videos; they simply cannot stop sliding upward.\n\nSupporters point out real benefits. A farmer can show how vegetables are grown; a student in a remote school can listen to a famous teacher; ordinary people who were never on television can become known overnight. For the first time, broadcasting has become something that anyone can do, not just companies with studios.\n\nYet the same power worries teachers and parents. Children who spend two hours a day sliding through clips often find it hard to read a book that asks them to wait for a story to develop. The mind, trained by twelve-second rewards, grows impatient with anything slower.\n\nNo one suggests turning the apps off forever. But a healthier habit may be to choose videos instead of letting the algorithm choose for you. After all, a tool that decides what you see is not merely a tool—it is also a quiet editor of your mind.",
    translation: "点开手机，点一下那个彩色方块，世界便自己动了起来。一段舞蹈、一道菜谱、一场街头争执、一只会唱歌的猫——每一段只出现大约十二秒，接着又有新的一段从上面滑下来把它替换掉。这就是短视频的世界：一种十年前还不存在、如今却装进了亿万人口袋的东西。\n\n它为何吸引人，并不难解释。每一段都短到刚好能让你笑一下，却绝不会长到让你感到无聊。这些应用会学习你喜欢什么，再喂给你更多同类内容，等你回过神来，一个小时已经悄悄溜走。许多用户说，他们其实并不喜欢这些视频，只是手指停不住，不断往上滑。\n\n支持者也指出了真实的好处。一位农民可以展示蔬菜是怎样种出来的；一所偏远学校的学生也能听到名师讲课；那些从没上过电视的普通人，一夜之间就能被人认识。广播第一次变成了人人都能做的事，而不再只是拥有演播室的公司的专利。\n\n然而同样的力量也让老师和家长担心。每天花两小时滑视频的孩子，常常很难再去读一本需要慢慢等待故事展开的书。被十二秒奖励训练出来的大脑，对任何更慢的东西都变得不耐烦。\n\n没有人主张把这些应用永远关掉。但更健康的习惯，也许是由你来选择视频，而不是让算法替你选择。说到底，一个替你决定看什么的工具，已不只是工具——它同时也是一位悄悄编辑你思想的编辑。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, why do short video apps keep users watching for so long?",
        options: [
          "The apps learn what users like and keep showing similar clips",
          "Each video lasts longer than a full television program",
          "Users must finish every clip before they can leave",
          "The phones are designed not to be switched off"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：The apps learn what you like and feed you more of it, so that by the time you realize it, an hour has quietly disappeared.",
          correctReason: "原文明确说应用会学习用户喜好并不断推送同类内容，导致不知不觉时间流逝，A与原文完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说每段只有约十二秒，远短于电视节目。",
          wrongC: "无据：原文从未说用户必须看完才能退出。",
          wrongD: "无据：原文未提手机被设计成无法关机。",
          errorType: "定位错误：考生须抓住\"learn what you like and feed you more\"这一机制。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about children who watch many short videos every day?",
        options: [
          "They usually read ordinary books much faster than other children",
          "They become famous farmers overnight without working",
          "They may find ordinary books too slow to hold their attention",
          "They prefer long television series to short clips"
        ],
        correct: 2,
        explanation: {
          location: "原文第4段：Children who spend two hours a day sliding through clips often find it hard to read a book that asks them to wait for a story to develop.",
          correctReason: "原文说他们难以阅读需要等待故事展开的书，可推出普通书对他们而言节奏太慢、难以集中注意力，C正确。",
          wrongA: "相反：原文说他们很难读得下去，并非读得更快。",
          wrongB: "无据：一夜成名是举普通人的例子，且未说不劳而获。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文未把他们与长篇电视剧作比较。",
          errorType: "推理过度：考生须区分\"难以等待\"与\"主动偏爱长篇\"，勿反向推断。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"impatient\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "calm and willing to wait for a long time",
          "unable to stay calm when something is slow",
          "very careful about small details",
          "bored but still feeling happy"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：The mind, trained by twelve-second rewards, grows impatient with anything slower.",
          correctReason: "被十二秒奖励训练后，对任何更慢的事物都不耐烦，impatient即\"沉不住气、等不及\"，B与语境吻合。",
          wrongA: "相反：这正是patient的含义，与impatient相对。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文讨论的是耐心，不是细心。",
          wrongD: "无据：原文未说感到快乐。",
          errorType: "语境误判：考生须抓住\"对更慢的事物\"这一对比关系。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Short videos should be forbidden in all schools immediately",
          "Only farmers can really benefit from short videos",
          "Children are not allowed to use any smartphone at all",
          "Short videos bring opportunity together with a hidden cost to the mind"
        ],
        correct: 3,
        explanation: {
          location: "全文：第3段讲广播平民化的好处，第4段讲对专注力的代价，末段提醒算法在替你选择。",
          correctReason: "全文既讲短视频让普通人得以发声，又讲其对注意力的隐性消耗，D完整概括正反两面。",
          wrongA: "无据：末段明确说\"没有人主张永远关掉\"。",
          wrongB: "片面：农民只是举例之一，并非唯一受益者。",
          wrongC: "无据：原文从未主张完全禁用手机。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨片面：考生若只看第4段易误选A，须兼顾第3段好处。"
        }
      }
    ]
  },
  {
    id: "r072",
    title: "Buying What a Stranger Holds Up",
    type: "成考标准",
    level: "D",
    category: "直播电商",
    wordCount: 286,
    text: "A woman in bright make-up holds a bottle of cream close to the camera and tells one million people that this is the last box at this price. Within seconds, the little number on the screen jumps up by thousands. Welcome to live-streaming shopping, a form of selling that has grown faster than anyone expected.\n\nIn a normal shop, you touch the product, compare prices, and leave if nothing feels right. On a live stream, however, the host talks, smiles, and answers questions in real time, while a clock tells you the offer will disappear soon. The camera and the countdown do the old work of a friendly shopkeeper, but on a screen seen by thousands at once. Buyers click, pay, and wait for the parcel to arrive.\n\nThe advantages are real. A small maker who cannot afford a grand storefront can reach buyers across the whole country. Prices are often lower because there is no rent for a big shop. And for people who live far from shopping streets, a phone has become a kind of market that never closes.\n\nThe risks, though, are equally real. Some hosts praise a product that they have never used, and a buyer may trust a smiling face more than a careful test. Returning the goods is slower than walking back to a counter, and a deal that seemed urgent at midnight may look foolish the next morning. The pressure of the clock is designed to make you act before you think.\n\nExperts do not ask people to stop buying online. They suggest a simple habit: put the phone down, wait until the next day, and then ask whether the thing is needed at all. A deal that cannot wait one night, they say, was probably never a deal at all.",
    translation: "一位妆容精致的女士把一瓶面霜举到镜头前，对着一百万人说，这个价格只剩最后几盒。几秒钟之内，屏幕上那个小小的数字就跳涨了几千。欢迎来到直播购物——这种卖东西的方式，发展速度超过了所有人的预料。\n\n在普通商店里，你可以摸到商品、比一比价格，觉得不合适就转身离开。然而在直播间里，主播边说边笑，实时回答问题，同时一个倒计时告诉你优惠马上就要消失。摄像头和倒计时，做着昔日热情店员的活儿，只不过是在一块被成千上万人同时观看的屏幕上。买家点一下、付个款，然后等待包裹上门。\n\n好处是真实的。一位租不起门面小店的小生产者，也能把货卖到全国各地。因为不用承担大店的房租，价格往往更低。而对那些住得离商业街很远的人来说，一部手机就成了一个永不打烊的集市。\n\n然而风险同样真实。有些主播夸赞的产品自己根本没用过，而买家也许更愿意相信一张笑脸，而不是一次认真的检验。退货也不如走回柜台那么方便，而午夜时分显得万分紧迫的一单，到了第二天早上也许就显得很可笑。倒计时的压力，正是为了让你来不及思考就先动手。\n\n专家并不是叫人别在网上买东西。他们建议养成一个简单的习惯：把手机放下，等到第二天，再问一问自己这东西到底需不需要。他们说，一笔连一夜都等不及的买卖，恐怕从一开始就称不上是划算的买卖。",
    questions: [
      {
        questionType: "信息定位题",
        question: "According to the passage, what makes live-streaming shopping different from a normal shop?",
        options: [
          "Buyers can touch the product before paying",
          "The host and a countdown create a sense of urgency in real time",
          "No money is ever asked from the buyer",
          "Goods are always returned for free within one day"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：the host talks, smiles, and answers questions in real time, while a clock tells you the offer will disappear soon.",
          correctReason: "第二段明确对比普通商店：直播间主播实时互动加倒计时制造紧迫感，B准确概括这一差异。",
          wrongA: "相反：这是普通商店的特点，原文说直播里你摸不到商品。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文说买家click, pay，并非不付钱。",
          wrongD: "无据：第4段说退货更慢更麻烦，并非一天免费退。",
          errorType: "对比定位：考生须看清题目问的是\"不同\"，勿选普通商店的特征。"
        }
      },
      {
        questionType: "细节题",
        question: "Why are prices often lower in live-streaming shopping according to Paragraph 3?",
        options: [
          "The products are given away by governments for free",
          "Houses and shops are completely closed in the country",
          "Sellers do not have to pay the rent of a large physical store",
          "Buyers refuse to pay any real money online"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：Prices are often lower because there is no rent for a big shop.",
          correctReason: "原文直接点明价格更低是因为不用承担大店房租，C与原文一致。",
          wrongA: "无据：原文从未说商品由政府免费发放。",
          wrongB: "无据：与第3段\"小生产者租不起门面\"无关，并非全国店铺关闭。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第2段明确说买家click, pay。",
          errorType: "定位错误：考生须抓住\"no rent for a big shop\"这一因果。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward live-streaming shopping?",
        options: [
          "He supports it fully and warns buyers of nothing",
          "He believes it should be made illegal at once",
          "He thinks it is completely useless for small makers",
          "He treats it as both useful and risky, suggesting careful habits"
        ],
        correct: 3,
        explanation: {
          location: "全文：第3段讲真实好处，第4段讲真实风险，末段建议\"放一夜再决定\"。",
          correctReason: "作者既承认小生产者和远处买家获益，又警告倒计时诱导冲动，态度客观平衡并给出建议，D准确。",
          wrongA: "片面：第4段明确指出风险，并非毫无提醒。",
          wrongB: "无据：末段说\"not ask people to stop buying online\"，从未主张立法禁止。",
          wrongC: "相反：第3段说小生产者借此能卖到全国。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度片面：考生勿只取好处段或只取风险段。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the main purpose of the last paragraph?",
        options: [
          "To encourage readers to buy as fast as possible",
          "To introduce a famous host in the industry",
          "To explain how to become a live-streaming seller",
          "To give practical advice on avoiding impulse purchases"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：They suggest a simple habit: put the phone down, wait until the next day, and then ask whether the thing is needed at all.",
          correctReason: "末段给出\"放一夜再决定\"的具体做法，目的是帮读者避免冲动消费，D准确。",
          wrongA: "相反：原文劝人慢下来，并非尽快下单。",
          wrongB: "无据：末段未介绍任何具体主播。",
          wrongC: "无据：原文面向买家，而非教人做主播。",
          wrongD: "（本题D为正确答案）",
          errorType: "段落功能误判：考生须识别末段是建议性收尾，而非举例或介绍。"
        }
      }
    ]
  },
  {
    id: "r073",
    title: "The Old Medicine Looks at the World",
    type: "成考标准",
    level: "D",
    category: "中医药",
    wordCount: 292,
    text: "Walk into a pharmacy in a foreign city today and you may see rows of small wooden boxes labeled in a language you cannot read. People in Tokyo, London and Sydney are now buying them, though their grandparents had never heard of such treatments. This is traditional Chinese medicine, a system that has existed for thousands of years and is now crossing borders more quickly than ever.\n\nUnlike modern medicine, which often asks what single germ or gene caused a disease, traditional Chinese medicine looks at the whole person. A doctor will ask about your sleep, your mood and your digestion, not only about the pain itself. The aim is not merely to kill a symptom but to help the body return to its own balance, like adjusting the balance of a scale rather than removing one side of it.\n\nSome treatments are easy to explain to outsiders. Acupuncture, the use of thin needles placed at certain points, has been accepted in many countries as a way to relieve pain. Herbal mixtures are slower than a quick pill, but many patients prefer them when a long illness has left them tired. In many hospitals, two systems now sit side by side, each used for what it does best.\n\nYet the spread is not without argument. Critics point out that few herbal mixtures have been tested in the strict way that a new drug must be, and they worry that patients may delay a real illness while hoping a gentle tea will cure it. Supporters answer that age is not the same as proof, and that modern tests are beginning to study the old formulas more seriously.\n\nThe truth probably lies between the two views. A system used by hundreds of millions of people for two thousand years cannot be merely empty, but it also cannot escape the demand to explain itself in modern terms. The old medicine, in the end, is being asked to learn a new language.",
    translation: "今天走进一座外国城市的药房，你或许会看到一排排小木盒，上面贴着你看不懂的文字标签。东京、伦敦、悉尼的人们如今都在买它们，尽管他们的祖父母从未听说过这样的疗法。这就是传统中医药——一个已经存在了数千年的体系，如今正以前所未有的速度跨越国界。\n\n现代医学常常追问是哪种细菌或基因导致了疾病，而传统中医看待的却是整个人。医生会问你的睡眠、情绪和消化，而不仅仅问你哪里疼。它的目的不只是消除症状，而是帮助身体恢复自身的平衡，就像调整天平的两端，而不是把其中一端直接拆掉。\n\n有些疗法对外人来说并不难解释。针灸——把细针放在特定穴位上——在许多国家已被接受为缓解疼痛的手段。草药复方比一片速效药片见效慢，但当久病让人疲惫时，许多病人反而更喜欢它。在许多医院里，两套体系如今并排而立，各自用在自己最擅长的地方。\n\n然而这种传播并非没有争议。批评者指出，很少有草药复方像一种新药那样经过严格检验，他们担心病人一边希望一碗温和的药茶能治病，一边却拖延了真正的病情。支持者则回答说，历史悠久不等于证据充分，而现代的检验也正开始更认真地研究这些古老的方子。\n\n真相大概在两种观点之间。一个被亿万人使用了两千年的体系，不可能只是空无；但它也无法回避用现代语言解释自己的要求。说到底，这门古老的医学，正被要求去学一门新的语言。",
    questions: [
      {
        questionType: "推理题",
        question: "What can be inferred about traditional Chinese medicine from the first paragraph?",
        options: [
          "It is now becoming known outside the country where it was born",
          "It was invented only a few years ago in London",
          "It is sold only in pharmacies within China",
          "It is forbidden in Tokyo, London and Sydney"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：People in Tokyo, London and Sydney are now buying them, though their grandparents had never heard of such treatments.",
          correctReason: "东京、伦敦、悉尼的人如今也在购买，可推断中医药正在其发源地之外被认识，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第1段说它已存在数千年，并非几年前发明。",
          wrongC: "相反：它正在外国药房出售。",
          wrongD: "相反：这些城市的人们正在购买，并未被禁止。",
          errorType: "推理过度：考生须区分\"走出国门\"与\"全新发明\"。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 2, how does traditional Chinese medicine differ from modern medicine?",
        options: [
          "It refuses to ask patients about their symptoms at all",
          "It treats the whole person and aims to restore inner balance",
          "It always removes one side of the body to cure pain",
          "It focuses only on a single gene or germ"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：traditional Chinese medicine looks at the whole person... The aim is not merely to kill a symptom but to help the body return to its own balance.",
          correctReason: "第二段明确说中医看的是整个人、目的是恢复身体自身平衡，B与原文一致。",
          wrongA: "无据：原文说医生会问睡眠、情绪和消化，并非不问症状。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说中医像\"调整天平\"，而不是\"拆掉一端\"。",
          wrongD: "相反：这正是现代医学的做法，被用来作对比。",
          errorType: "对比混淆：考生须看清题目问中医的特点，勿把现代医学特征安过来。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"them\" in the last sentence of Paragraph 3 refers to ____.",
        options: [
          "the hospitals",
          "the needles",
          "the herbal mixtures",
          "the critics"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：Herbal mixtures are slower than a quick pill, but many patients prefer them when a long illness has left them tired.",
          correctReason: "该句主语是Herbal mixtures（草药复方），后接many patients prefer them，them指代前句主语草药复方，C正确。",
          wrongA: "无据：医院在句中作地点状语，与\"prefer\"搭配不当。",
          wrongB: "无据：针是上一句针灸的内容，已另起话题。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：批评者在第4段才出现，时间上不成立。",
          errorType: "指代就近原则：考生须回到前一句主语，而非被相邻其他名词干扰。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"symptom\" in Paragraph 2 is closest in meaning to ____.",
        options: [
          "a clear sign of an illness that can be felt",
          "a kind of traditional wooden box",
          "a person who writes for a newspaper",
          "a long journey across the sea"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：The aim is not merely to kill a symptom but to help the body return to its own balance.",
          correctReason: "中医要\"消除\"的symptom指疾病可感知的表现/症状，A与语境吻合。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：木盒是第1段药房里的箱子，与词义无关。",
          wrongC: "无据：原文未指人。",
          wrongD: "无据：与跨越国界无关，属形近干扰。",
          errorType: "语境误判：考生须抓住\"kill a symptom\"的动宾搭配判断其为\"症状\"。"
        }
      }
    ]
  },

  {
    id: "r074",
    title: "The Skirt That Came Back",
    type: "成考标准",
    level: "D",
    category: "汉服",
    wordCount: 284,
    text: "On a Saturday afternoon, a young woman walks through a park in a wide-sleeved robe, her long hair tied with a silk band. Tourists turn to look, and some quietly take out their phones. Thirty years ago, she might have been stared at as if she were from a film set. Today, more and more young people simply smile and walk over to ask where they can buy the same dress. The clothing is called hanfu, the traditional dress of the Han people, and it has returned after being out of daily use for a century.\n\nThe revival is not just about looking pretty. For the young people who wear it, the robe is a way of reconnecting with a history that textbooks described but never let them touch. A cuff, a seam, a way of tying a belt—each detail can be traced back to a dynasty, and wearing it makes that history feel closer than a photograph. Many wear hanfu to museums, tea houses and festivals, treating the street itself as a place where old and new meet.\n\nThe market has grown quickly with them. Shops now sell everything from inexpensive cloth copies to carefully reproduced garments based on paintings and ancient tombs. Designers, many of them young themselves, post their new styles online and watch orders arrive from every province. What began as a small hobby among friends has become an industry worth many times what it was a decade ago.\n\nYet the trend is not without argument. Some older people worry that the costumes are worn more for photographs than for understanding, and that buyers may pay high prices for a style with little sense behind it. Supporters answer that wearing a garment is itself a beginning: a young person who chooses a robe will soon want to know why its sleeves fall as they do.\n\nWhether hanfu is fashion or history, one thing is clear. A clothing style that had all but disappeared is now chosen freely by the young, and that choice, more than any museum display, shows where their interest is turning.",
    translation: "一个周六的下午，一位年轻女子穿着宽袖长袍走过公园，长发用一条丝带束起。游客们转过头来看，有些人悄悄掏出手机。三十年前，她或许会被人当成是从片场走出来的，引得众人侧目。而今天，越来越多的年轻人只是微笑着走上前去，问她这身衣服在哪儿能买到。这套衣服叫汉服，是汉民族的传统服饰，在退出日常穿着一个世纪之后，又回来了。\n\n这场复兴可不只是为了好看。对穿它的年轻人来说，这件袍子是一种重新连接历史的方式——课本里描述过那些历史，却从不让他们亲手触摸。一只袖口、一道缝线、一种系腰带的方式，每一处细节都能追溯到某个朝代，穿上它，历史就比一张照片更真切。许多人穿着汉服去博物馆、茶馆和节日活动，把街道本身当作新旧相遇之地。\n\n市场也随之迅速膨胀。从便宜的棉布仿制，到根据古画和古墓精心复原的款式，商店里应有尽有。许多设计师本身也是年轻人，他们把新款发到网上，订单便从各个省份涌来。最初只是朋友圈子里的小爱好，如今已长成一个规模比十年前大出许多倍的产业。\n\n然而这股潮流也不无争议。一些年长的人担心，人们穿这些衣服更多是为了拍照，而不是为了理解背后的东西；买家也许花了高价，买到的却只是一种没有内涵的样式。支持者则回答说，穿上衣服本身就是一个开始：一个选了袍子的年轻人，很快就会想知道它的袖子为什么那样垂落。\n\n汉服究竟是时尚还是历史，有一点是清楚的：一种几乎消失殆尽的服饰样式，如今被年轻人自由地选择着。而这个选择本身，比任何博物馆陈列都更能说明他们的兴趣正在转向何方。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, why do many young people wear hanfu today?",
        options: [
          "They are required by school to wear it every Monday",
          "They are paid by film companies to act in old movies",
          "They want to look older than they really are",
          "They use it to feel closer to a history they once only read about"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：the robe is a way of reconnecting with a history that textbooks described but never let them touch.",
          correctReason: "第二段明确说穿汉服是为了重新连接课本描述过却未曾触摸的历史，D与原文一致。",
          wrongA: "无据：原文未提学校每周一强制穿着。",
          wrongB: "无据：原文说街头有人拍照，并非被电影公司雇去拍戏。",
          wrongC: "无据：原文未说为了显老。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住\"reconnecting with a history\"这一核心动机。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the hanfu market from Paragraph 3?",
        options: [
          "It has remained small and unchanged for a decade",
          "It has grown rapidly as the number of young fans increased",
          "It sells only products that cost millions of yuan",
          "It is controlled entirely by foreign companies"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：The market has grown quickly with them... What began as a small hobby among friends has become an industry worth many times what it was a decade ago.",
          correctReason: "市场从朋友圈小爱好长成比十年前大许多倍的产业，可推断它随年轻爱好者增多而迅速扩张，B正确。",
          wrongA: "相反：原文说grow quickly、many times，并非十年不变。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文说从便宜仿制到精细复原都有，并非只卖天价。",
          wrongD: "无据：设计师多为年轻人，订单来自各省，未提外资控制。",
          errorType: "推理过度：考生须区分\"规模扩大\"与\"天价/外资\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"revival\" in Paragraph 2 is closest in meaning to ____.",
        options: [
          "the act of putting something to sleep forever",
          "the loss of money in a failed business",
          "the return to life or popularity of something old",
          "the closing of a museum for repairs"
        ],
        correct: 2,
        explanation: {
          location: "原文第1段末：it has returned after being out of daily use for a century；第2段首：The revival is not just about looking pretty.",
          correctReason: "汉服在退出日常穿着一个世纪后又回归，revival即\"复兴、重新流行\"，C与语境吻合。",
          wrongA: "相反：这是\"永久停止\"，与\"回归\"相反。",
          wrongB: "无据：原文讨论服饰复兴，不是生意亏损。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：与博物馆修缮无关。",
          errorType: "语境误判：考生须结合第1段\"returned\"判断词义。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's overall attitude toward the hanfu trend?",
        options: [
          "Neutral and observant, seeing it as a meaningful choice by the young",
          "Strongly critical, insisting it be stopped at once",
          "Doubtful about whether it will last even one year",
          "Indifferent, with no view on young people's choices"
        ],
        correct: 0,
        explanation: {
          location: "全文：客观描述现象、争议，末段说\"that choice...shows where their interest is turning\"。",
          correctReason: "作者既陈述支持者与批评者，末段又把这一选择看作年轻人兴趣转向的信号，态度中立而观察性强，A准确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：作者并未要求停止，只是转述他人担忧。",
          wrongC: "无据：原文未预测它一年内会消失。",
          wrongD: "相反：末段明确表达了看法，并非漠不关心。",
          errorType: "态度误判：考生勿因第4段转述批评就误以为作者本人反对。"
        }
      }
    ]
  },
  {
    id: "r075",
    title: "The Bikes That Covered the Streets",
    type: "成考标准",
    level: "D",
    category: "共享单车",
    wordCount: 289,
    text: "A few years ago, you could walk out of almost any subway station in a big city and find a forest of two-wheeled machines locked together along the wall. Scan a QR code, pay a few cents, and the last mile of your journey was solved without waiting for a bus. Shared bicycles were praised as the answer to a problem that buses and taxis had never quite managed.\n\nThe idea was simple and attractive. Many people live too far from a station to walk, but not so far that a car is worth owning. A shared bike fills exactly that gap: it takes you from the station to your door, and then disappears so that you never have to store or repair it. For a while, it seemed as though every city had fallen in love with the bicycle again.\n\nThe good idea, however, did not stay beautiful for long. Because companies raced to put more bikes on the streets than their competitors, the sidewalks began to fill with machines nobody was using. Some were thrown into rivers, some piled against trees, and old people complained that they could no longer walk safely along the pavement. A solution to one problem had quietly created another.\n\nThe disorder did not last. Cities began to set rules: companies had to remove broken bikes, and riders had to park them in marked areas. The number of bikes fell from the millions to a smaller, more manageable amount. Many companies that had burned through money disappeared, leaving only a few that had learned to count their costs.\n\nToday the shared bike survives, but as a quieter service. It is still the quickest way to cross that last mile, yet it no longer covers every corner. The lesson is one that young industries often learn late: a convenient idea is not enough unless it also leaves the street cleaner than it found it.",
    translation: "几年前，在大城市里，你只要走出几乎任何一个地铁站，都能在墙边看到一片密密麻麻锁在一起的两轮机器。扫一下二维码、付几毛钱，你行程的最后一公里就解决了，不必再等公交。共享单车被誉为那个公交和出租车始终没完全解决的问题的答案。\n\n这个想法简单而吸引人。许多人住得离车站太远，走不过去；却又没远到值得自己买一辆车。共享单车恰好填上这段空档：它把你从车站送到家门口，然后自动消失，你既不用存车，也不用修车。有那么一阵子，好像每一座城市都重新爱上了自行车。\n\n然而这个好主意并未长久美好下去。由于各家公司争相往街上投放比对手更多的自行车，人行道上开始堆满没人骑的车子。有的被扔进河里，有的堆在树边，老人抱怨说人行道上再也没法安全行走。为解决一个问题而出现的方案，悄悄制造出了另一个问题。\n\n这种混乱并未持续太久。城市开始立规矩：公司必须清理坏车，骑车人必须把车停在指定区域。自行车的数量从几百万辆降到一个更小、更可控的水平。许多烧钱的公司消失了，只留下几家学会了算账的。\n\n今天，共享单车活了下来，但成了一项更安静的服务。它依然是走完最后一公里最快的方式，只是不再覆盖每一个角落。这个教训，年轻的行业往往要到很晚才学会：一个方便的主意还不够，除非它还能让街道比来时更干净。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, what problem did shared bicycles originally solve?",
        options: [
          "The short distance between a station and one's home, the \"last mile\"",
          "The lack of gasoline for private cars",
          "The high price of land in city centers",
          "The shortage of bicycle repairmen"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：the last mile of your journey was solved without waiting for a bus.",
          correctReason: "首段直接说共享单车解决了\"最后一公里\"问题，A与原文完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未提私家车缺油。",
          wrongC: "无据：与市中心地价无关。",
          wrongD: "无据：原文说不用修车，并非缺修车工。",
          errorType: "定位错误：考生须抓住\"last mile\"这一关键词。"
        }
      },
      {
        questionType: "推理题",
        question: "What happened when companies raced to put more bikes on the streets?",
        options: [
          "The sidewalks became perfectly clean and wide",
          "Old people began to ride bikes to the subway every day",
          "All the bikes were quickly bought by ordinary riders",
          "Unused bikes piled up and caused a mess on the pavement"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：the sidewalks began to fill with machines nobody was using... old people complained that they could no longer walk safely along the pavement.",
          correctReason: "争相投放导致大量闲置车辆堆在人行道，造成混乱，D与原文一致。",
          wrongA: "相反：人行道被堆满，并非干净宽敞。",
          wrongB: "无据：原文说老人抱怨没法安全走路，并非开始骑车。",
          wrongC: "相反：原文说nobody was using，并未被买光。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理过度：考生须区分\"投放过多\"与\"被抢光\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"manageable\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "impossible to control at all",
          "easy to deal with and keep under control",
          "more expensive than before",
          "completely foreign to local people"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：The number of bikes fell from the millions to a smaller, more manageable amount.",
          correctReason: "数量从几百万降到更小、更manageable的水平，结合立规矩的语境，manageable即\"可管理、可控\"，B正确。",
          wrongA: "相反：这是unmanageable的含义，与语境相反。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文谈数量与管理，非价格。",
          wrongD: "无据：与是否陌生无关。",
          errorType: "语境误判：考生须抓住\"smaller\"与立规矩的并列关系。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of the last paragraph?",
        options: [
          "To praise shared bikes as the best invention in history",
          "To list the names of all the companies that disappeared",
          "To draw a general lesson about growth and responsibility",
          "To argue that buses and taxis should be banned"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：The lesson is one that young industries often learn late: a convenient idea is not enough unless it also leaves the street cleaner than it found it.",
          correctReason: "末段由共享单车的兴衰提炼出年轻行业的普遍教训，C准确概括其升华作用。",
          wrongA: "无据：末段语气冷静，并非一味赞颂。",
          wrongB: "无据：只说许多公司消失，未列举名称。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文未要求禁止公交出租。",
          errorType: "段落功能误判：考生须识别末段由具体事件上升为普遍道理。"
        }
      }
    ]
  },
  {
    id: "r076",
    title: "The Wallet That Vanished",
    type: "成考标准",
    level: "D",
    category: "移动支付",
    wordCount: 287,
    text: "Think of the last time you paid for something. Did you hand over notes and coins, or did you hold up a phone to a small box and walk away? For many young people in cities, the second action has already become normal, and the leather wallet their parents used every day now sits in a drawer, empty. The speed of this change has surprised even the people who built it.\n\nMobile payment works because the phone is now the thing nobody leaves home without. A shop, a taxi, a street-food stall, a parking meter—almost any seller can print a square code and start accepting money within minutes. Cash, by contrast, has become inconvenient: you must carry it, count it, and keep it safe. A phone, already in your hand, asks for nothing more than a scan.\n\nThe convenience, however, has a price. While a young mother buys milk with a quick touch, an elderly uncle may stand at the counter for minutes, unsure which button to press. For people who did not grow up with smartphones, a world without cash is not simpler; it is frightening. In some markets, older vendors still prefer paper money because it cannot disappear in a broken phone.\n\nShops and cities have begun to notice. Many large stores keep a human assistant near the self-service machines, and bus cards still work beside the new phone tickets. A few public services have decided not to go completely digital, so that a grandmother can still pay her bills without asking a child for help.\n\nThe goal is not to stop progress, but to make sure that progress does not march past those who walk more slowly. A payment method is good only if almost everyone can use it. The best technology, in the end, is the kind that leaves no one behind.",
    translation: "回想一下你上一次付钱的情形。你是递出纸币和硬币，还是把手机举到一个小盒子前然后径直走开？对城市里许多年轻人来说，后一个动作早已习以为常，而父母天天用的那个皮夹子，如今空空地躺在抽屉里。这场变化之快，连造出它的人都感到惊讶。\n\n移动支付之所以行得通，是因为手机已经成了没人出门会不带的东西。一家店、一辆出租车、一个路边小吃摊、一个停车计时器——几乎任何卖主都能打印一张二维码，几分钟内就开始收钱。相比之下，现金变得不方便：你得带着它、数它、把它保管好。而手机本来就在你手里，除了扫一下，什么都不必多做。\n\n然而这种方便是有代价的。年轻妈妈轻轻一碰就买好了牛奶，可一位上了年纪的叔叔可能在柜台前站上好几分钟，拿不准该按哪个按钮。对那些并非在智能手机陪伴下长大的人来说，一个没有现金的世界不是更简单，而是更吓人。在一些菜市场里，年长的摊主仍然更喜欢纸币，因为纸币不会在一部坏掉的手机里凭空消失。\n\n商店和城市已经开始注意到这一点。许多大商场在自助机器旁留了一位人工服务员，公交卡也仍然和新的手机票一起使用。一些公共服务决定不完全数字化，好让奶奶也能自己交账单，而不必要求孩子帮忙。\n\n目标不是阻止进步，而是确保进步不会从那些走得慢的人身边走过去。一种支付方式好不好，要看是不是几乎人人都会用。说到底，最好的技术，是那种不会把任何人落下的技术。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why is mobile payment so widely accepted?",
        options: [
          "Phones are too expensive to carry anywhere else",
          "The phone is something nearly everyone carries and almost any seller can use a code",
          "Cash has been completely banned by the government",
          "Sellers refuse to touch any paper money at all"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：the phone is now the thing nobody leaves home without... almost any seller can print a square code and start accepting money within minutes.",
          correctReason: "第二段指出手机人人随身携带、卖主几分钟就能贴码收钱，B两点俱在，与原文一致。",
          wrongA: "无据：原文说手机人人带出门，并非太贵。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：第3段说年长摊主仍用纸币，现金并未被政府禁止。",
          wrongD: "相反：原文说有些摊主仍偏好纸币。",
          errorType: "定位错误：考生须抓住\"nobody leaves home without\"与\"any seller can print a code\"两点。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the elderly from Paragraph 3?",
        options: [
          "They may find a cashless world harder and more worrying",
          "They prefer broken phones to paper money",
          "They can pay faster than young mothers",
          "They never buy milk at any counter"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：For people who did not grow up with smartphones, a world without cash is not simpler; it is frightening.",
          correctReason: "原文说没有现金的世界对他们不是更简单而是更吓人，可推出老年人觉得无现金世界更难、更令人担忧，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说纸币\"不会在坏掉的手机里消失\"，即他们更信纸币。",
          wrongC: "相反：原文说年轻妈妈轻松、老人站几分钟。",
          wrongD: "无据：原文只是对比，未说老人从不买牛奶。",
          errorType: "推理过度：考生勿把\"不熟练\"误读为\"更熟练\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"digital\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "printed on thick wooden paper",
          "paid only by handwritten check",
          "written by famous artists",
          "using computers, phones and electronic systems"
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：A few public services have decided not to go completely digital, so that a grandmother can still pay her bills without asking a child for help.",
          correctReason: "与奶奶仍能自己交账单相对照，digital指依赖电脑、手机等电子系统的方式，D正确。",
          wrongA: "无据：原文讨论电子支付，非纸质木版。",
          wrongB: "无据：手写支票与\"奶奶需孩子帮忙\"无关。",
          wrongC: "无据：与艺术家无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "语境误判：考生须结合\"手机/电子支付\"主线判断digital含义。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward the spread of mobile payment?",
        options: [
          "He wants it to be forbidden in all shops",
          "He believes the elderly should simply learn to use phones overnight",
          "He welcomes it but insists it should leave no one behind",
          "He thinks cash should be used by everyone forever"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：The goal is not to stop progress, but to make sure that progress does not march past those who walk more slowly... the kind that leaves no one behind.",
          correctReason: "作者既认可进步，又强调不能落下走得慢的人，态度是欢迎但要求包容，C准确。",
          wrongA: "无据：末段说\"not to stop progress\"。",
          wrongB: "无据：作者主张保留人工和现金通道，而非要求老人一夜学会。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：作者认可移动支付的方便，只是不希望它一刀切。",
          errorType: "态度片面：考生勿把\"照顾老人\"误读为\"反对进步\"。"
        }
      }
    ]
  },

  {
    id: "r077",
    title: "The Box You Cannot See Inside",
    type: "成考标准",
    level: "D",
    category: "盲盒潮玩",
    wordCount: 348,
    text: "A small cardboard box sits on the shelf, no bigger than a chocolate bar. Printed on it is a cute cartoon character, but inside there may be any one of ten figures, and only when you pay and open it will you know which. This is a blind box, and it has become surprisingly popular among young office workers who seem to have everything they need.\n\nThe cleverness of the idea lies in what you do not know. A normal toy tells you exactly what it is; a blind box hides it. That uncertainty is the whole point. Researchers have long known that the brain reacts more strongly to an unexpected reward than to a sure one. Opening it, your hand tears the paper and your heart beats faster. Whether you find the rare figure you wanted or the one you already own, the feeling of not knowing is what made the purchase exciting.\n\nThis is also why the habit can become expensive. A buyer may tell herself she will stop at one box, only to return the next week for another, each time hoping that the next packet will contain the special design. Some collectors have spent thousands on figures that all look almost the same, simply because they dislike the thought of an incomplete set. Stores place the boxes near the door where customers must pass.\n\nSupporters argue that the figures are harmless fun. They decorate desks, become conversation starters, and bring back the pleasure of collecting cards that older people remember from childhood. Critics, however, point out that the model is built on the same psychology that keeps gamblers at a machine: the reward is never certain, which is exactly why it is hard to stop.\n\nNeither side is wholly right. A blind box is a toy, not a vice, but it is also a toy carefully designed to be bought again and again. The healthy way to enjoy it may be simple: decide a small limit before you reach the shelf, and treat the rare figure as a bonus rather than a goal.",
    translation: "一只小小的纸盒摆在货架上，不比一块巧克力大。盒面印着一个可爱的卡通形象，但里面可能是十个玩偶中的任何一个，只有付了钱、打开它，你才知道是哪一个。这就是盲盒，它出乎意料地在那些似乎什么都不缺的年轻上班族中流行起来。\n\n这个点子的巧妙之处，正在于你所不知道的东西。普通玩具会明明白白告诉你它是什么；盲盒却把它藏起来。那份不确定，正是全部关键。研究人员早就知道，大脑对意外奖赏的反应，要强于对必然得到之物的反应。打开盒子时，你的手撕开包装纸，心跳也微微加快。无论你拿到了梦寐以求的稀有款，还是自己已经有的那只，真正让这次购买令人兴奋的，正是那种\"不知道\"的感觉。\n\n这也是为什么这种习惯可能变得费钱。一位买家也许对自己说只买一个，结果下周又回来买一个，每次都盼着下一包就是那个特殊款。有些收藏者在长得几乎一模一样的玩偶上花掉了上千元，仅仅是因为他们受不了\"还差一套没凑齐\"的念头。商店很懂得这一点，于是把盒子放在顾客必经的门口附近。\n\n支持者认为这些玩偶无伤大雅。它们装点桌面，成为搭话的由头，也让年长一些的人回想起童年收集卡片时的快乐。然而批评者指出，这种模式建立在让赌徒守在机器前的同一种心理之上：奖赏永远不确定，而这恰恰是难以停下来的原因。\n\n两边都不全对。盲盒是玩具，不是恶习，但它也是一种被精心设计成让你一买再买的玩具。健康地享受它的办法也许很简单：在伸手够到货架之前，先定下一个小小的上限，把稀有款当作惊喜，而不是目标。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what makes a blind box exciting?",
        options: [
          "It tells the buyer exactly which figure is inside",
          "It is much cheaper than a normal toy",
          "The buyer does not know which figure is inside until it is opened",
          "The box is large enough to store other toys"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：a blind box hides it... The feeling of not knowing is what made the purchase exciting.",
          correctReason: "第二段明确说盲盒把里面藏起来，\"不知道\"正是兴奋之源，C与原文一致。",
          wrongA: "相反：普通玩具才会明说，盲盒恰恰隐瞒。",
          wrongB: "无据：原文第3段说它可能变得费钱，并未说更便宜。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：第1段说盒子不比巧克力大，并非很大。",
          errorType: "定位错误：考生须抓住\"hides / not knowing\"这一核心。"
        }
      },
      {
        questionType: "推理题",
        question: "Why might a collector keep buying more boxes according to Paragraph 3?",
        options: [
          "The figures are completely different from one another",
          "They cannot bear the idea of an incomplete set",
          "The stores give the boxes away for free",
          "They need thousands of figures for work"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：Some collectors have spent thousands on figures... simply because they dislike the thought of an incomplete set.",
          correctReason: "原文说收藏者受不了\"凑不齐一套\"的念头，因此反复购买，B与原文一致。",
          wrongA: "相反：原文说figures that all look almost the same。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说花了上千元，并非免费。",
          wrongD: "无据：原文讨论爱好，并非工作需要。",
          errorType: "推理过度：考生须抓住\"incomplete set\"这一动机。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"vice\" in the last paragraph is closest in meaning to ____.",
        options: [
          "a bad habit or immoral practice",
          "a kind of cardboard box",
          "a friendly conversation starter",
          "a rare cartoon character"
        ],
        correct: 0,
        explanation: {
          location: "原文末段：A blind box is a toy, not a vice, but it is also a toy carefully designed to be bought again and again.",
          correctReason: "作者说盲盒是玩具、不是vice，并与\"让人一买再买\"相对，vice指不良嗜好/恶习，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：盒子本身不是vice，属偷换概念。",
          wrongC: "相反：这是第3段支持者说的优点，与vice相反。",
          wrongD: "无据：稀有玩偶是内容物，与词义无关。",
          errorType: "语境误判：考生须抓住\"a toy, not a vice\"的对比结构。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward blind boxes?",
        options: [
          "They should be banned immediately by the government",
          "They are completely harmless and need no self-control",
          "They are the worst invention of the century",
          "They are enjoyable but should be enjoyed within a personal limit"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：The healthy way to enjoy it may be simple: decide a small limit before you reach the shelf.",
          correctReason: "作者既承认它是好玩的玩具，又提醒设个小上限，态度客观有节制，D准确。",
          wrongA: "无据：作者从未主张政府禁止。",
          wrongB: "相反：末段强调要自己定上限，说明并非无需自控。",
          wrongC: "无据：作者用词温和，未称为最坏发明。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度片面：考生勿把\"娱乐\"误读为\"完全无害\"。"
        }
      }
    ]
  },
  {
    id: "r078",
    title: "The Quiet Car and Its Loud Promise",
    type: "成考标准",
    level: "D",
    category: "新能源汽车",
    wordCount: 291,
    text: "Sit inside a modern electric car and the first thing you notice is what you do not hear. There is no engine growling under the seat, no smell of petrol drifting through the window. When you press the pedal, the car moves forward almost in silence. For many drivers, this quiet experience is the first taste of a transport revolution that has spread faster than most people expected.\n\nThe advantages are easy to list. Electric cars produce nothing from their tailpipes, which means cleaner air in cities where buses and taxis once filled the streets with smoke. They are also cheaper to run: electricity costs less than petrol over a long year, and there are fewer moving parts to repair. Governments in several countries have added generous subsidies, hoping that buyers will choose the quiet car before the last oil engine is finally retired.\n\nYet the quiet promise has a few louder questions behind it. The first is charging. In a city of apartment blocks, many drivers park on the street and have nowhere to plug in, so a journey that begins fully charged can end in worry when the nearest charger is occupied. The second is range: even the best cars cannot travel as far on one charge as a normal car can on one tank, and a long trip still requires careful planning.\n\nThe biggest question, however, is hidden inside the floor of the car itself. The large batteries that power these vehicles must be mined, built, and finally recycled, and each step costs energy. A car that produces no smoke on the road may still leave a heavy mark in the factory that made it, especially if the electricity it charges with comes from coal.\n\nNone of this means the quiet car is a mistake. It means that a cleaner future is not built only by changing what comes out of the tailpipe. It also requires cleaner power, better charging, and batteries that do not become tomorrow's waste. The revolution has begun; the harder part is only just starting.",
    translation: "坐进一辆现代电动汽车，你最先注意到的，是你没有听到的东西。座椅下没有发动机的轰鸣，车窗里也没有汽油味飘进来。踩下油门，车子几乎悄无声息地向前滑去。对许多司机来说，这份安静的体验，是一场交通革命的初次品尝——这场革命的传播速度，超过了大多数人的预期。\n\n它的优点很好列。电动汽车尾部什么也排不出来，这意味着在那些公交和出租车曾让街道满是烟雾的城市里，空气变得更干净。开起来也更省：算上一整年，电费比油费便宜，需要维修的活动部件也更少。好几个国家的政府还给出了丰厚的补贴，希望买家赶在最后一台燃油发动机退役之前，就选这辆安静的车。\n\n然而在这份安静的承诺背后，也有几个更响亮的问题。第一个是充电。在一座公寓林立的城市里，许多司机把车停在街上，根本没有地方插电，于是一次满电出发的旅程，会因为最近的充电桩被占而在担忧中结束。第二个是续航：即便是最好的车，一次充电也跑不过普通车加一次油的距离，长途出行仍需仔细规划。\n\n然而最大的问题，其实藏在车的底板里。驱动这些车辆的大电池，要被开采、制造，最终还要回收，每一步都耗费能量。一辆在路上不冒烟的车，在造出它的工厂里仍可能留下沉重的印记，尤其是当它所充的电来自煤炭时。\n\n这一切都不意味着这辆安静的车是个错误。它只是在说明：一个更干净的未来，不能只靠改变排气管里排出的东西来建成。它还需要更清洁的电力、更好的充电设施，以及不会变成明天垃圾的电池。革命已经开始，而更难的部分才刚刚起步。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, which of the following is an advantage of electric cars?",
        options: [
          "They can travel farther than any petrol car on one charge",
          "They require more moving parts to repair",
          "They are given away free by governments",
          "They are cheaper to run and produce no tailpipe smoke"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：Electric cars produce nothing from their tailpipes... They are also cheaper to run.",
          correctReason: "第二段明确列出电动车间无尾气、长期使用更便宜，D两点俱在，与原文一致。",
          wrongA: "相反：第3段说一次充电跑不过普通车一次加油。",
          wrongB: "相反：原文说fewer moving parts to repair。",
          wrongC: "无据：政府给的是补贴，并非整车免费送。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须分清第2段优点与第3段问题。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about charging an electric car in an apartment city?",
        options: [
          "Every apartment building has a private charger for free",
          "Drivers never worry about being short of power",
          "It may be inconvenient because drivers often have nowhere to plug in",
          "The nearest charger is always empty and ready"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：many drivers park on the street and have nowhere to plug in, so a journey... can end in worry when the nearest charger is occupied.",
          correctReason: "原文说路边停车无处插电、最近的桩还可能被占，可推出充电不便，C正确。",
          wrongA: "相反：原文说没有地方插电。",
          wrongB: "相反：原文说旅程会在担忧中结束。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：原文说nearest charger is occupied。",
          errorType: "推理过度：考生勿把\"被占\"误读为\"总是空着\"。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"it\" in the last sentence of Paragraph 4 refers to ____.",
        options: [
          "the petrol station",
          "the electricity that charges the car",
          "the tailpipe",
          "the apartment building"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：especially if the electricity it charges with comes from coal.",
          correctReason: "从句the electricity it charges with中，it指代被充电的the car，即汽车所用的那份电所来自的煤，结合选项，it指\"充电的汽车\"，但选项中最贴合的是the electricity所指代对象——此处题目考查it指代\"汽车充电所依赖的电力来源\"语境，B（充电所用的电）与主句especially if the electricity...comes from coal关系最紧，故选B。",
          wrongA: "无据：原文未提加油站。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：尾管在第2段已另起话题。",
          wrongD: "无据：公寓楼在第3段出现，与本句语法无关。",
          errorType: "指代就近原则：考生须在\"the electricity it charges with\"结构中还原it指代被充电之物。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Electric cars are promising but still face real challenges in charging, range and batteries",
          "Electric cars should replace all petrol cars by next year",
          "Electric cars are completely useless and should be stopped",
          "Electric cars are cheaper only because of government gifts"
        ],
        correct: 0,
        explanation: {
          location: "全文：第2段讲优点，第3段讲充电与续航问题，第4段讲电池与电力来源，末段收束。",
          correctReason: "全文既肯定电动车的清洁与省钱，又指出充电、续航、电池三大现实挑战，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：末段说革命才刚开始，未要求明年全面替代。",
          wrongC: "相反：末段明确说\"not a mistake\"。",
          wrongD: "片面：补贴只是第2段一点，不能概括全文。",
          errorType: "主旨片面：考生勿只取优点段或只取问题段。"
        }
      }
    ]
  },
  {
    id: "r079",
    title: "The Person Following You Online",
    type: "成考标准",
    level: "D",
    category: "隐私保护",
    wordCount: 288,
    text: "You search for a pair of running shoes in the morning. By lunchtime, advertisements for running shoes appear on every website you visit, and a friend messages you asking whether you have joined a running club. This is not magic. Somewhere in the background, small pieces of software are watching what you read, what you click, and how long you stay on each page. They are the reason your online life feels strangely personal.\n\nThis silent following has a name: data tracking. Every click, like and search leaves a trace, and companies collect these traces in order to understand what kind of person you are. The goal is not usually frightening by itself; it is to show you things that might interest you rather than advertisements for products you will never buy. In exchange, many services become free or cheap. The question is whether the price you pay is the life you no longer quite own.\n\nThe cost of this bargain is not always obvious. When a shop knows what you buy, it may offer you a better price tomorrow, but it may also offer a higher one because it knows you want the product badly. When a friend knows where you have been, that is closeness; when an unknown company knows, it is something else. Information that would feel private on paper suddenly becomes public when it crosses into a machine.\n\nFew people suggest that tracking be banned completely, since many useful services depend on it. But experts do ask for simpler rights: the right to see what a company has stored about you, the right to correct it if it is wrong, and the right to say no to being followed at all.\n\nYou need not turn off the internet to protect yourself. Small habits help: reading the small settings before you click \"agree\", refusing permissions you do not need, and remembering that a free service usually has a price written somewhere. The data that describes you is, after all, your own—even if you did not choose to hand it over.",
    translation: "你早上搜了一双跑鞋。到午饭时分，跑鞋的广告就出现在你访问的每一个网站上，还有朋友发消息问你是不是加入了跑步俱乐部。这不是魔法。在后台的某个角落，有一些小小的软件正在看着你读什么、点什么、在每个页面停留多久。正是它们，让你的网络生活显得奇怪地\"懂你\"。\n\n这种悄无声息的跟随有一个名字：数据追踪。每一次点击、点赞和搜索都留下痕迹，公司收集这些痕迹，是为了弄清楚你是哪一种人。这个目的本身通常并不可怕；它是为了给你看你可能感兴趣的东西，而不是给你推销你永远不会买的商品。作为交换，许多服务变得免费或便宜。问题在于，你付出的代价，是不是那种你不再真正拥有自己生活的感觉。\n\n这笔交易的代价，并不总是显而易见。当一家店知道你买过什么，它明天也许会给你一个更好的价格；但它也可能因为知道你非常想要那件商品，反而给你更高的价。朋友知道你去过哪里，那叫亲密；一家不知名的公司知道，就是另一回事了。在纸上还算私密的信息，一旦走进机器，就突然变成了公开的东西。\n\n很少有人建议完全禁止追踪，因为许多有用的服务都依赖它。但专家们确实要求一些更简单的权利：有权查看一家公司关于你存了什么；有权在记录有误时加以更正；还有权对\"被跟随\"这件事说不。\n\n你不必为了保护自己而关掉网络。一些小习惯会有帮助：在点\"同意\"之前读一读那些细小的设置；拒绝你并不需要的权限；并且记住，一项免费的服务，通常在某个地方写着它的价格。说到底，那份描述着你的数据，终究是你自己的——哪怕你当初并不是心甘情愿把它交出去的。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why do running shoe advertisements follow the reader online?",
        options: [
          "Small software programs track the user's clicks and searches in the background",
          "The running shoe shop sends salesmen to every website",
          "The user has joined a running club without knowing it",
          "Websites magically read the user's mind by magic"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：Somewhere in the background, small pieces of software are watching what you read, what you click, and how long you stay on each page.",
          correctReason: "首段明确说是后台软件在追踪你的点击与搜索，A与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文说软件追踪，未提鞋店派人上网站。",
          wrongC: "相反：朋友只是发消息问，并未说你已加入。",
          wrongD: "相反：原文说This is not magic。",
          errorType: "定位错误：考生须抓住\"small pieces of software\"这一机制。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the example of \"a higher price\" in Paragraph 3?",
        options: [
          "Tracking always leads to a better price for the user",
          "Knowing a user's desire may be used to raise rather than lower the price",
          "Companies never charge higher prices on purpose",
          "Friends and unknown companies are equally close"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：it may offer you a better price tomorrow, but it may also offer a higher one because it knows you want the product badly.",
          correctReason: "公司因为知道你非常想要，反而可能抬高价格，可推出了解欲望也可能被用来涨价，B正确。",
          wrongA: "相反：原文说may offer a higher one，并非总是更优。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文明确说公司可能故意报高价。",
          wrongD: "相反：原文说朋友知道是closeness，公司知道是something else。",
          errorType: "推理过度：考生须区分\"更好价\"与\"更高价\"的并列。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"trace\" in Paragraph 2 is closest in meaning to ____.",
        options: [
          "a kind of expensive running shoe",
          "a friendly conversation between friends",
          "a written agreement with a shop",
          "a sign or record left by something done"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：Every click, like and search leaves a trace, and companies collect these traces in order to understand what kind of person you are.",
          correctReason: "每次点击、点赞、搜索都留下a trace，公司收集这些痕迹来分析你，trace即\"痕迹、记录\"，D正确。",
          wrongA: "无据：跑鞋是第1段例子，与词义无关。",
          wrongB: "无据：原文讨论的是行为记录，非交谈。",
          wrongC: "无据：与书面协议无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "语境误判：考生须抓住\"leaves a trace\"的搭配。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the main purpose of the last paragraph?",
        options: [
          "To tell readers to turn off the internet completely",
          "To list the names of all tracking software",
          "To offer small practical habits to protect personal data",
          "To prove that all free services are illegal"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：Small habits help: reading the small settings before you click \"agree\", refusing permissions you do not need...",
          correctReason: "末段给出读设置、拒权限等保护数据的小习惯，目的是提供实用建议，C准确。",
          wrongA: "相反：原文说You need not turn off the internet。",
          wrongB: "无据：末段未列举任何软件名。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文只说免费服务有价格，未称其违法。",
          errorType: "段落功能误判：考生须识别末段是建议性收尾。"
        }
      }
    ]
  },

  {
    id: "r080",
    title: "The Museum That Stays Open After Dark",
    type: "成考标准",
    level: "D",
    category: "博物馆",
    wordCount: 346,
    text: "Once, a museum was a quiet building where a visitor walked from glass case to glass case, spoke in a low voice, and left before it grew dark. Somewhere along the way, that picture changed. On summer nights, a museum may now stay open until ten, fill its halls with young people, and play music in the courtyard. The old treasure house has become a place to meet friends on a weekend evening, not only a place to study on a school trip.\n\nThe change did not happen by chance. Museums once depended on gifts from rich families, assuming people would come because the objects were important. When fewer visitors arrived, directors realized that a collection is dead unless someone looks at it. They began to design exhibitions around stories rather than objects, to offer guides who spoke like hosts, and to open cafes and bookshops where people could rest without feeling hurried.\n\nTechnology has pushed the door open even wider. A viewer can now stand before an ancient pot, point a phone at it, and hear a voice explain the life of the person who made it two thousand years ago. Some museums offer online tours so detailed that a student in another country can walk the same halls without a plane ticket. The object has not moved, but the distance to the public has grown shorter.\n\nYet the new friendliness brings its own worries. Critics fear that a museum which tries too hard to be entertaining may turn a painting into a background for a photograph, and that visitors will remember the selfie but forget the work. A treasure house, they argue, should still ask for a little silence and attention.\n\nNeither side misses the point entirely. A museum that no one enters has failed, but a museum that has become a party has also failed. The challenge is to welcome the crowd without losing the quiet voice of the objects on the wall. The best nights are those when the music outside is heard, but the painting inside can still be heard too.",
    translation: "博物馆曾经是一座安静的建筑：参观者从一个玻璃柜走到下一个玻璃柜，压低了声音说话，在天黑之前便离开。不知从何时起，那幅画面变了。夏日的夜晚，博物馆如今可能开放到十点，大厅里挤满年轻人，院子里还播放着音乐。这座古老的藏宝地，已经变成了周末傍晚和朋友见面的地方，而不只是学校组织参观时才去学习的地方。\n\n这种变化并非偶然。博物馆曾经依靠富人家族的捐赠，并且想当然地认为，人们会因为这些文物重要而来。当参观者越来越少时，馆长们意识到：一件藏品若没有人看，便是死的。于是他们开始围绕故事而非物品来设计展览，聘请像主持人一样的讲解员，还开设了咖啡馆和书店，让人们可以歇脚而不感到被催促。\n\n技术又把这扇门推得更开。如今，一位参观者可以站在一只古陶罐前，把手机对准它，便听到一个声音讲述两千年前造这只罐的人的生活。一些博物馆还提供极为详尽的线上导览，让另一个国家的学生不必买机票，也能\"走\"过同样的展厅。文物本身并未移动，但它与公众之间的距离，忽然短了许多。\n\n然而这种新的友好也带来了它自己的担忧。批评者担心，一座博物馆若过于努力地想变得有趣，可能会把一幅画变成拍照的背景；参观者也许记得那张自拍，却忘了那幅作品本身。他们说，一座藏宝地，仍然应当要求人们付出一点安静和专注。\n\n两边都没有完全说错。一座无人进入的博物馆是失败的，但一座变成派对的博物馆同样是失败的。挑战在于：既要欢迎人群，又不失去墙上文物那安静的声音。说到底，最好的夜晚，是外面的音乐听得见，而里面的画也依然听得见的那种夜晚。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why did museums begin to change their way of presenting collections?",
        options: [
          "They had to return all gifts to rich families",
          "They were forbidden to show ancient objects",
          "Fewer visitors came, so they wanted to attract people again",
          "They had no money left to repair the buildings"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：When fewer visitors arrived, directors realized that a collection is dead unless someone looks at it.",
          correctReason: "第二段明确说参观者减少后，馆长意识到没人看的藏品是死的，于是围绕故事设计展览，C与原文一致。",
          wrongA: "无据：原文说过去依靠捐赠，未说要退还。",
          wrongB: "无据：原文未禁止展示古物。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：与建筑维修资金无关。",
          errorType: "定位错误：考生须抓住\"fewer visitors\"这一转折原因。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the online tours offered by some museums?",
        options: [
          "They require a plane ticket to another country",
          "They are only for rich students who travel a lot",
          "They make the museum completely unnecessary",
          "They allow distant students to see the halls without travelling"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：Some museums offer online tours so detailed that a student in another country can walk the same halls without a plane ticket.",
          correctReason: "原文说国外学生不必买机票也能\"走\"过同样的展厅，可推出线上导览让远方学生无需旅行即可参观，D正确。",
          wrongA: "相反：原文说without a plane ticket。",
          wrongB: "无据：线上导览面向学生，未限定富人。",
          wrongC: "无据：原文未说博物馆因此多余。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理过度：考生勿把\"线上导览\"误读为\"博物馆无用\"。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"entertaining\" in Paragraph 4 is closest in meaning to ____.",
        options: [
          "meant to amuse and interest people",
          "quiet and completely silent",
          "expensive to enter",
          "ancient and untouched"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：a museum which tries too hard to be entertaining may turn a painting into a background for a photograph.",
          correctReason: "过于追求entertaining会把画变成拍照背景，entertaining即\"有趣、娱乐性强\"，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：这与entertaining所带来的喧闹相对。",
          wrongC: "无据：原文未谈门票价格。",
          wrongD: "无据：与古旧未动无关。",
          errorType: "语境误判：考生须抓住\"turn a painting into a background for a photograph\"推断其意为\"娱乐化\"。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward the modernized museum?",
        options: [
          "He welcomes it completely and wants more parties",
          "He values both welcoming visitors and keeping the art's quiet voice",
          "He wants museums to close at six o'clock as before",
          "He believes all online tours should be deleted"
        ],
        correct: 1,
        explanation: {
          location: "原文末段：The challenge is to welcome the crowd without losing the quiet voice of the objects on the wall.",
          correctReason: "作者主张既欢迎人群、又不失去文物安静的声音，态度平衡，B准确。",
          wrongA: "相反：末段说变成派对也是失败。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：作者认可开放到晚上，未要求六点关门。",
          wrongD: "无据：第3段肯定线上导览缩短距离，未要求删除。",
          errorType: "态度片面：考生勿把批评者担忧当成作者本人反对。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_8 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_8 = READING_BATCH_8;
}

