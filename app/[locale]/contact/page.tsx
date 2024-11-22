import ContactForm from '@/features/contact/components/contact-form'

const t = {
  title: `Let's talk about your project`,
}
export default async function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>{t.title}</h2>
        <ContactForm />
      </div>
    </section>
  )
}
