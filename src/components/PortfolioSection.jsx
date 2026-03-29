import { useState } from 'react';

const allImages = [
  { id: 1, src: '/w-baraat.png',   label: 'The Grand Baraat',        category: 'Wedding'     },
  { id: 2, src: '/w-mandap.png',   label: 'Sacred Vows at the Mandap', category: 'Ceremony'  },
  { id: 3, src: '/w-mehendi.png',  label: 'Mehndi Moments',          category: 'Mehendi'     },
  { id: 4, src: '/w-couple.png',   label: 'Bride & Groom Portrait',  category: 'Engagement'  },
  { id: 5, src: '/w-sangeet.png',  label: 'Sangeet Night',           category: 'Sangeet'     },
  { id: 6, src: '/w-vidaai.png',   label: 'The Emotional Vidaai',    category: 'Wedding'     },
  { id: 7, src: '/w-decor.png',    label: 'Floral Mandap Decor',     category: 'Destination' },
];

const categories = ['All', 'Wedding', 'Ceremony', 'Mehendi', 'Engagement', 'Sangeet', 'Destination'];

export default function PortfolioSection() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allImages : allImages.filter(img => img.category === active);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <p className="section-label">Our Portfolio</p>
            <h2>A Journey Through Love</h2>
            <div className="gold-divider" />
          </div>
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-mosaic">
          {filtered.slice(0, 7).map((img, i) => (
            <div key={img.id} className="portfolio-item" style={{ gridColumn: getSpan(i) }}>
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="portfolio-item-overlay">
                <span className="portfolio-item-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

function getSpan(index) {
  const spans = ['span 7', 'span 5', 'span 4', 'span 4', 'span 4', 'span 6', 'span 6'];
  return spans[index] || 'span 6';
}
