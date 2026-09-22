import { siCss, siGit, siGithub, siHtml5, siJavascript, siMysql, siNodedotjs, siNpm, siReact, siVite } from 'simple-icons'
import { Icon } from './Icon'

// Named imports keep the bundle small (only these brand glyphs are shipped).
const brandIcons = { siCss, siGit, siGithub, siHtml5, siJavascript, siMysql, siNodedotjs, siNpm, siReact, siVite }

export function TechIcon({ icon, lucide, size = 28 }) {
  const brand = icon ? brandIcons[icon] : null
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
        <path d={brand.path} />
      </svg>
    )
  }
  return <Icon name={lucide} size={size} strokeWidth={1.6} />
}
