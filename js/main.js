(function () {
  var root = document.documentElement;
  var THEME_KEY = 'theme';
  var LANG_KEY = 'lang';

  // Theme
  var themeBtn = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeBtn.textContent = theme === 'light' ? '☀️' : '🌙';
    localStorage.setItem(THEME_KEY, theme);
  }
  var savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(savedTheme);
  themeBtn.addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  // Talks expand/collapse
  var talksList = document.getElementById('talks-list');
  var talksToggle = document.getElementById('talks-toggle');
  function updateTalksToggleLabel(lang) {
    var expanded = !talksList.classList.contains('collapsed');
    var moreAttr = lang === 'en' ? 'data-en-more' : 'data-zh-more';
    var lessAttr = lang === 'en' ? 'data-en-less' : 'data-zh-less';
    talksToggle.textContent = talksToggle.getAttribute(expanded ? lessAttr : moreAttr);
  }
  talksToggle.addEventListener('click', function () {
    talksList.classList.toggle('collapsed');
    updateTalksToggleLabel(localStorage.getItem(LANG_KEY) || 'zh');
  });

  // Language
  var langBtn = document.getElementById('lang-toggle');
  var i18nEls = document.querySelectorAll('[data-zh][data-en]');
  function applyLang(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
    i18nEls.forEach(function (el) {
      el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-zh');
    });
    langBtn.textContent = lang === 'en' ? '中文' : 'EN';
    updateTalksToggleLabel(lang);
    localStorage.setItem(LANG_KEY, lang);
  }
  var savedLang = localStorage.getItem(LANG_KEY) || 'zh';
  applyLang(savedLang);
  langBtn.addEventListener('click', function () {
    applyLang((localStorage.getItem(LANG_KEY) || 'zh') === 'zh' ? 'en' : 'zh');
  });
})();
