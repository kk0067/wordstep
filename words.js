// 自编基础词库，不是官方完整考纲或真题词频排名。
const groups=[
['最先认识的词',`I|我
you|你；你们
he|他
she|她
we|我们
they|他们；她们
it|它
my|我的
your|你的；你们的
his|他的
her|她的；她（宾格）
our|我们的
their|他们的
me|我（宾格）
us|我们（宾格）
them|他们（宾格）
this|这；这个
that|那；那个
these|这些
those|那些
am|是（与I搭配）
is|是（单数）
are|是（复数或you）
was|是（am/is的过去式）
were|是（are的过去式）
be|是；成为
have|有
has|有（第三人称单数）
had|有（have的过去式）
do|做
does|做（第三人称单数）
did|做（do的过去式）
can|能；会
could|能；可以（较委婉）
will|将；会
would|愿意；将会
should|应该
must|必须
may|可能；可以
not|不；没有`],
['句子的连接词',`a|一个（泛指）
an|一个（元音音素前）
the|这／那（特指）
and|和；并且
but|但是
or|或者
because|因为
so|所以；如此
if|如果
when|何时；当……时
while|当……时；然而
before|在……之前
after|在……之后
although|虽然
than|比
as|作为；像……一样
of|……的
in|在……里面
on|在……上；在某天
at|在（地点或时刻）
to|向；到
for|为了；对于
from|从；来自
with|和……一起；带有
without|没有
about|关于；大约
by|通过；在……旁
between|在两者之间
among|在……之中（三者及以上）
under|在……下面
over|在……上方；超过
into|到……里面
through|穿过；通过
out|在外面
up|向上
down|向下
what|什么
who|谁
where|哪里
why|为什么
how|怎样
which|哪一个
all|全部
some|一些
any|任何；一些（疑问或否定句中）
each|每个
every|每一；每个
other|其他的
another|另一个
both|两者都`],
['每天都用的动作',`go|去
come|来
get|得到；变得
give|给
take|拿；花费（时间）
make|制作；使
use|使用
want|想要
need|需要
know|知道
think|想；认为
learn|学习
study|学习；研究
read|阅读
write|写
speak|说（某种语言）
say|说（内容）
tell|告诉
talk|交谈
listen|听
hear|听见
see|看见
look|看；看起来
watch|观看
find|找到；发现
help|帮助
work|工作
live|居住；生活
like|喜欢；像
love|爱；喜爱
try|尝试；努力
start|开始
begin|开始
finish|完成
stop|停止
keep|保持；保留
leave|离开；留下
bring|带来
buy|买
pay|支付
cost|花费；费用
spend|花费（时间或金钱）
eat|吃
drink|喝
sleep|睡觉
walk|走路
run|跑
play|玩；参加（运动）
meet|见面；遇见
ask|问；请求
answer|回答；答案
call|打电话；称呼
wait|等待
open|打开；开放的
close|关闭
move|移动；搬家
change|改变；变化
remember|记住
forget|忘记
understand|理解`],
['生活与时间',`time|时间；次数
day|一天；白天
week|周；星期
month|月
year|年
today|今天
tomorrow|明天
yesterday|昨天
morning|早晨
afternoon|下午
evening|晚上
night|夜晚
hour|小时
minute|分钟
now|现在
then|那时；然后
always|总是
usually|通常
often|经常
sometimes|有时
never|从不
again|再一次
already|已经
still|仍然
soon|不久；很快
early|早的；早地
late|迟的；晚地
first|第一；首先
last|最后的；上一个
next|下一个
people|人；人们
person|人；个人
man|男人
woman|女人
child|孩子
children|孩子们
family|家庭
friend|朋友
parent|父亲或母亲
father|父亲
mother|母亲
home|家
house|房屋
room|房间
school|学校
student|学生
teacher|教师
book|书；预订
food|食物
water|水
money|钱
job|工作；职位
city|城市
country|国家；乡村
place|地方
world|世界
life|生活；生命
name|名字
way|方法；道路
thing|事情；东西`],
['常见描述与比较',`good|好的
bad|坏的
new|新的
old|旧的；年老的
big|大的
small|小的
long|长的
short|短的；矮的
high|高的
low|低的
important|重要的
different|不同的
same|相同的
easy|容易的
difficult|困难的
hard|困难的；努力地
right|正确的；右边
wrong|错误的
true|真实的；正确的
possible|可能的
free|免费的；自由的
busy|忙碌的
happy|快乐的
sorry|抱歉的；难过的
young|年轻的
healthy|健康的
sick|生病的
tired|疲倦的
beautiful|美丽的
useful|有用的
many|许多（可数）
much|许多（不可数）
more|更多
most|最多；大多数
few|很少（可数，几乎没有）
little|很少（不可数）；小的
less|更少（不可数）
enough|足够的
only|仅仅；唯一的
very|非常
too|也；太
also|也
well|好地；健康的
better|更好的；更好地
best|最好的；最好地
together|一起
here|这里
there|那里
away|离开；远离
really|真正地；确实`],
['阅读核心词',`question|问题（提问）
problem|问题；难题
reason|原因
result|结果
example|例子
idea|想法；主意
fact|事实
information|信息
news|新闻；消息
story|故事
article|文章
passage|段落；短文
language|语言
English|英语；英国的
word|单词
sentence|句子
meaning|意思；含义
letter|信；字母
test|测试
exam|考试
education|教育
experience|经历；经验
knowledge|知识
skill|技能
practice|练习；实践
interest|兴趣
success|成功
future|将来
past|过去
present|现在；礼物
health|健康
body|身体
exercise|锻炼；练习
sport|运动
hospital|医院
doctor|医生
patient|病人；有耐心的
medicine|药；医学
travel|旅行
trip|旅行；行程
train|火车；训练
bus|公共汽车
car|汽车
road|道路
traffic|交通
station|车站
airport|机场
ticket|票
hotel|旅馆
holiday|假期`],
['阅读进阶词',`develop|发展；培养
improve|改善；提高
increase|增加
reduce|减少
provide|提供
include|包括
allow|允许
decide|决定
choose|选择
believe|相信
hope|希望
expect|期待；预料
agree|同意
explain|解释
suggest|建议；暗示
consider|考虑；认为
continue|继续
happen|发生
become|变成
seem|似乎
feel|感觉
mean|意味着
show|展示；表明
follow|跟随；遵循
return|返回；归还
receive|收到
send|发送
lose|失去；输掉
win|赢得
save|节省；挽救
protect|保护
build|建造
create|创造
produce|生产
cause|引起；原因
solve|解决
offer|提供；提议
accept|接受
refuse|拒绝
prepare|准备
society|社会
culture|文化
environment|环境
nature|自然
science|科学
technology|技术
business|商业；生意
company|公司；陪伴
service|服务
community|社区
public|公共的
local|当地的
social|社会的
modern|现代的
common|常见的；共同的
special|特别的
necessary|必要的
popular|受欢迎的
available|可获得的；有空的
successful|成功的`],
['做题常见短语',`a lot of|许多
a few|几个（可数）
a little|一点儿（不可数）
at first|起初
at last|最后；终于
at least|至少
in fact|事实上
for example|例如
such as|例如（列举）
because of|因为（后接名词等）
in order to|为了（后接动词原形）
so that|以便；因此（后接句子）
even if|即使
as soon as|一……就……
as well as|以及；也
not only|不仅
look for|寻找
look after|照顾
look forward to|期待
listen to|听
wait for|等待
ask for|请求；要求
give up|放弃
find out|查明；弄清
get up|起床
come back|回来
put on|穿上
turn on|打开（电器）
turn off|关闭（电器）
take part in|参加
be interested in|对……感兴趣
be good at|擅长
be different from|与……不同
be afraid of|害怕
be able to|能够
be late for|……迟到
be proud of|为……自豪
be used to|习惯于（后接名词或动名词）
used to|过去常常（后接动词原形）
have to|不得不
more than|超过；多于
less than|少于
instead of|代替；而不是
according to|根据
in front of|在……前面（外部）
on time|准时
in time|及时
by the way|顺便说一下
every day|每天
make a difference|产生影响`]
];
const sentenceRows=[
['I am a student.','我是一名学生。','I（我）+ am（是）+ a student（一名学生）。'],
['You can do it.','你能做到。','can 后面接动词原形 do。'],
['He works in a school.','他在一所学校工作。','he 是第三人称单数，这里的 work 加 s。'],
['She is my teacher.','她是我的老师。','my 放在名词 teacher 前，表示“我的”。'],
['We study English every day.','我们每天学习英语。','every day 表示“每天”。'],
['They are my friends.','他们是我的朋友。','they 后用 are，friends 表示复数。'],
['It is a good book.','这是一本好书。','it 可以指前面提到的事物。'],
['This is my book.','这是我的书。','my 后面接名词。'],
['What is your name?','你叫什么名字？','What is…? 用来问“……是什么”。'],
['His father is a doctor.','他的父亲是一名医生。','his father = 他的父亲。'],
['Her mother works here.','她的母亲在这里工作。','这里 her 表示“她的”。'],
['Our school is small.','我们的学校很小。','is 后面接形容词 small。'],
['Their house is near the school.','他们的房子在学校附近。','near 表示“在……附近”。'],
['Please help me.','请帮帮我。','动词 help 后用宾格 me。'],
['The teacher helps us.','老师帮助我们。','us 是 we 的宾格。'],
['I know them.','我认识他们。','them 是 they 的宾格。'],
['This is important.','这很重要。','this 指较近的人或事物。'],
['That is my home.','那是我的家。','that 指较远的人或事物。'],
['These books are useful.','这些书很有用。','these 后面用复数 books。'],
['Those students work hard.','那些学生很努力。','those 对应复数事物。'],
['I am happy.','我很快乐。','I 后用 am。'],
['The book is new.','这本书是新的。','单数主语 the book 后用 is。'],
['You are right.','你是对的。','you 后用 are。'],
['I was tired yesterday.','我昨天很累。','yesterday 是过去时间，am 变 was。'],
['They were at home.','他们当时在家。','they 的过去时 be 动词用 were。'],
['I want to be a teacher.','我想成为一名老师。','want to 后面接动词原形。'],
['I have a question.','我有一个问题。','have 在这里表示“有”。'],
['She has a new job.','她有一份新工作。','she 后面 have 变 has。'],
['We had a good time.','我们玩得很开心。','had 是 have 的过去式。'],
['What do you do?','你做什么工作？','前一个 do 帮助提问，后一个 do 表示“做”。'],
['Does he like English?','他喜欢英语吗？','Does 帮助提问，后面 like 用原形。'],
['Did you go to school?','你去学校了吗？','did 帮助提问，go 仍用原形。'],
['I can read this word.','我会读这个单词。','can 后接动词原形。'],
['Could you help me?','你能帮我吗？','could 可用来委婉地提出请求。'],
['I will study tomorrow.','我明天会学习。','will + 动词原形，表示将来。'],
['I would like some water.','我想要一些水。','would like = 想要，语气礼貌。'],
['You should get some sleep.','你应该睡一会儿。','should 表示建议。'],
['We must go now.','我们现在必须走。','must 表示必须。'],
['It may rain tomorrow.','明天可能下雨。','may 在这里表示可能。'],
['I am not a teacher.','我不是老师。','be 动词后加 not 构成否定。'],
['I study because I want a better job.','我学习是因为想要一份更好的工作。','because 后接完整的原因句。'],
['It is difficult, but I will try.','这很难，但我会尝试。','but 表示转折，后面信息常是重点。'],
['Although he is tired, he keeps working.','虽然他很累，但他继续工作。','although 引导让步，不与 but 配对。'],
['If you need help, call me.','如果你需要帮助，就给我打电话。','if 引出条件。'],
['Sleep is important for health.','睡眠对健康很重要。','be important for = 对……很重要。'],
['I spend an hour reading every day.','我每天花一小时阅读。','spend + 时间 + doing。'],
['It takes me an hour to get home.','我到家需要一小时。','It takes someone + 时间 + to do。'],
['The book costs ten yuan.','这本书十元。','cost 的主语通常是物。'],
['I pay ten yuan for the book.','我花十元买这本书。','pay + 钱 + for + 物。'],
['Practice can improve your English.','练习可以提高你的英语。','can 后用 improve 原形。'],
['I suggest reading every day.','我建议每天阅读。','suggest 后可接动名词。'],
['The school provides books for students.','学校为学生提供书籍。','provide something for someone。'],
['I used to get up late.','我过去常常起床很晚。','used to + 动词原形，表示过去的习惯。'],
['I am used to getting up early.','我习惯早起。','be used to 后接名词或动名词。'],
['I look forward to seeing you.','我期待见到你。','这里 to 是介词，后接 seeing。'],
['Do not give up learning.','不要放弃学习。','give up 后面可接动名词。'],
['We stayed home because of the rain.','因为下雨，我们待在家里。','because of 后接名词。'],
['According to the passage, sleep is important.','根据短文，睡眠很重要。','according to the passage 提醒你回原文找依据。'],
['I have a few friends here.','我在这里有几个朋友。','a few 表示有几个；few 强调几乎没有。'],
['There is a little water.','还有一点水。','water 不可数，使用 a little。']
];
const overrides={because:40,but:41,although:42,if:43,important:44,spend:45,take:46,cost:47,pay:48,improve:49,suggest:50,provide:51,'used to':52,'be used to':53,'look forward to':54,'give up':55,'because of':56,'according to':57,'a few':58,'a little':59};
const WORDS=groups.flatMap(([category,text],g)=>text.split('\n').map((line,i)=>{const [word,meaning]=line.split('|');const ex=g===0?sentenceRows[i]:overrides[word]!==undefined?sentenceRows[overrides[word]]:sentenceRows.find(s=>s[0].toLowerCase().split(/[^a-z]+/).includes(word.toLowerCase()));return{id:g+'-'+i,word,meaning,category,group:g,example:ex||null}}));
const READINGS=[
{title:'每天一点点',text:'Li Ming works in a shop. He wants to learn English. Every evening, he reads for thirty minutes. He is tired, but he does not give up. After a month, he can read some short stories.',translation:'李明在一家商店工作。他想学英语。每天晚上，他阅读三十分钟。他很累，但没有放弃。一个月后，他能读一些短篇故事。',question:'李明每晚阅读多长时间？',options:['30分钟','一小时','一整晚','30天'],correct:0,explain:'定位 Every evening（每晚），后面是 thirty minutes（三十分钟）。After a month（一个月后）不是每天的阅读时长。',tip:'先读题，再回原文找时间、地点或人物。'},
{title:'为什么要走路',text:'Many people go to work by car. Anna walks to work every day. Her home is near her office. She thinks walking is good for her health. It also helps her save money.',translation:'许多人开车去上班。安娜每天步行上班。她的家离办公室很近。她认为走路有益于健康。走路也帮助她省钱。',question:'安娜认为走路有什么好处？',options:['可以更晚起床','有益健康，还能省钱','能买一辆新车','可以不用工作'],correct:1,explain:'good for her health 和 save money 分别对应有益健康、省钱。also（也）连接两项好处。',tip:'also、and 常连接并列信息。'},
{title:'一封邀请信',text:'Dear Tom, We will have a reading party at our school this Sunday. It starts at nine in the morning. Please bring your favorite book. We can read and talk about our books together. I hope you can come.',translation:'亲爱的汤姆：我们这周日将在学校举办读书聚会。聚会早上九点开始。请带上你最喜欢的书。我们可以一起阅读并谈论我们的书。我希望你能来。',question:'汤姆需要带什么？',options:['食物','钱','最喜欢的书','一张票'],correct:2,explain:'Please bring your favorite book. 直接说明需要带书。bring 表示带来。',tip:'邀请信通常看清时间、地点和需要做的事。'},
{title:'网上学习',text:'Learning online is popular. People can study at home and choose their own time. However, it is easy to stop studying when no teacher is there. A study plan can help people keep learning.',translation:'网上学习很受欢迎。人们可以在家学习，并选择自己的时间。然而，没有老师在场时，人们很容易停止学习。学习计划能帮助人们继续学下去。',question:'这段话建议用什么帮助坚持学习？',options:['买电脑','停止学习','去学校','制订学习计划'],correct:3,explain:'最后一句 A study plan can help people keep learning. 给出建议。',tip:'遇到 however、but，要注意转折之后的信息。'},
{title:'小小的改变',text:'Jack used to go to bed late. He often felt tired at work. Last week, he decided to turn off his phone at ten. Now he sleeps better and has more time to read in the morning.',translation:'杰克过去常常晚睡。他上班时经常感觉疲惫。上周，他决定十点关掉手机。现在他睡得更好，早上也有更多时间阅读。',question:'杰克为什么做出改变？',options:['他工作时经常很累','他想买新手机','他不能阅读','他不喜欢早晨'],correct:0,explain:'第二句 He often felt tired at work. 描述改变前的问题。',tip:'used to、last week、now 是区分过去和现在的线索。'}
];
const GLOSS={li:'李',ming:'明',works:'工作',shop:'商店',wants:'想要',reads:'阅读',thirty:'三十',minutes:'分钟',stories:'故事',anna:'安娜',walks:'步行',near:'在……附近',office:'办公室',thinks:'认为',walking:'步行',helps:'帮助',dear:'亲爱的',tom:'汤姆',reading:'阅读',party:'聚会',sunday:'星期日',starts:'开始',nine:'九',please:'请',favorite:'最喜欢的',learning:'学习',online:'在网上',own:'自己的',however:'然而',studying:'学习',no:'没有',plan:'计划',jack:'杰克',used:'使用过；used to 表示过去常常',bed:'床',felt:'感觉（feel的过去式）',decided:'决定（过去式）',phone:'电话；手机',ten:'十',sleeps:'睡觉',books:'书（复数）'};

