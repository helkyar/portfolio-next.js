import { MainContainer } from '@/components/main-container'
import ProjectsWithSearch from '@/features/projects/components/projects-with-search'
import { getProjects } from '@/features/projects/lib/get-projects'
import { getTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'

export default async function ProjectsPage() {
  const { t } = await getTranslation('ProjectsPage')
  const locale = await getLocale()
  const projects = await getProjects({ locale })

  return (
    <MainContainer>
      <h1 className='title mb-12'>{t('title')}</h1>
      <ProjectsWithSearch projects={projects} />
    </MainContainer>
  )
}
