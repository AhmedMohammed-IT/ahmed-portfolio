import { ExternalLink } from 'lucide-react'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { isPlaceholder, SHOW_PLACEHOLDERS } from '@/utils/links'
import styles from './ProjectLinks.module.css'

function LinkItem({ url, label, icon }) {
  if (isPlaceholder(url)) {
    if (!SHOW_PLACEHOLDERS) return null
    return (
      <span className={`${styles.link} ${styles.todo}`} title={`TODO: add the ${label} link in src/data/en/projects.js`}>
        {icon}
        {label}
      </span>
    )
  }
  return (
    <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">
      {icon}
      {label}
    </a>
  )
}

/** GitHub + live demo links for a project. Links that are not set yet are hidden in production. */
export function ProjectLinks({ links, githubLabel, liveLabel }) {
  return (
    <div className={styles.row}>
      <LinkItem url={links.github} label={githubLabel} icon={<BrandIcon name="github" size={16} />} />
      <LinkItem url={links.live} label={liveLabel} icon={<ExternalLink size={16} aria-hidden="true" />} />
    </div>
  )
}
