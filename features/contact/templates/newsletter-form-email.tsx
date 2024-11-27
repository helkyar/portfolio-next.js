import { Container } from '@/features/contact/templates/container'

type PropTypes = {
  readonly title: string
  readonly content: string
  readonly footer: string
}

export default function NewsletterWelcomeEmail({
  title,
  content,
  footer,
}: PropTypes) {
  return (
    <Container>
      <h1 style={mainTitle}>{title}</h1>
      <p>{content}</p>
      <p style={ghost}>{footer} </p>
    </Container>
  )
}
const mainTitle = {
  fontSize: '32px',
  lineHeight: '1.3rem',
  margin: '16px 0',
  fontWeight: '700',
  color: '#484848',
}
const ghost = {
  color: '#6B7280',
  fontSize: '0.875rem',
  marginTop: '1rem',
}
