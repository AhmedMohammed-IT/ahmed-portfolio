/**
 * Projects / case studies.
 *
 * `projects` is what the site shows. While it is empty, the whole Projects section, its menu
 * item and the /projects/<slug> pages are hidden automatically.
 *
 * `projectDrafts` holds the two case studies prepared for later. Their facts were checked
 * against the real project folders on Ahmed's computer (READMEs, package.json, source code).
 * To publish one: move its object from `projectDrafts` into `projects` (or copy it), then:
 *  - set `links.github` / `links.live` (null = hidden)
 *  - add screenshots: put images in /public/projects/<slug>/ and list them in `screenshots`
 *  - review the "problem" and "learned" wording so it sounds like you
 *
 * To add a brand-new project: copy an object, change `slug` (used in the URL /projects/<slug>)
 * and fill the fields. Empty arrays and null links are handled gracefully by the UI.
 */
export const projects = []

export const projectDrafts = [
  {
    slug: 'sama-captain-hub',
    name: 'SAMA Captain Hub',
    type: 'Full-stack web application',
    status: 'Working version',
    tagline: 'An Arabic, mobile-friendly knowledge and training hub for delivery captains.',
    summary:
      'A full-stack platform that gives delivery captains quick, reliable answers — step-by-step scenarios, an academy with lessons and quizzes, policy awareness and emergency contacts — with a staff-only CMS behind it.',
    overview: [
      'SAMA Captain Hub is a fully Arabic (RTL) platform with two separate sides. The public site needs no login: any captain can browse content, search, and send a support request with just a name and phone number. The admin side is for staff only and manages every piece of content, support requests and users.',
      'A core rule of the project: fines, emergency numbers and procedural periods are never hard-coded. They live in the database and are edited from the admin panel, so the content stays accurate without touching code.',
    ],
    problem:
      'During a shift, a captain needs an answer quickly — what to do when a customer does not respond, how a policy applies, who to call in an emergency. When that information is scattered, it slows people down and creates avoidable support requests.',
    solution:
      'One place with practical, searchable content: "What should I do now?" scenarios, a learning academy, a violations awareness center, FAQs and emergency contacts — all managed by staff through a role-based CMS, and all readable without creating an account.',
    features: [
      '"What should I do now?" step-by-step scenarios for common situations',
      'Academy with levels, lessons and short quizzes',
      'Violations & policy awareness center',
      'FAQ with helpful / not-helpful feedback',
      'Emergency contacts page managed from the database',
      'Search across content, with popular searches',
      'Guest support form — no account needed',
      'Staff CMS: articles, videos, FAQs, scenarios, safety tips, violations, academy, quizzes, emergency contacts',
      'Support ticket workflow and staff account management',
      'Admin dashboard with usage insights (searches, top videos, ticket status)',
      'Switchable colour themes on the public site',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MySQL',
      'Knex',
      'JWT',
      'Zod',
      'Vitest',
    ],
    challenges: [
      'Role-based access (admin, content manager, support agent) enforced on both the API and the interface.',
      'Keeping policy figures and contact numbers data-driven instead of hard-coded.',
      'Arabic RTL layout and typography, with a distinct visual identity for the public site and the admin panel.',
      'Secure sessions with short-lived access tokens and silent refresh.',
    ],
    learned: [
      'Designing an API and a UI around roles from the start, instead of adding permissions at the end.',
      'Treating content as data: a small schema and a CMS beat editing code every time something changes.',
      'Building for right-to-left languages is a layout decision, not just a translation.',
      'Small automated tests around authentication catch mistakes that manual clicking misses.',
    ],
    links: { github: null, live: null },
    screenshots: [],
    cover: { icon: 'compass', from: '#1d4ed8', to: '#0ea5a3' },
  },
  {
    slug: 'coffee-shop-management',
    name: 'Coffee Shop Management System',
    type: 'Management & accounting system',
    status: 'In progress',
    tagline: 'An Arabic system for running a coffee shop: point of sale, stock, expenses and reports.',
    summary:
      'A three-layer system — React front end, a separate PHP API and a MySQL schema — covering a dashboard, product management, a point-of-sale screen with invoices, expenses, and role-based permissions.',
    overview: [
      'The Coffee Shop Management System is an Arabic (RTL) application for managing day-to-day shop operations: a dashboard with key figures and charts, products and categories, a point-of-sale screen, invoicing and expenses.',
      'It is still in progress. The foundation, dashboard, product management, POS, invoices and expenses are in place; purchases and suppliers, customer statements, full reports and shop settings are the next modules.',
    ],
    problem:
      'A small shop needs one place for sales, stock and expenses — with figures it can trust. Accounting numbers should come from a single source of truth rather than being calculated in the browser.',
    solution:
      'The system is split into three independent layers: the React client for the experience, a PHP API for authentication, validation, permissions and accounting transactions, and a MySQL schema with constraints and relations. The interface never stores final accounting figures — balances and reports always come from the API.',
    features: [
      'Dashboard with sales, expenses and stock indicators, charts and alerts',
      'Category and product management with search, filters, status and minimum-stock levels',
      'Point-of-sale screen: cart, quantities, discount, tax, customer and multiple payment methods',
      'Invoice numbering, a custom print template, and invoice cancellation by permission',
      'Expenses with categories, linked to net-profit calculation',
      'Role-based permissions: manager, accountant, cashier and inventory clerk',
      'Explicit loading, empty and error states instead of made-up data',
      'Automated tests for sensitive logic (Vitest)',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PHP', 'MySQL', 'Recharts', 'Vitest'],
    challenges: [
      'Keeping accounting figures server-side so the interface never becomes the source of truth.',
      'Modelling sales, stock and expenses with a relational schema that stays consistent.',
      'Controlling sensitive actions (like cancelling an invoice) by role and confirming them in the UI.',
      'Printing invoices with real shop settings instead of hard-coded text.',
    ],
    learned: [
      'Separating client, API and database keeps each layer easier to reason about and test.',
      'Empty and error states are part of the design — showing "no data" honestly builds more trust than filler.',
      'Permissions are a product feature: every role needs a clear list of what it can and cannot do.',
    ],
    links: { github: null, live: null },
    screenshots: [],
    cover: { icon: 'coffee', from: '#92400e', to: '#b45309' },
  },
]
