import { Container } from '@/features/contact/templates/container'
import { useTranslation } from '@/lib/translations'

interface ContactFormEmailProps {
  readonly name: string
  readonly email: string
  readonly message: string
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  const { t } = useTranslation('ContactPage.ContactEmail')
  return (
    <Container>
      <h1>{t('title')}</h1>
      <p>{t('subtitle', { name, email })}</p>
      <h2>{t('message')}</h2>
      <p>{message}</p>
    </Container>
  )
}
