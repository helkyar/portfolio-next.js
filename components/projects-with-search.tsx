'use client'

import { FileMetadata } from '@/data/file-constants'
import { useState } from 'react'
import Projects from '@/components/projects'
import SearchBar from '@/components/search-bar'

export default function ProjectsWithSearch({
  projects,
}: {
  projects: FileMetadata[]
}) {
  const [query, setQuery] = useState('')
  const filteredProjects = projects.filter(
    (project) =>
      project.title?.toLowerCase().includes(query.toLowerCase()) ||
      project.summary?.toLowerCase().includes(query.toLowerCase()),
  )
  function resetFilter() {
    setQuery('')
  }
  function changeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <SearchBar onChange={changeFilter} query={query} reset={resetFilter} />
      <Projects projects={filteredProjects} />
    </div>
  )
}
