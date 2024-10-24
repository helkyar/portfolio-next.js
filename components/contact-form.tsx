'use client'
import { resolver, schema } from '@/lib/schema-validation'
import { ContactFormSchema } from '@/lib/schemas'
import { SubmitHandler, useForm } from '@/lib/form-hooks'
import { sendEmail } from '@/lib/actions'
import Link from 'next/link'
import {
  toast,
  BackgroundPatternIcon,
  Button,
  Textarea,
  Input,
} from '@/components/ui'

const t = {
  submitting: 'Submitting...',
  submit: 'Submit',
  privacy_text: 'By submitting this form, you agree to our ',
  privacy_link: 'privacy policy',
  email_placeholder: 'Email',
  message_placeholder: 'Message',
  name_placeholder: 'Name',
}

type Inputs = schema.infer<typeof ContactFormSchema>
export default function ContactForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    resolver: resolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data)
    if (result.error) {
      toast.error('An error occurred! Please try again.')
      return
    }
    toast.success('Message sent successfully!')
    reset
  }

  return (
    <section className='relative isolate'>
      <BackgroundPatternIcon />
      <div className='relative'>
        <form
          className='mt-16 lg:flex-auto'
          onSubmit={handleSubmit(processForm)}
          noValidate
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
              <Input
                id='name'
                type='text'
                placeholder={t.name_placeholder}
                autoComplete='given-name'
                {...register('name')}
              />
              {errors.name?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                id='email'
                type='email'
                placeholder={t.email_placeholder}
                autoComplete='email'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder={t.message_placeholder}
                {...register('message')}
              />
              {errors.message?.message && (
                <p className='ml-1 mt-2 text-rose-400'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? t.submitting : t.submit}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>
            {t.privacy_text}
            <Link href='/privacy' className='font-bold'>
              {t.privacy_link}
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
