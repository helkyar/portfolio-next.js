'use client'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import NewsletterForm from '@/features/contact/components/newsletter-form'
import { Link } from '@/i18n/routing'
import { useTranslation } from '@/lib/translations'
import { useRouter } from 'next/navigation'

type PropTypes = {
  readonly children: React.ReactNode
  readonly path: string
}
export default function DetailPage({ children, path }: PropTypes) {
  const { t } = useTranslation('DetailPage')

  const { back } = useRouter()
  return (
    <section className='pb-20 pt-20'>
      <div className='container mx-auto max-w-3xl'>
        <Link
          onClick={back}
          href={''}
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>{t('back')}</span>
        </Link>
        {children}
      </div>

      {path !== '/contact' && (
        <footer className='mt-10'>
          <NewsletterForm />
        </footer>
      )}
    </section>
  )
}
