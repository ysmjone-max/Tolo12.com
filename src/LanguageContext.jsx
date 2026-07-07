import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('am'); // Default to Amharic

  useEffect(() => {
    // Load from local storage if exists
    const storedLang = localStorage.getItem('tolo12_lang');
    if (storedLang && (storedLang === 'en' || storedLang === 'am')) {
      setLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('tolo12_lang', lang);
  };

  const value = {
    language,
    changeLanguage,
    t: translations[language] // Provide the specific dictionary
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
