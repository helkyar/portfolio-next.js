import { MainContainer } from '@/components/main-container'
import ContactForm from '@/features/contact/components/contact-form'
import { getTranslation } from '@/lib/translations'

export default async function Contact() {
  const { t } = await getTranslation('ContactPage')
  return (
    <MainContainer>
      <h2 className='title'>{t('title')}</h2>
      <ContactForm />
    </MainContainer>
  )
}
