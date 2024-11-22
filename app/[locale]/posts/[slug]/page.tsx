import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPosts, getPostsBySlug } from '@/features/posts/lib/get-posts'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

type PropTypes = {
  readonly params: { slug: string }
}

export default async function PostDetailPage({ params }: PropTypes) {
  const content = await getFileContent(params, getPostsBySlug)

  return <DetailPage {...content} path={'/posts'} />
}
