const services = [
  {
    icon: '💍',
    title: 'Engagement & Pre-Wedding',
    description: 'Intimate storytelling sessions that capture your unique chemistry — across heritage havelis, scenic landscapes, or your favourite city streets.',
    price: 'Starting ₹45,000',
    features: ['4–6 hours coverage', '300+ edited photos', 'Online gallery delivery'],
  },
  {
    icon: '🪔',
    title: 'Full Wedding Coverage',
    description: 'From the first Haldi to the final Vidaai, our team documents every ritual, emotion, and celebration in cinematic detail.',
    price: 'Starting ₹1,20,000',
    features: ['2-day multi-ceremony', 'Candid + Traditional', 'Drone aerial shots', 'Cinematic film'],
    featured: true,
  },
  {
    icon: '📽️',
    title: 'Cinematic Wedding Films',
    description: 'A premium cinematic film that transforms your wedding day into a feature — scored to music that moves you, edited to make you feel it all again.',
    price: 'Starting ₹80,000',
    features: ['Highlight film (5–8 min)', 'Full ceremony film', 'Dolby audio mix'],
  },
  {
    icon: '📖',
    title: 'Heirloom Albums',
    description: 'Handcrafted, museum-quality lay-flat albums printed on fine art paper. A physical heirloom your grandchildren will treasure.',
    price: 'Starting ₹18,000',
    features: ['Italian lay-flat binding', 'Fine art paper prints', 'Custom cover design'],
  },
  {
    icon: '🎭',
    title: 'Mehendi & Sangeet',
    description: 'High-energy, colour-drenched coverage of the celebrations that set the stage for your big day. We capture the laughter, dance, and glow.',
    price: 'Starting ₹35,000',
    features: ['4 hours coverage', '200+ edited photos', 'Same-day sneak peek'],
  },
  {
    icon: '🌅',
    title: 'Destination Weddings',
    description: 'From Udaipur palace weddings to beach ceremonies in Maldives, we travel the world to document love wherever it blooms.',
    price: 'Custom packages',
    features: ['International coverage', 'Dedicated travel team', 'Bespoke film & album'],
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <p className="section-label">Our Services</p>
          <h2>Your Wedding Experience</h2>
          <div className="gold-divider centered" />
          <p>Every package is crafted with intention — because your love story deserves nothing less than extraordinary artistry.</p>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {services.map((s) => (
            <div key={s.title} className="service-card" style={s.featured ? { background: 'linear-gradient(135deg, #fbf9f5 0%, #fdf5f5 100%)', border: '1px solid rgba(128,0,0,0.12)' } : {}}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {s.features.map(f => (
                  <li key={f} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '0.625rem' }}>◆</span> {f}
                  </li>
                ))}
              </ul>
              <div className="service-price">{s.price}</div>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Inquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
