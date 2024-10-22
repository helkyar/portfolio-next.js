import React from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

// constants
const posts = 'Posts'
const projects = 'Projects'
const contact = 'Contact'

// component
const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='max-w-3x1 container flex w-full items-center justify-around'>
        <div>
          <Link href='/' className='font-seriz text-2x1 font-bold'>
            JP
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>{posts}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>{projects}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>{contact}</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
