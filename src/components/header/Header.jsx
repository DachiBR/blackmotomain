import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './header.css';
import logo from "../../assets/Blackmoto_logocolo_white.png";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    GE: {
      rental: "მოტოციკლების გაქირავება",
      company: "BLACKMOTO GE",
      locations: "თბილისი | საქართველო",
      phone: "+995 550 00 40 45",
      about: "ჩვენს შესახებ",
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
        <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
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
