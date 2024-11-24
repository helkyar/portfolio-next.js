import path from 'path'
import { FileMetadata as PrivacyPolicyMetadata } from '@/data/types'
import { getFiles } from '@/lib/file-parser'
import { LOCALE_DEFAULT } from '@/data/constants'

export const privacyDirectory = 'features/contact/content/privacy'

async function getRootDirectory(locale: string = LOCALE_DEFAULT) {
  return path.join(process.cwd(), privacyDirectory, locale)
}

type Params = {
  limit?: number
  locale?: string
}
export async function getPrivacyPolicy(
  data: Params = {},
): Promise<PrivacyPolicyMetadata[]> {
  const { limit, locale } = data
  const rootDirectory = await getRootDirectory(locale)
  return getFiles(rootDirectory, limit)
}
