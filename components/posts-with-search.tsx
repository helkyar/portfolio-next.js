'use client'

import { FileMetadata } from '@/data/file-constants'
import { useState } from 'react'
import Posts from '@/components/posts'
import SearchBar from '@/components/search-bar'

export default function PostsWithSearch({ posts }: { posts: FileMetadata[] }) {
  const [query, setQuery] = useState('')
  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.summary?.toLowerCase().includes(query.toLowerCase()),
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
      <Posts metadata={filteredPosts} />
    </div>
  )
}
