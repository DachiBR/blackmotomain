import React, { createContext, useState, useContext } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Custom hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);

// Provider Component to manage the language state
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('GE'); // Default language is Georgian

  // Toggle between Georgian and Russian
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'GE' ? 'RU' : 'GE'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
