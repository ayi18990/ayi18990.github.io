/* 英國頁的飛機動畫：進來時 台北 → 曼谷 → 倫敦，回首頁時飛回台北。一般不需要修改。 */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';
  // 經緯度換成畫面座標（倫敦在左、台北在右）
  var TPE = [121.5, -25], BKK = [100.5, -13.7], LHR = [-0.5, -51.5];
  var OUT = 'M' + TPE + ' Q111,-12 ' + BKK + ' Q52,-66 ' + LHR;
  var BACK = 'M' + LHR + ' Q52,-66 ' + BKK + ' Q111,-12 ' + TPE;
  var PLANE = 'M4 0 L-0.6 -0.7 L-2.2 -4 L-3.3 -4 L-2.1 -0.7 L-4 -0.6 L-4.9 -1.9 L-5.6 -1.9 L-5 0 L-5.6 1.9 L-4.9 1.9 L-4 0.6 L-2.1 0.7 L-3.3 4 L-2.2 4 L-0.6 0.7 Z';

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'zh'; }
  function names() {
    return lang() === 'en' ? ['Taipei', 'Bangkok', 'London'] : ['台北', '曼谷', '倫敦'];
  }
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function build(d) {
    var wrap = document.createElement('div');
    wrap.className = 'fly';
    wrap.setAttribute('aria-hidden', 'true');
    var svg = el('svg', { viewBox: '-24 -80 170 88', preserveAspectRatio: 'xMidYMid meet' });
    var M = window.FLY_MAP;
    if (M) {
      var defs = el('defs', {}, svg);
      var g = el('radialGradient', { id: 'fly-fade', cx: '50%', cy: '50%', r: '50%' }, defs);
      el('stop', { offset: '52%', 'stop-color': '#fff' }, g);
      el('stop', { offset: '100%', 'stop-color': '#fff', 'stop-opacity': 0 }, g);
      var mk = el('mask', { id: 'fly-mask', maskUnits: 'userSpaceOnUse', x: -34, y: -84, width: 190, height: 96 }, defs);
      el('rect', { x: -34, y: -84, width: 190, height: 96, fill: 'url(#fly-fade)' }, mk);
      var map = el('g', { mask: 'url(#fly-mask)', class: 'fly-map' }, svg);
      el('path', { d: M.land, class: 'fly-land' }, map);
      el('path', { d: M.borders, class: 'fly-border' }, map);
    }
    [-60, -45, -30, -15].forEach(function (y) { el('line', { x1: -24, x2: 146, y1: y, y2: y, class: 'fly-lat' }, svg); });
    el('path', { d: d, class: 'fly-route' }, svg);
    var trail = el('path', { d: d, class: 'fly-trail' }, svg);
    var n = names();
    [[TPE, n[0], -3.2], [BKK, n[1], 5.5], [LHR, n[2], 5.5]].forEach(function (c) {
      el('circle', { cx: c[0][0], cy: c[0][1], r: 1, class: 'fly-dot' }, svg);
      var t = el('text', { x: c[0][0], y: c[0][1] + c[2], class: 'fly-city', 'text-anchor': 'middle' }, svg);
      t.textContent = c[1];
    });
    var plane = el('g', { class: 'fly-plane' }, svg);
    el('path', { d: PLANE }, plane);
    wrap.appendChild(svg);
    document.body.appendChild(wrap);
    var L = trail.getTotalLength();
    trail.style.strokeDasharray = L;
    trail.style.strokeDashoffset = L;
    return { wrap: wrap, trail: trail, plane: plane, L: L };
  }

  function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  function fly(f, ms, done) {
    var start = null, stopped = false;
    function frame(now) {
      if (stopped) return;
      if (start === null) start = now;
      var t = Math.min(1, (now - start) / ms), e = ease(t), at = f.L * e;
      var p = f.trail.getPointAtLength(at), q = f.trail.getPointAtLength(Math.min(f.L, at + .6));
      if (at + .6 > f.L) { var r = f.trail.getPointAtLength(at - .6); q = { x: p.x + (p.x - r.x), y: p.y + (p.y - r.y) }; }
      var ang = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
      f.plane.setAttribute('transform', 'translate(' + p.x + ' ' + p.y + ') rotate(' + ang + ') scale(.9)');
      f.trail.style.strokeDashoffset = f.L - at;
      if (t < 1) requestAnimationFrame(frame); else done();
    }
    requestAnimationFrame(frame);
    return function () { stopped = true; };
  }

  // 進場：台北 → 曼谷 → 倫敦
  function arrive() {
    if (reduce || /^#day-/.test(location.hash)) return;
    var f = build(OUT), gone = false;
    document.documentElement.classList.add('flying');
    function end() {
      if (gone) return; gone = true; stop();
      f.wrap.classList.add('out');
      document.documentElement.classList.remove('flying');
      setTimeout(function () { f.wrap.remove(); }, 400);
    }
    var stop = fly(f, 1000, function () { setTimeout(end, 120); });
    f.wrap.addEventListener('click', end);
    document.addEventListener('keydown', end, { once: true });
  }

  // 離開：倫敦 → 曼谷 → 台北，然後回首頁
  function leave(href) {
    if (reduce) { location.href = href; return; }
    var f = build(BACK), went = false;
    f.wrap.classList.add('in');
    function go() { if (went) return; went = true; location.href = href; }
    setTimeout(function () { fly(f, 900, function () { setTimeout(go, 80); }); }, 180);
    f.wrap.addEventListener('click', go);
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="index.html"]');
    if (!a) return;
    e.preventDefault();
    leave(a.getAttribute('href'));
  });
  // 用瀏覽器「上一頁」回到這裡時，把殘留的畫面清掉
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) document.querySelectorAll('.fly').forEach(function (x) { x.remove(); });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrive); else arrive();
})();
