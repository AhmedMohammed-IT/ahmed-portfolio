import { Icon } from '@/components/ui/Icon'
import styles from './ProjectCover.module.css'

/**
 * Cover art for a project. Uses the first screenshot when there is one;
 * otherwise it draws a gradient panel with the project's icon, so cards never look empty.
 */
export function ProjectCover({ project, size = 'card' }) {
  const image = project.screenshots?.[0]

  if (image) {
    return (
      <div className={`${styles.cover} ${styles[size]}`}>
        <img src={image.src} alt={image.alt} loading="lazy" className={styles.image} />
      </div>
    )
  }

  return (
    <div
      className={`${styles.cover} ${styles[size]}`}
      style={{ '--from': project.cover.from, '--to': project.cover.to }}
      role="img"
      aria-label={`${project.name} cover`}
    >
      <span className={styles.pattern} aria-hidden="true" />
      <span className={styles.icon} aria-hidden="true">
        <Icon name={project.cover.icon} size={size === 'hero' ? 64 : 44} strokeWidth={1.5} />
      </span>
    </div>
  )
}
