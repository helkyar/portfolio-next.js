import { getResent } from '@/features/contact/lib/get-resend'
import NewsletterWelcomeEmail from '@/features/contact/templates/newsletter-form-email'
import type { NextApiRequest, NextApiResponse } from 'next'

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { resend, personalEmail } = getResent()
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    cc: personalEmail,
    subject: 'Hello world',
    react: NewsletterWelcomeEmail(),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}
export default send
