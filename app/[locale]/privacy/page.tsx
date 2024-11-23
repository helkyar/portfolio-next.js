import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import {
  getPrivacyBySlug,
  getPrivacyPolicy,
} from '@/features/contact/lib/privacy'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailSkeleton } from '@/components/ui/skeletons'

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
  const content = await getFileContent(params, getPrivacyBySlug(locale))

  return <DetailContent {...content} />
}
