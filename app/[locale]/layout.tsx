import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/features/layout/header'
import Footer from '@/features/layout/footer'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Locale } from '@/data/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: `Javi's Portfolio`,
  description: 'Professional portfolio to showcase projects',
}

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

  setRequestLocale(locale)
  // Providing all messages to the client side
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col items-center font-sans antialiased',
          inter.variable,
          playfair.variable,
        )}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <main className='w-full grow px-4 sm:px-12'>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
