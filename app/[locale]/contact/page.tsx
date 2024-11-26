import { MainContainer } from '@/components/main-container'
import ContactForm from '@/features/contact/components/contact-form'
import { getTranslation } from '@/lib/translations'
import { notFound } from 'next/navigation'

export default async function Contact() {
  if (!process.env.SHOW_CONTACT) notFound()

  const { t } = await getTranslation('ContactPage')
  return (
    <MainContainer>
      <h2 className='title'>{t('title')}</h2>
      <ContactForm />
    </MainContainer>
  )
}
