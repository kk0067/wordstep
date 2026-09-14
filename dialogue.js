// 成人高考专升本英语 · 补全对话题库
// 共 10 篇，每篇 7 选 5（5 个空、7 个选项、2 个干扰项），含详细解析
// 考查日常交际：购物 / 就餐 / 就医 / 旅行 / 面试 / 打电话 / 问路 / 邀请 / 道歉感谢 / 酒店入住

const DIALOGUE_DATA = [
  // ============ d001 购物 ============
  {
    id: "d001",
    title: "Choosing a Winter Jacket",
    category: "购物",
    dialogue: [
      { speaker: "A", text: "Good afternoon! Welcome to Sunny Clothes. Can I help you?" },
      { speaker: "B", text: "Yes, I'm looking for a jacket for the winter. ___1___" },
      { speaker: "A", text: "Of course. What size do you usually wear?" },
      { speaker: "B", text: "Size M, I think. ___2___" },
      { speaker: "A", text: "How about this dark blue one? It's made of wool and it keeps you warm." },
      { speaker: "B", text: "It looks nice. ___3___" },
      { speaker: "A", text: "Sure. The fitting room is just over there in the corner." },
      { speaker: "B", text: "Thank you... Hmm, it's a little tight around the shoulders." },
      { speaker: "A", text: "Let me see what we have. Oh, we have a larger size in grey. Would you like to try it?" },
      { speaker: "B", text: "Yes, please. ... Perfect, this one fits much better. ___4___" },
      { speaker: "A", text: "It's 120 dollars, but today everything in the shop is 20 percent off." },
      { speaker: "B", text: "That sounds reasonable. ___5___" },
      { speaker: "A", text: "Great. Will you pay by cash or by card?" },
      { speaker: "B", text: "By card, please." }
    ],
    options: [
      "A. Can I try it on?",
      "B. Do you have a larger size in a different color?",
      "C. How much is it?",
      "D. Could you show me some warm ones?",
      "E. I'd like something in a dark color.",
      "F. I bought one from this shop last year.",
      "G. It's a bit cheaper than I expected."
    ],
    blanks: [
      {
        index: 1,
        correct: 3,
        explanation: "正确答案 D(Could you show me some warm ones?)。顾客刚说要买 winter jacket，店员紧接着回答 Of course. What size...（当然，您穿多大码），可见空格处顾客是在请求店员拿几件暖和的看看，店员爽快答应后才问尺码。A 项 Can I try it on（我能试穿吗）发生在选好衣服之后，此处还没挑款；E 项虽然也是顾客偏好，但店员此句先问尺码而非回应颜色，故 D 最贴切。"
      },
      {
        index: 2,
        correct: 4,
        explanation: "正确答案 E(I'd like something in a dark color.)。顾客报完 Size M 后，店员推荐了 this dark blue one（这件深蓝色的），正好对应空格处顾客说想要深色。D 项已用于第1空；A 项试穿要等选中衣服之后；B 项问别的颜色大码，但店员此时是在推荐款式而非换码，语境不符。"
      },
      {
        index: 3,
        correct: 0,
        explanation: "正确答案 A(Can I try it on?)。顾客说 It looks nice（看起来不错），店员回答 Sure. The fitting room is over there（可以，试衣间在那边），明显是同意试穿。B 项要别的颜色大码，店员此句并未回应颜色或尺码，而是指引试衣间；C 项问价格，店员此句也不是报价；G 项说比预期便宜，价格还没提，不可能先评论价格。"
      },
      {
        index: 4,
        correct: 2,
        explanation: "正确答案 C(How much is it?)。顾客试好后说 Perfect, this one fits much better，店员紧接着回答 It's 120 dollars...（120美元，今天打八折），明显是报价，故空格处顾客在问价格。B 项问别的颜色大码，但顾客刚说 Perfect（很合身），不再换码；G 项 It's a bit cheaper 是听到价格之后的评价，不能放在报价之前。"
      },
      {
        index: 5,
        correct: 6,
        explanation: "正确答案 G(It's a bit cheaper than I expected.)。顾客听完报价说 That sounds reasonable（听上去合理），空格处接着评价价格比预期便宜，店员才说 Great. Will you pay by cash or by card（好的，现金还是刷卡），进入付款环节。B 项问别的颜色大码，但衣服已经试好且合身；F 项说去年在这家买过，与当前付款无关；A、C、D、E 均已在前四空使用。"
      }
    ]
  },

  // ============ d002 就餐 ============
  {
    id: "d002",
    title: "Dinner at a Restaurant",
    category: "就餐",
    dialogue: [
      { speaker: "A", text: "Good evening! A table for two?" },
      { speaker: "B", text: "Yes, by the window, if possible." },
      { speaker: "A", text: "Right this way. Here is the menu." },
      { speaker: "B", text: "Thank you. ___1___" },
      { speaker: "A", text: "Our steak is very good today. It's grilled over charcoal." },
      { speaker: "B", text: "Sounds great. ___2___" },
      { speaker: "A", text: "Rare, medium or well done?" },
      { speaker: "B", text: "Medium, please." },
      { speaker: "A", text: "Would you like something to drink with your meal?" },
      { speaker: "B", text: "___3___ Just water, please." },
      { speaker: "A", text: "Still or sparkling?" },
      { speaker: "B", text: "___4___" },
      { speaker: "A", text: "Fine. I'll be back with your water and bread in a minute." },
      { speaker: "B", text: "Thank you." },
      { speaker: "B", text: "Excuse me, waiter! ___5___" },
      { speaker: "A", text: "I'm sorry about that. I'll bring you a clean one right away." }
    ],
    options: [
      "A. What do you recommend?",
      "B. I'll have the steak, please.",
      "C. Nothing for me, thanks.",
      "D. Still water, please.",
      "E. This glass is a bit dirty.",
      "F. This restaurant is famous for its steak.",
      "G. Could I have the bill, please?"
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(What do you recommend?)。服务员递上菜单后，空格处顾客问推荐，服务员才回答 Our steak is very good today（今天牛排不错）。F 项说这家店牛排有名，是陈述事实而非提问，无法引出服务员的推荐回答；B 项 I'll have the steak 是点菜，但此时服务员还没推荐任何菜，顾客无从点起。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(I'll have the steak, please.)。顾客说 Sounds great（听上去不错），服务员紧接着问 Rare, medium or well done（几分熟），说明顾客已经点了牛排。A 项问推荐已在第1空使用；C 项 Nothing for me 是回答是否点饮料，与牛排熟度无关；G 项要账单还没到时候。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(Nothing for me, thanks.)。服务员问 Would you like something to drink（喝点什么吗），顾客回答 ___3___ Just water, please（我就要水），可见空格处是婉拒其他饮品。D 项 Still water 是回答 Still or sparkling（气泡水还是静水），应在第4空；A、B 均与饮品无关；G 项要账单与 Just water 矛盾。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(Still water, please.)。服务员问 Still or sparkling（静水还是气泡水），空格处顾客二选一回答。C 项 Nothing for me 已用于第3空，且是回答要不要喝东西，不能回答要哪种水；E 项说杯子脏了，与水的类型无关。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(This glass is a bit dirty.)。顾客喊 Excuse me, waiter!（服务员！），服务员回答 I'm sorry about that. I'll bring you a clean one right away（抱歉，我马上换个干净的），clean one 指干净杯子，说明顾客在投诉杯子脏了。G 项 Could I have the bill（结账）是强干扰项：语气上也像喊服务员，但服务员若结账会说 Here is your bill，不会说 bring you a clean one，故排除；F 项是陈述句，无法引出道歉。"
      }
    ]
  },

  // ============ d003 就医 ============
  {
    id: "d003",
    title: "Seeing a Doctor for a Cough",
    category: "就医",
    dialogue: [
      { speaker: "A", text: "Good morning. What seems to be the trouble?" },
      { speaker: "B", text: "Well, I've had a bad cough for about a week." },
      { speaker: "A", text: "I see. ___1___" },
      { speaker: "B", text: "It started as a sore throat, and then I began coughing at night." },
      { speaker: "A", text: "Do you have a fever?" },
      { speaker: "B", text: "Yes, a slight one. ___2___" },
      { speaker: "A", text: "Let me listen to your chest. ... Open your mouth, please. Say ah." },
      { speaker: "B", text: "Ah..." },
      { speaker: "A", text: "Your throat is red and your chest sounds a bit rough. ___3___" },
      { speaker: "B", text: "Is it serious?" },
      { speaker: "A", text: "Not really, it's just a bad cold. ___4___" },
      { speaker: "B", text: "How often should I take it?" },
      { speaker: "A", text: "Three times a day after meals. Drink more water and get plenty of rest." },
      { speaker: "B", text: "Thank you, doctor. ___5___" },
      { speaker: "A", text: "You're welcome. I hope you feel better soon." }
    ],
    options: [
      "A. How did it start?",
      "B. And sometimes I feel a bit dizzy.",
      "C. You'd better take a few days off.",
      "D. I'll give you some medicine for the cough.",
      "E. I'll follow your advice.",
      "F. This hospital is not far from my home.",
      "G. I've never had a cold like this before."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(How did it start?)。医生说 I see 后，病人回答 It started as a sore throat...（一开始是喉咙痛），started 一词对应医生问的 how did it start（怎么开始的）。B 项 And sometimes dizzy 是补充症状，不能引出 It started as... 这种叙述发病过程的回答；G 项说以前没得过这样的感冒，与发病过程无关。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(And sometimes I feel a bit dizzy.)。病人说 Yes, a slight one（有点低烧），空格处继续补充其他不适症状，医生才去听诊。G 项说没得过这样的感冒，是感叹而非症状，且无法衔接医生的检查动作；F 项说医院离家近，与病情完全无关。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(You'd better take a few days off.)。医生检查后说喉咙发红、胸部听诊有点粗，接着建议休息几天，病人听了才担心地问 Is it serious（严重吗）。D 项 I'll give you some medicine 是开药，若医生此处就开药，病人不会接着问严不严重；E 项是病人答应医嘱，不能由医生说。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(I'll give you some medicine for the cough.)。医生说只是重感冒，空格处开药，病人立刻问 How often should I take it（多久吃一次），take it 指代药。C 项建议休息已用于第3空；E 项 I'll follow your advice 是病人表态，不能由医生说，也无法引出 take it 的问答。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(I'll follow your advice.)。病人听完医嘱说 Thank you, doctor，空格处表示会遵医嘱，医生才回答 You're welcome. I hope you feel better soon。F 项说医院离家近，与道别无关；G 项说以前没得过这样的感冒，放在感谢医嘱之后不合语境。"
      }
    ]
  },

  // ============ d004 旅行 ============
  {
    id: "d004",
    title: "Checking in at the Airport",
    category: "旅行",
    dialogue: [
      { speaker: "A", text: "Good afternoon. May I see your passport, please?" },
      { speaker: "B", text: "Sure. Here you are." },
      { speaker: "A", text: "Thank you. Are you checking any bags?" },
      { speaker: "B", text: "Yes, just this one suitcase. ___1___" },
      { speaker: "A", text: "That's fine. It's 23 kilos, just under the limit." },
      { speaker: "B", text: "Great. ___2___" },
      { speaker: "A", text: "Let me check... Your flight to Beijing leaves from Gate 18 at 3:45." },
      { speaker: "B", text: "Thanks. By the way, ___3___" },
      { speaker: "A", text: "Yes, we serve a light meal and drinks on board." },
      { speaker: "B", text: "Wonderful. ___4___" },
      { speaker: "A", text: "Just follow the signs to security, then take the escalator up." },
      { speaker: "B", text: "Got it. ___5___" },
      { speaker: "A", text: "You're welcome. Have a pleasant flight." }
    ],
    options: [
      "A. I hope it's not too heavy.",
      "B. Which gate should I go to?",
      "C. Will there be food on the plane?",
      "D. How do I get to the departure hall?",
      "E. Thanks for your help.",
      "F. My flight was delayed yesterday.",
      "G. This airport is very crowded today."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(I hope it's not too heavy.)。乘客说就托一个箱子，地勤回答 It's 23 kilos, just under the limit（23公斤，没超重），说明乘客在担心行李超重。F 项说昨天航班延误，与当前称重无关；G 项说机场人多，地勤也不会回应重量。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(Which gate should I go to?)。地勤回答 Your flight... leaves from Gate 18 at 3:45（3:45从18号登机口起飞），明显是回答登机口和时间，乘客在问登机口。C 项问飞机上有没有餐食，地勤此句答的是登机口而非餐食；D 项问怎么去候机大厅，地勤此句也未指路。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(Will there be food on the plane?)。乘客说 By the way（顺便问一下），地勤回答 Yes, we serve a light meal and drinks on board（机上供应简餐和饮料），serve food 对应问句中的 food。B 项问登机口已在第2空使用；D 项问路怎么走，地勤此句未指路。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(How do I get to the departure hall?)。地勤回答 Just follow the signs to security, then take the escalator up（跟着指示牌过安检，再上自动扶梯），明显是指路，故乘客在问怎么走。C 项问餐食已用；E 项 Thanks for your help 是道别用语，不能引出指路回答。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(Thanks for your help.)。乘客说 Got it（明白了），空格处道谢，地勤回答 You're welcome. Have a pleasant flight（不客气，祝您飞行愉快）。F 项说昨天航班延误，与道谢无关；G 项说机场人多，也无法引出 You're welcome。"
      }
    ]
  },

  // ============ d005 面试 ============
  {
    id: "d005",
    title: "A Job Interview",
    category: "面试",
    dialogue: [
      { speaker: "A", text: "Good morning. Please have a seat." },
      { speaker: "B", text: "Thank you. Good morning." },
      { speaker: "A", text: "Well, your resume looks quite interesting. ___1___" },
      { speaker: "B", text: "For the past three years I've been working as a sales assistant in a local shop." },
      { speaker: "A", text: "I see. ___2___" },
      { speaker: "B", text: "Because I want a new challenge and a chance to grow with a bigger company." },
      { speaker: "A", text: "That's a good reason. ___3___" },
      { speaker: "B", text: "I'd say I'm quite patient and good with people." },
      { speaker: "A", text: "___4___" },
      { speaker: "B", text: "I can start in two weeks." },
      { speaker: "A", text: "Fine. We'll call you by the end of the week." },
      { speaker: "B", text: "Thank you for your time. ___5___" },
      { speaker: "A", text: "You're welcome. Goodbye." }
    ],
    options: [
      "A. Could you tell me about your work experience?",
      "B. Why do you want to leave your present job?",
      "C. What do you think your strengths are?",
      "D. When could you start if we offer you the job?",
      "E. I hope to hear from you soon.",
      "F. The salary is my first concern.",
      "G. I have many hobbies in my free time."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(Could you tell me about your work experience?)。面试官说简历看起来有意思，应聘者回答 For the past three years I've been working as a sales assistant（过去三年在本地商店做销售助理），这是在讲工作经历。B 项问为什么离职，应聘者回答应以 Because 开头，而此处答的是经历；G 项说业余爱好，与销售助理工作经历无关。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(Why do you want to leave your present job?)。应聘者回答 Because I want a new challenge（因为我想接受新挑战），Because 开头说明空格处是 why 引导的原因提问。C 项问优势，应聘者不会用 Because 回答；F 项说薪资是首要考虑，与 new challenge 的回答不对应。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(What do you think your strengths are?)。应聘者回答 I'd say I'm quite patient and good with people（我比较有耐心、善于与人打交道），这是在说个人优点。A 项问经历已在第1空使用；B 项问离职原因已用；G 项说爱好，与 patient、good with people 这种自我评价无关。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(When could you start if we offer you the job?)。应聘者回答 I can start in two weeks（两周后能入职），start 一词对应面试官问的 when could you start。C 项问优势已用；F 项谈薪资，应聘者不会回答入职时间。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(I hope to hear from you soon.)。面试结束，应聘者说 Thank you for your time（感谢您的时间），空格处表达希望尽快收到回复，面试官才说 We'll call you... 并道别。F 项谈薪资，与道别语境不符；G 项说业余爱好，放在面试结尾突兀。"
      }
    ]
  },

  // ============ d006 打电话 ============
  {
    id: "d006",
    title: "Leaving a Message on the Phone",
    category: "打电话",
    dialogue: [
      { speaker: "A", text: "Hello, may I speak to Mr. Wang, please?" },
      { speaker: "B", text: "I'm sorry, but he's in a meeting right now. ___1___" },
      { speaker: "A", text: "Yes, please. This is Li Ming from ABC Company." },
      { speaker: "B", text: "___2___" },
      { speaker: "A", text: "It's 138-8888-5678." },
      { speaker: "B", text: "138-8888-5678. ___3___" },
      { speaker: "A", text: "Please tell him I need to discuss the new project with him." },
      { speaker: "B", text: "Sure. ___4___" },
      { speaker: "A", text: "Thanks a lot. Oh, could you also ask him to call me back?" },
      { speaker: "B", text: "Of course. I'll write that down too." },
      { speaker: "A", text: "Thanks a lot. Bye." },
      { speaker: "B", text: "___5___" }
    ],
    options: [
      "A. Would you like to leave a message?",
      "B. Could I have your phone number?",
      "C. And what is this call regarding?",
      "D. I'll give him the message as soon as he's free.",
      "E. Goodbye. I'll let him know.",
      "F. He usually gets back around six.",
      "G. The line is not very clear."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(Would you like to leave a message?)。接线人说王先生在开会，空格处询问是否留言，来电人回答 Yes, please（好的），正是回应留言提议。F 项说他通常六点回来，虽然也是提供信息，但来电人回答 Yes, please 是同意某个提议，而非回应时间陈述；G 项说线路不清楚，与开会留言无关。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(Could I have your phone number?)。来电人回答 It's 138-8888-5678（我的号码是…），明显是报电话号码，接线人在问号码。C 项问有什么事，来电人会说事而非报号码；F 项说六点回来，与报号码无关。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(And what is this call regarding?)。接线人复述号码后，来电人回答 Please tell him I need to discuss the new project（请告诉他我要讨论新项目），说明接线人在问来电事由。B 项问号码已在第2空使用；F 项说六点回来，与讨论新项目无关。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(I'll give him the message as soon as he's free.)。来电人说完留言内容，接线人说 Sure（好的），空格处承诺转达，来电人才接着说还要请王先生回电话。A 项问是否留言已用；E 项 Goodbye 是道别，此时通话还没结束，来电人又补了一句回电要求。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(Goodbye. I'll let him know.)。来电人说 Thanks a lot. Bye（多谢，再见），空格处接线人道别并确认转告。F 项说六点回来，放在道别处多余；G 项说线路不清楚，与道别无关；D 项承诺转达已在第4空使用。"
      }
    ]
  },

  // ============ d007 问路 ============
  {
    id: "d007",
    title: "Asking the Way to the Station",
    category: "问路",
    dialogue: [
      { speaker: "A", text: "Excuse me. ___1___" },
      { speaker: "B", text: "The railway station? Let me think... It's about twenty minutes' walk from here." },
      { speaker: "A", text: "Oh, I'm in a bit of a hurry. ___2___" },
      { speaker: "B", text: "Yes, you can take Bus No. 5. It goes right there." },
      { speaker: "A", text: "Is that the right bus for the south station?" },
      { speaker: "B", text: "Yes, it is. It stops right in front of the main entrance." },
      { speaker: "A", text: "___3___" },
      { speaker: "B", text: "The bus stop is just around the corner, next to the bookstore." },
      { speaker: "A", text: "___4___" },
      { speaker: "B", text: "It comes every ten minutes or so." },
      { speaker: "A", text: "That's great. Thanks a lot." },
      { speaker: "B", text: "___5___" }
    ],
    options: [
      "A. Could you tell me how to get to the railway station?",
      "B. Is there a bus I can take?",
      "C. Where is the nearest bus stop?",
      "D. How often does the bus come?",
      "E. You're welcome. Good luck!",
      "F. The station was rebuilt last year.",
      "G. I usually go there by car."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(Could you tell me how to get to the railway station?)。路人反问 The railway station?（火车站？），说明问路人刚提到火车站。B 项问有没有公交，路人不会反问火车站；F 项说车站去年重建，是陈述句无法引出路人的指路。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(Is there a bus I can take?)。问路人说赶时间，路人回答 Yes, you can take Bus No. 5（可以坐5路公交），Yes 回应一般疑问句，can take 对应问句。C 项问公交站在哪，路人此句回答的是坐几路车而非车站位置；G 项说我通常开车去，与赶时间无关。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(Where is the nearest bus stop?)。路人回答 The bus stop is just around the corner（公交站就在拐角处），明显是回答车站位置。D 项问多久一班，路人此句答的是位置而非频率；B 项问公交已在第2空使用。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(How often does the bus come?)。路人回答 It comes every ten minutes or so（大约每十分钟一班），every ten minutes 对应问频率 how often。C 项问车站位置已用；G 项说自己开车去，与公交频率无关。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(You're welcome. Good luck!)。问路人说 That's great. Thanks a lot（太好了，非常感谢），空格处路人回应不客气。F 项说车站去年重建，与道谢无关；G 项说自己开车去，无法回应 Thanks a lot。"
      }
    ]
  },

  // ============ d008 邀请 ============
  {
    id: "d008",
    title: "Inviting a Friend to Dinner",
    category: "邀请",
    dialogue: [
      { speaker: "A", text: "Hello, David. This is Anna." },
      { speaker: "B", text: "Hi, Anna! How are you?" },
      { speaker: "A", text: "Fine, thanks. Listen, ___1___" },
      { speaker: "B", text: "Sure, what's up?" },
      { speaker: "A", text: "I'm having a small dinner party at my place this Saturday. ___2___" },
      { speaker: "B", text: "Saturday evening? Let me check... Yes, I'm free." },
      { speaker: "A", text: "Great! ___3___" },
      { speaker: "B", text: "Seven o'clock works for me." },
      { speaker: "A", text: "Perfect. It's at my new apartment, No. 12, Green Street." },
      { speaker: "B", text: "___4___" },
      { speaker: "A", text: "Just bring yourself. Maybe something to drink?" },
      { speaker: "B", text: "No problem. ___5___" },
      { speaker: "A", text: "See you Saturday." }
    ],
    options: [
      "A. I was wondering if you're free this Saturday.",
      "B. Would you like to come?",
      "C. What time would suit you?",
      "D. Should I bring anything?",
      "E. I'll see you then.",
      "F. I went to a party last weekend.",
      "G. The food at that restaurant is great."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(I was wondering if you're free this Saturday.)。Anna 说 Listen（听我说），空格处试探 David 周六是否有空，David 回答 Sure, what's up（好的，什么事）。B 项 Would you like to come 是正式邀请，但此时 Anna 还没说出 dinner party，邀请对象不明；F 项说上周末参加了派对，与试探对方时间无关。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(Would you like to come?)。Anna 说周六要在家办小型晚宴，空格处发出邀请，David 才问 Saturday evening? Yes I'm free（周六晚？我有空）。A 项问是否有空已在第1空使用；G 项说那家餐厅菜好，但晚宴在 Anna 家而非餐厅。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(What time would suit you?)。David 回答 Seven o'clock works for me（七点可以），seven o'clock 对应问时间。B 项邀请已用；D 项问带什么，David 会回答带东西而非时间。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(Should I bring anything?)。Anna 回答 Just bring yourself. Maybe something to drink?（人来就行，带点喝的也行），bring yourself 对应 David 问的要不要带东西。E 项 I'll see you then 是道别，不能引出带东西的回答；G 项说餐厅菜好，与带东西无关。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(I'll see you then.)。David 说 No problem（没问题），空格处说到时见，Anna 才说 See you Saturday。F 项说上周末参加派对，与道别无关；G 项说餐厅菜好，此时晚宴时间地点已定，话题不在餐厅。"
      }
    ]
  },

  // ============ d009 道歉感谢 ============
  {
    id: "d009",
    title: "Apologizing for Being Late",
    category: "道歉感谢",
    dialogue: [
      { speaker: "A", text: "There you are! I thought you'd never come." },
      { speaker: "B", text: "___1___ The traffic was terrible and I couldn't find a taxi." },
      { speaker: "A", text: "That's all right. What took you so long?" },
      { speaker: "B", text: "Well, my bike broke down on the way. ___2___" },
      { speaker: "A", text: "Oh no, did you hurt yourself?" },
      { speaker: "B", text: "No, I'm fine, just a little wet from the rain." },
      { speaker: "A", text: "Well, these things happen. ___3___" },
      { speaker: "B", text: "Thank you so much for waiting. ___4___" },
      { speaker: "A", text: "No problem. Anyway, now that you're here, ___5___" },
      { speaker: "B", text: "Good idea. I'm really hungry." }
    ],
    options: [
      "A. I'm terribly sorry I'm late.",
      "B. It took me a while to fix it.",
      "C. Don't blame yourself.",
      "D. I really appreciate it.",
      "E. Shall we go grab something to eat?",
      "F. I usually arrive on time.",
      "G. The meeting was put off this morning."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(I'm terribly sorry I'm late.)。A 说你可来了，B 空格处道歉说迟到了，接着解释堵车打不到车。F 项说我通常准时，像是辩解而非道歉，且后面已有堵车理由；G 项说会议推迟，与两人约饭见面无关。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(It took me a while to fix it.)。B 说自行车半路坏了，空格处补充修车花了时间，A 才问有没有受伤。A 项道歉已在第1空使用；F 项说自己通常准时，放在车坏之后不合语境；G 项会议推迟与自行车坏了无关。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(Don't blame yourself.)。A 说 these things happen（这种事难免），空格处安慰对方别自责，B 才感谢等待。D 项 I really appreciate it 是 B 的感谢，不能由 A 说；B 项修车已在第2空使用。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(I really appreciate it.)。B 说 Thank you so much for waiting（谢谢你等我），空格处进一步表达感谢，A 才说 No problem。C 项安慰对方是 A 的话，不能由 B 说；F 项说自己通常准时，与感谢等待无关。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(Shall we go grab something to eat?)。A 说既然你来了，空格处提议去吃饭，B 回答 Good idea. I'm really hungry（好主意，我饿了），hungry 对应吃饭提议。G 项说会议推迟，与吃饭提议无关；D 项感谢已用。"
      }
    ]
  },

  // ============ d010 酒店入住 ============
  {
    id: "d010",
    title: "Checking in at a Hotel",
    category: "酒店入住",
    dialogue: [
      { speaker: "A", text: "Good evening. Welcome to Green Hotel. ___1___" },
      { speaker: "B", text: "Yes. I have a reservation under the name Li Hua." },
      { speaker: "A", text: "Just a moment, please... Yes, a single room for three nights. ___2___" },
      { speaker: "B", text: "Here's my passport." },
      { speaker: "A", text: "Thank you. How would you like to pay?" },
      { speaker: "B", text: "___3___" },
      { speaker: "A", text: "May I see the card, please? ... Thank you. Here is your key card." },
      { speaker: "B", text: "Thanks. ___4___" },
      { speaker: "A", text: "You're on the 8th floor. The elevator is over there." },
      { speaker: "B", text: "Oh, and one more thing. ___5___" },
      { speaker: "A", text: "Breakfast is served from 7 to 10 on the second floor." },
      { speaker: "B", text: "Great. Thank you." }
    ],
    options: [
      "A. Do you have a reservation with us?",
      "B. May I see your ID card, please?",
      "C. By credit card, please.",
      "D. Which floor is my room on?",
      "E. What time is breakfast served?",
      "F. This hotel is quite famous in the city.",
      "G. I want to change my room to a bigger one."
    ],
    blanks: [
      {
        index: 1,
        correct: 0,
        explanation: "正确答案 A(Do you have a reservation with us?)。前台说欢迎光临，客人回答 Yes. I have a reservation...（是的，我有预订），Yes 回应一般疑问句。F 项说这家酒店有名，是陈述句，客人不会用 Yes 回答；G 项说想换大房间，客人还没入住就要求换房不合流程。"
      },
      {
        index: 2,
        correct: 1,
        explanation: "正确答案 B(May I see your ID card, please?)。前台查到单人房住三晚，空格处要求看证件，客人回答 Here's my passport（这是护照），passport 对应 ID。A 项问预订已在第1空使用；F 项说酒店有名，与查证件无关。"
      },
      {
        index: 3,
        correct: 2,
        explanation: "正确答案 C(By credit card, please.)。前台问 How would you like to pay（怎么付款），空格处客人回答信用卡，前台才说 May I see the card（看一下卡）。B 项看证件已用；G 项说想换大房间，与付款方式无关。"
      },
      {
        index: 4,
        correct: 3,
        explanation: "正确答案 D(Which floor is my room on?)。前台回答 You're on the 8th floor（您在8楼），8th floor 对应问楼层。C 项付款已用；E 项问早餐时间，前台此句答的是楼层而非早餐。"
      },
      {
        index: 5,
        correct: 4,
        explanation: "正确答案 E(What time is breakfast served?)。客人说 one more thing（还有一件事），前台回答 Breakfast is served from 7 to 10（早餐7到10点），served 对应问句。G 项说想换大房间，前台此句答的是早餐时间而非换房；F 项说酒店有名，与问早餐无关。"
      }
    ]
  }
];

// 导出（兼容 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { DIALOGUE_DATA };
}
if (typeof window !== "undefined") {
  window.DIALOGUE_DATA = DIALOGUE_DATA;
}
