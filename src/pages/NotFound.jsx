import { ArrowLeft } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { Button } from '@/components/ui/Button'
import styles from './NotFound.module.css'

export default function NotFound({ title, text }) {
  const { ui, profile } = useContent()
  const copy = ui.notFound
  useDocumentTitle(`${title ?? copy.title} | ${profile.name}`)

  return (
    <section className={styles.wrap} aria-labelledby="notfound-title">
      <div className="container">
        <p className={styles.code} aria-hidden="true">
          {copy.code}
        </p>
        <h1 id="notfound-title" className={styles.title}>
          {title ?? copy.title}
        </h1>
        <p className={styles.text}>{text ?? copy.text}</p>
        <Button to="/" icon={<ArrowLeft size={18} aria-hidden="true" />}>
          {copy.action}
        </Button>
      </div>
    </section>
  )
}
