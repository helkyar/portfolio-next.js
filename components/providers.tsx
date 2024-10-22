'use client'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
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
    </ThemeProvider>
  )
}

Providers.propTypes = propTypes

export default Providers
