import { getProjects } from '@/features/projects/lib/get-projects'
import Projects from '@/features/projects/components/projects'
import { Link } from '@/i18n/routing'
import { DEFAULT_PROJECTS_PREVIEW } from '@/data/constants'
import { getTranslation } from '@/lib/translations'
import { getLocale } from 'next-intl/server'

export default async function RecentProjects() {
  const { t } = await getTranslation('HomePage.Projects')
  const locale = await getLocale()
  const projects = await getProjects({
    locale,
    limit: DEFAULT_PROJECTS_PREVIEW,
  })
  return (
    <section>
      <h2 className='title mb-4'>{t('title')}</h2>
      <Projects projects={projects} />
      <Link
        href={'/projects'}
        className='mt-4 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
      >
        <span>{t('link')}</span>
      </Link>
    </section>
  )
}
