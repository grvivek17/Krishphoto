export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="footer-logo-link" onClick={(e) => {e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'});}} aria-label="Krish Photography">
              <img src="/krish-logo.png" alt="Krish Photography Logo" className="footer-logo-img" />
            </a>
            <p>
              Luxury Indian wedding photography rooted in emotion, artistry,
              and deep cultural respect. Based in Chennai.
              Available worldwide.
            </p>
            <div className="footer-socials">
              {[['📸', 'Instagram'], ['▶️', 'YouTube'], ['📘', 'Facebook'], ['📌', 'Pinterest']].map(([icon, label]) => (
                <a key={label} href="#" className="social-link" aria-label={label} title={label}>{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {[['about', 'About Us'], ['services', 'Services'], ['portfolio', 'Portfolio'], ['ceremonies', 'Ceremonies'], ['testimonials', 'Real Weddings'], ['contact', 'Inquire']].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['Pre-Wedding Shoots', 'Full Wedding Coverage', 'Mehendi & Haldi', 'Sangeet Coverage', 'Cinematic Films', 'Heirloom Albums', 'Destination Weddings'].map(s => (
                <li key={s}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+91984154635">+91 984154635</a></li>
              <li><a href="mailto:hello@krishphotography.in">hello@krishphotography.in</a></li>
              <li><a href="#">@krishphotography</a></li>
              <li style={{ marginTop: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
                  Vadapalani · Thirumullaivoyal · Chennai<br />& Destinations Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Krish Photography. All rights reserved.</span>
          <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem' }}>
            "Every frame, a feeling."
          </span>
        </div>
      </div>
    </footer>
  );
}
