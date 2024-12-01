import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import {
  getProjects,
  projectDirectory,
} from '@/features/projects/lib/get-projects'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailWithImageSkeleton } from '@/components/ui/skeletons'
import { LOCALE } from '@/data/constants'
import { DetailContent } from '@/components/detail-content'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.flatMap((project) =>
    Object.keys(LOCALE).map((locale) => ({
      slug: project.slug,
      locale,
    })),
  )

  return slugs
}

type PropTypes = { readonly params: Promise<{ slug: string }> }

export default async function ProjectDetailPage({ params }: PropTypes) {
  const { slug } = await params
  return (
    <DetailPage path='/projects'>
      <Suspense fallback={<DetailWithImageSkeleton />}>
        <FetchProjectDetail slug={slug} />
      </Suspense>
    </DetailPage>
  )
}

type ParamTypes = { readonly slug: string }
async function FetchProjectDetail({ slug }: ParamTypes) {
  const locale = await getLocale()
  const content = await getFileContent(slug, projectDirectory, locale)

  return <DetailContent {...content} />
}
