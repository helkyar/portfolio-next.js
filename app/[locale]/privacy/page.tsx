import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPrivacyBySlug } from '@/features/contact/lib/privacy'
import { getLocale } from 'next-intl/server'

export default async function PrivacyDetailPage() {
  const params = { slug: 'privacy' }
  const locale = await getLocale()
  const content = await getFileContent(params, getPrivacyBySlug(locale))

  return <DetailPage {...content} path='/contact' />
}
