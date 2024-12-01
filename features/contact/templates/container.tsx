/* eslint-disable @next/next/no-img-element */
type PropTypes = { readonly children: React.ReactNode; readonly title: string }

const baseUrl = process.env.VERCEL_URL
  ? process.env.VERCEL_URL
  : 'http://localhost:3000/'

const imgUrl =
  '_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavi.e733a3de.jpeg&w=256&q=75'

export function Container({ children, title }: PropTypes) {
  return (
    <div>
      <img
        style={image}
        alt='logo'
        src={`${baseUrl}${imgUrl}`}
        height={96}
        width={96}
      />
      <h1 style={mainTitle}>{title}</h1>
      {children}
    </div>
  )
}

const image = {
  borderRadius: '50%',
  margin: '0 auto',
  display: 'block',
}

const mainTitle = {
  fontSize: '32px',
  lineHeight: '1.2',
  margin: '16px 0',
  fontWeight: '700',
  color: '#484848',
}
