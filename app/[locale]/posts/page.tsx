import { MainContainer } from '@/components/main-container'
import { SearchBarParams } from '@/components/prams-search-bar'
import { PostsListSkeleton } from '@/components/ui/skeletons'
import { PostsWithFilter } from '@/features/posts/components/posts-with-filter'
import { getPosts } from '@/features/posts/lib/get-posts'
import { getTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts
}

type PropTypes = {
  searchParams?: Promise<{
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
async function FetchPostsWithSearchParams({ query }: { query: string }) {
  const locale = await getLocale()
  const posts = await getPosts({ locale })

  return <PostsWithFilter posts={posts} query={query} />
}
