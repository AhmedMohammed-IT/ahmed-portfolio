# Ahmed AL-Talool — Personal Portfolio

An academic-and-technical portfolio: dark navy theme with a light mode, one calm blue accent, and case studies for real projects.
Built with **React 19 + Vite + JavaScript**, React Router, Lucide icons and plain CSS Modules — no UI framework, no heavy animation library.

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
  context/               ThemeContext (dark/light, saved) · LocaleContext (language → content)
  hooks/                 useReveal · useActiveSection · useScrollState · useDocumentTitle
  data/
    index.js             language registry (add Arabic here later)
    en/                  ALL site content lives here (see below)
  sections/              Hero, About, Skills, TechStack, Journey, Experience, Projects, Education, Contact
  components/
    ui/                  Button, Reveal, SectionTitle, Tag, SocialLink, CopyButton, Icon, BrandIcon, TechIcon
    cards/               ProjectCard, ProjectCover, ProjectLinks, ExperienceCard, SkillCard, FeatureCard,
                         TimelineItem, TerminalCard
    layout/              Navbar, Footer, Background, ScrollProgress, BackToTop, ScrollManager, ThemeToggle
  pages/                 Home, ProjectDetail (/projects/:slug), NotFound
```

## Where to edit content

Everything visitors read is plain data in `src/data/en/` — you never need to touch a component to change text.

| To change…                               | Edit                       |
| ---------------------------------------- | -------------------------- |
| Name, tagline, email, phone, CV path, terminal lines, hero facts, GitHub/LinkedIn | `profile.js` |
| Nav labels, section headings, button text, form messages | `ui.js` |
| About story, quick facts, "What I do", personal statement | `about.js` |
| Skill groups and levels                  | `skills.js`                |
| Tech-stack icon grid                     | `techStack.js`             |
| Learning journey timeline                | `journey.js`               |
| Work experience                          | `experience.js`            |
| Degree, certificates, areas of study     | `education.js`             |
| Projects and case studies                | `projects.js`              |

### Projects are hidden for now

`src/data/en/projects.js` exports two lists. `projects` (what the site shows) is currently **empty**, so the Projects section, its menu item and the `/projects/…` pages are hidden automatically, and the remaining sections renumber themselves. The two prepared case studies (SAMA Captain Hub and the Coffee Shop Management System) are kept in `projectDrafts`.

To publish one: move its object from `projectDrafts` into `projects` — the section, menu item, cards and case-study page all reappear on their own.

### Add a project

Open `src/data/en/projects.js` and copy one object into `projects`. Change at least `slug` (it becomes the URL `/projects/<slug>`), `name`, `summary` and the case-study fields. The card, the case-study page, and the "next project" link all appear automatically.

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

In `profile.js → socialLinks` replace `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_URL`. **While a value still contains `YOUR_`, the link is hidden on the live site** (so nothing ever points to a dead URL) and shown as a dashed placeholder in `npm run dev`. Do the same for each project's `links`.

### Phone number

The phone is stored but hidden. Set `showPhone: true` in `profile.js` to show it in the Contact section.

### Add Arabic later

Content is already separated from UI. To add Arabic: copy `src/data/en` to `src/data/ar`, translate **every** file, register it in `src/data/index.js` (`ar: { locale: 'ar', dir: 'rtl', … }`) and add a language switch that calls `setLocale('ar')` from `useContent()`. Layout uses logical CSS properties, so RTL flips correctly.

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

1. Push the repo to GitHub (above).
2. On vercel.com → **Add New… → Project** → import the repo. Vercel detects Vite automatically (build `npm run build`, output `dist`).
3. Click **Deploy**. `vercel.json` already contains the SPA rewrite (so `/projects/<slug>` works on refresh) and basic security headers.

Or with the CLI: `npm i -g vercel && vercel --prod`.

Netlify works too: build `npm run build`, publish `dist`, and add a `_redirects` file with `/* /index.html 200`.

### After the first deploy

- In `index.html`, change `og:image` to an absolute URL (`https://YOUR-DOMAIN/og-image.png`) and add `og:url` so link previews work everywhere.
- Test the link on LinkedIn/WhatsApp previews.

## Production checklist

- [ ] Replace `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_URL`
- [ ] Read `about.js`, `skills.js` levels and each project's "problem" / "learned" text and adjust to your voice
- [ ] Add real screenshots to each project (and GitHub / live links)
- [ ] Confirm `public/Ahmed-CV.pdf` is the version you want to share
- [ ] Set absolute `og:image` / `og:url` after choosing the domain
- [ ] Decide whether to show the phone number (`showPhone`)
