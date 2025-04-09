import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './header.css';
import logo from '../../assets/Blackmoto_logocolo_white.png';

import phoneIcon from '../../assets/phone.png';
import instagramIcon from '../../assets/inst.png';
import facebookIcon from '../../assets/fac.png';
import whatsappIcon from '../../assets/what.png';
import telegramIcon from '../../assets/tele.png';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    GE: {
      about: "ჩვენს შესახებ",
      motorpark: "მოტოპარკი",
      terms: "პირობები",
      contacts: "კონტაქტები",
      langSwitch: "RU",
    },
    RU: {
      about: "О НАС",
      motorpark: "МОТОПАРК",
      terms: "УСЛОВИЯ",
      contacts: "КОНТАКТЫ",
      langSwitch: "GE",
    },
  };

  return (
    <header className="header-container">
      <div className="top-header">
        <img src={logo} alt="Logo" className="header-logo" />

        <div className="contact-info">
          <img src={phoneIcon} alt="Phone" className="icon" />
          <span>+995 550 00 40 45</span>
        </div>

        <div className="header-icons">
        <span className="lang-toggle" onClick={toggleLanguage}>
  {translations[language].langSwitch}
</span>

          <img src={instagramIcon} alt="Instagram" className="icon" />
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <img src={whatsappIcon} alt="WhatsApp" className="icon" />
          <img src={telegramIcon} alt="Telegram" className="icon" />
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
