import styles from './Tag.module.css'

export function Tag({ children, tone = 'default' }) {
  return <span className={`${styles.tag} ${tone === 'accent' ? styles.accent : ''}`}>{children}</span>
}
