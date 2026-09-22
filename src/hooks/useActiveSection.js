import { useEffect, useState } from 'react'

/** Returns the id of the section currently crossing the upper-middle of the viewport. */
export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') return undefined
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
          setActive(top.target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < 120) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids, enabled])

  return enabled ? active : null
}
