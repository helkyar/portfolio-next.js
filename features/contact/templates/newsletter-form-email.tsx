import { Container } from '@/features/contact/templates/container'
import { useTranslation } from '@/lib/translations'

export default function NewsletterWelcomeEmail() {
  const { t } = useTranslation('ContactPage.NewsletterEmail')
  return (
    <Container>
      <h1>{t('title')}</h1>

      <p>{t('content')}</p>
      <p style={ghost}>{t('footer')} </p>
    </Container>
  )
}

const ghost = {
  color: '#6B7280',
  fontSize: '0.875rem',
  marginTop: '1rem',
}
