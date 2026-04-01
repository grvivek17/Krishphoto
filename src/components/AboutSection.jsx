export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Image Column */}
          <div className="about-image-wrapper">
            <div className="about-years-badge">
              <span className="num">12+</span>
              <span className="text">Years of Stories</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Indian wedding couple in traditional attire"
              className="about-image-main"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=500&q=80"
              alt="Wedding detail — hands adorned with mehndi"
              className="about-image-accent"
              loading="lazy"
            />
          </div>

          {/* Content Column */}
          <div className="about-content">
            <p className="section-label">About Krish Photography</p>
            <h2>The Art of the Moment</h2>
            <div className="gold-divider" />
            <p>
              At Krish Photography, we believe a wedding is not a single event — it is a constellation
              of stories. The nervous laugh before the vows. The grandmother's tears during the vidaai.
              The first glance across the mandap. These are the moments that become heirlooms.
            </p>
            <p>
              Founded in Chennai and working across Tamil Nadu, Rajasthan, Delhi, Goa, and destination weddings
              worldwide, our team combines cinematic technique with deep cultural understanding to
              document every ritual with authenticity, grace, and artistry. Find us at our studios in
              Vadapalani and Thirumullaivoyal, Chennai.
            </p>

            {/* Founder Profile */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
              marginTop: 'var(--space-8)',
              padding: 'var(--space-6)',
              background: 'linear-gradient(135deg, #fdf5f5, #fbf9f5)',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '3px solid var(--color-gold)',
            }}>
              <img
                src="/krishnamoorthy.png"
                alt="Krishnamoorthy — Founder, Krish Photography"
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  border: '3px solid var(--color-gold-light)',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(128,0,0,0.15)',
                }}
              />
              <div>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-muted)',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}>Founder & Lead Photographer</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-maroon-deep)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}>Krishnamoorthy</span>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  With over <strong style={{ color: 'var(--color-maroon)' }}>20 years of experience</strong> behind the lens,
                  Krishnamoorthy has built a reputation for capturing raw emotion, cultural depth, and timeless beauty
                  across hundreds of weddings and milestone celebrations throughout India.
                </p>
              </div>
            </div>

            <button className="btn-primary" style={{ marginTop: 'var(--space-8)' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Story
            </button>

            <div className="about-stats">
              <div className="about-stat-item">
                <span className="stat-num">800+</span>
                <span className="stat-label">Weddings Captured</span>
              </div>
              <div className="about-stat-item">
                <span className="stat-num">18</span>
                <span className="stat-label">States & Countries</span>
              </div>
              <div className="about-stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Couples Delighted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
