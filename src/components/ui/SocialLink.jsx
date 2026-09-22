import { isExternal, isPlaceholder, SHOW_PLACEHOLDERS } from '@/utils/links'
import { BrandIcon } from './BrandIcon'
import styles from './SocialLink.module.css'

/**
 * Icon link with a tooltip. Links that still hold a "YOUR_" placeholder are hidden in
 * production and shown as a dashed hint in dev, so a live site never has a dead link.
 */
export function SocialLink({ link, size = 20 }) {
  const placeholder = isPlaceholder(link.url)

  if (placeholder) {
    if (!SHOW_PLACEHOLDERS) return null
    return (
      <span
        className={`${styles.link} ${styles.todo}`}
        data-tooltip={`TODO: set your ${link.label} link in src/data/en/profile.js`}
        title={`TODO: set your ${link.label} link in src/data/en/profile.js`}
      >
        <BrandIcon name={link.id} size={size} />
        <span className="sr-only">{link.label} (not set yet)</span>
      </span>
    )
  }

  return (
    <a
      href={link.url}
      className={styles.link}
      data-tooltip={link.label}
      aria-label={link.label}
      {...(isExternal(link.url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <BrandIcon name={link.id} size={size} />
    </a>
  )
}
