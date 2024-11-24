import { FileMetadata } from '@/data/types'
import Posts from '@/features/posts/components/posts'

type PropTypes = {
  readonly posts: FileMetadata[]
  readonly query: string
}

export function PostsWithFilter({ posts, query }: PropTypes) {
  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.summary?.toLowerCase().includes(query.toLowerCase()),
  )

  return <Posts posts={filteredPosts} />
}
