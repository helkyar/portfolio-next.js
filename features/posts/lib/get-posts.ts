import path from 'path'

import { FileMetadata as PostMetadata, File as Post } from '@/data/types'
import { getFiles, getFilesBySlug } from '@/lib/file-parser'
import { LOCALE } from '@/data/constants'

async function getRootDirectory(locale: string) {
  return path.join(process.cwd(), 'features/posts/content', locale)
}

export function getPostsBySlug(locale: string) {
  return async (slug: string): Promise<Post | null> => {
    const rootDirectory = await getRootDirectory(locale)
    return getFilesBySlug(slug, rootDirectory)
  }
}

type Params = {
  readonly locale?: string
  readonly limit?: number
}

export async function getPosts(data: Params = {}): Promise<PostMetadata[]> {
  const { locale = LOCALE.default, limit } = data
  const rootDirectory = await getRootDirectory(locale)
  return getFiles(rootDirectory, limit)
}
