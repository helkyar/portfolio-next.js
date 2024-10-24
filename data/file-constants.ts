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

export type FileContent = {
  content: string
  title: string | undefined
  image: string | undefined
  publishedAt: string | undefined
  author: string | undefined
}

export const DEFAULT_POSTS_PREVIEW = 2
export const DEFAULT_PROJECTS_PREVIEW = 2
