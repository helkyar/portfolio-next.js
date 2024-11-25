import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { File, FileContent, FileMetadata } from '@/data/types'
import { LOCALE_DEFAULT } from '@/data/constants'

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

async function getRootDirectory(directory: string, locale = LOCALE_DEFAULT) {
  return path.join(process.cwd(), directory, locale)
}

export async function getFileContent(
  slug: string,
  directory: string,
  locale: string,
): Promise<FileContent> {
  const rootDirectory = await getRootDirectory(directory, locale)
  const project = await getFilesBySlug(slug, rootDirectory)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt, no_ratio } = metadata

  return {
    content,
    title,
    image,
    author,
    publishedAt,
    noRatio: no_ratio,
  }
}
