import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './header.css';
import logo from '../../assets/Blackmoto_logocolo_white.png';

import phoneIcon from '../../assets/Phone.png';
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

<a href="https://www.instagram.com/blackmoto.ge/" target="_blank" rel="noopener noreferrer">
  <img src={instagramIcon} alt="Instagram" className="icon" />
</a>

<a href="https://www.facebook.com/BlackMoto.Ge" target="_blank" rel="noopener noreferrer">
  <img src={facebookIcon} alt="Facebook" className="icon" />
</a>

<a href="https://wa.me/+995 550004045" target="_blank" rel="noopener noreferrer">
  <img src={whatsappIcon} alt="WhatsApp" className="icon" />
</a>

<a href="https://t.me/mixoushba" target="_blank" rel="noopener noreferrer">
  <img src={telegramIcon} alt="Telegram" className="icon" />
</a>

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
