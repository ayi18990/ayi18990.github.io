/* ==========================================================
   英國教育旅行頁面的文字和照片都在這裡（改法跟 content.js 一樣）

   每一天是一個 { ... }：
     date   日期（'07-06' 這種格式，也是網址 #day-07-06 用的）
     photos 那天的照片檔名，第一張會當作日曆上的封面；
            沒有照片就寫 []，日曆上會變成一張「文字日記」
   想把照片換到別天：把檔名從一天的 photos 剪下，貼到另一天就好。
   中文（zh）和英文（en）的 days 要一樣多、順序一樣。
   ========================================================== */
window.UK = {
  cover: 'uk-cover.jpg',

  photos: {
    '06-29': ['uk-flight1.jpg'],
    '06-30': ['uk-oxford2.jpg', 'uk-oxford1.jpg', 'uk-oxford3.jpg', 'uk-firstmeal.jpg', 'uk-oxford4.jpg', 'uk-oxford5.jpg', 'uk-oxford6.jpg', 'uk-oxford7.jpg', 'uk-oxford8.jpg', 'uk-oxford9.jpg', 'uk-oxford10.jpg', 'uk-waytolodon.jpg', 'uk-mealpizza.jpg'],
    '07-01': ['uk-waytoschool1.jpg', 'uk-mealbreakfast1.jpg'],
    '07-02': ['uk-waytoschool2.jpg', 'uk-mealspaghetti.jpg'],
    '07-03': ['uk-classmath.jpg', 'uk-cards.jpg'],
    '07-04': ['uk-corchet.jpg', 'uk-mealbreakfast2.jpg'],
    '07-05': ['uk-thomas.jpg'],
    '07-06': ['uk-winsdor2.jpg', 'uk-winsdor3.jpg', 'uk-winsdor1.jpg', 'uk-winsdor4.jpg', 'uk-winsdor5.jpg', 'uk-cards2.jpg', 'uk-mealpizzabestver.jpg'],
    '07-07': ['uk-buckimham3.jpg', 'uk-buckimham1.jpg', 'uk-buckimham2.jpg', 'uk-buckimham4.jpg', 'uk-jamespark1.jpg', 'uk-jamespark2.jpg', 'uk-jamesparkbestver.jpg', 'uk-jamespark.jpg', 'uk-bigban1.jpg', 'uk-bigban2.jpg'],
    '07-08': [],
    '07-09': ['uk-mealfried.jpg'],
    '07-10': ['uk-lionking1.jpg', 'uk-lionking2.jpg'],
    '07-11': ['uk-bingsu1.jpg'],
    '07-12': ['uk-partnera2.jpg', 'uk-partnera1.jpg'],
    '07-13': ['uk-gallary1.jpg', 'uk-gallary4.jpg', 'uk-gallary2.jpg', 'uk-gallary3.jpg', 'uk-icecream.jpg', 'uk-billingsgate.jpg', 'uk-mealspaghettibestver.jpg'],
    '07-14': ['uk-stonehange3.jpg', 'uk-jellycats.jpg', 'uk-londonfoxs.jpg', 'uk-london8.jpg', 'uk-sailsbury1.jpg', 'uk-stonehange1.jpg', 'uk-stonehange2.jpg'],
    '07-15': ['uk-shakespeare1.jpg', 'uk-fishandchip.jpg'],
    '07-16': ['uk-kingcollege.jpg', 'uk-cambridge3.jpg', 'uk-cambridge1.jpg', 'uk-icecream2.jpg', 'uk-cambridge2.jpg', 'uk-london9.jpg'],
    '07-17': ['uk-gallary5.jpg', 'uk-bobatea.jpg', 'uk-meallobster.jpg'],
    '07-18': ['uk-flightbackhome.jpg'],
    '07-19': ['uk-jellycat2.jpg']
  },

  zh: {
    back: '回到首頁',
    eyebrow: 'Experience · 2024 夏天',
    title: '英國教育旅行',
    titleEn: 'Three Weeks in England',
    meta: [['日期', '2024.6.29 – 7.19'], ['學校', 'Ursuline High School'], ['住宿', '寄宿家庭']],
    intro: '新竹女中 2024 暑期英國教育旅行。名額有限，經抽選錄取。前兩週住在寄宿家庭、跟著學伴上課，最後一週走訪英國各地。',

    diaryNo: '壹', diaryHeading: '三週日記',
    diaryHint: '點開任何一天，看看我的那一天。',
    textDay: '文字日記',
    photosLabel: '張照片',
    prev: '前一天', next: '後一天', close: '關閉',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],

    days: [
      { date: '06-29', title: '出發', text: [
        '晚上十點多的航班，窗外是城市的燈。',
        '雖然從小參加童軍，早就習慣露營、離家生活，但英國離台灣有半個地球那麼遠，要和爸媽分開三週，出發時其實很捨不得。'
      ]},
      { date: '06-30', title: '牛津', text: [
        '落地的第一天就到了牛津：石頭砌的學院、彩繪玻璃、長長的餐廳和路燈。第一餐是大家一起吃超市輕食。',
        '傍晚往倫敦的路上，天空很大。晚上到了寄宿家庭，一間公寓的三樓，沒有電梯，大家拖著笨重的大行李箱一階一階爬上去。',
        '我和另外三個好朋友住同一間房，一張上下舖加一張雙人床。每個人都把行李箱攤開，能走動的空間很有限，但也因為這樣，我們到現在都還常常聯絡。',
        '晚餐是一人一整片的比薩。'
      ]},
      { date: '07-01', title: '第一天上學', text: [
        '我們去的是一所女校，每天從公寓對面的公車站搭車上學。',
        '我在當地有兩個學伴，她們會互相協調，看誰那天的課比較適合帶我去。第一天相認時，我們準備了台灣的糖果餅乾和文具當見面禮。'
      ]},
      { date: '07-02', title: '先點名，再禱告', text: [
        '他們早上不會馬上開始上課。同一班的人會先到同一間教室，老師點名、提醒當天的重要事項和要完成的作業、聊一點時事，最後帶大家禱告，才解散去上各自的課。',
        '台灣的高中是同一班待在同一間教室等老師來；他們則是每個人帶著自己的東西，在不同教室之間往返。空堂可以去交誼廳，很多人也會和朋友約在食堂。',
        '晚餐是義大利麵。'
      ]},
      { date: '07-03', title: '數學課', text: [
        '這幾天跟著學伴 A 上了數學、生物、化學和經濟。上課內容其實跟我們學的差不多，剛好碰上他們期末考的檢討，讓我看到了他們的考卷。',
        '比起我們大多是選擇題，他們幾乎每一題都是問答或申論，老師會依回答的深淺斟酌給分。',
        '遊學中心每天給我們三英鎊的學餐額度，我盡量不浪費，幾乎天天都去餐廳報到：比薩、炸馬鈴薯塊、布朗尼，每一樣都很好吃。',
        '這趟去英國，我最喜歡的事是收集明信片。那裡的明信片每一張都很精美，我恨不得把整個展示架都買下來。'
      ]},
      { date: '07-04', title: '轟媽準備的三餐', text: [
        '轟媽每天幫我們準備三餐。早餐是餅乾、麵包、果汁放在桌上；午餐是一份用鋁箔紙包著的三明治，有時鮪魚、有時玉米，再配一包餅乾、一條巧克力，偶爾有香蕉。',
        '晚餐是固定幾樣輪流：咖哩飯、義大利麵、比薩、薯條配雞塊，還有果汁，偶爾有蛋糕。份量很足，每次都吃得非常飽。',
        '見面兩三天後，學伴 B 回送我一頂她自己用毛線勾的帽子，看得出來花了很長的時間，非常用心。'
      ]},
      { date: '07-05', title: '泰晤士河', text: [
        '放學後到了泰晤士河邊。'
      ]},
      { date: '07-06', title: '溫莎城堡', text: [
        '週末到了溫莎城堡，又收集到了幾張溫莎的明信片。',
        '回家的晚餐，又是一人一整片的比薩。'
      ]},
      { date: '07-07', title: '白金漢宮', text: [
        '白金漢宮前的衛兵，聖詹姆斯公園的湖上滿滿都是鴨子和鵝，最後走到大笨鐘。'
      ]},
      { date: '07-08', title: '繡球花小徑上的音樂課', text: [
        '學伴 A 的音樂課和其他課不一樣：要走出校門、過馬路，經過一段路旁開滿繡球花的小徑，才會到上課的那棟獨棟房子。',
        '我們的音樂課內容比較固定，學校歌、木箱鼓和音樂史；他們每人有一台電子琴，學伴說上學期末的作業，是自己寫一首曲子再彈出來。',
        '下課前老師開始放音樂，當地的學生幾乎都能跟著唱，每個人的歌聲都好美，是一個很歡樂的結尾。'
      ]},
      { date: '07-09', title: '讀《鐘樓怪人》', text: [
        '學伴 B 有一堂像我們國文課的文學導讀，那時正在讀《鐘樓怪人》。',
        '老師把大家分成小組，組內輪流朗讀一小段，再丟出幾個問題讓大家討論、互相發表意見。不論學生提出什麼想法，老師都百分之百地肯定和鼓勵，這大概就是大家都很踴躍發言的原因。',
        '討論完，老師讓大家在書頁邊的空白處寫下大量筆記，學伴的書也寫得滿滿的。除了文學，他們也有哲學和心理學的課，很多是我們高中沒有接觸過的。',
        '晚餐是薯條配雞塊。'
      ]},
      { date: '07-10', title: '獅子王', text: [
        '去看了《獅子王》音樂劇。',
        '我們的座位很高，離舞台很遠，所以我花了一英鎊解鎖座位上的望遠鏡，效果確實很好。'
      ]},
      { date: '07-11', title: '放學去吃冰', text: [
        '我們四個住同一家的好朋友各有自己的學伴，剛好學伴 B 和她們的學伴也是朋友。',
        '這天放學，一群人一起去吃冰、聊天，是和在教室裡很不一樣的交流。'
      ]},
      { date: '07-12', title: '最後一天上學', text: [
        '上學的最後一天，桌上擺著結業證書。在學校的這段時間，我還有幸看到她們的期末表演，真的很驚喜。',
        '很感謝學伴們這段時間的陪伴，讓我在英國的校園生活很順利，也體驗到很道地的文化、增廣見識。到現在，我也常常想起在英國的回憶。'
      ]},
      { date: '07-13', title: '國家美術館', text: [
        '在國家美術館裡慢慢看畫。下午在河邊吃冰淇淋，遠遠看得到倫敦塔橋。'
      ]},
      { date: '07-14', title: '巨石陣', text: [
        '一早出門，在路邊看到一隻動物，本來以為是貓咪，結果居然是狐狸！這是我第一次親眼看到狐狸。',
        '出門前，我跟朋友的 Jellycat 娃娃放在一起，十分可愛。',
        '去了索爾茲伯里大教堂和巨石陣。巨石陣真的是非常漂亮的地方，可以說是整個行程裡我最喜歡的。我把手上的明信片舉起來，跟眼前真正的石頭對一對。'
      ]},
      { date: '07-15', title: '莎士比亞的故鄉', text: [
        '到了莎士比亞的故鄉。終於吃到炸魚薯條。'
      ]},
      { date: '07-16', title: '劍橋', text: [
        '國王學院的彩繪玻璃。我們也去體驗了康河撐篙，坐在船上讓人撐著走，十分愜意。',
        '回倫敦的路上遇到夕陽，突然意識到自己要離開英國了，有一點點不捨。'
      ]},
      { date: '07-17', title: '最後一天在倫敦', text: [
        '國家美術館前的廣場、中國城的珍奶，晚餐是龍蝦堡。這是我第一次吃龍蝦，十分美味。'
      ]},
      { date: '07-18', title: '回家', text: [
        '回程機窗外的日出。',
        '出發時捨不得離開家，現在同樣也捨不得回家。旅程要結束了，我還會再來的！'
      ]},
      { date: '07-19', title: '到家', text: [
        '陪我一起飛回家的兔子。碰巧隔壁是空位，於是小兔也有了自己的座位。',
        '在英國吃了三週，學校和轟家的餐點都很少出現綠色蔬菜，超市賣的也多是生菜，回到台灣反而最期待吃到燙青菜。',
        '英國的夏天很涼，像快入冬的秋天，穿薄長袖都還感覺得到涼意。那種乾爽的天氣是英國很棒的一部分，也讓我回台灣後很難適應走在大太陽底下。'
      ]}
    ],

    backNo: '貳', backHeading: '回頭看',
    looks: [
      ['寄宿家庭', '四個好朋友擠一間房、拖著行李箱爬上沒有電梯的三樓，還有轟媽每天準備的三餐。'],
      ['在學校', '先點名禱告再跑教室、幾乎全是申論題的考卷、繡球花小徑盡頭的音樂課，和老師永遠肯定每一個想法的文學課。'],
      ['語言', '三週下來，我更認識英語系國家的文化，也更重視自己的英文。從那時候開始，我才在平日練習口說。']
    ],
    quote: '有了語言當作橋樑，我們之間的隔閡就少了一道牆。',
    reflection: '出發時很捨不得離家，但開始跟上當地人的步調後，我把重心放在體驗當地的文化，想家也就沒那麼深了。',
    footer: '謝謝你看完我的三週。'
  },

  en: {
    back: 'Back to home',
    eyebrow: 'Experience · Summer 2024',
    title: 'Three Weeks in England',
    titleEn: 'Hsinchu Girls’ Summer Programme in the UK',
    meta: [['Dates', '29 Jun – 19 Jul 2024'], ['School', 'Ursuline High School'], ['Stay', 'Homestay']],
    intro: 'A three-week summer educational programme run by Hsinchu Girls’ High School, with limited places filled by lottery. Two weeks living with a host family and attending classes with local buddies, then a week travelling around England.',

    diaryNo: 'I', diaryHeading: 'The Diary',
    diaryHint: 'Open any day to see what my day looked like.',
    textDay: 'Diary entry',
    photosLabel: 'photos',
    prev: 'Previous day', next: 'Next day', close: 'Close',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    days: [
      { date: '06-29', title: 'Departure', text: [
        'A flight just after ten at night, city lights below the window.',
        'Scouting had got me used to camping and living away from home, but England is half a world away. Leaving my parents for three weeks was harder than I expected.'
      ]},
      { date: '06-30', title: 'Oxford', text: [
        'Our first day on the ground was in Oxford: stone colleges, stained glass, a long dining hall, old lamps. Our first meal was supermarket snacks we shared together.',
        'The sky felt enormous on the road to London. That night we reached our host family’s flat, on the third floor with no lift. Everyone hauled their suitcases up the stairs one step at a time.',
        'Three close friends and I shared one room, with a bunk bed and a double bed. With four suitcases open there was barely space to walk, and that is probably why we are still in touch today.',
        'Dinner was a whole pizza each.'
      ]},
      { date: '07-01', title: 'First day of school', text: [
        'We went to a girls’ school, and each morning we took the bus from the stop across from our flat.',
        'I had two buddies, and they worked out between them whose classes suited me best each day. When we first met, we gave them Taiwanese sweets and stationery.'
      ]},
      { date: '07-02', title: 'Registration, then prayer', text: [
        'Lessons don’t start right away. Each form meets in one room first. The teacher takes the register, goes over the day’s notices and deadlines, shares a bit of news and leads a prayer. Only then does everyone head off to their own classes.',
        'In Taiwan, a class stays in one room and teachers come to us. Here, everyone carries their things from room to room. Free periods are spent in the common room or with friends in the dining hall.',
        'Spaghetti for dinner.'
      ]},
      { date: '07-03', title: 'Maths class', text: [
        'Over these days I sat in on maths, biology, chemistry and economics with Buddy A. The content was close to what we learn, and we arrived just as they were going over their final exams, so I got to see the papers.',
        'Where ours are mostly multiple choice, almost every question on theirs was short-answer or essay, marked on how deep the answer went.',
        'The programme gave us £3 a day for the school canteen, and I used it almost every day: pizza, potato wedges, brownies. All of it was good.',
        'My favourite thing on this whole trip was collecting postcards. Every single one was so beautiful that I wanted to buy the whole display stand.'
      ]},
      { date: '07-04', title: 'Three meals a day', text: [
        'Our host mum made all three meals. Breakfast was biscuits, bread and juice on the table. Lunch was a foil-wrapped sandwich, tuna one day and sweetcorn the next, with biscuits, a chocolate bar and sometimes a banana.',
        'Dinners rotated: curry and rice, pasta, pizza, chips and nuggets, always with juice and sometimes cake. There was always more than enough food.',
        'Two or three days after we met, Buddy B gave me a hat she had crocheted herself. It must have taken her a long time.'
      ]},
      { date: '07-05', title: 'The Thames', text: [
        'By the river after school.'
      ]},
      { date: '07-06', title: 'Windsor Castle', text: [
        'A weekend at Windsor Castle, and a few more postcards for my collection.',
        'Back home for dinner, and another whole pizza each.'
      ]},
      { date: '07-07', title: 'Buckingham Palace', text: [
        'The guards at Buckingham Palace, a lake in St James’s Park full of ducks and geese, and a walk to Big Ben.'
      ]},
      { date: '07-08', title: 'Music past the hydrangeas', text: [
        'Buddy A’s music lesson was different from the rest. We walked out of the school gate, crossed the road and followed a path lined with hydrangeas in full bloom to a separate house.',
        'Our music classes follow a set plan: the school song, cajón, music history. They each had a keyboard, and last term’s project was to compose and perform their own piece.',
        'At the end the teacher put on some songs and nearly everyone sang along, beautifully. It was such a happy way to finish.'
      ]},
      { date: '07-09', title: 'Reading Notre-Dame', text: [
        'Buddy B had a literature class, a bit like our Chinese class, and they were reading The Hunchback of Notre-Dame.',
        'In small groups we took turns reading a passage aloud, then discussed a few questions and shared our views. Whatever anyone said, the teacher met it with complete encouragement, which is probably why everyone was so willing to speak.',
        'Afterwards everyone filled the margins with notes, and my buddy’s book was covered in them. They also take philosophy and psychology, subjects we never had in high school.',
        'Chips and nuggets for dinner.'
      ]},
      { date: '07-10', title: 'The Lion King', text: [
        'The Lion King.',
        'Our seats were very high and far from the stage, so I paid £1 to unlock the opera glasses on my seat. They really worked.'
      ]},
      { date: '07-11', title: 'Ice after school', text: [
        'Each of the four of us had our own buddies, and Buddy B happened to be friends with theirs.',
        'After school we all went out for shaved ice and talked. It was a very different kind of exchange from the classroom.'
      ]},
      { date: '07-12', title: 'Last day of school', text: [
        'Our last day at school, with certificates on the table. During our time there I also got to see their end-of-year performance, which was a wonderful surprise.',
        'I am so grateful to my buddies for being with me these weeks. Thanks to them, school life in England went smoothly, and I got to experience the culture from the inside and see much more of the world. I still think back on those days often.'
      ]},
      { date: '07-13', title: 'The National Gallery', text: [
        'A slow wander through the National Gallery, then ice cream by the river with Tower Bridge in the distance.'
      ]},
      { date: '07-14', title: 'Stonehenge', text: [
        'An early start. I spotted an animal on the pavement and thought it was a cat, but it was a fox! It was the first fox I had ever seen with my own eyes.',
        'Before we left, my friend’s Jellycat and mine sat together, and they looked adorable.',
        'Salisbury Cathedral, then Stonehenge. It is a truly beautiful place, and probably my favourite of the whole trip. I held up my postcard to match it against the real stones.'
      ]},
      { date: '07-15', title: 'Shakespeare’s town', text: [
        'Shakespeare’s birthplace, and finally, fish and chips.'
      ]},
      { date: '07-16', title: 'Cambridge', text: [
        'Stained glass in King’s College. We also went punting on the Cam, drifting along while someone steered. So relaxing.',
        'Watching the sunset on the way back to London, it suddenly hit me that I would be leaving England soon, and I felt a little sad.'
      ]},
      { date: '07-17', title: 'Last day in London', text: [
        'Trafalgar Square, bubble tea in Chinatown and a lobster burger for dinner. It was my first time eating lobster, and it was delicious.'
      ]},
      { date: '07-18', title: 'Flying home', text: [
        'Sunrise from the plane window.',
        'I didn’t want to leave home, and now I didn’t want to go home either. The trip was ending, but I’ll be back!'
      ]},
      { date: '07-19', title: 'Home', text: [
        'The bunny who flew home with me. The seat next to me happened to be empty, so the bunny got a seat of its own.',
        'Three weeks of British food had almost no green vegetables, at school or at home, and supermarket vegetables were mostly salad leaves. Back in Taiwan, what I wanted most was a plate of blanched greens.',
        'The English summer was cool, more like late autumn, and I could feel the chill even in a thin long-sleeved top. That dry, fresh weather is one of the best things about England, and it made walking in the Taiwanese sun very hard to get used to again.'
      ]}
    ],

    backNo: 'II', backHeading: 'Looking Back',
    looks: [
      ['Homestay', 'Four friends in one room, suitcases hauled up to a third floor with no lift, and three meals a day from our host mum.'],
      ['School', 'Registration and prayer before lessons, exams that were almost all essays, music at the end of a hydrangea path, and a literature teacher who welcomed every idea.'],
      ['Language', 'Three weeks taught me a lot about English-speaking cultures and made me take my own English more seriously. That was when I started practising speaking every day.']
    ],
    quote: 'With language as a bridge, there is one less wall between us.',
    reflection: 'I left home reluctantly, but once I fell into the local rhythm and focused on the culture around me, the homesickness faded.',
    footer: 'Thank you for spending three weeks with me.'
  }
};
