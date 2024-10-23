import { FileMetadata } from '@/data/file-constants'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects({
  metadata = [],
}: {
  metadata: FileMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:min-w-[400px] sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]'>
      {metadata.map((project) => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                <Image
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                  src={project.image}
                  alt={project.title || ''}
                  fill
                />
              </div>
            )}

            <div className='absolute inset-0 rounded-lg bg-background/70 transition-opacity duration-500' />
            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>

              {project.publishedAt && (
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(project.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
