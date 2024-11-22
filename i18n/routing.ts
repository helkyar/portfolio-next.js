import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { LOCALE } from '@/data/constants'

// A list of all locales that are supported
const locales = Object.keys(LOCALE)

export const routing = defineRouting({
  locales,

  defaultLocale: LOCALE.default,
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
