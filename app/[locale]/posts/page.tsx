import PostsWithSearch from '@/features/posts/components/posts-with-search'
import { getPosts } from '@/features/posts/lib/get-posts'

const t = {
  title: 'Posts',
}
export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>{t.title}</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
