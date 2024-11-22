type PropTypes = { readonly children: React.ReactNode }

export function MainContainer({ children }: PropTypes) {
  return (
    <section className='pb-24 pt-40'>
      <div className='container mx-auto max-w-3xl'>{children}</div>
    </section>
  )
}
