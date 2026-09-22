import { useScrollProgress } from '@/hooks/useScrollState'
import styles from './ScrollProgress.module.css'

/** Thin reading-progress bar pinned to the top edge. Decorative, so hidden from assistive tech. */
export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className={`${styles.track} no-print`} aria-hidden="true">
      <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
