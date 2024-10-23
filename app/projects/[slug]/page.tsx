import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getProjects, getProjectsBySlug } from '@/lib/projects'

export async function generateStaticParams() {
  const posts = await getProjects()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const content = await getFileContent(params, getProjectsBySlug)

  return <DetailPage {...content} />
}
