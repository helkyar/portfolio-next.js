import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { FileMetadata } from '@/data/file-constants'
import { Card } from '@/components/ui/card'

export default function Posts({ posts }: { posts: FileMetadata[] }) {
  return (
    <ul className='flex flex-col gap-4'>
      {posts.map((post: FileMetadata) => (
        <Card key={post.slug} className='rounded-lg border-0 dark:border'>
          <li>
            <Link
              href={`/posts/${post.slug}`}
              className='flex flex-col justify-between gap-x-4 gap-y-1 p-4 hover:bg-black hover:bg-opacity-5 sm:flex-row'
            >
              <div className='max-w-lg'>
                <p className='text-lg font-semibold'>{post.title}</p>
                <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                  {post.summary}
                </p>
              </div>
              {post.publishedAt && (
                <p className='mt-1 text-sm font-light'>
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </Link>
          </li>
        </Card>
      ))}
    </ul>
  )
}
