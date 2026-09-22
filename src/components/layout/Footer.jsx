import { useContent } from '@/context/LocaleContext'
import { SocialLink } from '@/components/ui/SocialLink'
import styles from './Footer.module.css'

export function Footer() {
  const { profile, socialLinks, ui } = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <p className={styles.name}>{profile.shortName}</p>
          <p className={styles.field}>{profile.field}</p>
          <p className={styles.line}>{ui.footer.line}</p>
        </div>
        <ul className={styles.social}>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <SocialLink link={link} />
            </li>
          ))}
        </ul>
      </div>
      <div className={`container ${styles.legal}`}>
        <p>
          © {year} {profile.shortName}. {ui.footer.rights}
        </p>
      </div>
    </footer>
  )
}
