import LanguageToggle from '@/features/layout/components/language-toggle'
import ThemeToggle from '@/features/layout/components/theme-toggle'
import { Locale } from '@/data/constants'
import { Link } from '@/i18n/routing'
import { getTranslation } from '@/lib/translations'

type PropTypes = {
  readonly locale: Locale
}

export default async function Header({ locale }: PropTypes) {
  const { t } = await getTranslation('LayoutPage.Header')
  const hasContact = process.env.SHOW_CONTACT
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='max-w-3x1 container mx-auto flex w-full items-center justify-around'>
        <div>
          <Link href='/' className='text-2x1 font-serif font-bold'>
            JP
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-medium text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>{t('posts')}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>{t('projects')}</Link>
          </li>
          {hasContact && (
            <li className='transition-colors hover:text-foreground'>
              <Link href='/contact'>{t('contact')}</Link>
            </li>
          )}
        </ul>
        <div className='relative'>
          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
