'use client'
import PropTypes from 'prop-types'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from './ui/toast'
import { Theme } from '@/data/themeConstants'

// component
const propTypes = { children: PropTypes.node }

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === Theme.Dark ? Theme.Dark : Theme.Light}
    />
  )
}

Providers.propTypes = propTypes

export default Providers
