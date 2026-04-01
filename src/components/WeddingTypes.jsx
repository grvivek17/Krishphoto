const weddingTypes = [
  {
    icon: '🌿',
    title: 'Outdoor Wedding Photography',
    desc: 'Lush gardens, golden fields, and open skies — we capture the beauty of nature as your backdrop.',
  },
  {
    icon: '☪️',
    title: 'Muslim Wedding Photography',
    desc: 'From the Nikah to the Walima — honouring every sacred moment with reverence and artistry.',
  },
  {
    icon: '✝️',
    title: 'Christian Wedding Photography',
    desc: 'Church ceremonies, vows, and candid receptions captured with timeless elegance.',
  },
  {
    icon: '🪔',
    title: 'Brahmin Wedding Photography',
    desc: 'Detailed coverage of traditional rituals — Muhurtham, Saptapadi, and every sacred step.',
  },
  {
    icon: '🌺',
    title: 'Telugu Wedding Photography',
    desc: 'Pellikoduku, Mangalasnanam, and vibrant Telugu traditions told through stunning frames.',
  },
  {
    icon: '🕉️',
    title: 'Hindu Wedding Photography',
    desc: 'From Haldi to Saat Pheras — capturing the colour, ritual, and emotion of Hindu weddings.',
  },
  {
    icon: '💍',
    title: 'Engagement Photography',
    desc: 'Ring ceremonies and pre-wedding shoots that tell your unique love story before the big day.',
  },
  {
    icon: '🌴',
    title: 'Malayali Wedding Photography',
    desc: 'Elegant Sadhya spreads, Manthrakodi moments, and the warmth of Kerala traditions.',
  },
  {
    icon: '🥁',
    title: 'Punjabi Wedding Photography',
    desc: 'The dhol, the bhangra, the chunni — big, bold, joyful Punjabi celebrations captured fully.',
  },
];

export default function WeddingTypes() {
  return (
    <section className="wedding-types" id="wedding-types">
      <div className="container">
        <div className="wedding-types-header">
          <p className="section-label">Every Culture. Every Tradition.</p>
          <h2>Weddings We Specialise In</h2>
          <div className="gold-divider centered" />
          <p className="wedding-types-sub">
            No two weddings are the same. We bring deep familiarity with Indian and cross-cultural wedding
            traditions — so every ritual is captured with the respect and attention it deserves.
          </p>
        </div>

        <div className="wedding-types-grid">
          {weddingTypes.map((type) => (
            <div key={type.title} className="wedding-type-card">
              <span className="wedding-type-icon">{type.icon}</span>
              <h3>{type.title}</h3>
              <p>{type.desc}</p>
              <a
                href="#contact"
                className="wedding-type-link"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Inquire →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
