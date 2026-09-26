/* ==========================================================
   攝影作品集頁面的內容
   ----------------------------------------------------------
   新增作品：把照片上傳到 GitHub（例如 photo-01.jpg），
   再在下面 photos 裡加一行：
     { src: 'photo-01.jpg', title: '霧中的湖', place: '臺北', year: '2026' },
   photos 是空的時候，頁面會顯示「作品整理中」的空框。
   ========================================================== */
window.PHOTOS = {
  vsco: 'https://vsco.co/ayi18990/gallery',
  vscoHandle: 'vsco.co/ayi18990',

  photos: [
    // { src: 'photo-01.jpg', title: '', place: '', year: '' },
  ],

  zh: {
    back: '回到首頁',
    eyebrow: 'Interests · Photography',
    title: '攝影',
    titleEn: 'Photography',
    intro: '用鏡頭記錄旅行和日常。這裡會放我精選的作品，完整的作品集在 VSCO。',
    empty: '作品整理中',
    cta: '到 VSCO 看更多作品',
    footer: '臺北醫學大學 · 生物醫學工程學系'
  },
  en: {
    back: 'Back to home',
    eyebrow: 'Interests · Photography',
    title: 'Photography',
    titleEn: '攝影',
    intro: 'I capture travel and everyday moments. A selection will live here; my full gallery is on VSCO.',
    empty: 'Coming soon',
    cta: 'See more on VSCO',
    footer: 'Taipei Medical University · Biomedical Engineering'
  }
};
