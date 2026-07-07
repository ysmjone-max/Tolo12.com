import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ጥያቄዎ ተልኳል! በቅርቡ በ WhatsApp ወይም በስልክ እናገኝዎታለን። (Message sent! We'll contact you soon.)");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">አግኙን (Contact Us)</h2>
          <p className="section-subtitle">
            ለጥያቄዎችዎ ፈጣን ምላሽ ለመስጠት ዝግጁ ነን።
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>አድራሻችን (Our Details)</h3>
            <p className="contact-desc">
              ከአውሮፓ ወደ ኢትዮጵያ ለሚያስመጡት ማንኛውም ዕቃ አስተማማኝ አጋርዎ ነን።
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>ስልክ (Phone)</h4>
                  <p>+251 900 000 000</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>ኢሜል (Email)</h4>
                  <p>info@ethioeurotrade.com</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>አድራሻ (Location)</h4>
                  <p>Addis Ababa, Ethiopia (Partnered with Europe)</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>በማህበራዊ ሚዲያ ይከታተሉን</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <h3>መልዕክት ይላኩልን (Send Inquiry)</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>ሙሉ ስም (Full Name)</label>
                <input type="text" required placeholder="ስምዎን ያስገቡ" />
              </div>
              <div className="form-group">
                <label>ድርጅት (Company Name)</label>
                <input type="text" placeholder="የድርጅትዎን ስም ያስገቡ (አማራጭ)" />
              </div>
              <div className="form-group">
                <label>ስልክ ቁጥር (Phone Number)</label>
                <input type="tel" required placeholder="+251..." />
              </div>
              <div className="form-group">
                <label>የሚፈልጉት ምርት (Product Needed)</label>
                <input type="text" required placeholder="የምርቱን አይነትና ብዛት ይጥቀሱ" />
              </div>
              <div className="form-group">
                <label>ተጨማሪ ማብራሪያ (Additional Notes)</label>
                <textarea rows="4" placeholder="ስለምርቱ ተጨማሪ መረጃ ካለዎ..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                <Send size={18} /> ላክ (Submit)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
