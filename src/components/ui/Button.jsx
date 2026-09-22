import { Link } from 'react-router-dom'
import { isExternal } from '@/utils/links'
import styles from './Button.module.css'

/**
 * One button for every call to action.
 * - `to`   → in-app route (React Router)
 * - `href` → anchor / file / external link
 * - neither → real <button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  download,
  icon,
  iconPosition = 'start',
  className = '',
  children,
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')
  const content = (
    <>
      {icon && iconPosition === 'start' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className={styles.icon}>{icon}</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = isExternal(href)
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
