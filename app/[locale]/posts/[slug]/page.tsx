import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPosts, getPostsBySlug } from '@/features/posts/lib/get-posts'
import { getLocale } from 'next-intl/server'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

type PropTypes = {
  readonly params: { slug: string }
}

export default async function PostDetailPage({ params }: PropTypes) {
  const locale = await getLocale()
  const content = await getFileContent(params, getPostsBySlug(locale))

  return <DetailPage {...content} path={'/posts'} />
}
