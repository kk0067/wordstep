// 成人高考专升本英语阅读题库 第四批
// 共10篇，每篇4题，难度D（成考标准）
// 主题（与第一、二、三批不重复）：摄影、移民、创业、远程工作、压力管理、育儿、高等教育、公共演讲、退休、批判性思维
// 答案分布：A=10, B=10, C=10, D=10

const READING_BATCH_4 = [
  {
    id: "r031",
    title: "How the Camera Changed the Way We Remember",
    type: "成考标准",
    level: "D",
    category: "摄影",
    wordCount: 284,
    text: "Twenty years ago, taking a photograph meant loading a roll of film into a heavy camera, waiting weeks for the pictures to come back from the shop, and discovering with disappointment that half of them were out of focus. Today, almost everyone carries a camera in their pocket, and a person may take dozens of pictures before breakfast. This convenience has changed not only how we take photographs, but why we take them.\n\nIn the past, a camera was reserved for special occasions: a wedding, a holiday, a child's first steps. Each image felt important because it cost time and money. Now we record ordinary moments as easily as we breathe. A meal, a street corner, a sudden rainbow - all are captured and shared within minutes. Some critics worry that this habit makes us live through the screen instead of through our own eyes. They argue that when a concert begins, people lift their phones before they have actually listened to the first song.\n\nYet there is another side to the argument. A photograph is also a kind of memory that language cannot preserve. Years later, a single image can bring back the smell, the weather, and the feeling of a place in a way that a written diary never will. For families spread across different cities, pictures of daily life are the thread that keeps them close.\n\nThe best answer is probably balance. Taking a picture now and then is harmless, even valuable. But if you spend an entire holiday watching the world through a screen, you may return with hundreds of photos and no real sense of the place itself. The camera is a tool, not a substitute for being there.",
    translation: "二十年前，拍一张照片意味着把一卷胶卷装进笨重的相机，等上好几个星期照片才从店里洗出来，然后失望地发现其中一半都虚了焦。如今，几乎每个人口袋里都揣着一台相机，一个人可能还没吃早饭就拍了几十张照片。这种方便不仅改变了我们拍照的方式，也改变了我们拍照的目的。\n\n过去，相机是留给特殊场合的：婚礼、假日、孩子迈出的第一步。每张照片都显得重要，因为它花时间、花钱。现在我们像呼吸一样轻松地记录平凡时刻。一顿饭、一个街角、一道突如其来的彩虹——都在几分钟内被拍下、分享。一些批评者担心，这种习惯让我们隔着屏幕生活，而不是用自己的眼睛去生活。他们说，音乐会一开始，人们还没真正听完第一首歌，就已经举起了手机。\n\n然而，这个争论还有另一面。照片也是一种语言无法保存的记忆。多年以后，单张照片能把一个地方的气味、天气和感受带回来，这是书面日记永远做不到的。对于分散在不同城市的家庭来说，日常生活的照片正是把他们维系在一起的那根线。\n\n最好的答案大概是平衡。时不时拍一张照片并无害处，甚至颇有价值。但如果你整个假期都隔着屏幕看世界，回来时也许带着几百张照片，却对那个地方本身毫无真实感受。相机是工具，而不是身临其境的替代品。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, how was photography different twenty years ago?",
        options: [
          "People had to use film and waited a long time to see the results.",
          "Cameras were much smaller than the phones people carry today.",
          "People took far more photographs than they do today.",
          "Photographs taken then were always out of focus."
        ],
        correct: 0,
        explanation: {
          location: "原文第1段第1句：taking a photograph meant loading a roll of film into a heavy camera, waiting weeks for the pictures to come back from the shop...",
          correctReason: "原文明确说过去要装胶卷、等好几周才能看到照片，与A完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说过去的相机heavy（笨重），并非比手机更小。",
          wrongC: "相反：原文说现在人们一天拍几十张，过去拍照并不频繁。",
          wrongD: "绝对化：原文只说'一半'虚焦，并非always（总是）虚焦。",
          errorType: "定位错误：考生需定位第1段首句对比过去与现在，不能凭'out of focus'误选D。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"reserved\" in Paragraph 2 probably means ____.",
        options: [
          "booking a table at a restaurant in advance",
          "keeping silent in front of other people",
          "kept for special purposes rather than ordinary use",
          "returning an unwanted product to the shop"
        ],
        correct: 2,
        explanation: {
          location: "原文第2段第1句：In the past, a camera was reserved for special occasions: a wedding, a holiday...",
          correctReason: "由'留给婚礼、假日等特殊场合'可知reserved此处意为'留作专用'，C正确。",
          wrongA: "形近义干扰：这是reserve'预订（座位）'之意，与拍照无关。",
          wrongB: "形近义干扰：这是reserved'缄默、矜持'之意，形容人，不修饰相机。",
          wrongC: "（本题C为正确答案）",
          wrongD: "无中生有：与'退货'无关。",
          errorType: "单词问题：考生若只记reserve=预订，需根据'特殊场合'语境推断出'预留专用'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the concert example in Paragraph 2?",
        options: [
          "Modern concerts are often ruined by loud and noisy music.",
          "Recording every moment may prevent people from truly experiencing it.",
          "Phones should be completely banned at all concerts.",
          "The first song of a concert is always the best one."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：people lift their phones before they have actually listened to the first song.",
          correctReason: "人们还没真正听歌就举机拍摄，说明只顾记录而错过体验，B准确推出。",
          wrongA: "原文未提及：批评的是举手机，不是音乐太吵。",
          wrongB: "（本题B为正确答案）",
          wrongC: "过度推断：作者只是担忧，并未主张全面禁止手机。",
          wrongD: "无中生有：原文没有比较哪首歌最好。",
          errorType: "推理过度：考生易把作者的担忧升级为'应该禁止'而误选C。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Modern cameras produce pictures that are worse than old film.",
          "People should never take any photographs during their holidays.",
          "Taking photographs is always a waste of time and memory.",
          "Photography has become easier, yet a balance between recording and experiencing matters."
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段讲拍照变容易，第2段讲只顾拍摄的隐忧，第3段讲照片的价值，末段讲balance。",
          correctReason: "文章既承认现代摄影的便利与价值，又提醒不要只顾拍摄而错过体验，D完整概括。",
          wrongA: "相反/无据：作者未说现代相机画质更差。",
          wrongB: "绝对化：作者主张'时不时拍一张无害'，并非永远不该拍。",
          wrongC: "相反：第3段明确说照片能保存语言无法保存的记忆。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨片面：考生若只看第2段批评，易误选B；须兼顾末段balance。"
        }
      }
    ]
  },

  {
    id: "r032",
    title: "Why People Move: The Reality Behind Migration",
    type: "成考标准",
    level: "D",
    category: "移民",
    wordCount: 293,
    text: "Every year, millions of people leave their home countries in search of a safer or better life. Some cross a border to escape war, while others move for a job, an education, or simply the chance to start again. Whatever the reason, the decision to emigrate is rarely easy. It usually means leaving behind family, a familiar language, and the small habits that make a place feel like home.\n\nNew arrivals often face difficulties that the local population never notices. Finding a flat, opening a bank account, or understanding a doctor's advice can become a long, confusing process when the forms are written in a second language. Even those who studied the language at school may struggle with accents, jokes, and the unwritten rules of a new workplace. Loneliness is one of the heaviest burdens for immigrants, especially during the first winter, when the weather and the calendar both feel colder than expected.\n\nYet immigrants also bring much more than they take. Many start small businesses that employ local workers. They open restaurants, repair shops, and language schools that enrich the streets they now live on. In science and industry, people born abroad have helped build companies and medicines that benefit entire nations. A city that welcomes newcomers, economists argue, is often a city full of energy and new ideas.\n\nThe challenge for society is to make this exchange fair. Integration should not mean forcing people to forget where they came from. A healthy community is one in which newcomers can learn the language and the laws while still sharing their own food, music, and customs with their neighbours. In the end, nearly every family has, at some point, been the new arrival. Recognising this shared history may be the simplest way forward.",
    translation: "每年，数以百万计的人离开祖国，去寻找更安全或更美好的生活。有人越过边境是为了逃离战争，有人则为了工作、求学，或仅仅是为了重新开始。无论原因如何，移居国外的决定很少是轻松的。它通常意味着抛别家人、熟悉的语言，以及那些让一个地方'像家'的微小习惯。\n\n新移民常常面对本地居民从未注意过的困难。租房、开户、听懂医生的建议，当表格都用第二语言写成时，这些事会变成漫长而令人困惑的过程。即使在学校学过这门语言，他们仍可能在口音、笑话和新职场的不成文规则面前手足无措。孤独是移民最沉重的负担之一，尤其在第一个冬天，天气和日历都比预想中更冷。\n\n然而，移民带来的远不止他们所取走的。许多人创办小企业，雇用本地工人。他们开餐馆、修理店、语言学校，让如今生活的街道变得更丰富。在科学与工业领域，出生在国外的人帮助建立公司、研制惠及整个国家的药物。经济学家认为，一座欢迎新移民的城市，往往是一座充满活力和新思想的城市。\n\n社会面临的挑战，是让这种双向交流公平。融合不应意味着强迫人们忘记自己的来处。一个健康的社群，是新来者既能学习语言和法律，又仍能与邻居分享自己的食物、音乐和习俗的地方。说到底，几乎每个家庭在某个时刻都曾是'新来者'。认识到这段共同的历史，也许是最简单的前进之路。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, the decision to emigrate is rarely easy because ____.",
        options: [
          "it usually requires a large amount of money to buy a house",
          "it means leaving behind family, language, and familiar surroundings",
          "most governments forbid people from moving abroad",
          "it takes ten years to learn a new language well enough"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段最后一句：It usually means leaving behind family, a familiar language, and the small habits that make a place feel like home.",
          correctReason: "原文直接指出移民意味着抛别家人、熟悉的语言和习以为常的环境，B完全对应。",
          wrongA: "原文未提及：文中没有说买房要花一大笔钱。",
          wrongB: "（本题B为正确答案）",
          wrongC: "与事实相反：每年数百万人移居，政府并非一律禁止。",
          wrongD: "数字编造/绝对化：原文未说学好语言需要整整十年。",
          errorType: "定位错误：考生须定位第1段末句，不能凭常识自行添加'买房花大钱'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about loneliness from Paragraph 2?",
        options: [
          "It is especially hard for newcomers during the first winter.",
          "It affects only immigrants who cannot find a job.",
          "It disappears as soon as a person learns the local language.",
          "It is caused mainly by poor housing conditions."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段末句：Loneliness is one of the heaviest burdens..., especially during the first winter.",
          correctReason: "原文说孤独是沉重负担，尤其在第一个冬天，A与之吻合。",
          wrongA: "（本题A为正确答案）",
          wrongB: "以偏概全：孤独是普遍负担，不只影响找不到工作的人。",
          wrongC: "绝对化：原文说学过语言仍可能困惑，并未说一学会孤独就消失。",
          wrongD: "无中生有：原文未把孤独归因于住房差。",
          errorType: "推理错误：考生易把'学语言困难'误当作'学会语言孤独即消失'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"integration\" in the last paragraph probably means ____.",
        options: [
          "separating newcomers completely from local people",
          "sending all immigrants back to their home countries",
          "refusing to learn the language of the new country",
          "the process of becoming accepted and part of a new community"
        ],
        correct: 3,
        explanation: {
          location: "原文末段：Integration should not mean forcing people to forget where they came from.",
          correctReason: "由后文'学习语言法律、同时分享自身文化'可知integration指融入新社群的过程，D正确。",
          wrongA: "相反：分离与'融合'含义相反。",
          wrongB: "相反：遣返与integration无关，更不是其含义。",
          wrongC: "相反：原文说应学习当地语言，而非拒绝学习。",
          wrongD: "（本题D为正确答案）",
          errorType: "单词问题：考生若只记integrate=整合，须结合后文'学语言、分享文化'推断出'社会融入'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Immigration should be completely stopped to protect local jobs.",
          "Immigrants rarely make any useful contribution to society.",
          "Immigration brings difficulties but also valuable benefits, and fair integration matters.",
          "Learning a new language is the only real challenge for newcomers."
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段讲困难，第3段讲贡献，末段讲公平融合。",
          correctReason: "文章两面兼顾——移民有困难也带来活力，并强调公平融合，C完整概括。",
          wrongA: "相反：作者主张欢迎新移民、促进融合，而非完全停止。",
          wrongB: "相反：第3段列举了移民在商业、科学等领域的贡献。",
          wrongC: "（本题C为正确答案）",
          wrongD: "以偏概全：语言只是困难之一，并非'唯一'挑战。",
          errorType: "主旨片面：考生若只看第2段困难，易误选偏负面的选项；须兼顾第3段与末段。"
        }
      }
    ]
  },

  {
    id: "r033",
    title: "What It Really Takes to Start a Small Business",
    type: "成考标准",
    level: "D",
    category: "创业",
    wordCount: 297,
    text: "Stories of successful entrepreneurs often focus on young millionaires who sell a company for billions before they are thirty. Such stories are inspiring, but they can also be misleading. Most people who start a business do not become famous, and they do not do it in a Silicon Valley garage. They open a bakery, repair bicycles, run a cleaning service, or teach children to draw. Their companies may employ only two or three people, yet they matter deeply to the people who run them.\n\nStarting any business begins with a problem that someone is willing to pay to solve. A good entrepreneur does not need a brilliant idea as much as a clear understanding of ordinary customers. Why do people complain? What task do they dislike doing themselves? Answering these questions carefully is worth more than an expensive business plan. Many new businesses fail not because the product is bad, but because the owner has not checked whether enough people actually want it.\n\nMoney is another common difficulty. Few beginners can afford to pay themselves a salary during the first year. This is why advisers usually recommend saving enough to live on for several months before handing in a resignation. Working part-time while testing the idea on weekends is a safer path than risking everything at once. The goal is not to seem brave, but to keep the project alive long enough to learn from mistakes.\n\nFinally, successful owners learn to talk to their customers rather than at them. They ask what works, listen to complaints without defending themselves, and change the product accordingly. In the long run, a small company that listens carefully can beat a larger one that only advertises. Entrepreneurship, in this ordinary sense, is less a lottery ticket than a slow, practical craft.",
    translation: "关于成功创业者的故事，往往聚焦于三十岁前就把公司卖到数十亿的年轻百万富翁。这类故事令人鼓舞，却也可能误导人。大多数创业的人并不会成名，他们也不是在硅谷的车库里创业。他们开面包店、修自行车、经营清洁公司，或者教孩子画画。他们的公司也许只雇两三个人，却对经营者本人意义重大。\n\n创办任何生意，都始于一个有人愿意付钱来解决的问题。一个好创业者需要的与其说是绝妙的点子，不如说是对普通顾客的清晰理解。人们在抱怨什么？哪件事他们自己不愿意做？认真回答这些问题，胜过一份昂贵的商业计划书。许多新生意失败，并不是因为产品差，而是因为老板没有核实到底有没有足够多的人真的想要它。\n\n钱是另一个常见难题。很少有新手能在第一年就付给自己薪水。正因如此，顾问通常建议：在递交辞呈之前，先存够够活好几个月的钱。周末兼职试水这个点子，比一次性孤注一掷更稳妥。目标不是显得勇敢，而是让项目撑得足够久，久到能从错误中学习。\n\n最后，成功的老板学会与顾客对话，而不是对顾客说教。他们询问哪里管用，听取抱怨而不急着为自己辩护，并据此改进产品。长远来看，一家认真倾听的小公司，能击败只会打广告的大公司。从这种平常意义上说，创业与其说是一张彩票，不如说是一门缓慢而务实的手艺。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why do many new businesses fail?",
        options: [
          "Their owners are usually too young and inexperienced.",
          "Their products are generally far too expensive.",
          "Owners fail to check whether enough people actually want the product.",
          "They lack an expensive business plan written by experts."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段末句：Many new businesses fail not because the product is bad, but because the owner has not checked whether enough people actually want it.",
          correctReason: "原文直接指出失败原因是没核实是否有足够顾客真的想要，C完全对应。",
          wrongA: "原文未提及：文章强调的是是否了解顾客，而非年龄。",
          wrongB: "相反：原文说失败'不是因为产品差'，未说价格过高。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：原文说昂贵的商业计划书不如认真回答顾客问题。",
          errorType: "定位错误：考生须抓住not...but...结构，定位but后的真正原因。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Only young people in Silicon Valley can build successful companies.",
          "Starting a business is an easy way to become a millionaire.",
          "New businesses should risk everything at the very beginning.",
          "Ordinary entrepreneurship is practical work based on real customer needs."
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段纠正'年轻富翁'迷思，第2段讲了解顾客，末段总结创业是务实手艺。",
          correctReason: "文章破除暴富神话，主张创业是围绕真实顾客需求的务实工作，D完整概括。",
          wrongA: "相反：第1段说硅谷车库故事具有误导性，多数人并非如此。",
          wrongB: "相反：第1段说这类故事令人鼓舞却误导人，创业并不容易暴富。",
          wrongC: "相反：第3段明确说一次性孤注一掷更危险。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生若被开篇'年轻百万富翁'吸引，易误选A或B。"
        }
      },
      {
        questionType: "推理题",
        question: "What does the writer suggest about saving money before quitting one's job?",
        options: [
          "It is a wise preparation that helps the business survive early difficulties.",
          "It is unnecessary because banks always lend money to new businesses.",
          "It means the business will certainly make a profit.",
          "It delays the project for years without bringing any benefit."
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：advisers usually recommend saving enough to live on for several months... to keep the project alive long enough to learn from mistakes.",
          correctReason: "存钱是为了让项目撑过最初阶段、从错误中学习，作者持肯定态度，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无中生有：原文未说银行总会贷款。",
          wrongC: "绝对化：准备充分不等于'必然'盈利。",
          wrongD: "相反：作者认为这样做更稳妥、有益，并非毫无好处。",
          errorType: "态度误判：考生需从recommend、safer、keep alive等词读出作者支持态度。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"them\" in Paragraph 4 (\"listen to complaints without defending themselves\") refers to ____.",
        options: [
          "the customers who buy the product",
          "the business owners who run the company",
          "the larger companies that only advertise",
          "the children who learn to draw"
        ],
        correct: 1,
        explanation: {
          location: "原文第4段首句：successful owners learn to talk to their customers... They ask what works, listen to complaints without defending themselves.",
          correctReason: "本句主语是successful owners（成功的老板），They与themselves都指代老板，B正确。",
          wrongA: "角色错位：抱怨的是顾客，被抱怨的是老板，'为自己辩护'的不可能是顾客。",
          wrongB: "（本题B为正确答案）",
          wrongC: "对象错位：只打广告的大公司是对比对象，不在本句主语范围。",
          wrongD: "张冠李戴：教孩子画画只是第1段举例，与本句无关。",
          errorType: "指代错误：考生须向前找主语successful owners，勿被复数名词customers干扰。"
        }
      }
    ]
  },

  {
    id: "r034",
    title: "Working from Home: Freedom or Trap?",
    type: "成考标准",
    level: "D",
    category: "远程工作",
    wordCount: 274,
    text: "Before the pandemic, working from home was treated as a rare benefit, offered mainly to a small number of highly trusted employees. That changed almost overnight. Offices emptied, meetings moved to video screens, and millions of people began their day by walking from the bedroom to the kitchen table. Two years later, the question is no longer whether remote work is possible, but whether it is, in the long run, a good idea.\n\nSupporters point to the savings and the freedom. No one wastes hours stuck in traffic, and employees can arrange the day around school pick-ups or a long run at noon. Home workers often complete more tasks, because they are interrupted less often by casual conversations. For employers, the cost of office space can fall sharply, especially if staff spend only two or three days at home.\n\nYet remote work is not perfect. The same kitchen table that offers freedom can also blur the line between work and rest. Some people find it hard to stop working when the desk is steps from the bed. Others miss the informal chats by the coffee machine - the moments in which trust is built, problems are solved, and new ideas are born. Newcomers to a team, in particular, may feel invisible when they never meet their colleagues face to face.\n\nFor this reason, many companies are now experimenting with a middle path. Teams gather in the office on certain days for discussion, then return home for focused work alone. This mixed model tries to keep the best of both worlds: the quiet to concentrate, and the human contact that no screen can fully replace.",
    translation: "疫情之前，在家办公被当作一种难得的福利，主要提供给少数格外受信任的员工。这种情况几乎在一夜之间改变。办公室空了下来，会议搬到了视频屏幕上，数百万人的一天是从卧室走到餐桌开始的。两年后，问题已不再是远程办公可不可行，而是长远来看它到底是不是个好主意。\n\n支持者指出它省钱又自由。没人再把几小时浪费在堵车中，员工可以围绕接孩子放学或中午长跑安排一天。居家办公者往往完成更多任务，因为闲聊带来的打断更少。对雇主而言，办公场地成本可以大幅下降，尤其当员工每周只在家待两三天时。\n\n然而远程办公并不完美。那张带来自由的餐桌，也可能模糊工作与休息之间的界限。当书桌离床只有几步之遥时，有些人很难停下工作。另一些人则怀念咖啡机旁的闲聊——正是在那些时刻，信任被建立、问题被解决、新想法被催生。尤其是团队里的新人，若从不见同事一面，可能会感到自己像不存在一样。\n\n正因如此，许多公司如今在试验一条中间道路。团队在固定日子聚到办公室讨论，然后各自回家专注工作。这种混合模式试图保留两个世界的优点：让人专注的安静，以及任何屏幕都无法完全替代的人际接触。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 2, why do many home workers complete more tasks?",
        options: [
          "They work longer hours without taking any rest.",
          "Their managers watch them constantly through cameras.",
          "They are paid much more than office workers.",
          "They are interrupted less often by casual conversations."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：Home workers often complete more tasks, because they are interrupted less often by casual conversations.",
          correctReason: "原文用because直接给出原因——闲聊打断更少，D完全对应。",
          wrongA: "无中生有：原文未说他们不休息、工作更久。",
          wrongB: "无中生有：原文没有提到摄像头监视。",
          wrongC: "无中生有：文章比较的是办公成本，并未说居家者薪水更高。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住because后的原句，不能自行编造'加班更多'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about \"newcomers\" to a remote team?",
        options: [
          "They usually work more efficiently than the old members.",
          "They may struggle to feel part of the team without face-to-face contact.",
          "They are required to come to the office every day.",
          "They tend to leave the company within two months."
        ],
        correct: 1,
        explanation: {
          location: "原文第3段末句：Newcomers to a team... may feel invisible when they never meet their colleagues face to face.",
          correctReason: "'感觉自己像不存在'说明新人难以融入团队，B合理推出。",
          wrongA: "无中生有：原文未比较新老成员的效率。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反/无据：原文说他们从不见同事，并未要求每天到办公室。",
          wrongD: "过度推断：感到不被注意不等于两个月内必然离职。",
          errorType: "推理过度：考生须从feel invisible推断'难融入'，不能夸大到'必然离职'。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Remote work will completely replace all offices within ten years.",
          "Working from home has no advantages at all.",
          "Remote work has benefits and drawbacks, and a mixed model may be the best answer.",
          "Traffic jams are the only problem with office work."
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段讲优势，第3段讲弊端，末段讲折中（混合模式）。",
          correctReason: "文章两面分析后提出混合模式是最佳折中，C完整概括。",
          wrongA: "绝对化/无据：末段说两种方式并存，并未说十年内完全取代办公室。",
          wrongB: "相反：第2段列举了省时、自由、成本下降等优点。",
          wrongC: "（本题C为正确答案）",
          wrongD: "以偏概全：堵车只是优点之一，并非办公室工作的'唯一'问题。",
          errorType: "主旨判断错误：考生须兼顾利弊与末段middle path，避免选片面极端项。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"blur\" in Paragraph 3 probably means ____.",
        options: [
          "to make the difference between two things unclear",
          "to draw a clear line on a piece of paper",
          "to lock the door and go to bed early",
          "to move furniture between rooms"
        ],
        correct: 0,
        explanation: {
          location: "原文第3段：The same kitchen table... can also blur the line between work and rest.",
          correctReason: "'工作与休息之间的界线'被模糊，blur意为使界限不清，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：draw a clear line是'画清界线'，与blur相反。",
          wrongC: "望文生义：与'锁门早睡'无关。",
          wrongD: "望文生义：与'搬家具'无关。",
          errorType: "单词问题：考生若只记blur=模糊的（形容词），须根据the line between...推出'使界限不清'。"
        }
      }
    ]
  },

  {
    id: "r035",
    title: "Stress: The Body's Alarm and How to Live With It",
    type: "成考标准",
    level: "D",
    category: "压力管理",
    wordCount: 274,
    text: "Stress is often described as an enemy, but this picture is too simple. In small amounts, stress is the body's way of preparing for a challenge. Before an exam or a difficult interview, a faster heartbeat and sharper attention can actually help you perform. The trouble begins when stress stays high for weeks or months, because the body was never designed to remain in a state of alarm.\n\nLong-lasting stress affects far more than mood. It can weaken sleep, raise blood pressure, and make ordinary worries feel impossible to handle. People under heavy pressure often describe a strange emptiness: they may still eat and work, but they no longer enjoy the things they used to love. This is not a sign of weakness. It is a warning signal, much like a temperature rising before an illness.\n\nThe good news is that stress responds to ordinary habits better than most people expect. Sleep is the foundation: without it, every problem seems twice as large. Exercise, even a brisk twenty-minute walk, burns off the chemical excitement that stress leaves behind. Equally important is talking. Keeping worries inside usually makes them grow, while saying them out loud often reveals that they are smaller than they felt in the dark.\n\nFinally, it helps to accept that some pressure is unavoidable. No one can remove all stress from a busy life. The realistic goal is not calm at all costs, but a balance in which stress comes and goes instead of building up. When people learn to notice the early signs - tiredness, irritation, a short temper - they can act before the pressure turns into something more serious.",
    translation: "压力常被描述成敌人，但这种看法过于简单。少量的压力，是身体为挑战做准备的方式。考试前或艰难的面试前，心跳加快、注意力变得敏锐，其实有助于你表现。问题在于当压力持续数周或数月居高不下时，因为身体本就不是为长期处于警报状态而设计的。\n\n长期压力影响的远不止情绪。它会削弱睡眠、升高血压，让寻常的烦恼显得无法承受。重压之下的人常常描述一种奇怪的空虚：他们可能照常吃饭、工作，却再也享受不到曾经热爱的事物。这不是软弱的标志，而是一个预警信号，很像生病前升高的体温。\n\n好消息是，压力对日常习惯的反应比大多数人想象的更好。睡眠是根基：没有它，每个问题都显得大了一倍。锻炼，哪怕只是快走二十分钟，也能烧掉压力留下的化学亢奋。同样重要的是倾诉。把烦恼藏在心里往往让它们膨胀，而大声说出来，常常会发现它们比在黑暗中感觉的要小。\n\n最后，接受有些压力不可避免会有帮助。没人能把忙碌生活中的压力全部消除。现实的目标不是不惜一切代价追求平静，而是一种平衡：压力来去自如，而不是不断累积。当人们学会察觉早期信号——疲倦、易怒、没耐心——他们就能在压力变得更严重之前采取行动。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why is stress in small amounts not always bad?",
        options: [
          "It prepares the body for challenges and can improve performance.",
          "It completely prevents people from feeling bored.",
          "It lowers blood pressure and improves sleep quality.",
          "It helps people forget their daily worries quickly."
        ],
        correct: 0,
        explanation: {
          location: "原文第1段：In small amounts, stress is the body's way of preparing for a challenge... can actually help you perform.",
          correctReason: "原文说少量压力让身体为挑战做准备、有助于表现，A完全对应。",
          wrongA: "（本题A为正确答案）",
          wrongB: "无中生有：原文未说压力能防止无聊。",
          wrongC: "相反：第2段说长期压力会升高血压、削弱睡眠，与该选项相反。",
          wrongD: "无中生有：原文未说压力能让人迅速忘记烦恼。",
          errorType: "定位错误：考生须定位第1段'少量压力'的正面作用，勿与第2段长期危害混淆。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"brisk\" in Paragraph 3 probably means ____.",
        options: [
          "slow and sleepy",
          "short and silent",
          "quick and full of energy",
          "cold and rainy"
        ],
        correct: 2,
        explanation: {
          location: "原文第3段：Exercise, even a brisk twenty-minute walk, burns off the chemical excitement...",
          correctReason: "能'烧掉压力留下的亢奋'的步行应是有活力、较快的，brisk意为轻快的，C正确。",
          wrongA: "相反：缓慢昏沉的散步起不到锻炼作用。",
          wrongB: "无中生有：brisk不指'安静'。",
          wrongC: "（本题C为正确答案）",
          wrongD: "望文生义：brisk可形容天气凉爽，但此处修饰walk。",
          errorType: "单词问题：考生须结合'运动、烧掉亢奋'推断brisk=轻快有力，而非天气。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the \"temperature rising\" comparison in Paragraph 2?",
        options: [
          "Stress is a disease that can never be treated.",
          "Stress signals should be noticed early rather than ignored.",
          "A fever is always more dangerous than stress.",
          "People should take medicine as soon as they feel tired."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：It is a warning signal, much like a temperature rising before an illness.",
          correctReason: "把压力比作生病前的体温，意在提醒及早察觉、别忽视，B正确。",
          wrongA: "相反：第3段说压力对日常习惯反应良好、可改善，并非不可治疗。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无中生有：原文并未比较发烧与压力哪个更危险。",
          wrongD: "过度推断：比喻强调'预警'，未主张一累就吃药。",
          errorType: "推理错误：考生须读出比喻的'预警'含义，不能曲解为要立刻吃药。"
        }
      },
      {
        questionType: "作者态度题",
        question: "What is the writer's attitude towards stress?",
        options: [
          "Stress is purely harmful and should be removed completely.",
          "Stress is unimportant and can be safely ignored.",
          "Stress is a sign that a person is truly weak.",
          "Stress is partly natural, and managing it matters more than removing it entirely."
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段说少量压力有益，末段说'现实的目标不是不惜一切代价追求平静，而是平衡'。",
          correctReason: "作者认为压力有其自然一面，关键在于管理与平衡，而非彻底消除，D正确。",
          wrongA: "相反：第1段明确说少量压力有益，末段说无法全部消除。",
          wrongB: "相反：第2段把压力比作预警信号，提醒重视，而非忽视。",
          wrongC: "相反：第2段说'这不是软弱的标志'。",
          wrongD: "（本题D为正确答案）",
          errorType: "态度误判：考生须抓住not calm at all costs, but a balance这一对比，把握中立偏务实态度。"
        }
      }
    ]
  },

  {
    id: "r036",
    title: "Why Children Need Room to Struggle",
    type: "成考标准",
    level: "D",
    category: "育儿",
    wordCount: 267,
    text: "Parents today are often told that they must do everything perfectly. Books, websites, and even friends offer a flood of advice about the right toys, the correct diet, and the best way to praise a child. Under this pressure, some parents plan every minute of their children's day, choosing friends for them, arranging extra classes, and stepping in whenever a small conflict appears. These adults are known, somewhat unkindly, as 'helicopter parents' - because they hover overhead, ready to rescue anyone who falls.\n\nExperts are increasingly worried about this style. They argue that children need room to struggle, and that solving every problem for them actually weakens them. A child who never loses a game, never argues with a friend, and never faces a boring afternoon may grow up unable to deal with ordinary setbacks. Small difficulties, in this view, are not obstacles to be removed but tools for learning. When a seven-year-old cannot tie their shoelaces, the frustrated minutes spent trying are part of the process.\n\nThis does not mean parents should do nothing. Children still need safety, warmth, and clear limits. The difference lies in timing. Rather than jumping in at the first sign of trouble, a parent can wait, watch, and offer help only when it is truly needed. Resisting the urge to rescue is hard, especially when you love your child, but it may be the greatest favour you can do for them.\n\nThe goal, in the end, is not a perfect childhood but a capable adult. The children who leave home best prepared are rarely those who were never allowed to fail.",
    translation: "如今的父母常被告知，必须把每件事都做到完美。书籍、网站，甚至朋友，都涌向关于合适玩具、正确饮食和最佳表扬方式的建议。在这种压力下，一些父母把孩子每天的每一分钟都安排好，替他们选择朋友、安排额外课程，一出现小冲突就立刻介入。这些大人被略带贬义地称为'直升机父母'——因为他们在头顶盘旋，随时准备把摔倒的人接住。\n\n专家们越来越担忧这种方式。他们认为孩子需要挣扎的空间，替他们解决所有问题其实会让他们变弱。一个从不输掉游戏、从不与朋友争吵、从不面对无聊下午的孩子，长大后可能无法应对寻常的挫折。在这种观点看来，小困难不是要清除的障碍，而是学习的工具。当一个七岁孩子系不好鞋带时，那些挫败的尝试过程本身就是学习的一部分。\n\n这并不是说父母什么都不该做。孩子仍然需要安全、温暖和清晰的界限。区别在于时机。父母不必一看到麻烦的苗头就冲上去，而可以等待、观察，只在真正需要时才出手。忍住'救援'的冲动很难，尤其当你爱孩子的时候，但这也许是你能为他们做的最大的一件好事。\n\n说到底，目标不是完美的童年，而是有能力的成人。那些离家时准备最充分的孩子，很少是那些从不被允许失败的孩子。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, \"helicopter parents\" are those who ____.",
        options: [
          "let their children play outside alone all day long",
          "plan every minute and step in to rescue their children at once",
          "refuse to read any books about child development",
          "allow their children to choose all their own friends"
        ],
        correct: 1,
        explanation: {
          location: "原文第1段：some parents plan every minute... stepping in whenever a small conflict appears... hover overhead, ready to rescue.",
          correctReason: "原文描述直升机父母把每分钟都安排好、一有冲突就介入救援，B完全对应。",
          wrongA: "相反：原文说他们把孩子保护得很严，而非放任在外玩耍。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第1段说他们被各种书籍建议包围，并非拒绝读书。",
          wrongD: "相反：原文说他们替孩子选择朋友。",
          errorType: "定位错误：考生须抓住plan every minute与step in两个关键词。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Parents should follow every piece of advice they find online.",
          "Children should never experience any form of failure.",
          "Children benefit from being allowed to struggle and solve small problems themselves.",
          "Extra classes are the key to a successful childhood."
        ],
        correct: 2,
        explanation: {
          location: "全文：第2段提出孩子需要挣扎空间、小困难是学习工具，末段总结目标是培养有能力的成人。",
          correctReason: "文章核心主张是让孩子自己挣扎、解决小问题才有益，C完整概括。",
          wrongA: "相反：第1段指出泛滥的建议带来压力，并非应全盘照做。",
          wrongB: "相反：末段说从不被允许失败的孩子准备最不充分。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：安排额外课程正是被批评的直升机式做法。",
          errorType: "主旨判断错误：考生须把握作者反直升机、倡独立的立场。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the shoelace example in Paragraph 2?",
        options: [
          "Seven-year-olds are not clever enough to tie their own shoelaces.",
          "Parents should tie shoelaces for children until they are ten.",
          "Frustration is always harmful and should be avoided at all costs.",
          "The effort of trying, even with difficulty, is valuable for learning."
        ],
        correct: 3,
        explanation: {
          location: "原文第2段：the frustrated minutes spent trying are part of the process.",
          correctReason: "连挫败的尝试都是过程的一部分，说明努力本身有价值，D正确。",
          wrongA: "无中生有：例子并非说七岁孩子不够聪明。",
          wrongB: "相反：作者主张让孩子自己尝试，而非替他系到十岁。",
          wrongC: "相反：作者认为小困难是学习工具，并非必须不惜代价避免。",
          wrongD: "（本题D为正确答案）",
          errorType: "推理错误：考生须读出'挫败的尝试也是过程'这一正面含义。"
        }
      },
      {
        questionType: "指代题",
        question: "The word \"them\" in the last paragraph (\"never allowed to fail\") refers to ____.",
        options: [
          "the children who leave home best prepared",
          "the parents who offer help too quickly",
          "the experts who write advice books",
          "the friends who choose the games"
        ],
        correct: 0,
        explanation: {
          location: "原文末段：The children who leave home best prepared are rarely those who were never allowed to fail.",
          correctReason: "本句those指代与The children呼应，'不被允许失败'的是孩子，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "角色错位：介入太快的是父母，被'允许/不允许'失败的是孩子。",
          wrongC: "无关对象：写建议书的专家不在本句范围。",
          wrongD: "无关对象：第1段的'朋友'只是举例，与末句无关。",
          errorType: "指代错误：考生须识别those who = The children who的回指关系。"
        }
      }
    ]
  },

  {
    id: "r037",
    title: "What Is a University Really For?",
    type: "成考标准",
    level: "D",
    category: "高等教育",
    wordCount: 275,
    text: "For generations, a university degree was seen as a ticket to a better job. Young people were told, in one form or another, that three years of study would open doors that would otherwise remain shut. This belief has been questioned lately. Tuition fees have risen sharply, graduates sometimes wait a long time for work, and skilled trades such as engineering and plumbing offer salaries that a new graduate may never reach. Why, then, should anyone spend years and money at a university?\n\nThe answer depends on what you expect. A university is not, or should not be, simply a job-training centre. Its deeper value lies in what cannot be measured immediately. Students learn to read difficult texts, to argue clearly, to defend an opinion with evidence, and to change their minds when the facts demand it. These habits - critical thinking, patience, and the ability to communicate - are useful in almost any profession, even those that do not yet exist.\n\nUniversities also bring people together who would never otherwise meet. A farmer's child and a future banker may sit in the same room, disagree politely, and leave with a wider view of the world. Such encounters are hard to value in money, yet they often shape a person for life.\n\nNone of this means that a degree is the only path. Vocational colleges, apprenticeships, and self-study all lead to meaningful careers. But for those who have the chance and the interest, university remains less a guarantee of wealth than a chance to grow. The best reason to go is not the salary you hope to earn, but the person you hope to become.",
    translation: "几代人以来，大学学位被视为通往更好工作的门票。年轻人以这样或那样的方式被告知，三年的学习会打开那些原本紧闭的门。这一信念近来受到了质疑。学费大幅上涨，毕业生有时要等很久才找到工作，而工程、管道工等技术工种开出的薪水，一个新毕业生可能永远也挣不到。那么，为什么还有人要在大学里耗费数年光阴和金钱呢？\n\n答案取决于你的期待。大学不是——或不应该是——一个单纯的职业培训中心。它更深层的价值在于那些无法立刻衡量的东西。学生学会阅读艰深的文本、清晰地论证、用证据为观点辩护，并在事实要求时改变自己的想法。这些习惯——批判性思维、耐心和沟通能力——几乎在任何职业中都有用，甚至包括那些尚不存在的职业。\n\n大学还把原本永不会相遇的人聚到一起。一个农家孩子和一个未来的银行家可能坐在同一间教室里，礼貌地争论，然后带着更开阔的世界观离开。这样的相遇很难用金钱衡量，却往往影响一个人的一生。\n\n这一切并不意味着学位是唯一的道路。职业院校、学徒制和自学都能通向有意义的事业。但对于有机会、也有兴趣的人来说，大学与其说是财富的保证，不如说是成长的机会。上大学最好的理由，不是你希望挣到的薪水，而是你希望成为怎样的人。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why has the value of a degree been questioned?",
        options: [
          "Because university study has become too easy for most students.",
          "Because fewer young people are interested in reading.",
          "Because fees have risen, jobs are hard to find, and trades pay well.",
          "Because universities have stopped teaching useful subjects."
        ],
        correct: 2,
        explanation: {
          location: "原文第1段：Tuition fees have risen sharply, graduates sometimes wait a long time for work, and skilled trades... offer salaries that a new graduate may never reach.",
          correctReason: "原文列举学费上涨、找工作难、技术工种薪水高三点，C完整概括。",
          wrongA: "原文未提及：文章未说学业变容易。",
          wrongB: "无中生有：与阅读兴趣无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：第2段恰恰说大学教的是长期有用的能力。",
          errorType: "定位错误：考生须概括第1段三个并列原因，不能只取其一。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about the \"habits\" mentioned in Paragraph 2?",
        options: [
          "They are transferable skills that benefit people in many different jobs.",
          "They are useful only for students who become professors.",
          "They can be learned more quickly in a skilled trade.",
          "They have no real value in the modern workplace."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：These habits... are useful in almost any profession, even those that do not yet exist.",
          correctReason: "'几乎任何职业都有用'说明这些能力可迁移、适用面广，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说几乎任何职业，并非只对教授有用。",
          wrongC: "无中生有：原文未比较学这些能力在技术工种里更快。",
          wrongD: "相反：原文明确说它们在工作中有用。",
          errorType: "推理错误：考生须抓住almost any profession这一宽泛表述，得出可迁移结论。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"apprenticeships\" in the last paragraph probably means ____.",
        options: [
          "long holidays spent travelling abroad",
          "learning a job by working under a skilled person",
          "expensive courses taught entirely on the internet",
      "examinations taken before entering university"
        ],
        correct: 1,
        explanation: {
          location: "原文末段：Vocational colleges, apprenticeships, and self-study all lead to meaningful careers.",
          correctReason: "apprenticeships与职业院校、自学并列，都指另一种成才途径，即拜师学艺做学徒，B正确。",
          wrongA: "望文生义：与'出国度假'无关。",
          wrongB: "（本题B为正确答案）",
          wrongC: "无中生有：原文未说是昂贵的网络课程。",
          wrongD: "相反：apprenticeships是工作中的学习，不是入学前的考试。",
          errorType: "单词问题：考生须从'与vocational colleges并列、通向事业'推断为'学徒制'。"
        }
      },
      {
        questionType: "文章目的题",
        question: "What is the writer's main purpose in writing this passage?",
        options: [
          "To persuade all young people to avoid university completely.",
          "To compare the salaries of engineers and bankers.",
          "To describe the detailed history of universities.",
          "To explain the deeper value of higher education beyond the first salary."
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段质疑唯工资论，第2-3段讲思维训练与人的成长，末段说最好的理由是成为怎样的人。",
          correctReason: "作者意在说明高等教育超越起薪的深层价值，D正确。",
          wrongA: "相反：末段说有机会有兴趣者仍值得上大学，并非劝人完全回避。",
          wrongB: "以偏概全：工程师、银行家只是举例，不是比较薪水。",
          wrongC: "无中生有：文章并未叙述大学的详细历史。",
          wrongD: "（本题D为正确答案）",
          errorType: "目的判断错误：考生须把握作者'超越工资、看重成长'的写作意图。"
        }
      }
    ]
  },

  {
    id: "r038",
    title: "Why Even You Can Learn to Speak in Public",
    type: "成考标准",
    level: "D",
    category: "公共演讲",
    wordCount: 275,
    text: "Ask people what they fear most, and standing in front of an audience often comes near the top. Some even rank it above death. This fear is strange, because speaking in public is, in the end, nothing more than talking - an activity most people manage without difficulty all day long. The difference is that, when we stand up, everyone's eyes turn to us, and one small slip suddenly feels enormous.\n\nThe good news is that public speaking is a skill, not a gift. Nobody is born a natural speaker. Confident performers have simply faced the situation many times and learned how to control the panic. Their first talks were probably just as shaky as anyone else's. Experience teaches the mind that a racing heart does not mean disaster, and that the audience usually wants the speaker to succeed.\n\nPreparation matters more than talent. A speaker who knows their material deeply can survive a broken slide or a forgotten sentence, because the ideas are already in their head. Reading a script word for word, by contrast, often makes a talk feel cold and unnatural. Experts suggest speaking from a few short notes instead, looking at people's faces, and pausing when they need to. A two-second silence, they point out, feels much longer to the speaker than to the listener.\n\nFinally, it helps to remember that the audience is on your side. They have given up their afternoon to hear you. They do not come to watch you fail. Treating a nervous feeling as energy rather than weakness is the small change that turns a frightening speech into an ordinary conversation - only with more chairs.",
    translation: "问问人们最怕什么，站在观众面前往往排在前列。有些人甚至把它排在死亡之上。这种恐惧很奇怪，因为说到底，当众演讲不过就是说话——一件大多数人一整天都毫不费力在做的事。不同之处在于，当我们站起来，所有人的目光都转向我们，一个小小的口误突然就显得巨大无比。\n\n好消息是，当众演讲是一门技能，而不是天赋。没有人天生就是演说家。那些自信的人不过是多次面对这种场合，并学会了控制恐慌。他们最初的讲话大概和其他人一样发抖。经验会告诉大脑：心跳加速并不意味着灾难，而观众通常是希望演讲者成功的。\n\n准备比天赋更重要。一个对内容烂熟于心的演讲者，即便幻灯片坏了、忘词了也能撑过去，因为想法早已在脑中。相反，逐字念稿子往往让演讲显得冰冷、不自然。专家建议改用几行简短提示卡来讲，看着听众的脸，必要时停顿。他们指出，两秒的沉默，在演讲者听来远比在听众那里漫长。\n\n最后，记住观众站在你这边会有帮助。他们放弃了自己的下午来听你讲。他们不是来看你出丑的。把紧张当作能量而非软弱——正是这小小的转变，把一场吓人的演讲变成了一次平常的对话，只是椅子多了一些。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why is public speaking frightening though talking is easy?",
        options: [
          "Because most people cannot speak clearly in daily life.",
          "Because audiences are usually hostile and unfriendly.",
          "Because speakers are forced to read a written script.",
          "Because when all eyes turn to us, a small mistake feels much bigger."
        ],
        correct: 3,
        explanation: {
          location: "原文第1段末句：when we stand up, everyone's eyes turn to us, and one small slip suddenly feels enormous.",
          correctReason: "原文指出当众时所有人注视、小失误被放大，这就是恐惧来源，D完全对应。",
          wrongA: "相反：原文说说话是大多数人整天都毫不费力在做的事。",
          wrongB: "相反：第4段说观众是站在你这边、希望你成功的。",
          wrongC: "无中生有：第3段才讨论念稿，且并非被迫。",
          wrongD: "（本题D为正确答案）",
          errorType: "定位错误：考生须抓住第1段对比'平时说话'与'当众被注视'。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"slip\" in Paragraph 1 probably means ____.",
        options: [
          "a smooth piece of paper used for notes",
          "a sudden fall onto the floor",
          "a small mistake or awkward moment",
          "a quick movement of the hand"
        ],
        correct: 2,
        explanation: {
          location: "原文第1段：one small slip suddenly feels enormous.",
          correctReason: "当众演讲语境下small slip指小小的口误或尴尬瞬间，C正确。",
          wrongA: "字面义干扰：slip可指纸条，但与演讲失误无关。",
          wrongB: "字面义干扰：slip可指滑倒，但此处不是真摔倒。",
          wrongC: "（本题C为正确答案）",
          wrongD: "形近义干扰：与手部快速动作无关。",
          errorType: "单词问题：考生须结合演讲语境排除'滑倒/纸条'等本义，选出'小失误'。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about so-called \"natural\" speakers?",
        options: [
          "Their confidence comes from repeated practice, not from birth.",
          "They were never nervous during their first speech.",
          "They do not need to prepare their talks at all.",
          "They are born with a special gift that cannot be learned."
        ],
        correct: 0,
        explanation: {
          location: "原文第2段：Nobody is born a natural speaker. Confident performers have simply faced the situation many times... Their first talks were probably just as shaky...",
          correctReason: "作者明说没有人天生是演说家，自信来自多次历练，A正确。",
          wrongA: "（本题A为正确答案）",
          wrongB: "相反：原文说他们最初的讲话大概也同样发抖。",
          wrongC: "相反：第3段强调准备比天赋更重要。",
          wrongD: "相反：第2段首句就否定了天赋论。",
          errorType: "推理错误：考生须抓住skill, not a gift与faced the situation many times。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Public speaking is a gift that only a few are born with.",
          "Public speaking can be improved through preparation and experience.",
          "Reading a script is the best way to give a good speech.",
          "Fear of speaking is a serious illness that needs medicine."
        ],
        correct: 1,
        explanation: {
          location: "全文：第2段说演讲是技能靠练习，第3段说准备重要，第4段说调整心态。",
          correctReason: "文章核心是演讲可通过准备与经验提高，B完整概括。",
          wrongA: "相反：第2段明确说不是天赋。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第3段说逐字念稿让演讲冰冷不自然。",
          wrongD: "过度推断：紧张是正常反应，作者建议当作能量，并非疾病要吃药。",
          errorType: "主旨判断错误：考生须把握'可学习、可练习'这一乐观主线。"
        }
      }
    ]
  },

  {
    id: "r039",
    title: "Retirement Is No Longer the End of the Road",
    type: "成考标准",
    level: "D",
    category: "退休",
    wordCount: 278,
    text: "Retirement used to follow a simple rule. You worked until a fixed age, usually around sixty, and then you stopped. The workplace waved goodbye, a gold watch was presented, and you spent the rest of your days in a garden or an armchair. That picture no longer matches reality. People live longer, pensions are under pressure, and many older adults do not actually want to spend twenty or thirty years doing nothing.\n\nThe first change is physical. A sixty-five-year-old today is often healthier and more active than someone of that age a generation ago. Many are not ready to leave the work that gives their days structure, identity, and social contact. For them, a sudden farewell can feel less like freedom than like a loss. Those who keep some meaningful activity - part-time work, volunteering, or a serious hobby - tend to be happier than those who simply rest.\n\nMoney, of course, cannot be ignored. Living for twenty or thirty years without a salary requires careful planning. People are advised to save early, not to rely only on a state pension, and to think about housing before the last working day arrives. Delaying retirement for even a couple of years can make a noticeable difference to what is available later.\n\nThe wisest approach seems to be flexibility. Instead of one sharp cut from full work to complete rest, many people now step down gradually. They reduce their hours, hand over responsibility, and stay involved in a smaller way. Retirement, in this gentler form, is less a cliff edge than a long slope - a change that can be shaped, rather than an ending that simply happens to you.",
    translation: "退休过去遵循一条简单的规则。工作到某个固定年龄，通常六十岁上下，然后就停下。单位挥手告别，送上一块金表，余下的日子就在花园里或扶手椅上度过。这幅画面已与现实不符。人们活得更长，养老金承压，而许多老年人其实并不想把二三十年都消磨在无所事事中。\n\n第一个变化在身体上。如今六十五岁的人，往往比上一代同龄时更健康、更活跃。许多人还没准备好离开那份赋予日子节奏、身份和社交联系的工作。对他们来说，突然的告别与其说像自由，不如说像失去。那些保持某种有意义活动的人——兼职、志愿工作或一项认真投入的爱好——往往比单纯休息的人更快乐。\n\n当然，钱不能忽视。没有薪水地生活二三十年，需要仔细规划。人们被建议尽早储蓄，不要只依赖国家养老金，并在最后一个工作日前考虑好住房。哪怕只是推迟退休几年，也能对日后可支配的钱产生明显影响。\n\n最明智的做法似乎是灵活。如今许多人不再从全职一下子切到彻底休息，而是逐步退下。他们减少工时、移交责任、以更小的方式继续参与。以这种更温和的形式，退休与其说是一道悬崖，不如说是一道长长的缓坡——它是一种可以被塑造的变化，而不是一件只会发生在你身上的终点。",
    questions: [
      {
        questionType: "细节题",
        question: "According to Paragraph 1, why does the old picture of retirement no longer fit reality?",
        options: [
          "Because people live longer, pensions are under pressure, and many do not want to stop working.",
          "Because no one is allowed to stop working after the age of sixty.",
          "Because gardens have become too expensive for most people.",
          "Because gold watches are no longer given to workers."
        ],
        correct: 0,
        explanation: {
          location: "原文第1段末句：People live longer, pensions are under pressure, and many older adults do not actually want to spend twenty or thirty years doing nothing.",
          correctReason: "原文直接给出三个原因：更长寿、养老金承压、不想无所事事，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "与事实相反：原文说人们仍可退休，只是方式在变。",
          wrongC: "字面干扰：'花园'只是旧画面的比喻，并非因为花园涨价。",
          wrongD: "字面干扰：金表是旧仪式的象征，不是现实改变的真正原因。",
          errorType: "定位错误：考生须抓住末句三个并列原因，勿被gold watch等细节误导。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred about people who keep meaningful activity after retirement?",
        options: [
          "They are forced to work because they have no savings.",
          "They generally enjoy better mental well-being than those who rest completely.",
          "They are likely to return to full-time work within a year.",
          "They miss the structure of their old jobs."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：Those who keep some meaningful activity... tend to be happier than those who simply rest.",
          correctReason: "'往往更快乐'说明保持有意义活动者心理状态更好，B正确。",
          wrongA: "无中生有：原文未说他们是因没积蓄被迫工作。",
          wrongB: "（本题B为正确答案）",
          wrongC: "过度推断：保持活动不等于一年内重回全职。",
          wrongD: "相反：保持活动正是为继续获得结构感，而非仅仅'怀念'旧工作。",
          errorType: "推理错误：考生须从happier推出心理更健康，不能附加'被迫'等无据信息。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Everyone should stop working immediately at the age of sixty.",
          "A state pension alone is enough for a comfortable retirement.",
          "Older people are no longer healthy enough to work.",
          "Retirement is changing, and flexible, planned approaches suit modern life better."
        ],
        correct: 3,
        explanation: {
          location: "全文：第1段讲旧画面过时，第2段讲保持活动更快乐，第3段讲财务规划，末段讲灵活逐步退休。",
          correctReason: "文章指出退休方式在变化，灵活而有规划的做法更适合现代生活，D完整概括。",
          wrongA: "相反：第1段说旧的'一刀切'已不现实，末段主张逐步退下。",
          wrongB: "相反：第3段提醒不要只依赖国家养老金。",
          wrongC: "相反：第2段说如今年长者更健康活跃。",
          wrongD: "（本题D为正确答案）",
          errorType: "主旨判断错误：考生须兼顾变化、规划与灵活三条主线。"
        }
      },
      {
        questionType: "词义猜测题",
        question: "The word \"flexibility\" in the last paragraph probably means ____.",
        options: [
          "the physical act of bending something",
          "taking a long holiday without any plans",
          "the quality of being able to adjust to different arrangements",
          "refusing to change one's mind under any pressure"
        ],
        correct: 2,
        explanation: {
          location: "原文末段：The wisest approach seems to be flexibility... many people now step down gradually.",
          correctReason: "由'逐步退下、减少工时、可塑造'可知flexibility指灵活可调，C正确。",
          wrongA: "字面义干扰：这是flexibility的'身体柔韧性'本义，此处指做法灵活。",
          wrongB: "无中生有：与'无计划度假'无关。",
          wrongC: "（本题C为正确答案）",
          wrongD: "相反：refuse to change是固执，与灵活相反。",
          errorType: "单词问题：考生须结合step down gradually这一语境推断'灵活调整'。"
        }
      }
    ]
  },

  {
    id: "r040",
    title: "Thinking Twice: The Skill the Information Age Needs",
    type: "成考标准",
    level: "D",
    category: "批判性思维",
    wordCount: 273,
    text: "Search any topic online today and you will receive thousands of answers within a second. The difficulty is no longer finding information, but deciding which of it is worth believing. A friend sends a message about a new miracle diet; a video claims that a common habit causes a serious disease; a headline promises a simpler explanation than the experts have given. Without a way to judge these claims, a smart person can still be misled.\n\nThis is where critical thinking enters. It does not mean disagreeing with everything, as the word is often misunderstood. Critical thinking is the habit of asking three simple questions before accepting a claim: Who says this? What evidence do they offer? Does another explanation fit the facts just as well? A person with this habit does not panic when a frightening headline appears. They pause, look for the source, and compare it with what they already know.\n\nSchools have not always taught this well. For decades, students were rewarded for remembering the correct answer, not for questioning how it was reached. Rote memorisation has its place, but it leaves graduates unprepared for a world full of conflicting reports. Employers now complain that young people can repeat facts but struggle to decide which facts to trust.\n\nThe good news is that critical thinking can be practised. Reading an article slowly, checking one source against another, and asking how a statistic was collected are small habits that quickly become natural. In a world that rewards speed, the willingness to think twice is not a weakness. It may be the most useful skill a student can carry into adult life.",
    translation: "如今，在网上搜索任何话题，一秒钟内你就会收到成千上万个答案。困难不再是找到信息，而是判断其中哪些值得相信。朋友发来一条关于神奇新饮食的消息；一段视频声称某个常见习惯会导致重病；一个头条许诺一个比专家说法更简单的解释。如果没有判断这些说法的方法，再聪明的人也可能被误导。\n\n这正是批判性思维登场之处。它并不意味着像这个词常被误解的那样，凡事都反对。批判性思维是在接受一个说法之前，习惯先问三个简单的问题：这是谁说的？他们提供了什么证据？是否还有另一种解释同样符合事实？有这种习惯的人，在吓人的标题出现时不会惊慌。他们会停顿，寻找信息来源，并把它与自己已知的东西对照。\n\n学校并不一直把这一点教得很好。几十年来，学生因记住正确答案而受表扬，而不是因追问答案是如何得出的。死记硬背有它的位置，但它让毕业生对一个充满矛盾信息的世界准备不足。雇主如今抱怨：年轻人能复述事实，却难以判断哪些事实值得信任。\n\n好消息是，批判性思维是可以练习的。慢慢读一篇文章、把一个来源与另一个对照、追问一项统计是如何采集的——这些小习惯很快会变得自然。在一个奖励速度的世界里，愿意多想一遍并不是软弱。它也许是一个学生能带进成年生活的最有用的技能。",
    questions: [
      {
        questionType: "细节题",
        question: "According to the passage, what does critical thinking involve?",
        options: [
          "Disagreeing with every opinion that other people hold.",
          "Asking about the source, the evidence, and possible alternative explanations.",
          "Remembering the correct answers given by textbooks.",
          "Rejecting everything that appears on the internet."
        ],
        correct: 1,
        explanation: {
          location: "原文第2段：asking three simple questions: Who says this? What evidence do they offer? Does another explanation fit the facts just as well?",
          correctReason: "三个问题即问来源、问证据、问是否有其他解释，B完全对应。",
          wrongA: "相反：第2段明说'并不意味着凡事都反对'。",
          wrongB: "（本题B为正确答案）",
          wrongC: "相反：第3段说批判性思维不是死记正确答案。",
          wrongD: "过度绝对：批判性思维是判断，并非全盘否定网络上一切。",
          errorType: "定位错误：考生须抓住第2段三个问句，排除对critical的误解。"
        }
      },
      {
        questionType: "段落作用题",
        question: "What is the main function of Paragraph 3?",
        options: [
          "To praise schools for their excellent teaching methods.",
          "To describe the detailed history of examinations.",
          "To argue that rote memorisation is completely useless.",
          "To explain why traditional schooling has failed to prepare students for the information age."
        ],
        correct: 3,
        explanation: {
          location: "原文第3段：Students were rewarded for remembering the correct answer... it leaves graduates unprepared... Employers now complain...",
          correctReason: "第3段说明过去死记式教育的局限，解释为何学生未被准备好应对信息时代，D正确。",
          wrongA: "相反：该段批评而非赞扬学校。",
          wrongB: "无中生有：并未详细叙述考试历史。",
          wrongC: "绝对化：原文说死记硬背'有它的位置'，并非完全无用。",
          wrongD: "（本题D为正确答案）",
          errorType: "段落作用误判：考生须区分段意与语气——它是指出教育缺口，而非全盘否定记忆。"
        }
      },
      {
        questionType: "推理题",
        question: "What can be inferred from the passage about frightening headlines?",
        options: [
          "They are always written by true experts.",
          "They should be shared immediately with friends.",
          "They should be checked carefully before being believed.",
          "They are never based on any facts at all."
        ],
        correct: 2,
        explanation: {
          location: "原文第2段：A person with this habit does not panic when a frightening headline appears. They pause, look for the source, and compare it...",
          correctReason: "面对吓人标题应停顿、查来源、对照已知，即仔细核实再相信，C正确。",
          wrongA: "相反：作者提醒警惕，并未说它们总是真专家所写。",
          wrongB: "相反：正相反，应先核实而非立刻转发。",
          wrongC: "（本题C为正确答案）",
          wrongD: "绝对化：'从不基于事实'过于绝对，原文只是要求核实。",
          errorType: "推理错误：考生须读出pause, look for the source所体现的审慎态度。"
        }
      },
      {
        questionType: "主旨题",
        question: "What is the main idea of this passage?",
        options: [
          "Critical thinking is an increasingly valuable skill for judging online information.",
          "The internet contains no useful information at all.",
          "Students should spend more time memorising facts for exams.",
          "Speed is the most important quality in modern life."
        ],
        correct: 0,
        explanation: {
          location: "全文：第1段提出信息过载难题，第2段界定批判性思维，第3段讲教育不足，末段总结它是最有用的技能。",
          correctReason: "文章核心是在信息时代批判性思维愈发宝贵，A完整概括。",
          wrongA: "（本题A为正确答案）",
          wrongB: "绝对化/相反：作者并未说网络毫无有用信息。",
          wrongC: "相反：第3段指出死记硬背让学生准备不足。",
          wrongD: "相反：末段说在奖励速度的世界里，愿意思考反而是长处。",
          errorType: "主旨判断错误：考生须把握'信息时代+批判性思维宝贵'这一主线。"
        }
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_BATCH_4 };
}
if (typeof window !== "undefined") {
  window.READING_BATCH_4 = READING_BATCH_4;
}
