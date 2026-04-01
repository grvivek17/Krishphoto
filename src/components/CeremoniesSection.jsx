const ceremonies = [
  {
    title: 'Haldi Ceremony',
    tag: 'Pre-Wedding',
    src: '/c-haldi.png',
  },
  {
    title: 'Mehendi Night',
    tag: 'Pre-Wedding',
    src: '/c-mehendi.png',
  },
  {
    title: 'Sangeet & Dance',
    tag: 'Celebration',
    src: '/c-sangeet.png',
  },
  {
    title: 'Godh Bharai',
    tag: 'Baby Shower',
    src: '/c-babyshower.png',
  },
];

export default function CeremoniesSection() {
  return (
    <section className="ceremonies" id="ceremonies">
      <div className="container">
        <div className="ceremonies-header">
          <p className="section-label">Every Milestone, Captured</p>
          <h2>From Haldi to Baby Photography</h2>
          <div className="gold-divider centered" style={{ background: 'var(--color-gold)' }} />
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
            Life's most cherished moments deserve to live forever — from the turmeric-soaked joy
            of a Haldi to the tender, delightful moments of your little one's first photographs. We document every milestone with love.
          </p>
        </div>

        <div className="ceremonies-grid">
          {ceremonies.map((c) => (
            <div key={c.title} className="ceremony-card">
              <img src={c.src} alt={c.title} loading="lazy" />
              <div className="ceremony-card-body">
                <span className="ceremony-tag">{c.tag}</span>
                <h3>{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

