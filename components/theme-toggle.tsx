'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Theme } from '@/data/themeConstants'

const t = { tooltip: 'Toggle theme' }

// component
const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === Theme.Dark ? Theme.Light : Theme.Dark)
      }}
    >
      {resolvedTheme === Theme.Dark ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' />
      )}
      <span className='sr-only'>{t.tooltip}</span>
    </Button>
  )
}

export default ThemeToggle
