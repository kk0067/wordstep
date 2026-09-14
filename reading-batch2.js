// 成人高考专升本英语阅读题库 第二批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一批不重复）：家庭、旅游、科普、老龄化、志愿服务、食品安全、体育、农业、能源、社会变化
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_2 = [
  {
    id: "r011",
    title: "The Return of the Three-Generation Family",
    type: "成考标准",
    level: "D",
    category: "家庭",
    wordCount: 258,
    text: "In many Western countries, it is common for young people to move out of their parents' homes as soon as they start working. In China, however, more and more adult children are choosing to live with their parents, or even to bring their parents to live with them in the city. This trend has brought the three-generation household back into the mainstream.\n\nThere are practical reasons for this change. Housing prices in large cities have risen so high that a young couple can hardly afford an apartment on their own. Living with parents allows them to share the cost of rent or a mortgage. Grandparents also provide invaluable help with childcare, which means both parents can keep working without paying for expensive nursery care. For many families, this arrangement simply makes economic sense.\n\nYet sharing a home across generations is not always easy. Different habits, different values, and different ways of raising children can cause daily friction. Grandparents may spoil their grandchildren, while young parents want stricter rules. Dinner time can turn into a debate about television, diets, or household duties. Privacy, too, can become a problem when adults who once had their own home now share every room with relatives.\n\nSuccessful three-generation families usually agree on clear rules. They discuss money openly, divide housework fairly, and give each other enough personal space. When these boundaries are respected, the arrangement becomes a source of strength rather than a source of stress. In a fast-changing society, a family that supports each other across generations can be a real advantage.",
    translation: "在许多西方国家，年轻人一参加工作就搬出父母家是很常见的事。然而在中国，越来越多的成年子女选择和父母同住，甚至把父母接到城里一起生活。这一趋势让三代同堂的家庭重新成为主流。\n\n这种变化有现实原因。大城市的房价涨得如此之高，以至于一对年轻夫妇几乎负担不起一套属于自己的房子。和父母同住让他们可以分摊房租或房贷。祖父母还在照看孩子方面提供了无价的帮助，这意味着父母双方都可以继续工作，而不必支付昂贵的托儿所费用。对许多家庭来说，这种安排在经济上是合理的。\n\n然而，几代人同住一个屋檐下并不总是容易。不同的生活习惯、不同的价值观、不同的育儿方式，都可能造成日常的摩擦。祖父母可能会溺爱孙辈，而年轻父母则希望有更严格的规矩。晚餐时间可能变成一场关于电视、饮食或家务的争论。当曾经拥有自己家的成年人如今要和亲戚共用每一个房间时，隐私也会成为一个问题。\n\n成功的三代同堂家庭通常会就明确的规则达成一致。他们公开讨论钱的问题，公平地分担家务，并给彼此足够的私人空间。当这些边界得到尊重时，这种安排就会成为力量的源泉，而不是压力的来源。在一个快速变化的社会里，一个跨代互相支持的家庭，确实是一种优势。",
    questions: [
      {
        questionType: "细节题",
        question: "What is one practical reason for the return of the three-generation household?",
        options: [
          "Housing prices in big cities are too high for a young couple to afford alone.",
          "Young people dislike cooking in their own kitchens.",
          "Parents are forced to move by the local government.",
          "Children prefer living with grandparents over their parents."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段第2句：Housing prices in large cities have risen so high that a young couple can hardly afford an apartment on their own.",
          correctReason: "原文直接指出大城市房价过高，年轻夫妇独自负担不起，这是三代同堂回归的现实原因，与A选项一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有提到年轻人不喜欢在自己厨房做饭，属于无中生有。",
          wrongC: "原文未提及/相反：文章说子女主动把父母接来，并非政府强迫。",
          wrongD: "原文未提及：孩子更喜欢和祖父母住没有依据。",
          errorType: "定位错误：考生需要在第2段找到Housing prices这一关键原因句，不能凭生活印象乱选。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the 'daily friction' in Paragraph 3?",
        options: [
          "It disappears as soon as grandparents move in.",
          "It often arises from different habits and values between generations.",
          "It is mainly caused by serious economic problems.",
          "It only happens between husbands and wives."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段第2句：Different habits, different values, and different ways of raising children can cause daily friction.",
          correctReason: "原文明确说摩擦来自不同的习惯、价值观和育儿方式，B选项准确概括。",
          wrongA: "与原文相反：摩擦恰恰是同住后出现的问题，搬进来不会消失。",
          wrongB: "（本题B为正确答案）",
          wrongC: "偷换对象：经济原因是第2段'同住'的理由，不是第3段'摩擦'的原因，张冠李戴。",
          wrongD: "范围缩小/相反：摩擦发生在几代人之间，不只是夫妻之间。",
          errorType: "推理错误：考生可能把第2段的经济话题误当作第3段摩擦的原因，混淆两段。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word 'friction' in Paragraph 3 probably means ____.",
        options: [
          "a kind of warm and close friendship",
          "a physical exercise to build muscles",
          "disagreement or tension between people",
          "a type of family-owned business"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：Different habits... can cause daily friction. 后文举例：晚餐变成争论、隐私成问题。",
          correctReason: "下文举例（debate、privacy becomes a problem）说明friction指人与人之间的不和、摩擦，C选项正确。",
          wrongA: "相反：friction是冲突，不是亲密友谊。",
          wrongB: "词性/词义错误：与体育锻炼无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "词性错误：friction不是生意。",
          errorType: "单词问题：考生若不认识friction，可通过后文'争论''隐私问题'等负面语境推断出'不和'之意。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Young people should never live on their own after marriage.",
          "Three-generation families are the best choice for everyone.",
          "Parents should never help look after their grandchildren.",
          "Living across generations brings both practical benefits and challenges."
        ],
        correct: 3,
        explanation: {
          location: "全文：第2段讲经济/育儿好处，第3段讲摩擦挑战，第4段讲成功的方法。",
          correctReason: "文章既讲三代同堂的现实好处（省钱、育儿），又讲其摩擦与挑战，D选项完整概括正反两面。",
          wrongA: "过度推断：文章并未说年轻人永远不能独自生活。",
          wrongB: "过度推断：文章客观分析利弊，没有说对每个人都'最好'，过于绝对。",
          wrongC: "与原文相反：第2段明确说祖父母帮忙育儿是一大好处。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生若只看第2段好处或第3段问题，容易误选片面选项。"
        }
      }
    ]
  },

  {
    id: "r012",
    title: "Slow Travel: Seeing More by Moving Less",
    type: "成考标准",
    level: "D",
    category: "旅游",
    wordCount: 284,
    text: "For most of the twentieth century, travelling abroad meant trying to see as many places as possible in a limited time. Tourists would visit three cities in five days, take a photo in front of every famous building, and return home exhausted. Recently, however, a different style of travel has become popular, especially among people who are tired of crowded scenic spots.\n\nThis new way is called 'slow travel'. Instead of rushing from one attraction to another, slow travellers spend several days or even weeks in a single town or region. They do not wake up at six in the morning to catch a bus. Instead, they wander through local markets, eat in small family restaurants, and chat with the people who live there. The goal is not to collect stamps in a passport, but to understand how a place actually feels.\n\nSlow travel has clear advantages. It is less stressful, and it often costs less because the traveller is not constantly paying for transport between cities. It also supports local communities directly, since the money spent goes to family-run hotels and street sellers rather than to big international hotel chains. Many slow travellers say they remember these trips more clearly than the whirlwind tours of their youth.\n\nOf course, slow travel is not for everyone. Business travellers, or tourists with only a few days of holiday, may still need to pack a lot into a short trip. But for anyone with the time to spare, slowing down can turn a simple visit into a genuine experience. The best souvenirs, many travellers now agree, are not objects bought in a shop, but the quiet moments spent watching daily life unfold in a foreign place.",
    translation: "在二十世纪的大部分时间里，出国旅行意味着在有限的时间里尽量多看几个地方。游客会在五天内游览三座城市，在每一座著名建筑前拍照，然后精疲力尽地回家。然而最近，一种不同的旅行方式流行起来，尤其是在那些厌倦了拥挤景点的人当中。\n\n这种新方式被称为'慢旅行'。慢旅行者不是从一个景点赶往下一个景点，而是在一个小镇或地区待上几天甚至几周。他们不会早上六点起床赶大巴。相反，他们在当地的集市闲逛，在小型家庭餐馆吃饭，和住在那里的人聊天。他们的目标不是在护照上盖满章，而是去理解一个地方真正的感觉。\n\n慢旅行有明显的优势。它压力更小，而且花费往往更低，因为旅行者不必不断支付城际交通费用。它还直接支持当地社区，因为花的钱流向了家庭经营的旅馆和街头小贩，而不是大型国际连锁酒店。许多慢旅行者说，比起年轻时走马观花的旅行，他们对这些行程记得更清楚。\n\n当然，慢旅行并不适合所有人。商务旅行者，或者只有几天假期的游客，可能仍然需要在短时间里塞进行程。但对于任何有时间的人来说，放慢脚步可以把一次简单的游览变成真正的体验。现在许多旅行者都认同，最好的纪念品不是在商店里买的东西，而是在异乡静静观察日常生活展开的那些时刻。",
    questions: [
      {
        questionType: "细节题",
        question: "How is slow travel different from traditional travel according to Paragraph 2?",
        options: [
          "It costs more money than ordinary travel.",
          "It means staying longer in one place rather than rushing around.",
          "It requires a professional guide for every step of the trip.",
          "It is mainly designed for business travellers."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段第2句：Instead of rushing from one attraction to another, slow travellers spend several days or even weeks in a single town or region.",
          correctReason: "原文对比传统旅行（赶景点）和慢旅行（在一处停留数天甚至数周），B选项准确。",
          wrongA: "与原文相反：第3段说慢旅行costs less，并非更贵。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：文章没有说需要专业导游。",
          wrongD: "与原文相反：第4段说商务旅客仍需紧凑行程，慢旅行不专为他们设计。",
          errorType: "定位错误：考生需要抓住第2段Instead of...与传统旅行的对比结构。"
        }
      },
      {
        questionType: "信息定位题",
        question: "Which of the following is NOT mentioned as an advantage of slow travel in the passage?",
        options: [
          "It is less stressful than rushing between cities.",
          "It often costs less than traditional tours.",
          "It guarantees perfect weather throughout the trip.",
          "It supports local family-run businesses directly."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：It is less stressful... it often costs less... It also supports local communities directly...",
          correctReason: "A、B、D三项在第3段均被明确提到；'保证完美天气'全文未提及，C为未提及项，符合NOT题。",
          wrongA: "与原文一致：less stressful是原文明确提到的优点，故不是答案。",
          wrongB: "与原文一致：costs less是原文优点，故不是答案。",
          wrongC: "（本题C为正确答案，原文未提及）",
          wrongD: "与原文一致：supports local communities直接支持当地，故不是答案。",
          errorType: "定位错误：NOT题要求逐项回原文核对，考生容易凭印象把常识（旅行要天气好）误当成原文优点。"
        }
      },
      {
        questionType: "推理题",
        question: "What can we infer about slow travel from the last paragraph?",
        options: [
          "It is suitable for every kind of traveller.",
          "It has completely replaced traditional package tours.",
          "It is most popular among busy business people.",
          "It suits people who have enough time to spend."
        ],
        correct: 3,
        explanation: {
          location: "原文最后一段第3句：But for anyone with the time to spare, slowing down can turn a simple visit into a genuine experience.",
          correctReason: "原文说'对于有时间的人'慢旅行才有意义，可推断它适合时间充裕的人，D选项正确。",
          wrongA: "与原文相反：第4段开头说slow travel is not for everyone。",
          wrongB: "过度推断：文章没有说它完全取代了传统旅行。",
          wrongC: "与原文相反：商务旅客时间紧，仍需紧凑行程。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理错误：考生若忽略第4段not for everyone和with the time to spare两个限定，容易误选A。"
        }
      },
      {
        questionType: "文章目的题",
        question: "Why did the writer most likely write this passage?",
        options: [
          "To introduce and explain a new style of travelling.",
          "To advertise a specific international travel agency.",
          "To argue that every tourist must travel slowly.",
          "To describe the long history of famous scenic spots."
        ],
        correct: 0,
        explanation: {
          location: "全文：第1段引入旅行方式变化，第2段定义慢旅行，第3段讲优点，第4段讲适用人群。",
          correctReason: "文章整体介绍并解释'慢旅行'这一新兴旅行方式，A选项符合写作目的。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有为某旅行社打广告。",
          wrongC: "过度推断：第4段明确说慢旅行不适合所有人，并非要求每个人都慢旅行。",
          wrongD: "原文未提及：文章没有描述景点的悠久历史。",
          errorType: "主旨判断错误：考生若把第3段夸大类举例误读为广告，容易误选B；把建议误读为'必须'会误选C。"
        }
      }
    ]
  },

  {
    id: "r013",
    title: "Why Do We Yawn?",
    type: "成考标准",
    level: "D",
    category: "科普",
    wordCount: 294,
    text: "Yawning is something everyone does, yet most people know surprisingly little about it. A yawn usually lasts about six seconds, and during that time our heart rate speeds up, our eyes close, and our mouth opens wide. We yawn when we wake up, when we feel tired, and even when we simply see someone else yawn. Scientists have studied this simple act for decades, but they still disagree about why we do it.\n\nFor a long time, the most popular explanation was that yawning helps the body take in more oxygen. When we are sleepy, the argument went, our breathing becomes shallow, so a wide yawn pulls a large amount of air into the lungs. However, experiments in the 1980s showed that breathing more oxygen does not make people yawn less, and holding one's breath does not make them yawn more. This led researchers to look for another explanation.\n\nToday, many scientists believe that yawning helps cool the brain. The brain works best within a narrow temperature range, and when it gets too warm, its performance drops. A deep yawn brings cool air into the mouth, which lowers the temperature of the blood flowing near the brain. Some researchers also suggest that yawning wakes us up when we are bored, by increasing blood flow to the head.\n\nThe most puzzling detail, however, is why yawns are contagious. Seeing, hearing, or even reading about a yawn often makes us yawn. Some scientists link this to empathy, the ability to share another person's feelings; others believe it is an ancient reflex that once kept groups of humans awake together. Whatever the final answer turns out to be, yawning remains a small mystery that reminds us how much we still have to learn about our own bodies.",
    translation: "打哈欠是每个人都会做的事，但大多数人对它却知之甚少。一次哈欠通常持续约六秒，在这段时间里，我们的心率加快，眼睛闭上，嘴巴张大。我们在醒来时打哈欠，在疲倦时打哈欠，甚至仅仅看到别人打哈欠时也会打。科学家们研究这个简单的动作已有几十年，但他们对我们为什么会打哈欠仍然意见不一。\n\n在很长一段时间里，最流行的解释是打哈欠帮助身体吸入更多氧气。这种说法认为，当我们困倦时，呼吸会变浅，于是一个大哈欠把大量空气吸进肺里。然而，二十世纪八十年代的实验表明，吸入更多氧气并不会让人少打哈欠，屏住呼吸也不会让人多打。这促使研究者去寻找另一种解释。\n\n如今，许多科学家认为打哈欠有助于给大脑降温。大脑在一个狭窄的温度范围内工作最佳，一旦过热，它的表现就会下降。一个深长的哈欠把凉爽的空气吸入口中，从而降低流经大脑附近血液的温度。一些研究者还认为，打哈欠通过增加流向头部的血液，在我们无聊时把我们唤醒。\n\n然而，最令人费解的细节是为什么哈欠会传染。看到、听到，甚至读到关于哈欠的内容，往往都会让我们打哈欠。一些科学家把这与同理心——即分享他人感受的能力——联系起来；另一些人则认为这是一种古老的反射，曾经让人类群体保持清醒。无论最终答案是什么，打哈欠依然是一个小小的谜团，它提醒我们，关于自己的身体，我们还有很多要了解。",
    questions: [
      {
        questionType: "细节题",
        question: "What did the experiments in the 1980s show about yawning?",
        options: [
          "Yawning mainly helps the body take in more oxygen.",
          "People yawn more often when they hold their breath.",
          "Breathing more oxygen does not reduce yawning.",
          "Yawning is caused only by a lack of sleep."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段第4句：experiments in the 1980s showed that breathing more oxygen does not make people yawn less...",
          correctReason: "原文直接说八十年代实验表明吸入更多氧气并不会减少打哈欠，C选项与原文一致。",
          wrongA: "与原文相反：这是被实验推翻的旧解释，不是实验结论。",
          wrongB: "与原文相反：原文说holding one's breath does not make them yawn more。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：实验没有说打哈欠只由缺觉引起。",
          errorType: "定位错误：考生需要区分第2段'旧解释'与'实验结论'，把被推翻的oxygen理论当成答案会误选A。"
        }
      },
      {
        questionType: "指代题",
        question: "The phrase 'its performance drops' in Paragraph 3, the word 'its' refers to ____.",
        options: [
          "the lungs",
          "the blood",
          "the eyes",
          "the brain"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段第2句：The brain works best within a narrow temperature range, and when it gets too warm, its performance drops.",
          correctReason: "该句主语是The brain，it和its都指代大脑，即大脑过热时其（大脑的）表现下降，D选项正确。",
          wrongA: "指代错误：lungs是第2段提到的旧理论对象，本句主语并非肺。",
          wrongB: "指代错误：blood在后面才出现，不是its的先行词。",
          wrongC: "指代错误：eyes与本句温度话题无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "指代错误：考生需往前找最近的名词主语The brain，不能凭'performance'的搭配乱猜。"
        }
      },
      {
        questionType: "推理题",
        question: "What does the writer suggest about contagious yawning?",
        options: [
          "Scientists have not yet fully agreed on its cause.",
          "It proves that yawns spread through the air like a disease.",
          "It mainly happens only among close friends and family.",
          "It has already been completely explained by researchers."
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Some scientists link this to empathy... others believe it is an ancient reflex...",
          correctReason: "对传染性哈欠，科学家'有人认为…另一些认为…'，说明尚未达成一致，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有说像疾病一样通过空气传播。",
          wrongC: "原文未提及：文章没有说只发生在亲友之间。",
          wrongD: "与原文相反：文章称这仍是'mystery'，并未被完全解释。",
          errorType: "推理错误：考生需要抓住Some... others...的并列结构，理解为'意见不一'，而非'已有定论'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the passage mainly about?",
        options: [
          "The history of medical experiments in the 1980s.",
          "Different scientific explanations for why people yawn.",
          "How to stop yawning during important meetings.",
          "The health dangers of sleeping too little."
        ],
        correct: 1,
        explanation: {
          location: "全文：第1段提出'为何打哈欠'的疑问，第2段oxygen旧说，第3段cool the brain新说，第4段传染性哈欠之谜。",
          correctReason: "文章围绕'人为什么打哈欠'这一问题，介绍了不同的科学解释，B选项概括准确。",
          wrongA: "以偏概全：八十年代实验只是第2段一个细节，非全文主题。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：文章没有教人如何在会议上忍住哈欠。",
          wrongD: "以偏概全：sleepy/tired只是背景，不是主题。",
          errorType: "主旨判断错误：考生容易被某一段的实验或细节词吸引而误选局部选项。"
        }
      }
    ]
  },

  {
    id: "r014",
    title: "Cities Prepare for an Older Population",
    type: "成考标准",
    level: "D",
    category: "老龄化",
    wordCount: 262,
    text: "China's population is growing older, and this change is already reshaping the way cities are designed. In the past few decades, most public buildings were planned with young and middle-aged people in mind. Now, planners and engineers have to think seriously about the needs of elderly citizens.\n\nThe numbers explain why this matters. Life expectancy has risen steadily, and a larger share of the population is now over sixty. By some estimates, one in four people in China will be aged sixty or older within the next twenty years. This means that buses, hospitals, parks, and even pavements must be made suitable for people who walk more slowly, see less clearly, and may have difficulty climbing stairs.\n\nSome changes are already visible. Many new subway stations now have lifts instead of only stairs. Park paths are being widened so that two people walking side by side, or a person using a walking stick, can pass comfortably. Hospitals have introduced special windows where elderly patients do not have to wait in long queues. Even television programmes have begun to use larger subtitles, which help people with poorer eyesight.\n\nHowever, adapting a city is about more than physical design. Older people also need social opportunities. Community centres that organise classes, outings, and meals together can reduce loneliness, which is as dangerous to health as smoking, according to some studies. Ageing, after all, is not a problem that any city can simply ignore. Whether a society treats its older members with respect and practical support is often seen as a measure of its own quality.",
    translation: "中国的人口正在老龄化，而这一变化已经在重塑城市的设计方式。在过去几十年里，大多数公共建筑都是按中青年人的需要规划的。如今，规划者和工程师必须认真考虑老年市民的需求。\n\n数字说明了为什么这很重要。预期寿命稳步提高，如今六十岁以上的人口占比越来越大。据估计，在未来二十年内，中国将有四分之一的人年满六十岁或以上。这意味着公交车、医院、公园，甚至人行道，都必须适合那些走得更慢、看得不清、可能爬楼梯有困难的人。\n\n一些变化已经显现。许多新建地铁站现在都装有电梯，而不只是楼梯。公园的步道正在拓宽，好让并排行走的两个人，或拄拐杖的人，都能舒适地通过。医院开设了专门窗口，让老年患者不必排长队等候。就连电视节目也开始使用更大的字幕，这有助于视力较差的人。\n\n然而，让一座城市适应老龄化，不仅仅是物理设计的问题。老年人还需要社交机会。组织课程、郊游和聚餐的社区中心可以减少孤独感，而据一些研究，孤独对健康的危害不亚于吸烟。毕竟，老龄化不是任何城市都能简单忽视的问题。一个社会是否以尊重和实际支持对待老年成员，往往被看作衡量其自身品质的尺度。",
    questions: [
      {
        questionType: "细节题",
        question: "Why are cities now being redesigned for elderly people?",
        options: [
          "Because young people no longer choose to live in cities.",
          "Because most public buildings are already too old to use.",
          "Because elderly people refuse to take public transport.",
          "Because a growing share of the population is over sixty."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：a larger share of the population is now over sixty... within the next twenty years, one in four... aged sixty or older.",
          correctReason: "城市重新设计的根本原因是六十岁以上人口比例不断上升，D选项与原文一致。",
          wrongA: "原文未提及：年轻人不住城市没有依据。",
          wrongB: "与原文相反：第1段说公共建筑过去按中青年人设计，并非'太旧不能用'。",
          wrongC: "原文未提及：老年人并非拒绝公共交通，而是需要更适合的设施。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需要回到第2段数字找原因，不能凭主观猜测。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the examples of lifts, wider paths, and larger subtitles?",
        options: [
          "Small design changes can greatly improve elderly people's daily life.",
          "Old people cannot use any modern technology at all.",
          "Chinese cities have already finished adapting to ageing.",
          "Television programmes should simply be more interesting."
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：lifts instead of only stairs; paths are being widened; larger subtitles... help people with poorer eyesight.",
          correctReason: "电梯、宽步道、大字幕这些都是小的设计改动，却方便了老人日常出行和生活，A选项合理推断。",
          wrongA: "（本题A为正确答案）",
          wrongB: "过度推断/相反：文章恰恰在为老年人提供现代设施，并非他们不能用现代科技。",
          wrongC: "与原文相反：第3段说Some changes are already visible（部分已可见），并非'已经完成'。",
          wrongD: "偷换对象：大字幕是为了视力，不是说节目要更有趣。",
          errorType: "推理错误：考生需把第3段多个例子归纳为'小改动带来大便利'，而非孤立看每个例子。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The phrase 'life expectancy' in Paragraph 2 probably means ____.",
        options: [
          "the average age at which people start their first job",
          "the average number of years people can expect to live",
          "the total number of children a family has",
          "the speed at which a city grows"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Life expectancy has risen steadily, and a larger share of the population is now over sixty.",
          correctReason: "后半句说六十岁以上人口增多，可见life expectancy指'预期寿命'，即人能活的平均年数，B选项正确。",
          wrongA: "词义错误：与开始工作的年龄无关。",
          wrongB: "（本题B为正确答案）",
          wrongC: "词义错误：与家庭孩子数量无关。",
          wrongD: "词义错误：与城市发展速度无关。",
          errorType: "单词问题：考生可通过'risen'+后句'over sixty'的语境推断该短语与'活多久'有关。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the writer's attitude towards an ageing population?",
        options: [
          "It is a problem that cities can simply ignore.",
          "It is mainly a cause for national celebration.",
          "It is a challenge that cities must deal with practically.",
          "It will disappear completely within twenty years."
        ],
        correct: 2,
        explanation: {
          location: "原文最后一段：Ageing is not a problem that any city can simply ignore. 及全文建议建电梯、宽步道、社区中心等。",
          correctReason: "作者既指出老龄化不可忽视，又提出一系列实际应对措施，态度务实、正视挑战，C选项正确。",
          wrongA: "与原文相反：原文说not a problem any city can simply ignore。",
          wrongB: "过度推断：文章没有把老龄化当庆祝之事。",
          wrongC: "（本题C为正确答案）",
          wrongD: "与原文相反：第2段说未来二十年老龄化会加剧，不会消失。",
          errorType: "态度判断错误：考生若把第3段'已有的改善'误读为乐观庆祝，容易误选B。"
        }
      }
    ]
  },

  {
    id: "r015",
    title: "Why People Volunteer Their Time",
    type: "成考标准",
    level: "D",
    category: "志愿服务",
    wordCount: 263,
    text: "Volunteering has become an increasingly common part of community life in China. Every weekend, thousands of people give up their free time to work in old people's homes, clean up parks, or teach children in rural schools without receiving any payment. Yet the question remains: why do they do it?\n\nThe most obvious answer is that volunteers help others. A young university student who reads to elderly people living alone may brighten their entire week. A retired engineer who guides visitors at a museum passes on knowledge that would otherwise be lost. In this sense, volunteering fills gaps that government services alone cannot cover.\n\nBut volunteers themselves often gain as much as they give. Many say that helping others gives their lives a stronger sense of meaning, especially when their paid work feels repetitive or unfulfilling. For young people, volunteering is also a chance to develop skills they cannot learn in class. A student who organises a charity fair learns how to manage a team, handle money, and deal with unexpected problems. Employers increasingly value this kind of practical experience when they look at job applications.\n\nThere is also a simpler explanation: volunteering simply makes people feel good. Studies have found that doing something kind for others releases chemicals in the brain that produce a lasting sense of satisfaction. This 'helper's high' is real, and it may explain why many volunteers return again and again. Perhaps the best argument for volunteering is not that it changes the world, but that it changes the person who does it, one small act at a time.",
    translation: "志愿活动已经成为中国社区生活中越来越常见的一部分。每个周末，成千上万的人放弃自己的空闲时间，到养老院工作、打扫公园，或到乡村学校教孩子，却不收取任何报酬。然而问题依然存在：他们为什么要这样做？\n\n最显而易见的答案是志愿者在帮助他人。一个给独居老人读书的大学生，可能点亮了他们整整一周的生活。一位在博物馆为游客讲解的退休工程师，把否则就会失传的知识传递下去。从这个意义上说，志愿活动填补了单凭政府服务无法覆盖的空白。\n\n但志愿者自身的收获往往不亚于他们的付出。许多人说，帮助他人让自己的生活有了更强的意义感，尤其是当他们的带薪工作显得重复而没有成就感时。对年轻人来说，志愿活动也是一个课堂上学不到的技能发展机会。一个组织慈善义卖的学生学会了如何管理团队、管理钱财、处理突发问题。雇主在看求职申请时，也越来越看重这种实践经验。\n\n还有一个更简单的解释：志愿活动就是让人感觉良好。研究发现，为他人做善事会在大脑中释放化学物质，产生持久的满足感。这种'助人的快感'是真实存在的，它或许能解释为什么许多志愿者一次次地回来。也许，支持志愿活动最好的理由，不在于它改变了世界，而在于它改变了那个付诸行动的人——一次一个小小的善举。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what is the most obvious reason why people volunteer?",
        options: [
          "They help other people who are in need.",
          "They want to become famous as quickly as possible.",
          "They are paid well by the local government.",
          "They are required to do it by law."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段第1句：The most obvious answer is that volunteers help others.",
          correctReason: "原文直接说最显而易见的原因是志愿者帮助他人，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有提到志愿者想出名。",
          wrongC: "与原文相反：第1段明确说without receiving any payment，没有报酬。",
          wrongD: "与原文相反：志愿是自愿的，并非法律强制。",
          errorType: "定位错误：考生需要抓住第2段首句The most obvious answer这一标志。"
        }
      },
      {
        questionType: "推理题",
        question: "Why do employers value volunteering experience, according to the passage?",
        options: [
          "Because volunteers usually come from rich families.",
          "Because volunteers can work longer hours for free.",
          "Because volunteering helps develop practical skills like teamwork.",
          "Because volunteers never complain about their salary."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：A student who organises a charity fair learns how to manage a team, handle money, and deal with unexpected problems. Employers increasingly value this kind of practical experience...",
          correctReason: "组织义卖让学生学会管团队、管钱、处理意外，这些实践技能受雇主重视，C选项正确。",
          wrongA: "原文未提及：文章没有讨论志愿者的家庭背景。",
          wrongB: "原文未提及：雇主看重的是技能，不是免费加班。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：与抱怨工资无关。",
          errorType: "推理错误：考生需把manage a team, handle money, deal with problems归纳为'实践技能/团队合作'。"
        }
      },
      {
        questionType: "细节题",
        question: "What do studies find about the so-called 'helper's high'?",
        options: [
          "It is a feeling caused mainly by doing hard physical exercise.",
          "It happens only to young university students.",
          "It lasts for several months after a single volunteer day.",
          "It is a real sense of satisfaction coming from helping others."
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：doing something kind for others releases chemicals in the brain that produce a lasting sense of satisfaction. This 'helper's high' is real...",
          correctReason: "研究发现'助人的快感'是真实的，来自帮助他人产生的满足感，D选项正确。",
          wrongA: "偷换对象：原文说是做善事释放化学物质，不是体育锻炼。",
          wrongB: "范围缩小：文章并未说只发生在大学生身上。",
          wrongC: "过度推断：lasting是'持久'，并非'持续好几个月'。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需要在第4段找到this指代的前句——satisfaction from helping others。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the best title for this passage?",
        options: [
          "How to Find a Well-Paid Job After Graduation.",
          "Why Volunteering Benefits Both Society and the Volunteers.",
          "The History of Old People's Homes in China.",
          "Why University Students Need More Free Time."
        ],
        correct: 1,
        explanation: {
          location: "全文：第2段讲志愿者帮助社会，第3-4段讲志愿者自身收获（意义、技能、快乐）。",
          correctReason: "文章既讲志愿帮助他人/社会，又讲志愿者本人获益，B选项双向概括准确。",
          wrongA: "以偏概全：求职只是第3段一个细节。",
          wrongB: "（本题B为正确答案）",
          wrongC: "以偏概全：养老院只是第1段举例之一。",
          wrongD: "原文未提及：文章没有讨论大学生需要更多空闲时间。",
          errorType: "主旨判断错误：考生容易被某一段细节（找工作、养老院）吸引而误选局部标题。"
        }
      }
    ]
  },

  {
    id: "r016",
    title: "Reading the Labels on Our Food",
    type: "成考标准",
    level: "D",
    category: "食品安全",
    wordCount: 289,
    text: "Most shoppers pick up a packet of biscuits, check the price, and put it in their basket. Few of them turn the packet over to read the list of ingredients, even though this small habit could have a real effect on their health. Food labels are written in a special language, and understanding them is an important life skill.\n\nThe information on a label is not there by chance. By law, producers must list all ingredients in order from the largest amount to the smallest. If sugar appears near the top of the list, the product contains a lot of it, no matter what the advertisement on the front of the packet says. Labels also show the amount of fat, salt, and energy per serving, usually based on a standard portion. Comparing these numbers between two similar products is one of the easiest ways to make a healthier choice.\n\nYet labels can also be misleading. Some producers use attractive words such as 'natural' or 'light' that have no clear legal definition. A product described as 'low fat' may contain far too much sugar to make up for the taste. The trick is not to trust the front cover, which is designed to sell, but to read the small print on the back, which is designed to inform.\n\nLearning to read labels takes only a few minutes in the shop. Nutrition experts suggest checking three things: the order of ingredients, the amount of salt and sugar, and the size of one serving. Once shoppers get into this habit, they no longer fall for clever packaging. In the end, the most honest information about what we eat is printed on the back of the packet, waiting for us to read it.",
    translation: "大多数购物者拿起一包饼干，看一眼价格，就放进了篮子。他们中很少有人把包装袋翻过来读一读成分表，尽管这个小小的习惯可能对他们的健康产生实实在在的影响。食品标签是用一种特殊语言写成的，读懂它们是一项重要的生活技能。\n\n标签上的信息并非随意写上的。根据法律，生产商必须按含量从多到少的顺序列出所有成分。如果糖排在成分表的前面，那这个产品就含有大量糖，无论包装袋正面的广告怎么说。标签还会标出每份所含的脂肪、盐和能量，通常以标准份量为基准。在两种相似产品之间比较这些数字，是做出更健康选择最简单的方法之一。\n\n然而，标签也可能具有误导性。一些生产商使用诸如'天然'或'清淡'之类没有明确定义的诱人词语。一个被描述为'低脂'的产品，为了弥补口味，可能含有过多的糖。诀窍在于不要相信旨在促销的正面包装，而要阅读旨在提供信息的背面小字。\n\n学会读标签在商店里只需要几分钟。营养专家建议检查三样东西：成分的顺序、盐和糖的含量，以及一份的份量。一旦购物者养成这个习惯，他们就不会再被巧妙的包装所迷惑。归根结底，关于我们所吃食物最诚实的信息，就印在包装袋背面，等着我们去阅读。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the law, how should ingredients be listed on a food label?",
        options: [
          "In alphabetical order from A to Z.",
          "From the largest amount to the smallest.",
          "From the smallest amount to the largest.",
          "In the order in which they were added while cooking."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段第2句：By law, producers must list all ingredients in order from the largest amount to the smallest.",
          correctReason: "原文直接说按含量从多到少排列，B选项与法律要求一致。",
          wrongA: "原文未提及：并非按字母顺序。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文是从多到少，不是从少到多。",
          wrongD: "原文未提及：与烹饪加入顺序无关。",
          errorType: "定位错误：考生需准确抓住from the largest amount to the smallest这一方向，方向读反会误选C。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word 'misleading' in Paragraph 3 probably means ____.",
        options: [
          "completely honest and clear",
          "written in very small letters",
          "easy to read and understand",
          "likely to give someone a wrong impression"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：labels can also be misleading. 后文举例：'natural''light'无法律定义，'low fat'却高糖。",
          correctReason: "下文举例说明标签用词会骗人，让人产生错误印象，misleading意为'误导性的'，D选项正确。",
          wrongA: "相反：misleading是误导，不是诚实清晰。",
          wrongB: "混淆概念：small print是另一句话（背面小字），不是misleading的含义。",
          wrongC: "与语境相反：误导性的东西恰恰不易让人正确理解。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生可通过后面'低脂却高糖'的例子，推断misleading指'给人错误印象'。"
        }
      },
      {
        questionType: "推理题",
        question: "Why does the writer say the front cover is 'designed to sell' while the back is 'designed to inform'?",
        options: [
          "Because attractive words on the front may not tell the whole truth.",
          "Because the back cover is always printed in larger letters.",
          "Because producers never care about customers' health at all.",
          "Because the front cover is usually dull and boring."
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：Some producers use attractive words such as 'natural' or 'light' that have no clear legal definition... The trick is not to trust the front cover, which is designed to sell...",
          correctReason: "正面用'天然''清淡'等无法律定义的诱人词促销，可能隐瞒真相，故要相信背面信息，A选项合理。",
          wrongA: "（本题A为正确答案）",
          wrongB: "与原文相反：原文说背面是small print（小字），不是更大的字。",
          wrongC: "过度推断：文章批评的是包装用词，并非说生产商完全不关心健康，过于绝对。",
          wrongD: "与原文相反：正面包装是attractive/clever，并非枯燥。",
          errorType: "推理错误：考生需区分'批评营销用语'与'全盘否定生产商'，避免过度推断误选C。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of the last paragraph?",
        options: [
          "To introduce a new brand of biscuits to readers.",
          "To argue that food labels are actually unnecessary.",
          "To give practical advice on how to read labels wisely.",
          "To compare supermarkets with traditional local markets."
        ],
        correct: 2,
        explanation: {
          location: "原文最后一段：Nutrition experts suggest checking three things: the order of ingredients, the amount of salt and sugar, and the size of one serving.",
          correctReason: "末段具体给出读标签要检查的三样东西，提供可操作的建议，C选项正确。",
          wrongA: "原文未提及：文章没有推荐任何饼干品牌。",
          wrongB: "与原文相反：全文强调读标签很重要，并非不必要。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：末段没有比较超市和集市。",
          errorType: "段落作用判断错误：考生需概括末段'专家建议检查三点'这一功能，而非把例子当成广告或比较。"
        }
      }
    ]
  },

  {
    id: "r017",
    title: "The Benefits of Walking Every Day",
    type: "成考标准",
    level: "D",
    category: "体育",
    wordCount: 272,
    text: "When people think of exercise, they usually imagine running long distances, lifting heavy weights in a gym, or sweating through a team sport. Yet doctors now agree that one of the simplest and most effective forms of physical activity is also the easiest to start: walking.\n\nUnlike running, walking puts little pressure on the knees and ankles, which means almost everyone can do it, regardless of age or physical condition. It does not require expensive equipment, special clothing, or a membership card. A pair of comfortable shoes and a public road or park is enough. This may explain why walking has been recommended by health organisations around the world as a safe starting point for people who have not exercised for years.\n\nThe health benefits are well documented. Regular walking strengthens the heart, helps control blood sugar, and supports healthy bones. It also improves mood, because moving the body releases chemicals that reduce stress and anxiety. Even thirty minutes of brisk walking each day, broken into shorter walks if necessary, can lower the risk of several common diseases. Many regular walkers report that they sleep better and think more clearly as well.\n\nThe real difficulty is not walking itself, but making it a habit. Experts suggest linking a walk to something already part of daily life, such as walking after dinner or getting off the bus one stop early. Over time, these small choices add up. In a society where many people sit at desks for eight hours a day, the simple act of putting one foot in front of the other may be one of the most powerful medicines we have.",
    translation: "当人们想到锻炼时，通常会想象长跑、在健身房举沉重的杠铃，或者在团队运动中汗流浃背。然而医生们如今一致认为，最简单也最有效的体育活动之一，同时也是最容易开始的一种：散步。\n\n与跑步不同，散步对膝盖和脚踝几乎没有压力，这意味着几乎每个人都能做，无论年龄或身体状况如何。它不需要昂贵的器材、特殊的服装或会员卡。一双舒适的鞋和一条公共道路或一个公园就足够了。这或许可以解释，为什么世界各地的健康组织都推荐散步，把它作为多年不运动者安全的起点。\n\n散步对健康的益处已有充分记载。经常散步能增强心脏功能，帮助控制血糖，并强健骨骼。它还能改善情绪，因为活动身体会释放化学物质，减轻压力和焦虑。即使是每天三十分钟的快走，必要时分成几次较短的步行，也能降低患几种常见疾病的风险。许多经常散步的人还反映，他们睡得更好，思维也更清晰。\n\n真正的困难不在于散步本身，而在于把它变成一种习惯。专家建议把散步与日常生活中已有的事情联系起来，比如饭后散步，或者提前一站下公交车。随着时间推移，这些小小的选择会累积起来。在一个许多人每天在办公桌前坐八个小时的社会里，把一只脚放到另一只脚前面这个简单的动作，或许是我们拥有的最有力的'药物'之一。",
    questions: [
      {
        questionType: "细节题",
        question: "Why is walking recommended for people who have not exercised for years?",
        options: [
          "It is more exciting than any other form of sport.",
          "It can only be done inside a special gym.",
          "It is gentle on the body and needs no special equipment.",
          "It promises quick weight loss within a week."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：walking puts little pressure on the knees and ankles... It does not require expensive equipment, special clothing, or a membership card.",
          correctReason: "散步对关节压力小，且不需要昂贵器材或会员卡，C选项与原文一致。",
          wrongA: "原文未提及：文章没有说散步比别的运动更刺激。",
          wrongB: "与原文相反：第2段说在公共道路或公园即可，不必在健身房。",
          wrongC: "（本题C为正确答案）",
          wrongD: "过度推断：原文说降低疾病风险、改善情绪，并未承诺一周快速减肥。",
          errorType: "定位错误：考生需要在第2段找到little pressure和does not require equipment两点。"
        }
      },
      {
        questionType: "细节题",
        question: "How does walking improve people's mood according to the passage?",
        options: [
          "By releasing chemicals that reduce stress and anxiety.",
          "By making people breathe less fresh air during the day.",
          "By increasing the price of comfortable sports shoes.",
          "By completely replacing all other kinds of exercise."
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：It also improves mood, because moving the body releases chemicals that reduce stress and anxiety.",
          correctReason: "原文用because给出原因：活动身体释放化学物质，减轻压力焦虑，从而改善情绪，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "与常识/原文相反：散步会让人呼吸更多新鲜空气，不是更少。",
          wrongC: "原文未提及：与鞋价无关。",
          wrongD: "与原文相反：散步是推荐的起点，并非取代所有运动。",
          errorType: "定位错误：考生需抓住because后的原因句，不能凭主观猜测情绪改善的方式。"
        }
      },
      {
        questionType: "推理题",
        question: "What does the writer suggest about making walking a habit?",
        options: [
          "It requires joining an expensive sports club first.",
          "It should be done for at least two hours at one time.",
          "It is impossible for people who work in offices.",
          "It can be achieved by linking walks to daily routines."
        ],
        correct: 3,
        explanation: {
          location: "原文第4段：Experts suggest linking a walk to something already part of daily life, such as walking after dinner or getting off the bus one stop early.",
          correctReason: "专家建议把散步和日常已有的事（饭后、提前一站下车）联系起来，D选项正确。",
          wrongA: "与原文相反：第2段说不需要会员卡/昂贵器材。",
          wrongB: "与原文相反：第3段说三十分钟即可，必要时还可拆分。",
          wrongC: "与原文相反：第4段恰恰建议久坐办公室的人提前一站下车走路。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理错误：考生需把linking a walk to daily life概括为'与日常惯例结合'，避免被club、两小时等干扰项误导。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is this passage mainly about?",
        options: [
          "Why running is superior to all other sports.",
          "The health benefits of walking and how to make it a habit.",
          "The long history of public parks in large cities.",
          "How to choose the most comfortable sports shoes."
        ],
        correct: 1,
        explanation: {
          location: "全文：第1-2段介绍散步容易开始，第3段讲健康益处，第4段讲如何养成习惯。",
          correctReason: "文章既讲散步的健康益处，又讲如何把它变成习惯，B选项完整概括。",
          wrongA: "与原文相反：第2段用跑步作对比突出散步更温和，并非说跑步最好。",
          wrongB: "（本题B为正确答案）",
          wrongC: "以偏概全：公园只是第2段提到的一个场所。",
          wrongD: "以偏概全：舒适的鞋只是第2段一个细节。",
          errorType: "主旨判断错误：考生容易被某段细节（跑步、公园、鞋子）吸引而误选局部选项。"
        }
      }
    ]
  },

  {
    id: "r018",
    title: "Smart Farms: Technology Meets the Land",
    type: "成考标准",
    level: "D",
    category: "农业",
    wordCount: 281,
    text: "Farming has always been one of the most basic human activities, but the way it is done is changing faster than ever. In the past, a farmer decided when to plant based on experience, weather signs, and advice from neighbours. Today, that same farmer may use a smartphone to check soil moisture, a drone to photograph the fields, and a computer to calculate the best time to harvest.\n\nThese new tools are often called 'smart agriculture', and they are spreading quickly. Sensors placed in the ground measure how much water and fertiliser each part of a field needs, so that nothing is wasted. Drones flying overhead can discover which plants are sick long before the human eye notices. Tractors equipped with satellite guidance can drive themselves along the rows with remarkable accuracy. The result is higher production with fewer resources, which matters as the world's population continues to grow.\n\nSmart farming is not without its difficulties. The equipment is expensive, and many small farmers cannot afford it. Using the technology also requires training, and older farmers may feel confused by screens and data. In some regions, governments and companies have started shared programmes, where farmers rent the tools together or receive technical training for free. These efforts aim to make new technology available to everyone, not just to large agribusinesses.\n\nStill, the direction is clear. Young farmers, who have grown up with phones and computers, are often the quickest to adopt these tools. They see farming not as a backward way of life, but as a high-tech profession. If this generation continues to lead the change, the farms of the future may look more like laboratories than the countryside of old.",
    translation: "农业一直是人类最基本的活动之一，但其耕作方式的变化却比以往任何时候都快。过去，农民根据经验、天气迹象和邻居的建议来决定何时播种。今天，同一位农民可能用智能手机查看土壤湿度，用无人机航拍农田，用电脑计算最佳收获时机。\n\n这些新工具常被称为'智慧农业'，而且正在迅速普及。埋在地下的传感器测量一块田每个部分需要多少水和肥料，从而不浪费任何资源。在头顶飞过的无人机能在人眼察觉之前很久就发现哪些植物生了病。配备卫星导航的拖拉机能够沿着田垄自行行驶，准确度惊人。其结果是用更少的资源获得更高的产量，而随着世界人口持续增长，这一点至关重要。\n\n智慧农业并非没有困难。设备昂贵，许多小农户负担不起。使用这项技术还需要培训，年长的农民可能会被屏幕和数据弄得一头雾水。在一些地区，政府和企业已经启动共享项目，让农民一起租用工具，或免费接受技术培训。这些努力旨在让新技术惠及每一个人，而不仅仅是大型农业企业。\n\n尽管如此，方向是明确的。伴随着手机和电脑长大的年轻农民，往往是最快采用这些工具的人。他们不把农业看作一种落后的生活方式，而是看作一种高科技职业。如果这一代人继续引领变革，未来的农场看起来可能更像实验室，而不是旧日的乡村。",
    questions: [
      {
        questionType: "细节题",
        question: "What is one advantage of using sensors and drones in farming?",
        options: [
          "They completely remove the need for farmers.",
          "They make the farms look more beautiful to visitors.",
          "They allow farmers to travel abroad for free.",
          "They help use water and fertiliser more efficiently."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：Sensors... measure how much water and fertiliser each part of a field needs, so that nothing is wasted.",
          correctReason: "传感器精确测量水和肥料需求，避免浪费，即更高效利用水肥，D选项正确。",
          wrongA: "过度推断：技术辅助农民，并非完全取代农民。",
          wrongB: "原文未提及：文章没有提到农场美观与否。",
          wrongC: "原文未提及：与免费出国旅行无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需要抓住so that nothing is wasted这一结果句，不能把'提高产量'极端化为'不需要农民'。"
        }
      },
      {
        questionType: "推理题",
        question: "Why may older farmers feel confused by the new technology?",
        options: [
          "Because the equipment is usually painted in bright colours.",
          "Because using it requires training that they may not have.",
          "Because they are not allowed to touch any machines.",
          "Because they strongly prefer working only at night."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：Using the technology also requires training, and older farmers may feel confused by screens and data.",
          correctReason: "原文说使用技术需要培训，而年长农民可能缺乏这种培训，故对屏幕和数据感到困惑，B选项合理。",
          wrongA: "原文未提及：与设备颜色无关。",
          wrongB: "（本题B为正确答案）",
          wrongC: "与原文相反：共享项目正是要培训农民使用，并非禁止碰机器。",
          wrongD: "原文未提及：没有说年长农民只喜欢夜间干活。",
          errorType: "推理错误：考生需把requires training与older farmers may feel confused之间的因果关系联系起来。"
        }
      },
      {
        questionType: "指代题",
        question: "The word 'they' in the last paragraph 'They see farming not as a backward way of life' refers to ____.",
        options: [
          "older farmers who fear new technology",
          "large international agribusinesses",
          "young farmers who grew up with phones and computers",
          "government officials who design the programmes"
        ],
        correct: 2,
        explanation: {
          location: "原文最后一段第2句：Young farmers, who have grown up with phones and computers, are often the quickest to adopt these tools. They see farming not as a backward way of life...",
          correctReason: "前一句主语是Young farmers（伴随手机电脑长大的年轻农民），They承接该主语，C选项正确。",
          wrongA: "指代错误：年长农民在第3段，对技术感到困惑，态度相反。",
          wrongB: "指代错误：agribusinesses在第3段被对比，不是本句主语。",
          wrongC: "（本题C为正确答案）",
          wrongD: "指代错误：政府官员设计共享项目，不是'把农业当高科技职业'的人。",
          errorType: "指代错误：考生需往前找最近的名词主语Young farmers，注意中间插入的定语从句。"
        }
      },
      {
        questionType: "文章目的题",
        question: "Why did the writer most likely write this passage?",
        options: [
          "To introduce how modern technology is changing farming.",
          "To complain that farming is no longer a worthwhile job.",
          "To describe the complete history of the tractor.",
          "To argue that all farmers should retire immediately."
        ],
        correct: 0,
        explanation: {
          location: "全文：第1段对比过去与今天的耕作方式，第2段讲智慧农业工具，第3段讲困难，第4段讲未来方向。",
          correctReason: "文章整体介绍现代技术（手机、无人机、传感器）如何改变农业，A选项符合写作目的。",
          wrongA: "（本题A为正确答案）",
          wrongB: "与原文相反：末段说年轻农民把农业看作高科技职业，并非抱怨农业不值得做。",
          wrongC: "以偏概全：拖拉机只是第2段一个例子。",
          wrongD: "与原文相反：文章鼓励年轻农民引领变革，并非要求所有农民退休。",
          errorType: "主旨判断错误：考生若把第3段'困难'误读为负面抱怨，容易误选B。"
        }
      }
    ]
  },

  {
    id: "r019",
    title: "The Search for Cleaner Energy",
    type: "成考标准",
    level: "D",
    category: "能源",
    wordCount: 302,
    text: "For more than a century, the world has depended heavily on coal, oil, and gas to power its factories, cars, and homes. These fuels have brought enormous benefits, but they have also caused serious problems, including air pollution and climate change. As a result, countries around the world are now searching for cleaner sources of energy.\n\nSolar and wind power have expanded the fastest. The cost of solar panels has fallen sharply over the last decade, making sunlight one of the cheapest sources of electricity in many regions. Wind farms, placed on open plains or just offshore, produce power without burning any fuel. Both technologies have the advantage of being renewable, which means they will not run out the way coal and oil eventually will.\n\nHowever, clean energy also has weaknesses. The sun does not shine at night, and the wind does not always blow, so the electricity they produce is not always available when it is needed. This problem has pushed scientists to develop better ways to store energy, such as larger and more affordable batteries. Until storage improves, power stations that burn natural gas are still needed to fill the gaps, which reduces the environmental benefit.\n\nNuclear energy is another option that divides opinion. It produces almost no pollution during normal operation, but it leaves dangerous waste that must be stored safely for thousands of years. Public fear after accidents has slowed its development in many countries, even though supporters argue that modern plants are far safer than older ones.\n\nNo single solution will meet all our energy needs. The likely future is a mix: more solar and wind, smarter storage, and a gradual move away from coal. The transition will take decades, but most experts agree that continuing to rely on dirty fuels is no longer a responsible choice.",
    translation: "一个多世纪以来，世界严重依赖煤、石油和天然气来为工厂、汽车和住宅提供动力。这些燃料带来了巨大的好处，但也造成了严重的问题，包括空气污染和气候变化。因此，世界各国如今都在寻找更清洁的能源。\n\n太阳能和风能发展得最快。在过去十年里，太阳能电池板的成本急剧下降，使阳光在许多地区成为最廉价的电力来源之一。建在开阔平原或近海的风电场，不需要燃烧任何燃料就能发电。这两种技术都具有可再生的优势，这意味着它们不会像煤和石油那样最终耗尽。\n\n然而，清洁能源也有弱点。太阳在夜晚不照耀，风也不总是吹拂，因此它们产生的电力并非总是在需要时可用。这个问题促使科学家开发更好的储能方式，比如更大、更实惠的电池。在储能改善之前，仍然需要燃烧天然气的发电站来填补缺口，这就降低了环保效益。\n\n核能是另一个引发分歧的选项。它在正常运行时几乎不产生污染，但会留下必须安全储存数千年的危险废料。事故之后的公众恐惧在许多国家减缓了它的发展，尽管支持者辩称现代核电站比旧电站安全得多。\n\n没有任何一种单一方案能满足我们所有的能源需求。可能的未来是一种组合：更多的太阳能和风能、更智能的储能，以及逐步摆脱煤炭。这一转型需要数十年时间，但大多数专家一致认为，继续依赖肮脏的燃料已不再是一种负责任的选择。",
    questions: [
      {
        questionType: "细节题",
        question: "Why have solar and wind power expanded so quickly?",
        options: [
          "Their costs have fallen and they are renewable.",
          "They produce more air pollution than coal.",
          "They can provide power perfectly at any time.",
          "They require no technology or equipment at all."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：The cost of solar panels has fallen sharply... Both technologies have the advantage of being renewable...",
          correctReason: "太阳能和风能成本下降，且可再生，因此发展最快，A选项与原文一致。",
          wrongA: "（本题A为正确答案）",
          wrongB: "与原文相反：清洁能源污染少，并非比煤污染多。",
          wrongC: "与原文相反：第3段说夜晚/无风时不能发电，并非任何时候都完美供电。",
          wrongD: "与原文相反：太阳能电池板、风电场都是技术设备。",
          errorType: "定位错误：考生需把第2段cost fallen和renewable两点结合，不要被第3段的弱点干扰。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word 'renewable' in Paragraph 2 probably means ____.",
        options: [
          "expensive and very difficult to find",
          "dangerous to people's health",
          "already used up by past generations",
          "naturally replaced and never running out"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：being renewable, which means they will not run out the way coal and oil eventually will.",
          correctReason: "which means后直接解释：它们不会像煤和石油那样最终耗尽，即可再生、不会用完，D选项正确。",
          wrongA: "与原文相反：第2段说太阳能成本已大幅下降，并非昂贵难找。",
          wrongB: "偷换概念：危险是第4段核能废料的问题，不是renewable的含义。",
          wrongC: "与原文相反：'已经用完'是煤和石油的结局，恰是renewable所否定的。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生需通过which means后的同位语解释推断词义，注意对比煤和石油'eventually will run out'。"
        }
      },
      {
        questionType: "细节题",
        question: "What is the main weakness of solar and wind power according to Paragraph 3?",
        options: [
          "They produce too much noise in crowded cities.",
          "Their electricity is not always available when it is needed.",
          "They can only be built near the sea.",
          "They are more expensive than coal everywhere."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：The sun does not shine at night, and the wind does not always blow, so the electricity they produce is not always available when it is needed.",
          correctReason: "太阳能和风能依赖天气，需要时未必有，即电力供应不稳定，B选项正确。",
          wrongA: "原文未提及：文章没有说噪音问题。",
          wrongB: "（本题B为正确答案）",
          wrongC: "与原文不符：风电场可建在开阔平原，不只在海边；太阳能更不依赖海。",
          wrongD: "与原文相反：第2段说太阳能已是最廉价电力之一。",
          errorType: "定位错误：考生需抓住so引导的结果句'not always available when needed'，不能凭常识乱猜弱点。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the writer's attitude toward the future of energy?",
        options: [
          "Dirty fuels will continue to be the only choice.",
          "Nuclear energy should be developed as fast as possible.",
          "A mix of cleaner sources is likely, but the change will take time.",
          "Solar power alone will solve every energy problem tomorrow."
        ],
        correct: 2,
        explanation: {
          location: "原文最后一段：The likely future is a mix: more solar and wind, smarter storage, and a gradual move away from coal. The transition will take decades...",
          correctReason: "作者认为未来是多种清洁能源的组合，且转型需要数十年，态度务实平衡，C选项正确。",
          wrongA: "与原文相反：末句说继续依赖肮脏燃料不再负责任。",
          wrongB: "与原文相反：第4段说核能divides opinion，作者未主张尽快发展。",
          wrongC: "（本题C为正确答案）",
          wrongD: "与原文相反：末段说No single solution，太阳能不能单独解决一切。",
          errorType: "态度判断错误：考生若只看某一段（核能或太阳能），容易误选极端化的B或D。"
        }
      }
    ]
  },

  {
    id: "r020",
    title: "The Way We Eat Has Changed",
    type: "成考标准",
    level: "D",
    category: "社会变化",
    wordCount: 290,
    text: "Food has always been more than something we need to survive. It reflects who we are, where we come from, and how we live. In China, the way people eat has changed more in the last thirty years than in the previous three hundred.\n\nIn the past, a family meal was a serious daily event. Several dishes were cooked from scratch, everyone sat around a table together, and the meal marked a pause in the day. Today, that picture is increasingly rare. Both parents often work long hours, and the children spend much of their time at school or in after-school classes. Cooking a full dinner at seven o'clock becomes difficult, so families increasingly order food online or heat up prepared meals.\n\nThis change has been driven by technology as much as by busy schedules. Food delivery apps now bring almost any dish to the door within half an hour, and supermarkets sell ready-made dumplings, soups, and snacks that once took hours to prepare. For many single young people living far from home, cooking for one is simply not worth the effort, and eating alone at a small table has replaced the shared family dinner.\n\nNot everyone sees this as a loss. Some argue that being busy is a sign of a growing economy, and that no one should have to spend half the day in the kitchen. Others worry that when we stop cooking together, we also lose a chance to talk, to pass on recipes, and to teach children where food comes from. Neither side is completely right or wrong. As with most social changes, the reality is that we gain some conveniences and lose some traditions, and the challenge is to keep the parts that really matter.",
    translation: "食物从来不仅仅是我们赖以生存的东西。它反映了我们是谁、来自何方、过着怎样的生活。在中国，人们饮食方式在过去三十年里的变化，超过了此前三百年。\n\n过去，一顿家餐是每天一件郑重的事。几道菜都是从零开始做，全家人围坐在一张桌子旁，这顿饭标志着一天中的一次停顿。今天，那幅画面越来越少见了。父母双方往往都长时间工作，孩子把大部分时间花在学校或课外班上。晚上七点做一顿完整的晚餐变得困难，于是家庭越来越多地在网上点餐，或者加热预制饭菜。\n\n这一变化既是繁忙作息推动的，也是技术推动的。外卖应用现在能在半小时内把几乎任何菜送到门口，超市出售现成的饺子、汤和零食，而这些从前要花好几个小时准备。对许多远离家乡独自生活的年轻人来说，为一个人做饭实在不值得费心，于是在一张小桌子旁独自吃饭，取代了共享的家宴。\n\n并非所有人都把这看作一种损失。一些人认为，忙碌是经济增长的标志，没有人应该被迫把半天时间花在厨房里。另一些人则担心，当我们不再一起做饭时，我们也失去了交谈、传配方、教孩子食物从何而来的机会。双方都不完全对，也不完全错。正如大多数社会变化一样，现实是我们获得了一些便利，也失去了一些传统，而挑战在于留住那些真正重要的部分。",
    questions: [
      {
        questionType: "细节题",
        question: "Why do families cook full dinners less often now according to Paragraph 2?",
        options: [
          "Because people have completely lost their appetite.",
          "Because both parents work long hours and are busy.",
          "Because cooking equipment has become too expensive.",
          "Because children refuse to eat any home-cooked food."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Both parents often work long hours... Cooking a full dinner at seven o'clock becomes difficult...",
          correctReason: "父母双方长时间工作、孩子忙于学业，导致做完整晚餐变难，B选项与原文一致。",
          wrongA: "原文未提及：文章没有说人们没胃口。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：文章没有说厨具变贵。",
          wrongD: "原文未提及：孩子拒绝吃家常菜没有依据。",
          errorType: "定位错误：考生需要在第2段找到原因句Both parents often work long hours。"
        }
      },
      {
        questionType: "推理题",
        question: "Why do many single young people prefer ordering food online?",
        options: [
          "Because delivery food is always healthier than home cooking.",
          "Because they want to learn cooking skills from food apps.",
          "Because cooking for just one person seems like too much effort.",
          "Because restaurants pay them to order dishes online."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：For many single young people living far from home, cooking for one is simply not worth the effort...",
          correctReason: "一个人做饭不值得费心，所以年轻人更爱点外卖，C选项正确。",
          wrongA: "与原文相反：全文并未说外卖比家常菜健康，反而担心失去传统。",
          wrongB: "原文未提及：文章没有说年轻人想从外卖应用学厨艺。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：餐馆付钱让他们点餐没有依据。",
          errorType: "推理错误：考生需抓住not worth the effort这一态度，不能把'便利'误读为'更健康'。"
        }
      },
      {
        questionType: "细节题",
        question: "What do the people who worry about the change believe?",
        options: [
          "Cooking together offers a chance to communicate and pass on traditions.",
          "A busy life is a clear sign of a failing economy.",
          "Young people should immediately move back to the countryside.",
          "Family dinners should be completely replaced by fast food."
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Others worry that when we stop cooking together, we also lose a chance to talk, to pass on recipes, and to teach children where food comes from.",
          correctReason: "担忧者认为一起做饭是交谈、传配方、教孩子的机会，即交流与传承传统，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：认为忙碌是经济增长标志的是另一方，且'衰退'与原文相反。",
          wrongC: "原文未提及：文章没有建议年轻人回农村。",
          wrongD: "相反：这是担忧者反对的，不是他们相信的。",
          errorType: "定位错误：考生需区分第4段两方观点——some argue（忙碌好）与others worry（失去交流），不要张冠李戴。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Chinese food is the best cuisine in the whole world.",
          "Cooking skills should be taught in every primary school.",
          "Food delivery apps should be banned by the government.",
          "Changes in eating habits bring both convenience and loss."
        ],
        correct: 3,
        explanation: {
          location: "全文：第2-3段讲饮食变化（外卖、预制菜），第4段讲利弊两方——获得便利与失去传统。",
          correctReason: "文章客观呈现饮食变化带来的便利与失去的传统，D选项完整概括正反两面。",
          wrongA: "原文未提及：文章没有比较哪种菜系最好。",
          wrongB: "原文未提及：文章没有建议小学开设烹饪课。",
          wrongC: "与原文相反：作者客观中立，并未要求禁用外卖。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生若只看第4段某一方观点（忙碌好/传统失落），容易误选片面选项。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_2 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_2 = READING_BATCH_2;
}
