import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrollState'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from './ThemeToggle'
import styles from './Navbar.module.css'

export function Navbar() {
  const { ui, profile } = useContent()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const ids = useMemo(() => ui.nav.map((item) => item.id), [ui.nav])
  const activeId = useActiveSection(ids, isHome)

  // Escape closes the mobile menu; body scroll is locked while it is open.
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Leaving the mobile layout (e.g. rotating a tablet) closes the menu.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 961px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''} no-print`}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} onClick={closeMenu} aria-label={`${profile.name} — ${ui.common.home}`}>
          <span className={styles.mark} aria-hidden="true">
            A
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{profile.shortName}</span>
            <span className={styles.brandField}>{profile.field}</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label={ui.common.primaryNav}>
          <ul className={styles.links}>
            {ui.nav.map((item) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: '/', hash: `#${item.id}` }}
                  className={`${styles.link} ${activeId === item.id ? styles.active : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Button
            href={profile.cvUrl}
            download={profile.cvDownloadName}
            variant="ghost"
            size="sm"
            icon={<Download size={16} aria-hidden="true" />}
            className={styles.cv}
          >
            CV
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.common.closeMenu : ui.common.openMenu}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`} hidden={!open}>
        <nav aria-label={ui.common.mobileNav} className="container">
          <ul className={styles.mobileLinks}>
            {ui.nav.map((item) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: '/', hash: `#${item.id}` }}
                  className={`${styles.mobileLink} ${activeId === item.id ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href={profile.cvUrl}
            download={profile.cvDownloadName}
            variant="primary"
            icon={<Download size={16} aria-hidden="true" />}
            className={styles.mobileCv}
            onClick={closeMenu}
          >
            {ui.common.downloadCv}
          </Button>
        </nav>
      </div>
    </header>
  )
}
