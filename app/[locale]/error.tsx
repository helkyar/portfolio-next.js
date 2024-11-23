'use client'

import { useTranslation } from '@/lib/translations'
import { useEffect } from 'react'
type PropTypes = {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}
export default function ErrorPage({ error, reset }: PropTypes) {
  const { t } = useTranslation('ErrorPage')
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className='absolute bottom-0 left-0 right-0 top-0 m-auto flex h-full flex-col items-center justify-center'>
      <h1 className='title text-center no-underline'>{t('title')}</h1>
      <button
        className='mt-4 rounded-lg bg-muted p-3 text-base text-muted-foreground hover:bg-accent hover:text-foreground'
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        {t('link')}
      </button>
    </main>
  )
}
