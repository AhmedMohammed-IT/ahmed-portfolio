import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { contents, defaultLocale } from '@/data'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale)
  const content = contents[locale] ?? contents[defaultLocale]

  useEffect(() => {
    document.documentElement.lang = content.locale
    document.documentElement.dir = content.dir
  }, [content])

  const value = useMemo(() => ({ ...content, setLocale, locales: Object.keys(contents) }), [content])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/** Returns the active language's content plus { locale, dir, setLocale }. */
// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useContent must be used inside <LocaleProvider>')
  return ctx
}
