import { Link } from '@/i18n/routing'
import { useTranslation } from '@/lib/translations'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  const { t } = useTranslation('NotFound')
  return (
    <section className='pb-24 pt-40'>
      <div className='sm:py-s4 min-h-full px-4 sm:px-6 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4x1 font-bold tracking-tight text-muted-foreground sm:text-5xl'>
              {t('subtitle')}
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='sm:text- text-3xl font-bold tracking-tight sm:text-5xl'>
                  {t('title')}
                </h1>
                <p className='mt-4 text-base text-muted-foreground'>
                  {t('description')}
                </p>
              </div>
              <div className='mt-10 text-base'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-3 rounded-lg bg-muted py-2 pl-2 pr-4 text-muted-foreground hover:bg-accent hover:text-foreground'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>{t('home')}</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
