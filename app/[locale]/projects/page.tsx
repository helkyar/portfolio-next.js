import { MainContainer } from '@/components/main-container'
import {
  ProjectsListSkeleton,
  RecentProjectsSkeleton,
} from '@/components/ui/skeletons'
import ProjectsWithSearch from '@/features/projects/components/projects-with-search'
import { getProjects } from '@/features/projects/lib/get-projects'
import { useTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects
}

export default function ProjectsPage() {
  const { t } = useTranslation('ProjectsPage')

  return (
    <MainContainer>
      <h1 className='title mb-12'>{t('title')}</h1>
      <Suspense fallback={<ProjectsListSkeleton limit={3} />}>
        <FetchProjectsWithSearch />
      </Suspense>
    </MainContainer>
  )
}

async function FetchProjectsWithSearch() {
  const locale = await getLocale()
  const projects = await getProjects({ locale })

  return <ProjectsWithSearch projects={projects} />
}
