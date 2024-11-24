// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export function PostSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-accent p-4 shadow-sm`}
    >
      <div className='flex'>
        <div className='h-7 w-60 rounded-md bg-muted' />
      </div>
      <div className='mt-3 flex flex-col items-start gap-1 rounded-xl'>
        <div className='h-2 w-full rounded-md bg-muted' />
        <div className='h-2 w-full rounded-md bg-muted' />
      </div>
    </div>
  )
}
export function RecentPostsSkeleton({ limit }: { limit: number }) {
  return (
    <div className='flex flex-col gap-5'>
      <h2
        className={`${shimmer} relative h-10 w-96 overflow-hidden rounded-lg bg-muted`}
      ></h2>

      {[...Array(limit)].map((_, index) => (
        <PostSkeleton key={index} />
      ))}

      <div
        className={`${shimmer} relative h-2 w-44 overflow-hidden rounded-md bg-muted`}
      />
    </div>
  )
}

export function PostsListSkeleton({ limit }: { limit: number }) {
  return (
    <div>
      <div className='flex flex-col gap-5'>
        {[...Array(limit)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export function ProjectSkeleton() {
  return (
    <div className={`relative sm:flex-[1_1_200px]`}>
      <div className='relative h-72 w-full overflow-hidden rounded-lg bg-muted sm:h-60'>
        <div className='rounded-lg object-cover object-center' />
      </div>
      <div
        className={`${shimmer} absolute inset-0 overflow-hidden rounded-lg bg-accent`}
      />
      <div className='absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-2 rounded-lg px-6 py-5'>
        <h2 className='title line-clamp-1 h-6 w-3/4 rounded-lg bg-muted text-xl no-underline'></h2>
        <p className='line-clamp-1 h-3 w-full rounded-lg bg-muted text-sm text-muted-foreground'></p>

        <p className='h-3 w-40 rounded-lg bg-muted text-xs font-light text-muted-foreground'></p>
      </div>
    </div>
  )
}

export function RecentProjectsSkeleton({ limit }: { limit: number }) {
  return (
    <div className='flex flex-col gap-5'>
      <h2
        className={`${shimmer} relative h-10 w-96 overflow-hidden rounded-lg bg-muted`}
      ></h2>
      <div
        className={`grid grid-cols-1 gap-8 sm:flex sm:min-w-[400px] sm:flex-wrap`}
      >
        {[...Array(limit)].map((_, index) => (
          <ProjectSkeleton key={index} />
        ))}
      </div>
      <div
        className={`${shimmer} relative h-2 w-44 overflow-hidden rounded-md bg-muted`}
      />
    </div>
  )
}

export function ProjectsListSkeleton({ limit }: { limit: number }) {
  return (
    <div>
      <div className='grid grid-cols-1 gap-8 sm:flex sm:min-w-[400px] sm:flex-wrap'>
        {[...Array(limit)].map((_, index) => (
          <ProjectSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export function DetailSkeleton() {
  return (
    <div className='container mx-auto max-w-3xl'>
      <header
        className={`${shimmer} relative overflow-hidden rounded-lg bg-accent p-4`}
      >
        <h1 className='h-6 w-1/2 rounded-lg bg-muted'></h1>
        <p className='mt-3 h-2 w-1/3 rounded-lg bg-muted'></p>
        <p className='mt-12 h-3 rounded-lg bg-muted'></p>
        <p className='mt-3 h-3 rounded-lg bg-muted'></p>
      </header>
      <main className='prose dark:prose-invert mt-3'>
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className={`${shimmer} g-2 relative my-2 flex flex-col overflow-hidden rounded-lg bg-accent p-4`}
          >
            <h2 className='my-6 h-6 w-1/2 rounded-lg bg-muted'></h2>
            <p className='my-4 h-3 rounded-lg bg-muted'></p>
            <p className='my-4 h-3 rounded-lg bg-muted'></p>
            <p className='my-4 h-3 rounded-lg bg-muted'></p>
          </div>
        ))}
      </main>
    </div>
  )
}
export function DetailWithImageSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-6 h-96 w-full overflow-hidden rounded-lg bg-muted`}
      ></div>
      <DetailSkeleton />
    </>
  )
}
