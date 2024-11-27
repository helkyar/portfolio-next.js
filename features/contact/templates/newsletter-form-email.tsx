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
    <Container title={title}>
      <p>{content}</p>
      <p style={ghost}>{footer} </p>
    </Container>
  )
}

const ghost = {
  color: '#6B7280',
  fontSize: '0.875rem',
  marginTop: '1rem',
}
