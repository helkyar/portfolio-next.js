import { useEffect } from 'react'

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: (event?: MouseEvent) => void,
) {
  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const languageSelector = target.closest('#language-selector')
      if (languageSelector !== (ref.current as Node)) {
        onClickOutside(event)
      }
    }

    document.addEventListener('mousedown', eventHandler)
    return () => {
      document.removeEventListener('mousedown', eventHandler)
    }
  }, [ref, onClickOutside])
}
