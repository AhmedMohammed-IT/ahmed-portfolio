/** Interface text — Arabic. Keep the same keys/shape as ../en/ui.js. */
export const ui = {
  nav: [
    { id: 'about', label: 'نبذة عني' },
    { id: 'skills', label: 'المهارات' },
    { id: 'journey', label: 'المسار' },
    { id: 'experience', label: 'الخبرة' },
    { id: 'projects', label: 'المشاريع' },
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
    ariaGuidingIdeas: 'الأفكار الموجّهة',
    ariaSkillsUsed: 'المهارات المستخدمة في هذا الدور',
    ariaTechnologies: 'التقنيات',
    ariaProjectFacts: 'معلومات المشروع',
  },

  sections: {
    about: {
      eyebrow: 'نبذة',
      title: 'التقنية، في خدمة مشاكل حقيقية',
      description: 'قصة قصيرة عن أين أنا الآن، وماذا أعمل يوميًا، وإلى أين أتجه.',
    },
    skills: {
      eyebrow: 'المهارات',
      title: 'المهارات والأدوات، مصنّفة حسب استخدامي لها',
      description:
        'بدون نسب مئوية — فقط رؤية صادقة لما أستخدمه يوميًا، وما أتقنه جيدًا، وما أبنيه حاليًا.',
      legendTitle: 'كيف أصف المستويات',
      stackTitle: 'الأدوات التقنية',
      stackDescription: 'اللغات والأدوات التي تقف خلف مشاريعي.',
    },
    journey: {
      eyebrow: 'المسار',
      title: 'من التقنية إلى الحلول',
      description: 'خطوة بخطوة — من أساسيات الحاسب إلى بناء أشياء يستخدمها الناس فعليًا.',
      states: { current: 'قيد التنفيذ', ongoing: 'مستمر' },
    },
    experience: {
      eyebrow: 'الخبرة',
      title: 'حيث يلتقي الجانب التقني بالتشغيلي',
      description: 'دوري الحالي يجمع بين دعم المستخدمين والأنظمة ودقة البيانات.',
    },
    projects: {
      eyebrow: 'المشاريع',
      title: 'المشاريع ودراسات الحالة',
      description:
        'مشاريع حقيقية بنيتها أثناء تعلّمي. لكل مشروع دراسة حالة توضح المشكلة والحل وما تعلّمته منه.',
      viewCaseStudy: 'عرض دراسة الحالة',
      github: 'GitHub',
      liveDemo: 'نسخة تجريبية',
      moreSoon: 'مشاريع أخرى قادمة قريبًا.',
    },
    education: {
      eyebrow: 'التعليم',
      title: 'الخلفية الأكاديمية والتقنية',
      description: 'أساس رسمي في تقنية المعلومات، مدعوم بشهادات متخصصة.',
      certificationsTitle: 'الشهادات والدورات',
      areasTitle: 'مجالات الدراسة والممارسة',
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لنتحدث',
      description: 'مستعد للتواصل بخصوص فرص الدعم التقني والبيانات وتطوير الويب.',
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
    locationLabel: 'الموقع',
    cvTitle: 'تفضّل نظرة سريعة؟',
    cvText: 'سيرتي الذاتية تلخّص خبرتي وتعليمي ومهاراتي في صفحة واحدة.',
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
    line: 'بُني بفضول وكود وتعلّم مستمر.',
    rights: 'جميع الحقوق محفوظة.',
  },
}
