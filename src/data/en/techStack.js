/**
 * Tech stack shown as an icon grid.
 * - `icon`: export name from the `simple-icons` package (mapped in components/ui/TechIcon.jsx)
 * - `lucide`: fallback generic icon key (mapped in components/ui/Icon.jsx) for tools without a brand icon
 * Add an item here to add a tile (and register its icon in TechIcon.jsx if it is a brand icon).
 */
export const techStack = [
  { name: 'HTML', icon: 'siHtml5' },
  { name: 'CSS', icon: 'siCss' },
  { name: 'JavaScript', icon: 'siJavascript' },
  { name: 'React', icon: 'siReact' },
  { name: 'Vite', icon: 'siVite' },
  { name: 'Node.js', icon: 'siNodedotjs' },
  { name: 'SQL / MySQL', icon: 'siMysql' },
  { name: 'Git', icon: 'siGit' },
  { name: 'GitHub', icon: 'siGithub' },
  { name: 'VS Code', lucide: 'code' },
  { name: 'PowerShell', lucide: 'terminal' },
  { name: 'npm', icon: 'siNpm' },
]
