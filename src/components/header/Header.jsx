import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Header.css';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    GE: {
      rental: "მოტოციკლების გაქირავება",
      company: "BLACKMOTO GE",
      locations: "თბილისი | სკრიტველო",
      phone: "+995 550 00 40 45",
      about: "ჩვენ შესახებ",
      motorpark: "მოტოპარკი",
      terms: "პირობები",
      contacts: "კონტაქტები",
      langSwitch: "RU",
    },
    RU: {
      rental: "ПРОКАТ МОТОЦИКЛОВ",
      company: "BLACKMOTO GE",
      locations: "Тбилиси | Скритвело",
      phone: "+995 550 00 40 45",
      about: "О НАС",
      motorpark: "МОТОПАРК",
      terms: "УСЛОВИЯ",
      contacts: "КОНТАКТЫ",
      langSwitch: "GE",
    },
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <p>{translations[language].rental}</p>
            <h1>{translations[language].company}</h1>
            <p className="locations">{translations[language].locations}</p>
          </div>
        </div>

        <div className="contact-section">
          <i className="fa fa-phone"></i>
          <span>{translations[language].phone}</span>
        </div>

        <div className="social-section">
          <button className="lang-btn" onClick={toggleLanguage}>
            {translations[language].langSwitch}
          </button>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#about">{translations[language].about}</a>
        <a href="#motorpark">{translations[language].motorpark}</a>
        <a href="#terms">{translations[language].terms}</a>
        <a href="#contacts">{translations[language].contacts}</a>
      </nav>
    </header>
  );
};

export default Header;
