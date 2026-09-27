/* ==========================================================
   網站內容都在這個檔案裡 ✦ All website text lives here
   ----------------------------------------------------------
   修改方法：只改「引號 ' ' 裡面的字」就好。
   - 不要刪掉引號、逗號、括號
   - zh: 是繁體中文版，en: 是英文版，兩邊要一起改
   - 想新增一筆經歷，就複製一整段 { ... }, 貼在下面
   ========================================================== */

window.SITE = {

  /* ---------- 基本資料 Basic info ---------- */
  nameEn: 'A-yi Lu',
  nameZh: '呂翼',
  photo: 'portrait-waist.jpg',

  /* ---------- 聯絡方式 Links ---------- */
  email: 'yilu18990321@gmail.com',
  instagram: 'https://www.instagram.com/ayi18990/',
  instagramHandle: '@ayi18990',
  linkedin: 'https://www.linkedin.com/in/ayi18990',   // LinkedIn 網址；空著就不會顯示
  linkedinHandle: 'ayi18990',
  vsco: 'https://vsco.co/ayi18990/gallery',   // 攝影作品集
  vscoHandle: 'vsco.co/ayi18990',

  /* ================= 繁體中文 ================= */
  zh: {
    nav: { about: '關於我', focus: '方向', experience: '經歷', interests: '興趣', contact: '聯絡' },

    hero: {
      eyebrow: 'Personal Portfolio · 2026',
      tagline: '臺北醫學大學 生物醫學工程學系',
      sub: '',   // 名字下方的一句話，空著就不顯示
      status: '大一 · 正在尋找實驗室專題與產業交流的機會',   // 首頁名字下方的狀態，空著就不顯示
      coords: '25.026° N, 121.561° E · TAIPEI',
      button: '認識我'
    },

    // 一眼看懂的數字（首頁 About 下方）：[數字, 說明]
    stats: [
      ['10', '年童軍資歷'],
      ['3', '個幹部職位同時兼任'],
      ['30', '人泳隊，擔任副隊長'],
      ['7.0', 'IELTS 總分']
    ],

    focus: {
      heading: 'Focus',
      items: [
        { no: '01', en: 'Biomaterials', title: '生醫材料', desc: '想了解一種材料如何從實驗室走進臨床、從材料銜接成產品，最後真正安全地用在人身上。' },
        { no: '02', en: 'Molecular Biomedicine', title: '分子生物醫學', desc: '想從分子的層次理解疾病，找到更精準的診斷與治療方式。' },
        { no: '03', en: 'Industry', title: '產業應用', desc: '好奇研究怎麼變成真正幫得上忙的產品。' }
      ],
      looking: '如果你正在這個領域工作或研究，很希望能聽聽你的經驗；有機會的話，我也想參與實驗室專題、增加研究經驗，以及產業參訪與交流的機會。'   // 空著就不顯示
    },

    about: {
      heading: 'About',
      sub: '關於我',
      title: '怎麼過每一天，決定你是誰。',
      paragraphs: [
        '從 9 歲開始，我便與童軍一路相伴。高中期間，我也曾擔任班長、泳隊副隊長與交通服務隊隊長，在一次次與人合作、承擔責任的過程中，我慢慢學會如何成為一個可靠的團隊成員。',
        '現在的我，仍在尋找真正想投入的方向。但我很確定，我想走向國際、接觸不同的人與世界。對我而言，走出去不只是為了看看更大的世界，也希望能帶著自己的能力參與和付出。'
      ],
      facts: [
        ['學校', '臺北醫學大學'],
        ['科系', '生物醫學工程學系 · 大一'],
        ['語言', '中文 · English（IELTS 7.0）']
      ]
    },

    experience: {
      heading: 'Experience',
      sub: '經歷與領導',
      // 每一筆可以加 page: 'pages/scouting.html' 這樣的網址，就會出現「了解更多」連結
      items: [
        { when: '2016\n9 歲起', title: '參與童軍活動', desc: '多次參加臺灣各地的露營活動，從野外生活中學會團隊合作與照顧彼此。' },
        { when: '2023', title: '第 25 屆世界童軍大露營 · 韓國', desc: '以參加人員身分出席，和來自世界各地的童軍一起生活與交流。' },
        { when: '2023–2026\n高中', title: '國立新竹女子高級中學', desc: '' },
        { when: '2024', title: '英國教育旅行', desc: '新竹女中暑期英國教育旅行（名額有限，經抽選錄取）。三週裡有兩週住在寄宿家庭，跟著當地學伴到 Ursuline High School 上課。', page: 'uk.html' },
        { when: '2025\n高二', title: '游泳校隊副隊長', desc: '帶領近 30 人的泳隊，主導水運會開場表演、入隊測驗與招生影片。', page: 'swim.html' },
        { when: '2025\n高二', title: '班長 · 交通服務隊隊長', desc: '與游泳校隊副隊長同時擔任，學會統籌事務，也為一群人負責。' },
        { when: '2026', title: '臺北醫學大學 生物醫學工程學系', desc: '進入大學，開始探索生醫工程的各種可能。' },
        { when: '2027', title: '第 26 屆世界童軍大露營 · 波蘭', desc: '將擔任 IST（國際服務團隊）成員，從參加者轉換為服務者。', badge: '即將參加' }
      ]
    },


    interests: {
      heading: 'Interests',
      sub: '課本以外的我',
      items: [
        { title: '吉他', en: 'Guitar', desc: '目前加入北醫吉他社，從和弦和刷法開始，一邊練習自己喜歡的歌。' },
        { title: '攝影', en: 'Photography', desc: '用鏡頭記錄旅行和日常。', page: 'photos.html' },
        { title: '游泳', en: 'Swimming', desc: '高中游泳隊出身，到現在仍然很喜歡待在水裡。' }
      ]
    },


    contact: {
      heading: 'Contact',
      sub: '聯絡我',
      lead: '',
      copy: '複製', copied: '已複製'
    },

    footer: '臺北醫學大學 · 生物醫學工程學系'
  },

  /* ================= English ================= */
  en: {
    nav: { about: 'About', focus: 'Focus', experience: 'Experience', interests: 'Interests', contact: 'Contact' },

    hero: {
      eyebrow: 'Personal Portfolio · 2026',
      tagline: 'Biomedical Engineering · Taipei Medical University',
      sub: '',
      status: 'Year 1 · Open to lab projects and industry conversations',
      coords: '25.026° N, 121.561° E · TAIPEI',
      button: 'Enter'
    },

    stats: [
      ['10', 'years in Scouting'],
      ['3', 'leadership roles held at once'],
      ['30', 'swimmers on the team I co-led'],
      ['7.0', 'IELTS overall']
    ],

    focus: {
      heading: 'Focus',
      items: [
        { no: '01', en: '生醫材料', title: 'Biomaterials', desc: 'How a material moves from the lab into the clinic and from material into product, until it can be used safely in people.' },
        { no: '02', en: '分子生物醫學', title: 'Molecular Biomedicine', desc: 'Understanding disease at the molecular level to find more precise ways to diagnose and treat it.' },
        { no: '03', en: '產業應用', title: 'Industry', desc: 'How research becomes products that genuinely help people.' }
      ],
      looking: "If you work or research in this field, I'd love to hear about your experience. Where possible, I'd also like to join lab projects, build research experience, and take part in industry visits and conversations."
    },

    about: {
      heading: 'About',
      sub: '',
      title: 'How you spend each day decides who you are.',
      paragraphs: [
        "Scouting has been part of my life since I was nine. In high school I also served as class president, swim team vice-captain and traffic service team captain. Working with others and taking on responsibility, again and again, slowly taught me how to be someone a team can rely on.",
        "I'm still searching for the direction I truly want to commit to. But I'm certain that I want to go international and meet different people and different worlds. For me, going out isn't only about seeing a bigger world; I also hope to bring my own abilities to take part and contribute."
      ],
      facts: [
        ['School', 'Taipei Medical University'],
        ['Major', 'Biomedical Engineering · Year 1'],
        ['Languages', 'Mandarin · English (IELTS 7.0)']
      ]
    },

    experience: {
      heading: 'Experience',
      sub: '',
      items: [
        { when: '2016\nAge 9', title: 'Joined Scouting', desc: 'Took part in many camps across Taiwan, learning teamwork and how to look out for each other outdoors.' },
        { when: '2023', title: '25th World Scout Jamboree · Korea', desc: 'Attended as a participant, living and exchanging ideas with scouts from around the world.' },
        { when: '2023–2026\nHigh School', title: "National Hsinchu Girls' Senior High School", desc: '' },
        { when: '2024', title: 'Summer Programme in England', desc: 'Three weeks in England through Hsinchu Girls\u2019 summer programme (places by lottery): two weeks with a host family, attending classes with local buddies at Ursuline High School.', page: 'uk.html' },
        { when: '2025\nGrade 11', title: 'Swim Team Vice-Captain', desc: 'Led a team of almost 30 swimmers, including the swim-meet opening show, tryouts and a recruitment video.', page: 'swim.html' },
        { when: '2025\nGrade 11', title: 'Class President · Traffic Service Team Captain', desc: 'Held alongside the swim team role, learning to coordinate people and take responsibility for a group.' },
        { when: '2026', title: 'Taipei Medical University, Biomedical Engineering', desc: 'Started university and began exploring what biomedical engineering can do.' },
        { when: '2027', title: '26th World Scout Jamboree · Poland', desc: 'Will serve on the International Service Team (IST), moving from participant to volunteer.', badge: 'Upcoming' }
      ]
    },


    interests: {
      heading: 'Interests',
      sub: '',
      items: [
        { title: 'Guitar', en: '吉他', desc: 'Now in the TMU Guitar Club, learning chords and strumming while practising songs I love.' },
        { title: 'Photography', en: '攝影', desc: 'I capture travel and everyday moments.', page: 'photos.html' },
        { title: 'Swimming', en: '游泳', desc: 'A former high-school swim team member who still loves being in the water.' }
      ]
    },


    contact: {
      heading: 'Contact',
      sub: '',
      lead: '',
      copy: 'Copy', copied: 'Copied'
    },

    footer: 'Taipei Medical University · Biomedical Engineering'
  }
};
