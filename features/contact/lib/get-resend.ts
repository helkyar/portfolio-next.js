import { Resend } from 'resend'

export const getResent = () => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const personalEmail = process.env.PERSONAL_EMAIL as string
  return { resend, personalEmail }
}
