// 成人高考专升本英语阅读题库 第六批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一至五批不重复）：团队合作、沟通技巧、创造力、决策、适应能力、极简生活、在线购物、数字鸿沟、民间故事、手工艺品
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_6 = [
  {
    id: "r051",
    title: "Why the Hero Is Rarely Alone",
    type: "成考标准",
    level: "D",
    category: "团队合作",
    wordCount: 301,
    text: "People are taught from childhood that the person who reaches the finish line first deserves the prize. The fastest runner, the loudest speaker, and the student with the highest score are praised as if greatness were always a lonely victory. Yet in most workplaces, this picture is misleading. A product that reaches the market, a building that stands safely, and a school that runs well are almost never the work of one hero. They are the result of a hundred small decisions made by people who rarely appear on stage.\n\nGood teamwork is not simply being friendly to everyone. It means being honest when something is wrong, even when honesty is uncomfortable. In a strong team, the junior engineer is willing to tell the experienced manager that a number does not add up, and the manager thanks them instead of punishing them. This balance is hard to achieve. If people are too afraid to disagree, mistakes stay hidden until they become expensive. If people disagree without listening, the meeting turns into a competition of voices.\n\nA useful rule is to separate the idea from the person. When an idea is attacked, its owner should not feel personally attacked. Teams that learn this habit can test ten bad ideas quickly and find the one good one without anyone losing face. By contrast, teams in which every suggestion becomes a battle eventually stop making suggestions at all.\n\nOf course, teamwork cannot replace personal skill. A group of talented people still needs clear roles, shared goals, and someone willing to make the final call when debate goes on too long. The point is not that individuals do not matter. The point is that, in the modern economy, even the brightest individual usually wins by carrying others with them, rather than by leaving them behind.",
    translation: "人们从小受到的教导是：最先冲过终点线的人配得上奖杯。跑得最快的人、嗓门最大的人、分数最高的学生都受到赞扬，仿佛伟大永远是一场孤独的胜利。然而在大多数工作场所，这幅画面是误导人的。一件上市的产品、一栋安全矗立的大楼、一所运转良好的学校，几乎从不是某一位英雄的功劳。它们是由一百个小小的决定累积而成的，而做出这些决定的人很少出现在舞台中央。\n\n良好的团队合作，并不只是对每个人都友好。它意味着在出问题时敢于讲真话，哪怕真话让人难受。在一支强大的团队里，资浅的工程师愿意告诉经验丰富的经理：某个数字对不上；而经理会感谢他们，而不是惩罚他们。这种平衡很难做到。如果人们太害怕提出异议，错误就会一直藏着，直到代价高昂。如果人们各说各话、互不倾听，会议就变成了嗓门的比赛。\n\n一个有用的原则，是把观点和提出观点的人分开。当一个观点被反驳时，提出它的人不应该觉得自己受到了人身攻击。学会这个习惯的团队，能迅速试错十个坏主意，再找出那个好主意，而谁也不必丢脸。相反，那些把每一条建议都变成一场争吵的团队，最终会干脆不再提建议。\n\n当然，团队合作不能取代个人能力。一群有才华的人仍需要清晰的分工、共同的目标，以及一个在争论拖得太久时愿意拍板的人。重点并不是个人不重要。重点是：在现代经济中，即便是最聪明的人，通常也是靠带着别人一起赢，而不是把别人甩在身后而赢。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the first paragraph, what do most successful products, buildings and schools have in common?",
        options: [
          "They are the result of many people's small decisions rather than one hero",
          "They are built mainly by the fastest and loudest individuals",
          "They are usually designed by famous engineers who appear on stage",
          "They are completed without any disagreement at all"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：They are the result of a hundred small decisions made by people who rarely appear on stage.",
          correctReason: "原文明确说这些成果是一百个小决定累积而成、由很少露面的人完成，与A完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：第1段把'最快、最响'作为被反驳的旧印象。",
          wrongC: "张冠李戴：原文说做出决定的人很少appear on stage，并非著名工程师登台设计。",
          wrongD: "无据：第2段恰恰说团队中允许不同意见，与'毫无分歧'相反。",
          errorType: "定位错误：考生须抓住'a hundred small decisions'这一核心，勿被'fastest/loudest'误导。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"junior\" in Paragraph 2 probably means ____.",
        options: [
          "older and much more experienced in the company",
          "lower in position or newer in the role",
          "less honest and less hard-working than others",
          "extremely skilled and already famous"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：the junior engineer is willing to tell the experienced manager that a number does not add up.",
          correctReason: "句中把junior engineer与experienced manager对比，可见junior意为职位较低或较资浅，B正确。",
          wrongA: "相反：与'experienced manager'相对，不可能是更资深。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：原文强调的是勇气，不是不诚实或不勤奋。",
          wrongD: "相反：junior与'extremely skilled/famous'矛盾。",
          errorType: "单词问题：考生须利用与experienced manager的对比关系推断词义。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about teams in which every suggestion becomes a battle?",
        options: [
          "They usually make better decisions much faster than other teams",
          "Their meetings are praised by managers as highly efficient",
          "Their members gradually stop offering new ideas",
          "They are more honest than teams that avoid conflict"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：teams in which every suggestion becomes a battle eventually stop making suggestions at all.",
          correctReason: "原文直接说这种团队最终不再提建议，C准确推出。",
          wrongA: "相反：争吵式团队效率低。",
          wrongB: "无据：原文未提经理称赞其高效。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文区分的是'带尊重的异议'与'争吵'，并非越吵越诚实。",
          errorType: "推理极端化：考生须区分'争论'与'被鼓励的诚实'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Talent and personal skill are completely useless at work",
          "The fastest runner always deserves the highest praise",
          "Managers should never allow junior staff to disagree",
          "Great results depend on honest teamwork rather than lone heroes"
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段反驳'孤胆英雄'，第2段讲敢于讲真话的平衡，第3段对事不对人，末段个人仍需融入团队。",
          correctReason: "文章既说团队合作的重要，又承认个人技能，D完整概括。",
          wrongA: "相反：末段明确说teamwork cannot replace personal skill。",
          wrongB: "相反：这正是第1段被反驳的旧印象。",
          wrongC: "相反：第2段鼓励资浅者指出问题。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨片面：考生若只看第1段易误选B，须兼顾末段平衡。"
        }
      }
    ]
  },
  {
    id: "r052",
    title: "What Your Words Leave Out",
    type: "成考标准",
    level: "D",
    category: "沟通技巧",
    wordCount: 272,
    text: "Most people believe that good communication means speaking clearly. They prepare a neat speech, choose the right words, and wait politely while the other person talks. Yet they are often surprised when their message fails. The problem is rarely the words themselves. Two people can say exactly the same sentence and mean completely different things, because communication travels through more than language.\n\nA large part of any conversation is non-verbal. A crossed arm, a quick look at the clock, or a voice that rises at the end of a sentence can change meaning faster than a dictionary. This is why a phone call is usually better than a text message when emotions are involved. In a text, the reader imagines a tone that may not exist, and an innocent comment can feel like an attack. In a call, silence and breath are part of the message, and misunderstanding can be corrected at once.\n\nListening is the skill people forget to practise. Real listening is not waiting for your turn to talk. It is repeating back what you heard in your own words, asking, \"Did I get that right?\" before you reply. This habit takes courage, because it admits that you might have misunderstood. Many arguments that seem about facts are really about one thing: each side feeling that it was not heard.\n\nOf course, no method can prevent every misunderstanding. People are busy, tired, and sometimes afraid. But the person who learns to pause, to look at the listener's face, and to check meaning before pushing their own point forward will usually be trusted more than the person who speaks most smoothly.",
    translation: "大多数人以为，良好的沟通就是把话讲清楚。他们准备一篇工整的讲稿，挑选得体的用词，并在对方说话时礼貌地等待。然而当信息传递失败时，他们往往很惊讶。问题很少出在词语本身。两个人可以说出完全相同的句子，却表达截然不同的意思，因为沟通所传递的，远不止语言。\n\n任何对话中都有很大一部分是非语言的。交叉的双臂、飞快看一眼时钟、或者句尾上扬的声调，都能比词典更快地改变含义。这就是为什么牵涉情绪时，一通电话通常比一条短信更好。在短信里，读信人会自行想象一种也许并不存在的语气，一句无心的评论可能显得像攻击。而在电话里，沉默和呼吸都是信息的一部分，误解可以立刻被纠正。\n\n倾听，是人们忘记练习的技能。真正的倾听，并不是等着轮到自己说话。它是用自己的话把听到的复述一遍，在回答之前先问一句：\"我理解得对吗？\"这个习惯需要勇气，因为它承认你可能听错了。许多看似争论事实的争吵，其实只关乎一件事：双方都觉得自己没有被听见。\n\n当然，没有哪种方法能避免所有误解。人们很忙、很累，有时还会害怕。但那个学会停顿、看着听者的脸、在强推自己观点之前先核对意思的人，通常比话说得最漂亮的人更能赢得信任。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why does a carefully prepared message often fail?",
        options: [
          "Because the speaker usually chooses words that are too simple",
          "Because meaning is carried not only by words but also by other signals",
          "Because people usually speak much too quickly to be understood",
          "Because the listener refuses to wait politely for their turn"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：communication travels through more than language.",
          correctReason: "原文说沟通传递的不止是语言，含义还靠其他信号，B正确。",
          wrongA: "无据：原文未说用词太简单。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：问题不在语速，而在含义的多元传递。",
          wrongD: "相反：第1段说人们会礼貌等待对方，并非拒绝等待。",
          errorType: "细节定位：考生须抓住'more than language'。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"it\" in \"an innocent comment can feel like an attack\" (Paragraph 2) refers to ____.",
        options: [
          "the dictionary that explains the words",
          "the crossed arm of the speaker",
          "the innocent comment itself",
          "the tone of the phone call"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：the reader imagines a tone that may not exist, and an innocent comment can feel like an attack.",
          correctReason: "句中主语是an innocent comment，该评论读起来像攻击，指代评论本身，C正确。",
          wrongA: "无据：dictionary在前句作比喻，非本句所指。",
          wrongB: "无据：交叉手臂是另一例子，与本句主语无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：本句谈短信里的误解，不是电话语气。",
          errorType: "指代误判：考生须就近找本句主语an innocent comment。"
        }
      },
      {
        questionType: "推理题",
        question: "Why is a phone call usually better than a text message when emotions are involved?",
        options: [
          "Because calls are always cheaper than sending long text messages",
          "Because texts cannot be written in clear and simple words",
          "Because the receiver can record the call and check it later",
          "Because silence, tone and breath make misunderstanding easier to correct"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：In a call, silence and breath are part of the message, and misunderstanding can be corrected at once.",
          correctReason: "电话中沉默、呼吸都是信息的一部分，误解可立即纠正，D准确推出。",
          wrongA: "无据：原文未比较话费。",
          wrongB: "无据：短信完全可以写清楚，问题在语气被想象。",
          wrongC: "无据：原文未提录音复查。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理偏差：考生须体会'非语言信息'的作用，而非价格或录音。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To argue that listening and non-verbal signals matter as much as speaking",
          "To prove that text messages should be completely forbidden",
          "To explain how to prepare a perfect and neat speech",
          "To show that arguments are always caused by bad dictionaries"
        ],
        correct: 0,
        explanation: {
          location: "全文：第1段沟通不止语言，第2段非语言信号与电话，第3段倾听，末段停顿核对。",
          correctReason: "文章强调说话之外的非语言信号与倾听同样重要，A正确。",
          wrongB: "极端化：作者只是说情绪化时电话更好，并非禁止短信。",
          wrongC: "相反：第1段说只准备讲稿是不够的。",
          wrongD: "无据：dictionary只是比喻，并非争吵根源。",
          wrongA: "（本题A为正确答案）",
          errorType: "目的误判：考生须区分'改进沟通'与'否定某工具'。"
        }
      }
    ]
  },
  {
    id: "r053",
    title: "Creativity Is Not a Gift for a Few",
    type: "成考标准",
    level: "D",
    category: "创造力",
    wordCount: 275,
    text: "When people hear the word \"creative\", they picture a painter in a bright studio or a musician with a guitar. They assume that creativity belongs only to a few talented artists, and that ordinary workers in offices, shops, and factories have nothing to do with it. This assumption does a great deal of harm, because it hides a wider truth: creativity is simply the habit of noticing a problem and trying an unusual solution.\n\nA nurse who changes the order of tasks so that patients wait less is being creative. A shopkeeper who arranges goods in a new way is being creative too. Neither of them paints a picture, but both of them refuse to accept that \"this is how it has always been done\". This is the heart of creativity: not art, but refusal to repeat a habit that no longer works.\n\nResearch on creative people also destroys the idea that they wait for inspiration. Most creative work looks boring from the outside. A designer may draw the same line a hundred times. A writer may delete a page they spent a whole day on. The famous \"sudden idea\" almost always arrives after hours of ordinary effort, not before it. Inspiration is the reward of trying, not its starting point.\n\nCompanies that want more creativity often make the mistake of forcing it. They hold workshops where employees are told to be imaginative, then send them back to a system that punishes any small failure. This cannot work. Real creativity needs room to be wrong. If a person knows that every mistake will be noticed and blamed, they will safely repeat what they already know.",
    translation: "当人们听到\"有创造力\"这个词，脑海里浮现的是明亮画室里的画家，或者抱着吉他的音乐人。他们想当然地认为，创造力只属于少数有天赋的艺术家，而办公室、商店、工厂里的普通工人与之毫不相干。这种假设危害很大，因为它掩盖了一个更广阔的真相：创造力不过是这样一种习惯——注意到一个问题，并尝试一种不寻常的解决办法。\n\n一名护士调整工作顺序，让病人等待更少，这就是在发挥创造力。一个店主用新的方式摆放商品，也是在发挥创造力。他们谁也没画画，但他们都拒绝接受\"事情一直就是这么干的\"这句话。这才是创造力的核心：不是艺术，而是拒绝再重复一个已经失效的习惯。\n\n对有创造力者的研究，也打破了'他们坐等灵感'的想象。大多数创造性工作从外面看十分枯燥。设计师可能把同一条线画上一百遍。作家可能删掉花了一整天写成的一页。那个著名的'突然冒出来的点子'，几乎总是在数小时普通努力之后才到来，而不是之前。灵感是尝试的奖赏，而不是尝试的起点。\n\n想要更多创造力的公司，常常犯'强逼创造力'的错误。他们举办工作坊，叫员工放开想象，然后又把人送回一个惩罚任何小失误的体系里。这行不通。真正的创造力需要犯错的空间。如果一个人知道每次失误都会被盯着、被指责，他就会安全地重复自己早已熟悉的东西。",
    questions: [
      {
        questionType: "词义猜测题",
        question: "The word \"assumption\" in Paragraph 1 probably means ____.",
        options: [
          "a proven scientific law written in a textbook",
          "an expensive painting sold at a famous auction",
          "something taken for granted without proof",
          "a method used by experienced musicians"
        ],
        correct: 2,
        explanation: {
          location: "原文第1段：They assume that creativity belongs only to a few talented artists... This assumption does a great deal of harm.",
          correctReason: "assumption来自动词assume（想当然认为），且作者指出它掩盖真相，可见指未经证实的想当然，C正确。",
          wrongA: "相反：作者批评这种看法，说明它并非已证明的科学定律。",
          wrongB: "无据：与拍卖名画无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：与乐手的方法无关。",
          errorType: "单词问题：考生须由动词assume及作者批评语气反推。"
        }
      },
      {
        questionType: "细节题",
        question: "According to the passage, what do the nurse and the shopkeeper have in common?",
        options: [
          "Both of them are professional painters and musicians",
          "Both of them refuse to accept any new ideas at all",
          "Both of them wait for sudden inspiration before working",
          "Both of them refuse to repeat habits that no longer work"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：both of them refuse to accept that 'this is how it has always been done'.",
          correctReason: "护士与店主都拒绝沿用旧习惯，与D一致。",
          wrongA: "相反：原文说Neither of them paints a picture。",
          wrongB: "相反：他们恰恰在采纳新做法。",
          wrongC: "相反：第3段说有创造力者并不坐等灵感。",
          wrongD: "（本题D为正确答案）",
          errorType: "细节定位：考生须抓住第2段'heart of creativity'一句。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the \"sudden idea\" mentioned in Paragraph 3?",
        options: [
          "It usually comes after long ordinary effort rather than from nowhere",
          "It is the main reason designers are better than writers",
          "It arrives before hours of hard work ever begin",
          "It belongs only to painters in bright studios"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：arrives after hours of ordinary effort, not before it. Inspiration is the reward of trying.",
          correctReason: "原文明说灵感在长期努力之后到来，是尝试的奖赏，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未比较设计师与作家。",
          wrongC: "相反：原文明确说not before it。",
          wrongD: "相反：这正是第1段被反驳的旧印象。",
          errorType: "推理偏差：考生勿把'突然'误读为'凭空'。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward companies that force creativity through workshops?",
        options: [
          "Fully supportive, because workshops solve all problems",
          "Critical, because they punish failure while expecting imagination",
          "Doubtful only about the cost, but approving of the method",
          "Uninterested, since creativity does not belong to companies"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段：often make the mistake of forcing it... then send them back to a system that punishes any small failure. This cannot work.",
          correctReason: "作者直言这是'错误'且'行不通'，指出一边要想象、一边惩罚失败的矛盾，B正确。",
          wrongA: "相反：作者称其为mistake。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：作者反对的是方法本身，不是成本。",
          wrongD: "相反：第1段说普通工人也有创造力，创造力属于公司中的人。",
          errorType: "态度误判：考生须抓住'mistake''cannot work'等贬义信号。"
        }
      }
    ]
  },
  {
    id: "r054",
    title: "How to Stop Freezing over a Choice",
    type: "成考标准",
    level: "D",
    category: "决策",
    wordCount: 276,
    text: "Everyone has faced the moment. The list of choices lies in front of you, each one promising a different future, and you sit frozen. Should you take the job in another city? Should you invest the savings you worked years to save? Many people believe that the best decision is the one that turns out perfectly. But this is a dangerous idea, because it judges a choice only by its result, long after the information available at the time has been forgotten.\n\nExperienced decision-makers use a simpler test. Before choosing, they write down what they actually know, what they are guessing, and what they simply hope for. This sounds slow, but it prevents the most common mistake: treating a wish as a fact. A person who writes \"I hope this business will grow\" and then reads it back often notices, for the first time, that hope is not evidence.\n\nAnother habit is to decide in advance when you will stop. Every choice has a cost, and waiting forever is itself a choice. A couple who cannot agree where to live may spend five years quietly unhappy, believing that more information will one day arrive. More often, the extra information is just an excuse to avoid discomfort. Good decision-makers give themselves a deadline and live with the result.\n\nOf course, some decisions are too large to make alone. When a choice affects your family, your health, or your savings, asking someone who has already made a similar mistake can save you years. Wise choices are not made by never asking for help. They are made by knowing the difference between a fact, a hope, and a fear.",
    translation: "每个人都遇过那样的时刻。选择的清单摆在你面前，每一个都许诺一种不同的未来，而你僵坐在那里。要不要去另一个城市工作？要不要把辛苦多年攒下的积蓄拿去投资？许多人相信，最好的决定就是那个最终结果完美的决定。但这是个危险的想法，因为它只凭结果来评判一个选择，而那时你早已忘记了当初手头掌握的信息。\n\n有经验的决策者用一个更简单的检验。在选择之前，他们写下三件事：自己真正知道的、自己在猜测的、以及自己只是希望如此的。这听起来慢，却能防止最常见的错误：把愿望当成事实。一个人写下\"我希望这家店会兴旺\"，再读一遍时，往往第一次意识到：希望并不是证据。\n\n另一个习惯，是事先决定自己何时收手。每个选择都有代价，而永远等下去本身也是一种选择。一对无法就住在哪里达成一致的夫妻，可能在默默的不快中耗掉五年，总相信更多信息终有一天会到来。更多时候，那些额外的信息不过是回避不安的借口。好的决策者给自己设一个期限，然后接受结果。\n\n当然，有些决定太大，不该独自做。当一个选择关系到你的家庭、健康或积蓄时，去请教一个曾经犯过类似错误的人，可以为你省下好几年。明智的选择，从不靠'永不求助'做成。它靠的是分清事实、希望与恐惧。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why is judging a decision only by its result dangerous?",
        options: [
          "Because the result is usually written down long in advance",
          "Because perfect decisions never actually exist in life",
          "Because it forces people to choose far too quickly",
          "Because it forgets what the person actually knew at the time"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：it judges a choice only by its result, long after the information available at the time has been forgotten.",
          correctReason: "只看结果会忘记当时掌握的信息，D正确。",
          wrongA: "无据：结果并非事先写下。",
          wrongB: "无据：作者未说完美决定不存在，而是说不能只凭结果评判。",
          wrongC: "相反：这是拖延问题，与'凭结果评判'无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "细节定位：考生须抓住'information available at the time'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred when a person writes \"I hope this business will grow\"?",
        options: [
          "They may suddenly realize that their belief rests on hope rather than facts",
          "They have already proved for certain that the business will grow",
          "They should immediately invest all their savings in it",
          "They are making the fastest possible decision"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：then reads it back often notices, for the first time, that hope is not evidence.",
          correctReason: "写下再读回，人才第一次意识到希望并非证据，A准确推出。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说hope is not evidence。",
          wrongC: "无据：作者恰恰警告勿把愿望当事实去投资。",
          wrongD: "相反：第3段批评拖太久，此处写下来是冷静过程。",
          errorType: "推理偏差：考生须理解'hope is not evidence'的含义。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"deadline\" in Paragraph 3 probably means ____.",
        options: [
          "a disease caused by sitting at a desk too long",
          "the time by which a decision must be made",
          "a long list of possible future choices",
          "an excuse used only by lazy people"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：Good decision-makers give themselves a deadline and live with the result.",
          correctReason: "前文说'永远等下去本身也是选择'，故deadline指必须做决定的期限，B正确。",
          wrongA: "无据：与疾病无关，是字面干扰。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：deadline是时间点，不是清单。",
          wrongD: "无据：作者把它作为好习惯推荐。",
          errorType: "单词问题：考生须用上下文'何时收手'推断期限义。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Waiting longer always produces the best possible choice",
          "A perfect result is the only fair way to judge a choice",
          "Good decisions separate facts from hopes and set a stopping point",
          "Big decisions should never be discussed with family members"
        ],
        correct: 2,
        explanation: {
          location: "全文：第1段勿只看结果，第2段分清事实/猜测/希望，第3段设期限，末段分清事实希望与恐惧。",
          correctReason: "文章反复强调区分事实与希望、并设停止点，C完整概括。",
          wrongA: "相反：第3段批评永远等待。",
          wrongB: "相反：第1段批判只凭结果评判。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：末段说大决定可请教他人。",
          errorType: "主旨片面：考生须综合第2、3段两个建议。"
        }
      }
    ]
  },
  {
    id: "r055",
    title: "The Skill of Learning New Skills",
    type: "成考标准",
    level: "D",
    category: "适应能力",
    wordCount: 276,
    text: "When a young person enters the job market today, they are often told to learn a specific skill and stick to it. This advice used to make sense. Thirty years ago, a worker who mastered one tool could expect to use it for decades. That world has disappeared. Tools change within months. Companies close departments they believed would never shrink. The person who arrives at work proud of a single perfect skill may find, one morning, that the skill is no longer wanted.\n\nAdaptability does not mean changing your values, of course. It means being willing to learn a new tool, to move into a different role, and to admit that yesterday's lesson may not fit tomorrow. People who can do this share a strange comfort with uncertainty. They do not enjoy not knowing, but they refuse to pretend that a falling road is flat.\n\nResearch into long working lives suggests that adaptability is built by small acts rather than big plans. A worker who learns one new program every year, who talks to people outside their own department, and who keeps a simple note of what they are good at, will not be destroyed by a sudden change. By contrast, the person who waits for change to arrive before preparing for it usually has too little time.\n\nNone of this means that a person should stop specializing. Deep skill is still valuable. But the skill that a person should build first is the skill of learning new skills quickly. In a world that rewrites its tools every few years, the person who can learn twice is worth far more than the person who knows once.",
    translation: "当一个年轻人今天走进就业市场，常被教导：学一门具体技能，然后坚持下去。这个建议过去是有道理的。三十年前，一个工人掌握一种工具，可以指望用上几十年。那个世界已经消失了。工具几个月就换一遍。公司关闭它们原以为永远不会缩小的部门。那个带着一门完美技能自豪地上班的人，也许某一天早上会发现，这门技能已经没人要了。\n\n适应能力，当然不意味着改变你的价值观。它意味着愿意学一种新工具、转入一个不同的岗位，并承认昨天的经验未必适合明天。能做到这一点的人，都对'不确定'怀有一种奇特的坦然。他们并不喜欢'不知道'，但他们拒绝假装一条正在塌陷的路是平的。\n\n对漫长职业生涯的研究表明，适应能力靠的是小小的行动，而不是宏大的计划。每年学一个新程序、与本部门之外的人交流、把自己擅长什么简单记下来的人，不会被突如其来的变化击垮。相反，等到变化真的来了才开始准备的人，往往时间已经太少。\n\n这一切并不是说人不该再专精。深厚的技能仍然有价值。但一个人最该先练就的，是'快速学习新技能'这项技能。在一个每隔几年就重写工具的世界里，能学两次的人，远比只懂一次的人更值钱。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why does the old advice to \"stick to one skill\" no longer work?",
        options: [
          "Because tools and departments change much faster than before",
          "Because young people today refuse to learn any skill at all",
          "Because employers now pay workers less for every skill",
          "Because one perfect skill can no longer be taught at school"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：Tools change within months. Companies close departments they believed would never shrink.",
          correctReason: "工具数月一变、部门也会关闭，旧建议失效，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：原文未说年轻人拒绝学习。",
          wrongC: "无据：未提薪资下降。",
          wrongD: "无据：与学校能否教授无关。",
          errorType: "细节定位：考生须抓住Tools change within months。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of Paragraph 3 in this passage?",
        options: [
          "To prove that change is always painful and should be avoided",
          "To list the reasons why companies close their departments",
          "To show how adaptability is built through small regular acts",
          "To argue that workers should never talk to other departments"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：adaptability is built by small acts rather than big plans... learns one new program every year...",
          correctReason: "本段用每年学一个程序、跨部门交流等例子说明适应力靠小行动建立，C正确。",
          wrongA: "相反：作者主张积极适应，不是回避变化。",
          wrongB: "无据：关部门是第1段的现象，非本段主旨。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：本段建议与本部门之外的人交流。",
          errorType: "段落作用误判：考生须识别本段'topic sentence + examples'结构。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about people with strong adaptability?",
        options: [
          "They enjoy uncertainty and never feel uncomfortable at all",
          "They accept they may not know things and keep learning anyway",
          "They quickly abandon their values whenever change comes",
          "They wait until a crisis arrives before taking any action"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：They do not enjoy not knowing, but they refuse to pretend that a falling road is flat.",
          correctReason: "他们并不喜欢未知，但不假装路是平的，即承认未知并继续学习，B正确。",
          wrongA: "相反：原文说do not enjoy not knowing。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第2段开头说adaptability不意味着改变价值观。",
          wrongD: "相反：第3段说等危机来了才准备的人来不及。",
          errorType: "推理极端化：考生勿把'坦然'夸大为'从不不适'。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To persuade readers to give up all special skills immediately",
          "To describe the history of tools over the last thirty years",
          "To warn young people never to enter today's job market",
          "To argue that the ability to learn new skills is more valuable than one fixed skill"
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段旧世界消失，第2段何为适应力，第3段如何培养，末段'先练快速学习的技能'。",
          correctReason: "末段点明主旨：快速学习新技能比一门固定技能更值钱，D正确。",
          wrongA: "相反：末段说deep skill is still valuable。",
          wrongB: "无据：三十年只是对比背景，非讲工具史。",
          wrongC: "无据：作者鼓励适应，而非劝退就业。",
          wrongD: "（本题D为正确答案）",
          errorType: "目的误判：考生须抓住末段结论句。"
        }
      }
    ]
  },

  {
    id: "r056",
    title: "Owning Less, Living More",
    type: "成考标准",
    level: "D",
    category: "极简生活",
    wordCount: 253,
    text: "A generation ago, success was measured by how much a family owned. A larger television, a bigger cupboard, and more boxes stored in the garage were signs that life was going well. In recent years, however, a quiet movement has grown in the opposite direction. People who call themselves minimalists began to throw away clothes they had not worn for a year, cancel magazines they never read, and stop buying objects that promised happiness but produced only dust.\n\nMinimalism is often misunderstood as a game of suffering. Critics picture empty rooms with a single chair and a cup. But most real minimalists are not trying to be poor. They are trying to be free. Each object they keep has to earn its place, either by being useful or by being truly loved. The rest goes, not because it is worthless, but because keeping it costs more than it gives back.\n\nThe financial side is only the beginning. Keeping fewer things means fewer decisions: less time choosing clothes, less space to clean, and less worry about breaking something expensive. Some people report that after clearing a room, they felt not poor but strangely lighter, as if a weight they had forgotten about had been lifted.\n\nThis does not mean that possessions are evil. A family that loves cooking should keep every pot they use. Minimalism is not a rule against objects; it is a question asked honestly: does this thing serve my life, or am I serving it? The answer is different for everyone.",
    translation: "上一代人衡量成功，看的是一个家庭拥有多少。更大的电视、更大的柜子、车库里越堆越多的箱子，都是日子过得不错的标志。然而近年来，一场安静的运动朝相反的方向生长。那些自称极简主义者的人，开始扔掉一年没穿过的衣服，退掉从不读的杂志，不再买回那些许诺幸福、结果只落满灰尘的东西。\n\n极简主义常被误解为一种自讨苦吃的游戏。批评者脑海里是空空的房间、一把椅子、一只杯子。但大多数真正的极简主义者并不想变穷，他们想获得自由。他们留下的每一件东西都必须'挣得自己的位置'——要么有用，要么真正被喜爱。其余的都送走，不是因为它们毫无价值，而是因为留着它们的代价比它们能带来的更多。\n\n财务只是开始。东西少了，意味着要做的决定也少了：花在挑衣服上的时间更少，要打扫的空间更小，也更少担心打碎某个昂贵的东西。有些人说，清空一间屋子后，自己并不觉得穷，反而奇怪地感到轻松，仿佛一块早已忘记的重担被卸了下来。\n\n这并不是说拥有物品是件坏事。一个热爱烹饪的家庭，应当留下他们用得到的每一口锅。极简主义不是一条'禁止物品'的规矩；它是一个被诚实地问出的问题：是这样东西为我的生活服务，还是我在为它服务？对每个人，答案都不同。",
    questions: [
      {
        questionType: "推理题",
        question: "What can be inferred about the minimalist movement compared with the past?",
        options: [
          "It follows the older habit of collecting as much as possible",
          "It runs in the opposite direction from collecting more and more",
          "It was created mainly by people who cannot afford large rooms",
          "It encourages people to buy even more televisions and cupboards"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：a quiet movement has grown in the opposite direction.",
          correctReason: "一代人以拥有多为成功，极简运动朝相反方向生长，B正确。",
          wrongA: "相反：原文说in the opposite direction。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：第2段说他们并非想变穷，与买不起房无关。",
          wrongD: "相反：这正是被抛弃的旧观念。",
          errorType: "推理偏差：考生须抓住'opposite direction'。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why do most minimalists throw things away?",
        options: [
          "Because all their possessions are completely worthless",
          "Because they want their rooms to look empty and painful",
          "Because they enjoy suffering and losing weight",
          "Because keeping things costs more than the things give back"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：not because it is worthless, but because keeping it costs more than it gives back.",
          correctReason: "保留的代价超过其回报，故送走，D正确。",
          wrongA: "相反：原文说not because it is worthless。",
          wrongB: "相反：第2段说他们并非想变穷、想自讨苦吃。",
          wrongC: "相反：这是批评者的误解。",
          wrongD: "（本题D为正确答案）",
          errorType: "细节定位：考生须抓住not...but...结构。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"maintaining\" in Paragraph 2 probably means ____.",
        options: [
          "keeping, caring for and repairing something",
          "throwing something away immediately",
          "selling something at the highest possible price",
          "hiding something where no one can find it"
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：keeping it costs more than it gives back（上下文讲keep/care for objects）。",
          correctReason: "上下文谈保留、照料物品所花的成本，maintaining意为'维护、保养'，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：maintain是保留维护，不是扔掉。",
          wrongC: "无据：与卖价无关。",
          wrongD: "无据：与藏起来无关。",
          errorType: "单词问题：考生须用上下文'keeping'推断'维护'义。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Possessions are completely evil and should all be thrown away",
          "Success in life is measured by the size of the garage",
          "Minimalism means keeping only what serves you, for freedom rather than poverty",
          "Every family should throw away all their cooking pots at once"
        ],
        correct: 2,
        explanation: {
          location: "全文：第1段现象，第2段为自由而非贫穷，第3段好处，末段诚实自问。",
          correctReason: "文章说极简是留下真正服务生活的东西、追求自由而非贫穷，C正确。",
          wrongA: "相反：末段说possessions are not evil。",
          wrongB: "相反：这是被取代的旧标准。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：末段说爱烹饪的家庭应留着锅。",
          errorType: "主旨片面：考生须兼顾第2段'free, not poor'。"
        }
      }
    ]
  },
  {
    id: "r057",
    title: "The Price of Clicking Too Easily",
    type: "成考标准",
    level: "D",
    category: "在线购物",
    wordCount: 264,
    text: "A few years ago, buying a pair of shoes meant putting on a coat, walking to the shopping street, and trying on half a dozen pairs. Today the same pair can arrive at the door before the weekend, chosen while sitting on the sofa at midnight. Few changes in everyday life have been so fast, and few have been so quietly welcome.\n\nOnline shopping offers something that ordinary shops cannot: choice without effort. A customer in a small town can compare prices from ten sellers at once, read reviews from strangers across the country, and find exactly the size and colour that a local shelf never keeps. For the busy parent, the elderly customer, and anyone living far from a city, this is not a luxury but a convenience that saves hours each week.\n\nYet the same convenience hides a quieter cost. When a price is one click away, the pause that once protected the buyer disappears. In a real shop, a customer must decide whether the shoes are worth walking home with them. On a screen, there is nothing to carry, nothing to regret until the box arrives, and then two more orders arrive with it. Shops teach patience by their physical limits; websites are designed to remove every limit.\n\nThis does not mean the internet should be blamed. It has brought prices within reach of people who could never compare them before. The task for the buyer is simple but not easy: to keep the habit of asking, before the click, whether the thing is wanted, or simply wanted for a minute.",
    translation: "几年前，买一双鞋意味着穿上外套、走到商业街、试上五六双。今天，同一双鞋还没到周末就能送到家门口，而你是半夜坐在沙发上挑的。日常生活中变化如此之快、又如此悄然受人欢迎的事情，并不多。\n\n网购提供了普通商店给不了的东西：不费力的选择。小镇上的顾客可以同时比较十家卖家的价格，读遍全国各地陌生人的评价，找到本地货架上从不缺货的那种尺寸和颜色。对忙碌的父母、老年顾客，以及任何住在远离城市的人来说，这不是奢侈品，而是每周省下好几个小时的便利。\n\n然而，同样的便利也藏着一种更安静的代价。当一个价格只需一次点击，曾经保护着买家的那点犹豫就消失了。在实体店里，顾客必须决定：这双鞋值不值得穿着走回家。而在屏幕上，没有东西要拎，在包裹送到之前也没什么好后悔的——可随后又跟着到了两个订单。实体店用它的物理局限教人耐心；网站的设计却是为了消除每一种局限。\n\n这并不是说该责怪互联网。它让那些从前根本无法比价的人，也能买得起东西。买家的任务简单却不容易：在点击之前，保持自问的习惯——这东西是真的想要，还是只想要它一分钟？",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what advantage does online shopping offer over ordinary shops?",
        options: [
          "It allows buyers to try on shoes in the shop itself",
          "It forces customers to walk to the shopping street",
          "It lets customers compare many choices with little effort",
          "It guarantees that every product is completely free"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：choice without effort... compare prices from ten sellers at once...",
          correctReason: "网购'不费力的选择'、可同时比价，C正确。",
          wrongA: "相反：实体店才能试穿，网购不能。",
          wrongB: "相反：第1段说这是过去的做法。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无据：原文未说商品免费。",
          errorType: "细节定位：考生须抓住'choice without effort'。"
        }
      },
      {
        questionType: "信息定位题",
        question: "According to Paragraph 3, how did physical shops once protect buyers?",
        options: [
          "By making them carry and decide whether the purchase was really worth it",
          "By offering ten sellers on a single screen",
          "By showing reviews from strangers across the country",
          "By removing every physical limit from the buying process"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：a customer must decide whether the shoes are worth walking home with them.",
          correctReason: "实体店要拎着走回家，迫使买家判断值不值，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：在屏幕上、十家卖家是网购特征。",
          wrongC: "相反：这是第2段网购的便利。",
          wrongD: "相反：第3段末说实体店以物理局限教人耐心。",
          errorType: "信息定位混淆：考生须分清'实体店局限'与'网站消除局限'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the orders that arrive \"two more\" with the box?",
        options: [
          "The buyer carefully planned every order weeks earlier",
          "The local shop sent extra gifts by mistake",
          "Websites forbid customers from buying more than one thing",
          "Easy clicking encourages buying things that were not really needed"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：then two more orders arrive with it... websites are designed to remove every limit.",
          correctReason: "一点击就下单、又多出两个订单，说明便利刺激了冲动购买，D正确。",
          wrongA: "相反：原文批评的是冲动，不是周密计划。",
          wrongB: "无据：并非商店误寄赠品。",
          wrongC: "相反：网站是鼓励多买，不是禁止。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理偏差：考生须体会'quieter cost'指冲动消费。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the author's main purpose in writing this passage?",
        options: [
          "To argue that the internet should be completely shut down",
          "To show both the convenience and the hidden cost of online shopping",
          "To prove that small-town shops will disappear very soon",
          "To explain how to compare prices from ten different countries"
        ],
        correct: 1,
        explanation: {
          location: "全文：第1段变化，第2段便利，第3段隐藏代价，末段既不责怪互联网又提醒自问。",
          correctReason: "文章既写网购便利，又写其冲动消费的代价，B正确。",
          wrongA: "相反：末段明确说not blame the internet。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：作者未预言小店消亡。",
          wrongD: "无据：比较价格只是举例，非写作目的。",
          errorType: "目的误判：考生须兼顾'便利'与'代价'两面。"
        }
      }
    ]
  },
  {
    id: "r058",
    title: "Who Is Still Offline?",
    type: "成考标准",
    level: "D",
    category: "数字鸿沟",
    wordCount: 274,
    text: "When schools sent children home for a period of online teaching, a hidden problem suddenly became visible. Most families could join the class video call, hand in homework through an app, and raise a hand with a click. But a smaller number could not. Their shared phone was needed by several brothers and sisters. Their flat was far from a strong signal. Or their parents worked long shifts and could not sit beside them to press the right button. This gap between those who are connected and those who are not is known as the digital divide.\n\nThe divide is not mainly about expensive machines. A second-hand tablet is cheap enough. The deeper problems are habits and trust. A child who has never watched an educational video at home, and a parent who has never filled in an online form, face a learning curve that a well-off neighbour simply never meets. When the teacher then assumes that everyone already knows how a button works, the gap grows larger every term.\n\nMistakes in fixing it are common. Some leaders, seeing the problem as a lack of hardware, give away tablets and declare the job done. But a tool without help is only another object in the corner. What poorer families need is not merely a device, but a patient adult who shows them how to use it, and a society that assumes online life is a skill that must be taught, not something everyone is born with.\n\nClosing the divide will take years. But the first step is honest: to stop pretending that everyone is already online, and to notice who is being left behind.",
    translation: "当学校让孩子回家、改为一段时间的线上教学时，一个隐藏的问题突然暴露出来。大多数家庭能加入课堂视频通话，通过应用交作业，点一下就能举手。但有一小部分家庭做不到。他们共用的手机，几个兄弟姐妹都要用；他们的住处离强信号很远；或者父母倒班时间很长，没法坐在旁边帮他们按对按钮。这种'连上了网'与'没连上'之间的差距，就是人们所说的数字鸿沟。\n\n这条鸿沟主要不在于昂贵的机器。一台二手平板够便宜。更深的问题在于习惯与信任。一个在家从没看过教育视频的孩子，和一个从没填过在线表格的家长，所面对的学习曲线，是条件好的邻居根本不会遇到的。当老师随后又假设每个人都已经知道按钮怎么用时，这个差距每个学期都在变大。\n\n弥合鸿沟时犯的错误很常见。有些领导人把问题看成缺硬件，于是把平板一发，就宣布大功告成。但一件没有帮助的工具，不过是角落里又多了一件东西。贫困家庭需要的，不只是一台设备，而是一个耐心教他们如何使用的成年人，以及一个这样的社会——把'网络生活'当成一门必须教的技能，而不是人人天生就会的东西。\n\n填平这条鸿沟需要很多年。但第一步是诚实的：别再假装人人都已经上了网，去注意谁正被落在后面。",
    questions: [
      {
        questionType: "词义猜测题",
        question: "The word \"divide\" in \"the digital divide\" probably means ____.",
        options: [
          "a type of expensive computer software",
          "a free educational video for school children",
          "a button used to join a class video call",
          "a gap or separation between groups of people"
        ],
        correct: 3,
        explanation: {
          location: "原文第1段：This gap between those who are connected and those who are not is known as the digital divide.",
          correctReason: "前句直接用gap解释divide，指人群之间的差距，D正确。",
          wrongA: "无据：与软件类型无关。",
          wrongB: "无据：教育视频只是例子。",
          wrongC: "无据：按钮是举例细节。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生须抓住前句'This gap'这一释义线索。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 2, what is the deeper cause of the digital divide?",
        options: [
          "That no second-hand tablets are sold anymore",
          "Lack of online habits, trust and guidance at home",
          "That wealthy neighbours refuse to share their phones",
          "That schools completely banned online teaching"
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：The deeper problems are habits and trust...",
          correctReason: "原文明说更深问题是习惯与信任（及家中引导），B正确。",
          wrongA: "相反：第2段说二手平板够便宜。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：未说邻居拒绝分享。",
          wrongD: "无据：线上教学正是背景，未被禁止。",
          errorType: "细节定位：考生须抓住'deeper problems'一句。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about leaders who give away tablets and then stop?",
        options: [
          "They have fully solved the problem of the divide",
          "They prefer to teach parents how to fill in online forms",
          "They treat a deeper social problem as a simple hardware problem",
          "They understand that a tool alone is never enough"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：seeing the problem as a lack of hardware, give away tablets and declare the job done. But a tool without help is only another object.",
          correctReason: "作者批评他们把深层社会问题误当硬件问题，C正确。",
          wrongA: "相反：作者指出问题并未解决。",
          wrongB: "无据：原文未说他们去教家长填表。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：他们恰恰误以为一台工具就够了。",
          errorType: "推理偏差：考生须读出作者'But'后的批评。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the author's attitude toward closing the digital divide?",
        options: [
          "Serious and realistic, admitting it will take years and begin with honesty",
          "Completely hopeless, believing nothing can ever be done",
          "Angry only at poor parents for not teaching their children",
          "Uninterested, since online life does not really matter"
        ],
        correct: 0,
        explanation: {
          location: "原文末段：Closing the divide will take years. But the first step is honest...",
          correctReason: "作者承认需多年、强调从诚实面对开始，态度严肃而现实，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：作者主张采取行动，并非绝望。",
          wrongC: "相反：作者把原因归于社会与系统，不指责贫困家长。",
          wrongD: "相反：作者认为此事重要。",
          errorType: "态度误判：考生须抓住末段'will take years''honest'。"
        }
      }
    ]
  },
  {
    id: "r059",
    title: "Why Old Stories Still Travel",
    type: "成考标准",
    level: "D",
    category: "民间故事",
    wordCount: 282,
    text: "Long before people learned to read, they sat around fires and told each other stories. A clever girl tricks a giant. A poor farmer finds a pot that never stops cooking. A city cat laughs at a country cat, only to run away from the city dogs. These tales were not written for children's pleasure alone. They were the first schoolbook, the first newspaper, and the first way of passing experience from one generation to the next.\n\nThis is why the same stories appear, in slightly different clothes, all over the world. A tale that teaches \"do not trust every voice\" can be found in Europe, in West Africa, and in the villages of East Asia, though each version changes the fox into a local animal and the forest into a local hill. The details travel slowly, but the lesson travels even farther. A child who hears that the third question must be asked carefully is, without knowing it, being taught how to judge people.\n\nSome modern readers dismiss folktales as simple or even frightening. They ask why children should be told that a wolf eats grandmothers, or that a girl climbs a beanstalk into danger. But the darkness in the stories is not meant to be real. It is a safe practice ground. A child meets fear in a book where the wolf can be shut back inside the tale, and learns that courage is possible before facing it in life.\n\nFolktales are not a museum. They still work because they answer the same old questions: who can I trust, what should I be afraid of, and how should I live? Every generation retells them because every generation is still asking.",
    translation: "早在人们学会读书之前，他们就围坐在火堆旁，互相讲故事。一个聪明的女孩骗过了巨人。一个穷农夫找到一口永远煮不停的锅。城里的猫嘲笑乡下的猫，结果却被城里的狗追得落荒而逃。这些故事并不仅仅是为了逗孩子开心。它们是最早的课本、最早的报纸，也是把经验从一代传给下一代的最早方式。\n\n这就是为什么同样的故事，穿着略不同的衣服，出现在世界各地。一个教'别轻信每一个声音'的故事，能在欧洲、西非和东亚的村庄里找到，只不过每个版本把狐狸换成本地的动物，把森林换成本地的山。细节传得慢，但道理传得更远。一个听到'第三个问题必须问得小心'的孩子，其实在不知不觉中被教着如何判断人。\n\n一些现代读者把民间故事斥为幼稚，甚至吓人。他们问：为什么要告诉孩子狼会吃掉奶奶，或者一个女孩顺着豆茎爬进危险里？但故事里的黑暗并不是要当真的。它是一块安全的练兵场。孩子在书里遇见恐惧，而那只狼还能被关回故事里；他由此明白：勇气是可能的——然后再去面对生活中的恐惧。\n\n民间故事不是一座博物馆。它们之所以仍然管用，是因为它们回答着那些老问题：我能信任谁？我该害怕什么？我该怎么活？每一代人都重述它们，因为每一代人仍在问。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, what was the main purpose of early folktales?",
        options: [
          "To pass experience and lessons from one generation to the next",
          "To sell expensive books to children at the market",
          "To record the exact weather around the fireside",
          "To train professional writers for the first newspaper"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：the first way of passing experience from one generation to the next.",
          correctReason: "民间故事最初是传递经验、代代相传的方式，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无据：那时尚无书市买卖。",
          wrongC: "无据：未提记录天气。",
          wrongD: "无据：它们是'最早的报纸'是比喻，并非培养职业作家。",
          errorType: "细节定位：考生须抓住'passing experience'。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"They\" in Paragraph 1 (\"They were the first schoolbook, the first newspaper...\") refers to ____.",
        options: [
          "the giant and the poor farmer",
          "the folktales told around the fires",
          "the city dogs and country cats",
          "the children who first learned to read"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：These tales were not written for children's pleasure alone. They were the first schoolbook...",
          correctReason: "前一句主语是These tales（民间故事），They指代故事本身，B正确。",
          wrongA: "无据：巨人和农夫只是故事中的角色。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无据：猫狗也是故事角色，不能做主语。",
          wrongD: "相反：原文说远在识字之前，孩子并非主语。",
          errorType: "指代误判：考生须就近找前句主语These tales。"
        }
      },
      {
        questionType: "推理题",
        question: "Why does the author say the darkness in folktales is \"a safe practice ground\"?",
        options: [
          "Because wolves in the stories are never actually frightening",
          "Because children should never meet real fear in their lives",
          "Because grandmothers in the tales are secretly strong and brave",
          "Because children face fear inside a story before meeting it in real life"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：the wolf can be shut back inside the tale, and learns that courage is possible before facing it in life.",
          correctReason: "孩子在故事里遇见恐惧并能把狼关回去，再去面对现实，D正确。",
          wrongA: "无据：狼在故事里是吓人的，只是可控。",
          wrongB: "相反：作者并非让孩子躲避现实恐惧。",
          wrongC: "无据：未提奶奶勇敢。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理偏差：考生须理解'safe'与'in life'的对比。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Folktales are too frightening and should be kept from children",
          "Children today no longer need to hear old stories at all",
          "Folktales pass shared lessons and prepare children for real life",
          "Every country has completely different stories and lessons"
        ],
        correct: 2,
        explanation: {
          location: "全文：第1段代代传递经验，第2段道理传得更远，第3段安全练兵，末段回答老问题。",
          correctReason: "民间故事传递共通道理并让孩子为现实生活做准备，C正确。",
          wrongA: "相反：第3段为故事中的黑暗辩护。",
          wrongB: "相反：末段说每代人仍在重述。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第2段说同一故事世界各地都有。",
          errorType: "主旨片面：考生须兼顾'道理'与'准备人生'。"
        }
      }
    ]
  },
  {
    id: "r060",
    title: "What a Handmade Bowl Reminds Us",
    type: "成考标准",
    level: "D",
    category: "手工艺品",
    wordCount: 274,
    text: "In a modern factory, a cup can be made in seconds and sold for almost nothing. In a small workshop, a potter may spend a whole day shaping one bowl, firing it, and waiting to see whether it survives the heat. When the bowl is finished, it costs far more than a factory cup. Visitors often wonder why anyone would pay the difference. The answer lies in something the factory can never produce.\n\nA handmade object carries the hand that made it. Where a machine is perfectly level, a hand-made edge may be almost level, and that almost is the point. A small unevenness shows that a living person moved, breathed, and made a judgment. Buyers are not simply paying for a bowl to eat from. They are paying for a relationship with someone whose name they may one day know.\n\nThis human touch is what keeps handicrafts alive despite their higher price. Markets of handmade goods have grown in recent years, not because buyers are richer, but because they are tired of being surrounded by identical objects that came from nowhere and lead nowhere. A scarf woven by a known family, a wooden spoon carved by a neighbour, carries a small story that a catalogue photograph cannot copy.\n\nNaturally, handicraft cannot replace the factory. Poor families still need cheap, durable goods, and trying to make everything by hand would be neither kind nor practical. But a society that makes only identical cups has lost something it will not easily name. Handmade objects remind us that work can be a conversation between a person and a material, not merely a step on a line.",
    translation: "在现代工厂里，一只杯子几秒钟就能做好，几乎卖不了几个钱。而在一间小作坊里，一位陶工可能花一整天塑造一只碗、烧制它，再等着看它能不能挺过那烈火。碗做好时，它的价钱远高于工厂杯。访客常常纳闷，为什么有人愿意多花这个钱。答案藏在工厂永远生产不出来的某种东西里。\n\n一件手工艺品，带着制作它的那双手。机器的边缘分毫不差，而手工的边缘只是'几乎'分毫不差，而这个'几乎'正是关键。一处小小的不平整，表明一个活生生的人移动过、呼吸过、做出过判断。买家买的不只是一只吃饭的碗。他们是在为一种关系付钱——那个人的名字，他们也许有一天会知道。\n\n正是这种人的温度，让手工艺品在更高的价格下依然存活。近年来手工市场在扩大，并不是因为买家更富了，而是因为他们厌倦了被千篇一律的东西包围——那些东西不知从何而来，也不知去向何处。一条由知名家庭织成的围巾、一把由邻居刻出的木勺，都带着一本商品目录的照片复制不了的小故事。\n\n当然，手工不能取代工厂。贫困家庭仍需要便宜、耐用的用品；试图什么都用手做，既不厚道也不现实。但一个只生产一模一样杯子的社会，已经失去了某种它很难说出口的东西。手工艺品提醒我们：劳动可以是一个人与材料之间的对话，而不仅仅是流水线上的一个步骤。",
    questions: [
      {
        questionType: "词义猜测题",
        question: "The word \"durable\" in the last paragraph probably means ____.",
        options: [
          "beautiful and shiny in every possible colour",
          "cheap enough to throw away after one use",
          "able to last a long time without breaking",
          "produced completely by hand in a small workshop"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：Poor families still need cheap, durable goods...",
          correctReason: "与cheap并列、形容普通家庭需要的用品，durable意为'耐用的'，C正确。",
          wrongA: "无据：与好看与否无关。",
          wrongB: "相反：一次性丢弃与durable相反。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：本段正说工厂商品仍有需要，durable不指手工。",
          errorType: "单词问题：考生须用'cheap...goods'并列语境推断耐用义。"
        }
      },
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why do buyers pay more for a handmade bowl?",
        options: [
          "Because handmade bowls are always perfectly level like machines",
          "Because they want to support expensive factory advertising",
          "Because the bowl comes with a free catalogue photograph",
          "Because it carries the maker's judgment and a small human story"
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：a living person moved, breathed, and made a judgment... paying for a relationship with someone...",
          correctReason: "手工碗带着制作者的判断与人的故事，D正确。",
          wrongA: "相反：原文说手工只是almost level。",
          wrongB: "无据：与工厂广告无关。",
          wrongC: "无据：第3段说目录照片复制不了故事，并非附赠照片。",
          wrongD: "（本题D为正确答案）",
          errorType: "细节定位：考生须抓住'made a judgment'与'relationship'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the growth of handmade markets?",
        options: [
          "It proves that all buyers have become much richer than before",
          "It reflects buyers' tiredness of identical, anonymous factory goods",
          "It means that factories will soon be completely closed down",
          "It shows that catalogues are no longer used at all"
        ],
        correct: 1,
        explanation: {
          location: "原文第3段：not because buyers are richer, but because they are tired of being surrounded by identical objects...",
          correctReason: "市场扩大不是因为更富，而是厌倦了千篇一律、来历不明的商品，B正确。",
          wrongA: "相反：原文明确说not because buyers are richer。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：末段说手工不能取代工厂。",
          wrongD: "无据：未说目录被弃用。",
          errorType: "推理偏差：考生须抓住'not...but...'结构。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of the last paragraph?",
        options: [
          "To balance the argument, admitting that factories are still necessary",
          "To prove that handicrafts should replace all factory goods",
          "To describe the detailed history of a famous potter's workshop",
          "To demand that poor families buy handmade bowls instead"
        ],
        correct: 0,
        explanation: {
          location: "原文末段：Naturally, handicraft cannot replace the factory. Poor families still need cheap, durable goods...",
          correctReason: "末段承认工厂仍不可少、避免文章一边倒，起平衡论证作用，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说cannot replace the factory。",
          wrongC: "无据：未讲某个陶工作坊的历史。",
          wrongD: "相反：原文说贫困家庭需要便宜耐用的工厂用品。",
          errorType: "段落作用误判：考生须识别末段'让步平衡'功能。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_6 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_6 = READING_BATCH_6;
}
