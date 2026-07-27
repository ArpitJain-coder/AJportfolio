import { createElement } from 'react'

/**
 * Wrapper for <iconify-icon> web component.
 * Uses React.createElement to pass `class` (not className) so the
 * custom element receives the correct attribute in React 18.
 */
export default function Icon({ icon, className = '', style }) {
  return createElement('iconify-icon', { icon, class: className, style })
}
