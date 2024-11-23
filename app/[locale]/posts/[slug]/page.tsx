import DetailPage, { DetailContent } from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPosts, getPostsBySlug } from '@/features/posts/lib/get-posts'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import {
  DetailWithImageSkeleton,
  RecentPostsSkeleton,
} from '@/components/ui/skeletons'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((post) => ({ slug: post.slug }))
  return slugs
}

type PropTypes = {
  readonly params: { slug: string }
}

export default function PostDetailPage({ params }: PropTypes) {
  return (
    <DetailPage path='/posts'>
      <Suspense fallback={<DetailWithImageSkeleton />}>
        <FetchPostsDetail params={params} />
      </Suspense>
    </DetailPage>
  )
}

async function FetchPostsDetail({ params }: PropTypes) {
  const locale = await getLocale()
  const content = await getFileContent(params, getPostsBySlug(locale))

  return <DetailContent {...content} />
}
