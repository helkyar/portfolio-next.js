import Posts from '@/features/posts/components/posts'
import { getPosts } from '@/features/posts/lib/get-posts'
import { DEFAULT_POSTS_PREVIEW } from '@/data/file-constants'
import { Link } from '@/i18n/routing'

const t = {
  title: 'Recent Posts',
  link: 'View all posts',
}
export default async function RecentPosts() {
  const posts = await getPosts(DEFAULT_POSTS_PREVIEW)

  return (
    <section>
      <div>
        <h2 className='title mb-4'>{t.title}</h2>
        <Posts posts={posts} />
        <Link
          href={'/posts'}
          className='mt-4 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>{t.link}</span>
        </Link>
      </div>
    </section>
  )
}
