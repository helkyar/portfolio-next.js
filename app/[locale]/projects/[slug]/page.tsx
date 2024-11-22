import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import {
  getProjects,
  getProjectsBySlug,
} from '@/features/projects/lib/get-projects'

export async function generateStaticParams() {
  const posts = await getProjects()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

type PropTypes = { readonly params: { slug: string } }

export default async function ProjectDetailPage({ params }: PropTypes) {
  const content = await getFileContent(params, getProjectsBySlug)

  return <DetailPage {...content} path='/projects' />
}
