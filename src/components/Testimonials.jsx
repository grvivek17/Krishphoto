const testimonials = [
  {
    text: "Krish Photography didn't just capture our wedding — they told our love story. From our Mehendi to the Vidaai, every emotion was preserved in the most beautiful way. We cry happy tears every time we watch our film.",
    couple: 'Priya & Arjun Mehta',
    wedding: 'Udaipur Palace Wedding, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: "The team at Krish Photography has an extraordinary gift for being invisible — yet somehow capturing every candid moment that makes our memories feel alive. Our album is an heirloom we will pass down for generations.",
    couple: 'Ananya & Vikram Nair',
    wedding: 'Heritage Fort Wedding, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: "We were nervous about trusting someone with such intimate moments, but Krish and his team made us feel so at ease. The photos are breathtaking — they captured our souls, not just our faces.",
    couple: 'Riya & Dhruv Kapoor',
    wedding: 'Beachside Wedding, Goa',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <p className="section-label">Kind Words</p>
          <h2>Couples Who Trusted Us</h2>
          <div className="gold-divider centered" />
          <p style={{ maxWidth: '480px', margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
            The highest honour is when a couple trusts us with the most sacred chapter of their lives.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.couple} className="testimonial-card">
              <div className="testimonial-quote-mark">"</div>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <img src={t.avatar} alt={t.couple} className="testimonial-avatar" loading="lazy" />
                <div>
                  <span className="testimonial-couple">{t.couple}</span>
                  <span className="testimonial-wedding">{t.wedding}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
