/* 首頁的畫面程式：把 content.js 的內容畫出來。一般不需要修改。 */
(function () {
  var S = window.SITE, main = document.getElementById('main'), lang = 'zh';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // 大字：一個字母一個 span，滑鼠靠近會放大
  function mag(t) {
    return '<span class="mag" aria-label="' + esc(t) + '">' + String(t).split('').map(function (c) {
      return c === ' ' ? '<span class="sp" aria-hidden="true"> </span>' : '<span class="ch" aria-hidden="true">' + esc(c) + '</span>';
    }).join('') + '</span>';
  }
  // 內文：一樣拆字，但英文以單字為單位不斷行，放大幅度比較小
  var PUNCT = /[，。、；：！？」』）》〉,.;:!?)\]]/;
  function txt(t) {
    var out = '', parts = String(t == null ? '' : t).match(/[A-Za-z0-9'’.\-–—&%@\/+()]+|\s+|[\s\S]/g) || [];
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (/^\s+$/.test(p)) { out += ' '; continue; }
      var chars = p.split('');
      while (i + 1 < parts.length && parts[i + 1].length === 1 && PUNCT.test(parts[i + 1])) chars.push(parts[++i]);
      out += '<span class="w">' + chars.map(function (c) { return '<span class="ch">' + esc(c) + '</span>'; }).join('') + '</span>';
    }
    return '<span class="mag-t">' + out + '</span>';
  }
  // 參考 font.jpg：第一個字母用草寫花體，其餘是細長大寫
  function fancy(t) {
    return String(t).split(' ').map(function (w) { return '<span class="fw"><span class="sw">' + esc(w.charAt(0)) + '</span>' + esc(w.slice(1).toUpperCase()) + '</span>'; }).join(' ');
  }
  function head(no, sub, h) { return '<p class="eyebrow rv"><b>' + no + '</b>' + esc(sub || '') + '</p><h2 class="h2 rv">' + mag(h) + '</h2>'; }
  function more(href, zh, en) { return '<a class="more" href="' + esc(href) + '">' + (lang === 'zh' ? zh : en) + ' <span aria-hidden="true">→</span></a>'; }
  var STAR = '<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z"/></svg>';

  function render() {
    var T = S[lang], h = '';

    // HERO
    h += '<section class="hero" id="top">' +
      '<div class="ghost" aria-hidden="true"><img src="wings-ghost.webp" alt=""></div>' +
      '<div class="swan"><div class="hop"><div class="bob"><img src="swan-halftone.webp" alt=""><span class="hit" role="button" tabindex="0" aria-label="Swan"></span></div></div></div>' +
      '<div class="wrap"><div class="hero-text">' +
        '<p class="eyebrow rv">' + esc(T.hero.eyebrow) + '</p>' +
        '<h1 class="name rv">' + mag(S.nameEn) + '</h1>' +
        '<p class="name-zh rv">' + esc(S.nameZh) + '</p>' +
        '<div class="hero-meta rv"><p class="tagline">' + txt(T.hero.tagline) + '</p>' +
          (T.hero.status ? '<p class="status"><i></i>' + txt(T.hero.status) + '</p>' : '') + '</div>' +
      '</div></div></section>';

    // ABOUT
    var A = T.about;
    h += '<section class="sec blue from-dark" id="about"><div class="wrap">' + head('01', A.sub, A.heading) +
      '<div class="grid about-grid">' +
        '<div class="about-text rv"><h3>' + txt(A.title) + '</h3>' + A.paragraphs.map(function (p) { return '<p>' + txt(p) + '</p>'; }).join('') + '</div>' +
        '<figure class="about-photo glass rv"><span class="glow" aria-hidden="true"></span><img src="' + esc(S.photo) + '" alt="' + esc(S.nameZh + ' ' + S.nameEn) + '">' +
          '</figure>' +
        '<dl class="facts rv">' + A.facts.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + txt(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
      '</div></div></section>';

    // STATS
    if (T.stats && T.stats.length) {
      h += '<section class="sec dark from-blue stats-s"><div class="wrap"><dl class="stats">' + T.stats.map(function (x) {
        return '<div class="rv"><dt>' + mag(x[0]) + '</dt><dd>' + txt(x[1]) + '</dd></div>';
      }).join('') + '</dl></div></section>';
    }

    // FOCUS
    var F = T.focus;
    if (F) {
      h += '<section class="sec blue from-dark" id="focus"><div class="wrap">' + head('02', lang === 'zh' ? '方向' : '', F.heading) +
        '<div class="grid focus-grid">' + F.items.map(function (x) {
          return '<article class="focus-item rv"><p class="no">' + esc(x.no) + '</p><h3>' + txt(x.title) + '</h3><p class="en">' + esc(x.en) + '</p><p class="d">' + txt(x.desc) + '</p></article>';
        }).join('') + (F.looking ? '<p class="looking rv">' + txt(F.looking) + '</p>' : '') + '</div></div></section>';
    }

    // EXPERIENCE：時間線，特別的經歷用金色標註
    var E = T.experience;
    h += '<section class="sec blue alt" id="experience"><div class="wrap">' + head('03', E.sub, E.heading) +
      '<ol class="tl">' + E.items.map(function (it) {
        var f = it.featured;
        return '<li class="rv' + (f ? ' gold' : '') + (it.badge ? ' soon' : '') + '">' +
          '<span class="when">' + esc(it.when) + '</span>' +
          '<span class="dot" aria-hidden="true">' + (f ? STAR : '') + '</span>' +
          '<div class="tl-body">' + (f ? '<p class="hl">' + STAR + (lang === 'zh' ? '特別經歷' : 'Highlight') + '</p>' : '') +
            '<h4>' + txt(it.title) + (it.badge ? ' <span class="badge">' + esc(it.badge) + '</span>' : '') + '</h4>' +
            (it.desc ? '<p class="d">' + txt(it.desc) + '</p>' : '') +
            (it.page ? more(it.page, '了解更多', 'Read more') : '') + '</div></li>';
      }).join('') + '</ol></div></section>';

    // INTERESTS：發光玻璃卡
    var I = T.interests;
    h += '<section class="sec dark from-blue glowsec" id="interests"><span class="rise" aria-hidden="true"></span><div class="wrap">' + head('04', I.sub, I.heading) +
      '<div class="gcards">' + I.items.map(function (c, i) {
        var en = lang === 'zh' ? c.en : c.title, zh = lang === 'zh' ? c.title : c.en;
        return '<article class="gcard glass rv">' +
          '<div class="gc-body"><h3 class="fancy" aria-label="' + esc(en) + '">' + fancy(en) + '</h3><p class="gc-zh">' + esc(zh) + '</p>' + (c.desc ? '<p class="d">' + txt(c.desc) + '</p>' : '') +
          (c.page ? more(c.page, '看作品', 'View work') : '') + '</div><span class="no">0' + (i + 1) + '</span></article>';
      }).join('') + '</div></div></section>';

    // CONTACT
    var C = T.contact;
    var soc = [['Instagram', S.instagram, S.instagramHandle], ['LinkedIn', S.linkedin, S.linkedinHandle], ['VSCO', S.vsco, S.vscoHandle]].filter(function (x) { return x[1]; });
    h += '<section class="sec dark" id="contact"><div class="wrap">' + head('05', C.sub, C.heading) +
      '<div class="rv mail-row"><a class="mail" id="email" href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a><button type="button" class="copy" id="copy-email">' + esc(C.copy) + '</button></div>' +
      '<div class="socials rv">' + soc.map(function (x) { return '<a href="' + esc(x[1]) + '" target="_blank" rel="noopener"><b>' + x[0] + '</b>' + esc(x[2]) + ' ↗</a>'; }).join('') + '</div>' +
      '</div><div class="seabed" aria-hidden="true"></div></section>';

    main.innerHTML = h;
    ['about', 'focus', 'experience', 'interests', 'contact'].forEach(function (k) { var a = document.getElementById('nav-' + k); if (a && T.nav[k]) a.textContent = T.nav[k]; });
    document.getElementById('foot-note').textContent = T.footer;
    document.getElementById('foot-name').textContent = S.nameEn;
    document.getElementById('copyright').textContent = '© ' + new Date().getFullYear() + ' ' + S.nameZh + ' ' + S.nameEn;
    wireCopy(C); wireSwan(); reveal(); collect(); placeFeathers();
  }

  function wireCopy(C) {
    var btn = document.getElementById('copy-email');
    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(S.email).then(function () {
        btn.textContent = C.copied; setTimeout(function () { btn.textContent = C.copy; }, 1800);
      }, function () {});
    });
  }

  // 天鵝：點一下會跳走，過一會兒再從另一邊回來
  function wireSwan() {
    var sw = main.querySelector('.swan'), hit = main.querySelector('.swan .hit'); if (!sw || !hit) return;
    function go() {
      if (sw.classList.contains('away') || sw.classList.contains('back')) return;
      sw.classList.add('away');
      setTimeout(function () { sw.classList.remove('away'); sw.classList.add('back'); }, 4200);
      setTimeout(function () { sw.classList.remove('back'); }, 6100);
    }
    hit.addEventListener('click', go);
    hit.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  }

  // ===== 羽毛 =====
  // [圖, 所在區塊, 左%, 區塊內高度%, 寬px, 旋轉deg, 透明度, 翻轉]
  var FEATHERS = [
    ['feather-a.webp', 'top', 6, 16, 150, -28, .9], ['feather-c.webp', 'top', 22, 30, 40, 40, .85], ['feather-a.webp', 'top', 84, 12, 110, 62, .6, 1],
    ['feather-c.webp', 'top', 46, 9, 34, 12, .7],
    ['feather-d.webp', 'stats', 90, 12, 50, 28, .55], ['feather-c.webp', 'stats', 3, 55, 38, -30, .6],
    ['feather-e.webp', 'interests', 88, 8, 110, -12, .45], ['feather-a.webp', 'contact', 82, 18, 170, -14, .55, 1], ['feather-c.webp', 'contact', 64, 40, 44, 28, .7]
  ];
  // 沉在網頁最底部、躺著的羽毛
  var SEABED = [['feather-e.webp', 8, 150, 4, .8], ['feather-d.webp', 30, 60, 82, .7], ['feather-a.webp', 55, 190, -96, .55], ['feather-c.webp', 76, 44, 70, .85], ['feather-e.webp', 90, 90, -8, .6]];
  var layer = null;
  function placeFeathers() {
    if (!layer) { layer = document.createElement('div'); layer.className = 'feather-layer'; layer.setAttribute('aria-hidden', 'true'); document.body.appendChild(layer); }
    layer.innerHTML = '';
    layer.style.height = '0px';
    var ft = document.querySelector('.foot'), docH = ft ? ft.offsetTop : document.documentElement.scrollHeight;
    layer.style.height = docH + 'px';
    var small = window.innerWidth < 760;
    FEATHERS.forEach(function (f) {
      var sec = document.getElementById(f[1]); if (!sec) return;
      var el = document.createElement('button');
      el.type = 'button'; el.className = 'feather'; el.tabIndex = -1;
      var w = small ? Math.round(f[4] * .55) : f[4];
      el.style.cssText = 'left:' + f[2] + '%;top:' + Math.round(sec.offsetTop + sec.offsetHeight * f[3] / 100) + 'px;width:' + w + 'px;opacity:' + f[6];
      el.innerHTML = '<img src="' + f[0] + '" alt="" style="transform:rotate(' + f[5] + 'deg)' + (f[7] ? ' scaleX(-1)' : '') + '">';
      el.addEventListener('click', function () { drift(el); });
      layer.appendChild(el);
    });
    SEABED.forEach(function (f) {
      var el = document.createElement('span'); el.className = 'feather rest';
      var w = small ? Math.round(f[2] * .6) : f[2];
      el.style.cssText = 'left:' + f[1] + '%;top:' + (docH - Math.max(40, w * .55) - 6) + 'px;width:' + w + 'px;opacity:' + f[4];
      el.innerHTML = '<img src="' + f[0] + '" alt="" style="transform:rotate(' + f[3] + 'deg)">';
      layer.appendChild(el);
    });
  }
  // 點羽毛：飄落、沉到網頁底部，再從天上飄回原位
  function drift(el) {
    if (el.dataset.busy || !el.animate) return;
    el.dataset.busy = 1;
    var top = el.offsetTop, docH = layer.offsetHeight;
    var fall = docH - top - el.offsetHeight * .6;
    var t1 = Math.min(11000, Math.max(4500, fall * 1.4));
    var sway = [];
    for (var i = 0; i <= 10; i++) {
      var p = i / 10, x = Math.sin(p * Math.PI * 4) * 60, r = Math.sin(p * Math.PI * 4 + 1) * 28;
      sway.push({ transform: 'translate(' + x.toFixed(1) + 'px,' + (fall * p * p * .35 + fall * p * .65).toFixed(0) + 'px) rotate(' + r.toFixed(1) + 'deg)', opacity: i === 10 ? 0 : (i > 8 ? .5 : 1), offset: p });
    }
    el.animate(sway, { duration: t1, easing: 'linear', fill: 'forwards' }).onfinish = function () {
      var back = [];
      for (var j = 0; j <= 8; j++) {
        var q = j / 8, bx = Math.sin(q * Math.PI * 3) * 50, br = Math.sin(q * Math.PI * 3 + 2) * 22;
        back.push({ transform: 'translate(' + bx.toFixed(1) + 'px,' + (-(1 - q) * (top + 200)).toFixed(0) + 'px) rotate(' + br.toFixed(1) + 'deg)', opacity: q < .1 ? 0 : 1, offset: q });
      }
      el.animate(back, { duration: 5200, easing: 'cubic-bezier(.3,.6,.4,1)', fill: 'forwards' }).onfinish = function () { el.getAnimations().forEach(function (a) { a.cancel(); }); delete el.dataset.busy; };
    };
  }

  // 淡入
  var io;
  function reveal() {
    if (io) io.disconnect();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px', threshold: .06 });
    var vh = window.innerHeight;
    document.querySelectorAll('.rv').forEach(function (el) { if (el.getBoundingClientRect().top > vh * .9) { el.classList.add('pre'); io.observe(el); } });
  }

  // 滑鼠靠近的字會放大：標題名字明顯，內文只放大一點點
  var groups = [], mx = -9999, my = -9999, raf = 0;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function collect() {
    groups = [].slice.call(document.querySelectorAll('.mag, .mag-t')).map(function (g) {
      var big = g.classList.contains('mag');
      return { el: g, chars: [].slice.call(g.querySelectorAll('.ch')), R: big ? 170 : 60, amt: big ? .3 : .12 };
    });
  }
  function tick() {
    raf = 0;
    var vh = window.innerHeight;
    groups.forEach(function (g) {
      var gb = g.el.getBoundingClientRect();
      var near = !(gb.bottom < -50 || gb.top > vh + 50) && my > gb.top - g.R && my < gb.bottom + g.R && mx > gb.left - g.R && mx < gb.right + g.R;
      if (!near) { if (g.dirty) { g.chars.forEach(function (c) { c.style.transform = ''; }); g.dirty = false; } return; }
      g.dirty = true;
      var rects = g.chars.map(function (c) { return c.getBoundingClientRect(); });
      g.chars.forEach(function (c, i) {
        var b = rects[i], dx = mx - (b.left + b.width / 2), dy = my - (b.top + b.height / 2), d = Math.sqrt(dx * dx + dy * dy);
        var k = d < g.R ? 1 - d / g.R : 0, sc = 1 + g.amt * k * k * (3 - 2 * k);
        c.style.transform = sc > 1.002 ? 'scale(' + sc.toFixed(3) + ')' : '';
      });
    });
  }
  if (canHover) {
    window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
    window.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
    document.addEventListener('mouseleave', function () { mx = my = -9999; if (!raf) raf = requestAnimationFrame(tick); });
  }

  window.addEventListener('scroll', function () { document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(placeFeathers, 200); });
  window.addEventListener('load', placeFeathers);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeFeathers);

  function setLang(l, anim) {
    if (l !== 'zh' && l !== 'en') l = 'zh';
    lang = l;
    document.documentElement.lang = l === 'zh' ? 'zh-Hant' : 'en';
    document.body.classList.toggle('zh', l === 'zh');
    document.title = l === 'zh' ? S.nameZh + ' ' + S.nameEn : S.nameEn + ' · ' + S.nameZh;
    document.getElementById('lang-zh').setAttribute('aria-pressed', String(l === 'zh'));
    document.getElementById('lang-en').setAttribute('aria-pressed', String(l === 'en'));
    var y = window.scrollY; render(); window.scrollTo(0, y);
    if (anim) { main.classList.remove('fading'); void main.offsetWidth; main.classList.add('fading'); }
    try { localStorage.setItem('ayi-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); }); });
  var start = null;
  if (location.hash === '#en' || location.hash === '#zh') start = location.hash.slice(1);
  if (!start) { try { start = localStorage.getItem('ayi-lang'); } catch (e) {} }
  if (!start) start = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLang(start, false);
})();
