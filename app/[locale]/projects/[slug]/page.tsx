import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { projectDirectory } from '@/features/projects/lib/get-projects'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailWithImageSkeleton } from '@/components/ui/skeletons'

type PropTypes = { readonly params: { slug: string } }

export default async function ProjectDetailPage({ params }: PropTypes) {
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
  const content = await getFileContent(params, projectDirectory, locale)

  return <DetailContent {...content} />
}
