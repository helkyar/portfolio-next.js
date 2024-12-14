const {
  SHOW_CONTACT: showContact = false,
  NEXT_PUBLIC_SHOW_NEWSLETTER: showNewsletter = false,
  BUSINESS_EMAIL: businessEmail = '',
  PERSONAL_EMAIL: personalEmail = '',
  RESEND_AUDIENCE_ID: resendAudienceId = '',
  RESEND_API_KEY: resendApiKey = '',
} = process.env

export const envConfig = {
  showContact,
  showPrivacy: showContact || showNewsletter,
  showNewsletter,
  businessEmail,
  personalEmail,
  resendAudienceId,
  resendApiKey,
}
