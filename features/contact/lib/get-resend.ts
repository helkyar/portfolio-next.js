import { envConfig } from '@/lib/env-config'
import { Resend } from 'resend'

export const getResent = () => {
  const resend = new Resend(envConfig.resendApiKey)
  const personal = envConfig.personalEmail
  const business = envConfig.businessEmail
  return { resend, personal, business }
}
