import React from 'react';
import { MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">
            <ShieldCheck size={18} /> አውሮፓ - ኢትዮጵያ ንግድ (Europe to Ethiopia Trade)
          </span>
          <h1 className="hero-title">
            ከአውሮፓ የኮንስትራክሽን ዕቃዎችን እና ማሽነሪዎችን ወደ ኢትዮጵያ በታማኝነት ያስመጡ
          </h1>
          <p className="hero-subtitle">
            የኢትዮጵያ ንግዶችን፣ ተቋራጮችን፣ ፋብሪካዎችን እና ግለሰቦችን አስተማማኝ ከአውሮፓ አምራቾች ጋር እናገናኛለን። ምርት መፈለግ፣ መግዛት፣ ጥራት ማረጋገጥ እና ወደ ኢትዮጵያ የማጓጓዝ ሙሉ አገልግሎት እንሰጣለን።
          </p>
          
          <div className="hero-actions">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp hero-btn">
              <MessageCircle size={24} /> በ WhatsApp ነፃ ዋጋ ይጠይቁ
            </a>
            <a href="tel:+251900000000" className="btn btn-primary hero-btn">
              <PhoneCall size={24} /> ዛሬውኑ ይደውሉልን
            </a>
          </div>
          
          <div className="trust-statement">
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>ፈጣን እና አስተማማኝ (Fast & Reliable)</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>ግልፅ አሰራር (Transparent)</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>የተሟላ ድጋፍ (End-to-End Support)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
