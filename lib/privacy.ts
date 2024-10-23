import path from 'path'

import {
  FileMetadata as PrivacyPlicyMetadata,
  File as PrivacyPolicy,
} from '@/data/file-constants'
import { getFiles, getFilesBySlug } from '@/lib/file-parser'

const rootDirectory = path.join(process.cwd(), 'content', 'privacy')

export async function getPrivacyBySlug(
  slug: string,
): Promise<PrivacyPolicy | null> {
  return getFilesBySlug(slug, rootDirectory)
}

export async function getPrivacyPolicy(
  limit?: number,
): Promise<PrivacyPlicyMetadata[]> {
  return getFiles(rootDirectory, limit)
}
