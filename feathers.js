/* 內頁的羽毛：開場散落幾根、網頁底部沉著幾根；點一下會飄落沉底，再從天上飄回來。一般不需要修改。 */
(function () {
  var TOP = [['feather-a.webp', 5, 110, 130, -28, .85], ['feather-c.webp', 24, 250, 38, 40, .8], ['feather-d.webp', 88, 150, 56, -18, .75], ['feather-e.webp', 76, 420, 90, 12, .5]];
  var BED = [['feather-e.webp', 8, 140, 4, .7], ['feather-d.webp', 34, 56, 82, .6], ['feather-a.webp', 60, 170, -96, .5], ['feather-c.webp', 84, 42, 70, .8]];
  var layer, small;
  function place() {
    if (!layer) { layer = document.createElement('div'); layer.className = 'feather-layer'; layer.setAttribute('aria-hidden', 'true'); document.body.appendChild(layer); }
    layer.innerHTML = '';
    var foot = document.querySelector('footer');
    var bottom = foot ? foot.offsetTop : document.documentElement.scrollHeight;
    layer.style.height = bottom + 'px';
    small = window.innerWidth < 760;
    TOP.forEach(function (f) {
      var el = document.createElement('button'); el.type = 'button'; el.className = 'feather'; el.tabIndex = -1;
      var w = small ? Math.round(f[3] * .55) : f[3];
      el.style.cssText = 'left:' + f[1] + '%;top:' + f[2] + 'px;width:' + w + 'px;opacity:' + f[5];
      el.innerHTML = '<img src="' + f[0] + '" alt="" style="transform:rotate(' + f[4] + 'deg)">';
      el.addEventListener('click', function () { drift(el, bottom); });
      layer.appendChild(el);
    });
    BED.forEach(function (f) {
      var el = document.createElement('span'); el.className = 'feather rest';
      var w = small ? Math.round(f[2] * .6) : f[2];
      el.style.cssText = 'left:' + f[1] + '%;top:' + (bottom - Math.max(34, w * .5) - 4) + 'px;width:' + w + 'px;opacity:' + f[4];
      el.innerHTML = '<img src="' + f[0] + '" alt="" style="transform:rotate(' + f[3] + 'deg)">';
      layer.appendChild(el);
    });
  }
  function drift(el, bottom) {
    if (el.dataset.busy || !el.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.dataset.busy = 1;
    var top = el.offsetTop, fall = bottom - top - el.offsetHeight * .6, t1 = Math.min(11000, Math.max(4500, fall * 1.4)), k = [], i;
    for (i = 0; i <= 10; i++) { var p = i / 10; k.push({ transform: 'translate(' + (Math.sin(p * Math.PI * 4) * 60).toFixed(1) + 'px,' + (fall * p * p * .35 + fall * p * .65).toFixed(0) + 'px) rotate(' + (Math.sin(p * Math.PI * 4 + 1) * 28).toFixed(1) + 'deg)', opacity: i === 10 ? 0 : (i > 8 ? .5 : 1), offset: p }); }
    el.animate(k, { duration: t1, easing: 'linear', fill: 'forwards' }).onfinish = function () {
      var b = [];
      for (i = 0; i <= 8; i++) { var q = i / 8; b.push({ transform: 'translate(' + (Math.sin(q * Math.PI * 3) * 50).toFixed(1) + 'px,' + (-(1 - q) * (top + 200)).toFixed(0) + 'px) rotate(' + (Math.sin(q * Math.PI * 3 + 2) * 22).toFixed(1) + 'deg)', opacity: q < .1 ? 0 : 1, offset: q }); }
      el.animate(b, { duration: 5200, easing: 'cubic-bezier(.3,.6,.4,1)', fill: 'forwards' }).onfinish = function () { el.getAnimations().forEach(function (a) { a.cancel(); }); delete el.dataset.busy; };
    };
  }
  var rt;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(place, 200); });
  window.addEventListener('load', function () { setTimeout(place, 300); });
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('.lang button')) setTimeout(place, 400); });
  if (document.readyState !== 'loading') setTimeout(place, 300); else document.addEventListener('DOMContentLoaded', function () { setTimeout(place, 300); });
})();
