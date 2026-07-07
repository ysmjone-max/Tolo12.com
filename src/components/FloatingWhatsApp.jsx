import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="tooltip">በ WhatsApp ያግኙን!</span>
    </a>
  );
};

export default FloatingWhatsApp;
