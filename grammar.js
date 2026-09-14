// 成考专升本英语 · 高频语法体系
// 按成考实际考查频率从高到低排序。人话讲解 + 例子 + 拆句 + 考试怎么考 + 易错点 + 练习题。
const GRAMMAR_DATA = [

// ===================== 时态 =====================
{
  id:"g01", title:"一般现在时", category:"时态", frequency:10, level:1,
  explanation:"表示经常做的事、习惯，或者客观事实、真理。看到 always/usually/often/every day/on Sundays 这类词，基本就是它。主语是第三人称单数（他/她/它/一个人或东西）时，动词后面要加 s 或 es，比如 work→works，go→goes。",
  examples:[
    {en:"She works in a hospital.", zh:"她在医院上班。"},
    {en:"The earth goes around the sun.", zh:"地球绕着太阳转。"},
    {en:"They usually get up at six.", zh:"他们通常六点起床。"}
  ],
  breakdown:"先找主语：She（第三人称单数），所以动词 work 要加 s 变成 works。第二句 The earth 是一个东西，也是第三人称单数，go 加 es 变 goes。第三句 They 是复数，动词用原形 get。",
  examTip:"成考单选最爱考第三人称单数加 s/es，以及用时间标志词判断该用哪个时态。看到 every day/often 别选过去时。",
  commonMistakes:[
    "主语是 he/she/it 时忘了给动词加 s，比如写成 He work。",
    "把客观事实（真理）也跟着时间改成过去时，比如 The earth went around the sun（错，永远用 goes）。"
  ],
  basicQuestions:[
    {question:"My father ____ in a factory. He works hard every day.", options:["work","works","working","worked"], correct:1, explanation:"主语 My father 是第三人称单数，又是每天的习惯，用一般现在时，动词加 s → works。", type:"基础题"},
    {question:"The sun ____ in the east.", options:["rise","rises","rose","is rising"], correct:1, explanation:"客观真理永远用一般现在时；主语 The sun 是第三人称单数，rise 加 s → rises。", type:"基础题"},
    {question:"We ____ English at school every day.", options:["study","studies","studied","are studying"], correct:0, explanation:"主语 We 是复数，every day 表习惯，用一般现在时，动词用原形 study。", type:"基础题"}
  ],
  examQuestions:[
    {question:"Mr. Smith, together with his wife, often ____ for a walk after supper.", options:["go","goes","going","gone"], correct:1, explanation:"主语真正的中心是 Mr. Smith（单数），together with... 是附带成分不影响单复数，所以用 goes。", type:"成考题"},
    {question:"The shop ____ at eight in the morning and ____ at nine in the evening.", options:["open;close","opens;closes","is opening;is closing","opened;closed"], correct:1, explanation:"店铺开门关门是日常固定状态，用一般现在时；主语 The shop 是单数，动词都加 s。", type:"成考题"}
  ]
},

{
  id:"g02", title:"一般过去时", category:"时态", frequency:9, level:1,
  explanation:"表示过去某个时间做的事，现在已经结束了。看到 yesterday/last week/...ago/in 1990/just now 这种过去时间，就用它。规则动词加 ed（worked），但很多常用动词是不规则的，必须单独背：go→went，see→saw，buy→bought，have→had，do→did。",
  examples:[
    {en:"He went to Beijing yesterday.", zh:"他昨天去了北京。"},
    {en:"I bought this book last week.", zh:"我上周买了这本书。"},
    {en:"They lived here in 2010.", zh:"他们2010年住在这里。"}
  ],
  breakdown:"先找时间词：yesterday/last week/in 2010，全是过去时间，所以动词要用过去式。go 的过去式是不规则的 went，buy→bought，live→lived（规则）。不管主语是谁，过去式动词都不变形。",
  examTip:"成考特别爱考不规则动词的过去式。做题先扫时间状语，一看到过去时间就直接排除现在时、将来时选项。",
  commonMistakes:[
    "不规则动词过去式记混，比如把 go 的过去式说成 goed/wented。",
    "句子里有 yesterday 却还用动词原形或一般现在时。"
  ],
  basicQuestions:[
    {question:"I ____ a movie with my friend last night.", options:["see","saw","seen","seeing"], correct:1, explanation:"last night 是过去时间，see 的过去式是不规则的 saw。", type:"基础题"},
    {question:"She ____ her key on the desk this morning.", options:["leaves","leave","left","is leaving"], correct:2, explanation:"this morning（已经过去）是过去时间，leave 的过去式是 left。", type:"基础题"},
    {question:"They ____ in Shanghai three years ago.", options:["live","lived","lives","are living"], correct:1, explanation:"three years ago 是过去时间，live 是规则动词，加 ed → lived。", type:"基础题"}
  ],
  examQuestions:[
    {question:"When I was a child, I often ____ football with my classmates.", options:["play","played","plays","have played"], correct:1, explanation:"When I was a child 表示小时候，是过去的时间背景，often 在这里指过去经常做，用过去式 played。", type:"成考题"},
    {question:"The old man ____ the same house all his life and never wanted to move.", options:["keeps","kept","has kept","is keeping"], correct:1, explanation:"and 后用 wanted（过去式）并列，and 前后时态要一致，所以前面也用过去式 kept。", type:"成考题"}
  ]
},

{
  id:"g03", title:"现在完成时", category:"时态", frequency:9, level:2,
  explanation:"表示过去做的事，对现在还有影响，或者从过去一直持续到现在。结构：have/has + 过去分词。标志词：already（已经）、yet（还）、just（刚刚）、ever（曾经）、never（从不）、since+时间点（自从）、for+一段时间（持续了多久）。注意：have/has 不是“有”，是帮助构成时态的。",
  examples:[
    {en:"I have lived here for ten years.", zh:"我在这儿住了十年了（现在还住）。"},
    {en:"She has already finished her homework.", zh:"她已经做完作业了（现在没事了）。"},
    {en:"Have you ever been to Beijing?", zh:"你曾经去过北京吗？"}
  ],
  breakdown:"先看标志词：for ten years / already / ever，都指向现在完成时。主语 I 用 have，主语 She 用 has，后面都加过去分词（lived/finished/been）。别把它当成“现在正在做”。",
  examTip:"成考高频！重点考：① for+段时间 vs since+时间点 的选择；② have been to（去过已回）和 have gone to（去了没回）的区别；③ 和一般过去时的区分。",
  commonMistakes:[
    "看到 for+一段时间还在用过去时，如 I lived here for ten years（强调现在还住要用完成时）。",
    "has gone to 和 has been to 搞混：gone 是“人在那儿没回来”，been 是“去过已经回来了”。",
    "since 后面误加一段时间，如 since ten years（错，应说 for ten years 或 since ten years ago）。"
  ],
  basicQuestions:[
    {question:"I ____ this film twice. It is very interesting.", options:["see","saw","have seen","will see"], correct:2, explanation:"twice（两次）表示到现在为止的经历，用现在完成时 have seen。", type:"基础题"},
    {question:"He has worked in this company ____ 2015.", options:["for","since","in","from"], correct:1, explanation:"2015 是时间点，“自从2015年”用 since；for 后面要接一段时间。", type:"基础题"},
    {question:"— Where is Tom? — He ____ the library. He will be back soon.", options:["has been to","has gone to","went to","goes to"], correct:1, explanation:"“他很快回来”说明人现在在图书馆没回来，用 has gone to。", type:"基础题"}
  ],
  examQuestions:[
    {question:"This is the best film that I ____ ever ____.", options:["have;seen","has;seen","did;see","do;see"], correct:0, explanation:"This is the best... that... 句型中，that 从句常用现在完成时；主语是 I，用 have + seen。", type:"成考题"},
    {question:"By the end of last month, she ____ in the factory for five years.", options:["has worked","had worked","worked","works"], correct:1, explanation:"By the end of last month（到上个月底为止）是“过去的过去”，用过去完成时 had worked。这题考点是 by+过去时间，别选现在完成时。", type:"成考题"},
    {question:"It is three years since he ____ a soldier.", options:["is","was","has been","had been"], correct:1, explanation:"It is + 一段时间 + since + 一般过去时，是固定句型，表示“自从他当兵到现在三年了”，since 从句用过去时 was。", type:"成考题"}
  ]
},

{
  id:"g04", title:"一般将来时", category:"时态", frequency:8, level:1,
  explanation:"表示将来要做的事或会发生的事。两种常见说法：will + 动词原形（临时决定、预测），be going to + 动词原形（计划好的、有迹象要发生）。标志词：tomorrow、next week、soon、in the future、in 2030。",
  examples:[
    {en:"I will call you tomorrow.", zh:"我明天给你打电话。"},
    {en:"They are going to visit their grandparents next weekend.", zh:"他们下周末打算去看爷爷奶奶。"},
    {en:"It will rain soon.", zh:"很快要下雨了。"}
  ],
  breakdown:"找将来时间：tomorrow/next weekend/soon。will 后面永远接动词原形（call/rain）。be going to 里的 be 要随主语变：I am going to, they are going to。",
  examTip:"成考常考 will 和 be going to 的区别，但更常见的是和别的时态混在一起让你选时间。看到 tomorrow/next 开头的时间，直接锁定将来时。",
  commonMistakes:[
    "will 后面加了 to 或加 s，如 will to go / will goes（错，will 后必须动词原形）。",
    "be going to 忘了变 be，如 I going to...（缺 am）。"
  ],
  basicQuestions:[
    {question:"We ____ a meeting next Monday.", options:["have","had","will have","are having"], correct:2, explanation:"next Monday 是将来时间，用 will + 动词原形 have。", type:"基础题"},
    {question:"Look at the clouds! It ____ rain.", options:["will","is going to","was","would"], correct:1, explanation:"有迹象（乌云）表明要下雨，用 be going to。", type:"基础题"},
    {question:"I ____ you with your homework if I am free.", options:["help","helped","will help","have helped"], correct:2, explanation:"if 引导的条件句，主句用将来时 will help，从句用一般现在时 am free（主将从现）。", type:"基础题"}
  ],
  examQuestions:[
    {question:"If it ____ tomorrow, we will put off the sports meeting.", options:["rains","will rain","rained","is raining"], correct:0, explanation:"if 条件句“主将从现”：主句 will put off 是将来时，从句用一般现在时 rains。", type:"成考题"},
    {question:"He said he ____ me a gift the next week.", options:["will give","would give","gives","has given"], correct:1, explanation:"主句 said 是过去时，从句的将来要跟着变成过去的将来 would give（时态呼应）。", type:"成考题"}
  ]
},

{
  id:"g05", title:"过去完成时", category:"时态", frequency:8, level:2,
  explanation:"表示“过去的过去”——在某个过去动作之前就已经做完的事。结构：had + 过去分词。常用在：by last year/by the end of...（到那时为止）、when/before 引导的句子里，强调一个动作比另一个过去动作更早。",
  examples:[
    {en:"When I arrived at the station, the train had left.", zh:"我到车站时，火车已经开走了。"},
    {en:"By 2020, he had finished college.", zh:"到2020年，他已经大学毕业了。"}
  ],
  breakdown:"句子里有两个过去动作：arrived（到）和 left（走）。火车走在“到”之前，是“过去的过去”，所以用 had left。by 加过去时间点，几乎必用过去完成时。",
  examTip:"成考考点很固定：看到 by + 过去时间（by last month/by the end of 2019），直接选 had + 过去分词。",
  commonMistakes:[
    "只有一个过去动作却硬用过去完成时。记住：必须有“另一个更晚的过去动作”作参照。",
    "by 后面是现在时间（by now）却用 had，那时应该用现在完成时 has/have done。"
  ],
  basicQuestions:[
    {question:"When she got to the cinema, the film ____.", options:["started","has started","had started","starts"], correct:2, explanation:"电影开始在“她到”之前，是过去的过去，用 had started。", type:"基础题"},
    {question:"By the end of last term, we ____ 1,000 English words.", options:["have learned","had learned","learned","learn"], correct:1, explanation:"By the end of last term 是过去时间点，用过去完成时 had learned。", type:"基础题"}
  ],
  examQuestions:[
    {question:"He told me that he ____ the book twice before.", options:["read","has read","had read","would read"], correct:2, explanation:"told 是过去时，“读书”发生在 told 之前，且有 before，用过去完成时 had read。", type:"成考题"},
    {question:"The meeting ____ for ten minutes when we finally arrived.", options:["has begun","had been on","has been on","had begun"], correct:1, explanation:"arrived 是过去，会议开始在之前；且 for ten minutes 要和可持续的 be on 连用，不能用短暂动词 begin，所以选 had been on。", type:"成考题"}
  ]
},

{
  id:"g06", title:"现在进行时与过去进行时", category:"时态", frequency:6, level:1,
  explanation:"表示“正在做”的动作。现在进行时：am/is/are + doing（现在正在）；过去进行时：was/were + doing（过去某个时刻正在）。标志词：now、at the moment（现在）；at eight yesterday、this time yesterday（过去某时）。",
  examples:[
    {en:"I am reading a book now.", zh:"我现在正在看书。"},
    {en:"At eight last night, they were watching TV.", zh:"昨晚八点他们正在看电视。"}
  ],
  breakdown:"找时间：now → 现在进行时 am reading；at eight last night → 过去进行时 were watching。结构都是 be + doing，be 跟着时间和人称变。",
  examTip:"成考常考“过去进行时 + when + 一般过去时”：一个长动作正在进行，突然被一个短动作打断，如 I was reading when the phone rang。",
  commonMistakes:[
    "忘了 be 动词，如 I reading（错，要 I am reading）。",
    "现在进行时和一般现在时混：I read now 不对，要 I am reading now。"
  ],
  basicQuestions:[
    {question:"Be quiet! The baby ____.", options:["sleeps","slept","is sleeping","sleep"], correct:2, explanation:"Be quiet 提示现在正在发生，用现在进行时 is sleeping。", type:"基础题"},
    {question:"She ____ a letter when the light went out.", options:["wrote","was writing","writes","has written"], correct:1, explanation:"灯灭时她正在写信，过去某刻正在进行，用过去进行时 was writing。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The police asked what the witness ____ at ten o'clock last night.", options:["was doing","is doing","did","does"], correct:0, explanation:"asked 是过去时，at ten last night 是过去具体时刻，问当时正在做什么，用过去进行时 was doing。", type:"成考题"},
    {question:"My brother often ____ his homework while I ____ music.", options:["does;listen to","did;listened to","is doing;am listening to","does;am listening to"], correct:3, explanation:"often 表习惯主句用一般现在时 does；while 强调两个同时进行的动作，从句用进行时 am listening to。", type:"成考题"}
  ]
},

// ===================== 非谓语 =====================
{
  id:"g07", title:"非谓语：不定式与动名词", category:"非谓语", frequency:9, level:3,
  explanation:"一个句子只能有一个谓语动词，再有别的动词就得“变个形”。不定式 to do（表目的、想要、还没做）；动名词 doing（当名词用，表习惯、已经做过）。成考最爱考“某个动词后面接 to do 还是 doing”。背口诀：想要做、答应做、希望做——用 to do；喜欢做完、享受练习、避免错过——用 doing。",
  examples:[
    {en:"I want to learn English well.", zh:"我想学好英语。"},
    {en:"Enjoy reading before going to bed.", zh:"睡前喜欢读书。"},
    {en:"He finished doing his homework.", zh:"他做完了作业。"}
  ],
  breakdown:"句子主干是 I want...，want 是谓语，后面再出现动词 learn 就要变 to do。enjoy/finish 这类动词后面只能接 doing。判断法：先找句子唯一的谓语，第二个动词看前面那个词的习惯搭配。",
  examTip:"必背搭配：① 接 to do：want/hope/wish/decide/plan/agree/ refuse/learn/promise；② 接 doing：enjoy/finish/practice/mind/avoid/keep/ suggest/give up/have fun。③ 意思不同：stop to do（停下来去做别的） vs stop doing（停下正在做的）；remember to do（记得要做） vs remember doing（记得做过）。",
  commonMistakes:[
    "enjoy/finish/practice 后面加 to do（错，必须 doing）。",
    "stop to do 和 stop doing 意思搞反。",
    "to 当成介词后面又加动词原形，如 look forward to see（错，to 是介词，要 seeing）。"
  ],
  basicQuestions:[
    {question:"I enjoy ____ books in my free time.", options:["read","to read","reading","reads"], correct:2, explanation:"enjoy 后面只能接动名词 doing，选 reading。", type:"基础题"},
    {question:"She decided ____ abroad for further study.", options:["go","to go","going","goes"], correct:1, explanation:"decide 后面接不定式 to do，选 to go。", type:"基础题"},
    {question:"Please stop ____ and listen to me.", options:["talk","to talk","talking","talked"], correct:2, explanation:"stop doing 表示“停下正在做的事”，这里让对方别说话了，用 talking。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The boy stopped ____ a rest because he felt tired.", options:["taking","to take","take","taken"], correct:1, explanation:"stop to do 表示“停下来去做另一件事”——停下来去休息，用 to take。", type:"成考题"},
    {question:"I still remember ____ my first teacher in primary school many years ago.", options:["to meet","meeting","meet","met"], correct:1, explanation:"remember doing 表示“记得做过某事”（多年前见过，是过去的事），用 meeting；remember to do 是“记得要去做”（还没做）。", type:"成考题"},
    {question:"She was looking forward to ____ from her boyfriend.", options:["hear","hearing","heard","be heard"], correct:1, explanation:"look forward to 中的 to 是介词，后面接名词或动名词，用 hearing。", type:"成考题"}
  ]
},

{
  id:"g08", title:"非谓语：分词作定语和状语", category:"非谓语", frequency:8, level:3,
  explanation:"现在分词 doing 表示“主动、正在进行”；过去分词 done 表示“被动、已经完成”。放名词前或后修饰它：the sleeping baby（睡着的宝宝，主动），the broken cup（碎了的杯子，被打碎）。作状语时：Seeing the teacher, the students stood up（学生看见老师，主动用 seeing）。",
  examples:[
    {en:"The man standing there is my uncle.", zh:"站在那儿的那个男人是我叔叔。"},
    {en:"The book written by Lu Xun is popular.", zh:"鲁迅写的那本书很受欢迎。"},
    {en:"Hearing the news, she cried.", zh:"听到消息，她哭了。"}
  ],
  breakdown:"判断用 doing 还是 done，看它和被修饰词的关系：man 和 stand 是“人站”——主动，用 standing；book 和 write 是“书被写”——被动，用 written。状语同理：she 和 hear 是“她听到”——主动，用 hearing。",
  examTip:"成考常考分词作定语放名词后，以及分词作状语放句首。口诀：主动用 doing，被动用 done。",
  commonMistakes:[
    "分不清主动被动，把“被打碎的杯子”写成 the breaking cup（错，要 broken）。",
    "分词作状语时逻辑主语和句子主语不一致，如 Looking out of the window, the tree is tall（错，look 的人得是人，不是树）。"
  ],
  basicQuestions:[
    {question:"The ____ glass is on the floor. Be careful.", options:["breaking","broken","break","broke"], correct:1, explanation:"杯子是“被打碎”的，用过去分词 broken。", type:"基础题"},
    {question:"Do you know the boy ____ under the tree?", options:["standing","stood","stand","to stand"], correct:0, explanation:"男孩和“站”是主动关系，用现在分词 standing。", type:"基础题"}
  ],
  examQuestions:[
    {question:"____ from the top of the hill, the city looks very beautiful.", options:["Seeing","Seen","To see","See"], correct:1, explanation:"句子主语 the city 是“被看”的，和 see 是被动关系，用过去分词 Seen。", type:"成考题"},
    {question:"The question ____ at the meeting yesterday is very important.", options:["discussed","discussing","to discuss","discuss"], correct:0, explanation:"问题是“被讨论”的，且有 yesterday，用过去分词 discussed 作后置定语。", type:"成考题"}
  ]
},

// ===================== 语态 =====================
{
  id:"g09", title:"被动语态", category:"语态", frequency:9, level:2,
  explanation:"主语是动作的承受者时用被动。比如“英语被全世界说”。结构统一是：be + 过去分词。各种时态只是 be 跟着变：现在 am/is/are done；过去 was/were done；将来 will be done；情态动词 can/must be done。by + 动作发出者可以省略。",
  examples:[
    {en:"English is spoken all over the world.", zh:"全世界都说英语。"},
    {en:"The bridge was built in 1990.", zh:"这座桥建于1990年。"},
    {en:"The work must be finished today.", zh:"这工作必须今天完成。"}
  ],
  breakdown:"主动句 People speak English. 把宾语 English 提前当主语，动词变 be + done：English is spoken (by people)。by people 不必要就删掉。判断被动：主语是“被做”的，且句子没说谁做的。",
  examTip:"成考高频！看到主语是物、后面跟动词，先想是不是被动。考点：① 各时态被动结构；② 主动表被动的特殊词（The book sells well 这本书好卖，不用被动）；③ 被动里 by 的用法。",
  commonMistakes:[
    "漏掉 be 动词，如 English spoken（错，要 is spoken）。",
    "过去分词写成过去式，如 was build（错，要 was built）。",
    "该用主动却用被动，如 The book is sold well（错，sell well 用主动）。"
  ],
  basicQuestions:[
    {question:"The letter ____ yesterday.", options:["wrote","was written","is written","writes"], correct:1, explanation:"信是“被写”的，yesterday 是过去，用 was written。", type:"基础题"},
    {question:"Rice ____ in the south of China.", options:["grows","is grown","grew","are grown"], correct:1, explanation:"水稻是“被种植”的，客观事实用一般现在时被动 is grown。", type:"基础题"},
    {question:"The homework must ____ before five.", options:["finish","be finished","finished","finishing"], correct:1, explanation:"情态动词 must 后接 be + 过去分词，用 be finished。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The new hospital ____ by the end of next year.", options:["will build","will be built","is built","has been built"], correct:1, explanation:"医院是“被建”，by the end of next year 是将来，用将来时被动 will be built。", type:"成考题"},
    {question:"The window ____ while the boys were playing football.", options:["broke","was broken","is broken","breaks"], correct:1, explanation:"窗户是“被打碎”的，过去发生，用一般过去时被动 was broken。", type:"成考题"},
    {question:"This kind of cloth ____ well and sells out fast.", options:["is washed","washes","has washed","is washing"], correct:1, explanation:"wash/sell 表示物的属性（好洗/好卖）时用主动形式表被动含义，用 washes。", type:"成考题"}
  ]
},

// ===================== 从句 =====================
{
  id:"g10", title:"定语从句", category:"从句", frequency:9, level:2,
  explanation:"用一个小句子去修饰前面的名词（叫“先行词”）。技巧：先把中间那截修饰部分划掉，找出主句“谁 + 做什么”，再把修饰放回去。选关系词看先行词：人用 who/that，物用 which/that，“谁的”用 whose，地点用 where，时间用 when，原因用 why。",
  examples:[
    {en:"The book that I bought yesterday is very interesting.", zh:"我昨天买的那本书很有趣。"},
    {en:"The man who is standing there is my teacher.", zh:"站在那里的那个人是我老师。"},
    {en:"This is the house where I lived ten years ago.", zh:"这就是我十年前住过的房子。"}
  ],
  breakdown:"拿第一句练手：先找主句，把 that I bought yesterday 这截拿掉，剩 The book is very interesting（书很有趣）。that 指代 book（物），在从句里做 bought 的宾语，所以用 that/which 都行。第三句 house 是地点，且从句 I lived 不缺主语宾语，用 where。",
  examTip:"成考阅读长句一大半是定语从句撑起来的。语法题考点：① 选 who/which/that/whose/where/when；② 介词+which（in which=where）；③ 只能用 that 的情况（先行词被 all/only/最高级/序数词修饰）。",
  commonMistakes:[
    "看到地点就用 where，但如果先行词在从句里作主语或宾语，得用 which/that，如 the factory which we visited。",
    "whose 和 who's 混淆；whose 是“谁的”，后面跟名词。",
    "逗号后面不能用 that（非限制性定语从句用 which）。"
  ],
  basicQuestions:[
    {question:"The girl ____ is singing in the next room is my sister.", options:["which","who","whom","whose"], correct:1, explanation:"先行词 the girl 是人，且在从句中作主语，用 who。", type:"基础题"},
    {question:"This is the house ____ we lived last year.", options:["which","that","where","when"], correct:2, explanation:"先行词 house 是地点，从句 we lived 不缺主宾，用 where（=in which）。", type:"基础题"},
    {question:"I like the book ____ was written by Mo Yan.", options:["who","which","whom","whose"], correct:1, explanation:"先行词 book 是物，在从句中作主语，用 which/that。", type:"基础题"}
  ],
  examQuestions:[
    {question:"Do you know the man ____ son won the first prize?", options:["who","whose","which","whom"], correct:1, explanation:"“这个男人的儿子”，表所属关系，用 whose 修饰 son。", type:"成考题"},
    {question:"We shouldn't go out alone, ____ is very dangerous.", options:["that","which","what","who"], correct:1, explanation:"逗号后面是非限制性定语从句，不能用 that，用 which 指代前面整句话。", type:"成考题"},
    {question:"This is the best film ____ I have ever seen.", options:["which","that","what","it"], correct:1, explanation:"先行词被最高级 the best 修饰，只能用 that，不能用 which。", type:"成考题"}
  ]
},

{
  id:"g11", title:"宾语从句", category:"从句", frequency:8, level:2,
  explanation:"用一个句子当动词的宾语。引导词：that（说的内容，可省略）、if/whether（是否）、what/when/where/why/how（特殊疑问）。铁律：① 从句永远用陈述语序（主语+动词），不能用疑问倒装；② 主句过去时，从句时态跟着往过去退一步。",
  examples:[
    {en:"I think (that) English is important.", zh:"我认为英语很重要。"},
    {en:"She asked me where I lived.", zh:"她问我住在哪儿。"},
    {en:"I don't know if he will come.", zh:"我不知道他会不会来。"}
  ],
  breakdown:"主句 I think / She asked me 后面跟的就是宾语从句。注意 where I lived 是陈述语序（我住在哪），不能写成 where did I live。主句 asked 是过去时，从句 live 要退成 lived。",
  examTip:"成考两大考点：① 语序——宾语从句必须陈述语序，看到选项里倒装的先排除；② 时态呼应——主句过去，从句也得是过去某时态。",
  commonMistakes:[
    "用疑问语序，如 I don't know where is he（错，要 where he is）。",
    "主句过去时从句还用现在时，如 He asked what is your name（错，要 was）。",
    "if 和 whether 在 or not 前只能用 whether。"
  ],
  basicQuestions:[
    {question:"I don't know ____ he will come tomorrow.", options:["that","if","what","which"], correct:1, explanation:"“是否会来”用 if/whether 引导宾语从句。", type:"基础题"},
    {question:"Can you tell me ____?", options:["where is the station","where the station is","the station is where","is where the station"], correct:1, explanation:"宾语从句用陈述语序：where + 主语 the station + 动词 is。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The teacher told us that light ____ much faster than sound.", options:["traveled","travels","would travel","had traveled"], correct:1, explanation:"虽然主句 told 是过去时，但从句是客观真理，时态不变，仍用一般现在时 travels。", type:"成考题"},
    {question:"I wonder ____ or not he will attend the meeting.", options:["if","whether","that","what"], correct:1, explanation:"后面有 or not 时只能用 whether，不能用 if。", type:"成考题"},
    {question:"He asked me how long ____ in Beijing.", options:["I had stayed","had I stayed","I have stayed","did I stay"], correct:0, explanation:"宾语从句用陈述语序，排除 B、D；主句 asked 是过去时，从句用过去完成时 I had stayed。", type:"成考题"}
  ]
},

{
  id:"g12", title:"主语从句与表语从句", category:"从句", frequency:6, level:3,
  explanation:"用一个句子当主语，叫主语从句；用一个句子当系动词（be）后面的表语，叫表语从句。开头常用 what/whether/that。主语从句放句首常显得头重脚轻，英语常用 it 作形式主语，把真主语甩到后面：It is important that we learn English well。",
  examples:[
    {en:"What he said is true.", zh:"他说的话是真的。"},
    {en:"The problem is who can help us.", zh:"问题是谁能帮我们。"},
    {en:"It is necessary that we (should) learn grammar.", zh:"我们学语法是必要的。"}
  ],
  breakdown:"What he said 整个做主语（他说的话），谓语是 is。第二句 The problem is...，is 后面的 who can help us 就是表语从句。第三句 It 是假主语，真正的主语是 that 后面那一串。",
  examTip:"成考考主语从句主要考 what 和 that 的区别：that 在从句里不充当成分，只起连接作用；what 在从句里要当主语或宾语。看从句缺不缺成分，缺就用 what。",
  commonMistakes:[
    "主语从句缺成分却用 that，如 That he needs is more time（错，要 What he needs）。",
    "主语从句谓语动词误用复数，如 What he said are...（错，从句整体作主语用单数 is）。"
  ],
  basicQuestions:[
    {question:"____ he will come is still unknown.", options:["What","Whether","Which","Who"], correct:1, explanation:"“他是否会来还不知道”，表是否且放句首主语从句，用 Whether。", type:"基础题"},
    {question:"That is ____ he was late.", options:["what","why","which","who"], correct:1, explanation:"这就是他迟到的原因，表语从句用 why。", type:"基础题"}
  ],
  examQuestions:[
    {question:"____ makes this shop different is that it offers more service.", options:["What","That","Which","Whether"], correct:0, explanation:"主语从句 ____ makes... 缺主语（什么使得），要用 What 充当；that 不在从句里当成分。", type:"成考题"},
    {question:"It is suggested that the meeting ____ put off.", options:["is","was","be","will be"], correct:2, explanation:"It is suggested that... 句型中，that 从句用虚拟语气 (should) be，should 可省，所以选 be。", type:"成考题"}
  ]
},

{
  id:"g13", title:"状语从句：时间、条件、原因", category:"从句", frequency:8, level:2,
  explanation:"用一个句子交代主句发生的时间、条件或原因。时间：when（当…时）、while（在…期间）、before（在…前）、after（在…后）、as soon as（一…就）、until（直到）。条件：if（如果）、unless（除非=if not）。原因：because（因为）、since（既然）、as（由于）。重点：时间/条件从句“主将从现”——主句将来，从句用一般现在时表将来。",
  examples:[
    {en:"I will call you when I arrive.", zh:"我到了就给你打电话。"},
    {en:"You will be late unless you hurry up.", zh:"你不快点就要迟到了。"},
    {en:"Because he was ill, he didn't go to school.", zh:"因为生病，他没去上学。"}
  ],
  breakdown:"when I arrive 是时间状语从句，虽然说的是将来，但从句要用一般现在时 arrive（不能用 will arrive）。unless = if...not，翻译成“如果不/除非”。",
  examTip:"成考最爱考“主将从现”——主句 will，从句不能用 will，要用一般现在时。另一个高频：not...until（直到…才）。",
  commonMistakes:[
    "时间/条件从句里用 will，如 when I will arrive（错，要 arrive）。",
    "because 和 so 同时用（中文“因为…所以…”英语只用其一）。",
    "until 前面用短暂动词要加 not，如 He didn't go to bed until 12.（go 是短暂动词）。"
  ],
  basicQuestions:[
    {question:"I will go with you if it ____ fine tomorrow.", options:["is","will be","was","are"], correct:0, explanation:"if 条件句主将从现，从句用一般现在时 is。", type:"基础题"},
    {question:"I didn't go to bed ____ I finished my homework.", options:["when","until","since","while"], correct:1, explanation:"not...until 表示“直到…才”，固定搭配。", type:"基础题"},
    {question:"____ it was raining, we stayed at home.", options:["Because","But","So","Though"], correct:0, explanation:"因为下雨所以待在家，表原因用 Because。", type:"基础题"}
  ],
  examQuestions:[
    {question:"She will telephone you as soon as she ____ back.", options:["will come","comes","came","is coming"], correct:1, explanation:"as soon as 引导时间状语从句，主将从现，用一般现在时 comes。", type:"成考题"},
    {question:"You won't pass the exam ____ you work harder.", options:["if","unless","when","because"], correct:1, explanation:"“你不会通过考试，除非你更努力”= if you don't work harder，用 unless。", type:"成考题"},
    {question:"____ I really don't like art, I find his work impressive.", options:["While","As","If","Because"], correct:0, explanation:"while 放句首可表“尽管/虽然”，相当于 although，引导让步；本句是让步关系。", type:"成考题"}
  ]
},

{
  id:"g14", title:"状语从句：让步、目的、结果、比较", category:"从句", frequency:7, level:2,
  explanation:"让步：though/although（虽然）、even if/even though（即使）——注意英语里“虽然…但是…”不能 though 和 but 同时用。目的：so that（为了，后常接 can/could）。结果：so...that...（如此…以至于）、such...that...。比较：than（比）、as...as（和…一样）。",
  examples:[
    {en:"Although he is young, he knows a lot.", zh:"他虽然年轻，但懂得很多。"},
    {en:"He got up early so that he could catch the bus.", zh:"他早起为了赶上公交。"},
    {en:"It is so hot that we can't sleep.", zh:"天太热了，我们睡不着。"}
  ],
  breakdown:"so + 形容词/副词 + that；such + (a/an) + 形容词 + 名词 + that。记：so 后面直接跟形容词（so hot），such 后面跟名词短语（such a hot day）。",
  examTip:"成考高频区分 so 和 such：so hot / such a hot day。另：though/although 和 but 不能连用，但 though 可和 yet 连用。",
  commonMistakes:[
    "although 和 but 一起用，如 Although he is young, but...（去掉其一）。",
    "so 和 such 用错：so a good book（错，要 such a good book 或 so good a book）。",
    "as...as 中间用比较级，如 as better as（错，中间用原级 as good as）。"
  ],
  basicQuestions:[
    {question:"____ he is rich, he is not happy.", options:["Because","Although","If","When"], correct:1, explanation:"虽然有钱但不快乐，表让步用 Although。", type:"基础题"},
    {question:"It was ____ a difficult problem that nobody could work it out.", options:["so","such","very","too"], correct:1, explanation:"a difficult problem 是名词短语，用 such...that。", type:"基础题"},
    {question:"He runs as ____ as his brother.", options:["fast","faster","fastest","more fast"], correct:0, explanation:"as...as 中间用形容词/副词原级 fast。", type:"基础题"}
  ],
  examQuestions:[
    {question:"He was ____ tired ____ he fell asleep as soon as he lay down.", options:["too;to","so;that","such;that","enough;that"], correct:1, explanation:"tired 是形容词，so + adj + that 从句，选 so;that。", type:"成考题"},
    {question:"____ hard he tried, he still couldn't open the door.", options:["However","Whatever","Whoever","Whenever"], correct:0, explanation:"however + 形容词/副词 + 主语 + 谓语 = no matter how，“无论多努力”。", type:"成考题"}
  ]
},

// ===================== 词法 =====================
{
  id:"g15", title:"情态动词", category:"词法", frequency:8, level:2,
  explanation:"can/could（能、会）、may/might（可以、可能）、must（必须、一定）、should/ought to（应该）、have to（不得不）、need（需要）、shall/will。情态动词后面永远接动词原形。重要用法：① must 表推测“一定”，否定推测用 can't（不可能）；② must 问的否定回答用 needn't（不必），不用 mustn't；③ have to 有人称时态变化。",
  examples:[
    {en:"You must finish it today.", zh:"你必须今天完成。"},
    {en:"He can't be at home. The door is locked.", zh:"他不可能在家，门锁着呢。"},
    {en:"— Must I go now? — No, you needn't.", zh:"——我必须现在走吗？——不，不必。"}
  ],
  breakdown:"情态动词 + 动词原形，没有人称变化（he can 不是 he cans）。must be 是“一定是”的肯定推测；否定推测“不可能是”是 can't be。",
  examTip:"成考高频：① must/can't 表推测；② mustn't（禁止）和 needn't（不必）的区别；③ 情态动词+have done 表对过去的推测（must have done 一定做过；can't have done 不可能做过）。",
  commonMistakes:[
    "情态动词后加 to 或加 s，如 must to go / he cans（错）。",
    "must 的否定回答说成 mustn't（错，要 needn't）。",
    "把否定推测说成 mustn't be（错，要 can't be）。"
  ],
  basicQuestions:[
    {question:"You ____ stop when the light is red.", options:["can","must","may","might"], correct:1, explanation:"红灯必须停，表必须用 must。", type:"基础题"},
    {question:"— Must I hand in the report today? — No, you ____.", options:["mustn't","can't","needn't","may not"], correct:2, explanation:"must 开头的一般疑问句，否定回答用 needn't（不必）。", type:"基础题"},
    {question:"The light is on. Someone ____ be in the room.", options:["can't","must","need","would"], correct:1, explanation:"灯亮着，推测“一定”有人，用 must。", type:"基础题"}
  ],
  examQuestions:[
    {question:"She ____ have missed the train, for she arrived at the station very late.", options:["can","must","should","need"], correct:1, explanation:"for 引出原因（到车站很晚），推测她一定误了车，must have done。", type:"成考题"},
    {question:"You ____ have told him the news; he already knew it.", options:["needn't","mustn't","can't","should"], correct:0, explanation:"他已经知道了，所以“你本不必告诉他”，用 needn't have done。", type:"成考题"},
    {question:"He ____ have completed his work; otherwise, he wouldn't be enjoying himself by the seaside.", options:["should","must","wouldn't","can't"], correct:1, explanation:"他现在在海边玩，推测他一定完成了工作，must have done。", type:"成考题"}
  ]
},

{
  id:"g16", title:"主谓一致", category:"词法", frequency:7, level:2,
  explanation:"谓语动词的单复数要跟着主语走。口诀：单数主语用单数动词，复数主语用复数动词。几个易错点：① and 连接两个并列主语一般用复数，但指同一人/物/概念用单数（The writer and teacher is... 这个作家兼老师）；② with/together with/as well as 连接的不算，看真正的主语；③ 不定代词 everyone/somebody/nothing/each 作主语用单数；④ 时间、金钱、距离作整体看用单数。",
  examples:[
    {en:"The teacher with two students is coming.", zh:"老师和两个学生正过来。"},
    {en:"Everyone is here.", zh:"大家都到了。"},
    {en:"Ten years is a long time.", zh:"十年是很长的时间。"}
  ],
  breakdown:"找真正主语：The teacher with two students，with 后面是附加成分，真正主语是 the teacher（单数），用 is。Everyone/Each/Somebody 永远当单数看。",
  examTip:"成考常考：① together with/as well as/except 引导的短语不影响主语单复数；② 集体名词 family/class/team 强调整体用单数，强调成员用复数；③ there be 句型就近一致。",
  commonMistakes:[
    "被 together with 后的复数名词带跑，误选复数动词。",
    "everyone/somebody 后误用复数 are（错，要用 is）。",
    "there be 不就近，如 There is a pen and two books（就近 a pen 用 is，反而对；There are two books and a pen 用 are）。"
  ],
  basicQuestions:[
    {question:"Nobody ____ allowed to smoke here.", options:["is","are","were","be"], correct:0, explanation:"nobody 作主语当单数看，用 is。", type:"基础题"},
    {question:"The singer and dancer ____ invited to the party.", options:["is","are","were","have been"], correct:0, explanation:"两个名词共用一个冠词 the，指同一个人（歌舞演员一身兼），用单数 is。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The teacher, together with his students, ____ invited to the meeting.", options:["was","were","are","have been"], correct:0, explanation:"真正主语是 The teacher（单数），together with... 不影响，用单数 was。", type:"成考题"},
    {question:"Either you or he ____ responsible for it.", options:["is","are","were","be"], correct:0, explanation:"either...or... 就近一致，离动词近的是 he（单数），用 is。", type:"成考题"},
    {question:"Ten miles ____ a long distance to walk.", options:["is","are","were","have been"], correct:0, explanation:"ten miles 看作一个整体距离，用单数 is。", type:"成考题"}
  ]
},

{
  id:"g17", title:"形容词与副词：比较级和最高级", category:"词法", frequency:8, level:2,
  explanation:"两者比较用比较级（+than），三者及以上用最高级（the + -est）。短词加 er/est（tall→taller→tallest）；长词加 more/most（more beautiful）。不规则：good/well→better→best；bad/badly→worse→worst；many/much→more→most；little→less→least；far→farther/further。句型：as + 原级 + as（和…一样）；not as/so...as（不如）；the + 比较级..., the + 比较级...（越…越…）。",
  examples:[
    {en:"Tom is taller than Jack.", zh:"汤姆比杰克高。"},
    {en:"She is the tallest in our class.", zh:"她是我们班最高的。"},
    {en:"The more you read, the more you know.", zh:"你读得越多，知道得越多。"}
  ],
  breakdown:"看到 than 就用比较级 taller；看到 in/of 范围（全班）用最高级 the tallest。比较级前可用 much/a lot/even 修饰（much taller），但不能用 very。",
  examTip:"成考高频：① 比较级和最高级的不规则变化；② 比较级前用 much/even/far 修饰；③ the more...the more... 句型；④ 比较对象要对等（that of the weather in Beijing vs the weather in Guangzhou）。",
  commonMistakes:[
    "比较级前加 very，如 very taller（错，用 much taller）。",
    "两者比较用最高级，如 He is the taller of the two（其实两者用 the+比较级也对，但三者才用最高级）。",
    "重复比较，如 more taller（错，taller 已经是比较级）。",
    "比较对象不一致，如 His hair is longer than Mary（错，要 than Mary's）。"
  ],
  basicQuestions:[
    {question:"This box is ____ than that one.", options:["heavy","heavier","heaviest","the heaviest"], correct:1, explanation:"than 是两者比较，用比较级 heavier。", type:"基础题"},
    {question:"She sings ____ in her class.", options:["well","better","best","good"], correct:2, explanation:"in her class 是范围，三者以上用最高级 best。", type:"基础题"},
    {question:"He is much ____ than I thought.", options:["strong","stronger","strongest","more strong"], correct:1, explanation:"than 用比较级；much 修饰比较级 stronger。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The weather in Beijing is colder than ____ in Guangzhou in winter.", options:["it","that","those","what"], correct:1, explanation:"比较对象要对等，用 that 指代不可数名词 the weather，避免重复。", type:"成考题"},
    {question:"____ you practice, ____ progress you will make.", options:["More; more","The more; the more","The more; more","More; the more"], correct:1, explanation:"the + 比较级, the + 比较级 句型，“越…越…”。", type:"成考题"},
    {question:"Of the two shirts, I chose ____ one.", options:["expensive","more expensive","the more expensive","most expensive"], correct:2, explanation:"两者中“较…的那一个”要用 the + 比较级（the more expensive of the two）。", type:"成考题"}
  ]
},

{
  id:"g18", title:"介词", category:"词法", frequency:7, level:2,
  explanation:"介词表示时间、地点、方向、方式。时间：at + 时刻（at 8 o'clock），on + 某天/星期（on Monday, on May 1st），in + 月/年/季节/上午下午（in May, in 2020, in the morning）。地点：at + 小地点（at the door），in + 大地点/内部（in the room, in Beijing），on + 表面（on the wall）。固定搭配要单独背：listen to, look for, wait for, arrive in/at, be good at, interested in。",
  examples:[
    {en:"We have lunch at twelve.", zh:"我们十二点吃午饭。"},
    {en:"He was born in 2000.", zh:"他出生于2000年。"},
    {en:"She is good at English.", zh:"她擅长英语。"}
  ],
  breakdown:"时间介词：点用 at，天用 on，月年季节用 in。地点介词：小地点 at，大地点或内部 in，表面 on。剩下的就靠背固定搭配。",
  examTip:"成考介词题多考固定搭配（动词+介词、形容词+介词）。重点背：arrive in + 大城市/ arrive at + 小地点；listen to; depend on; be afraid of; be interested in; be proud of。",
  commonMistakes:[
    "in the morning 和 on Monday morning 混淆（具体某天早上用 on）。",
    "arrive 后面漏介词或用错，如 arrive Beijing（错，要 arrive in Beijing）。",
    "listen 后面 to 丢了。"
  ],
  basicQuestions:[
    {question:"We usually get up ____ six ____ the morning.", options:["at;in","in;at","on;in","at;on"], correct:0, explanation:"six 是钟点用 at；the morning 泛指上午用 in。", type:"基础题"},
    {question:"She is interested ____ music.", options:["at","on","in","of"], correct:2, explanation:"be interested in 是固定搭配“对…感兴趣”。", type:"基础题"},
    {question:"He arrived ____ Shanghai yesterday.", options:["at","in","to","/"], correct:1, explanation:"上海是大城市，arrive 后用 in。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The meeting was put off because ____ the bad weather.", options:["of","for","to","with"], correct:0, explanation:"because of + 名词短语；because 后接句子。这里 the bad weather 是名词，用 of。", type:"成考题"},
    {question:"I am looking forward ____ you again.", options:["to see","to seeing","seeing","for seeing"], correct:1, explanation:"look forward to 中的 to 是介词，后面接动名词 seeing。", type:"成考题"}
  ]
},

{
  id:"g19", title:"固定搭配与短语动词", category:"其他", frequency:7, level:2,
  explanation:"英语很多意思不靠单个词，靠“动词+介词/副词”的短语动词。常见：get up（起床）、get on/along with（相处）、give up（放弃）、look after（照顾）、look for（寻找）、look forward to（期待）、put on（穿上）、take off（脱下/起飞）、turn on/off（开/关）、run out of（用完）、make up（编造/化妆）、set up（建立）。这类题只能靠背+语感。",
  examples:[
    {en:"She looked after her sister yesterday.", zh:"她昨天照顾了她妹妹。"},
    {en:"Never give up your dream.", zh:"永远别放弃梦想。"},
    {en:"The plane took off on time.", zh:"飞机准时起飞了。"}
  ],
  breakdown:"做短语动词题，先把四个选项的意思带进句子读一遍，哪个通顺选哪个。别光看动词，要看后面的介词/副词合起来的意思。",
  examTip:"成考单选每年必有几道短语动词辨析。高频：give up/give in/give away; look up/look for/look after/look out; take up/take off/take over; put up/put off/put on。",
  commonMistakes:[
    "look for（寻找，强调动作）和 find（找到，强调结果）混用。",
    "give up（放弃）和 give in（让步、屈服）意思弄混。",
    "短语动词后接代词要放中间，如 turn it on（不能 turn on it）。"
  ],
  basicQuestions:[
    {question:"My mother is ill. I have to ____ her at home.", options:["look for","look after","look at","look up"], correct:1, explanation:"妈妈病了需要“照顾”，用 look after。", type:"基础题"},
    {question:"It's cold outside. ____ your coat.", options:["Put on","Put up","Put off","Put down"], correct:0, explanation:"外面冷，“穿上”外套，用 Put on。", type:"基础题"}
  ],
  examQuestions:[
    {question:"Don't ____ until tomorrow what can be done today.", options:["put up","put off","put on","put out"], correct:1, explanation:"今天能做的事别“推迟”到明天，put off = 推迟。", type:"成考题"},
    {question:"The fire ____ after the firefighters arrived.", options:["put out","was put out","put off","was put off"], correct:1, explanation:"火是“被扑灭”的，用被动 be put out；put off 是推迟，不对。", type:"成考题"}
  ]
},

{
  id:"g20", title:"冠词", category:"词法", frequency:6, level:1,
  explanation:"冠词三个：a/an（一个，泛指），the（这个/那个，特指）。a 用在辅音音素前（a book, a university），an 用在元音音素前（an apple, an hour）。the 特指双方都知道的、世上独一无二的（the sun）、序数词和最高级前（the first, the best）。复数泛指、不可数泛指、三餐/球类/学科/头衔前一般不加冠词。",
  examples:[
    {en:"I have an apple and a banana.", zh:"我有一个苹果和一根香蕉。"},
    {en:"The sun rises in the east.", zh:"太阳从东方升起。"},
    {en:"He goes to school by bus.", zh:"他坐公交上学。"}
  ],
  breakdown:"第一次提到用 a/an，再次提到或特指用 the。看后面单词发音：元音音素开头用 an，不是看字母（an hour，h 不发音）。",
  examTip:"成考考点：① a 和 an 的选择（看发音不看字母）；② 固定搭配不加冠词（go to school 上学、play basketball 打篮球、have breakfast）；③ the + 形容词表一类人（the rich 富人）。",
  commonMistakes:[
    "看到元音字母就用 an，如 a useful book 写成 an useful book（u 发 /ju:/，用 a）。",
    "球类/三餐前加 the，如 play the basketball（错，不加）。",
    "独一无二事物前忘 the，如 sun rises（错，要 the sun）。"
  ],
  basicQuestions:[
    {question:"There is ____ old man under the tree. ____ old man is my grandpa.", options:["an;The","a;The","the;A","an;A"], correct:0, explanation:"第一次提到用 an（old 元音开头），再次提到特指用 the。", type:"基础题"},
    {question:"He usually plays ____ football after ____ school.", options:["/;/","the;the","the;/","/;the"], correct:0, explanation:"球类和“放学”前都不加冠词。", type:"基础题"}
  ],
  examQuestions:[
    {question:"____ number of students in our school is over 2,000.", options:["A","The","/","An"], correct:1, explanation:"the number of + 复数名词 表示“…的数量”，用单数谓语；a number of 是“许多”，用复数。这里是数量，用 the。", type:"成考题"},
    {question:"He can play ____ piano very well, but he can't play ____ chess.", options:["the; /","/; the","the; the","/; /"], correct:0, explanation:"乐器前加 the，棋类/球类前不加 the。", type:"成考题"}
  ]
},

{
  id:"g21", title:"代词", category:"词法", frequency:6, level:2,
  explanation:"代词替名词，避免重复。人称代词：主格 I/he/she/they（作主语），宾格 me/him/her/them（作宾语）。物主代词：形容词性 my/your/his（后面必须跟名词），名词性 mine/yours/his（独立用，后面不跟名词）。反身代词：myself/yourself/himself（自己）。指示代词：this/that/these/those。不定代词：some/any, something/anything, few/a few/little/a little, both/all/either/neither/none。",
  examples:[
    {en:"This book is mine. Yours is over there.", zh:"这本书是我的，你的在那边。"},
    {en:"Help yourself to some fish.", zh:"随便吃鱼。"},
    {en:"I have two pens. One is red, the other is blue.", zh:"我有两支笔，一支红一支蓝。"}
  ],
  breakdown:"形容词性物主代词后面必须有名词（my book）；名词性物主代词 = 形容词性 + 名词，独立用（The book is mine = my book）。few/a few 修饰可数，little/a little 修饰不可数；带 a 是“有一点”（肯定），不带 a 是“几乎没有”（否定）。",
  examTip:"成考考点：① few/a few/little/a little 的区分；② both/either/neither（两者）和 all/none（三者以上）；③ it 指同名同物，one 指同名异物。",
  commonMistakes:[
    "my 和 mine 混用，如 This is mine book（错，要 my book）。",
    "few/little 搞混：修饰可数用 few，不可数用 little。",
    "neither 后面误用复数，如 Neither of us are...（口语常见，正式考试按单数 is）。"
  ],
  basicQuestions:[
    {question:"Is this your pen? No, ____ is in my pencil-box.", options:["I","me","my","mine"], correct:3, explanation:"后面没有名词，独立使用名词性物主代词 mine。", type:"基础题"},
    {question:"Hurry up! We have ____ time left.", options:["few","a few","little","a little"], correct:2, explanation:"催促说明时间不多（否定），time 不可数，用 little。", type:"基础题"},
    {question:"The two boys are both good at English. ____ of them wants to join the club.", options:["All","Both","Neither","None"], correct:2, explanation:"后面是 wants（单数），说明主语是单数“两者都不”，用 Neither。", type:"基础题"}
  ],
  examQuestions:[
    {question:"I hope there are enough glasses for each guest to have ____.", options:["it","those","them","one"], correct:3, explanation:"每个人用“一个”，泛指同名异物用 one；it 指同一个。", type:"成考题"},
    {question:"— Which of the two films do you prefer? — ____. They are boring.", options:["None","Neither","Both","Either"], correct:1, explanation:"two films 是两者，后面说 boring（都不喜欢），用 Neither（两者都不）；none 用于三者以上。", type:"成考题"}
  ]
},

{
  id:"g22", title:"虚拟语气基础", category:"其他", frequency:6, level:3,
  explanation:"说的不是真的，是假设、愿望、建议。对现在虚拟：if + 过去时（be 用 were），主句 would/could + 动词原形。对过去虚拟：if + had done，主句 would/could have done。常见句型：wish + 过去时（但愿现在…就好了）；It is necessary/important that... (should) do；suggest/advise/demand that... (should) do。",
  examples:[
    {en:"If I were you, I would take the job.", zh:"如果我是你，我就接受这份工作。"},
    {en:"I wish I knew the answer.", zh:"真希望我知道答案（其实不知道）。"},
    {en:"He suggested that we (should) start early.", zh:"他建议我们早点出发。"}
  ],
  breakdown:"If I were you 是与现在事实相反的假设——我不可能是你，所以 be 动词不管人称都用 were。suggest 后面的从句用 (should) + 动词原形，should 可省。",
  examTip:"成考基础虚拟考两种：① if 虚拟（现在/过去）；② 表示建议、要求、命令的动词后的 (should) do。看到 suggest/advise/demand/insist that，从句用动词原形或 should do。",
  commonMistakes:[
    "if 虚拟中 be 动词用 was（正式虚拟要用 were，如 If I were you）。",
    "suggest 后面从句用直陈语气，如 He suggested that we started（错，要 (should) start）。",
    "wish 后面时态不后退。"
  ],
  basicQuestions:[
    {question:"If I ____ rich, I would buy a big house.", options:["am","was","were","be"], correct:2, explanation:"与现在事实相反的虚拟，be 动词一律用 were。", type:"基础题"},
    {question:"The teacher suggested that we ____ more reading.", options:["do","did","would do","must do"], correct:0, explanation:"suggest 后的从句用 (should) + 动词原形，should 可省，选 do。", type:"基础题"}
  ],
  examQuestions:[
    {question:"If he had studied harder, he ____ the exam last year.", options:["would pass","would have passed","passed","had passed"], correct:1, explanation:"与过去事实相反的虚拟：if + had done，主句 would have done。", type:"成考题"},
    {question:"I wish I ____ speak English as fluently as you.", options:["can","could","may","will"], correct:1, explanation:"wish 后表与现在愿望相反，时态后退，用过去式 could。", type:"成考题"}
  ]
},

{
  id:"g23", title:"there be 句型与 it 用法", category:"其他", frequency:6, level:1,
  explanation:"there be 表示“存在有”（某地有某物），be 的单复数跟后面的第一个名词走（就近一致）。it 三种用法：① 指时间、天气、距离、环境（It is sunny. It is 5 km.）；② 作形式主语，代替真正的 to do/that 从句（It is important to learn English.）；③ 作形式宾语（I found it easy to learn English.）。",
  examples:[
    {en:"There is a book and two pens on the desk.", zh:"桌上有一本书和两支笔。"},
    {en:"It is important to read every day.", zh:"每天阅读很重要。"},
    {en:"I found it hard to work with him.", zh:"我发现和他一起工作很难。"}
  ],
  breakdown:"there be 就近一致：离 be 近的是 a book（单数），用 is。It is important to read 里，it 是假主语，真正主语是 to read every day。",
  examTip:"成考考点：① there be 的就近一致和各种时态（There will be... / There was...）；② 形式宾语 it：find/make/think + it + 形容词 + to do。",
  commonMistakes:[
    "there be 和 have 混用，如 There has a book（错，要 There is a book）。",
    "there be 不就近，如 There are a book and two pens（错，要 is）。",
    "形式宾语 it 漏掉，如 I found to learn English hard（错，要 found it hard to learn）。"
  ],
  basicQuestions:[
    {question:"There ____ a sports meeting next week.", options:["is going to have","will have","is going to be","are going to be"], correct:2, explanation:"there be 句型的将来时是 there will be / there is going to be；不能用 have。就近 a sports meeting 用 is。", type:"基础题"},
    {question:"____ is important for us to learn English well.", options:["That","This","It","What"], correct:2, explanation:"形式主语 it 代替真正主语 to learn English well。", type:"基础题"}
  ],
  examQuestions:[
    {question:"There ____ great changes in our city in the past few years.", options:["were","have been","are","had been"], correct:1, explanation:"in the past few years 是“到现在为止”，用现在完成时；就近 changes 复数，用 have been。", type:"成考题"},
    {question:"I think it our duty ____ the environment.", options:["protect","to protect","protecting","protected"], correct:1, explanation:"it 是形式宾语，真正宾语是 to protect the environment，用不定式。", type:"成考题"}
  ]
},

{
  id:"g24", title:"名词：数与所有格", category:"词法", frequency:5, level:1,
  explanation:"可数名词有单复数：一般加 s（books）；s/x/ch/sh 结尾加 es（boxes, watches）；辅音+y 变 y 为 i 加 es（city→cities）；不规则：man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice。不可数名词（water, money, information, news, advice）没有复数，用量词表数（a piece of news）。所有格：有生命用 's（Tom's book），复数以 s 结尾只加 '（students' books）；无生命用 of（the door of the room）。",
  examples:[
    {en:"There are five women doctors in the hospital.", zh:"医院里有五位女医生。"},
    {en:"This is Tom's bike.", zh:"这是汤姆的自行车。"},
    {en:"I need some information about the train.", zh:"我需要一些火车的信息。"}
  ],
  breakdown:"five 后面 doctor 和 woman 都要变复数 women doctors。information/news/advice 永远不可数，不能加 s，也不能用 many。",
  examTip:"成考考点：① 不可数名词作主语谓语用单数；① man/woman 修饰名词时两个都变复数；③ 复合名词所有格（someone else's）。",
  commonMistakes:[
    "不可数名词加 s，如 informations/advices（错）。",
    "woman doctor 的复数说成 woman doctors（错，要 women doctors）。",
    "children 是已经复数，写成 childs 或 childs'（错）。"
  ],
  basicQuestions:[
    {question:"There are three ____ in the office.", options:["woman teacher","women teacher","women teachers","woman teachers"], correct:2, explanation:"three 后 teacher 变 teachers，man/woman 作定语也要一起变，用 women teachers。", type:"基础题"},
    {question:"The ____ shoes are under the bed.", options:["girl's","girls","girl" ,"girls's"], correct:0, explanation:"女孩的鞋，有生命的所有格用 girl's。", type:"基础题"}
  ],
  examQuestions:[
    {question:"The police ____ searching for the lost child.", options:["is","are","was","has"], correct:1, explanation:"police 是集合名词，通常作复数看待，用 are。", type:"成考题"},
    {question:"He gave us ____ on how to learn English.", options:["some advices","an advice","some advice","a few advices"], correct:2, explanation:"advice 是不可数名词，不加 s，用 some advice。", type:"成考题"}
  ]
},

{
  id:"g25", title:"连词", category:"词法", frequency:5, level:2,
  explanation:"连词连接词、短语或句子。并列连词：and（和）、but（但是）、or（或者/否则）、so（所以）、for（因为）、nor（也不）。成对连词：both...and（两者都）、either...or（要么…要么）、neither...nor（既不…也不）、not only...but also（不但…而且）。注意：both...and 连接主语谓语用复数；either...or/neither...nor/not only...but also 就近一致。",
  examples:[
    {en:"Hurry up, or you will be late.", zh:"快点，否则你要迟到了。"},
    {en:"Not only you but also he is interested in music.", zh:"不但你而且他都对音乐感兴趣。"},
    {en:"She can neither sing nor dance.", zh:"她既不会唱歌也不会跳舞。"}
  ],
  breakdown:"or 放祈使句后表示“否则”。not only...but also 就近一致，离动词近的是 he，用 is。",
  examTip:"成考考点：① or 表“否则”；② not only...but also 的就近一致和倒装；③ because/so、though/but 不能同时出现。",
  commonMistakes:[
    "中文“因为…所以…”直译成 because...so（英语只用其一）。",
    "not only...but also 连接主语不就近，如 Not only you but also I is...（错，就近 I 用 am）。",
    "either...or 意思用错（“要么…要么”二选一）。"
  ],
  basicQuestions:[
    {question:"Work hard, ____ you will fail the exam.", options:["and","but","or","so"], correct:2, explanation:"祈使句 + or 表“否则”，努力否则就挂。", type:"基础题"},
    {question:"____ Tom ____ Jack is going to see the film; they both have to study.", options:["Both;and","Either;or","Neither;nor","Not only;but also"], correct:2, explanation:"两人都要学习不能去，表“两者都不”用 Neither...nor。", type:"基础题"}
  ],
  examQuestions:[
    {question:"Not only the students but also the teacher ____ interested in the book.", options:["is","are","were","have"], correct:0, explanation:"not only...but also 就近一致，靠近 the teacher 是单数，用 is。", type:"成考题"},
    {question:"Hurry up, ____ we will miss the early train.", options:["and","or","but","so"], correct:1, explanation:"快点否则错过早班火车，or 表“否则”。", type:"成考题"}
  ]
},

{
  id:"g26", title:"倒装句与强调句", category:"其他", frequency:4, level:3,
  explanation:"倒装就是把动词/助动词提到主语前面。常见：① 否定词放句首（Never/Hardly/Seldom/Not only/Not until），句子要部分倒装（把助动词/be/情态动词提前）；② Only + 状语放句首，部分倒装；③ So + 形容词/副词放句首，部分倒装。强调句：It is/was + 被强调部分 + that/who...，把 It is...that 去掉句子仍然完整。",
  examples:[
    {en:"Never have I seen such a beautiful place.", zh:"我从没见过这么美的地方。"},
    {en:"Only in this way can you learn English well.", zh:"只有这样你才能学好英语。"},
    {en:"It was yesterday that I met him.", zh:"我是昨天遇见他的。"}
  ],
  breakdown:"Never 放句首，助动词 have 提到主语 I 前面 → Never have I seen。强调句 It was yesterday that...，去掉 It was...that 剩 I met him yesterday，完整通顺，就是强调句。",
  examTip:"成考倒装题不多但常考：否定词/only + 状语放句首的部分倒装。强调题看去掉 It is...that 后句子是否完整。",
  commonMistakes:[
    "否定词放句首忘了倒装，如 Never I have seen（错，要 Never have I seen）。",
    "强调句 that 用错成 when/where，强调人可用 who，其他一律 that。",
    "Only 放句首但修饰主语时不倒装，如 Only he knows it（不倒装）。"
  ],
  basicQuestions:[
    {question:"Never before ____ such a moving film.", options:["I have seen","have I seen","I saw","did I see"], correct:1, explanation:"Never 放句首引起部分倒装，助动词 have 提前，用 have I seen。", type:"基础题"},
    {question:"It was in the park ____ I met an old friend yesterday.", options:["where","which","that","when"], correct:2, explanation:"强调地点状语 in the park，用 that 构成强调句。", type:"基础题"}
  ],
  examQuestions:[
    {question:"Only when the war was over ____ to his hometown.", options:["he returned","did he return","he did return","returned he"], correct:1, explanation:"Only + 时间状语从句放句首，主句部分倒装，用 did he return。", type:"成考题"},
    {question:"It was with the help of the local guide ____ the mountain climber was rescued.", options:["who","that","when","how"], correct:1, explanation:"强调方式状语 with the help of...，用 that。", type:"成考题"}
  ]
}

];

// 导出（浏览器全局）
if (typeof window !== "undefined") { window.GRAMMAR_DATA = GRAMMAR_DATA; }
if (typeof module !== "undefined" && module.exports) { module.exports = GRAMMAR_DATA; }
