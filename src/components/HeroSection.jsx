import { useEffect, useRef } from 'react';

const slides = [
  '/w-baraat.png',
  '/w-mandap.png',
  '/w-mehendi.png',
  '/w-couple.png',
  '/w-sangeet.png',
  '/c-haldi.png',
];

export default function HeroSection() {
  return (
    <section className="hero" id="home">

      {/* Crossfade slideshow */}
      <div className="hero-slideshow" aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={src}
            className="hero-slide"
            style={{ animationDelay: `${i * (24 / slides.length)}s`, backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-label">Chennai · Pan-India · Destination Weddings</span>
        <h1 className="hero-title">
          Timeless Stories.<br /><em>Unforgettable Love.</em>
        </h1>
        <p className="hero-subtitle">
          Luxury Indian wedding & lifestyle photography by Krishnamoorthy
        </p>
        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
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
