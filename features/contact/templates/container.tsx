import Image from 'next/image'
import logo from '@/public/images/authors/javi.jpeg'

type PropTypes = { readonly children: React.ReactNode }
export function Container({ children }: PropTypes) {
  return (
    <div style={container}>
      <Image style={image} src={logo} alt='logo' />
      {children}
    </div>
  )
}
const container = {
  flexDirection: 'column',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
} as React.CSSProperties

const image = {
  borderRadius: '50%',
  width: '100px',
  height: '100px',
}
