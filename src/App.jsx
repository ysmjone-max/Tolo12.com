import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { 
  Menu,
  X,
  Settings,
  Activity, 
  CheckCircle2,
  MessageSquare,
  Mail,
  Phone,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaCar, FaWhatsapp } from "react-icons/fa6";
import { SiToyota, SiHyundai, SiKia, SiVolkswagen, SiFord, SiBmw, SiSuzuki, SiCaterpillar } from "react-icons/si";
import heroBg from './assets/hero-bg.png';
import imgCover from './assets/tolo12_cover.png';
import imgCatCar from './assets/cat-car.png';
import imgCatMachine from './assets/cat-machine.png';
import imgCatCosmetics from './assets/cat-cosmetics.png';
import { useLanguage } from './LanguageContext';

// Reusable Scroll Reveal Component
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

function App() {
  const { language, changeLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container nav-container flex-between">
          <div className="flex-gap-2">
            <button className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
            <a href="#" className="logo flex-center">
              <span>Tolo<span style={{ color: 'var(--color-accent-green)' }}>12</span></span>
            </a>
          </div>

          <div className="nav-lang-switcher flex-gap-1">
            <button 
              className={`lang-btn ${language === 'am' ? 'active' : ''}`}
              onClick={() => changeLanguage('am')}
              title="አማርኛ"
              style={{ minWidth: 'auto', padding: '0.4rem 0.8rem', fontSize: '1.2rem' }}
            >
              🇪🇹
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              title="English"
              style={{ minWidth: 'auto', padding: '0.4rem 0.8rem', fontSize: '1.2rem' }}
            >
              🇬🇧
            </button>
          </div>
          
          {menuOpen && (
            <div className="dropdown-menu glass-panel">
              <div className="dropdown-links">
                <a href="#supply" onClick={() => setMenuOpen(false)}>{t.nav.supply}</a>
                <a href="#how-it-works" onClick={() => setMenuOpen(false)}>{t.nav.works}</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Unified Background Wrapper for Hero and Marquee */}
      <div className="unified-bg-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={heroBg} alt="Industrial Warehouse" className="hero-bg" />
        <div className="hero-overlay"></div>

        {/* Hero Section */}
        <section className="hero" style={{ minHeight: '85vh' }}>
        <div className="container">
          <Reveal>
            <div className="hero-content">
              <h1 className="hero-title">
                {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
              </h1>
              <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                {t.hero.subtitle}
              </p>
              
              <div className="hero-buttons" style={{ flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <a href="#contact" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
                  {t.hero.btnQuote} <ArrowRight size={20} />
                </a>
                
                <div className="hero-social-links" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                   <a href="https://wa.me/393514604320" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp"><FaWhatsapp size={28} /></a>
                   <a href="https://t.me/+393514604320" target="_blank" rel="noopener noreferrer" className="social-link" title="Telegram"><FaTelegram size={28} /></a>
                   <a href="https://www.instagram.com/tologhebeya/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><FaInstagram size={28} /></a>
                   <a href="https://www.tiktok.com/@tologhebeya?_r=1&_t=ZN-97rv7b5LiKp" target="_blank" rel="noopener noreferrer" className="social-link" title="TikTok"><FaTiktok size={28} /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        </section>

        {/* Automotive Brand Marquee */}
        <div className="trust-marquee ribbon-bg">
        <div className="marquee-content">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="marquee-set">
              <div className="logo-3d-wrapper"><SiToyota size={90} color="#EB0A1E" /></div>
              <div className="logo-3d-wrapper"><SiHyundai size={90} color="#002C5F" /></div>
              <div className="logo-3d-wrapper"><SiKia size={90} color="#05141F" /></div>
              <div className="logo-3d-wrapper"><SiVolkswagen size={90} color="#001E50" /></div>
              <div className="logo-3d-wrapper"><SiFord size={90} color="#003478" /></div>
              <div className="logo-3d-wrapper"><SiBmw size={90} color="#0066B1" /></div>
              <div className="logo-3d-wrapper"><SiSuzuki size={90} color="#E32028" /></div>
              <div className="logo-3d-wrapper"><SiCaterpillar size={90} color="#FFB81C" /></div>
            </div>
          ))}
        </div>
        </div>
        
        {/* Wave Divider */}
        <div className="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
      </div>

      {/* What We Supply */}
      <section id="supply" className="supply">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.supply.title}</h2>
            <p className="section-subtitle">{t.supply.subtitle}</p>
          </Reveal>
          
          <Reveal>
            <div className="cover-image-wrapper">
              <img src={imgCover} alt="Tolo12 Categories Cover" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </Reveal>

          <div className="supply-grid-4">
            {t.supply.categories.slice(0, 3).map((cat, index) => {
              const catImages = [imgCatCar, imgCatMachine, imgCatCosmetics];
              return (
                <Reveal key={index}>
                  <div className="supply-card glass-panel" style={{ padding: '0', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div className="supply-card-img-wrapper" style={{ overflow: 'hidden', height: '220px', width: '100%' }}>
                      <img src={catImages[index]} alt={cat.title} className="supply-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                      <h3 className="supply-title" style={{ fontSize: '1.4rem' }}>{cat.title}</h3>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', lineHeight: 1.4 }}>{cat.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            
            {/* Custom Request Card */}
            <Reveal>
              <div className="supply-card glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderColor: 'var(--color-accent-green)', textAlign: 'center'}}>
                <HelpCircle size={50} className="supply-icon" style={{ marginBottom: '1rem' }} />
                <h3 className="supply-title" style={{ fontSize: '1.4rem' }}>{t.supply.categories[3].title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.4 }}>{t.supply.categories[3].desc}</p>
                <a href="#contact" className="btn-outline" style={{ marginTop: '1.5rem' }}>{t.nav.contact}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="works bg-darker">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.works.title}</h2>
            <p className="section-subtitle">{t.works.subtitle}</p>
          </Reveal>
          
          <div className="steps-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {t.works.steps.map((step, index) => (
              <Reveal key={index}>
                <div className="step-card glass-panel">
                  <span className="step-number">0{index + 1}</span>
                  <div className="step-content">
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-container">
            
            <Reveal>
              <div className="glass-panel" style={{ padding: '3rem' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t.contact.title}</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{t.contact.subtitle}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>{t.contact.sendUs}</h4>
                  <ul className="contact-list">
                    {t.contact.requirements.map((req, idx) => (
                      <li key={idx}><CheckCircle2 size={20} className="contact-list-icon" /> {req}</li>
                    ))}
                  </ul>
                </div>

                <a href="https://wa.me/393514604320" target="_blank" rel="noopener noreferrer" className="btn-primary btn-whatsapp" style={{ width: '100%', marginBottom: '1rem' }}>
                  <MessageSquare size={24} /> {t.contact.btnWhatsapp}
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="contact-info">
                <h3>{t.contact.getInTouch}</h3>
                <p>{t.contact.getInTouchDesc}</p>
                
                <ul className="contact-list">
                  <li><Phone size={24} className="contact-list-icon" /> +39 351 460 4320</li>
                  <li><Mail size={24} className="contact-list-icon" /> tologhebeya@gmail.com</li>
                </ul>

                <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>{t.contact.social}</h4>
                <div className="social-links" style={{ gap: '1.5rem' }}>
                  <a href="https://www.facebook.com/profile.php?id=61591924945173" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook size={28} /></a>
                  <a href="https://www.instagram.com/tologhebeya/" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram size={28} /></a>
                  <a href="https://www.tiktok.com/@tologhebeya?_r=1&_t=ZN-97rv7b5LiKp" target="_blank" rel="noopener noreferrer" className="social-link"><FaTiktok size={28} /></a>
                  <a href="https://t.me/+393514604320" target="_blank" rel="noopener noreferrer" className="social-link"><FaTelegram size={28} /></a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="logo" style={{ marginBottom: '1rem' }}>
                <Settings size={24} className="supply-icon" style={{ margin: 0 }}/>
                <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>Tolo<span style={{ color: 'var(--color-accent-green)' }}>12</span></span>
              </a>
            </div>
            
            <div className="footer-col">
              <h4>{t.footer?.quickLinks || 'Quick Links'}</h4>
              <p><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></p>
              <p><a href="#supply" style={{ color: 'inherit', textDecoration: 'none' }}>What We Supply</a></p>
              <p><a href="#how-it-works" style={{ color: 'inherit', textDecoration: 'none' }}>How It Works</a></p>
            </div>
            
            <div className="footer-col">
              <h4>{t.nav.contact}</h4>
              <p>+39 351 460 4320</p>
              <p>tologhebeya@gmail.com</p>
            </div>
          </div>
          
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} Tolo12. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/393514604320" target="_blank" rel="noopener noreferrer" className="fab-whatsapp" aria-label="Chat on WhatsApp">
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}

export default App;
