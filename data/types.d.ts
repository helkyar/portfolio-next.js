export type File = {
  readonly metadata: FileMetadata
  readonly content: string
}

export type FileMetadata = {
  readonly title?: string
  readonly summary?: string
  readonly image?: string
  readonly author?: string
  readonly publishedAt?: string
  readonly slug: string
}

export type FileContent = {
  readonly content: string
  readonly title: string | undefined
  readonly image: string | undefined
  readonly publishedAt: string | undefined
  readonly author: string | undefined
}
