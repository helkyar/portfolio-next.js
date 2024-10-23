import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPosts, getPostsBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const content = await getFileContent(params, getPostsBySlug)

  return <DetailPage {...content} />
}
