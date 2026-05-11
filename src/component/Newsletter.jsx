import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">🤖</div>
          <h2 className="newsletter-title">Stay Updated with Doraemon</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter and get the latest news, fun facts, and updates about Doraemon and his adventures!
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </div>
          </form>

          {submitted && (
            <div className="success-message">
              ✓ Thanks for subscribing! Check your email for confirmation.
            </div>
          )}

          <p className="newsletter-note">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        <div className="newsletter-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter