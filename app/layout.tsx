import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

import { getMessages, setRequestLocale } from 'next-intl/server'
import { Locale } from '@/data/constants'
import Providers from '@/components/providers'
import { NextIntlClientProvider } from 'next-intl'

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
  readonly params: Promise<{ locale: Locale }>
}

export default async function RootLayout({ children, params }: PropTypes) {
  const { locale } = await params
  setRequestLocale(locale)
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
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
