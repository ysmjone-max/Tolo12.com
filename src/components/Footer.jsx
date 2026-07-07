import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-logo">Ethio<span className="logo-highlight">Euro</span>Trade</h3>
            <p className="footer-desc">
              የእርስዎ አስተማማኝ የአውሮፓ ምርቶች አስመጪ አጋር። ከፍተኛ ጥራት ያላቸውን ማሽነሪዎች እና የኮንስትራክሽን ዕቃዎች ከአውሮፓ ወደ ኢትዮጵያ እናስመጣለን።
            </p>
          </div>
          
          <div className="footer-links">
            <h4>ፈጣን ማያያዣዎች (Quick Links)</h4>
            <ul>
              <li><a href="#how-it-works">እንዴት እንደሚሰራ (How it Works)</a></li>
              <li><a href="#products">ምርቶች (Products)</a></li>
              <li><a href="#why-us">ለምን እኛ (Why Us)</a></li>
              <li><a href="#contact">አግኙን (Contact)</a></li>
            </ul>
          </div>
          
          <div className="footer-hours">
            <h4>የስራ ሰዓት (Business Hours)</h4>
            <p>ሰኞ - አርብ (Mon-Fri): 2:00 LT - 11:00 LT</p>
            <p>ቅዳሜ (Sat): 2:00 LT - 6:00 LT</p>
            <p>እሁድ (Sun): ዝግ ነው (Closed)</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EthioEuroTrade. መብቱ በህግ የተጠበቀ ነው። (All Rights Reserved.)</p>
          <div className="footer-legal">
            <a href="#">የግላዊነት ፖሊሲ (Privacy Policy)</a>
            <a href="#">የአገልግሎት ውሎች (Terms of Service)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
