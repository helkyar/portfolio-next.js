import { getProjects } from '@/lib/projects'
import Projects from './projects'
import Link from 'next/link'

const t = {
  title: 'Recent Projects',
  link: 'View all projects',
}
export default async function RecentProjects() {
  const projects = await getProjects(4)
  return (
    <section className='pb-24'>
      <h2 className='title mb-12'>{t.title}</h2>
      <Projects projects={projects} />
      <Link
        href={'/projects'}
        className='hover:text-foregroundS mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors'
      >
        <span>{t.link}</span>
      </Link>
    </section>
  )
}
