type PropTypes = { readonly children: React.ReactNode; readonly title: string }
export function Container({ children, title }: PropTypes) {
  return (
    <div>
      <h1 style={mainTitle}>{title}</h1>
      {children}
    </div>
  )
}

const mainTitle = {
  fontSize: '32px',
  lineHeight: '1.2',
  margin: '16px 0',
  fontWeight: '700',
  color: '#484848',
}
