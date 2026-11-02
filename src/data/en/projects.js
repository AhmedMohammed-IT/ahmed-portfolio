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
export const projects = [
  {
    slug: 'restaurant-ordering-system',
    name: 'Multi-Branch Restaurant Ordering System',
    type: 'Full-stack web application',
    status: 'In progress',
    tagline: 'Online ordering, table reservations and live order tracking for a restaurant with several branches.',
    summary:
      'A personal full-stack project where each branch has its own menu, prices, opening hours and delivery fee, with an admin dashboard and a live kitchen display.',
    overview: [
      'A full-stack ordering system for a restaurant with several branches. Customers order online, reserve tables and follow their order live; each branch keeps its own menu, prices, opening hours and delivery fee.',
      'Staff work from an admin dashboard with owner and branch-manager roles, and the kitchen sees new orders on a live display screen.',
    ],
    problem:
      'A restaurant with several branches cannot run on one shared menu: prices, hours and delivery fees differ per branch, and orders have to reach the right kitchen immediately, without customers being able to change prices or order items that are out of stock.',
    solution:
      'A React front end with a Node.js / Express API and a MySQL database managed through Sequelize. Prices are calculated and stock is locked on the server, roles are enforced on the server, and the kitchen screen updates live as orders arrive.',
    features: [
      'Online ordering, table reservations and live order tracking',
      'Per-branch menu, prices, opening hours and delivery fee',
      'Admin dashboard with owner and branch-manager roles enforced on the server',
      'Kitchen display screen with live order updates',
      'Server-side pricing and stock locking to prevent tampering and overselling',
      'Arabic / English with right-to-left support',
      '64 automated tests and database migrations',
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Jest'],
    challenges: [
      'Keeping prices and stock on the server so the browser can never be the source of truth.',
      'Modelling branches so each one can differ without duplicating the whole menu.',
      'Pushing new orders to the kitchen screen live.',
    ],
    learned: [
      'Anything that affects money or stock has to be decided on the server.',
      'Automated tests and migrations make it safe to change the database as the project grows.',
      'Roles are a product feature: an owner and a branch manager need different screens and limits.',
    ],
    links: { github: null, live: null },
    screenshots: [],
    cover: { icon: 'coffee', from: '#b45309', to: '#be123c' },
  },
  {
    slug: 'ahmed-portfolio',
    name: 'Ahmed AL-Talool Portfolio',
    type: 'Bilingual portfolio website',
    status: 'Live',
    tagline: 'A fast, bilingual (English / Arabic) portfolio with full right-to-left support.',
    summary:
      'The website you are on: a React portfolio with dark and light themes, an English/Arabic switch with true RTL layout, and all content kept as data separate from the components.',
    overview: [
      'This portfolio presents my background, skills and experience in one place, in English and Arabic. It is built with React and Vite, with no UI framework and no heavy animation library, so it stays fast on phones.',
      'It is deployed on Vercel and connected to GitHub, so every push to the main branch publishes automatically.',
    ],
    problem:
      'I needed one professional place that brings my CV, skills and experience together, reads well on a phone, and works properly in Arabic, not just translated text on an English layout.',
    solution:
      'A single-page React site with content stored as plain data in two language folders, logical CSS properties so the layout flips to RTL automatically, and a theme and language choice that is remembered and applied before first paint.',
    features: [
      'English and Arabic with full right-to-left layout',
      'Dark and light themes, remembered between visits',
      'All text stored as data, editable without touching components',
      'Sections for experience, projects, skills, education and contact',
      "Downloadable CV and a contact form that opens the visitor's email app",
      'Automatic deploys from GitHub to Vercel with security headers',
    ],
    technologies: ['React', 'Vite', 'React Router', 'JavaScript', 'CSS Modules', 'Vercel', 'GitHub'],
    challenges: [
      'Making the layout flip correctly from left-to-right to right-to-left, including icons and spacing.',
      'Preventing horizontal overflow on small phone screens in Arabic.',
      'Applying the saved theme and language before the page paints, so there is no flash of the wrong one.',
    ],
    learned: [
      'Treating content as data keeps two languages in sync far more easily than editing components.',
      'Right-to-left support is a layout decision made from the start, not a translation added at the end.',
      'Connecting GitHub to Vercel makes shipping a small change a one-step process.',
    ],
    links: {
      github: 'https://github.com/AhmedMohammed-IT/ahmed-portfolio',
      live: 'https://ahmed-portfolio-gules-three.vercel.app',
    },
    screenshots: [{ src: '/projects/ahmed-portfolio/home.png', alt: 'Home page of the portfolio in dark mode' }],
    cover: { icon: 'code', from: '#1d4ed8', to: '#0ea5a3' },
  },
]

export const projectDrafts = [
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
