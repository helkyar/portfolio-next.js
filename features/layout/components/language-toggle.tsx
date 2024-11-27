'use client'
import { Button } from '@/components/ui'
import { LOCALE, Locale } from '@/data/constants'
import { useOnClickOutside } from '@/lib/on-click-outside'
import { useTranslation } from '@/lib/translations'
import { cn } from '@/lib/utils'
import { GlobeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'

type PropTypes = { readonly locale: Locale }

export default function LanguageToggle({ locale }: PropTypes) {
  const { t } = useTranslation('Components.LanguageToggle')
  const [openSelect, setOpenSelect] = useState(false)

  return (
    <>
      <Button
        size='sm'
        variant='ghost'
        onClick={() => setOpenSelect((o) => !o)}
      >
        <GlobeIcon className='size-4 text-foreground' />
        <span className='sr-only'>{t('tooltip')}</span>
      </Button>
      {openSelect && (
        <LanguageLinks locale={locale} onClose={() => setOpenSelect(false)} />
      )}
    </>
  )
}

type LinksPropTypes = { readonly locale: Locale; readonly onClose: () => void }

function LanguageLinks({ locale, onClose }: LinksPropTypes) {
  const ref = useRef(null)
  useOnClickOutside(ref, onClose)

  return (
    <div
      ref={ref}
      id='language-selector'
      className='shadow-box absolute right-1/2 z-10 flex w-36 flex-col rounded-lg border-[1px] bg-background'
    >
      {Object.keys(LOCALE).map((lng) => (
        <LanguageLink key={lng} locale={locale} language={lng as Locale} />
      ))}
    </div>
  )
}

type LinkPropTypes = {
  readonly locale: Locale
  readonly language: Locale
}

function LanguageLink({ locale, language }: LinkPropTypes) {
  const path = usePathname()
  const link = path.replace(`/${locale}`, `/${language}`)
  const isSelected = locale === language
  return (
    <Link
      href={!isSelected ? link : ''}
      className={cn(
        'w-full px-4 py-1 text-center capitalize first:rounded-t-lg last:rounded-b-lg hover:bg-muted',
        {
          ['bg-accent']: isSelected,
        },
      )}
    >
      {LOCALE[language]}
    </Link>
  )
}
