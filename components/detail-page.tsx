import { ArrowLeftIcon } from '@radix-ui/react-icons'
import MDXContent from '@/components/mdx-content'
import NewsletterForm from '@/components/newsletter-form'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { FileContent } from '@/data/file-constants'

const t = {
  back: 'Go back',
}

interface PageContent extends FileContent {
  path?: string
}

export default function DetailPage({
  author,
  content,
  image,
  publishedAt,
  title,
  path = '/',
}: PageContent) {
  return (
    <section className='pb-20 pt-20'>
      <div className='container max-w-3xl'>
        <Link
          href={path}
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>{t.back}</span>
        </Link>
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
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
