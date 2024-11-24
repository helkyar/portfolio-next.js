import path from 'path'

import { FileMetadata as ProjectMetadata } from '@/data/types'
import { getFiles } from '@/lib/file-parser'
import { LOCALE_DEFAULT } from '@/data/constants'

export const projectDirectory = 'features/projects/content'

async function getRootDirectory(locale: string = LOCALE_DEFAULT) {
  return path.join(process.cwd(), projectDirectory, locale)
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
