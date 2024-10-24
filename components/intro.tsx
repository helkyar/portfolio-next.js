import Image from 'next/image'
import authorImage from '@/public/images/authors/javi.jpeg'

const t = {
  title: `Hey, I'm Javi`,
  text: `I have been dedicating myself to web programming for several years, most of the time remotely. My career is focused on frontend, especially development with components. I work with good practices and am proficient with the most common frameworks and solutions in the industry.

I have worked on various projects from basic forms to management systems with multiple tabs and pop-ups. Including developing from scratch and migrating legacy.`,
}

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>{t.title}</h1>
        <p className='mt-3 font-light text-muted-foreground'>{t.text}</p>
      </div>
      <div>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Javier Palacios'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
