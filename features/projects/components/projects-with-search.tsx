'use client'

import { FileMetadata } from '@/data/file-constants'
import { useState } from 'react'
import Projects from '@/features/projects/components/projects'
import SearchBar from '@/components/search-bar'

type PropTypes = { readonly projects: FileMetadata[] }

export default function ProjectsWithSearch({ projects }: PropTypes) {
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
