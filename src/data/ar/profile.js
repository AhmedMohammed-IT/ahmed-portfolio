/**
 * Core identity + contact details — Arabic. Keep in sync with ../en/profile.js.
 * Source: Ahmed's CV (Ahmed Rsume.pdf).
 */
export const profile = {
  name: 'أحمد الطلول',
  shortName: 'أحمد',
  field: 'تقنية المعلومات',
  role: 'الدعم التقني ودعم التطبيقات',
  availability: 'متاح لوظائف الدعم التقني ودعم التطبيقات',
  tagline:
    'أحل مشاكل التطبيقات والحسابات وWindows للعملاء والشركاء والموظفين، وأبني مشاريع ويب متكاملة لأفهم الأنظمة التي أدعمها.',
  location: 'سكاكا، السعودية',

  email: 'Ahmed.M.Saif.IT@gmail.com',
  phone: '0558287245',
  phoneIntl: '+966558287245',
  showPhone: false,

  // نفس ملف السيرة الذاتية (إنجليزي) يُستخدم لكل اللغات.
  cvUrl: '/Ahmed-CV.pdf',
  cvDownloadName: 'Ahmed-AL-Talool-CV.pdf',

  heroFacts: [
    { icon: 'pin', text: 'سكاكا، السعودية' },
    { icon: 'briefcase', text: 'حضوري أو عن بُعد، في أي مدينة بالسعودية' },
  ],

  terminal: [
    { command: 'cases --daily', output: '~100 حالة للعملاء والشركاء' },
    { command: 'accounts --verified', output: '+6,000 حساب مستخدم وشريك' },
    { command: 'it-support --users', output: '~15 موظفًا أدعمهم تقنيًا' },
    { command: 'build --current', output: 'نظام طلبات لمطعم متعدد الفروع' },
  ],
}

export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/AhmedMohammed-IT' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-al-talool' },
  { id: 'email', label: 'البريد الإلكتروني', url: `mailto:${profile.email}` },
]
