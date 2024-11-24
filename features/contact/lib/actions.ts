'use server'
import {
  ContactFormSchema,
  NewsletterFormSchema,
} from '@/features/contact/lib/schemas'
import { schema } from '@/lib/schema-validation'
import ContactFormEmail from '@/features/contact/templates/contact-form-email'
import NewsletterWelcomeEmail from '@/features/contact/templates/newsletter-form-email'
import { getTranslation } from '@/lib/translations'
import { getResent } from '@/features/contact/lib/get-resend'

type ContactFormInputs = schema.infer<typeof ContactFormSchema>
type NewsletterFormInputs = schema.infer<typeof NewsletterFormSchema>

export async function sendEmail(data: ContactFormInputs) {
  const { t } = await getTranslation('ContactPage.ContactEmail')
  const result = ContactFormSchema.safeParse(data)
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { resend, personalEmail } = getResent()
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: personalEmail,
      to: [email],
      cc: [personalEmail],
      subject: t('subject'),
      text: t('text', { name, email, message }),
      react: ContactFormEmail({ name, email, message }),
    })
    if (!data || error) throw new Error('Failed to send email')
    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const { t } = await getTranslation('ContactPage.NewsletterEmail')
  const result = NewsletterFormSchema.safeParse(data)
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { resend, personalEmail } = getResent()
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })
    const { data: sendData, error: sendError } = await resend.emails.send({
      from: personalEmail,
      to: [email],
      cc: [personalEmail],
      subject: t('subject'),
      text: t('text'),
      react: NewsletterWelcomeEmail(),
    })
    const hasFailed = !sendData || sendError || !data || error
    if (hasFailed) throw new Error('Failed to subscribe')

    return { success: true }
  } catch (error) {
    return { error }
  }
}
