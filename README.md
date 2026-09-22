# Ahmed AL-Talool — Personal Portfolio

An academic-and-technical portfolio: dark navy theme with a light mode, one calm blue accent, and case studies for real projects. Available in English and Arabic (full RTL), switchable from a button in the navbar.
Built with **React 19 + Vite + JavaScript**, React Router, Lucide icons and plain CSS Modules — no UI framework, no heavy animation library.

**Live:** https://ahmed-portfolio-gules-three.vercel.app

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

## Project structure

```text
public/                  Ahmed-CV.pdf, favicon.svg, og-image.png, robots.txt
src/
  main.jsx               providers + router
  App.jsx                layout + routes
  styles/                tokens.css (colours, spacing, motion) · base.css (reset, focus, helpers)
  context/               ThemeContext (dark/light, saved) · LocaleContext (language → content, saved)
  hooks/                 useReveal · useActiveSection · useScrollState · useDocumentTitle
  data/
    index.js             language registry — builds { en, ar } from the folders below
    en/                  all English site content (see below)
    ar/                  the same content in Arabic — same file names, same keys
  sections/              Hero, About, Skills, TechStack, Journey, Experience, Projects, Education, Contact
  components/
    ui/                  Button, Reveal, SectionTitle, Tag, SocialLink, CopyButton, Icon, BrandIcon, TechIcon
    cards/               ProjectCard, ProjectCover, ProjectLinks, ExperienceCard, SkillCard, FeatureCard,
                         TimelineItem, TerminalCard
    layout/              Navbar, Footer, Background, ScrollProgress, BackToTop, ScrollManager,
                         ThemeToggle, LanguageToggle
  pages/                 Home, ProjectDetail (/projects/:slug), NotFound
```

## Where to edit content

Everything visitors read is plain data in `src/data/en/` (English) and `src/data/ar/` (Arabic) — you never need to touch a component to change text. **Edit both folders together**, or the two languages will drift apart; `techStack.js` is the one exception (shared, English-only, since those are product names).

| To change…                               | Edit                       |
| ---------------------------------------- | -------------------------- |
| Name, tagline, email, phone, CV path, terminal lines, hero facts, GitHub/LinkedIn | `profile.js` |
| Nav labels, section headings, button text, form messages | `ui.js` |
| About story, quick facts, "What I do", personal statement | `about.js` |
| Skill groups and levels                  | `skills.js`                |
| Tech-stack icon grid (shared, edit once) | `en/techStack.js`          |
| Learning journey timeline                | `journey.js`               |
| Work experience                          | `experience.js`            |
| Degree, certificates, areas of study     | `education.js`             |
| Projects and case studies                | `projects.js`              |

### Projects are hidden for now

Both `src/data/en/projects.js` and `src/data/ar/projects.js` export two lists. `projects` (what the site shows) is currently **empty in both**, so the Projects section, its menu item and the `/projects/…` pages are hidden automatically, and the remaining sections renumber themselves. The two prepared case studies (SAMA Captain Hub and the Coffee Shop Management System) are kept in `projectDrafts`, already translated.

To publish one: move its object from `projectDrafts` into `projects` **in both languages** (same `slug` in each so the URL matches) — the section, menu item, cards and case-study page all reappear on their own.

### Add a project

Open `src/data/en/projects.js` (and its Arabic counterpart) and copy one object into `projects`. Change at least `slug` (it becomes the URL `/projects/<slug>`, keep it identical in both languages), `name`, `summary` and the case-study fields. The card, the case-study page, and the "next project" link all appear automatically.

```js
{
  slug: 'my-new-project',
  name: 'My New Project',
  type: 'Web application',
  status: 'In progress',
  tagline: 'One line that explains it.',
  summary: 'Two sentences for the card.',
  overview: ['Paragraph one.', 'Paragraph two.'],
  problem: '…', solution: '…',
  features: ['…'], technologies: ['React', 'Vite'],
  challenges: ['…'], learned: ['…'],
  links: { github: 'https://github.com/USER/REPO', live: null }, // null hides the button
  screenshots: [{ src: '/projects/my-new-project/home.png', alt: 'Home page' }],
  cover: { icon: 'code', from: '#1d4ed8', to: '#0ea5a3' },       // used until you add a screenshot
}
```

Screenshots go in `public/projects/<slug>/` (keep each under ~300 KB; use WebP/JPG). Empty `screenshots` shows a tidy "coming soon" state.

### Edit skills

`src/data/en/skills.js` — each group has `items: [{ name, level }]`. Levels are descriptive (no percentages): `daily`, `working`, `building`. Leave `level` out to show no badge. The wording of the levels is in `ui.js → skillLevels`.

### Edit experience

`src/data/en/experience.js` — add another object to the array for a new job; it gets its own timeline entry. Bullets are grouped into `columns` (Technical / Operational / Support).

### Change the CV

Replace `public/Ahmed-CV.pdf` with the new file (keep the name), or change `cvUrl` in `profile.js`. The download name users see is `cvDownloadName`.

### GitHub and LinkedIn

In `profile.js → socialLinks` (**both** `en/profile.js` and `ar/profile.js`) replace `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_URL`. **While a value still contains `YOUR_`, the link is hidden on the live site** (so nothing ever points to a dead URL) and shown as a dashed placeholder in `npm run dev`. Do the same for each project's `links`.

### Phone number

The phone is stored but hidden. Set `showPhone: true` in `profile.js` to show it in the Contact section.

### Arabic / English

Both languages are live, switched with the button in the navbar (persisted in `localStorage`, applied before first paint so there's no flash of the wrong direction). `src/data/index.js` builds `{ en, ar }` from the two folders; `useContent()` returns whichever is active, plus `{ locale, dir, setLocale }`.

Notes for editing:
- Keep `src/data/en/*` and `src/data/ar/*` in the same shape (same keys, same array lengths) — the components don't guard against a missing key.
- The layout uses logical CSS properties throughout, so it flips to RTL automatically; `html[dir="rtl"] * { letter-spacing: normal !important }` in `src/styles/base.css` turns off the Latin-style letter-tracking that doesn't suit Arabic.
- `Tajawal` (via `@fontsource/tajawal`) is appended to `--font-sans` in `tokens.css` purely as a fallback — Inter still renders Latin text, the browser only reaches for Tajawal for Arabic glyphs, so no per-language font switch is needed.
- A few "forward/back" icons (Hero's CTA, the 404 action, the project case-study back/next links) pick their Lucide icon based on `dir` — see the `dir === 'rtl' ? … : …` lines in those files if you add another directional arrow.

## Contact form

There is no backend, so the form validates the fields and opens the visitor's email app (`mailto:`) with the message prepared. Nothing is stored or sent by the site, and the copy says so. To send messages directly later, point the submit handler in `sections/Contact.jsx` at a form service or your own API (keep keys on the server, never in the frontend).

## Git + GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ahmed-portfolio.git
git push -u origin main
```

## Deploy to Vercel

Already live at https://ahmed-portfolio-gules-three.vercel.app, connected to the `AhmedMohammed-IT/ahmed-portfolio` GitHub repo (Vercel's GitHub App is installed on it). Every `git push` to `main` triggers a new production deploy automatically — no manual redeploy step.

To set this up again from scratch (a new machine, a fresh repo, etc.):
1. Push the repo to GitHub.
2. On vercel.com → **Add New… → Project** → import the repo. Vercel detects Vite automatically (build `npm run build`, output `dist`).
3. Click **Deploy**. `vercel.json` already contains the SPA rewrite (so `/projects/<slug>` works on refresh) and basic security headers.

Or with the CLI: `npm i -g vercel && vercel --prod`.

Netlify works too: build `npm run build`, publish `dist` (or drag-and-drop the `dist` folder onto app.netlify.com/drop for a one-off deploy without Git). `public/_redirects` (`/* /index.html 200`) is already in place for it.

`index.html`'s `og:image`/`og:url` already point at the live domain above — update them if the domain ever changes.

## Production checklist

- [x] Deployed to Vercel, connected to GitHub for auto-deploy on push
- [x] `og:image` / `og:url` set to the live domain
- [ ] Replace `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_URL` (in both `en/` and `ar/`)
- [ ] Read `about.js`, `skills.js` levels and each project's "problem" / "learned" text and adjust to your voice (in both languages)
- [ ] Add real screenshots to each project (and GitHub / live links), then move it from `projectDrafts` into `projects`
- [ ] Confirm `public/Ahmed-CV.pdf` is the version you want to share
- [ ] Decide whether to show the phone number (`showPhone`)
