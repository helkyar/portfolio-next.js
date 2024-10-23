'use client'

import { FileMetadata } from '@/data/file-constants'
import { useState } from 'react'
import SearchBar from '@/components/search-bar'

export default function ComponentWithSearch({
  dataArray,
  Component,
}: {
  dataArray: FileMetadata[]
  Component: React.FC<{ data: FileMetadata[] }>
}) {
  const [query, setQuery] = useState('')
  const filteredData = dataArray.filter(
    (data) =>
      data.title?.toLowerCase().includes(query.toLowerCase()) ||
      data.summary?.toLowerCase().includes(query.toLowerCase()),
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
      <Component data={filteredData} />
    </div>
  )
}
