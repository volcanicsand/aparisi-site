function setLang(lang) {
  if (lang !== 'en' && lang !== 'es') return;
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    var active = btn.textContent.trim().toLowerCase() === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}
(function () {
  var lang = 'en';
  try { var saved = localStorage.getItem('lang'); if (saved === 'es') lang = saved; } catch (e) {}
  setLang(lang);
  var menu = document.querySelector('.nav-hamburger');
  var links = document.getElementById('navLinks');
  function closeMenu() {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
  if (menu && links) {
    menu.addEventListener('click', function () {
      menu.setAttribute('aria-expanded', String(links.classList.toggle('open')));
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && links.classList.contains('open')) { closeMenu(); menu.focus(); }
    });
    document.addEventListener('click', function (event) {
      if (!event.target.closest('nav')) closeMenu();
    });
    links.addEventListener('click', function (event) { if (event.target.closest('a')) closeMenu(); });
    window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
  }
})();
