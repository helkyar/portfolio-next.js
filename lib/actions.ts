'use server'
import { Resend } from 'resend'
import { NewsletterFormSchema } from './schemas'
import { schema } from '@/hooks/schema-validation'

type NewsletterFormInputs = schema.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

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
    return { success: true }
  } catch (error) {
    return { error }
  }
}
