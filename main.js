/* 這個檔案負責把 content.js 的內容畫到頁面上，一般不需要修改。 */
(function () {
  var S = window.SITE;
  var main = document.getElementById('main');
  var STAR = '<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0l2.2 7.2L21 3.5l-3.7 6.8L24 12l-6.7 1.7 3.7 6.8-6.8-3.7L12 24l-2.2-7.2L3 20.5l3.7-6.8L0 12l6.7-1.7L3 3.5l6.8 3.7z"/></svg>';


  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var NODES = '';
  var BALS = '<div class="rail-top"></div><div class="bals"></div><div class="rail-bot"></div>';
  var RAIL = '';
  function heading(h, lang, left) {
    return '<div class="heading' + (left ? ' left' : ' rv') + '"><div class="t"><h2>' + esc(h.heading) + '</h2>' +
      '</div></div>';
  }

  function render(lang) {
    var T = S[lang];
    var html = '';

    // HERO
    html +=
      '<section class="hero" id="top">' +
        '<div class="hero-bg" aria-hidden="true"><img class="scene" data-speed="0.18" src="scene.jpg" alt=""><div class="haze"></div></div>' +
        '<div class="swan in trio s2" data-speed="0.05"><div class="bob"><img src="swan-trio.webp" alt=""></div></div>' +
        '<div class="arch-top" aria-hidden="true"></div><div class="arch-ring" aria-hidden="true"></div>' +
        '<div class="pillar pl" aria-hidden="true"><span class="cap"></span></div><div class="pillar pr" aria-hidden="true"><span class="cap"></span></div>' +
        '<div class="balus" aria-hidden="true">' + BALS + '</div><div class="front-water" aria-hidden="true"></div>' +
        '<div class="swan out spread" data-speed="-0.04"><div class="bob"><img src="swan-spread.webp" alt=""></div></div>' +
        '<div class="swan junc j1 s3"><div class="bob"><img src="swan-wings.webp" alt=""></div></div>' +
        '<div class="swan out glide s4" data-speed="-0.07"><div class="bob"><img src="swan-wide.webp" alt=""></div></div>' +
        '<div class="hero-text hero-in">' +
          '<p class="label">' + esc(T.hero.eyebrow) + '</p>' +
          '<h1 class="name">' + esc(S.nameEn) + '</h1>' +
          '<p class="name-zh">' + esc(S.nameZh) + '</p>' +
          '<div class="rule"></div>' +
          '<p class="tagline">' + esc(T.hero.tagline) + '</p>' +
          '<p class="sub">' + esc(T.hero.sub) + '</p>' +
          '<a class="enter" href="#about">' + esc(T.hero.button) + '</a>' +
        '</div>' +
      '</section>';

    // ABOUT
    var A = T.about;
    html +=
      '<section class="s about-s" id="about">' + NODES +
        '<div class="about-visual">' +
          '<img class="about-photo" src="' + esc(S.photo) + '" alt="' + esc(S.nameZh + ' ' + S.nameEn) + '">' +
          '<div class="wrap about-title rv"><h2>' + esc(A.heading) + '</h2></div>' +
        '</div>' +
        '<div class="wrap about-body rv">' +
          '<div class="about-intro"><h3>' + esc(A.title) + '</h3>' +
            A.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
          '<dl class="facts">' + A.facts.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
        '</div>' +
      '</section>';

    // EXPERIENCE
    var E = T.experience;
    html +=
      '<section class="s alt" id="experience">' + NODES +
        '<div class="wrap">' + heading(E, lang) +
          '<ol class="tl">' + E.items.map(function (it) {
            return '<li class="rv' + (it.badge ? ' soon' : '') + '"><span class="when">' + esc(it.when) + '</span><div><h4>' + esc(it.title) +
              (it.badge ? '<span class="badge">' + esc(it.badge) + '</span>' : '') + '</h4><p>' + esc(it.desc) + '</p>' +
              (it.page ? '<a class="more" href="' + esc(it.page) + '">' + (lang === 'zh' ? '了解更多' : 'Read more') + ' →</a>' : '') + '</div></li>';
          }).join('') + '</ol>' +
        '</div>' +
      '</section>';

    // INTERLUDE
    html += RAIL +
      '<section class="interlude" aria-label="Interlude">' +
        '<img class="bg" src="interlude.jpg" alt="" aria-hidden="true">' +
        '<div class="swan sea trio s2"><div class="bob"><img src="swan-trio.webp" alt=""></div></div>' +
        '<div class="swan sea glide s4"><div class="bob"><img src="swan-glide.webp" alt=""></div></div>' +
        '<div class="swan sea littles s3"><div class="bob"><img src="swan-little.webp" alt=""></div></div>' +
        '<p class="rv"><span class="l1">' + esc(T.interlude[0]) + '</span><span class="l2">' + esc(T.interlude[1]) + '</span></p>' +
      '</section>';

    // INTERESTS
    var I = T.interests;
    html +=
      '<section class="s" id="interests">' + NODES +
        '<div class="wrap">' + heading(I, lang) +
          '<div class="cards">' + I.items.map(function (c) {
            return '<article class="card rv"><h3 class="big">' + esc(c.title) + '</h3><p class="alt">' + esc(c.en) + '</p>' + (c.desc ? '<p>' + esc(c.desc) + '</p>' : '') + '</article>';
          }).join('') + '</div>' +
        '</div>' +
      '</section>';

    // CONTACT
    var C = T.contact;
    var rows =
      '<div class="row"><span class="k">Email</span><a class="v" id="email" href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a>' +
        '<button type="button" class="copy" id="copy-email">' + esc(C.copy) + '</button></div>' +
      '<a class="row" href="' + esc(S.instagram) + '" target="_blank" rel="noopener"><span class="k">Instagram</span><span class="v">' + esc(S.instagramHandle) + '</span><span class="go" aria-hidden="true">↗</span></a>';
    if (S.linkedin) {
      rows += '<a class="row" href="' + esc(S.linkedin) + '" target="_blank" rel="noopener"><span class="k">LinkedIn</span><span class="v">' + esc(S.linkedinHandle || 'LinkedIn') + '</span><span class="go" aria-hidden="true">↗</span></a>';
    }
    html +=
      RAIL + '<section class="s alt" id="contact">' + NODES +
        '<div class="wrap">' + heading(C, lang) +
          '<div class="contact rv">' + (C.lead ? '<p class="lead">' + esc(C.lead) + '</p>' : '') + '<div class="rows">' + rows + '</div></div>' +
        '</div>' +
      '</section>';

    main.innerHTML = html;

    // nav + footer text
    ['about', 'experience', 'interests', 'contact'].forEach(function (k) {
      document.getElementById('nav-' + k).textContent = T.nav[k];
    });
    document.getElementById('foot-note').textContent = T.footer;
    document.getElementById('foot-name').textContent = S.nameEn;
    document.getElementById('copyright').textContent = '© ' + new Date().getFullYear() + ' ' + S.nameZh + ' ' + S.nameEn;

    wireCopy(C);
    wireSwans();
    setupReveal();
    parallax();
  }

  // 彩蛋：點天鵝，牠會游開，過一會兒再游回來
  function wireSwans() {
    document.querySelectorAll('.swan').forEach(function (sw) {
      sw.addEventListener('click', function (e) {
        if (sw.classList.contains('away')) return;
        var r = document.createElement('span'); r.className = 'ripple';
        var b = sw.getBoundingClientRect();
        r.style.left = (e.clientX - b.left) + 'px'; r.style.top = (b.height * 0.85) + 'px';
        sw.appendChild(r); setTimeout(function () { r.remove(); }, 1600);
        sw.classList.add('away');
        setTimeout(function () { sw.classList.remove('away'); sw.classList.add('back'); }, 7000);
        setTimeout(function () { sw.classList.remove('back'); }, 9500);
      });
    });
  }

  function wireCopy(C) {
    var btn = document.getElementById('copy-email');
    btn.addEventListener('click', function () {
      var el = document.getElementById('email');
      function ok() { btn.textContent = C.copied; setTimeout(function () { btn.textContent = C.copy; }, 1800); }
      function select() { var r = document.createRange(); r.selectNodeContents(el); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(el.textContent).then(ok, select);
      else select();
    });
  }

  // Scroll reveal: only elements below the first screen start hidden
  var io = null;
  function setupReveal() {
    if (io) io.disconnect();
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    var vh = window.innerHeight;
    document.querySelectorAll('.rv').forEach(function (el) {
      if (el.getBoundingClientRect().top > vh * 0.92) { el.classList.add('pre'); io.observe(el); }
    });
  }

  // Parallax layers
  var layers = [], ticking = false;
  function parallax() {
    layers = [].slice.call(document.querySelectorAll('[data-speed]'));
    update();
  }
  function update() {
    ticking = false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var vh = window.innerHeight;
    layers.forEach(function (el) {
      var host = el.parentElement.getBoundingClientRect();
      if (host.bottom < -200 || host.top > vh + 200) return;
      var offset = (host.top + host.height / 2 - vh / 2) * parseFloat(el.getAttribute('data-speed'));
      var base = '';
      el.style.transform = base + 'translate3d(0,' + (-offset).toFixed(1) + 'px,0)';
    });
  }
  window.addEventListener('scroll', function () {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);

  // Language
  function setLang(lang, animate) {
    if (lang !== 'zh' && lang !== 'en') lang = 'zh';
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.body.classList.toggle('zh', lang === 'zh');
    document.title = lang === 'zh' ? S.nameZh + ' ' + S.nameEn : S.nameEn + ' · ' + S.nameZh;
    document.getElementById('lang-zh').setAttribute('aria-pressed', String(lang === 'zh'));
    document.getElementById('lang-en').setAttribute('aria-pressed', String(lang === 'en'));
    var y = window.scrollY;
    render(lang);
    window.scrollTo(0, y);
    if (animate) { main.classList.remove('fading'); void main.offsetWidth; main.classList.add('fading'); }
    try { localStorage.setItem('ayi-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); });
  });

  var start = null;
  if (location.hash === '#en' || location.hash === '#zh') start = location.hash.slice(1);
  if (!start) { try { start = localStorage.getItem('ayi-lang'); } catch (e) {} }
  if (!start) start = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLang(start, false);
})();
