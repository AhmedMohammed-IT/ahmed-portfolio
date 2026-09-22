import styles from './Background.module.css'

/**
 * Fixed, decorative backdrop: faint grid, two soft glows, and a fine film-grain layer over
 * everything (the grain sits above content on purpose — the same technique sites like Stripe
 * and Linear use — at low enough opacity it reads as texture, not noise). Pure CSS/SVG,
 * ignored by screen readers.
 */
export function Background() {
  return (
    <>
      <div className={`${styles.background} no-print`} aria-hidden="true">
        <div className={styles.grid} />
        <div className={`${styles.glow} ${styles.glowA}`} />
        <div className={`${styles.glow} ${styles.glowB}`} />
      </div>
      <div className={`${styles.grain} no-print`} aria-hidden="true" />
    </>
  )
}
