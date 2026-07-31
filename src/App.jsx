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
import imgCatCar2 from './assets/cat-car-2.png';
import imgCatCar3 from './assets/cat-car-3.png';
import imgCatMachine from './assets/cat-machine.png';
import imgCatMachine2 from './assets/cat-machine-2.png';
import imgCatMachine3 from './assets/cat-machine-3.png';
import imgCatCosmetics from './assets/cat-cosmetics.png';
import imgCatCosmetics2 from './assets/cat-cosmetics-2.png';
import imgCatCosmetics3 from './assets/cat-cosmetics-3.png';
import featAlternator from './assets/feat-alternator.png';
import featSkincare from './assets/feat-skincare.png';
import featPump from './assets/feat-pump.png';
import featCustom from './assets/feat-custom.png';
import avatar1 from './assets/avatar-1.png';
import avatar2 from './assets/avatar-2.png';
import avatar3 from './assets/avatar-3.png';
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

// Cosmetic Text Logos Component
const CosmeticLogo = ({ name, type }) => {
  const styles = {
    chanel: { fontFamily: '"Montserrat", "Helvetica Neue", sans-serif', letterSpacing: '0.3em', fontWeight: 600, fontSize: '2.5rem', background: 'linear-gradient(45deg, #FFD700, #FDB931)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    dior: { fontFamily: '"Playfair Display", "Times New Roman", serif', letterSpacing: '0.1em', fontWeight: 700, fontSize: '3rem', background: 'linear-gradient(45deg, #C0C0C0, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    loreal: { fontFamily: '"Arial", sans-serif', letterSpacing: '0.15em', fontWeight: 600, fontSize: '2.5rem', background: 'linear-gradient(45deg, #FF69B4, #FF1493)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    mac: { fontFamily: '"Arial Black", sans-serif', letterSpacing: '-0.05em', fontWeight: 900, fontSize: '3rem', background: 'linear-gradient(45deg, #00CED1, #20B2AA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    clinique: { fontFamily: '"Times New Roman", serif', letterSpacing: '0.15em', fontWeight: 500, fontSize: '2.5rem', background: 'linear-gradient(45deg, #98FB98, #3CB371)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    estee: { fontFamily: '"Optima", "Segoe UI", sans-serif', letterSpacing: '0.2em', fontWeight: 400, fontSize: '1.5rem', textAlign: 'center', lineHeight: 1.2, background: 'linear-gradient(45deg, #4169E1, #87CEEB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
  };
  
  return (
    <div className="logo-3d-wrapper" style={{ 
      color: '#ffffff', 
      filter: 'drop-shadow(0px 8px 12px rgba(255,255,255,0.3))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 2.5rem',
      userSelect: 'none'
    }}>
      <span style={styles[type]}>
        {name === 'ESTEE' ? <><span style={{display: 'block'}}>ESTÉE</span><span style={{display: 'block'}}>LAUDER</span></> : name}
      </span>
    </div>
  );
};

// Image Magnifying Glass Component with Carousel
const InnerZoom = ({ images, alt, onClick }) => {
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2.5)'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: 'center center', transform: 'scale(1)' });
  };

  return (
    <div 
      className="inner-zoom-container"
      style={{ overflow: 'hidden', width: '100%', height: '100%', cursor: 'zoom-in', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(images[currentIndex])}
    >
      {images.map((imgSrc, i) => (
        <img 
          key={i}
          src={imgSrc} 
          alt={alt} 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            transition: 'opacity 0.8s ease-in-out, transform 0.1s ease-out', 
            opacity: i === currentIndex ? 1 : 0,
            ...zoomStyle 
          }} 
        />
      ))}
    </div>
  );
};

function App() {
  const { language, changeLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

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
      <div 
        className="unified-bg-wrapper parallax-bg" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden',
          backgroundImage: `url(${heroBg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="hero-overlay"></div>

        {/* Hero Section */}
        <section className="hero" style={{ minHeight: '85vh' }}>
        <div className="container">
          <Reveal>
            <div className="hero-content" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
              <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', maxWidth: '900px', lineHeight: 1.2 }}>
                {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
              </h1>
              
              <div className="hero-buttons" style={{ flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>
                <a href="#contact" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
                  {t.hero.btnQuote} <ArrowRight size={20} />
                </a>
                
                <div className="hero-social-links" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                   <a href="https://wa.me/393514604320" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp"><FaWhatsapp size={40} /></a>
                   <a href="https://t.me/+393514604320" target="_blank" rel="noopener noreferrer" className="social-link" title="Telegram"><FaTelegram size={40} /></a>
                   <a href="https://www.instagram.com/tologhebeya/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><FaInstagram size={40} /></a>
                   <a href="https://www.tiktok.com/@tologhebeya?_r=1&_t=ZN-97rv7b5LiKp" target="_blank" rel="noopener noreferrer" className="social-link" title="TikTok"><FaTiktok size={40} /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        </section>

        {/* Automotive & Machinery Brand Marquee */}
        <div className="trust-marquee ribbon-bg">
          <div className="marquee-content">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="marquee-set">
                <div className="logo-3d-wrapper"><SiToyota size={90} color="#EB0A1E" style={{filter: 'drop-shadow(0px 10px 15px rgba(255,255,255,0.4))'}} /></div>
                <div className="logo-3d-wrapper"><SiHyundai size={90} color="#002C5F" style={{filter: 'drop-shadow(0px 10px 15px rgba(255,255,255,0.4))'}} /></div>
                <div className="logo-3d-wrapper"><SiCaterpillar size={90} color="#FFB81C" style={{filter: 'drop-shadow(0px 10px 15px rgba(255,255,255,0.4))'}} /></div>
                <div className="logo-3d-wrapper"><SiVolkswagen size={90} color="#001E50" style={{filter: 'drop-shadow(0px 10px 15px rgba(255,255,255,0.4))'}} /></div>
                <div className="logo-3d-wrapper"><SiFord size={90} color="#003478" style={{filter: 'drop-shadow(0px 10px 15px rgba(255,255,255,0.4))'}} /></div>
                <div className="logo-3d-wrapper"><SiBmw size={90} color="#0066B1" style={{filter: 'drop-shadow(0px 10px 15px rgba(255,255,255,0.4))'}} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cosmetics Brand Marquee (Reverse) */}
        <div className="trust-marquee ribbon-bg" style={{ paddingBottom: '3rem', paddingTop: '1rem' }}>
          <div className="marquee-content" style={{ animationDirection: 'reverse' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="marquee-set">
                <CosmeticLogo name="CHANEL" type="chanel" />
                <CosmeticLogo name="L'ORÉAL" type="loreal" />
                <CosmeticLogo name="DIOR" type="dior" />
                <CosmeticLogo name="M·A·C" type="mac" />
                <CosmeticLogo name="CLINIQUE" type="clinique" />
                <CosmeticLogo name="ESTEE" type="estee" />
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

          <div className="supply-grid-4">
            {t.supply.categories.slice(0, 3).map((cat, index) => {
              const catImagesGroup = [
                [imgCatCar, imgCatCar2, imgCatCar3],
                [imgCatCosmetics, imgCatCosmetics2, imgCatCosmetics3],
                [imgCatMachine, imgCatMachine2, imgCatMachine3]
              ];
              return (
                <Reveal key={index}>
                  <div className="supply-card glass-panel" style={{ padding: '0', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div className="supply-card-img-wrapper" style={{ height: '220px', width: '100%' }}>
                      <InnerZoom 
                        images={catImagesGroup[index]} 
                        alt={cat.title} 
                        onClick={(img) => setLightboxImage(img)} 
                      />
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

      {/* Featured Imports */}
      <section id="featured" className="featured bg-darker">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.featured?.title || "Featured Imports"}</h2>
            <p className="section-subtitle">{t.featured?.subtitle || "High-quality products we regularly source."}</p>
          </Reveal>
          
          <div className="supply-grid-4" style={{ marginTop: '3rem' }}>
            {t.featured?.items?.map((item, index) => {
              const featImages = [featAlternator, featSkincare, featPump, featCustom];
              return (
                <Reveal key={index}>
                  <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ height: '200px', width: '100%' }}>
                      <img src={featImages[index]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                      <p style={{ color: 'var(--color-accent-green)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{item.category}</p>
                      <h4 style={{ fontSize: '1.2rem' }}>{item.name}</h4>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="works">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.works.title}</h2>
            <p className="section-subtitle">{t.works.subtitle}</p>
          </Reveal>
          
          <div className="steps-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem', position: 'relative' }}>
            {t.works.steps.map((step, index) => (
              <Reveal key={index}>
                <div className="step-card glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem', position: 'relative', borderTop: '4px solid var(--color-accent-green)' }}>
                  <div className="step-number" style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-accent-green)', color: '#0a192f', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', border: '4px solid #0a192f' }}>
                    {index + 1}
                  </div>
                  <div className="step-content" style={{ marginTop: '1rem' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials bg-darker">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.testimonials?.title || "Testimonials"}</h2>
            <p className="section-subtitle">{t.testimonials?.subtitle || "What our clients say about us."}</p>
          </Reveal>
          
          <div className="supply-grid-4" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {t.testimonials?.reviews?.map((review, index) => {
              const avatars = [avatar1, avatar2, avatar3];
              return (
                <Reveal key={index}>
                  <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                    <div style={{ color: 'var(--color-accent-green)', display: 'flex', gap: '0.25rem' }}>
                      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', lineHeight: 1.6, flex: 1 }}>"{review.text}"</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                      <img src={avatars[index]} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-accent-green)' }} />
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{review.name}</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{review.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
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
                  <li><Mail size={24} className="contact-list-icon" /> info@tolo12.com</li>
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
              <p>info@tolo12.com</p>
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}><X size={32} /></button>
            <img src={lightboxImage} alt="Magnified Category View" />
            <a href="#contact" className="btn-primary" style={{ marginTop: '1.5rem', marginBottom: '1rem' }} onClick={() => setLightboxImage(null)}>
              {language === 'am' ? 'ለዚህ ምርት ዋጋ ይጠይቁ' : 'Request a Quote'}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
