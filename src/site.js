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
