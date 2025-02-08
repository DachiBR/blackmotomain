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
      rights: "თბილისი 2023 ყველა უფლება დაცულია",
    },
    RU: {
      about: "О НАС",
      motorpark: "МОТОПАРК",
      terms: "УСЛОВИЯ",
      contacts: "КОНТАКТЫ",
      rights: "Тбилиси 2023 Все права защищены",
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
        <img src={instagramIcon} alt="Instagram" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={whatsappIcon} alt="WhatsApp" />
        <img src={telegramIcon} alt="Telegram" />
      </div>

      <p className="footer-rights">{translations[language].rights}</p>
    </footer>
  );
};

export default Footer;
