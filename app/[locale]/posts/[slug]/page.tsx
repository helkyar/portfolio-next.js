import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { postDirectory } from '@/features/posts/lib/get-posts'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailWithImageSkeleton } from '@/components/ui/skeletons'

type PropTypes = {
  readonly params: Promise<{ slug: string }>
}

export default async function PostDetailPage(props: PropTypes) {
  const params = await props.params
  return (
    <DetailPage path='/posts'>
      <Suspense fallback={<DetailWithImageSkeleton />}>
        <FetchPostsDetail params={params} />
      </Suspense>
    </DetailPage>
  )
}
type ParamTypes = { readonly params: { slug: string } }
async function FetchPostsDetail({ params }: ParamTypes) {
  const locale = await getLocale()
  const content = await getFileContent(params, postDirectory, locale)

  return <DetailContent {...content} />
}
