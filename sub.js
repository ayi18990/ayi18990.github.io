/* 子頁面的畫面程式，一般不需要修改 */
(function () {
  var P = window.PAGE, main = document.getElementById('main');
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function head(s) { return '<div class="sec-head rv"><span class="no">' + esc(s.no) + '</span><h2>' + esc(s.heading) + '</h2></div>'; }
  function table(h, rows, cls) {
    return '<div class="tbl-wrap rv"><table class="' + (cls || '') + '"><thead><tr>' + h.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr' + (r[0] ? ' class="grp"' : '') + '>' + r.map(function (x) { return '<td>' + esc(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  function render(lang) {
    var T = P[lang], h = '';
    h += '<section class="sub-hero">' +
      '<img class="sky" src="scene.jpg" alt="" aria-hidden="true">' +
      '<div class="wrap sub-hero-grid">' +
        '<div class="sub-hero-text hero-in">' +
          '<p class="label">' + esc(T.eyebrow) + '</p>' +
          '<h1>' + esc(T.title) + '</h1>' +
          '<p class="alt">' + esc(T.titleEn) + '</p>' +
          '<dl class="meta">' + T.meta.map(function (m) { return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('') + '</dl>' +
        '</div>' +
        '<figure class="framed hero-in"><img class="pic" src="' + esc(P.cover) + '" alt="' + esc(T.title) + '"><img class="frm" src="swim-frame.webp" alt="" aria-hidden="true"></figure>' +
      '</div>' +
      '<div class="sub-water" aria-hidden="true"></div>' +
      '<div class="swan out sub-swan s4"><div class="bob"><img src="swan-wide.webp" alt=""></div></div>' +
    '</section>';

    var A = T.s1;
    h += '<section class="s wrap">' + head(A) +
      '<div class="two rv"><div><h3>' + esc(A.motiveTitle) + '</h3><p>' + esc(A.motive) + '</p></div>' +
      '<div><h3>' + esc(A.whyTitle) + '</h3><p>' + esc(A.why) + '</p></div></div>' +
      '<dl class="facts team rv">' + A.team.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
      '<div class="gallery rv"><img class="big" src="swim-team1.jpg" alt=""><img src="swim-team2.jpg" alt=""><img src="swim-team3.jpg" alt=""></div>' +
    '</section>';

    var B = T.s2;
    h += '<section class="s wrap">' + head(B) + '<p class="lead rv">' + esc(B.summary) + '</p>' +
      '<div class="cards three">' + B.duties.map(function (d) { return '<article class="card rv"><h3 class="big">' + esc(d[0]) + '</h3><p>' + esc(d[1]) + '</p></article>'; }).join('') + '</div>' +
      '<ol class="ways rv">' + B.ways.map(function (w) { return '<li><h4>' + esc(w[0]) + '</h4><p>' + esc(w[1]) + '</p></li>'; }).join('') + '</ol>' +
    '</section>';

    var C = T.s3;
    h += '<section class="s wrap">' + head(C) + '<p class="lead rv">' + esc(C.intro) + '</p>' + table(C.tableHead, C.table, 'roles-tbl') +
      '<div class="feature rv"><h3>' + esc(C.showTitle) + '</h3><p class="alt">' + esc(C.showSub) + '</p>' +
        '<div class="sketches">' + [1,2,3,4,5,6,7,8,9].map(function (i) { return '<img src="swim-f' + i + '.jpg" alt="">'; }).join('') + '</div>' +
        '<p class="cap">' + esc(C.sketchCaption) + '</p>' +
        '<div class="show-text">' + C.show.map(function (x) { return '<div><h4>' + esc(x[0]) + '</h4><p>' + esc(x[1]) + '</p></div>'; }).join('') + '</div>' +
        '<div class="show-pics"><img src="swim-show1.jpg" alt=""><img src="swim-show2.jpg" alt=""></div>' +
      '</div>' +
    '</section>';

    var D = T.s4;
    h += '<section class="s wrap">' + head(D) + '<p class="lead rv">' + esc(D.intro) + '</p>' +
      '<div class="res">' + table(D.indHead, D.ind) + table(D.relayHead, D.relay) + '</div>' +
      '<div class="champ rv"><h3>' + esc(D.champTitle) + '</h3><ul>' + D.champ.map(function (c) { return '<li><span>' + esc(c[0]) + '</span><b>' + esc(c[1]) + '</b></li>'; }).join('') + '</ul></div>' +
    '</section>';

    var E = T.s5;
    h += '<section class="s wrap">' + head(E) +
      '<div class="cards three">' + E.items.map(function (x) { return '<article class="card rv left"><h3 class="big">' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></article>'; }).join('') + '</div>' +
      '<blockquote class="quote rv"><p>' + esc(E.quote) + '</p></blockquote>' +
      '<p class="reflect rv">' + esc(E.reflection) + '</p>' +
      '<p class="back-bottom rv"><a class="enter" href="index.html#experience">← ' + esc(T.back) + '</a></p>' +
    '</section>';

    main.innerHTML = h;
    document.getElementById('back').textContent = '← ' + T.back;
    document.getElementById('foot-note').textContent = T.footer;
    document.getElementById('copyright').textContent = '© ' + new Date().getFullYear() + ' 呂翼 A-yi Lu';
    swans(); reveal();
  }
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
    io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }); }, { threshold: .08 });
    var vh = window.innerHeight;
    document.querySelectorAll('.rv').forEach(function (el) { if (el.getBoundingClientRect().top > vh * .92) { el.classList.add('pre'); io.observe(el); } });
  }
  function setLang(l, anim) {
    if (l !== 'zh' && l !== 'en') l = 'zh';
    document.documentElement.lang = l === 'zh' ? 'zh-Hant' : 'en';
    document.body.classList.toggle('zh', l === 'zh');
    document.title = P[l].title + ' · 呂翼 A-yi Lu';
    document.getElementById('lang-zh').setAttribute('aria-pressed', String(l === 'zh'));
    document.getElementById('lang-en').setAttribute('aria-pressed', String(l === 'en'));
    var y = window.scrollY; render(l); window.scrollTo(0, y);
    if (anim) { main.classList.remove('fading'); void main.offsetWidth; main.classList.add('fading'); }
    try { localStorage.setItem('ayi-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); }); });
  var s = null; try { s = localStorage.getItem('ayi-lang'); } catch (e) {}
  if (!s) s = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLang(s, false);
})();
