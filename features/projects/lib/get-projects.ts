import path from 'path'

import { FileMetadata as ProjectMetadata, File as Project } from '@/data/types'
import { getFiles, getFilesBySlug } from '@/lib/file-parser'
import { LOCALE } from '@/data/constants'

async function getRootDirectory(locale: string = LOCALE.default) {
  return path.join(process.cwd(), 'features/projects/content', locale)
}

export function getProjectsBySlug(locale: string) {
  return async (slug: string): Promise<Project | null> => {
    const rootDirectory = await getRootDirectory(locale)
    return getFilesBySlug(slug, rootDirectory)
  }
}

type Params = {
  readonly locale?: string
  readonly limit?: number
}

export async function getProjects(
  data: Params = {},
): Promise<ProjectMetadata[]> {
  const { locale, limit } = data
  const rootDirectory = await getRootDirectory(locale)
  return getFiles(rootDirectory, limit)
}
