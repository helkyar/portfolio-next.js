import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import {
  getProjects,
  getProjectsBySlug,
} from '@/features/projects/lib/get-projects'
import { getLocale } from 'next-intl/server'

export async function generateStaticParams() {
  const posts = await getProjects()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

type PropTypes = { readonly params: { slug: string } }

export default async function ProjectDetailPage({ params }: PropTypes) {
  const locale = await getLocale()
  const content = await getFileContent(params, getProjectsBySlug(locale))

  return <DetailPage {...content} path='/projects' />
}
