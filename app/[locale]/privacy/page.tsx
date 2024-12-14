import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { privacyDirectory } from '@/features/contact/lib/get-privacy'
import { Suspense } from 'react'
import { DetailSkeleton } from '@/components/ui/skeletons'
import { DetailContent } from '@/components/detail-content'
import { notFound } from 'next/navigation'
import { envConfig } from '@/lib/env-config'

type PropTypes = { readonly params: Promise<{ locale: string }> }
export default async function PrivacyDetailPage({ params }: PropTypes) {
  if (!envConfig.showPrivacy) notFound()

  const { locale } = await params
  return (
    <DetailPage path='/contact'>
      <Suspense fallback={<DetailSkeleton />}>
        <FetchPrivacyDetail locale={locale} />
      </Suspense>
    </DetailPage>
  )
}

type FetchTypes = { readonly locale: string }
async function FetchPrivacyDetail({ locale }: FetchTypes) {
  const slug = 'privacy'
  const content = await getFileContent(slug, privacyDirectory, locale)

  return <DetailContent {...content} />
}
