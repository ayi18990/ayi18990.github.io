/* 導覽列：頂端是深色，往下滑慢慢變成淡色毛玻璃（子頁面用） */
(function () {
  var nav = document.getElementById('nav'); if (!nav) return;
  function f() {
    var t = Math.min(1, Math.max(0, window.scrollY / 420));
    nav.style.setProperty('--t', t.toFixed(3));
    nav.classList.toggle('lightnav', t > .5);
  }
  window.addEventListener('scroll', f, { passive: true }); f();
})();
