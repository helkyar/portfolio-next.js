'use client'

import { FileMetadata } from '@/data/types'
import { useState } from 'react'
import Posts from '@/features/posts/components/posts'
import SearchBar from '@/components/search-bar'

type PropTypes = { readonly posts: FileMetadata[] }

export function PostsWithSearch({ posts }: PropTypes) {
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
      <Posts posts={filteredPosts} />
    </div>
  )
}
