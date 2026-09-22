import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Handles scroll position on navigation: jumps to the #section for hash links,
 * otherwise returns to the top of the new page.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // Wait a frame so lazily rendered pages have mounted the target section.
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return undefined
  }, [pathname, hash, key])

  return null
}
