import React from 'react';
import { Shield, Globe, Clock, ThumbsUp, Users, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  { icon: <Globe />, title: "የአውሮፓ አምራቾች ኔትወርክ", desc: "Trusted European supplier network" },
  { icon: <ThumbsUp />, title: "ተወዳዳሪ ዋጋ", desc: "Competitive pricing" },
  { icon: <Shield />, title: "አስተማማኝ እና ደህንነቱ የተጠበቀ", desc: "Secure transactions & reliable logistics" },
  { icon: <HeartHandshake />, title: "ግልፅ አሰራር", desc: "Transparent communication" },
  { icon: <Clock />, title: "ፈጣን ምላሽ", desc: "Fast response times" },
  { icon: <Users />, title: "የደንበኛ ትኩረት", desc: "Customer-focused service & multilingual support" },
];

const clients = [
  "ኮንትራክተሮች (Contractors)",
  "የኮንስትራክሽን ኩባንያዎች (Construction Companies)",
  "አምራች ኢንዱስትሪዎች (Manufacturing Industries)",
  "የምህንድስና ድርጅቶች (Engineering Firms)",
  "የመንግስት ተቋማት (Government Institutions)",
  "መንግስታዊ ያልሆኑ ድርጅቶች (NGOs)",
  "አስመጪዎች እና ቸርቻሪዎች (Wholesalers & Retailers)",
  "ፋብሪካዎች (Factories)",
  "ግለሰብ ገዢዎች (Individual Buyers)"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">ለምን እኛን ይመርጣሉ? (Why Choose Us)</h2>
          <p className="section-subtitle">
            ከጥያቄ እስከ ርክክብ ድረስ ከጎንዎ በመቆም የተሟላ አገልግሎት እንሰጣለን።
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-desc">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="who-we-serve">
          <h3 className="text-center" style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>
            አገልግሎታችንን ለነማን እንሰጣለን? (Who We Serve)
          </h3>
          <div className="clients-list">
            {clients.map((client, index) => (
              <div key={index} className="client-badge">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
