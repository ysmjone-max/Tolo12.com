import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { 
  Settings, 
  Wrench, 
  Activity, 
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { SiBosch, SiSiemens, SiCaterpillar, SiVolvo, SiSchneiderelectric } from "react-icons/si";
import heroBg from './assets/hero-bg.png';
import imgIndustrial from './assets/cat_industrial.png';
import imgConstruction from './assets/cat_construction.png';
import imgManufacturing from './assets/cat_manufacturing.png';
import imgHydraulic from './assets/cat_hydraulic.png';
import imgBearings from './assets/cat_bearings.png';
import imgPumps from './assets/cat_pumps.png';
import imgElectrical from './assets/cat_electrical.png';
import imgAutomation from './assets/cat_automation.png';
import imgMechanical from './assets/cat_mechanical.png';
import imgHeavy from './assets/cat_heavy.png';
import { useLanguage } from './LanguageContext';

const supplyImages = [
  imgIndustrial,
  imgConstruction,
  imgManufacturing,
  imgHydraulic,
  imgBearings,
  imgPumps,
  imgElectrical,
  imgAutomation,
  imgMechanical,
  imgHeavy
];

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

  return (
    <>
      <nav>
        <div className="container nav-container">
          <a href="#" className="logo">
            <Settings size={28} className="supply-icon" style={{ margin: 0 }}/>
            <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>Tolo<span style={{ color: 'var(--color-accent-green)' }}>12</span></span>
          </a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#contact" className="btn-primary">{t.nav.contact}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src={heroBg} alt="Industrial Warehouse" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <Reveal>
            <div className="hero-content">
              <h1 className="hero-title">
                {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
              </h1>
              <p className="hero-subtitle">
                {t.hero.subtitle}
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">
                  {t.hero.btnQuote} <ArrowRight size={20} />
                </a>
                <a href="https://wa.me/393514604320" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  {t.hero.btnWhatsapp}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="trust-marquee">
        <div className="marquee-content" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
          <SiBosch size={45} color="#ED0007" />
          <span style={{ fontWeight: 900, fontStyle: 'italic', color: '#0055A5', fontSize: '2.5rem', lineHeight: 1 }}>SKF</span>
          <SiSiemens size={45} color="#009999" />
          <SiCaterpillar size={45} color="#FFB81C" />
          <SiVolvo size={45} color="#1F2A44" />
          <span style={{ fontWeight: 900, color: '#0070B8', fontSize: '2.2rem', lineHeight: 1 }}>FESTO</span>
          <SiSchneiderelectric size={45} color="#3DCD58" />
          <span style={{ fontWeight: 900, color: '#E47100', fontSize: '2.2rem', lineHeight: 1 }}>TIMKEN</span>
          
          {/* Duplicate for infinite loop effect */}
          <SiBosch size={45} color="#ED0007" />
          <span style={{ fontWeight: 900, fontStyle: 'italic', color: '#0055A5', fontSize: '2.5rem', lineHeight: 1 }}>SKF</span>
          <SiSiemens size={45} color="#009999" />
          <SiCaterpillar size={45} color="#FFB81C" />
          <SiVolvo size={45} color="#1F2A44" />
          <span style={{ fontWeight: 900, color: '#0070B8', fontSize: '2.2rem', lineHeight: 1 }}>FESTO</span>
          <SiSchneiderelectric size={45} color="#3DCD58" />
          <span style={{ fontWeight: 900, color: '#E47100', fontSize: '2.2rem', lineHeight: 1 }}>TIMKEN</span>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="intro">
        <div className="container">
          <Reveal>
            <div className="intro-content">
              <h2 className="section-title">{t.intro.title}</h2>
              <p className="intro-text">
                {t.intro.p1_1} <strong>{t.intro.p1_2}</strong>
              </p>
              <p className="intro-text">
                {t.intro.p2}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Supply */}
      <section className="supply">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.supply.title}</h2>
            <p className="section-subtitle">{t.supply.subtitle}</p>
          </Reveal>
          
          <div className="supply-grid">
            {t.supply.items.map((item, index) => (
              <Reveal key={index}>
                <div className="supply-card glass-panel" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
                  <img src={supplyImages[index]} alt={item} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  <div style={{ padding: '1.5rem' }}>
                    <h3 className="supply-title">{item}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="supply-card glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderColor: 'var(--color-accent-green)'}}>
                <Activity size={40} className="supply-icon" />
                <h3 className="supply-title">{t.supply.customTitle}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.supply.customText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="works bg-darker">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.works.title}</h2>
            <p className="section-subtitle">{t.works.subtitle}</p>
          </Reveal>
          
          <div className="steps-container">
            {t.works.steps.map((step, index) => (
              <Reveal key={index}>
                <div className="step-card glass-panel" style={index === 3 ? { borderColor: 'var(--color-accent-green)'} : {}}>
                  <span className="step-number">0{index + 1}</span>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Who We Serve */}
      <section className="features">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t.features.title}</h2>
            <div className="features-grid">
              {t.features.items.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 size={24} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t.industries.title}</h2>
            <div className="industries-grid">
              {t.industries.items.map((industry, idx) => (
                <div key={idx} className="industry-tag">
                  {industry}
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* Our Promise */}
      <section className="promise">
        <div className="container">
          <Reveal>
            <div className="promise-content">
              <ShieldCheck size={48} className="supply-icon" style={{ marginBottom: '1.5rem' }} />
              <h2 className="section-title">{t.promise.title}</h2>
              <p className="promise-text">
                {t.promise.quote}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                {t.promise.mission}
              </p>
              <p style={{ color: 'var(--color-accent-green)', fontWeight: '600', fontSize: '1.25rem' }}>
                {t.promise.highlight}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
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
                  <a href="#" className="social-link"><FaFacebook size={28} /></a>
                  <a href="#" className="social-link"><FaInstagram size={28} /></a>
                  <a href="#" className="social-link"><FaTiktok size={28} /></a>
                  <a href="#" className="social-link"><FaTelegram size={28} /></a>
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
              <p>{t.footer.desc}</p>
            </div>
            
            <div className="footer-col">
              <h4>{t.footer.quickLinks}</h4>
              <p><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t.footer.home}</a></p>
              <p><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>{t.footer.contact}</a></p>
              <p><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t.footer.privacy}</a></p>
            </div>
            
            <div className="footer-col">
              <h4>{t.footer.contact}</h4>
              <p>{t.footer.phoneText}</p>
              <p>tologhebeya@gmail.com</p>
            </div>
          </div>
          
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div className="lang-switcher" style={{ display: 'flex', justifyContent: 'center' }}>
              <button 
                className={`lang-btn ${language === 'am' ? 'active' : ''}`}
                onClick={() => changeLanguage('am')}
                style={{ minWidth: '120px' }}
              >
                🇪🇹 አማርኛ
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                style={{ minWidth: '120px' }}
              >
                Eng English
              </button>
            </div>
            <div style={{ opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} {t.footer.rights}
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
