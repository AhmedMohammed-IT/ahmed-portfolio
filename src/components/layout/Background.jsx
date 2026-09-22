import styles from './Background.module.css'

/** Fixed, decorative backdrop: faint grid + two soft glows. Pure CSS, ignored by screen readers. */
export function Background() {
  return (
    <div className={`${styles.background} no-print`} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />
    </div>
  )
}
