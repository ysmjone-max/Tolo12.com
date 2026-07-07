import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span className="logo-text">Ethio<span className="logo-highlight">Euro</span>Trade</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="#how-it-works">እንዴት እንደሚሰራ (How it Works)</a>
          <a href="#products">ምርቶች (Products)</a>
          <a href="#why-us">ለምን እኛ (Why Us)</a>
          <a href="#contact">አድራሻ (Contact)</a>
        </div>

        <div className="nav-actions desktop-only">
          <a href="tel:+251900000000" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
            <Phone size={18} /> ደውሉልን
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '0.5rem 1rem' }}>
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu animate-fade-in">
          <a href="#how-it-works" onClick={toggleMenu}>እንዴት እንደሚሰራ</a>
          <a href="#products" onClick={toggleMenu}>ምርቶች</a>
          <a href="#why-us" onClick={toggleMenu}>ለምን እኛ</a>
          <a href="#contact" onClick={toggleMenu}>አድራሻ</a>
          <div className="mobile-actions">
             <a href="tel:+251900000000" className="btn btn-outline w-full" style={{ marginBottom: '1rem', justifyContent: 'center' }}>
              <Phone size={18} /> ደውሉልን
            </a>
            <a href="https://wa.me/1234567890" className="btn btn-whatsapp w-full" style={{ justifyContent: 'center' }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
