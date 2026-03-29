import { useState } from 'react';

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', weddingDate: '', venue: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left column */}
          <div className="contact-left">
            <p className="section-label">Get In Touch</p>
            <h2>Tell Us Your Story</h2>
            <div className="gold-divider" />
            <p>
              Every great photograph begins with a conversation. Share your vision with us,
              and let's create something that moves you every time you look at it.
            </p>
            <p>
              We typically respond within 24 hours. For faster response, please call or
              WhatsApp us directly.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-icon">📍</span>
                <span>Vadapalani & Thirumullaivoyal, Chennai · Pan-India & Destination</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">📞</span>
                <a href="tel:+919841546355" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>+91 9841546355</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">💬</span>
                <a
                  href="https://wa.me/919841546355?text=Hi%20Krish%20Photography!%20I%20would%20like%20to%20inquire%20about%20your%20wedding%20photography%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">✉️</span>
                <span>hello@krishphotography.in</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">📸</span>
                <span>@krishphotography on Instagram</span>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'linear-gradient(135deg, #fdf5f5, #fbf9f5)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-gold)' }}>
              <p className="section-label" style={{ marginBottom: 'var(--space-2)' }}>2025 Bookings</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', color: 'var(--color-text)', fontStyle: 'italic' }}>
                "Limited dates available for the wedding season. We accept only select weddings each year to give every couple our full artistry and attention."
              </p>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-12) 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>🌸</div>
                <h3 style={{ color: 'var(--color-maroon)', marginBottom: 'var(--space-4)' }}>Thank You!</h3>
                <p>We've received your inquiry and will be in touch within 24 hours. We can't wait to hear your love story.</p>
              </div>
            ) : (
              <>
                <h3>Book a Consultation</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name</label>
                      <input id="name" name="name" type="text" className="form-input" placeholder="Priya & Arjun" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">WhatsApp / Phone</label>
                      <input id="phone" name="phone" type="tel" className="form-input" placeholder="+91 9841546355" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="yourname@email.com" value={form.email} onChange={handleChange} required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="weddingDate">Wedding Date</label>
                      <input id="weddingDate" name="weddingDate" type="date" className="form-input" value={form.weddingDate} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="budget">Budget Range</label>
                      <select id="budget" name="budget" className="form-select" value={form.budget} onChange={handleChange}>
                        <option value="">Select range</option>
                        <option>₹50,000 – ₹1,00,000</option>
                        <option>₹1,00,000 – ₹3,00,000</option>
                        <option>₹3,00,000 – ₹5,00,000</option>
                        <option>₹5,00,000+</option>
                        <option>Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="venue">Venue / Location</label>
                    <input id="venue" name="venue" type="text" className="form-input" placeholder="e.g. Udaipur, Rajasthan" value={form.venue} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Tell Us About Your Wedding</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Share the vision, mood, or any special ceremonies you'd like us to capture..." value={form.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    Send My Inquiry ✦
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
