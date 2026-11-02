/** Interface text — Arabic. Keep the same keys/shape as ../en/ui.js. */
export const ui = {
  nav: [
    { id: 'about', label: 'نبذة عني' },
    { id: 'experience', label: 'الخبرة' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'skills', label: 'المهارات' },
    { id: 'education', label: 'التعليم' },
    { id: 'contact', label: 'تواصل' },
  ],

  common: {
    skipToContent: 'تخطي إلى المحتوى',
    home: 'الرئيسية',
    downloadCv: 'تحميل السيرة الذاتية',
    viewWork: 'أعمالي',
    aboutMe: 'نبذة عني',
    contactMe: 'تواصل معي',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    switchToLight: 'التبديل للوضع الفاتح',
    switchToDark: 'التبديل للوضع الداكن',
    backToTop: 'العودة للأعلى',
    primaryNav: 'التنقل الرئيسي',
    mobileNav: 'قائمة الجوال',
    loading: 'جارِ التحميل…',
    linkComingSoon: 'الرابط قريبًا',
    languageLabel: 'English',
    switchLanguage: 'عرض الموقع بالإنجليزية',
    ariaQuickFacts: 'حقائق سريعة',
    ariaSkillsUsed: 'المهارات المستخدمة في هذا الدور',
    ariaTechnologies: 'التقنيات',
    ariaProjectFacts: 'معلومات المشروع',
  },

  sections: {
    about: {
      eyebrow: 'نبذة',
      title: 'عمل في الدعم، مدعوم بشهادة تقنية وبالبرمجة',
      description: 'من أنا، وكيف أعمل، وما الذي أبحث عنه.',
    },
    skills: {
      eyebrow: 'المهارات',
      title: 'المهارات، مصنّفة حسب استخدامي لها',
      description: 'بدون نسب مئوية: ما أستخدمه يوميًا في العمل، وما أتقنه، وما أطوّره من خلال المشاريع.',
      legendTitle: 'المستويات',
    },
    experience: {
      eyebrow: 'الخبرة',
      title: 'أين أصنع الأثر اليوم',
      description: 'دعم العملاء والشركاء والموظفين، بأرقام: حالات مغلقة وحسابات متحقق منها.',
    },
    projects: {
      eyebrow: 'المشاريع',
      title: 'المشاريع ودراسات الحالة',
      description: 'مشاريع شخصية، لكل منها دراسة حالة قصيرة: المشكلة، والحل، وما تعلّمته.',
      viewCaseStudy: 'عرض دراسة الحالة',
      github: 'GitHub',
      liveDemo: 'نسخة تجريبية',
      moreSoon: 'مشاريع أخرى قادمة قريبًا.',
    },
    education: {
      eyebrow: 'التعليم',
      title: 'الخلفية الأكاديمية والتقنية',
      description: 'شهادة جامعية في تقنية المعلومات، مدعومة بشهادات متخصصة.',
      certificationsTitle: 'الشهادات والدورات',
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لنتحدث',
      description: 'متاح لفرص الدعم التقني والـHelp Desk ودعم التطبيقات في أي مدينة بالسعودية.',
    },
  },

  skillLevels: {
    daily: { label: 'استخدام يومي', hint: 'جزء من عملي اليومي.' },
    working: { label: 'معرفة عملية', hint: 'مرتاح لاستخدامه في مهام حقيقية.' },
    building: { label: 'أبنيه وأتعلّمه', hint: 'أطوّره باستمرار من خلال المشاريع.' },
  },

  projectDetail: {
    back: 'كل المشاريع',
    overview: 'نظرة عامة',
    problem: 'المشكلة',
    solution: 'الحل',
    features: 'أبرز المزايا',
    technology: 'التقنيات المستخدمة',
    challenges: 'التحديات',
    learned: 'ماذا تعلّمت',
    screenshots: 'لقطات الشاشة',
    screenshotsEmpty: 'ستُضاف لقطات الشاشة قريبًا.',
    links: 'الروابط',
    statusLabel: 'الحالة',
    next: 'المشروع التالي',
    notFoundTitle: 'المشروع غير موجود',
    notFoundText: 'هذا المشروع غير موجود (أو تم نقله).',
  },

  notFound: {
    code: '404',
    title: 'هذه الصفحة غير موجودة',
    text: 'قد يكون الرابط معطوبًا، أو تم نقل الصفحة.',
    action: 'العودة للرئيسية',
  },

  contact: {
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الجوال',
    cvTitle: 'تفضّل نظرة سريعة؟',
    cvText: 'سيرتي الذاتية تجمع خبرتي ومهاراتي وتعليمي في صفحة واحدة.',
    copy: 'نسخ البريد الإلكتروني',
    copied: 'تم النسخ!',
    copyFailed: 'تعذّر النسخ — حدد العنوان يدويًا.',
    form: {
      title: 'أرسل رسالة',
      note: 'هذا النموذج يفتح تطبيق البريد لديك برسالة جاهزة للإرسال — لا يُخزَّن شيء على هذا الموقع.',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'فتح تطبيق البريد',
      errors: {
        name: 'الرجاء إدخال اسمك.',
        email: 'الرجاء إدخال بريد إلكتروني صحيح.',
        message: 'الرجاء كتابة رسالة قصيرة.',
      },
      success:
        'المفروض يكون تطبيق البريد فتح الآن مع الرسالة جاهزة. إذا لم يحدث شيء، انسخ عنواني وراسلني مباشرة.',
    },
  },

  footer: {
    line: 'الدعم التقني ودعم التطبيقات · السعودية',
    rights: 'جميع الحقوق محفوظة.',
  },
}
