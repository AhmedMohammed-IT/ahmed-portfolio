import { useId, useState } from 'react'
import { Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { CopyButton } from '@/components/ui/CopyButton'
import { SocialLink } from '@/components/ui/SocialLink'
import styles from './Contact.module.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const INITIAL = { name: '', email: '', subject: '', message: '' }

export function Contact({ index }) {
  const { profile, socialLinks, ui } = useContent()
  const copy = ui.sections.contact
  const text = ui.contact
  const formId = useId()

  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
    if (sent) setSent(false)
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = text.form.errors.name
    if (!EMAIL_PATTERN.test(values.email.trim())) next.email = text.form.errors.email
    if (!values.message.trim()) next.message = text.form.errors.message
    return next
  }

  // There is no backend, so the form builds a mailto: link. Nothing is stored or sent by this site.
  function handleSubmit(event) {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = values.subject.trim() || `Portfolio message from ${values.name.trim()}`
    const body = `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldProps = (field) => ({
    id: `${formId}-${field}`,
    value: values[field],
    onChange: update(field),
    'aria-invalid': errors[field] ? 'true' : undefined,
    'aria-describedby': errors[field] ? `${formId}-${field}-error` : undefined,
  })

  const renderError = (field) =>
    errors[field] ? (
      <p id={`${formId}-${field}-error`} className={styles.error}>
        {errors[field]}
      </p>
    ) : null

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle id="contact-title" index={index} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className={styles.layout}>
          <Reveal className={styles.info}>
            <ul className={styles.methods}>
              <li className={styles.method}>
                <span className={styles.methodIcon}>
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div className={styles.methodText}>
                  <span className={styles.label}>{text.emailLabel}</span>
                  <a href={`mailto:${profile.email}`} className={styles.value}>
                    {profile.email}
                  </a>
                </div>
                <CopyButton
                  text={profile.email}
                  label={text.copy}
                  copiedLabel={text.copied}
                  failedLabel={text.copyFailed}
                />
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon}>
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div className={styles.methodText}>
                  <span className={styles.label}>{text.locationLabel}</span>
                  <span className={styles.value}>{profile.location}</span>
                </div>
              </li>

              {profile.showPhone && (
                <li className={styles.method}>
                  <span className={styles.methodIcon}>
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <div className={styles.methodText}>
                    <span className={styles.label}>{text.phoneLabel}</span>
                    <a href={`tel:${profile.phoneIntl}`} className={styles.value}>
                      {profile.phone}
                    </a>
                  </div>
                </li>
              )}
            </ul>

            <div className={styles.cvCard}>
              <h3 className={styles.cvTitle}>{text.cvTitle}</h3>
              <p className={styles.cvText}>{text.cvText}</p>
              <Button
                href={profile.cvUrl}
                download={profile.cvDownloadName}
                variant="secondary"
                size="sm"
                icon={<Download size={16} aria-hidden="true" />}
              >
                {ui.common.downloadCv}
              </Button>
            </div>

            <ul className={styles.social}>
              {socialLinks
                .filter((link) => link.id !== 'email')
                .map((link) => (
                  <li key={link.id}>
                    <SocialLink link={link} />
                  </li>
                ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate aria-labelledby={`${formId}-title`}>
              <h3 id={`${formId}-title`} className={styles.formTitle}>
                {text.form.title}
              </h3>
              <p className={styles.note}>{text.form.note}</p>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor={`${formId}-name`}>{text.form.name}</label>
                  <input type="text" autoComplete="name" {...fieldProps('name')} />
                  {renderError('name')}
                </div>
                <div className={styles.field}>
                  <label htmlFor={`${formId}-email`}>{text.form.email}</label>
                  <input type="email" autoComplete="email" inputMode="email" {...fieldProps('email')} />
                  {renderError('email')}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor={`${formId}-subject`}>{text.form.subject}</label>
                <input type="text" {...fieldProps('subject')} />
              </div>

              <div className={styles.field}>
                <label htmlFor={`${formId}-message`}>{text.form.message}</label>
                <textarea rows={5} {...fieldProps('message')} />
                {renderError('message')}
              </div>

              <Button type="submit" icon={<Send size={16} aria-hidden="true" />} iconPosition="end">
                {text.form.send}
              </Button>

              <p className={styles.status} role="status" aria-live="polite">
                {sent ? text.form.success : ''}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
