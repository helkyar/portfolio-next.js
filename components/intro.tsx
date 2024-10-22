import Image from 'next/image'
import authorImage from '@/public/images/authors/hamed.png'

const t = {
  title: `Hey, I'm Hamed Baatour`,
  text: `I'm a software engineer based in Toronto, Canada. I'm
          passionate about learning new technologies and sharing knowledge with
          others.`,
}

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 p-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>{t.title}</h1>
        <p className='mt-3 font-light text-muted-foreground'>{t.text}</p>
      </div>
      <div>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Baatour'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
