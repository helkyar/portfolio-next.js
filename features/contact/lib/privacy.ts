import path from 'path'
import {
  FileMetadata as PrivacyPolicyMetadata,
  File as PrivacyPolicy,
} from '@/data/types'
import { getFiles, getFilesBySlug } from '@/lib/file-parser'
import { LOCALE_DEFAULT } from '@/data/constants'

async function getRootDirectory(locale: string = LOCALE_DEFAULT) {
  return path.join(process.cwd(), 'features/contact/content/privacy', locale)
}

export function getPrivacyBySlug(locale: string) {
  return async (slug: string): Promise<PrivacyPolicy | null> => {
    const rootDirectory = await getRootDirectory(locale)
    return getFilesBySlug(slug, rootDirectory)
  }
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
