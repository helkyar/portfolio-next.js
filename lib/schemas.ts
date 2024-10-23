import { schema } from '@/hooks/schema-validation'

export const ContactFormSchema = schema.object({
  name: schema
    .string()
    .min(1, { message: 'Name is required' })
    .min(2, { message: 'Must be at least 2 characters' }),
  email: schema
    .string()
    .min(1, { message: 'Email is required' })
    .email('Invalid email'),
  message: schema.string().min(1, { message: 'Message is required' }),
})

export const NewsletterFormSchema = schema.object({
  email: schema
    .string()
    .min(1, { message: 'Email is required' })
    .email('Invalid email'),
})
