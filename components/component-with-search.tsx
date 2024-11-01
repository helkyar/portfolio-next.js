'use client'

// import { FileMetadata } from '@/data/file-constants'
// import { useState } from 'react'
// import SearchBar from '@/components/search-bar'

export default function ComponentWithSearch({
  /* dataArray, */
  children,
}: {
  /* dataArray: FileMetadata[] */
  children: React.ReactNode
}) {
  // const [query, setQuery] = useState('')

  // const filteredData = dataArray.filter(
  //   (data) =>
  //     data.title?.toLowerCase().includes(query.toLowerCase()) ||
  //     data.summary?.toLowerCase().includes(query.toLowerCase()),
  // )
  // function resetFilter() {
  //   setQuery('')
  // }
  // function changeFilter(e: React.ChangeEvent<HTMLInputElement>) {
  //   setQuery(e.target.value)
  // }
  // const dataFromChildren = Children.toArray(children)
  //   .map(({ props, type }) => {
  //     const { name } = type

  //     const isRoute = name === 'Route'

  //     return isRoute ? props : null
  //   })
  //   .filter(Boolean)
  return (
    <div>
      {/* <SearchBar onChange={changeFilter} query={query} reset={resetFilter} /> */}

      {children}
    </div>
  )
}
