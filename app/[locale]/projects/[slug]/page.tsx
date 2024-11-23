import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import {
  getProjects,
  getProjectsBySlug,
} from '@/features/projects/lib/get-projects'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailWithImageSkeleton } from '@/components/ui/skeletons'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map((project) => ({ slug: project.slug }))
  return slugs
}

type PropTypes = { readonly params: { slug: string } }

export default function ProjectDetailPage({ params }: PropTypes) {
  return (
    <DetailPage path='/projects'>
      <Suspense fallback={<DetailWithImageSkeleton />}>
        <FetchProjectDetail params={params} />
      </Suspense>
    </DetailPage>
  )
}

async function FetchProjectDetail({ params }: PropTypes) {
  const locale = await getLocale()
  const content = await getFileContent(params, getProjectsBySlug(locale))

  return <DetailContent {...content} />
}
