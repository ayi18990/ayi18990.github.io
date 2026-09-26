/* 英國教育旅行頁面的畫面程式，一般不需要修改（文字和照片在 uk-content.js） */
(function () {
  var P = window.UK, main = document.getElementById('main');
  var lang = 'zh', openIdx = -1, lastFocus = null;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pics(d) { return P.photos[d.date] || []; }
  function thumb(src) { return src.replace(/^uk-/, 'uk-t-'); }
  function dateObj(d) { var p = d.date.split('-'); return new Date(2024, +p[0] - 1, +p[1]); }
  function md(d) { var p = d.date.split('-'); return (+p[0]) + '/' + (+p[1]); }
  function head(no, h) { return '<div class="sec-head rv"><span class="no">' + esc(no) + '</span><h2>' + esc(h) + '</h2></div>'; }

  function tile(d, i, T) {
    var ph = pics(d), wd = T.weekdays[dateObj(d).getDay()];
    var inner = ph.length
      ? '<img src="' + esc(thumb(ph[0])) + '" alt="" loading="lazy">'
      : '<span class="td-mark">' + esc(T.textDay) + '</span>';
    return '<button type="button" class="day' + (ph.length ? '' : ' text') + '" data-i="' + i + '" style="--col:' + (dateObj(d).getDay() + 1) + '">' +
      inner +
      '<span class="day-cap"><b>' + esc(md(d)) + '</b><i>' + esc(wd) + '</i><span>' + esc(d.title) + '</span></span>' +
    '</button>';
  }

  function render() {
    var T = P[lang], h = '';
    h += '<section class="sub-hero">' +
      '<img class="sky" src="scene.jpg" alt="" aria-hidden="true">' +
      '<div class="wrap sub-hero-grid">' +
        '<div class="sub-hero-text hero-in">' +
          '<p class="label">' + esc(T.eyebrow) + '</p>' +
          '<h1>' + esc(T.title) + '</h1>' +
          '<p class="alt">' + esc(T.titleEn) + '</p>' +
          '<p class="uk-intro">' + esc(T.intro) + '</p>' +
          '<dl class="meta">' + T.meta.map(function (m) { return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('') + '</dl>' +
        '</div>' +
        '<figure class="framed hero-in"><img class="pic" src="' + esc(P.cover) + '" alt="' + esc(T.title) + '"><img class="frm" src="swim-frame.webp" alt="" aria-hidden="true"></figure>' +
      '</div>' +
      '<div class="sub-water" aria-hidden="true"></div>' +
      '<div class="swan out sub-swan s4"><div class="bob"><img src="swan-wide.webp" alt=""></div></div>' +
    '</section>';

    h += '<section class="s wrap" id="diary">' + head(T.diaryNo, T.diaryHeading) +
      '<p class="lead rv">' + esc(T.diaryHint) + '</p>' +
      '<div class="cal rv">' +
        T.weekdays.map(function (w) { return '<span class="wd">' + esc(w) + '</span>'; }).join('') +
        T.days.map(function (d, i) { return tile(d, i, T); }).join('') +
      '</div>' +
    '</section>';

    h += '<section class="s wrap">' + head(T.backNo, T.backHeading) +
      '<div class="cards three">' + T.looks.map(function (x) { return '<article class="card rv left"><h3 class="big">' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></article>'; }).join('') + '</div>' +
      '<blockquote class="quote rv"><p>' + esc(T.quote) + '</p></blockquote>' +
      '<p class="reflect rv">' + esc(T.reflection) + '</p>' +
      '<p class="back-bottom rv"><a class="enter" href="index.html#experience">← ' + esc(T.back) + '</a></p>' +
    '</section>';

    var dh = '<div class="dlg" id="dlg" role="dialog" aria-modal="true" aria-labelledby="dlg-title" hidden>' +
      '<div class="dlg-bg" data-close></div>' +
      '<div class="dlg-panel" tabindex="-1">' +
        '<button type="button" class="dlg-x" data-close aria-label="' + esc(T.close) + '">×</button>' +
        '<div class="dlg-body" id="dlg-body"></div>' +
        '<nav class="dlg-nav"><button type="button" id="dlg-prev">← <span></span></button><button type="button" id="dlg-next"><span></span> →</button></nav>' +
      '</div>' +
    '</div>';

    main.innerHTML = h;
    var old = document.getElementById('dlg'); if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', dh);
    document.getElementById('back').textContent = '← ' + T.back;
    document.getElementById('foot-note').textContent = T.footer;
    document.getElementById('copyright').textContent = '© ' + new Date().getFullYear() + ' 呂翼 A-yi Lu';
    wire(); swans(); reveal();
    if (openIdx >= 0) show(openIdx, false);
  }

  function show(i, push) {
    var T = P[lang], days = T.days;
    if (i < 0 || i >= days.length) return;
    var d = days[i], ph = pics(d), dlg = document.getElementById('dlg');
    var dn = lang === 'zh' ? 'Day ' + (i + 1) : 'Day ' + (i + 1);
    var dateStr = lang === 'zh'
      ? '2024 · ' + md(d) + '（' + T.weekdays[dateObj(d).getDay()] + '）'
      : T.weekdays[dateObj(d).getDay()] + ' ' + dateObj(d).getDate() + ' ' + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][dateObj(d).getMonth()] + ' 2024';
    document.getElementById('dlg-body').innerHTML =
      '<p class="label">' + esc(dn) + ' · ' + esc(dateStr) + '</p>' +
      '<h2 id="dlg-title">' + esc(d.title) + '</h2>' +
      '<div class="dlg-text">' + d.text.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
      (ph.length ? '<div class="dlg-pics' + (ph.length === 1 ? ' one' : '') + '">' + ph.map(function (s) { return '<img src="' + esc(s) + '" alt="" loading="lazy">'; }).join('') + '</div>' : '');
    var pv = document.getElementById('dlg-prev'), nx = document.getElementById('dlg-next');
    pv.hidden = i === 0; nx.hidden = i === days.length - 1;
    if (i > 0) pv.querySelector('span').textContent = md(days[i - 1]) + ' ' + days[i - 1].title;
    if (i < days.length - 1) nx.querySelector('span').textContent = md(days[i + 1]) + ' ' + days[i + 1].title;
    var wasOpen = !dlg.hidden;
    if (!wasOpen) { lastFocus = document.activeElement; dlg.hidden = false; document.documentElement.classList.add('locked'); }
    openIdx = i;
    var panel = dlg.querySelector('.dlg-panel'); panel.scrollTop = 0; panel.focus({ preventScroll: true });
    if (push !== false) { try { history.replaceState(null, '', '#day-' + d.date); } catch (e) {} }
  }
  function hide() {
    var dlg = document.getElementById('dlg'); if (!dlg || dlg.hidden) return;
    dlg.hidden = true; openIdx = -1; document.documentElement.classList.remove('locked');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function wire() {
    main.querySelectorAll('.day').forEach(function (b) { b.addEventListener('click', function () { show(+b.getAttribute('data-i')); }); });
    document.querySelectorAll('#dlg [data-close]').forEach(function (b) { b.addEventListener('click', hide); });
    document.getElementById('dlg-prev').addEventListener('click', function () { show(openIdx - 1); });
    document.getElementById('dlg-next').addEventListener('click', function () { show(openIdx + 1); });
  }
  document.addEventListener('keydown', function (e) {
    if (openIdx < 0) return;
    if (e.key === 'Escape') hide();
    else if (e.key === 'ArrowLeft') show(openIdx - 1);
    else if (e.key === 'ArrowRight') show(openIdx + 1);
    else if (e.key === 'Tab') {
      var f = [].slice.call(document.querySelectorAll('#dlg button:not([hidden])'));
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  function swans() {
    document.querySelectorAll('.swan').forEach(function (sw) {
      sw.addEventListener('click', function (e) {
        if (sw.classList.contains('away')) return;
        var r = document.createElement('span'); r.className = 'ripple'; var b = sw.getBoundingClientRect();
        r.style.left = (e.clientX - b.left) + 'px'; r.style.top = (b.height * .85) + 'px'; sw.appendChild(r); setTimeout(function () { r.remove(); }, 1600);
        sw.classList.add('away');
        setTimeout(function () { sw.classList.remove('away'); sw.classList.add('back'); }, 7000);
        setTimeout(function () { sw.classList.remove('back'); }, 9500);
      });
    });
  }
  var io;
  function reveal() {
    if (io) io.disconnect();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }); }, { threshold: .05 });
    var vh = window.innerHeight;
    document.querySelectorAll('.rv').forEach(function (el) { if (el.getBoundingClientRect().top > vh * .92) { el.classList.add('pre'); io.observe(el); } });
  }
  function setLang(l, anim) {
    if (l !== 'zh' && l !== 'en') l = 'zh';
    lang = l;
    document.documentElement.lang = l === 'zh' ? 'zh-Hant' : 'en';
    document.body.classList.toggle('zh', l === 'zh');
    document.title = P[l].title + ' · 呂翼 A-yi Lu';
    document.getElementById('lang-zh').setAttribute('aria-pressed', String(l === 'zh'));
    document.getElementById('lang-en').setAttribute('aria-pressed', String(l === 'en'));
    var y = window.scrollY; render(); window.scrollTo(0, y);
    if (anim) { main.classList.remove('fading'); void main.offsetWidth; main.classList.add('fading'); }
    try { localStorage.setItem('ayi-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); }); });
  var s = null; try { s = localStorage.getItem('ayi-lang'); } catch (e) {}
  if (!s) s = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  var m = /^#day-(\d\d-\d\d)$/.exec(location.hash);
  if (m) P.zh.days.forEach(function (d, i) { if (d.date === m[1]) openIdx = i; });
  setLang(s, false);
})();
