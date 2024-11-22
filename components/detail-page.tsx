import { ArrowLeftIcon } from '@radix-ui/react-icons'
import MDXContent from '@/components/mdx-content'
import NewsletterForm from '@/features/contact/components/newsletter-form'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Link } from '@/i18n/routing'
import { FileContent } from '@/data/types'
import { useTranslation } from '@/lib/translations'

interface PageContent extends FileContent {
  readonly path?: string
}

export default function DetailPage({
  author,
  content,
  image,
  publishedAt,
  title,
  path = '/',
}: PageContent) {
  const { t } = useTranslation('DetailPage')
  return (
    <section className='pb-20 pt-20'>
      <div className='container mx-auto max-w-3xl'>
        <Link
          href={path}
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>{t('back')}</span>
        </Link>
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title ?? ''}
              className='object-cover'
              fill
              sizes='(min-width: 640px) 640px, 100vw'
              priority
            />
          </div>
        )}
        <header>
          <h1 className='title'>{title}</h1>
          {publishedAt && (
            <p className='mt-3 text-xs text-muted-foreground'>
              {author} - {formatDate(publishedAt ?? '')}
            </p>
          )}
        </header>
        <main className='prose dark:prose-invert mt-16'>
          <MDXContent source={content} />
        </main>
        {path !== '/contact' && (
          <footer className='mt-10'>
            <NewsletterForm />
          </footer>
        )}
      </div>
    </section>
  )
}
