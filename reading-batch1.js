// 成人高考专升本英语阅读题库 第一批
// 共10篇，每篇4题，难度D（成考标准）
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_1 = [
  {
    id: "r001",
    title: "Going Back to School at Any Age",
    type: "成考标准",
    level: "D",
    category: "教育",
    wordCount: 258,
    text: "Many adults who left school early in life often wonder whether it is too late to continue their education. The short answer is: it is never too late. Adult education programs have grown rapidly over the past decade, and they are designed specifically for people who already have work and family responsibilities.\n\nUnlike traditional students, adult learners bring valuable experience to the classroom. They know exactly why they are studying, which often makes them more motivated than younger students. However, returning to study after a long break also brings challenges. Many adults feel nervous about sitting in a classroom again, and some worry that their memory is not as good as it used to be.\n\nResearch on adult learning suggests that these concerns are usually unfounded. While it is true that the brain changes with age, older adults can still learn new skills effectively. In fact, their life experience often helps them understand abstract ideas more quickly. The key is to build study habits gradually instead of trying to do everything at once.\n\nMost adult education courses offer flexible schedules, including evening and weekend classes. Some are even available online, which allows students to study at their own pace. Before choosing a course, it is wise to speak with an adviser who can explain the requirements and help set realistic goals. Going back to school is a big decision, but it can open doors to better jobs and greater confidence. For many adults, the hardest part is simply taking the first step.",
    translation: "很多早年离开学校的成年人常常会想，继续学习是否已经太晚了。简短的答案是：永远都不晚。成人教育项目在过去十年中发展迅速，它们专门为那些已经承担工作和家庭责任的人设计。\n\n与传统学生不同，成年学习者把宝贵的经验带进了课堂。他们清楚自己为什么而学，这往往使他们比年轻学生更有动力。然而，在长时间的中断后重返学习也带来了挑战。许多成年人对再次坐在教室里感到紧张，有些人还担心自己的记忆力不如从前。\n\n关于成人学习的研究表明，这些担忧通常是没有根据的。虽然大脑确实会随年龄变化，但老年人仍然能够有效地学习新技能。事实上，他们的人生经验往往帮助他们更快地理解抽象概念。关键在于逐步培养学习习惯，而不是试图一次把所有事情都做完。\n\n大多数成人教育课程提供灵活的时间安排，包括晚间和周末课程。有些甚至可以在线学习，这让学生能够按自己的节奏学习。在选择课程之前，明智的做法是和一位咨询老师谈谈，他会解释课程要求并帮助制定现实的目标。重返校园是一个重大决定，但它能为更好的工作和更强的自信打开大门。对许多成年人来说，最难的部分仅仅是迈出第一步。",
    questions: [
      {
        questionType: "细节题",
        question: "Why are adult learners often more motivated than younger students?",
        options: [
          "They know clearly why they are studying.",
          "They have a better memory than young students.",
          "They can pay higher tuition than other students.",
          "They are forced to study by their families."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段第2句：They know exactly why they are studying, which often makes them more motivated than younger students.",
          correctReason: "原文直接指出成年学习者清楚自己为何而学，因此更有动力，与A选项完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "偷换对象/相反：原文说成年人担心记忆力不如从前，并非记忆力更好，B与原文意思相反。",
          wrongC: "原文未提及：文中没有提到学费高低或支付能力，属于无中生有。",
          wrongD: "原文未提及/相反：文章鼓励成年人自主选择学习，并未说家人强迫，与文意不符。",
          errorType: "定位错误：考生可能凭印象把第2段的'worry about memory'误读为记忆力好，从而错选B。"
        }
      },
      {
        questionType: "推理题",
        question: "What can we infer about the 'concerns' mentioned in Paragraph 3?",
        options: [
          "They are completely reasonable and should be taken seriously.",
          "They mainly come from strong pressure from family members.",
          "They are not as serious as most people think.",
          "They will disappear completely after one month."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段第1句：Research on adult learning suggests that these concerns are usually unfounded.",
          correctReason: "'unfounded'意为'没有根据的'，说明这些担忧并没有人们想象的那么严重，C选项准确概括。",
          wrongA: "相反：原文说concerns are usually unfounded（没有根据），A说'完全合理'与原文相反。",
          wrongB: "原文未提及：文章没有提到家庭压力是担忧的来源，属于无中生有。",
          wrongC: "（本题C为正确答案）",
          wrongD: "过度推断/无依据：原文只说要逐步培养习惯，并未说一个月后担忧会完全消失，'completely'过于绝对。",
          errorType: "推理错误：考生若只看到第2段提到成年人紧张，而忽略第3段的'unfounded'，容易误选A。"
        }
      },
      {
        questionType: "细节题",
        question: "According to the passage, what is the key to learning effectively for older adults?",
        options: [
          "Studying as many hours as possible every day.",
          "Building study habits gradually instead of rushing.",
          "Forgetting all their past experience completely.",
          "Taking only evening classes at school."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段最后一句：The key is to build study habits gradually instead of trying to do everything at once.",
          correctReason: "原文明确说关键是逐步培养学习习惯，与B选项一致。",
          wrongA: "相反：原文说'instead of trying to do everything at once'，即反对急于求成，A选项与原文相反。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说人生经验帮助他们理解得更快，并未建议忘记经验。",
          wrongD: "范围缩小：晚间课程只是灵活安排的一种，不能说是'关键'，且太绝对。",
          errorType: "长句问题：考生可能没看清'instead of'转折结构，把反面当成了建议。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main purpose of this passage?",
        options: [
          "To compare adult students with traditional students in detail.",
          "To criticize universities for not supporting adult learners.",
          "To introduce the most popular online learning websites.",
          "To encourage adults to continue their education at any age."
        ],
        correct: 3,
        explanation: {
          location: "全文：开篇说'it is never too late'，结尾说'the hardest part is simply taking the first step'。",
          correctReason: "全文围绕成年人重返学习的可行性、方法和意义展开，目的是鼓励成年人继续教育，D选项准确。",
          wrongA: "以偏概全：成年学生与传统学生的对比只是第2段的一个细节，不是全文目的。",
          wrongB: "原文未提及：文章没有批评大学，属于无中生有。",
          wrongC: "范围缩小：在线学习只是第4段提到的一种方式，并非文章主题。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生容易被某一段的细节吸引而误选局部信息。"
        }
      }
    ]
  },

  {
    id: "r002",
    title: "The Changing Face of Remote Work",
    type: "成考标准",
    level: "D",
    category: "工作职业",
    wordCount: 265,
    text: "The rise of remote work has changed the way millions of people think about their jobs. Before the pandemic, working from home was usually seen as a special benefit, offered only to a small number of employees. Today, it has become a normal choice for many industries.\n\nCompanies that once required everyone to sit in the office now realize that most tasks can be completed from anywhere with a computer and a good Internet connection. This shift has brought both advantages and challenges. On the positive side, workers save hours of daily commuting, and companies can reduce spending on office space. Employees also gain more control over their daily schedule, which often improves work-life balance.\n\nHowever, remote work is not perfect. Some workers find it difficult to separate their professional life from their personal life, because the office is just a few steps away. Others feel lonely without daily contact with colleagues. Managers, too, face new problems: it can be harder to monitor progress and to build a strong team culture when people rarely meet face to face.\n\nBecause of these difficulties, many companies now use a hybrid model. Employees go into the office two or three days a week, and work from home on the other days. This approach tries to combine the freedom of remote work with the communication benefits of a shared workplace. Whether this model will last in the long run remains to be seen, but it is clear that the traditional office will never look exactly the same again.",
    translation: "远程办公的兴起已经改变了数百万人对工作的看法。在疫情之前，居家办公通常被视为一项特殊福利，只提供给少数员工。如今，它已经成为许多行业的常规选择。\n\n那些曾经要求所有人坐在办公室的公司现在意识到，只要有一台电脑和良好的网络连接，大多数任务都可以在任何地方完成。这一转变既带来了优势，也带来了挑战。从积极的方面来看，员工每天节省了数小时的通勤时间，公司也可以减少办公空间的支出。员工还能更好地掌控自己的日程，这通常改善了工作与生活的平衡。\n\n然而，远程办公并非完美。一些员工发现很难将职业生活与个人生活分开，因为办公室就在几步之外。另一些人因为没有与同事的日常接触而感到孤独。管理者也面临新的问题：当人们很少面对面见面时，跟踪工作进度和建立强大的团队文化会变得更加困难。\n\n由于这些困难，许多公司现在采用混合模式。员工每周去办公室两三天，其余时间在家办公。这种方式试图将远程办公的自由与共享办公场所的沟通优势结合起来。这种模式长期来看是否会持续还有待观察，但很明显，传统办公室将再也不会和过去完全一样了。",
    questions: [
      {
        questionType: "细节题",
        question: "Before the pandemic, working from home was ____.",
        options: [
          "required by most large companies",
          "considered a special benefit for only a few workers",
          "widely accepted by all industries",
          "considered illegal in most countries"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段第2句：working from home was usually seen as a special benefit, offered only to a small number of employees.",
          correctReason: "原文明确说居家办公是少数员工享有的特殊福利，B选项与原文一致。",
          wrongA: "相反：原文说只提供给少数人，并非大多数公司要求，与原文相反。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：'all industries'过于绝对，原文说的是'only a small number'。",
          wrongD: "原文未提及：文章没有提到居家办公是否合法，属于无中生有。",
          errorType: "定位错误：考生可能只看到第1段末句说'现在很普遍'，忽略了时间状语'Before the pandemic'。"
        }
      },
      {
        questionType: "细节题",
        question: "What new problem does remote work bring to managers?",
        options: [
          "They cannot find enough new employees to hire.",
          "They have to pay much higher salaries to workers.",
          "They are more likely to lose their own jobs.",
          "It is harder to track progress and build team culture."
        ],
        correct: 3,
        explanation: {
          location: "原文第3段最后一句：it can be harder to monitor progress and to build a strong team culture when people rarely meet face to face.",
          correctReason: "原文直接指出管理者更难跟踪进度和建设团队文化，与D选项一致。",
          wrongA: "原文未提及：文章没有提到招聘困难的问题。",
          wrongB: "原文未提及：工资高低不是本段讨论的问题。",
          wrongC: "原文未提及：管理者自身失业风险未被提及。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生可能把第3段工人的问题（孤独、工作生活难分）误当成管理者的问题。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word 'hybrid' in Paragraph 4 probably means ____.",
        options: [
          "combining two different systems or methods",
          "completely online and paperless",
          "working only on weekends",
          "fully controlled by machines"
        ],
        correct: 0,
        explanation: {
          location: "原文第4段：Employees go into the office two or three days a week, and work from home on the other days.",
          correctReason: "后文解释了混合模式：一部分时间在办公室、一部分时间在家，hybrid意为'混合的'，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：混合模式仍需去办公室，并非完全在线。",
          wrongC: "原文未提及：周末工作不是混合模式的含义。",
          wrongD: "原文未提及：与机器控制无关。",
          errorType: "单词问题：考生若不认识hybrid，可通过下文解释（办公室两三天+其余在家）推断出'混合'含义。"
        }
      },
      {
        questionType: "细节题",
        question: "Why do some workers find it hard to separate work from life at home?",
        options: [
          "Because their homes are usually too small to work in.",
          "Because they do not have a computer at home.",
          "Because the office is just a few steps away.",
          "Because they earn less money when working at home."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段第2句：Some workers find it difficult to separate their professional life from their personal life, because the office is just a few steps away.",
          correctReason: "原文直接给出原因：办公室就在几步之外，C选项与原文一致。",
          wrongA: "原文未提及：文章没有讨论住房大小。",
          wrongB: "与原文矛盾：第2段提到居家办公需要电脑，说明员工有设备。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：收入多少不是本段讨论的内容。",
          errorType: "定位错误：考生可能凭常识猜测居家办公困难的原因，而没有回到原文找because引导的原因句。"
        }
      }
    ]
  },

  {
    id: "r003",
    title: "Taking Sleep Seriously",
    type: "成考标准",
    level: "D",
    category: "健康",
    wordCount: 272,
    text: "Sleep is often the first thing people sacrifice when they are busy, but modern research suggests that this habit may be more harmful than we realize. Many adults now sleep less than six hours a night, and this number has dropped steadily over the past few decades.\n\nWhen we do not get enough sleep, the effects are not immediately obvious. At first, we may simply feel tired and find it hard to focus. Over time, however, poor sleep can seriously affect our health. Studies have linked long-term lack of sleep to heart disease, weight gain, and a weaker immune system. It can also influence mood, making people more likely to feel anxious or depressed.\n\nThe good news is that sleep is not a mystery that only doctors can solve. Small changes in daily habits often make a big difference. Experts suggest going to bed and getting up at the same time every day, even on weekends. They also advise avoiding screens for at least an hour before bed, because the light from phones and computers can confuse the body's natural clock. Drinking less coffee in the afternoon and keeping the bedroom dark and quiet are other simple steps.\n\nOf course, not every sleep problem can be fixed by habits alone. If someone has trouble falling asleep for weeks, or wakes up several times every night, it may be wise to see a doctor. Sleep problems can sometimes be a sign of a deeper medical condition. Taking sleep seriously, however, is one of the easiest and most powerful ways to protect our long-term health.",
    translation: "当人们忙碌时，睡眠往往是最先被牺牲的东西，但现代研究表明，这个习惯可能比我们意识到的更有害。现在许多成年人每晚睡眠不足六小时，而这个数字在过去几十年里稳步下降。\n\n当我们睡眠不足时，影响并不会立刻显现。起初，我们可能只是觉得疲倦，难以集中注意力。然而，随着时间推移，睡眠不足会严重影响我们的健康。研究已经将长期睡眠不足与心脏病、体重增加和免疫力下降联系起来。它还会影响情绪，使人更容易感到焦虑或抑郁。\n\n好消息是，睡眠并不是只有医生才能解决的谜。日常习惯的微小改变往往会带来很大的不同。专家建议每天在同一时间上床睡觉和起床，即使在周末也是如此。他们还建议睡前至少一小时避免看屏幕，因为手机和电脑发出的光会扰乱人体的生物钟。下午少喝咖啡、保持卧室黑暗安静也是其他简单的做法。\n\n当然，并非每个睡眠问题都能仅靠习惯来解决。如果一个人数周难以入睡，或者每晚醒来好几次，去看医生可能是明智的。睡眠问题有时可能是更深层疾病的信号。然而，认真对待睡眠是保护我们长期健康最简单、最有效的方法之一。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what may result from long-term lack of sleep?",
        options: [
          "People may become richer over time.",
          "People may need less coffee in daily life.",
          "People may develop heart disease.",
          "People may sleep better on weekends."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段第4句：Studies have linked long-term lack of sleep to heart disease, weight gain, and a weaker immune system.",
          correctReason: "原文直接将长期睡眠不足与心脏病联系起来，C选项正确。",
          wrongA: "原文未提及：文章没有提到睡眠与财富的关系。",
          wrongB: "与原文相反：第3段建议下午少喝咖啡，并非睡眠少就不需要咖啡。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：周末睡得更好并非睡眠不足的结果。",
          errorType: "定位错误：考生需要在第2段找到linked to后面的并列名词，不能凭常识乱选。"
        }
      },
      {
        questionType: "细节题",
        question: "Why should people avoid screens for at least an hour before bed?",
        options: [
          "The light from screens may confuse the body's natural clock.",
          "Screens usually produce too much background noise.",
          "Phones and computers are too expensive to use at night.",
          "Bedrooms must be kept completely dark at all times."
        ],
        correct: 0,
        explanation: {
          location: "原文第3段第4句：because the light from phones and computers can confuse the body's natural clock.",
          correctReason: "原文直接给出原因：屏幕的光会扰乱生物钟，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章说的是'光'的问题，不是噪音。",
          wrongC: "原文未提及：设备价格与睡前用屏幕无关。",
          wrongD: "答非所问：保持卧室黑暗是另一条建议，不是避免屏幕的原因。",
          errorType: "定位错误：考生可能把第3段的多条建议混淆，误把'保持卧室黑暗'当成原因。"
        }
      },
      {
        questionType: "推理题",
        question: "What does the writer suggest about serious sleep problems?",
        options: [
          "They are always caused by doctors' mistakes.",
          "They can be cured by drinking more coffee.",
          "They are not worth paying attention to.",
          "They may need professional medical attention."
        ],
        correct: 3,
        explanation: {
          location: "原文第4段第2句：If someone has trouble falling asleep for weeks... it may be wise to see a doctor.",
          correctReason: "原文说严重睡眠问题应该看医生，D选项'需要专业医疗关注'符合文意。",
          wrongA: "原文未提及：文章没有提到医生失误。",
          wrongB: "相反：第3段建议下午少喝咖啡，咖啡会影响睡眠。",
          wrongC: "相反：全文强调要认真对待睡眠。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理错误：考生若忽略第4段的条件句（for weeks, several times every night），容易误以为所有问题都靠习惯解决。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the best title for this passage?",
        options: [
          "How to Choose a Comfortable Bed",
          "Why Sleep Matters and How to Improve It",
          "The History of Coffee Drinking",
          "Why Modern People Are Becoming Richer"
        ],
        correct: 1,
        explanation: {
          location: "全文：第1-2段讲睡眠不足的危害，第3-4段讲改善方法。",
          correctReason: "文章既讲睡眠的重要性（危害），又讲改善方法，B选项完整概括。",
          wrongA: "原文未提及：文章没有讨论如何选床。",
          wrongB: "（本题B为正确答案）",
          wrongC: "以偏概全：咖啡只在第3段被顺带提到一句，不是主题。",
          wrongD: "原文未提及：文章与财富无关。",
          errorType: "主旨判断错误：考生容易被某个细节词（如coffee）吸引而误选局部选项。"
        }
      }
    ]
  },

  {
    id: "r004",
    title: "Facing the Problem of Information Overload",
    type: "成考标准",
    level: "D",
    category: "科技互联网",
    wordCount: 258,
    text: "The Internet has made information easier to find than ever before. In the past, if people wanted to know something, they had to go to a library, look through books, or ask an expert. Today, a few seconds on a smartphone are usually enough to find millions of results on almost any topic.\n\nHowever, this convenience has created a new problem: information overload. When we are given too much information at once, our brains struggle to decide what to trust. Much of the content online is written to attract attention rather than to tell the truth, and it is easy to share a false story before we have time to check it. Studies have shown that many people cannot tell the difference between a real news report and a false one, especially when the story matches what they already believe.\n\nThis does not mean the Internet is bad. On the contrary, it offers ordinary people access to knowledge that was once limited to a small group. The key is to develop better reading habits. Experts suggest checking where a piece of news comes from, looking for more than one source, and asking whether the information is supported by facts rather than feelings. It also helps to limit the time we spend on social media, where false stories often spread faster than true ones.\n\nIn the end, the problem is not the technology itself. The real challenge is learning how to use it wisely. As tools improve, our ability to judge information has to improve as well.",
    translation: "互联网让信息比以往任何时候都更容易获取。在过去，如果人们想了解某件事，他们必须去图书馆、翻阅书籍或询问专家。如今，在智能手机上花几秒钟通常就足以找到几乎任何话题的数百万条结果。\n\n然而，这种便利也带来了一个新问题：信息过载。当我们一次性接收太多信息时，大脑很难决定该相信什么。网上的许多内容是为了吸引注意力而写的，并非为了讲述真相，人们很容易在还没来得及核实之前就转发了一个虚假故事。研究表明，许多人无法区分真实新闻报道和虚假新闻，尤其是当故事符合他们已有的看法时。\n\n这并不意味着互联网是坏的。相反，它让普通人能够获取曾经只属于少数人的知识。关键是要养成更好的阅读习惯。专家建议查看一条新闻的来源，寻找不止一个信息来源，并询问信息是否有事实依据而非仅仅是情感。限制花在社交媒体上的时间也有帮助，因为虚假故事在那里往往比真实故事传播得更快。\n\n归根结底，问题不在于技术本身。真正的挑战是学会如何明智地使用它。随着工具的改进，我们判断信息的能力也必须提高。",
    questions: [
      {
        questionType: "主旨题",
        question: "What is the main problem discussed in Paragraph 2?",
        options: [
          "Libraries are closing down all over the country.",
          "Smartphones have become too expensive for ordinary people.",
          "People now read too many books every year.",
          "Too much online information is difficult to judge correctly."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段第1句：this convenience has created a new problem: information overload.",
          correctReason: "第2段中心是'信息过载'——网上信息太多，人们难以判断真伪，D选项概括准确。",
          wrongA: "原文未提及：图书馆关闭不是本段内容。",
          wrongB: "原文未提及：手机价格未被讨论。",
          wrongC: "与原文相反：文章说人们难以辨别信息，并非读书太多。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生可能被第2段中'libraries'等词误导，其实那是第1段的内容。"
        }
      },
      {
        questionType: "细节题",
        question: "According to experts, what should we do to read online wisely?",
        options: [
          "Trust whatever information our friends share.",
          "Check the source and compare different reports.",
          "Only read news from a single familiar website.",
          "Stop using the Internet completely and forever."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段第4句：Experts suggest checking where a piece of news comes from, looking for more than one source...",
          correctReason: "专家建议查看来源并查找多个信息源，与B选项一致。",
          wrongA: "相反：原文强调要核实，而非盲目相信朋友分享。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：原文说'looking for more than one source'，与只看一个网站相反。",
          wrongD: "过度推断：文章并没有建议完全停用互联网，而是要明智使用。",
          errorType: "推理错误：考生可能把'限制社交媒体时间'极端化为'完全不用网络'。"
        }
      },
      {
        questionType: "推理题",
        question: "Why do false stories spread quickly on social media, according to the passage?",
        options: [
          "Because they are usually written by top experts.",
          "Because they are always more accurate than real news.",
          "Because they often match what people already want to believe.",
          "Because they are always shorter than real news reports."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段最后一句：especially when the story matches what they already believe；第3段最后一句：false stories often spread faster than true ones.",
          correctReason: "结合两处可推断，虚假故事之所以传播快，是因为它们符合人们已有的看法，C选项合理。",
          wrongA: "与原文相反：原文说虚假内容是为了吸引注意，并非由专家撰写。",
          wrongB: "相反：虚假新闻不真实。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：篇幅长短不是传播速度的原因。",
          errorType: "推理错误：考生需要把第2段末句和第3段末句联系起来，单看一句容易漏选。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the writer's attitude toward the Internet?",
        options: [
          "Objective: it has both advantages and problems.",
          "Completely negative: it should be banned.",
          "Completely positive: it solves all problems.",
          "Doubtful: it will soon disappear."
        ],
        correct: 0,
        explanation: {
          location: "第2段讲问题（information overload, false news），第3段开头说'This does not mean the Internet is bad. On the contrary...'。",
          correctReason: "作者既指出互联网的问题，又承认它的好处，态度客观平衡，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "过度推断：作者没有要求禁止互联网。",
          wrongC: "过度推断：作者也指出了问题，并非完全肯定。",
          wrongD: "原文未提及：作者没有预言互联网会消失。",
          errorType: "态度判断错误：考生如果只看某一段（如第2段全是问题），容易误以为作者完全否定。"
        }
      }
    ]
  },

  {
    id: "r005",
    title: "Why Cities Need More Green Space",
    type: "成考标准",
    level: "D",
    category: "环境",
    wordCount: 263,
    text: "Cities are often described as places of concrete and steel, but green spaces play an equally important role in urban life. Parks, gardens, and even small trees along streets are not just pleasant to look at. They actually affect the health, happiness, and safety of the people who live nearby.\n\nOne well-known benefit of green spaces is that they reduce the 'heat island' effect. In a city, roads and buildings absorb the sun's heat during the day and release it slowly at night, making the center several degrees hotter than the surrounding countryside. Trees and grass can cool the air by providing shade and releasing water, which makes a real difference during hot summer months.\n\nGreen spaces also support mental health. Researchers have found that people who live near parks report lower levels of stress and are more likely to exercise. Children who play in natural areas develop better attention skills, which may improve their performance at school. Neighbors who share a park also seem to communicate more, building a stronger sense of community.\n\nDespite these benefits, urban green space is often under pressure. As cities grow, people want more housing and offices, and open land is sometimes seen as wasted space. City planners are now beginning to realize that a city without parks is a city with a lower quality of life. Creating small gardens, rooftop trees, and pocket parks in busy neighborhoods is becoming an important part of urban planning. When people can reach nature within a short walk, the whole city becomes a healthier and more pleasant place to live.",
    translation: "城市常常被描述为混凝土和钢铁的地方，但绿色空间在城市生活中扮演着同样重要的角色。公园、花园，甚至街道旁的小树，不仅仅是好看而已。它们实际上影响着附近居民的健康、幸福感和安全。\n\n绿色空间一个众所周知的好处是它们能减轻'热岛效应'。在城市里，道路和建筑物白天吸收太阳的热量，夜间缓慢释放，使市中心比周围乡村高出好几度。树木和草地可以通过遮阴和释放水分来冷却空气，在炎热的夏季带来实实在在的不同。\n\n绿色空间还有助于心理健康。研究人员发现，住在公园附近的人压力水平更低，也更有可能锻炼身体。在自然区域玩耍的孩子会发展出更好的注意力，这可能提高他们在学校的表现。共享一个公园的邻居之间似乎也有更多交流，从而建立更强的社区归属感。\n\n尽管有这些好处，城市绿色空间却经常面临压力。随着城市发展，人们需要更多住房和办公楼，开放空间有时被视为浪费的土地。城市规划者现在开始意识到，一个没有公园的城市是生活质量较低的城市。在繁忙社区里建造小花园、屋顶树木和袖珍公园，正成为城市规划的重要部分。当人们步行一小段路就能亲近自然时，整座城市都会变得更健康、更宜居。",
    questions: [
      {
        questionType: "细节题",
        question: "How do trees and grass help cool the city air?",
        options: [
          "By providing shade and releasing water.",
          "By covering all the city roads completely.",
          "By blocking all sunlight from reaching the ground.",
          "By warming the buildings during the night."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段最后一句：Trees and grass can cool the air by providing shade and releasing water...",
          correctReason: "原文直接说明树木和草地通过遮阴和释放水分来冷却空气，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及/范围扩大：文章没有说覆盖所有道路。",
          wrongC: "范围扩大：'blocking all sunlight'过于绝对，原文只是providing shade。",
          wrongD: "相反：树木是降温，不是夜间给建筑加温。",
          errorType: "定位错误：考生需要在第2段找到by后面的两个并列方式，不能凭常识乱猜。"
        }
      },
      {
        questionType: "细节题",
        question: "According to the passage, children who play in natural areas ____.",
        options: [
          "get sick more often than other children",
          "have less homework to finish at school",
          "prefer to stay at home rather than go out",
          "may perform better in their school studies"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段第3句：Children who play in natural areas develop better attention skills, which may improve their performance at school.",
          correctReason: "原文说在自然区域玩耍的孩子注意力更好，可能提高学校表现，D选项正确。",
          wrongA: "原文未提及：文章没有提到生病频率。",
          wrongB: "原文未提及：作业量与自然玩耍无关。",
          wrongC: "相反：在自然区域玩耍的孩子显然喜欢外出。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需要抓住which引导的定语从句中的improve their performance。"
        }
      },
      {
        questionType: "推理题",
        question: "Why is urban green space 'under pressure' according to Paragraph 4?",
        options: [
          "Because parks are too expensive to build and maintain.",
          "Because growing cities need land for housing and offices.",
          "Because trees grow too slowly to be useful.",
          "Because most people dislike living near parks."
        ],
        correct: 1,
        explanation: {
          location: "原文第4段第2句：As cities grow, people want more housing and offices, and open land is sometimes seen as wasted space.",
          correctReason: "城市扩张需要更多住房和办公楼，开放土地被视为浪费，因此绿地承压，B选项正确。",
          wrongA: "原文未提及：文章没有讨论建公园的成本。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：树木生长速度未被讨论。",
          wrongD: "与原文相反：文章说住在公园附近的人更健康、更幸福。",
          errorType: "推理错误：考生需要理解'under pressure'与后文'as cities grow'之间的因果关系。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Cities should stop growing immediately.",
          "Trees are more useful than all city buildings.",
          "Green spaces are essential to the quality of urban life.",
          "Summer in the city center is always too hot."
        ],
        correct: 2,
        explanation: {
          location: "全文：第1段总起，第2-3段讲绿地的好处，第4段讲绿地面临的压力及规划方向。",
          correctReason: "文章从降温、心理健康、社区关系等多角度论述绿地对城市生活的重要性，C选项概括准确。",
          wrongA: "过度推断：作者并未主张停止城市发展。",
          wrongB: "过度推断：文章没有比较树木和建筑谁更有用。",
          wrongC: "（本题C为正确答案）",
          wrongD: "以偏概全：夏季炎热只是第2段的一个细节。",
          errorType: "主旨判断错误：考生容易被某一段的细节（如热岛效应）带偏。"
        }
      }
    ]
  },

  {
    id: "r006",
    title: "The New Popularity of Second-Hand Shopping",
    type: "成考标准",
    level: "D",
    category: "消费",
    wordCount: 279,
    text: "In recent years, buying second-hand goods has become popular again, especially among young people. What was once seen as a choice for people with tight budgets is now a fashionable way to shop. Clothing, furniture, and even electronic devices are regularly traded online and in local second-hand markets.\n\nThere are several reasons behind this change. First, second-hand shopping saves money. A jacket that costs several hundred yuan new may be found in good condition for a small part of that price. Second, it is better for the environment. Making new products uses up natural resources and produces waste, so reusing existing things reduces the pressure on the planet. Third, many buyers simply enjoy the experience of searching for something special. A second-hand store is full of surprises, and finding a useful item at a low price feels like a small victory.\n\nHowever, second-hand shopping also requires care. Buyers need to check the quality of an item carefully, especially when shopping online where they cannot see it in person. Electronics may have hidden problems, and clothing may be worn out. Sellers are not always honest, so it is wise to ask for clear photos and to read other buyers' comments before paying.\n\nFor sellers, the second-hand market offers a useful way to clear things they no longer need and earn a little money at the same time. Whether you are buying or selling, the golden rule is simple: be honest about what you offer, and think carefully before you pay. With a little patience and common sense, this market can benefit everyone who takes part in it.",
    translation: "近年来，购买二手商品再次流行起来，尤其是在年轻人当中。曾经被认为是预算紧张者的选择，如今已成为一种时尚的购物方式。服装、家具，甚至电子设备，都经常在网上和当地的二手市场进行交易。\n\n这种变化背后有几个原因。首先，二手购物省钱。一件新的要几百元的夹克，可能以原价的一小部分就能找到成色很好的。其次，它对环境更好。制造新产品会消耗自然资源并产生废物，因此重复使用现有物品能减轻地球的压力。第三，许多买家就是喜欢搜寻特别物品的体验。二手店里充满了惊喜，以低价找到一件有用的东西就像一场小小的胜利。\n\n然而，二手购物也需要谨慎。买家需要仔细检查商品质量，尤其是在网上购物时无法亲眼看到实物。电子产品可能有隐藏问题，衣服可能已经磨损。卖家并不总是诚实的，因此付款前索要清晰照片并阅读其他买家的评论是明智的。\n\n对卖家来说，二手市场提供了一种有用的方式来清理不再需要的东西，同时还能赚一点钱。无论你是买还是卖，黄金法则都很简单：对你所出售的东西要诚实，付款前要仔细考虑。只要多一点耐心和常识，这个市场就能让所有参与者受益。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, why do many buyers enjoy second-hand shopping?",
        options: [
          "Because all second-hand goods are actually brand new.",
          "Because finding a bargain feels like a rewarding experience.",
          "Because it takes much less time than shopping in malls.",
          "Because there are no rules in second-hand markets."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段最后一句：finding a useful item at a low price feels like a small victory.",
          correctReason: "原文说低价淘到好东西像一场小胜利，即一种令人满足的体验，B选项正确。",
          wrongA: "与原文矛盾：二手商品是已使用过的，不是全新的。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：文章没有比较购物时间。",
          wrongD: "与原文相反：第3段强调需要谨慎、看评论，并非没有规则。",
          errorType: "定位错误：考生需要抓住第2段third后面的内容，不能凭生活经验乱猜。"
        }
      },
      {
        questionType: "细节题",
        question: "What should online buyers do to avoid problems in second-hand shopping?",
        options: [
          "Buy the cheapest product as soon as possible.",
          "Trust all sellers without checking their records.",
          "Ask for clear photos and read other buyers' comments.",
          "Pay only in cash when the product arrives."
        ],
        correct: 2,
        explanation: {
          location: "原文第3段最后一句：it is wise to ask for clear photos and to read other buyers' comments before paying.",
          correctReason: "原文直接建议索要清晰照片并阅读评论，C选项正确。",
          wrongA: "与原文相反：文章强调要仔细检查，而不是急着买最便宜的。",
          wrongB: "与原文相反：原文说卖家不总是诚实，不能盲目信任。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：文章没有讨论付款方式。",
          errorType: "定位错误：考生需要在第3段找到wise to后面的两个并列动作。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word 'budget' in Paragraph 1 probably means ____.",
        options: [
          "the amount of money a person has available to spend",
          "a kind of well-known second-hand store",
          "a popular shopping website for young people",
          "a type of traditional Chinese clothing"
        ],
        correct: 0,
        explanation: {
          location: "原文第1段第2句：What was once seen as a choice for people with tight budgets is now a fashionable way to shop.",
          correctReason: "tight budgets指'紧张的预算'，即可花的钱不多，budget意为预算/可支配金额，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "词性错误：budget不是商店名称。",
          wrongC: "词性错误：budget不是网站。",
          wrongD: "词性错误：budget不是衣服。",
          errorType: "单词问题：考生若不认识budget，可通过tight（紧张的）和下文省钱的逻辑推断出与钱有关。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the passage mainly about?",
        options: [
          "Why new products are becoming more expensive every year.",
          "How to repair old furniture at home by yourself.",
          "The short history of electronic devices in China.",
          "The rise of second-hand shopping and its risks."
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段讲二手购物流行，第2段讲原因，第3段讲注意事项，第4段讲买卖双方建议。",
          correctReason: "文章既讲二手购物为何兴起（省钱、环保、乐趣），又讲其风险和注意事项，D选项概括完整。",
          wrongA: "以偏概全：新产品贵只是第2段省钱原因的背景。",
          wrongB: "原文未提及：文章没有讲如何修家具。",
          wrongC: "以偏概全：电子设备只是第3段提到的一个例子。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生容易只关注某一段（如环保原因）而忽略全文结构。"
        }
      }
    ]
  },

  {
    id: "r007",
    title: "Paper Cutting: A Traditional Art in Danger",
    type: "成考标准",
    level: "D",
    category: "文化历史",
    wordCount: 270,
    text: "Paper cutting is one of the most popular traditional folk arts in China. For hundreds of years, beautiful paper cuttings have been used to decorate windows, doors, and walls, especially during the Spring Festival. The bright red color of the paper is believed to bring good luck and drive away bad spirits.\n\nIn the past, almost every village had women who could make paper cuttings. They learned the skill from their mothers and grandmothers, and the designs were passed down from one generation to the next. Common patterns included flowers, birds, animals, and characters from old stories. A skilled craftswoman could turn a simple piece of red paper into a lively picture within minutes.\n\nToday, however, this traditional art is facing serious challenges. Fewer young people are willing to spend years learning such a slow and detailed skill, because modern life offers many faster ways to make money. Cheap printed decorations have also taken the place of hand-made cuttings in many homes. As a result, the number of master paper-cutters has dropped sharply.\n\nIn recent years, the government has taken steps to protect paper cutting as part of the national cultural heritage. Some schools have started paper-cutting classes, and artists are invited to give shows at festivals. Yet protection alone may not be enough. For this art to survive, it must be connected to modern life. A paper cutting sold as a postcard, a book cover, or a phone case may have a better chance of reaching young people than one kept only in a museum.",
    translation: "剪纸是中国最受欢迎的传统民间艺术之一。几百年来，漂亮的剪纸一直被用来装饰窗户、门和墙壁，尤其是在春节期间。纸鲜艳的红色被认为能带来好运、驱走邪灵。\n\n在过去，几乎每个村子都有会剪纸的妇女。她们从母亲和祖母那里学会这门技艺，图案代代相传。常见的图案包括花、鸟、动物以及古老故事中的人物。一位熟练的手工艺妇女能在几分钟内把一张简单的红纸变成一幅生动的图画。\n\n然而今天，这门传统艺术正面临严峻挑战。愿意花费数年学习这样一门缓慢而精细技艺的年轻人越来越少，因为现代生活提供了许多更快的赚钱方式。廉价的印刷装饰品也在许多家庭中取代了手工剪纸。结果，剪纸大师的数量急剧下降。\n\n近年来，政府已采取措施保护剪纸，将其作为国家文化遗产的一部分。一些学校开设了剪纸课，艺术家也受邀在节日上表演。然而，仅仅保护可能还不够。这门艺术要想生存，必须与现代生活联系起来。一张作为明信片、书封或手机壳出售的剪纸，可能比只保存在博物馆里的剪纸更有机会接触年轻人。",
    questions: [
      {
        questionType: "细节题",
        question: "What is the traditional meaning of red paper cuttings?",
        options: [
          "They are used as a form of paper money.",
          "They are given only as wedding gifts.",
          "They are believed to bring good luck and drive away bad spirits.",
          "They are used to block sunlight in summer."
        ],
        correct: 2,
        explanation: {
          location: "原文第1段最后一句：The bright red color of the paper is believed to bring good luck and drive away bad spirits.",
          correctReason: "原文直接说明红色剪纸寓意好运和驱邪，C选项正确。",
          wrongA: "原文未提及：剪纸不是纸钱。",
          wrongB: "范围缩小：'only'过于绝对，原文说主要在春节期间使用。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：剪纸不是用来挡阳光的。",
          errorType: "定位错误：考生需要在第1段找到is believed to后面的内容。"
        }
      },
      {
        questionType: "推理题",
        question: "Why are fewer young people willing to learn paper cutting?",
        options: [
          "Because paper cutting is too easy to learn.",
          "Because the training takes years and pays poorly.",
          "Because they do not like the color red.",
          "Because schools have completely banned paper cutting."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段第2句：Fewer young people are willing to spend years learning such a slow and detailed skill, because modern life offers many faster ways to make money.",
          correctReason: "原文说学艺要花很多年，而现代有更快的赚钱方式，即学艺时间长、收入低，B选项合理推断。",
          wrongA: "相反：原文说slow and detailed，并不容易。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：年轻人不喜欢红色没有依据。",
          wrongD: "与原文相反：第4段说学校正在开设剪纸课。",
          errorType: "推理错误：考生需要把spend years（时间长）和faster ways to make money（收入慢）结合起来推理。"
        }
      },
      {
        questionType: "细节题",
        question: "According to the passage, what may help paper cutting survive in modern times?",
        options: [
          "Keeping all paper cuttings only inside museums.",
          "Stopping all printed decorations completely.",
          "Changing the traditional color from red to blue.",
          "Connecting paper cutting with modern daily products."
        ],
        correct: 3,
        explanation: {
          location: "原文第4段倒数第2句：For this art to survive, it must be connected to modern life. 以及最后一句举例postcard, book cover, phone case.",
          correctReason: "原文说剪纸必须与现代生活联系，并举例明信片、书封、手机壳等现代产品，D选项正确。",
          wrongA: "与原文相反：最后一句说只放在博物馆里接触不到年轻人。",
          wrongB: "原文未提及：文章没有要求停止所有印刷装饰。",
          wrongC: "原文未提及：文章没有提到改颜色。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需要抓住must be connected to modern life这一核心句。"
        }
      },
      {
        questionType: "文章目的题",
        question: "Why did the writer most likely write this passage?",
        options: [
          "To introduce a traditional Chinese art and express concern about its future.",
          "To teach readers step by step how to cut red paper.",
          "To compare Chinese paper cutting with Western painting.",
          "To advertise paper-cutting products for sale."
        ],
        correct: 0,
        explanation: {
          location: "全文：第1-2段介绍剪纸，第3段讲危机，第4段讲保护和出路。",
          correctReason: "文章介绍剪纸这门传统艺术，并表达了对其未来的担忧和建议，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有提供剪纸教学步骤。",
          wrongC: "原文未提及：没有与西方绘画比较。",
          wrongD: "原文未提及：文章不是商业广告。",
          errorType: "主旨判断错误：考生若把最后一段举例（postcard, phone case）误解为广告，容易误选D。"
        }
      }
    ]
  },

  {
    id: "r008",
    title: "A New Beginning After Losing Her Job",
    type: "成考标准",
    level: "D",
    category: "人物经历",
    wordCount: 260,
    text: "When Liu Meimei was laid off from her factory job at the age of forty, she felt lost. She had worked at the same company for nearly twenty years, and the thought of finding a new job worried her. However, what happened next changed her life in a way she had never expected.\n\nInstead of applying for other factory positions, she decided to do what she had always enjoyed: cooking. Using her savings, she rented a small shop near a community and started selling homemade dumplings. At first, business was slow. Some days she sold only a few plates, and she doubted whether she could continue. But she refused to give up. She adjusted her recipes based on customer feedback, stayed open later, and slowly built a group of regular customers.\n\nWithin a year, her small dumpling shop became well known in the neighborhood. People came from nearby streets to taste her dumplings, and she even began selling frozen ones that customers could take home. Last year, she hired two part-time workers and opened a second branch.\n\nWhen a local newspaper interviewed her, she said that losing her job had been the best thing that ever happened to her. 'I used to think that being laid off was the end of the world,' she told the reporter. 'Now I realize it gave me the chance to try something I had been afraid to try for years.' Her story is a reminder that a difficult moment can sometimes become the starting point of a new direction.",
    translation: "当刘梅梅四十岁从工厂下岗时，她感到迷茫。她在同一家公司工作了近二十年，想到要找新工作就担心。然而，接下来发生的事情以她从未预料的方式改变了她的生活。\n\n她没有去申请其他工厂的职位，而是决定做自己一直喜欢的事：烹饪。她用积蓄在一个社区附近租了一家小店，开始卖手工饺子。起初生意清淡。有些天她只能卖出几盘，她怀疑自己能否继续下去。但她拒绝放弃。她根据顾客反馈调整配方，延长营业时间，慢慢建立起一批老顾客。\n\n不到一年，她的小饺子店在社区里出了名。人们从附近的街道来品尝她的饺子，她甚至开始卖可以带回家的冷冻饺子。去年，她雇了两名兼职工人，并开了第二家分店。\n\n当当地报纸采访她时，她说失业是发生在她身上最好的事。'我曾经以为下岗是世界末日，'她告诉记者。'现在我意识到它给了我机会去尝试多年来一直不敢尝试的事。'她的故事提醒人们：一个困难的时刻，有时可能成为新方向的起点。",
    questions: [
      {
        questionType: "细节题",
        question: "What did Liu Meimei do after she lost her factory job?",
        options: [
          "She immediately found another job in a similar factory.",
          "She moved to another city to live with her relatives.",
          "She began writing stories for a local newspaper.",
          "She rented a small shop and started selling dumplings."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段第2句：Using her savings, she rented a small shop near a community and started selling homemade dumplings.",
          correctReason: "原文直接说她租小店卖饺子，D选项正确。",
          wrongA: "与原文相反：第2段开头说Instead of applying for other factory positions。",
          wrongB: "原文未提及：文章没有提到搬家或投奔亲戚。",
          wrongC: "与原文矛盾：第4段说她接受报纸采访，不是为报纸写稿。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生需要在第2段找到Instead of...结构，避免把反面信息当成事实。"
        }
      },
      {
        questionType: "推理题",
        question: "Why did Liu Meimei's business gradually become better?",
        options: [
          "She listened to customers and kept improving her food.",
          "She received a large amount of money from the government.",
          "Her shop was the largest restaurant in the whole city.",
          "She sold her dumplings at a price of zero yuan."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段最后一句：She adjusted her recipes based on customer feedback, stayed open later, and slowly built a group of regular customers.",
          correctReason: "她根据顾客反馈调整配方、延长营业时间，生意才慢慢好转，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有提到政府资助。",
          wrongC: "与原文矛盾：她的店一开始是small shop。",
          wrongD: "原文未提及：免费送饺子没有依据。",
          errorType: "推理错误：考生需要把adjusted recipes based on customer feedback概括为'听取顾客意见并改进'。"
        }
      },
      {
        questionType: "细节题",
        question: "What did Liu Meimei say in the newspaper interview?",
        options: [
          "She deeply regretted leaving her factory job.",
          "Laid-off workers should move abroad for better lives.",
          "Losing her job gave her a chance to start something new.",
          "Cooking is much harder than working in a factory."
        ],
        correct: 2,
        explanation: {
          location: "原文第4段引用：Now I realize it gave me the chance to try something I had been afraid to try for years.",
          correctReason: "她认为失业给了她尝试新事物的机会，C选项正确。",
          wrongA: "与原文相反：她说失业是'最好的事'，并非后悔。",
          wrongB: "原文未提及：文章没有建议下岗工人出国。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：她没有比较做饭和工厂工作的难度。",
          errorType: "定位错误：考生需要在第4段直接引语中抓住gave me the chance to try。"
        }
      },
      {
        questionType: "主旨题",
        question: "What lesson can we learn from Liu Meimei's story?",
        options: [
          "People should never work in a factory after the age of forty.",
          "A setback in life may sometimes lead to a new opportunity.",
          "Opening a food shop is the best business in China.",
          "Being laid off is always a terrible experience."
        ],
        correct: 1,
        explanation: {
          location: "原文最后一句：Her story is a reminder that a difficult moment can sometimes become the starting point of a new direction.",
          correctReason: "文章结尾点明主旨：困难时刻可能成为新方向的起点，B选项正确。",
          wrongA: "过度推断：文章没有说40岁后不能进工厂。",
          wrongB: "（本题B为正确答案）",
          wrongC: "过度推断：文章没有比较哪种生意最好。",
          wrongD: "与原文相反：她说失业是最好的事，并非总是可怕。",
          errorType: "主旨判断错误：考生容易把故事细节（开饺子店）当成结论。"
        }
      }
    ]
  },

  {
    id: "r009",
    title: "Making City Traffic Easier",
    type: "成考标准",
    level: "D",
    category: "城市生活",
    wordCount: 287,
    text: "For most people who live in large cities, the daily commute is one of the most tiring parts of modern life. Rush hour trains are crowded, roads are full of cars, and a trip that should take twenty minutes can easily become an hour. In recent years, cities have been trying different ways to make travel easier.\n\nOne popular step is the development of subway networks. In many Chinese cities, subway lines now cover most of the urban area, allowing people to travel quickly without worrying about traffic jams. Subways also produce far less pollution than private cars, which helps improve air quality. However, building subways is expensive, and stations can be very crowded during peak hours.\n\nAnother common measure is the creation of bus lanes. When buses have their own lanes, they are no longer stuck behind private cars, and their speed increases greatly. This encourages more people to take the bus instead of driving, which further reduces traffic. Some cities have also introduced shared bikes, which solve the 'last kilometer' problem: how to get from a bus stop or subway station to one's final destination.\n\nNone of these measures alone can solve city traffic. The real solution, planners say, is to combine them. A good public transport system should allow people to switch easily between buses, subways, and bikes. When taking public transport becomes as convenient as driving, more people will choose to leave their cars at home. This change will not happen overnight, but every new subway line, bus lane, and shared bike brings the city one step closer to that goal.",
    translation: "对大多数生活在大城市的人来说，每天通勤是现代生活中最累人的部分之一。高峰期的火车拥挤不堪，马路上全是车，一段本应二十分钟的路程很容易变成一个小时。近年来，各城市一直在尝试不同的方法让出行更轻松。\n\n一个受欢迎的措施是发展地铁网络。在中国许多城市，地铁线路现在覆盖了大部分城区，让人们可以快速出行而不用担心堵车。地铁比私家车产生的污染少得多，这有助于改善空气质量。然而，修建地铁成本高昂，车站在高峰期也会非常拥挤。\n\n另一个常见措施是设立公交专用道。当公交车有自己的车道时，它们就不再被私家车堵住，速度大大提高。这鼓励更多人乘坐公交而不是开车，从而进一步减少交通压力。一些城市还推出了共享单车，解决了'最后一公里'问题：如何从公交站或地铁站到达最终目的地。\n\n这些措施单独使用都无法解决城市交通问题。规划者表示，真正的解决方案是将它们结合起来。一个良好的公共交通系统应该让人们能够方便地在公交、地铁和自行车之间切换。当乘坐公共交通变得和开车一样方便时，更多人会选择把车留在家里。这一改变不会一蹴而就，但每一条新地铁、每一条公交专用道、每一辆共享单车，都让城市离这个目标更近一步。",
    questions: [
      {
        questionType: "细节题",
        question: "What is one advantage of subways according to the passage?",
        options: [
          "They produce far less air pollution than private cars.",
          "They are much cheaper than taking a bus.",
          "They carry fewer passengers than private cars.",
          "They can be built very quickly and cheaply."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段第3句：Subways also produce far less pollution than private cars, which helps improve air quality.",
          correctReason: "原文直接说地铁污染比私家车少得多，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有比较地铁和公交的票价。",
          wrongC: "与原文矛盾：地铁载客量远大于私家车。",
          wrongD: "与原文相反：第2段说building subways is expensive。",
          errorType: "定位错误：考生需要在第2段找到also后面的另一个好处。"
        }
      },
      {
        questionType: "细节题",
        question: "Why are bus lanes useful according to the passage?",
        options: [
          "They allow private cars to park for free.",
          "They keep buses from being stuck in traffic.",
          "They make buses slower but much safer.",
          "They completely replace the need for subways."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段第2句：When buses have their own lanes, they are no longer stuck behind private cars, and their speed increases greatly.",
          correctReason: "公交专用道让公交车不再被私家车堵住，B选项正确。",
          wrongA: "原文未提及：文章没有提到私家车免费停车。",
          wrongB: "（本题B为正确答案）",
          wrongC: "与原文相反：原文说speed increases greatly，不是变慢。",
          wrongD: "与原文矛盾：第4段说要结合多种方式，不是替代地铁。",
          errorType: "定位错误：考生需要抓住no longer stuck behind private cars这一结果。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The phrase 'last kilometer' in Paragraph 3 probably refers to ____.",
        options: [
          "a road that is exactly one kilometer long in the city center",
          "the distance between two different subway stations",
          "the longest bus route in the whole city",
          "the short trip from public transport to one's final destination"
        ],
        correct: 3,
        explanation: {
          location: "原文第3段最后一句冒号后的解释：how to get from a bus stop or subway station to one's final destination.",
          correctReason: "冒号后直接解释了'最后一公里'是从公交/地铁站到最终目的地的短途路程，D选项正确。",
          wrongA: "字面误解：这是对kilometer的字面理解，忽略了比喻含义。",
          wrongB: "范围错误：不是两个地铁站之间的距离。",
          wrongC: "原文未提及：与最长公交线路无关。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生需要通过冒号后的同位语解释推断比喻义，不能按字面kilometer理解。"
        }
      },
      {
        questionType: "作者观点题",
        question: "What does the writer believe is the real solution to city traffic problems?",
        options: [
          "Banning all private cars from city centers.",
          "Building wider and wider highways.",
          "Combining different public transport choices.",
          "Forcing everyone to work from home."
        ],
        correct: 2,
        explanation: {
          location: "原文第4段第2句：The real solution, planners say, is to combine them.",
          correctReason: "作者引用规划者观点：真正的解决方案是把各种公共交通方式结合起来，C选项正确。",
          wrongA: "过度推断：文章没有说禁止私家车。",
          wrongB: "原文未提及：文章没有讨论拓宽公路。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：文章没有要求居家办公。",
          errorType: "观点判断错误：考生需要抓住第4段The real solution这一明确标志词。"
        }
      }
    ]
  },

  {
    id: "r010",
    title: "Understanding and Changing Our Habits",
    type: "成考标准",
    level: "D",
    category: "心理",
    wordCount: 258,
    text: "Habits are often described as the small actions we repeat without thinking. Brushing our teeth in the morning, checking our phones as soon as we wake up, or taking the same route to work are all habits. Most of the time, these automatic actions save us mental energy, but bad habits can quietly affect our health, relationships, and work.\n\nPsychologists have found that every habit follows a simple cycle: a reminder, a routine, and a reward. The reminder is something that triggers the habit, such as a certain time of day or a feeling like stress. The routine is the action itself, and the reward is the good feeling we get from doing it. For example, when we feel stressed at work, we may reach for our phones to check social media, and the reward is a short escape from pressure.\n\nUnderstanding this cycle is the key to changing a habit. Experts do not suggest trying to remove a bad habit directly. Instead, they recommend keeping the same reminder and reward, but replacing the routine with a healthier one. If stress makes us check our phone, we could instead take a short walk or drink a glass of water. The reminder and reward stay the same, but the action becomes better.\n\nChanging a habit is rarely easy, and most people fail several times before they succeed. This is normal. Small, repeated efforts work better than trying to change everything in one day. Over time, the new action will become automatic, and the old habit will slowly disappear.",
    translation: "习惯通常被描述为我们不假思索就重复的小动作。早上刷牙、一醒来就看手机、或者走同一条路去上班，这些都是习惯。大多数时候，这些自动行为节省了我们的精神能量，但坏习惯会悄悄影响我们的健康、人际关系和工作。\n\n心理学家发现，每个习惯都遵循一个简单的循环：提示、惯常行为和奖励。提示是触发习惯的东西，比如一天中的某个时间或像压力这样的感觉。惯常行为就是行动本身，奖励是我们做这件事时获得的良好感觉。例如，当我们在工作中感到压力时，可能会拿起手机查看社交媒体，而奖励就是从压力中短暂逃离。\n\n理解这个循环是改变习惯的关键。专家并不建议直接去除坏习惯。相反，他们建议保持相同的提示和奖励，但用更健康的惯常行为来替代原来的。如果压力让我们看手机，我们可以改为散一小会儿步或喝一杯水。提示和奖励保持不变，但行动变得更健康。\n\n改变习惯很少是容易的，大多数人在成功之前会失败好几次。这很正常。微小而重复的努力，比试图在一天内改变一切更有效。随着时间推移，新行为会变得自动化，旧习惯会慢慢消失。",
    questions: [
      {
        questionType: "细节题",
        question: "According to psychologists, what are the three parts of a habit cycle?",
        options: [
          "Time, money, and health.",
          "Reminder, routine, and reward.",
          "Work, rest, and entertainment.",
          "Study, exercise, and sleep."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段第1句：every habit follows a simple cycle: a reminder, a routine, and a reward.",
          correctReason: "原文直接列出习惯循环的三部分：提示、惯常行为、奖励，B选项正确。",
          wrongA: "原文未提及：时间、金钱、健康不是习惯循环的组成。",
          wrongB: "（本题B为正确答案）",
          wrongC: "原文未提及：工作、休息、娱乐不是。",
          wrongD: "原文未提及：学习、锻炼、睡眠只是生活内容。",
          errorType: "定位错误：考生需要在第2段冒号后找到三个并列名词。"
        }
      },
      {
        questionType: "推理题",
        question: "What is the experts' suggested way to break a bad habit?",
        options: [
          "Stop thinking about the habit completely.",
          "Remove both the reminder and the reward.",
          "Punish yourself severely every time you fail.",
          "Keep the reminder and reward, but change the action."
        ],
        correct: 3,
        explanation: {
          location: "原文第3段第3句：they recommend keeping the same reminder and reward, but replacing the routine with a healthier one.",
          correctReason: "专家建议保持提示和奖励不变，只替换行为本身，D选项正确。",
          wrongA: "原文未提及：文章没有建议不去想它。",
          wrongB: "与原文相反：原文说keep the same reminder and reward。",
          wrongC: "原文未提及：文章没有建议自我惩罚。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理错误：考生需要准确理解instead转折后建议的核心——保留两端、替换中间。"
        }
      },
      {
        questionType: "细节题",
        question: "Why do small repeated efforts work better than big sudden changes?",
        options: [
          "Because new actions need time to become automatic.",
          "Because big changes always cost a lot of money.",
          "Because human habits are completely impossible to change.",
          "Because experts make more money from slow methods."
        ],
        correct: 0,
        explanation: {
          location: "原文最后一段最后两句：Small, repeated efforts work better... Over time, the new action will become automatic, and the old habit will slowly disappear.",
          correctReason: "新行为需要时间才能自动化，因此小步重复比一次大改更有效，A选项正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "原文未提及：文章没有讨论金钱成本。",
          wrongC: "与原文相反：全文都在讲如何改变习惯。",
          wrongD: "原文未提及：与专家收入无关。",
          errorType: "推理错误：考生需要把work better和become automatic之间的因果关系联系起来。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the passage mainly about?",
        options: [
          "Why mobile phones are dangerous for children.",
          "How to reduce work stress in a busy office.",
          "How habits form and how to change them.",
          "The long history of modern psychology."
        ],
        correct: 2,
        explanation: {
          location: "全文：第1段引入习惯，第2段讲习惯的构成，第3段讲如何改变，第4段讲改变的过程。",
          correctReason: "文章先解释习惯如何形成（三部分循环），再讲如何改变习惯，C选项概括完整。",
          wrongA: "以偏概全：手机只是第2段举例中的一个细节。",
          wrongB: "以偏概全：压力也只是举例中的一个细节。",
          wrongC: "（本题C为正确答案）",
          wrongD: "原文未提及：文章没有讲心理学历史。",
          errorType: "主旨判断错误：考生容易被举例中的手机、压力等具体词吸引而误选局部选项。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_1 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_1 = READING_BATCH_1;
}
