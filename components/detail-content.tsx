import MDXContent from '@/components/mdx-content'
import { FileContent } from '@/data/types'
import { cn, formatDate } from '@/lib/utils'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export function DetailContent({
  author,
  content,
  image,
  publishedAt,
  title,
  noRatio,
}: Readonly<FileContent>) {
  const locale = useLocale()
  return (
    <>
      {image && (
        <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title ?? ''}
            className={cn({ ['object-cover']: !noRatio })}
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
            {author} - {formatDate(publishedAt ?? '', locale)}
          </p>
        )}
      </header>
      <main className='prose dark:prose-invert mt-16'>
        <MDXContent source={content} />
      </main>
    </>
  )
}
