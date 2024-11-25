import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { LOCALE, Locale } from '@/data/constants'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/features/layout/header'
import Footer from '@/features/layout/footer'
import { getMessages, setRequestLocale } from 'next-intl/server'

export async function generateStaticParams() {
  const locale = Object.keys(LOCALE).map((locale) => ({ locale }))
  return locale
}

type PropTypes = {
  readonly children: React.ReactNode
  readonly params: Promise<{ locale: Locale }>
}

export default async function RootLayout({ children, params }: PropTypes) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header locale={locale} />
      <main className='w-full grow px-4 sm:px-12'>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
