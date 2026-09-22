/**
 * Skills, grouped — Arabic. Keep the same ids/levels/shape as ../en/skills.js.
 * Product and language names (HTML, React, Git…) stay in Latin script, as is standard practice.
 */
export const skillGroups = [
  {
    id: 'web',
    icon: 'code',
    title: 'البرمجة والويب',
    blurb: 'أساسيات الواجهة الأمامية، بالإضافة إلى الأدوات التي أستخدمها لبناء مشاريع متكاملة صغيرة.',
    items: [
      { name: 'HTML', level: 'working' },
      { name: 'CSS', level: 'working' },
      { name: 'JavaScript', level: 'working' },
      { name: 'Bootstrap', level: 'working' },
      { name: 'React', level: 'building' },
      { name: 'Vite', level: 'building' },
    ],
  },
  {
    id: 'it',
    icon: 'monitor',
    title: 'تقنية المعلومات والدعم',
    blurb: 'استكشاف الأعطال ودعم المستخدمين عمليًا في بيئة تشغيل حقيقية.',
    items: [
      { name: 'الدعم التقني', level: 'daily' },
      { name: 'استكشاف أعطال الأجهزة والبرامج', level: 'daily' },
      { name: 'تثبيت وإعداد Windows', level: 'working' },
      { name: 'أساسيات الشبكات', level: 'working' },
      { name: 'تثبيت وإعداد البرامج', level: 'working' },
      { name: 'التوثيق التقني', level: 'working' },
    ],
  },
  {
    id: 'data',
    icon: 'database',
    title: 'البيانات',
    blurb: 'الدقة أولًا: إدخال بيانات الحسابات والعمليات، والتحقق منها، ومراجعتها.',
    items: [
      { name: 'إدخال البيانات والتحقق منها', level: 'daily' },
      { name: 'مراجعة بيانات الحسابات والأنظمة', level: 'daily' },
      { name: 'SQL (أساسيات)', level: 'working' },
      { name: 'أساسيات قواعد البيانات', level: 'working' },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: 'الأدوات',
    blurb: 'صندوق الأدوات اليومي لكتابة الكود وإدارة إصداراته وتشغيله.',
    items: [
      { name: 'VS Code' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'PowerShell' },
      { name: 'npm' },
      { name: 'Microsoft Office' },
    ],
  },
]
