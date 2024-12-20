import { FileMetadata } from '@/data/types'
import { Link } from '@/i18n/routing'
import { formatDate } from '@/lib/utils'
import { useLocale } from 'next-intl'
import Image from 'next/image'

type PropTypes = {
  readonly projects: FileMetadata[]
}

export default function Projects({ projects }: PropTypes) {
  const locale = useLocale()
  return (
    <ul className='grid grid-cols-1 gap-8 sm:flex sm:min-w-[400px] sm:flex-wrap'>
      {projects.map((project) => (
        <li key={project.slug} className='group relative sm:flex-[1_1_200px]'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='relative h-72 w-full overflow-hidden rounded-lg bg-muted sm:h-60'>
                <Image
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-125'
                  src={project.image}
                  alt={project.title ?? 'project image'}
                  fill
                  sizes='auto, auto'
                  placeholder='blur'
                  blurDataURL={project.image}
                />
              </div>
            )}

            <div className='absolute inset-0 rounded-lg bg-background/70 transition-all duration-500 group-hover:opacity-0' />
            <div className='absolute inset-x-0 bottom-0 translate-y-2 rounded-lg px-6 py-5 transition-all duration-500 group-hover:translate-y-0 group-hover:bg-background/70 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>

              {project.publishedAt && (
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(project.publishedAt, locale)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
