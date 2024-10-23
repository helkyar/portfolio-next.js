import { ArrowLeftIcon } from '@radix-ui/react-icons'
import MDXContent from './mdx-content'
import NewsletterForm from './newsletter-form'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { FileContent } from '@/data/file-constants'

const t = {
  back: 'Back to all posts',
}

export default async function DetailPage({
  author,
  content,
  image,
  publishedAt,
  title,
}: FileContent) {
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
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
            />
          </div>
        )}
        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} - {formatDate(publishedAt ?? '')}
          </p>
        </header>
        <main className='prose dark:prose-invert mt-16'>
          <MDXContent source={content} />
        </main>
        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}
