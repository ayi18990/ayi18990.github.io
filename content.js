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
  photo: 'images/portrait-waist.jpg',

  /* ---------- 聯絡方式 Links ---------- */
  email: 'yilu18990321@gmail.com',
  instagram: 'https://www.instagram.com/ayi8990/',
  instagramHandle: '@ayi8990',
  linkedin: 'https://www.linkedin.com/in/ayi18990',   // LinkedIn 網址；空著就不會顯示
  linkedinHandle: 'ayi18990',

  /* ================= 繁體中文 ================= */
  zh: {
    nav: { about: '關於我', experience: '經歷', interests: '興趣', contact: '聯絡' },

    hero: {
      eyebrow: 'Personal Portfolio · 2026',
      tagline: '臺北醫學大學 生物醫學工程學系',
      sub: '怎麼過每一天，決定你是誰。',
      button: '認識我'
    },

    about: {
      heading: 'About',
      sub: '關於我',
      title: '想知道生醫工程，還能走到哪裡。',
      paragraphs: [
        '我相信，怎麼過每一天，決定你是誰。所以我從 9 歲開始當童軍，高中同時擔任班長、泳隊副隊長和交通服務隊隊長，現在在北醫念生醫工程。我還在找自己最想投入的方向，但我知道我想走向國際，也想成為能真正幫上忙的人。',
        '如果你正在這個領域工作或研究，很希望能聽聽你的經驗。'
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
        { when: '2023', title: '第 25 屆世界童軍大露營', desc: '以參加人員身分出席，和來自世界各地的童軍一起生活與交流。' },
        { when: '2023–2026\n高中', title: '就讀新竹女中', desc: '國立新竹女子高級中學。' },
        { when: '2025\n高二', title: '班長 · 游泳隊副隊長 · 交通服務隊隊長', desc: '同時擔任三個幹部職位，學會統籌事務、帶領團隊，也為一群人負責。' },
        { when: '2026', title: '臺北醫學大學 生物醫學工程學系', desc: '進入大學，開始探索生醫工程的各種可能。' },
        { when: '2027', title: '第 26 屆世界童軍大露營 · 波蘭', desc: '將擔任 IST（國際服務團隊）成員，從參加者轉換為服務者。', badge: '即將參加' }
      ]
    },

    interlude: ['保持好奇，', '也保持溫柔。'],   // 兩行，排成 Z 字形

    interests: {
      heading: 'Interests',
      sub: '課本以外的我',
      items: [
        { title: '吉他', en: 'Guitar', desc: '' },
        { title: '攝影', en: 'Photography', desc: '用鏡頭記錄旅行和日常。' },
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
    nav: { about: 'About', experience: 'Experience', interests: 'Interests', contact: 'Contact' },

    hero: {
      eyebrow: 'Personal Portfolio · 2026',
      tagline: 'Biomedical Engineering · Taipei Medical University',
      sub: 'How you spend each day decides who you are.',
      button: 'Enter'
    },

    about: {
      heading: 'About',
      sub: '',
      title: 'Curious about where biomedical engineering can go next.',
      paragraphs: [
        "I believe how you spend each day decides who you are. That's why I've been a scout since I was nine, why I served as class president, swim team vice-captain and traffic service team captain at the same time in high school, and why I'm now studying biomedical engineering at Taipei Medical University. I'm still finding the direction I most want to commit to, but I know I want to work internationally and become someone who can truly help.",
        "If you work or research in this field, I'd love to hear about your experience."
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
        { when: '2023', title: '25th World Scout Jamboree', desc: 'Attended as a participant, living and exchanging ideas with scouts from around the world.' },
        { when: '2023–2026\nHigh School', title: "Hsinchu Girls' Senior High School", desc: "National Hsinchu Girls' Senior High School." },
        { when: '2025\nGrade 11', title: 'Class President · Swim Team Vice-Captain · Traffic Service Team Captain', desc: 'Held three leadership roles at once, learning to coordinate people, lead a team and take responsibility for a group.' },
        { when: '2026', title: 'Taipei Medical University, Biomedical Engineering', desc: 'Started university and began exploring what biomedical engineering can do.' },
        { when: '2027', title: '26th World Scout Jamboree · Poland', desc: 'Will serve on the International Service Team (IST), moving from participant to volunteer.', badge: 'Upcoming' }
      ]
    },

    interlude: ['Stay curious,', 'and stay kind.'],

    interests: {
      heading: 'Interests',
      sub: '',
      items: [
        { title: 'Guitar', en: '吉他', desc: '' },
        { title: 'Photography', en: '攝影', desc: 'I capture travel and everyday moments.' },
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
