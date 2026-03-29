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
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
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
