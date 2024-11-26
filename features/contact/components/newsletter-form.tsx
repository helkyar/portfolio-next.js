'use client'

import { resolver, schema } from '@/lib/schema-validation'
import { NewsletterFormSchema } from '@/features/contact/lib/schemas'
import { useForm, SubmitHandler } from '@/lib/form-hooks'
import { subscribe } from '@/features/contact/lib/actions'
import { toast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@/i18n/routing'
import { useTranslation } from '@/lib/translations'

type Inputs = schema.infer<typeof NewsletterFormSchema>
export default function NewsletterForm() {
  if (!process.env.NEXT_PUBLIC_SHOW_NEWSLETTER) return null

  const { t } = useTranslation('Components.Newsletter')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: resolver(NewsletterFormSchema),
    defaultValues: { email: '' },
  })

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await subscribe(data).catch((error) => ({
      error,
    }))

    if (result?.error) {
      toast.error(t('error'))
      return
    }
    toast.success(t('success'))
    reset()
  }

  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2x1 font-bold'>{t('title')}</h2>
            <p className='text-muted-foreground'>{t('description')}</p>
          </div>
          <form
            onSubmit={handleSubmit(processForm)}
            className='flex flex-col items-start gap-3'
          >
            <div className='flex w-full flex-col items-start gap-3 sm:flex-row'>
              <div className='flex w-full flex-col'>
                <Input
                  type='email'
                  id='email'
                  autoComplete='email'
                  placeholder={t('email_placeholder')}
                  className='w-full'
                  {...register('email')}
                />
                {errors.email?.message && (
                  <p className='ml-1 mt-2 text-sm text-rose-400'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50 sm:w-fit'
              >
                {isSubmitting ? t('is_submitting') : t('submit')}
              </Button>
            </div>
            <div>
              <p className='text-xs text-muted-foreground'>
                {t('privacy_text')}
                <Link href='/privacy' className='font-bold'>
                  {t('privacy_link')}
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
