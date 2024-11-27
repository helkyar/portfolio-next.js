import { MainContainer } from '@/components/main-container'
import { SearchBarParams } from '@/components/prams-search-bar'
import { PostsListSkeleton } from '@/components/ui/skeletons'
import Posts from '@/features/posts/components/posts'
import { getPosts } from '@/features/posts/lib/get-posts'
import { getTranslation } from '@/lib/translations'
import { filteredMetadata } from '@/lib/utils'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

type PropTypes = {
  readonly searchParams?: Promise<{
    [key: string]: string | undefined
    page?: string
  }>
}

const searchQuery: string = 'query'
export default async function PostsPageSearch(props: PropTypes) {
  const { t } = await getTranslation('PostsPage')
  const searchParams = await props.searchParams
  const query = searchParams?.[searchQuery] ?? ''
  return (
    <MainContainer>
      <h1 className='title mb-12'>{t('title')}</h1>
      <SearchBarParams query={searchQuery} />
      <Suspense key={query} fallback={<PostsListSkeleton limit={3} />}>
        <FetchPostsWithSearchParams query={query} />
      </Suspense>
    </MainContainer>
  )
}

type Query = { readonly query: string }
async function FetchPostsWithSearchParams({ query }: Query) {
  const locale = await getLocale()
  const posts = await getPosts({ locale })
  const filteredPosts = filteredMetadata(posts, query)

  return <Posts posts={filteredPosts} />
}
