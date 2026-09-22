import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useContent } from '@/context/LocaleContext'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { ui } = useContent()
  const isDark = theme === 'dark'
  const label = isDark ? ui.common.switchToLight : ui.common.switchToDark

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
