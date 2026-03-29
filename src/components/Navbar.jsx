import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Krish Photography Home">
            <img src="/krish-logo.png" alt="Krish Photography Logo" className="navbar-logo-img" />
          </a>

          <ul className="navbar-links">
            {[['about', 'About'], ['services', 'Services'], ['portfolio', 'Portfolio'], ['ceremonies', 'Ceremonies'], ['testimonials', 'Weddings']].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNav(id); }}>{label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="navbar-cta" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
                Inquire
              </a>
            </li>
          </ul>

          <button className="navbar-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        <button className="navbar-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        <img src="/krish-logo.png" alt="Krish Photography" style={{ height: '52px', marginBottom: '2rem', filter: 'brightness(1.1)' }} />
        {[['about', 'About'], ['services', 'Services'], ['portfolio', 'Portfolio'], ['ceremonies', 'Ceremonies'], ['testimonials', 'Weddings'], ['contact', 'Inquire']].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNav(id); }}>{label}</a>
        ))}
      </div>
    </>
  );
}
