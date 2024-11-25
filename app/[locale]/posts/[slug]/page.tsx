import DetailPage from '@/components/detail-page'
import { getFileContent } from '@/lib/file-parser'
import { getPosts, postDirectory } from '@/features/posts/lib/get-posts'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { DetailWithImageSkeleton } from '@/components/ui/skeletons'
import { LOCALE } from '@/data/constants'
import { DetailContent } from '@/components/detail-content'

export async function generateStaticParams() {
  const posts = await getPosts()
  const paths = posts.flatMap((post) =>
    Object.keys(LOCALE).map((locale) => ({
      params: { slug: post.slug, locale },
    })),
  )

  return paths
}

type PropTypes = {
  readonly params: Promise<{ slug: string }>
}

export default async function PostDetailPage({ params }: PropTypes) {
  const { slug } = await params
  return (
    <DetailPage path='/posts'>
      <Suspense fallback={<DetailWithImageSkeleton />}>
        <FetchPostsDetail slug={slug} />
      </Suspense>
    </DetailPage>
  )
}
type ParamTypes = { readonly slug: string }
async function FetchPostsDetail({ slug }: ParamTypes) {
  const locale = await getLocale()
  const content = await getFileContent(slug, postDirectory, locale)

  return <DetailContent {...content} />
}
