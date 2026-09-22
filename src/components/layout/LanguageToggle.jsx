import { Languages } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import styles from './LanguageToggle.module.css'

export function LanguageToggle() {
  const { locale, setLocale, ui } = useContent()
  const target = locale === 'en' ? 'ar' : 'en'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setLocale(target)}
      aria-label={ui.common.switchLanguage}
      title={ui.common.switchLanguage}
    >
      <Languages size={16} aria-hidden="true" />
      <span>{ui.common.languageLabel}</span>
    </button>
  )
}
