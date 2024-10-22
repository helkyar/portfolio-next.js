import Link from 'next/link'
import Posts from './posts'
import { getPosts } from '@/lib/posts'

const t = {
  title: 'Recent Posts',
  link: 'View all posts',
}
export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section>
      <div>
        <h2 className='title mb-12'>{t.title}</h2>
        <Posts posts={posts} />
        <Link
          href={'/posts'}
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>{t.link}</span>
        </Link>
      </div>
    </section>
  )
}
