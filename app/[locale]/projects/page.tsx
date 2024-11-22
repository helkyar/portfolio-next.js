import ProjectsWithSearch from '@/features/projects/components/projects-with-search'
import { getProjects } from '@/features/projects/lib/get-projects'

const t = {
  title: 'Projects',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>{t.title}</h1>
        <ProjectsWithSearch projects={projects} />
      </div>
    </section>
  )
}
