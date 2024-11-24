import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { projectDirectory } from '@/features/projects/lib/get-projects'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailWithImageSkeleton } from '@/components/ui/skeletons'

type PropTypes = { readonly params: Promise<{ slug: string }> }

export default async function ProjectDetailPage(props: PropTypes) {
  const params = await props.params
  return (
    <DetailPage path='/projects'>
      <Suspense fallback={<DetailWithImageSkeleton />}>
        <FetchProjectDetail params={params} />
      </Suspense>
    </DetailPage>
  )
}

type ParamTypes = { readonly params: { slug: string } }
async function FetchProjectDetail({ params }: ParamTypes) {
  const locale = await getLocale()
  const content = await getFileContent(params, projectDirectory, locale)

  return <DetailContent {...content} />
}
