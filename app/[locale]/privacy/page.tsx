import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPrivacyPolicy } from '@/features/contact/lib/get-privacy'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailSkeleton } from '@/components/ui/skeletons'
import { privacyDirectory } from '@/features/contact/lib/get-privacy'

export async function generateStaticParams() {
  const policies = await getPrivacyPolicy()
  const slugs = policies.map((policy) => ({ slug: policy.slug }))
  return slugs
}

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
