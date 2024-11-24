interface ContactFormEmailProps {
  email: string
}

const NewsletterWelcomeEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  email,
}) => (
  <div>
    <h1>Thank you for subscribing!</h1>
    <p>
      From <strong>{email}</strong>
    </p>
    <h2>Message:</h2>
  </div>
)

export default NewsletterWelcomeEmail
