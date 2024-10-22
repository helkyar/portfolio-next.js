import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type File = {
  metadata: FileMetadata
  content: string
}

export type FileMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

const encoding = 'utf8'
export async function getFilesBySlug(
  slug: string,
  rootDirectory: string,
): Promise<File | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch {
    return null
  }
}

export async function getFiles(
  rootDirectory: string,
  limit?: number,
): Promise<FileMetadata[]> {
  const files = fs.readdirSync(rootDirectory)
  const sortedFiles = files
    .map((file) => getFileMetadata(file, rootDirectory))
    .sort(
      (a, b) =>
        new Date(b.publishedAt ?? 0).getTime() -
        new Date(a.publishedAt ?? 0).getTime(),
    )
  if (!limit) return sortedFiles
  return sortedFiles.slice(0, limit)
}

export function getFileMetadata(
  filepath: string,
  rootDirectory: string,
): FileMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
