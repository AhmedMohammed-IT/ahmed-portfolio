/** A link is a placeholder while it still contains the "YOUR_" marker or is empty. */
export function isPlaceholder(url) {
  return !url || /YOUR_/i.test(url)
}

export function isExternal(url) {
  return /^https?:\/\//i.test(url)
}

/** Whether a placeholder should be shown (dev only, as a hint) or hidden (production). */
export const SHOW_PLACEHOLDERS = import.meta.env.DEV
