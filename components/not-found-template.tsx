import Link from 'next/link'
import { FaceIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/lib/translations'

export default function NotFoundTemplate() {
  const { t } = useTranslation('NotFound')
  const { back } = useRouter()
  return (
    <main className='flex h-full flex-col items-center justify-center gap-2'>
      <FaceIcon className='w-10 text-gray-400' />
      <h1 className='text-xl font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p>
      <div className='flex gap-4'>
        <Link
          onClick={back}
          href={''}
          className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        >
          {t('back')}
        </Link>
        <Link
          href='/'
          className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        >
          {t('home')}
        </Link>
      </div>
    </main>
  )
}
