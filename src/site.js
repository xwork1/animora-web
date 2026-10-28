// Mobil menü aç/kapa.
(function () {
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.menu-toggle');
  if (!header || !btn) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  header.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Kaydırınca beliren öğeler: CSS kaydırma zaman çizelgesi desteklenmiyorsa IntersectionObserver ile.
// Yalnızca görünüm alanı dışındaki öğeler gizlenir; ilk ekrandakiler hiç kaybolmaz.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var native = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
  if (reduce || native || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.classList.remove('pre');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('pre');
    io.observe(el);
  });
})();

// Ekran galerisi: seçme düğmeleri, önceki/sonraki okları, klavye (sol/sağ ok, Home/End) ve kaydırma ile eşitleme.
(function () {
  var root = document.querySelector('[data-gallery]');
  if (!root) return;
  var track = root.querySelector('.gallery-track');
  var items = Array.prototype.slice.call(root.querySelectorAll('.gallery-item'));
  var tabs = Array.prototype.slice.call(root.querySelectorAll('.gallery-tab'));
  var arrows = root.querySelectorAll('.gallery-arrow');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0;

  function setActive(i) {
    current = i;
    items.forEach(function (el, k) { el.classList.toggle('is-active', k === i); });
    tabs.forEach(function (el, k) {
      if (k === i) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
    arrows[0].disabled = i === 0;
    arrows[1].disabled = i === items.length - 1;
  }

  function go(i) {
    i = Math.max(0, Math.min(items.length - 1, i));
    var item = items[i];
    var left = item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2;
    track.scrollTo({ left: left, behavior: reduce ? 'auto' : 'smooth' });
    setActive(i);
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { go(i); });
    tab.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
      if (k === null) return;
      e.preventDefault();
      k = (k + tabs.length) % tabs.length;
      tabs[k].focus();
      go(k);
    });
  });
  arrows.forEach(function (a) {
    a.addEventListener('click', function () { go(current + Number(a.getAttribute('data-dir'))); });
  });
  items.forEach(function (item, i) {
    item.addEventListener('click', function () { if (i !== current) go(i); });
  });
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      go(current + (e.key === 'ArrowRight' ? 1 : -1));
    }
  });

  // Elle kaydırıldığında ortadaki ekranı etkin say.
  var timer;
  track.addEventListener('scroll', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      var mid = track.scrollLeft + track.clientWidth / 2;
      var best = 0;
      var dist = Infinity;
      items.forEach(function (el, k) {
        var d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
        if (d < dist) { dist = d; best = k; }
      });
      if (best !== current) setActive(best);
    }, 90);
  }, { passive: true });

  root.classList.add('is-ready');
  setActive(0);
})();
