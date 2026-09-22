import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import styles from './CopyButton.module.css'

// Fallback for browsers/contexts without the async clipboard API (e.g. non-secure origins).
function legacyCopy(text) {
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    document.body.removeChild(area)
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return legacyCopy(text)
  }
}

export function CopyButton({ text, label, copiedLabel, failedLabel }) {
  const [status, setStatus] = useState('idle') // idle | copied | failed
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function handleClick() {
    const ok = await copyText(text)
    setStatus(ok ? 'copied' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 2200)
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={handleClick} data-tooltip={label} aria-label={label}>
        {status === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === 'copied' ? copiedLabel : status === 'failed' ? failedLabel : ''}
      </span>
      {status !== 'idle' && (
        <span className={`${styles.badge} ${status === 'failed' ? styles.failed : ''}`} aria-hidden="true">
          {status === 'copied' ? copiedLabel : failedLabel}
        </span>
      )}
    </>
  )
}
