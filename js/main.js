(function () {
  const SOCIALS = [
    { label: "GitHub", url: "https://github.com/taipingeric" },
    { label: "YouTube", url: "https://www.youtube.com/@fusionlab7360" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/chihyang-li-a883b375/" },
    { label: "SlideShare", url: "https://www.slideshare.net/ChihyangLi" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=9rX09cAAAAAJ&hl=zh-TW&oi=ao" },
  ];

  const SOCIAL_ICONS = {
    GitHub: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
    YouTube: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.2.34c-.46.05-1.46.06-2.36 1C.63 4.56.4 6.2.4 6.2S.16 8.13.16 10.05v1.8c0 1.93.24 3.86.24 3.86s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02 1.9.18 8.06.34 8.06.34s4.9-.01 8.2-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.24-1.93.24-3.86v-1.8c0-1.92-.24-3.85-.24-3.85ZM9.6 14.5V7.4l6.4 3.56L9.6 14.5Z"/></svg>',
    LinkedIn: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    SlideShare: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.4 8.2a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2Zm11.2 0a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2ZM3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v12h18V6H3Z"/></svg>',
    "Google Scholar": '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6L21 9 12 3Zm0 2.31L17.82 9 12 12.31 6.18 9 12 5.31ZM7 12.36l4.25 2.32a1 1 0 0 0 .95 0L16 12.99v4.19L12 19.4l-5-2.72v-4.32Z"/></svg>',
  };

  // Drop a matching image into assets/partners/<slug>.svg (or .png) to
  // replace the fallback initials badge below - no code changes needed.
  const PARTNERS = [
    { slug: "nvidia", en: "NVIDIA", zh: "NVIDIA", initials: "NV" },
    { slug: "ntu", en: "National Taiwan University", zh: "國立台灣大學", initials: "NTU" },
    { slug: "taiwan-ai-academy", en: "Taiwan AI Academy", zh: "台灣人工智慧學校", initials: "AIA" },
    { slug: "chunghwa-telecom", en: "Chunghwa Telecom", zh: "中華電信", initials: "CHT" },
    { slug: "yzu", en: "Yuan Ze University", zh: "元智大學", initials: "YZU" },
    { slug: "tpcb", en: "Taipei College of Business", zh: "台北商業大學", initials: "TCB" },
    { slug: "cgu", en: "Chang Gung University", zh: "長庚大學", initials: "CGU" },
    { slug: "tku", en: "Tamkang University", zh: "淡江大學", initials: "TKU" },
    { slug: "tzu-chi", en: "Tzu Chi University", zh: "慈濟大學", initials: "TCU" },
    { slug: "victory-education", en: "Victory Education Foundation", zh: "得勝者文教基金會", initials: "VEF" },
    { slug: "capital-securities", en: "Capital Securities", zh: "群益證券", initials: "CSC" },
    { slug: "dongyu", en: "Dong Yu Enterprise", zh: "東育實業", initials: "DYE" },
    { slug: "tong-hsing", en: "Tong Hsing Electronics", zh: "同欣電子", initials: "THE" },
    { slug: "icdf", en: "Intl. Cooperation & Development Fund", zh: "財團法人國際合作發展基金會", initials: "ICDF" },
    { slug: "dream-house", en: "Dream House Foundation", zh: "夢想之家基金會", initials: "DHF" },
    { slug: "youth-1221", en: "1221 Youth Association", zh: "1221青社會", initials: "1221" },
    { slug: "penghu-marine", en: "Penghu Marine Foundation", zh: "澎湖海洋基金會", initials: "PMF" },
    { slug: "tibame", en: "Tibame", zh: "緯育", initials: "TIB" },
  ];

  const CONTENT = {
    en: {
      nav: { about: "About", experience: "Experience", talks: "Talks", awards: "Awards", contact: "Contact" },
      langButtonLabel: "中文",
      hero: {
        eyebrow: "PhD Candidate · AI Engineer · Educator",
        name: "Chih-Yang (Eric) Li",
        role: "AI Researcher & Educator specializing in deep learning, medical imaging, and generative AI.",
        tagline: "Passions in AI. Stay hungry, stay foolish.",
        ctaContact: "Get in touch",
        ctaTalks: "See talks",
      },
      about: { eyebrow: "About", heading: "Background & expertise", expertiseLabel: "Areas of expertise", educationLabel: "Education" },
      experience: { eyebrow: "Experience", heading: "Career timeline" },
      talks: { eyebrow: "Talks", heading: "Courses & lectures", sub: "Selected teaching engagements across industry, academia, and public education." },
      awards: { eyebrow: "Recognition", heading: "Competitions & awards" },
      contact: { heading: "Let's work together", sub: "Open to consulting, teaching engagements, and research collaboration." },
      footer: { copyright: "© 2026 Chih-Yang (Eric) Li", built: "Taipei, Taiwan" },
      expertise: ["Deep Learning", "Artificial Intelligence", "Medical Imaging", "Generative AI", "Large Language Models", "Defect Inspection", "ECG Analysis"],
      education: [
        { degree: "PhD Candidate, Computer Science & Information Engineering", school: "National Taiwan University", years: "2020 – Present" },
        { degree: "B.S., Mechanical Engineering", school: "National Taiwan University", years: "2006 – 2010" },
      ],
      experienceList: [
        { title: "Technical Advisor", years: "2026 – Present" },
        { title: "NVIDIA Certified Instructor", years: "2025 – Present" },
        { title: "AI / Python Course Instructor", years: "2018 – Present" },
        { title: "AI Engineer, Taiwan AI Academy", years: "2018.05 – 2024.07" },
        { title: "iOS Engineer, U-Ioo Technology", years: "2015.10 – 2018.05" },
      ],
      talkCategories: [
        {
          id: "medical", title: "Medical Imaging & Healthcare AI",
          items: [
            { title: "AI in Medical Imaging", org: "Chunghwa Telecom Academy", date: "2024/Sep, 2025/Sep" },
            { title: "AI in Healthcare: Present & Future", org: "Victory Education Foundation", date: "2023 – 2025/Apr" },
            { title: "Applications of AI in Medical Imaging", org: "Tzu Chi University, Dept. of Information Management", date: "2022/Oct" },
            { title: "Clinical Medical Image Analysis: PyTorch Bootcamp", org: "MorningStar Technology", date: "2021/Oct" },
          ],
        },
        {
          id: "genai", title: "Generative AI & LLM",
          items: [
            { title: "Exploring Generative AI", org: "Capital Securities", date: "2026/Apr" },
            { title: "Python / Generative AI", org: "Yuan Ze University Continuing Ed., Taipei College of Business, Dong Yu Enterprise", date: "2025/Jun, Aug" },
            { title: "AI / GenAI Introduction", org: "Tong Hsing Electronics", date: "2024/Sep" },
            { title: "Python × ChatGPT Workflows", org: "NTU CSIE Training Program", date: "2024/Jul –" },
          ],
        },
        {
          id: "foundations", title: "AI Foundations & Youth Education",
          items: [
            { title: "Edge AI: Introduction & Applications", org: "International Cooperation and Development Fund", date: "2025/Sep" },
            { title: "AI Hands-on Camp", org: "NTU CSIE Training Program", date: "2024/Jul –" },
            { title: "AI Introduction & Practice", org: "Dream House Foundation", date: "2024/Apr, Oct" },
            { title: "Foundations of Python", org: "Independent Workshop", date: "2023/Nov" },
            { title: "3AI Discovery Summer Camp", org: "1221 Youth Association, Penghu Marine Foundation", date: "2023/Jul, Aug" },
            { title: "What High Schoolers Should Know About AI", org: "Victory Education Foundation", date: "2023 – 2025/Apr" },
            { title: "Introduction to AI", org: "Chang Gung University, Dept. of Chemical & Materials Eng.", date: "2021 – 2025/Oct" },
            { title: "AI in Industry Applications", org: "Tamkang University, Dept. of Chemical & Materials Eng.", date: "2022/May" },
          ],
        },
        {
          id: "industrial", title: "Industrial AI & Defect Inspection",
          items: [
            { title: "AOI & AI in Industrial Applications", org: "Chunghwa Telecom", date: "2023/Feb, Jun, 2024/Apr" },
            { title: "AI, Machine Learning & Deep Learning", org: "Taiwan AI Academy", date: "2018 –" },
            { title: "AI Courses (Medical Imaging / Defect Inspection / PyTorch, TensorFlow, Keras, Python)", org: "Tibame", date: "2018 –" },
          ],
        },
      ],
      awardList: [
        { title: "Outstanding Teaching Assistant", detail: "Deep Learning in Medical Imaging (112-2) & Medical Image Processing (112-1)", meta: "NTU CSIE", link: "", linkLabel: "" },
        { title: "MICCAI 2022 SAR-RARP50 Challenge", detail: "Multi-task: 2nd place · Segmentation: 4th place · Team AIA_Noobs", meta: "Sep 2022", link: "https://arxiv.org/abs/2401.00496", linkLabel: "Read the paper" },
        { title: "2018 National Palace Museum Hackathon", detail: "1st Place — Image Style Transfer", meta: "2018", link: "", linkLabel: "" },
        { title: "2018 AIA First Technical Cohort Capstone", detail: "Honorable Mention — Metal Surface Defect Detection", meta: "2018", link: "", linkLabel: "" },
      ],
    },
    zh: {
      nav: { about: "關於", experience: "經歷", talks: "課程 / 演講", awards: "競賽 / 得獎", contact: "聯絡" },
      langButtonLabel: "EN",
      hero: {
        eyebrow: "台大資工博士生 · AI 工程師 / 講師",
        name: "李智揚 Chih-Yang (Eric) Li",
        role: "專精深度學習、醫學影像、生成式AI 的研究者與講師。",
        tagline: "Passions in AI. Stay hungry, stay foolish.",
        ctaContact: "聯絡我",
        ctaTalks: "查看演講",
      },
      about: { eyebrow: "關於", heading: "背景與專長", expertiseLabel: "專長領域", educationLabel: "學歷" },
      experience: { eyebrow: "經歷", heading: "職涯時間軸" },
      talks: { eyebrow: "課程 / 演講", heading: "課程與演講", sub: "橫跨產業、學術與公眾教育的講學經歷精選。" },
      awards: { eyebrow: "肯定", heading: "競賽 / 得獎" },
      contact: { heading: "一起合作", sub: "歡迎技術顧問、課程演講與研究合作邀約。" },
      footer: { copyright: "© 2026 李智揚 Chih-Yang (Eric) Li", built: "台北, 台灣" },
      expertise: ["深度學習", "人工智慧", "醫學影像", "生成式AI", "大型語言模型", "瑕疵檢測", "心電圖分析"],
      education: [
        { degree: "台大資工所博士候選人", school: "國立台灣大學", years: "2020 – 現在" },
        { degree: "學士, 機械工程學系", school: "國立台灣大學", years: "2006 – 2010" },
      ],
      experienceList: [
        { title: "技術顧問", years: "2026 – 現在" },
        { title: "NVIDIA 認證講師", years: "2025 – 現在" },
        { title: "AI / Python 課程講師", years: "2018 – 現在" },
        { title: "AI 工程師, 台灣人工智慧學校", years: "2018/05 – 2024/07" },
        { title: "iOS 工程師, 有無科技", years: "2015/10 – 2018/05" },
      ],
      talkCategories: [
        {
          id: "medical", title: "醫學影像與健康 AI",
          items: [
            { title: "AI 醫學影像", org: "中華電信學院", date: "2024/Sep, 2025/Sep" },
            { title: "AI 於醫療發展與應用", org: "得勝者文教基金會", date: "2023 – 2025/Apr" },
            { title: "人工智慧於醫學影像之發展應用", org: "慈濟大學資訊管理學系", date: "2022/Oct" },
            { title: "AI 臨床醫學影像分析: PyTorch 實戰班", org: "晨慧科技", date: "2021/Oct" },
          ],
        },
        {
          id: "genai", title: "生成式AI 與大型語言模型",
          items: [
            { title: "探索生成式AI", org: "群益證券", date: "2026/Apr" },
            { title: "Python / 生成式AI", org: "元智大學終身教育部、台北商業大學、東育實業", date: "2025/Jun, Aug" },
            { title: "AI / GenAI 簡介", org: "同欣電子", date: "2024/Sep" },
            { title: "Python x ChatGPT 工作流", org: "臺灣大學資訊系統訓練班", date: "2024/Jul ~" },
          ],
        },
        {
          id: "foundations", title: "AI 基礎與青少年教育",
          items: [
            { title: "Edge AI 簡介與實務應用", org: "財團法人國際合作發展基金會", date: "2025/Sep" },
            { title: "AI 實作營", org: "臺灣大學資訊系統訓練班", date: "2024/Jul ~" },
            { title: "AI 簡介與實作", org: "夢想之家基金會", date: "2024/Apr, Oct" },
            { title: "基礎 Python", org: "獨立工作坊", date: "2023/Nov" },
            { title: "3AI 探索實作夏令營", org: "1221青社會, 澎湖海洋基金會", date: "2023/Jul, Aug" },
            { title: "高中生該知道的 AI 現在與未來", org: "得勝者文教基金會", date: "2023 – 2025/Apr" },
            { title: "AI 概論", org: "長庚大學化材系", date: "2021 – 2025/Oct" },
            { title: "AI 於產業應用", org: "淡江大學化材系", date: "2022/May" },
          ],
        },
        {
          id: "industrial", title: "工業 AI 與瑕疵檢測",
          items: [
            { title: "自動光學檢測 AOI 及 AI 之工業應用實務", org: "中華電信", date: "2023/Feb, Jun, 2024/Apr" },
            { title: "AI, 機器學習與深度學習", org: "台灣人工智慧學校", date: "2018 –" },
            { title: "AI 課程 (醫學影像分析 / 瑕疵檢測 / PyTorch, TensorFlow, Keras, Python)", org: "Tibame 緯育", date: "2018 –" },
          ],
        },
      ],
      awardList: [
        { title: "優良助教", detail: "深度學習於醫學影像 (112-2) 、 醫學影像處理 (112-1)", meta: "台大資訊學群", link: "", linkLabel: "" },
        { title: "MICCAI 2022 SAR-RARP50 競賽", detail: "多任務: 2nd ・ 影像切割: 4th ・ 隊名: AIA_Noobs", meta: "2022/09", link: "https://arxiv.org/abs/2401.00496", linkLabel: "閱讀論文" },
        { title: "2018 故宮黑客松", detail: "第 1 名 — 影像風格轉換", meta: "2018", link: "", linkLabel: "" },
        { title: "2018 AIA 第一屆技術班 專題競賽", detail: "佳作 — 金屬表面瑕疵檢測", meta: "2018", link: "", linkLabel: "" },
      ],
    },
  };

  const LANG_KEY = "lang";
  const state = {
    lang: localStorage.getItem(LANG_KEY) || "zh",
    expanded: { medical: false, genai: false, foundations: false, industrial: false },
  };

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function renderSocials(container, list) {
    container.innerHTML = list.map((s) =>
      `<a href="${s.url}" target="_blank" rel="noopener"><span class="social-icon">${SOCIAL_ICONS[s.label] || ""}</span>${escapeHtml(s.label)}</a>`
    ).join("");
  }

  function renderPartners(lang) {
    const container = $("partners-grid");
    container.innerHTML = PARTNERS.map((p) => {
      const name = lang === "en" ? p.en : p.zh;
      return `<div class="partner-tile" title="${escapeHtml(name)}">
        <img src="assets/partners/${p.slug}.svg" alt="${escapeHtml(name)}" data-slug="${p.slug}" data-initials="${escapeHtml(p.initials)}">
        <span class="partner-name">${escapeHtml(name)}</span>
      </div>`;
    }).join("");
    container.querySelectorAll("img").forEach((img) => {
      let stage = 0;
      img.addEventListener("error", function onError() {
        stage++;
        if (stage === 1) {
          img.src = `assets/partners/${img.dataset.slug}.png`;
        } else {
          const badge = document.createElement("span");
          badge.className = "partner-badge";
          badge.textContent = img.dataset.initials;
          img.replaceWith(badge);
        }
      });
    });
  }

  function render() {
    const c = CONTENT[state.lang];
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-Hant";

    $("lang-toggle").textContent = c.langButtonLabel;

    $("nav-links").innerHTML = [
      ["#about", c.nav.about], ["#experience", c.nav.experience], ["#talks", c.nav.talks],
      ["#awards", c.nav.awards], ["#contact", c.nav.contact],
    ].map(([href, label]) => `<a href="${href}">${escapeHtml(label)}</a>`).join("");

    $("hero-eyebrow").textContent = c.hero.eyebrow;
    $("hero-name").textContent = c.hero.name;
    $("hero-role").textContent = c.hero.role;
    $("hero-tagline").textContent = c.hero.tagline;
    $("hero-cta-contact").textContent = c.hero.ctaContact;
    $("hero-cta-talks").textContent = c.hero.ctaTalks;
    renderSocials($("hero-socials"), SOCIALS);

    $("about-expertise-label").textContent = c.about.expertiseLabel;
    $("about-education-label").textContent = c.about.educationLabel;
    $("about-expertise").innerHTML = c.expertise.map((t) => `<span>${escapeHtml(t)}</span>`).join("");
    $("about-education").innerHTML = c.education.map((ed) =>
      `<div><div class="edu-degree">${escapeHtml(ed.degree)}</div><div class="edu-school">${escapeHtml(ed.school)}</div><div class="edu-years">${escapeHtml(ed.years)}</div></div>`
    ).join("");

    $("experience-eyebrow").textContent = c.experience.eyebrow;
    $("experience-list").innerHTML = c.experienceList.map((job) =>
      `<li><span class="tl-dot"></span><div class="tl-row"><h4>${escapeHtml(job.title)}</h4><span class="tl-years">${escapeHtml(job.years)}</span></div></li>`
    ).join("");

    const showMoreLabel = state.lang === "en" ? "Show more" : "顯示更多";
    const showLessLabel = state.lang === "en" ? "Show less" : "收合";
    $("talks-categories").innerHTML = c.talkCategories.map((cat) => {
      const expanded = !!state.expanded[cat.id];
      const visibleItems = expanded ? cat.items : cat.items.slice(0, 2);
      const itemsHtml = visibleItems.map((item) =>
        `<div class="talk-item"><div class="talk-item-title">${escapeHtml(item.title)}</div><div class="talk-item-org">${escapeHtml(item.org)}</div><div class="talk-item-date">${escapeHtml(item.date)}</div></div>`
      ).join("");
      const toggleHtml = cat.items.length > 2
        ? `<button class="talk-toggle" data-cat="${cat.id}">${expanded ? showLessLabel : showMoreLabel}</button>`
        : "";
      return `<div class="card talk-cat"><h3>${escapeHtml(cat.title)}</h3><div class="talk-items">${itemsHtml}</div>${toggleHtml}</div>`;
    }).join("");
    $("talks-categories").querySelectorAll(".talk-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.cat;
        state.expanded[id] = !state.expanded[id];
        render();
      });
    });

    $("awards-heading").textContent = c.awards.heading;
    $("awards-list").innerHTML = c.awardList.map((a) =>
      `<div class="card award-card">
        <div class="award-title">${escapeHtml(a.title)}</div>
        <div class="award-detail">${escapeHtml(a.detail)}</div>
        <div class="award-meta">${escapeHtml(a.meta)}</div>
        ${a.link ? `<a class="award-link" href="${a.link}" target="_blank" rel="noopener">${escapeHtml(a.linkLabel)} →</a>` : ""}
      </div>`
    ).join("");
    renderPartners(state.lang);

    $("contact-heading").textContent = c.contact.heading;
    $("contact-sub").textContent = c.contact.sub;
    renderSocials($("contact-socials"), SOCIALS);

    $("footer-copyright").textContent = c.footer.copyright;
    $("footer-built").textContent = c.footer.built;
  }

  $("lang-toggle").addEventListener("click", () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    localStorage.setItem(LANG_KEY, state.lang);
    render();
  });

  // Theme: default to OS preference, remember explicit user choice
  const THEME_KEY = "theme";
  const themeBtn = $("theme-toggle");
  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeBtn.textContent = "☀️";
    } else {
      document.documentElement.removeAttribute("data-theme");
      themeBtn.textContent = "🌙";
    }
  }
  const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme || (darkMediaQuery.matches ? "dark" : "light"));
  darkMediaQuery.addEventListener("change", (e) => {
    if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? "dark" : "light");
  });
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  render();
})();
