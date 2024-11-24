import { MainContainer } from '@/components/main-container'
import { SearchBarParams } from '@/components/prams-search-bar'
import { ProjectsListSkeleton } from '@/components/ui/skeletons'
import { ProjectsWithFilter } from '@/features/projects/components/projects-with-filter'
import { getProjects } from '@/features/projects/lib/get-projects'
import { getTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

type PropTypes = {
  readonly searchParams?: Promise<{
    [key: string]: string | undefined
    page?: string
  }>
}

const searchQuery: string = 'query'
export default async function ProjectsPage(props: PropTypes) {
  const { t } = await getTranslation('ProjectsPage')
  const searchParams = await props.searchParams
  const query = searchParams?.[searchQuery] ?? ''
  return (
    <MainContainer>
      <h1 className='title mb-12'>{t('title')}</h1>
      <SearchBarParams query={searchQuery} />
      <Suspense key={query} fallback={<ProjectsListSkeleton limit={3} />}>
        <FetchPostsWithSearchParams query={query} />
      </Suspense>
    </MainContainer>
  )
}
type Query = { readonly query: string }
async function FetchPostsWithSearchParams({ query }: Query) {
  const locale = await getLocale()
  const posts = await getProjects({ locale })

  return <ProjectsWithFilter projects={posts} query={query} />
}
