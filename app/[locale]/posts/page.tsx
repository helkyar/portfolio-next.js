import { MainContainer } from '@/components/main-container'
import { PostsListSkeleton } from '@/components/ui/skeletons'
import PostsWithSearch from '@/features/posts/components/posts-with-search'
import { getPosts } from '@/features/posts/lib/get-posts'
import { useTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts
}

export default function PostsPage() {
  const { t } = useTranslation('PostsPage')

  return (
    <MainContainer>
      <h1 className='title mb-12'>{t('title')}</h1>
      <Suspense fallback={<PostsListSkeleton limit={3} />}>
        <FetchPostsWithSearch />
      </Suspense>
    </MainContainer>
  )
}

async function FetchPostsWithSearch() {
  const locale = await getLocale()
  const posts = await getPosts({ locale })

  return <PostsWithSearch posts={posts} />
}
