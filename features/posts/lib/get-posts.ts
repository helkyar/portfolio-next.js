import path from 'path'

import { FileMetadata as PostMetadata } from '@/data/types'
import { getFiles } from '@/lib/file-parser'
import { LOCALE_DEFAULT } from '@/data/constants'

export const postDirectory = 'features/posts/content'

async function getRootDirectory(locale: string = LOCALE_DEFAULT) {
  return path.join(process.cwd(), postDirectory, locale)
}

type Params = {
  readonly locale?: string
  readonly limit?: number
}

export async function getPosts(data: Params = {}): Promise<PostMetadata[]> {
  const { locale, limit } = data
  const rootDirectory = await getRootDirectory(locale)
  return getFiles(rootDirectory, limit)
}
