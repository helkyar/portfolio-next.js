import path from 'path'

import {
  FileMetadata as ProjectMetadata,
  File as Project,
} from '@/data/file-constants'
import { getFiles, getFilesBySlug } from '@/lib/file-parser'

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

export async function getProjectsBySlug(slug: string): Promise<Project | null> {
  return getFilesBySlug(slug, rootDirectory)
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  return getFiles(rootDirectory, limit)
}
