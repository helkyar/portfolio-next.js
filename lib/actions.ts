'use server'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import { schema } from '@/lib/schema-validation'
import ContactFormEmail from '@/email-template/contact-form-email'

type ContactFormInputs = schema.infer<typeof ContactFormSchema>
type NewsletterFormInputs = schema.infer<typeof NewsletterFormSchema>

const resend = new Resend(/* process.env.RESEND_API_KEY */ 're_123')
const personalEmail = 'personal-email@gmail.com'

const t = {
  subject: 'Contact form submission',
  text: (name: string, email: string, message: string) =>
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
}

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: personalEmail,
      to: [email],
      cc: [personalEmail],
      subject: t.subject,
      text: t.text(name, email, message),
      react: ContactFormEmail({ name, email, message }),
    })
    if (!data || error) throw new Error('Failed to send email')
    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })

    if (!data || error) throw new Error('Failed to subscribe')

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}
