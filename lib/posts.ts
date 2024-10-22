import path from 'path'

import {
  FileMetadata as PostMetadata,
  File as Post,
  getFilesBySlug,
  getFiles,
} from './fileParser'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export async function getPostsBySlug(slug: string): Promise<Post | null> {
  return getFilesBySlug(slug, rootDirectory)
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  return getFiles(rootDirectory, limit)
}
