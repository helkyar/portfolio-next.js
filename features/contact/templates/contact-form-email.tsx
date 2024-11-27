import { Container } from '@/features/contact/templates/container'

interface ContactFormEmailProps {
  readonly title: string
  readonly subtitle: string
  readonly message: string
  readonly messageTitle: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  title,
  message,
  messageTitle,
  subtitle,
}) => {
  return (
    <Container title={title}>
      <p>{subtitle}</p>
      <h2 style={styledMessage}>{messageTitle}</h2>
      <p style={paragraph}>{message}</p>
    </Container>
  )
}

export default ContactFormEmail

const mainTitle = {
  fontSize: '32px',
  lineHeight: '1.3',
  margin: '16px 0',
  fontWeight: '700',
  color: '#484848',
}
const styledMessage = {
  ...mainTitle,
  fontSize: '24px',
}
const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4rem',
  margin: '16px 0',
  color: '#484848',
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
} as React.CSSProperties
