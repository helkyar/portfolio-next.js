import { MainContainer } from '@/components/main-container'
import PostsWithSearch from '@/features/posts/components/posts-with-search'
import { getPosts } from '@/features/posts/lib/get-posts'
import { getTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'

export default async function PostsPage() {
  const { t } = await getTranslation('PostsPage')
  const locale = await getLocale()
  const posts = await getPosts({ locale })

  return (
    <MainContainer>
      <h1 className='title mb-12'>{t('title')}</h1>
      <PostsWithSearch posts={posts} />
    </MainContainer>
  )
}
