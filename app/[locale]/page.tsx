import Intro from '@/components/intro'
import {
  RecentPostsSkeleton,
  RecentProjectsSkeleton,
} from '@/components/ui/skeletons'
import {
  DEFAULT_POSTS_PREVIEW,
  DEFAULT_PROJECTS_PREVIEW,
} from '@/data/constants'
import NewsletterForm from '@/features/contact/components/newsletter-form'
import RecentPosts from '@/features/posts/components/recent-posts'
import RecentProjects from '@/features/projects/components/recent-projects'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <section className='section py-24'>
      <div className='max-w-3x2 container mx-auto flex flex-col gap-y-20'>
        <Intro />
        <Suspense
          fallback={<RecentPostsSkeleton limit={DEFAULT_POSTS_PREVIEW} />}
        >
          <RecentPosts />
        </Suspense>
        <Suspense
          fallback={<RecentProjectsSkeleton limit={DEFAULT_PROJECTS_PREVIEW} />}
        >
          <RecentProjects />
        </Suspense>
        <NewsletterForm />
      </div>
    </section>
  )
}
