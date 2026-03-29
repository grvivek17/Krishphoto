import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import CeremoniesSection from './components/CeremoniesSection';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <CeremoniesSection />
        <Testimonials />
        <InquiryForm />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919841546355?text=Hi%20Krish%20Photography!%20I%20would%20like%20to%20inquire%20about%20your%20wedding%20photography%20services."
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-fab-tooltip">Chat with us</span>
        💬
      </a>
    </>
  );
}

export default App;
