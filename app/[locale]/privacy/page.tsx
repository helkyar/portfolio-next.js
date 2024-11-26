import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { privacyDirectory } from '@/features/contact/lib/get-privacy'
import { Suspense } from 'react'
import { DetailSkeleton } from '@/components/ui/skeletons'
import { LOCALE } from '@/data/constants'
import { DetailContent } from '@/components/detail-content'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const locale = Object.keys(LOCALE).map((locale) => ({ params: { locale } }))
  return locale
}

type PropTypes = { readonly params: Promise<{ locale: string }> }
export default async function PrivacyDetailPage({ params }: PropTypes) {
  if (!process.env.SHOW_PRIVACY && !process.env.NEXT_PUBLIC_SHOW_NEWSLETTER) {
    notFound()
  }

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
