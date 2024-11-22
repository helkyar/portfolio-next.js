import { getProjects } from '@/features/projects/lib/get-projects'
import Projects from '@/features/projects/components/projects'
import { DEFAULT_PROJECTS_PREVIEW } from '@/data/file-constants'
import { Link } from '@/i18n/routing'

const t = {
  title: 'Recent Projects',
  link: 'View all projects',
}
export default async function RecentProjects() {
  const projects = await getProjects(DEFAULT_PROJECTS_PREVIEW)
  return (
    <section>
      <h2 className='title mb-4'>{t.title}</h2>
      <Projects projects={projects} />
      <Link
        href={'/projects'}
        className='hover:text-foregroundS mt-4 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
      >
        <span>{t.link}</span>
      </Link>
    </section>
  )
}
