'use client'
import PropTypes from 'prop-types'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/toast'
import { Theme } from '@/data/theme-constants'
// component
const propTypes = { children: PropTypes.node }
type PropTypes = { readonly children: React.ReactNode }

const Providers = ({ children }: PropTypes) => {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
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
      theme={resolvedTheme === Theme.dark ? Theme.dark : Theme.light}
    />
  )
}

Providers.propTypes = propTypes

export default Providers
