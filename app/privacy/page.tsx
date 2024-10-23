import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPrivacyBySlug, getPrivacyPolicy } from '@/lib/privacy'

export default async function PostDetailPage() {
  const params = { slug: 'privacy' }
  const content = await getFileContent(params, getPrivacyBySlug)

  return <DetailPage {...content} />
}
