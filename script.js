function setLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    var label = btn.textContent.trim();
    btn.classList.toggle('active', (lang === 'en' && label === 'EN') || (lang === 'es' && label === 'ES'));
  });
}

(function initLang() {
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'es') setLang(saved);
  } catch (e) {}
})();
