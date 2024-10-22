'use client'
import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import React from 'react'

const Home = () => {
  return (
    <section className='section py-24'>
      <div className='max-w-3x2 container'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        {/* Newsletter Form */}
      </div>
    </section>
  )
}

export default Home
