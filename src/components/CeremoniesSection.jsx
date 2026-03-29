const ceremonies = [
  {
    title: 'Haldi Ceremony',
    tag: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80',
  },
  {
    title: 'Mehendi Night',
    tag: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&q=80',
  },
  {
    title: 'Sangeet & Dance',
    tag: 'Celebration',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80',
  },
  {
    title: 'Sacred Wedding',
    tag: 'Main Ceremony',
    src: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=600&q=80',
  },
];

export default function CeremoniesSection() {
  return (
    <section className="ceremonies" id="ceremonies">
      <div className="container">
        <div className="ceremonies-header">
          <p className="section-label">Every Ritual, Captured</p>
          <h2>From Haldi to Vidaai</h2>
          <div className="gold-divider centered" style={{ background: 'var(--color-gold)' }} />
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
            Indian weddings are not one event — they are a festival of emotions spread across days.
            We are present for every sacred moment.
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
