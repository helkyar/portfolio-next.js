import Image from 'next/image'
import authorImage from '@/public/images/authors/javi.jpeg'
import { useTranslation } from '@/lib/translations'

export default function Intro() {
  const { t } = useTranslation('HomePage.Intro')
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>{t('title')}</h1>
        <p className='mt-3 font-light text-muted-foreground'>{t('text')}</p>
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
