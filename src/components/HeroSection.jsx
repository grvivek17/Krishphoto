import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=80';
    img.onload = () => bgRef.current?.classList.add('loaded');
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-label">Krish Photography · Est. 2012</span>
        <h1 className="hero-title">
          Timeless Stories.<br /><em>Unforgettable Love.</em>
        </h1>
        <p className="hero-subtitle">
          Capturing the grandeur, emotion, and sacred beauty of Indian weddings —<br />
          from intimate Mehendis to grand Baraat processions.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('portfolio')}>
            View Portfolio
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            Send Inquiry
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
