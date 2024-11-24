import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Locale } from '@/data/constants'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/features/layout/header'
import Footer from '@/features/layout/footer'
import { getMessages } from 'next-intl/server'

type PropTypes = {
  readonly children: React.ReactNode
  readonly params: { locale: Locale }
}

export default async function RootLayout({
  children,
  params: { locale },
}: PropTypes) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header locale={locale} />
      <main className='w-full grow px-4 sm:px-12'>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
