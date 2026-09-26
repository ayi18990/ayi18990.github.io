/* 攝影頁的畫面程式，一般不需要修改 */
(function () {
  var P = window.PHOTOS, main = document.getElementById('main');
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function render(lang) {
    var T = P[lang], h = '';
    h += '<section class="sub-hero ph-hero">' +
      '<img class="sky" src="scene.jpg" alt="" aria-hidden="true">' +
      '<div class="wrap ph-hero-in hero-in">' +
        '<p class="label">' + esc(T.eyebrow) + '</p>' +
        '<h1>' + esc(T.title) + '</h1>' +
        '<p class="alt">' + esc(T.titleEn) + '</p>' +
        '<p class="ph-intro">' + esc(T.intro) + '</p>' +
      '</div>' +
      '<div class="sub-water" aria-hidden="true"></div>' +
      '<div class="swan out sub-swan s4"><div class="bob"><img src="swan-wide.webp" alt=""></div></div>' +
    '</section>';
    var items = P.photos.length ? P.photos.map(function (p) {
      return '<figure class="ph rv"><img src="' + esc(p.src) + '" alt="' + esc(p.title || T.title) + '" loading="lazy">' +
        ((p.title || p.place || p.year) ? '<figcaption><b>' + esc(p.title) + '</b><span>' + esc([p.place, p.year].filter(Boolean).join(' · ')) + '</span></figcaption>' : '') + '</figure>';
    }).join('') : [1, 2, 3, 4, 5, 6].map(function (i) {
      return '<figure class="ph ph-empty rv' + (i % 3 === 2 ? ' tall' : '') + '"><span>' + esc(T.empty) + '</span></figure>';
    }).join('');
    h += '<section class="s wrap"><div class="ph-grid">' + items + '</div>' +
      '<p class="ph-cta rv"><a class="enter" href="' + esc(P.vsco) + '" target="_blank" rel="noopener">' + esc(T.cta) + ' ↗</a><span>' + esc(P.vscoHandle) + '</span></p>' +
      '<p class="back-bottom rv"><a class="back" href="index.html#interests">← ' + esc(T.back) + '</a></p>' +
    '</section>';
    main.innerHTML = h;
    document.getElementById('back').textContent = '← ' + T.back;
    document.getElementById('foot-note').textContent = T.footer;
    document.getElementById('copyright').textContent = '© ' + new Date().getFullYear() + ' 呂翼 A-yi Lu';
    swans();
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
  function setLang(l, anim) {
    if (l !== 'zh' && l !== 'en') l = 'zh';
    document.documentElement.lang = l === 'zh' ? 'zh-Hant' : 'en';
    document.body.classList.toggle('zh', l === 'zh');
    document.title = P[l].title + ' · 呂翼 A-yi Lu';
    document.getElementById('lang-zh').setAttribute('aria-pressed', String(l === 'zh'));
    document.getElementById('lang-en').setAttribute('aria-pressed', String(l === 'en'));
    render(l);
    if (anim) { main.classList.remove('fading'); void main.offsetWidth; main.classList.add('fading'); }
    try { localStorage.setItem('ayi-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); }); });
  var s = null; try { s = localStorage.getItem('ayi-lang'); } catch (e) {}
  if (!s) s = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLang(s, false);
})();
