// 成人高考专升本英语 · 完形填空题库
// 共 10 篇，每篇约 200 词、15 空、四选一，含详细解析
// 考查类型：上下文 / 词义辨析 / 固定搭配 / 连接关系 / 语法 / 逻辑

const CLOZE_DATA = [
  // ============ c001 教育 ============
  {
    id: "c001",
    title: "A Second Chance at College",
    category: "教育",
    wordCount: 205,
    text: "At the age of thirty-five, Linda decided to go back to college. For years she had worked as a secretary in a small company, doing the same routine day after day. The job was stable, ___1___ she felt that something was missing. She wanted to learn something new and to prove that she could still succeed in an academic ___2___.\n\nThe first semester was harder than she had expected. She had to balance classes, homework and a full-time job, and sometimes she felt completely ___3___. Most of her classmates were half her age, which made her feel nervous ___4___. However, she soon found that her life experience gave her a real ___5___ — she understood why she was studying, and she was far more serious than many young students.\n\nBy the end of the year, Linda had become one of the top students in her class. Her teachers ___6___ her ability to connect textbook theory with real life. More importantly, she regained her ___7___. She had once believed that it was too late to change, ___8___ now she knew that learning could happen at any age.\n\nHer story tells us that education is not a race with a fixed finish line. People of all ages can ___9___ new knowledge, and a second chance is never beyond reach. If you have a dream that you keep ___10___ off, perhaps it is time to take the first ___11___. As Linda often says, the best time to plant a tree was twenty years ago; the ___12___ best time is today.\n\nOf course, going back to study is not easy. It requires patience, time and a willingness to face ___13___. But the rewards are worth every effort. Linda finally ___14___ her degree last summer, and she has already found a job that truly fits her interests. She often tells younger colleagues, \"Never let age ___15___ you from trying.\"",
    blanks: [
      {
        index: 1,
        options: ["so", "but", "because", "unless"],
        correct: 1,
        testType: "连接关系",
        explanation: "正确答案 B(but)。前半句说\"工作稳定(stable)\"，后半句说\"她觉得缺了点什么(missing)\"，前后为转折关系，故选 but。so 表因果、because 表原因、unless 表条件（除非），均与逻辑不符。"
      },
      {
        index: 2,
        options: ["situation", "condition", "environment", "atmosphere"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(environment)。academic environment 指\"学术环境/学习氛围\"，固定搭配。situation 指具体\"形势、处境\"；condition 多指\"条件、身体状况\"；atmosphere 指\"气氛、大气层\"，不与 academic 构成地道搭配。"
      },
      {
        index: 3,
        options: ["exhausted", "relaxed", "amused", "relieved"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(exhausted)。上文说她要同时应付课程、作业和全职工作，按常理应当\"筋疲力尽\"，且与 harder 呼应。relaxed(放松的)、amused(被逗乐的)、relieved(松了口气的)都与\"分身乏术\"的语境相反。"
      },
      {
        index: 4,
        options: ["at last", "at first", "at least", "at most"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(at first)。下文 However 引出她后来的转变，说明\"一开始\"感到紧张。at last(终于)、at least(至少)、at most(至多)都不能与后文 However 形成时间上的对照。"
      },
      {
        index: 5,
        options: ["benefit", "profit", "advantage", "interest"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(advantage)。give sb an advantage 指\"给某人带来优势\"，对应\"生活经历让她比年轻同学更清楚为何而学\"。benefit 多指\"好处、福利\"；profit 多指\"利润\"；interest 指\"兴趣、利息\"，均不及 advantage 准确。"
      },
      {
        index: 6,
        options: ["excused", "forgave", "questioned", "praised"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(praised)。上文说她成为尖子生，老师自然\"赞扬\"她把理论联系实际的能力。excused(原谅)、forgave(宽恕)、questioned(质疑)都与正面语境矛盾。"
      },
      {
        index: 7,
        options: ["confidence", "wealth", "reputation", "balance"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(confidence)。她曾经认为\"太晚了无法改变\"，而现在成绩优异，说明重获了\"自信\"。wealth(财富)、reputation(名声)、balance(平衡)在文中均无依据。"
      },
      {
        index: 8,
        options: ["and", "so", "or", "but"],
        correct: 3,
        testType: "连接关系",
        explanation: "正确答案 D(but)。前半句\"曾经相信太晚了\"与后半句\"现在知道任何年龄都能学习\"构成转折，故选 but。and/so/or 均不表转折。"
      },
      {
        index: 9,
        options: ["require", "inquire", "acquire", "request"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(acquire)。acquire knowledge 是固定搭配，意为\"获得/习得知识\"。require(要求)、inquire(询问)、request(请求)都不与 knowledge 搭配表示\"学到\"。"
      },
      {
        index: 10,
        options: ["giving", "putting", "taking", "setting"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(putting)。put off 为固定短语，意为\"推迟、拖延\"，keep putting off a dream 指\"一直把梦想一拖再拖\"。give off(散发)、take off(起飞/脱掉)、set off(出发)均不合句意。"
      },
      {
        index: 11,
        options: ["notice", "breathe", "break", "step"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(step)。take the first step 是固定表达，意为\"迈出第一步\"。take notice(注意)、take a breath(深呼吸)、take a break(休息)虽可构成短语，但与\"开始追梦\"的语境不符。"
      },
      {
        index: 12,
        options: ["second", "next", "other", "last"],
        correct: 0,
        testType: "逻辑",
        explanation: "正确答案 A(second)。谚语式表达：\"种树最好的时间是二十年前，其次(second best)是现在\"。second best 意为\"第二好的、次佳的\"。next/other/last 都不能构成 second best 这一固定比较。"
      },
      {
        index: 13,
        options: ["challenges", "changes", "chances", "charges"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(challenges)。face challenges 指\"面对挑战\"，对应前文\"重返校园并不容易\"。changes(改变)、chances(机会)、charges(费用/指控)都与\"需要勇气面对\"的语境不搭。"
      },
      {
        index: 14,
        options: ["awarded", "earned", "passed", "graded"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(earned)。earn a/one's degree 指\"通过努力获得学位\"。award 是\"授予\"（主语通常是学校，且常用被动 be awarded）；pass 后接考试/课程而非 degree；grade 指\"打分、分级\"。"
      },
      {
        index: 15,
        options: ["allow", "encourage", "prevent", "separate"],
        correct: 2,
        testType: "固定搭配",
        explanation: "正确答案 C(prevent)。prevent sb from doing sth 是固定搭配，意为\"阻止某人做某事\"。allow/encourage 意思相反；separate 搭配 into 或 from 但不表示\"阻止尝试\"。"
      }
    ]
  },

  // ============ c002 工作 ============
  {
    id: "c002",
    title: "The New Intern",
    category: "工作",
    wordCount: 208,
    text: "When David joined the company as an intern, he was nervous about everything. He had never worked in a real office before, and he was afraid of making ___1___ in front of experienced colleagues. On his first day, his manager showed him around and introduced him to the team, but David could not ___2___ remember everyone's name.\n\nDuring the first week, David's tasks were small and ___3___ — copying files, answering emails, and making coffee. He sometimes felt that his work was not ___4___, but he did not complain. Instead, he paid close ___5___ to how his colleagues solved problems, and he took notes in a small notebook every evening.\n\nOne morning, a client called with an urgent question that no one else could answer. David ___6___ to have read about the problem in the company report the night before. He took a deep breath and gave a clear, careful reply. The client was ___7___, and his manager looked at him with new ___8___.\n\nFrom that day on, David was given more important work. He learned that being an intern was not about doing great things ___9___, but about doing small things well and being ready when an opportunity ___10___. He also learned that asking questions was not a sign of weakness; ___11___, it showed a desire to learn.\n\nBy the end of the summer, David had been ___12___ a full-time position. His manager told him, \"We hired you not ___13___ your grades, but because of your attitude.\" David smiled. He had come to the office to learn, but he had also learned something ___14___ valuable: that every expert was once a beginner, and that ___15___ beats talent when talent does not work hard.",
    blanks: [
      {
        index: 1,
        options: ["faces", "mistakes", "efforts", "fortunes"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(mistakes)。make mistakes 是固定搭配，意为\"犯错误\"，符合新人在老同事面前怕出错的心理。make faces(做鬼脸)、make efforts(努力)、make fortunes(发财)均不合语境。"
      },
      {
        index: 2,
        options: ["even", "ever", "yet", "just"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(even)。could not even remember 意为\"甚至连……都记不住\"，强调他紧张到连名字都记不住。ever(曾经)、yet(还/然而)、just(仅仅/刚才)都无法表达这种递进强调。"
      },
      {
        index: 3,
        options: ["heavy", "simple", "rough", "dull"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(simple)。与 small 并列，指\"又小又简单\"的杂活（复印、回邮件、煮咖啡）。heavy(重的)、rough(粗糙的/艰难的)、dull(乏味的)虽可描述工作，但与后面列举的琐碎事务不构成并列。"
      },
      {
        index: 4,
        options: ["interesting", "necessary", "meaningful", "popular"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(meaningful)。做复印煮咖啡这类杂活，他觉得自己的工作\"没有意义\"。interesting(有趣)、necessary(必要)、popular(受欢迎)都不能解释他\"差点抱怨\"的失落感。"
      },
      {
        index: 5,
        options: ["notice", "interest", "view", "attention"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(attention)。pay attention to 是固定搭配，意为\"注意、留心\"。notice/interest/view 均不能与 pay...to 构成这一搭配。"
      },
      {
        index: 6,
        options: ["used", "ought", "happened", "seemed"],
        correct: 2,
        testType: "固定搭配",
        explanation: "正确答案 C(happened)。happen to do sth 意为\"碰巧做某事\"，指他碰巧前一晚读过相关内容。used to(过去常常)、ought to(应该)、seemed to(似乎)都与\"正好赶上\"的意外感不符。"
      },
      {
        index: 7,
        options: ["disappointed", "frightened", "worried", "satisfied"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(satisfied)。David 给出了清晰周到的答复，客户自然\"满意\"。disappointed(失望)、frightened(害怕)、worried(担心)都是负面情绪，与他成功应答矛盾。"
      },
      {
        index: 8,
        options: ["respect", "confidence", "surprise", "interest"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(respect)。with new respect 指\"带着新的敬意\"，经理从此对他刮目相看。confidence(自信)、surprise(惊讶)、interest(兴趣)都不如 respect 准确表达上司对下属能力的认可。"
      },
      {
        index: 9,
        options: ["at once", "in turn", "on purpose", "by chance"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(at once)。句意：实习不是要\"立刻\"做大事，而是把小事做好。in turn(轮流/反过来)、on purpose(故意)、by chance(偶然)都与\"从点滴做起\"的对比不搭。"
      },
      {
        index: 10,
        options: ["loses", "comes", "disappears", "fails"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(comes)。when an opportunity comes 指\"当机会来临时\"，come 与 opportunity 是地道搭配。lose/disappear/fail 都与\"把握机会\"的积极语境相反。"
      },
      {
        index: 11,
        options: ["therefore", "otherwise", "instead", "besides"],
        correct: 2,
        testType: "连接关系",
        explanation: "正确答案 C(instead)。前半句说\"提问不是软弱的表现\"，后半句\"它显示了求知欲\"，instead 在此表示\"恰恰相反、反而\"。therefore(因此)、otherwise(否则)、besides(此外)逻辑不通。"
      },
      {
        index: 12,
        options: ["awarded", "ordered", "offered", "rewarded"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(offered)。be offered a position 指\"被提供/获得一份职位\"。award 多指\"颁发奖项\"；order(命令)；reward(报答/酬劳)都不与 position 搭配。"
      },
      {
        index: 13,
        options: ["in spite of", "instead of", "apart from", "because of"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(because of)。与后文 but because of your attitude 形成 not...but... 并列：\"不是因为你的成绩，而是因为你的态度\"。in spite of(尽管)、instead of(代替)、apart from(除……之外)都破坏了 not...but 结构。"
      },
      {
        index: 14,
        options: ["equally", "hardly", "nearly", "merely"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(equally)。something equally valuable 指\"同样宝贵的道理\"。hardly(几乎不)、nearly(几乎)、merely(仅仅)都不能表达\"同等重要\"。"
      },
      {
        index: 15,
        options: ["luck", "practice", "courage", "hard work"],
        correct: 3,
        testType: "逻辑",
        explanation: "正确答案 D(hard work)。谚语：当天赋不努力时，努力(hard work)会战胜天赋。luck(运气)、practice(练习)、courage(勇气)都与后半句\"talent does not work hard\"的对比不构成对仗。"
      }
    ]
  },

  // ============ c003 健康 ============
  {
    id: "c003",
    title: "Walking Back to Health",
    category: "健康",
    wordCount: 206,
    text: "Three years ago, Dr. Wang told me that I needed to lose weight and exercise more. At thirty, I was already ___1___ by high blood pressure, and my doctor warned me that if I did not change my habits, my health would only get ___2___. I tried running, but I ___3___ my knee after two weeks and had to stop. I tried gym classes, ___4___ I soon got bored and gave up.\n\nThen a friend suggested simple walking. \"You don't need to be an athlete,\" she said. \"Just walk, every day, for thirty minutes.\" I was ___5___ at first — how could such an easy activity help? But I decided to give it a ___6___.\n\nThe first week was harder than I expected. My legs were sore, and I wanted to stay ___7___ the sofa in the evening. However, I kept my promise to myself. After ten days, something ___8___: I actually looked forward to my walks. The fresh air cleared my head, and the quiet streets gave me a ___9___ to think.\n\nWithin a few months, my blood pressure returned to ___10___ levels. More importantly, I felt energetic again. Walking did not just change my body; it changed my ___11___. I used to believe that exercise had to be painful to be ___12___. Now I know that small, steady habits work better than sudden, painful efforts.\n\nDoctors call this \"lifestyle medicine.\" They have found that regular walking can ___13___ the risk of heart disease and even improve mood. It is ___14___, and it can be done almost anywhere.\n\nIf you are thinking about getting fit, do not wait for the perfect plan. Put on comfortable shoes and walk ___15___. Your body will thank you.",
    blanks: [
      {
        index: 1,
        options: ["treated", "affected", "supported", "refused"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(affected)。be affected by 指\"受……影响、被……困扰\"，即已被高血压影响。treated(治疗)逻辑反了；supported(支持)、refused(拒绝)与高血压搭配不当。"
      },
      {
        index: 2,
        options: ["better", "less", "worse", "fewer"],
        correct: 2,
        testType: "逻辑",
        explanation: "正确答案 C(worse)。医生警告\"如果不改习惯，健康只会变得更糟(get worse)\"。better 与警告相反；less/fewer 不与 get 搭配描述健康走向。"
      },
      {
        index: 3,
        options: ["raised", "lifted", "trained", "injured"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(injured)。由 had to stop 可知膝盖\"受伤\"了。raise(举起/抚养)、lift(抬起)、train(训练)都不能解释为何被迫停止跑步。"
      },
      {
        index: 4,
        options: ["so", "but", "for", "or"],
        correct: 1,
        testType: "连接关系",
        explanation: "正确答案 B(but)。\"我尝试去健身房\"与\"很快厌倦放弃\"是转折关系。so(因此)、for(因为)、or(否则)均不合逻辑。"
      },
      {
        index: 5,
        options: ["doubtful", "excited", "grateful", "patient"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(doubtful)。破折号后反问\"这么简单的活动怎么有用？\"说明作者\"怀疑\"。excited(兴奋)、grateful(感激)、patient(耐心)都与怀疑语气相反。"
      },
      {
        index: 6,
        options: ["foot", "ride", "try", "name"],
        correct: 2,
        testType: "固定搭配",
        explanation: "正确答案 C(try)。give it a try 是固定搭配，意为\"试一试\"。give it a foot/ride/name 都不是地道表达。"
      },
      {
        index: 7,
        options: ["on", "into", "off", "over"],
        correct: 0,
        testType: "固定搭配",
        explanation: "正确答案 A(on)。stay on the sofa 指\"待在沙发上\"，on 表示\"在……表面上\"。into(进入)、off(离开)、over(越过)都不能与 sofa 表\"窝在沙发上\"。"
      },
      {
        index: 8,
        options: ["disappeared", "changed", "returned", "stopped"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(changed)。冒号后说\"我居然开始期待散步了\"，说明情况发生了\"变化\"。disappeared/stopped 与\"开始期待\"矛盾；returned(返回)不准确。"
      },
      {
        index: 9,
        options: ["reason", "right", "place", "chance"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(chance)。give sb a chance to do 指\"给某人一个做某事的机会\"。reason(理由)、right(权利)、place(地方)都不如 chance 贴合\"安静街道让我得以思考\"。"
      },
      {
        index: 10,
        options: ["normal", "low", "old", "average"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(normal)。return to normal levels 指\"恢复到正常水平\"，是健康类常用表达。low(低的)、old(旧的)、average(平均的)都不能准确表达\"血压恢复正常\"。"
      },
      {
        index: 11,
        options: ["memory", "budget", "attitude", "salary"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(attitude)。下文说他原来认为运动必须痛苦才有效，现在观念改变了，说明改变的是\"态度\"。memory(记忆)、budget(预算)、salary(工资)与文意无关。"
      },
      {
        index: 12,
        options: ["effective", "expensive", "comfortable", "famous"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(effective)。to be effective 指\"才有效\"，即他过去以为运动要痛苦才\"有效\"。expensive(贵的)、comfortable(舒服的)、famous(著名的)都不与 painful 构成对比。"
      },
      {
        index: 13,
        options: ["realize", "replace", "remove", "reduce"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(reduce)。reduce the risk of... 指\"降低……的风险\"，为健康话题常用搭配。realize(意识到)、replace(取代)、remove(移走)都不与 risk 表\"降低风险\"。"
      },
      {
        index: 14,
        options: ["rare", "complex", "boring", "free"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(free)。散步\"不花钱、随处可做\"，与后文 almost anywhere 呼应。rare(罕见)、complex(复杂)、boring(无聊)都与优点相反。"
      },
      {
        index: 15,
        options: ["away", "out", "today", "alone"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(today)。与前文 do not wait for the perfect plan 呼应，号召\"今天就走起来\"。away(离开)、out(出去)、alone(独自)都不与\"别等待\"构成呼吁。"
      }
    ]
  },

  // ============ c004 科技 ============
  {
    id: "c004",
    title: "Smartphones at the Dinner Table",
    category: "科技",
    wordCount: 209,
    text: "Last month, I visited my grandparents for Sunday dinner. The meal was delicious, but I could not help ___1___ that something was wrong. Around the table, every member of my family was looking at a phone ___2___ talking to one another. My cousin was scrolling through videos, and my uncle was ___3___ work emails. Only my grandmother, who does not own a smartphone, looked up and smiled at me.\n\nThat evening, I read an article about the ___4___ of phones on family life. Researchers found that people who check their devices during meals report feeling less ___5___ to their family. Even a single phone placed on the table can lower the quality of a ___6___, the study said. The screen does not have to ring; its very ___7___ is enough to distract us.\n\nThis did not ___8___ me completely. I remembered too many dinners where I had ___9___ a funny video rather than listen to my mother's stories. Phones are wonderful tools, ___10___ they quietly steal our attention if we let them.\n\nSo I decided to make a small ___11___. At our next family dinner, I put my phone in my bag. At first, I felt ___12___, as if I were missing something. But then my grandmother told me a story about her youth, and I found myself ___13___ every word. By the end of the meal, we had laughed together more than we had in months.\n\nTechnology will not disappear, and nor should it. ___14___, we can choose when to use it. A dinner table is not an office or a cinema; it is a place where people ___15___. The next time you sit down to eat, try leaving your phone in another room. You may be surprised by what you remember.",
    blanks: [
      {
        index: 1,
        options: ["to notice", "noticing", "notice", "noticed"],
        correct: 1,
        testType: "语法",
        explanation: "正确答案 B(noticing)。can't help doing sth 是固定语法结构，意为\"忍不住做某事\"，后接动名词。其余三项分别为不定式、动词原形、过去式，均不符合 can't help 后的搭配。"
      },
      {
        index: 2,
        options: ["because of", "together with", "thanks to", "instead of"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(instead of)。\"盯着手机，而不是彼此交谈\"，表\"代替、而不是\"。because of(因为)、together with(和)、thanks to(多亏)都不合句意。"
      },
      {
        index: 3,
        options: ["answering", "printing", "deleting", "breaking"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(answering)。answer emails 是地道搭配\"回复邮件\"。print(打印)、delete(删除)、break(弄坏)都不能与 emails 构成工作场景动作。"
      },
      {
        index: 4,
        options: ["effort", "effect", "affair", "event"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(effect)。the effect of A on B 是固定搭配，意为\"A 对 B 的影响\"。effort(努力)、affair(事务)、event(事件)均不与 on 搭配表\"影响\"。"
      },
      {
        index: 5,
        options: ["close", "strange", "busy", "equal"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(close)。feel close to sb 指\"与某人关系亲近\"，这里指边吃饭边看手机会让人觉得与家人疏远。strange(陌生)、busy(忙)、equal(平等)都不与 feel...to 表情感距离。"
      },
      {
        index: 6,
        options: ["meeting", "conversation", "friendship", "game"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(conversation)。饭桌上降低的是\"交谈的质量\"。meeting(会议)、friendship(友谊)、game(游戏)都不如 conversation 贴合饭桌交流场景。"
      },
      {
        index: 7,
        options: ["price", "shape", "presence", "weight"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(presence)。its very presence 意为\"光是它摆在那里\"，即手机无需响铃，仅仅\"存在\"就足以让人分心。price(价格)、shape(形状)、weight(重量)都不符。"
      },
      {
        index: 8,
        options: ["please", "tire", "satisfy", "surprise"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(surprise)。下文说作者自己也常边吃饭边看视频，说明这一研究结果并不让他\"意外\"。please(取悦)、tire(使疲倦)、satisfy(使满意)都与下文\"深有同感\"不符。"
      },
      {
        index: 9,
        options: ["watched", "made", "written", "sold"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(watched)。与 funny video 搭配的是 watch(看视频)。make/write/sell a video 都不能解释\"只顾看视频不听妈妈讲故事\"。"
      },
      {
        index: 10,
        options: ["so", "or", "but", "and"],
        correct: 2,
        testType: "连接关系",
        explanation: "正确答案 C(but)。\"手机是好工具\"与\"若放任它会悄悄偷走注意力\"是转折关系。so/or/and 均不表转折。"
      },
      {
        index: 11,
        options: ["mistake", "decision", "fortune", "change"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(change)。make a small change 指\"做一个小改变\"，即下文把手机收起来。mistake(错误)、decision(决定)、fortune(财富)都不如 change 贴合行为上的调整。"
      },
      {
        index: 12,
        options: ["relaxed", "proud", "grateful", "anxious"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(anxious)。as if I were missing something 说明他感到\"焦虑、不踏实\"。relaxed(放松)、proud(自豪)、grateful(感激)都与\"好像缺了点什么\"相反。"
      },
      {
        index: 13,
        options: ["wasting", "missing", "enjoying", "repeating"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(enjoying)。他放下手机后，开始\"享受\"奶奶讲的每一个字。waste/miss(浪费/错过)与转折后积极情绪相反；repeat(重复)不合语境。"
      },
      {
        index: 14,
        options: ["However", "Instead", "Otherwise", "Therefore"],
        correct: 0,
        testType: "连接关系",
        explanation: "正确答案 A(However)。前句\"科技不会消失\"，后句\"我们可以选择何时使用\"，两句间为转折，且后句独立成句，故选 However。Instead(代替)、Otherwise(否则)、Therefore(因此)逻辑不通。"
      },
      {
        index: 15,
        options: ["work", "sleep", "connect", "compete"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(connect)。餐桌是人们彼此\"联结、交流\"的地方。work(工作)、sleep(睡觉)、compete(竞争)都与饭桌的温情氛围不符。"
      }
    ]
  },

  // ============ c005 环境 ============
  {
    id: "c005",
    title: "Our Town Goes Green",
    category: "环境",
    wordCount: 207,
    text: "Two years ago, our town had a problem. Every morning, rubbish bins were overflowing, and plastic bags flew across the streets. No one seemed to know what to do ___1___ it. Then a group of volunteers proposed a simple plan: we would separate waste into four kinds — recyclable, kitchen, harmful, and ___2___.\n\nAt first, the idea was not popular. People complained that sorting rubbish was ___3___ and took too much time. \"Why can't we just throw everything into one bin?\" they asked. The volunteers did not ___4___. They stood by the bins for weeks, patiently ___5___ people where each kind of waste should go.\n\nSlowly, things began to ___6___. Mrs. Chen, who used to be the loudest complainer, became one of the most ___7___ supporters. She even brought her grandson along to teach him how to sort batteries and paper. Little by little, the town started to look ___8___. The air smelled fresher, and the river near the park was finally ___9___ again.\n\nThe volunteers also opened a community garden. People brought old boxes and unwanted tools, and together they ___10___ a small green space where children could learn about plants. What began as a(n) ___11___ project became a symbol of hope.\n\nOur story shows that protecting the environment does not ___12___ grand plans. It begins with small daily choices. Every piece of rubbish sorted, every tap turned ___13___, and every bike ride instead of a car trip ___14___. If everyone does a little, the ___15___ will be huge.",
    blanks: [
      {
        index: 1,
        options: ["with", "about", "for", "to"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(about)。what to do about it 是固定表达，意为\"该怎么处理这件事\"。do with 需与 what 连用但结构为 what...do with；for/to 均不构成\"应对问题\"。"
      },
      {
        index: 2,
        options: ["useless", "cheap", "other", "liquid"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(other)。垃圾分类四类：可回收、厨余、有害和\"其他(waste)\"，other 与前三类并列最自然。useless(无用的)、cheap(便宜的)、liquid(液态的)都不是标准类别名称。"
      },
      {
        index: 3,
        options: ["simple", "helpful", "troublesome", "necessary"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(troublesome)。由 complained 和 took too much time 可知人们觉得垃圾分类\"麻烦\"。simple(简单)、helpful(有帮助)、necessary(必要)都与抱怨语气相反。"
      },
      {
        index: 4,
        options: ["give up", "show off", "set off", "calm down"],
        correct: 0,
        testType: "固定搭配",
        explanation: "正确答案 A(give up)。尽管遭到抱怨，志愿者没有\"放弃\"。show off(炫耀)、set off(出发)、calm down(冷静)都与他们坚持站岗的行为相反。"
      },
      {
        index: 5,
        options: ["asking", "forcing", "warning", "showing"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(showing)。show people where... 指\"示范/告诉人们该往哪放\"。ask(问)、force(强迫)、warn(警告)都与 patiently 不符。"
      },
      {
        index: 6,
        options: ["change", "remain", "worsen", "stop"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(change)。下文陈女士变成支持者、小镇变干净，说明情况开始\"转变\"。remain(保持)、worsen(恶化)、stop(停止)都不能引出正面变化。"
      },
      {
        index: 7,
        options: ["lazy", "unhappy", "enthusiastic", "curious"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(enthusiastic)。与 loudest complainer 形成对比，她成了最\"热心\"的支持者，还带孙子来学习。lazy(懒)、unhappy(不满)与转变相反；curious(好奇)不如 enthusiastic 贴切。"
      },
      {
        index: 8,
        options: ["older", "dirtier", "quieter", "cleaner"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(cleaner)。垃圾分类见效，小镇开始看起来\"更干净\"。older(更老)、dirtier(更脏)与结果相反；quieter(更安静)不是本文主线。"
      },
      {
        index: 9,
        options: ["dirty", "clear", "deep", "wide"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(clear)。河水终于又\"清澈\"了。dirty(脏)与改善相反；deep(深)、wide(宽)不是环境治理的关注点。"
      },
      {
        index: 10,
        options: ["created", "sold", "buried", "ruined"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(created)。人们用旧箱子旧工具一起\"创建\"了小绿地。sell(卖)、bury(埋)、ruin(毁坏)都与建设社区花园的积极行为相反。"
      },
      {
        index: 11,
        options: ["expensive", "foreign", "important", "small"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(small)。与下文 became a symbol of hope 对比，指从一个\"小\"项目成长为希望象征。expensive(昂贵)、foreign(外来)、important(重要)都不能体现\"由小到大\"。"
      },
      {
        index: 12,
        options: ["refuse", "offer", "require", "describe"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(require)。保护环境并不\"需要\"宏大计划，而是从日常小事做起。refuse(拒绝)、offer(提供)、describe(描述)都与句意相反。"
      },
      {
        index: 13,
        options: ["on", "up", "down", "off"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(off)。turn off the tap 指\"关上水龙头\"，是节水搭配。turn on(打开)与节水相反；turn up/down(调大/调小)不用于水龙头节水。"
      },
      {
        index: 14,
        options: ["matters", "spreads", "happens", "disappears"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(matters)。每一个分类、每一次关水龙头、每一次骑车出行都\"重要、都有意义\"。spread(传播)、happen(发生)、disappear(消失)都不表达\"积少成多\"。"
      },
      {
        index: 15,
        options: ["decision", "difference", "danger", "doubt"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(difference)。make a (huge) difference 是固定搭配，意为\"产生（巨大）影响\"。decision(决定)、danger(危险)、doubt(怀疑)都不与 huge 搭配表\"成效\"。"
      }
    ]
  },

  // ============ c006 文化 ============
  {
    id: "c006",
    title: "The Lantern Festival Abroad",
    category: "文化",
    wordCount: 208,
    text: "Last spring, my Chinese friend Li invited me to celebrate the Lantern Festival with her family. I had seen lanterns only in paintings, so I did not know what to ___1___. When we arrived at her home, the whole house was ___2___ with red lanterns, and the table was ___3___ of sweet rice dumplings called tangyuan.\n\nLi's grandmother told us the story ___4___ the festival. Long ago, people believed that the festival brought families together and ___5___ good luck for the whole year. The round shape of the dumplings, she explained, ___6___ the unity of the family. As she spoke, she folded her hands and ___7___ for a safe and happy year. I did not understand every word, but I felt the ___8___ in her voice.\n\nAfter dinner, we walked to the park, ___9___ hundreds of lanterns were hanging in the trees. People wrote their wishes on small pieces of paper and ___10___ them to the lanterns. A child next to me laughed as her lantern lit up, and her laughter ___11___ through the whole square.\n\nThis experience taught me something important. Culture is not ___12___ in old books or museums only; it lives in shared food, shared stories and shared ___13___. Before that night, the Lantern Festival was just a word to me. ___14___ now, it is a warm memory I carry with me.\n\nWhenever I see a red lantern in a shop window, I remember that evening. It reminds me that kindness and the wish for a happy life are the same in every ___15___.",
    blanks: [
      {
        index: 1,
        options: ["make", "expect", "say", "cook"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(expect)。what to expect 是固定表达，意为\"会发生什么、该期待什么\"，指作者不了解这一节日。make/say/cook 都不能与 what to 构成\"未知结果\"。"
      },
      {
        index: 2,
        options: ["filled", "crowded", "tied", "decorated"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(decorated)。be decorated with 指\"用……装饰\"，房子挂满红灯笼。be filled with(装满)强调内容物；crowded(拥挤)、tied(系)都不与 lanterns 表\"装点\"。"
      },
      {
        index: 3,
        options: ["fond", "afraid", "full", "short"],
        correct: 2,
        testType: "固定搭配",
        explanation: "正确答案 C(full)。be full of 是固定搭配，意为\"充满\"，桌上摆满汤圆。fond of(喜爱)、afraid of(害怕)、short of(缺少)都不合句意。"
      },
      {
        index: 4,
        options: ["behind", "above", "through", "until"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(behind)。the story behind the festival 指\"节日背后的故事/由来\"。above(在上方)、through(穿过)、until(直到)都不表\"背后的原因\"。"
      },
      {
        index: 5,
        options: ["wished", "cost", "brought", "kept"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(brought)。bring good luck 是地道搭配\"带来好运\"。wish(祝愿)不直接接 luck 作此类搭配；cost(花费)、keep(保持)都不合。"
      },
      {
        index: 6,
        options: ["broke", "polluted", "described", "meant"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(meant)。圆滚滚的汤圆\"意味着\"家庭团圆。break(打破)、pollute(污染)明显负面；describe(描述)不与 shape 表\"象征\"。"
      },
      {
        index: 7,
        options: ["looked", "paid", "prayed", "asked"],
        correct: 2,
        testType: "固定搭配",
        explanation: "正确答案 C(prayed)。pray for 是固定搭配，意为\"祈求、祈祷\"，对应双手合十。look for(寻找)、pay for(付款)、ask for(索要)都与节日祈福不符。"
      },
      {
        index: 8,
        options: ["coldness", "anger", "regret", "warmth"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(warmth)。尽管听不懂每个字，却能从她声音里感到\"温暖\"。coldness(冷淡)、anger(愤怒)、regret(遗憾)都与节日温情相反。"
      },
      {
        index: 9,
        options: ["which", "where", "when", "why"],
        correct: 1,
        testType: "语法",
        explanation: "正确答案 B(where)。park 是地点名词，后接非限制性定语从句，从句中缺地点状语，故用关系副词 where。which 是关系代词（需作主语/宾语）；when 表时间；why 表原因，均不对。"
      },
      {
        index: 10,
        options: ["tied", "took", "threw", "sold"],
        correct: 0,
        testType: "固定搭配",
        explanation: "正确答案 A(tied)。tie A to B 是固定搭配，意为\"把 A 系到 B 上\"，即把写愿望的纸条系到灯笼上。take(拿)、throw(扔)、sell(卖)都不与 to lanterns 表\"系挂\"。"
      },
      {
        index: 11,
        options: ["rang", "disappeared", "fell", "turned"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(rang)。laughter rang through the square 指\"笑声回荡在广场上\"，ring 可表示声音\"响彻\"。disappear/fall/turn 都不与 laughter 搭配。"
      },
      {
        index: 12,
        options: ["written", "traveled", "spoken", "heard"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(written)。文化不只\"写在\"古书和博物馆里，更活在当下。travel(旅行)、speak(说)、hear(听)都与 old books 不搭。"
      },
      {
        index: 13,
        options: ["silence", "moments", "bills", "dishes"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(moments)。shared moments 指\"共同度过的时刻\"，与 shared food、shared stories 并列。silence(沉默)、bills(账单)、dishes(菜)都不如 moments 概括。"
      },
      {
        index: 14,
        options: ["And", "Or", "But", "For"],
        correct: 2,
        testType: "连接关系",
        explanation: "正确答案 C(But)。前句\"那之前只是个词\"，后句\"现在成了温暖回忆\"，是转折关系。And/Or/For 均不表转折。"
      },
      {
        index: 15,
        options: ["family", "culture", "season", "picture"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(culture)。善良与对幸福生活的向往在每一种\"文化\"里都是相通的，呼应全文文化主题。family(家庭)、season(季节)、picture(图画)都不概括全文。"
      }
    ]
  },

  // ============ c007 社会 ============
  {
    id: "c007",
    title: "A Helping Hand",
    category: "社会",
    wordCount: 206,
    text: "When Mrs. Lee retired at sixty, she worried that she would be bored. After thirty years of teaching, the idea of spending her days at home felt ___1___. Then her granddaughter told her about a community program that ___2___ elderly people living alone. Mrs. Lee decided to give it a try.\n\nHer first visit was to Mr. Wang, a seventy-eight-year-old man who had ___3___ his wife two years before. His flat was clean, ___4___ it felt lonely. Mrs. Lee brought fruit and sat with him for an hour. She did not have to do much; just being ___5___ was enough. Mr. Wang talked about his garden, and she listened ___6___.\n\nAfter that first meeting, Mrs. Lee visited every Wednesday. She helped Mr. Wang write letters, read newspapers ___7___ him, and sometimes they simply drank tea together. Slowly, the flat became ___8___. Mr. Wang started to smile more, and he even began to grow vegetables on his balcony ___9___ her.\n\nThe program changed Mrs. Lee too. She had thought retirement would be a(n) ___10___ chapter, but now she felt needed again. Her students had once told her that teaching was not just about books; it was about ___11___ with people. She understood this more deeply than ever.\n\nVolunteering does not require money or special ___12___. It asks for patience and a little time. Mrs. Lee often says that she has ___13___ more from Mr. Wang than she has given. Their friendship is quiet, but it is ___14___. It reminds the whole neighborhood that no one has to face ___15___ alone.",
    blanks: [
      {
        index: 1,
        options: ["exciting", "empty", "relaxing", "safe"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(empty)。退休后整日待在家里，她觉得日子\"空虚\"。exciting(令人兴奋)、relaxing(放松)、safe(安全)都与她担心无聊(bored)相反。"
      },
      {
        index: 2,
        options: ["taught", "interviewed", "helped", "hired"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(helped)。社区项目\"帮助\"独居老人，与全文志愿主题一致。teach(教)、interview(采访)、hire(雇佣)都不是公益项目的性质。"
      },
      {
        index: 3,
        options: ["met", "forgotten", "lost", "left"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(lost)。由 it felt lonely 可知他两年前\"失去\"了妻子。meet(遇见)、forget(忘记)、leave(离开)都不能解释独居孤独。"
      },
      {
        index: 4,
        options: ["or", "so", "for", "but"],
        correct: 3,
        testType: "连接关系",
        explanation: "正确答案 D(but)。\"公寓干净\"与\"却显得孤单\"是转折关系。or/so/for 均不表转折。"
      },
      {
        index: 5,
        options: ["there", "away", "outside", "off"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(there)。just being there was enough 意为\"光是陪在身边就足够了\"。away/outside/off 都表示离开，与陪伴相反。"
      },
      {
        index: 6,
        options: ["angrily", "nervously", "coldly", "carefully"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(carefully)。她\"认真地\"听老人讲花园，体现耐心陪伴。angrily(生气)、nervously(紧张)、coldly(冷淡)都与善意志愿相反。"
      },
      {
        index: 7,
        options: ["with", "to", "at", "of"],
        correct: 1,
        testType: "固定搭配",
        explanation: "正确答案 B(to)。read sth to sb 是固定搭配，意为\"把……读给某人听\"（老人可能看不清）。with/at/of 都不构成这一双宾语结构。"
      },
      {
        index: 8,
        options: ["lonelier", "quieter", "warmer", "dirtier"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(warmer)。常有人陪伴后，公寓变得更\"温暖\"了。lonelier(更孤独)、quieter(更安静)、dirtier(更脏)都与转变相反。"
      },
      {
        index: 9,
        options: ["with", "except", "beyond", "through"],
        correct: 0,
        testType: "固定搭配",
        explanation: "正确答案 A(with)。grow vegetables with her 指\"和她一起种菜\"。except(除了)、beyond(超出)、through(通过)都不表\"与……一起\"。"
      },
      {
        index: 10,
        options: ["closed", "open", "interesting", "surprising"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(closed)。她原以为退休是人生\"已经合上的章节\"，but 后转折说现在又觉得被需要。open(开放)与原意相反；interesting/surprising 不与 chapter 表\"终结\"。"
      },
      {
        index: 11,
        options: ["connecting", "arguing", "competing", "living"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(connecting)。connect with people 指\"与人建立联结\"，呼应师生/陪伴主题。argue(争论)、compete(竞争)都负面；live with(忍受)不如 connect 贴切。"
      },
      {
        index: 12,
        options: ["looks", "foods", "medicine", "skills"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(skills)。志愿不要求金钱或特殊\"技能\"，只需要耐心和时间。looks(外貌)、foods(食物)、medicine(药品)都与下文 patience 不并列。"
      },
      {
        index: 13,
        options: ["paid", "learned", "spent", "borrowed"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(learned)。她常说自己从王大爷那里\"学到的\"比付出的还多。pay(付钱)、spend(花费)、borrow(借)都与 more from...than given 不符。"
      },
      {
        index: 14,
        options: ["big", "loud", "expensive", "real"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(real)。友谊是安静的，却很\"真实\"。big(大)、loud(响)、expensive(贵)都不能修饰安静而真挚的友谊。"
      },
      {
        index: 15,
        options: ["danger", "life", "changes", "darkness"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(life)。no one has to face life alone 指\"没有人必须独自面对生活\"。danger(危险)、changes(变化)、darkness(黑暗)都不如 life 概括独居老人处境。"
      }
    ]
  },

  // ============ c008 人物经历 ============
  {
    id: "c008",
    title: "Running My First Marathon",
    category: "人物经历",
    wordCount: 210,
    text: "I had never been a runner. At school, I always finished last in races, and I had ___1___ hated sports. So when I told my friends that I was going to run a full marathon, they thought I was ___2___. Even I doubted myself.\n\nIt started with a simple bet with my doctor. After a health ___3___, he told me that I needed to build up my heart. \"Start with ten minutes of jogging,\" he said. Ten minutes did not sound ___4___. On the first day, I walked more than I ran, and by the end I was ___5___. But I went out again the next morning.\n\nWeek by week, the distance ___6___. I ran in the rain, in the heat and on cold winter mornings when every part of me wanted to ___7___. There were days when I wanted to quit, but I made a rule: never skip twice in a row. One missed day was a rest; two missed days were the ___8___ of a habit.\n\nThe morning of the race, my hands were shaking. Thirty thousand runners ___9___ at the starting line, and the streets were lined with cheering crowds. After an hour, my legs began to ___10___. At the thirty-kilometre mark, a wall of pain ___11___ me, and I wanted to stop. Then a stranger running beside me said, \"You are almost there. Keep going.\" Those simple words gave me just enough ___12___.\n\nI crossed the finish line in four hours and forty-seven minutes. I was not fast, ___13___ I had finished something I once thought impossible. Lying on the grass, I realized that a marathon is not about speed. It is about putting one foot in front of the other, ___14___ you want to stop.",
    blanks: [
      {
        index: 1,
        options: ["openly", "secretly", "proudly", "loudly"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(secretly)。在学校总是跑最后，说明他\"暗地里/一直\"讨厌运动。openly(公开地)、proudly(自豪地)、loudly(大声地)都不能描述压抑多年的情绪。"
      },
      {
        index: 2,
        options: ["joking", "lying", "dreaming", "regretting"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(joking)。他从不跑步却要跑马拉松，朋友以为他在\"开玩笑\"。lie(撒谎)、dream(做梦)、regret(后悔)都不如 joking 贴合\"大家不信\"。"
      },
      {
        index: 3,
        options: ["lesson", "lecture", "check", "speech"],
        correct: 2,
        testType: "固定搭配",
        explanation: "正确答案 C(check)。health check 是固定搭配\"体检\"，医生据此让他锻炼。lesson(课)、lecture(讲座)、speech(演讲)都与检查心脏无关。"
      },
      {
        index: 4,
        options: ["terrible", "possible", "dangerous", "hard"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(hard)。十分钟慢跑听起来\"不难\"，反衬后来实际的辛苦。terrible(可怕)、possible(可能)、dangerous(危险)都与\"听起来轻松\"相反。"
      },
      {
        index: 5,
        options: ["cheerful", "out of breath", "proud", "asleep"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(out of breath)。第一天走比跑多，结束时\"上气不接下气\"。cheerful(愉快)、proud(自豪)、asleep(睡着)都与初次运动的疲惫不符。"
      },
      {
        index: 6,
        options: ["increased", "decreased", "remained", "stopped"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(increased)。周复一周，跑步距离\"增加\"。decrease(减少)、remain(保持)、stop(停止)都与迈向马拉松相反。"
      },
      {
        index: 7,
        options: ["continue", "laugh", "stop", "dance"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(stop)。寒冷清晨浑身都想\"停下来\"，与坚持跑步对比。continue(继续)与意愿相反；laugh/dance 不合语境。"
      },
      {
        index: 8,
        options: ["broke", "changed", "doubted", "made"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(made)。make a rule 是固定搭配\"定下规矩\"。break(打破)、change(改变)、doubt(怀疑)都与\"立规矩\"相反。"
      },
      {
        index: 9,
        options: ["beginning", "end", "part", "sign"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(end)。\"漏跑一次是休息，连漏两次就是习惯的终结(end)\"，对应 never skip twice 的自律。beginning(开始)与句意相反；part(部分)、sign(迹象)不准确。"
      },
      {
        index: 10,
        options: ["gathered", "slept", "argued", "disappeared"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(gathered)。三万名跑者在起跑线\"聚集\"。sleep(睡)、argue(争吵)、disappear(消失)都不符合比赛起跑场景。"
      },
      {
        index: 11,
        options: ["grow", "disappear", "ache", "work"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(ache)。跑了一小时后双腿开始\"酸痛\"。grow(生长)、disappear(消失)、work(工作)都不描述腿部疲劳。"
      },
      {
        index: 12,
        options: ["found", "invited", "saved", "hit"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(hit)。a wall of pain hit me 指\"一阵剧痛袭来\"，hit 表示突然侵袭。find(发现)、invite(邀请)、save(拯救)都不与 pain 搭配。"
      },
      {
        index: 13,
        options: ["food", "strength", "money", "time"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(strength)。陌生人的话给了他继续的\"力量\"。food(食物)、money(钱)、time(时间)都不贴合\"撑下去\"的精神支撑。"
      },
      {
        index: 14,
        options: ["but", "so", "or", "and"],
        correct: 0,
        testType: "连接关系",
        explanation: "正确答案 A(but)。\"我不快\"与\"我完成了曾经以为不可能的事\"是转折。so/or/and 均不表转折。"
      },
      {
        index: 15,
        options: ["as if", "now that", "even when", "so that"],
        correct: 2,
        testType: "连接关系",
        explanation: "正确答案 C(even when)。马拉松就是\"即使(even when)你想停下，也要把一只脚放到另一只脚前\"。as if(仿佛)、now that(既然)、so that(以便)逻辑不通。"
      }
    ]
  },

  // ============ c009 心理 ============
  {
    id: "c009",
    title: "The Power of Small Habits",
    category: "心理",
    wordCount: 209,
    text: "Every January, millions of people make grand plans: lose weight, learn a language, read fifty books. By February, most of those plans have been quietly ___1___. Why do we fail so often? Experts say the problem is not that we are weak-willed; it is that we aim too ___2___.\n\nJames Clear, the author of Atomic Habits, argues that success is not the ___3___ of one big decision. It is the result of small choices repeated every day. He ___4___ that a person who reads just one page a night will finish around thirty books a year. A person who walks ten minutes a day will, over a year, cover hundreds of kilometres. Small actions, repeated ___5___, become powerful.\n\nThe key is to make the habit so ___6___ that we cannot say no. Want to exercise more? Put your shoes by the bed the night before. Want to read more? Leave a book on the ___7___ instead of your phone. When the good choice is easy, we are far more likely to make it.\n\nWe should also stop ___8___ too much from ourselves in one go. Trying to change everything at once only leads to ___9___. Instead, change one thing at a time. Once it becomes automatic, you can add another small habit.\n\nFinally, be kind to yourself. Everyone ___10___ now and then. What matters is not whether you slip, but how quickly you get back on track. A single missed day is a small loss; a missed week is a choice.\n\nBig changes rarely happen ___11___. They grow quietly, one small step at a time. If you want a different life, start by building a slightly different habit.",
    blanks: [
      {
        index: 1,
        options: ["kept", "abandoned", "shared", "remembered"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(abandoned)。到二月，大部分宏大计划已被悄悄\"放弃\"。keep(保持)、share(分享)、remember(记住)都与年初立志、年中放弃的规律相反。"
      },
      {
        index: 2,
        options: ["high", "well", "fast", "late"],
        correct: 0,
        testType: "固定搭配",
        explanation: "正确答案 A(high)。aim too high 是固定搭配\"好高骛远、目标定得太高\"。well/fast/late 都不与 aim 构成这一表达。"
      },
      {
        index: 3,
        options: ["cause", "beginning", "result", "discovery"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(result)。与下文 It is the result of... 呼应，成功不是某个重大决定的\"结果\"，而是日常小选择的累积。cause(原因)、beginning(开端)、discovery(发现)与后句不并列。"
      },
      {
        index: 4,
        options: ["doubts", "shows", "denies", "imagines"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(shows)。作者\"指出/表明\"每晚读一页一年能读约三十本书。doubt(怀疑)、deny(否认)、imagine(想象)都与用数据论证观点相反。"
      },
      {
        index: 5,
        options: ["over time", "once", "by chance", "in turn"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(over time)。小行动\"随着时间推移\"重复，才会变得强大。once(一次)、by chance(偶然)、in turn(轮流)都不能体现日积月累。"
      },
      {
        index: 6,
        options: ["hard", "expensive", "strange", "simple"],
        correct: 3,
        testType: "上下文",
        explanation: "正确答案 D(simple)。让习惯\"简单\"到无法拒绝，与下文把鞋放床边、把书放枕头边呼应。hard(难)与策略相反；expensive(贵)、strange(怪)不沾边。"
      },
      {
        index: 7,
        options: ["chair", "desk", "pillow", "floor"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(pillow)。把书放在\"枕头\"上代替手机，睡前就会看书而不是刷手机。chair(椅子)、desk(书桌)、floor(地板)都不贴合睡前场景。"
      },
      {
        index: 8,
        options: ["afraid", "unwilling", "sorry", "likely"],
        correct: 3,
        testType: "语法",
        explanation: "正确答案 D(likely)。be likely to do 是固定结构\"很可能做某事\"，此处即更容易做出好选择。afraid(害怕)、unwilling(不愿)、sorry(抱歉)后不接 to make it 表可能性。"
      },
      {
        index: 9,
        options: ["learning", "expecting", "hearing", "borrowing"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(expecting)。stop expecting too much 指\"别指望一次做到太多\"。learn(学习)、hear(听说)、borrow(借)都与\"贪多\"无关。"
      },
      {
        index: 10,
        options: ["success", "confidence", "failure", "pleasure"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(failure)。同时想改变一切只会导致\"失败\"。success(成功)、confidence(自信)、pleasure(快乐)都与冒进的后果相反。"
      },
      {
        index: 11,
        options: ["add", "forget", "refuse", "buy"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(add)。一个习惯自动化后，再\"增加\"另一个小习惯。forget(忘记)、refuse(拒绝)、buy(买)都与循序渐进建立习惯相反。"
      },
      {
        index: 12,
        options: ["succeeds", "works", "slips", "laughs"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(slips)。下文 whether you slip 提示：每个人都会偶尔\"松懈、失足\"。succeed(成功)、work(工作)、laugh(笑)都与 be kind to yourself 的包容主题不符。"
      },
      {
        index: 13,
        options: ["badly", "lazily", "late", "quickly"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(quickly)。重要的不是是否失足，而是多\"快\"重回正轨。badly(糟糕地)、lazily(懒惰地)、late(迟)都与 get back on track 不搭。"
      },
      {
        index: 14,
        options: ["overnight", "slowly", "carefully", "clearly"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(overnight)。大的改变很少\"一夜之间\"发生，与下文 grow quietly 呼应。slowly(缓慢)与 rarely 矛盾；carefully(仔细)、clearly(清楚)不贴主题。"
      },
      {
        index: 15,
        options: ["avoiding", "building", "stopping", "criticizing"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(building)。start by building a habit 指\"从培养一个小习惯开始\"。avoid(避免)、stop(停止)、criticize(批评)都与建立新生活相反。"
      }
    ]
  },

  // ============ c010 生活 ============
  {
    id: "c010",
    title: "A Lesson from a Rainy Day",
    category: "生活",
    wordCount: 207,
    text: "It was a cold April morning, and I was already in a bad mood. The bus was late, my coffee was cold, and I had forgotten my umbrella. By the time I ___1___ the office, rain was pouring down. I stood under a small shelter, ___2___ when I would get dry.\n\nThen an old woman came up beside me. She was holding a single red rose in her hand. \"Nice flower,\" I said, trying to be ___3___. She smiled and broke off the rose, holding it out to me. \"You keep it,\" she said. \"I have a whole ___4___ of them at home.\"\n\nI was surprised and accepted it ___5___. \"Why are you giving this away?\" I asked. She told me that she grew roses every spring, and that giving them ___6___ made her happier than selling them. \"A flower ___7___ alone is just a flower,\" she said. \"Given to someone, it becomes a gift.\"\n\nI held the rose all day. Its color ___8___ my grey desk, and every time I looked at it, I remembered the woman's words. That evening, I stopped at a shop and bought a small pot of flowers for my ___9___, who had helped me move months before. She called me, ___10___, to thank me.\n\nThat small act taught me that happiness is not something we only ___11___. It is something we create by passing things on. The rose did not ___12___ much, but it changed my whole day. We often think we need money or success to feel happy, ___13___ the truth is that kindness is free.\n\nNow, whenever I feel ___14___, I remember that rose. I try to give something small — a smile, a kind word, a flower. And every time I do, I find that my own day becomes ___15___, too.",
    blanks: [
      {
        index: 1,
        options: ["left", "cleaned", "built", "reached"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(reached)。by the time I reached the office 指\"当我到达办公室时\"。leave(离开)与\"下雨被困棚下\"矛盾；clean(打扫)、build(建造)不合语境。"
      },
      {
        index: 2,
        options: ["knowing", "forgetting", "wondering", "deciding"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(wondering)。站在棚下\"想知道\"何时才能雨停。know(知道)、forget(忘记)、decide(决定)都不表达焦急等待。"
      },
      {
        index: 3,
        options: ["polite", "rude", "silent", "careful"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(polite)。对陌生人的花随口称赞一句，是想显得\"礼貌\"。rude(粗鲁)、silent(沉默)、careful(小心)都与搭话称赞不符。"
      },
      {
        index: 4,
        options: ["bag", "garden", "pocket", "box"],
        correct: 1,
        testType: "上下文",
        explanation: "正确答案 B(garden)。由下文 she grew roses every spring 可知家里有一整座\"花园\"。bag(包)、pocket(口袋)、box(盒子)都不能与种花对应。"
      },
      {
        index: 5,
        options: ["angrily", "sadly", "gratefully", "carelessly"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(gratefully)。陌生人送花，作者又惊又\"感激\"地收下。angrily(生气)、sadly(难过)、carelessly(粗心)都与善意场景相反。"
      },
      {
        index: 6,
        options: ["up", "in", "back", "away"],
        correct: 3,
        testType: "固定搭配",
        explanation: "正确答案 D(away)。give away 是固定短语\"赠送、分发\"，指她把花送人比卖掉更快乐。give up(放弃)、give in(屈服)、give back(归还)都不合。"
      },
      {
        index: 7,
        options: ["grown", "lost", "forgotten", "bought"],
        correct: 0,
        testType: "词义辨析",
        explanation: "正确答案 A(grown)。\"独自长着(grown alone)的花只是一朵花，送人后才成礼物\"。lost(丢失)、forgotten(被忘)、bought(买)都不与 alone 对比。"
      },
      {
        index: 8,
        options: ["broke", "brightened", "dirtied", "left"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(brightened)。红花\"点亮/照亮\"了灰色的办公桌。break(打破)、dirty(弄脏)是负面；leave(留下)不如 brightened 传神。"
      },
      {
        index: 9,
        options: ["neighbor", "enemy", "driver", "boss"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(neighbor)。曾帮他搬家、还会打电话道谢的，应是\"邻居\"。enemy(敌人)与帮忙相反；driver(司机)、boss(老板)都不贴合。"
      },
      {
        index: 10,
        options: ["excited", "disappointed", "bored", "frightened"],
        correct: 0,
        testType: "上下文",
        explanation: "正确答案 A(excited)。收到花她打电话来道谢，语气自然\"激动\"。disappointed(失望)、bored(无聊)、frightened(害怕)都与惊喜不符。"
      },
      {
        index: 11,
        options: ["buy", "refuse", "receive", "repair"],
        correct: 2,
        testType: "上下文",
        explanation: "正确答案 C(receive)。快乐不是只靠\"接收\"来的，而是通过传递创造。buy(买)、refuse(拒绝)、repair(修理)都与 passing things on 的主题不对照。"
      },
      {
        index: 12,
        options: ["spend", "waste", "save", "cost"],
        correct: 3,
        testType: "词义辨析",
        explanation: "正确答案 D(cost)。物作主语表示\"花费\"用 cost。spend 主语是人；waste(浪费)、save(节省)都不与 much 及 rose 搭配表\"不贵\"。"
      },
      {
        index: 13,
        options: ["so", "but", "or", "for"],
        correct: 1,
        testType: "连接关系",
        explanation: "正确答案 B(but)。\"我们以为需要金钱成功才快乐\"与\"事实是善良是免费的\"是转折。so/or/for 均不表转折。"
      },
      {
        index: 14,
        options: ["pleased", "down", "relaxed", "proud"],
        correct: 1,
        testType: "词义辨析",
        explanation: "正确答案 B(down)。feel down 是固定表达\"情绪低落\"，与文章开头 in a bad mood 呼应。pleased(高兴)、relaxed(放松)、proud(自豪)都与需要被治愈相反。"
      },
      {
        index: 15,
        options: ["darker", "quieter", "brighter", "longer"],
        correct: 2,
        testType: "词义辨析",
        explanation: "正确答案 C(brighter)。每次付出善意，自己的一天也变得\"更明亮\"。darker(更暗)与结果相反；quieter(更静)、longer(更长)都不表心情变好。"
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CLOZE_DATA };
}
if (typeof window !== "undefined") {
  window.CLOZE_DATA = CLOZE_DATA;
}
