import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { contents, defaultLocale } from '@/data'

const STORAGE_KEY = 'locale'

const LocaleContext = createContext(null)

function readInitialLocale() {
  // index.html already applied the saved language before first paint; mirror it here.
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && contents[saved]) return saved
  } catch {
    // Storage can be blocked (private mode); fall back to the default language.
  }
  return defaultLocale
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readInitialLocale)
  const content = contents[locale] ?? contents[defaultLocale]

  useEffect(() => {
    document.documentElement.lang = content.locale
    document.documentElement.dir = content.dir
  }, [content])

  const setLocale = useCallback((next) => {
    if (!contents[next]) return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be blocked; the choice still applies for this visit.
    }
  }, [])

  const value = useMemo(() => ({ ...content, setLocale, locales: Object.keys(contents) }), [content, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/** Returns the active language's content plus { locale, dir, setLocale, locales }. */
// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useContent must be used inside <LocaleProvider>')
  return ctx
}
