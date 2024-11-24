import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { privacyDirectory } from '@/features/contact/lib/get-privacy'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailSkeleton } from '@/components/ui/skeletons'

export default async function PrivacyDetailPage() {
  return (
    <DetailPage path='/contact'>
      <Suspense fallback={<DetailSkeleton />}>
        <FetchPrivacyDetail />
      </Suspense>
    </DetailPage>
  )
}

async function FetchPrivacyDetail() {
  const params = { slug: 'privacy' }
  const locale = await getLocale()
  const content = await getFileContent(params, privacyDirectory, locale)

  return <DetailContent {...content} />
}
