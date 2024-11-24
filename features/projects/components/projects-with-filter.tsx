import { FileMetadata } from '@/data/types'
import Projects from '@/features/projects/components/projects'

type PropTypes = {
  readonly projects: FileMetadata[]
  readonly query: string
}

export function ProjectsWithFilter({ projects, query }: PropTypes) {
  const filteredProjects = projects.filter(
    (project) =>
      project.title?.toLowerCase().includes(query.toLowerCase()) ||
      project.summary?.toLowerCase().includes(query.toLowerCase()),
  )

  return <Projects projects={filteredProjects} />
}
