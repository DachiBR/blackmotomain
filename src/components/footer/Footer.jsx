import React from "react";
import { useLanguage } from "../../LanguageContext";
import "./footer.css";
import logo from "../../assets/Blackmoto_logocolo_white.png";
import instagramIcon from "../../assets/inst.png";
import facebookIcon from "../../assets/fac.png";
import whatsappIcon from "../../assets/what.png";
import telegramIcon from "../../assets/tele.png";

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    GE: {
      about: "ჩვენს შესახებ",
      motorpark: "მოტოპარკი",
      terms: "პირობები",
      contacts: "კონტაქტები",
      rights: "თბილისი 2025 ყველა უფლება დაცულია",
    },
    RU: {
      about: "О НАС",
      motorpark: "МОТОПАРК",
      terms: "УСЛОВИЯ",
      contacts: "КОНТАКТЫ",
      rights: "Тбилиси 2025 Все права защищены",
    },
  };

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="BlackMoto GE" />
      </div>

      <nav className="footer-nav">
        <a href="#about">{translations[language].about}</a>
        <a href="#motorpark">{translations[language].motorpark}</a>
        <a href="#terms">{translations[language].terms}</a>
        <a href="#contacts">{translations[language].contacts}</a>
      </nav>

      <div className="footer-social">
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

      <p className="footer-rights">{translations[language].rights}</p>
    </footer>
  );
};

export default Footer;
