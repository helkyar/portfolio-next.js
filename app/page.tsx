import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import React from 'react'

const Home = () => {
  return (
    <section className='section py-24'>
      <div className='max-w-3x2 container flex flex-col gap-y-20'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </section>
  )
}

export default Home
