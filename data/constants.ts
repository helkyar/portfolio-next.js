export const enum Theme {
  dark = 'dark',
  light = 'light',
}
export const LOCALE = {
  en: 'english',
  es: 'español',
  de: 'deutsch',
  fr: 'français',
}
export const LOCALE_DEFAULT = 'en'
export type Locale = keyof typeof LOCALE

export const DEFAULT_POSTS_PREVIEW = 2
export const DEFAULT_PROJECTS_PREVIEW = 2
