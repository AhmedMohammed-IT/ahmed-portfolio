import { useEffect, useRef, useState } from 'react'

const HAS_OBSERVER = typeof IntersectionObserver !== 'undefined'

/** Marks an element visible once it scrolls into view (used for fade / slide-up reveals). */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  // Without IntersectionObserver support, content is simply shown right away.
  const [visible, setVisible] = useState(!HAS_OBSERVER)

  useEffect(() => {
    const node = ref.current
    if (!node || !HAS_OBSERVER) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
