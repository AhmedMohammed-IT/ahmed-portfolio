import { ArrowUp } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { useScrolled } from '@/hooks/useScrollState'
import styles from './BackToTop.module.css'

export function BackToTop() {
  const { ui } = useContent()
  const visible = useScrolled(640)

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ''} no-print`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={ui.common.backToTop}
      title={ui.common.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  )
}
