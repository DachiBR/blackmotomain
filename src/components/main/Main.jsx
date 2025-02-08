import React from "react";
import "./main.css";
import { useLanguage } from '../../LanguageContext';
import logo from "../../assets/Blackmoto_logocolo_white.png";
import suzuki from "../../assets/suzuki.png";
import yamaha from "../../assets/yamaha.jpg";
import kawasaki from "../../assets/kawasaki.png";
import honda from "../../assets/honda.png";
import aboutImageRU from "../../assets/contactRU.png";
import aboutImageGE from "../../assets/contactGE.png";
import instagramIcon from "../../assets/inst.png";
import facebookIcon from "../../assets/fac.png";
import aboutImage from "../../assets/IMG_9678.jpg";

const MainPage = () => {
  const { language } = useLanguage();

  const content = {
    GE: {
      hero: "DRIVE FREEDOM ROCK'N'ROLL",
      service: "მოტოციკლების გაქირავების სერვისი",
      aboutTitle: "ჩვენს შესახებ",
      aboutText:
        "BlackMoto GE - მოტოციკლების გაქირავების სერვისი თბილისში, საქართველო...",
      contactUs: "დაგვიკავშირდით",
      motorpark: "მოტოპარკი",
      terms: "წესები და მოთხოვნები",
      contacts: "კონტაქტი",
      aboutImage: aboutImageGE,
    },
    RU: {
      hero: "DRIVE FREEDOM ROCK'N'ROLL",
      service: "СЕРВИС АРЕНДЫ МОТОЦИКЛОВ",
      aboutTitle: "О НАС",
      aboutText:
        "BlackMoto GE – сервис аренды мотоциклов в Тбилиси, Грузия. Мы вдохновлены свободой...",
      contactUs: "НАПИШИТЕ НАМ",
      motorpark: "МОТОПАРК",
      terms: "УСЛОВИЯ И ТРЕБОВАНИЯ",
      contacts: "КОНТАКТЫ",
      aboutImage: aboutImageRU,
    },
  };

  return (
    <div className="main-page">
      <header className="hero-section">
       
        <h1>{content[language].hero}</h1>
        <img src={logo} alt="BlackMoto GE Logo" className="logo" />
      </header>

      <section className="rental-service">
        <h2>{content[language].service}</h2>
      </section>

      <section className="about-section">
  <div className="about-text">
    <h3>{language === "GE" ? "ჩვენს შესახებ" : "О НАС"}</h3>
    <p>
      <span className="highlight">BlackMoto.GE</span> –{" "}
      {language === "GE"
        ? "მოტოციკლების გაქირავების სერვისი თბილისში, საქართველო. ჩვენ შთაგონებულნი ვართ ერთი ცნების – თავისუფლების მიერ. ხოლო თავისუფლება ჩვენთვის ასოცირდება სამ სიტყვასთან – საქართველო, მოტოციკლი, როკ-ნ-როლი. თუ ეს ფილოსოფია ახლოს არის თქვენთვის, თუ გსურთ ამ ატმოსფეროს შეგრძნება – ჩვენ მზად ვართ დაგეხმაროთ."
        : "сервис аренды мотоциклов в Тбилиси, Грузия. Мы вдохновлены одним понятием – свобода. А свобода для нас ассоциируется с тремя словами – Грузия, мотоцикл, рок-н-ролл. Если тебе близка наша философия, если ты хочешь чувствовать эту атмосферу – мы готовы тебе помочь."}
    </p>
  </div>
  <img
    src={content[language].aboutImage || aboutImage}
    alt={language === "GE" ? "ჩვენს შესახებ" : "О нас"}
    className="about-image"
  />
</section>


      <section className="motorpark">
  <h3>{language === "GE" ? "მოტოპარკი" : "Мотопарк"}</h3>
  <div className="bike-list">
    <div className="bike-card">
      <img src={suzuki} alt="Suzuki Boulevard c50" />
      <h4>Suzuki Boulevard c50</h4>
      <p>
        {language === "GE"
          ? "წელი: 2013"
          : "Год: 2013"} <br />
        {language === "GE"
          ? "ძრავი: 805 მ³"
          : "Двигатель: 805 м³"} <br />
        {language === "GE"
          ? "სიმძლავრე: 53 ცხ/ძ"
          : "Мощность: 53 л/с"} <br />
        {language === "GE"
          ? "ძრავა: კარდანი"
          : "Привод: кардан"}
      </p>
    </div>
    <div className="bike-card">
      <img src={yamaha} alt="Yamaha XV950 Bolt" />
      <h4>Yamaha XV950 Bolt</h4>
      <p>
        {language === "GE"
          ? "წელი: 2015"
          : "Год: 2015"} <br />
        {language === "GE"
          ? "ძრავი: 942 მ³"
          : "Двигатель: 942 м³"} <br />
        {language === "GE"
          ? "სიმძლავრე: 54 ცხ/ძ"
          : "Мощность: 54 л/с"} <br />
        {language === "GE"
          ? "ძრავა: ქამარი"
          : "Привод: ремень"}
      </p>
    </div>
    <div className="bike-card">
      <img src={kawasaki} alt="Kawasaki EN650 Vulcan" />
      <h4>Kawasaki EN650 Vulcan</h4>
      <p>
        {language === "GE"
          ? "წელი: 2015"
          : "Год: 2015"} <br />
        {language === "GE"
          ? "ძრავი: 649 მ³"
          : "Двигатель: 649 м³"} <br />
        {language === "GE"
          ? "სიმძლავრე: 61 ცხ/ძ"
          : "Мощность: 61 л/с"} <br />
        {language === "GE"
          ? "ძრავა: ჯაჭვი"
          : "Привод: цепь"}
      </p>
    </div>
    <div className="bike-card">
      <img src={honda} alt="Honda Rebel 500" />
      <h4>Honda Rebel 500</h4>
      <p>
        {language === "GE"
          ? "წელი: 2021"
          : "Год: 2021"} <br />
        {language === "GE"
          ? "ძრავი: 471 მ³"
          : "Двигатель: 471 м³"} <br />
        {language === "GE"
          ? "სიმძლავრე: 46 ცხ/ძ"
          : "Мощность: 46 л/с"} <br />
        {language === "GE"
          ? "ძრავა: ჯაჭვი"
          : "Привод: цепь"}
      </p>
    </div>
  </div>
  <p className="motorpark-info">
    {language === "GE"
      ? "მომსახურება BlackMoto.GE დინამიურად ვითარდება, მოტოპარკი განახლდება ახალი მოტოციკლებით..."
      : "Сервис BlackMoto.GE динамично развивается, мотопарк пополняется новыми мотоциклами..."}
  </p>
  <div className="social-icons">
    <img src={instagramIcon} alt="Instagram" />
    <img src={facebookIcon} alt="Facebook" />
  </div>
</section>


      <section className="terms-section">
  <h3>{language === "GE" ? "პირობები და მოთხოვნები" : "Условия и Требования"}</h3>
  <ul>
    <li>
      <strong>
        {language === "GE" ? "მძღოლი:" : "Водитель:"}
      </strong>{" "}
      {language === "GE"
        ? "მინიმალური ასაკი 20 წელი. აუცილებელია A კატეგორიის მართვის მოწმობა."
        : "Возраст от 20 лет. Водительское удостоверение категории A обязательно."}
    </li>
    <li>
      <strong>
        {language === "GE" ? "ღირებულება:" : "Стоимость:"}
      </strong>{" "}
      {language === "GE"
        ? "გაქირავების ღირებულება იწყება 90$-დან დღეში და დამოკიდებულია გაქირავების ვადაზე. რაც მეტი ვადა, მით დაბალია ღირებულება. შესაძლებელია ნაღდი გადახდა აშშ დოლარებში ან ლარებში, ასევე გადარიცხვა ლარში ან რუბლებში."
        : "Стоимость аренды стартует от 90$ за сутки и зависит от срока аренды – чем больше срок, тем ниже стоимость. Оплата возможна наличными в долларах США и Грузинских лари, переводом в Грузинских лари, либо в российских рублях на карту российского банка."}
    </li>
    <li>
      <strong>
        {language === "GE" ? "გაქირავების ვადა:" : "Срок аренды:"}
      </strong>{" "}
      {language === "GE"
        ? "მინიმალური ვადა - 1 დღე. მაქსიმალური არ არის შეზღუდული."
        : "Минимальный срок аренды – 1 день. Максимальный – не ограничен."}
    </li>
    <li>
      <strong>{language === "GE" ? "ანაბარი:" : "Залог:"}</strong>{" "}
      {language === "GE"
        ? "სერვისი მოითხოვს მინიმალურ ანაბარს 150 ლარში. ანაბარი ბრუნდება მოტოციკლის დაბრუნებისთანავე."
        : "Сервис предлагает условия с минимальным залогом 150 Грузинских лари на покрытие возможных штрафов за нарушение ПДД и условий сервиса. Возврат осуществляется в момент возврата мотоцикла."}
    </li>
    <li>
      <strong>
        {language === "GE" ? "ამოწურვა:" : "Экипировка:"}
      </strong>{" "}
      {language === "GE"
        ? "სერვისი უფასოდ უზრუნველყოფს მძღოლის აღჭურვილობას (ჩაფხუტი, ქურთუკი, ხელთათმანები)."
        : "Наличие экипировки является обязательным условием. Сервис предоставляет минимальный комплект (шлем, куртка, перчатки) БЕСПЛАТНО."}
    </li>
    <li>
      <strong>
        {language === "GE"
          ? "პასუხისმგებლობა და შეზღუდვები:"
          : "И немного об ответственности и ограничениях."}
      </strong>{" "}
      {language === "GE"
        ? "სერვისი მოუწოდებს მომხმარებლებს პასუხისმგებლობით მოეპყრონ მოტოციკლს."
        : "Мы настоятельно просим наших клиентов относиться к мотоциклам как к своей технике. На Вас лежит материальная ответственность за мотоцикл в случае вины в ДТП, а также падении, порче при стоянке."}
    </li>
  </ul>
</section>


      <section className="contact-section">
  <h3 className="contact-title">{content[language].contacts}</h3>

  <p>
    <strong className="highlight">
      {language === "GE" ? "მისამართი:" : "Адрес:"}
    </strong>{" "}
    {language === "GE"
      ? "ქ. თბილისი, ავთო ვარაზის 28ა, ლისის რაიონი, რაგბის სტადიონი კოჩები"
      : "г. Тбилиси, ул. Авто Варази, 28а, район Лиси, ориентир стадион регби Кочеби"}
  </p>

  <p>
    <strong className="highlight">
      {language === "GE"
        ? "ტელეფონი / WhatsApp / Telegram:"
        : "Телефон / WhatsApp / Telegram:"}
    </strong>{" "}
    <a href="tel:+995550004045" className="contact-link">
      +995 550 00 40 45
    </a>
  </p>

  <p>
    <strong className="highlight">
      {language === "GE" ? "სამუშაო საათები:" : "График работы:"}
    </strong>{" "}
    {language === "GE" ? "08:00 - 20:00" : "с 8:00 до 20:00"}
  </p>

  <div className="social-icons">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={instagramIcon} alt="Instagram" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={facebookIcon} alt="Facebook" />
    </a>
  </div>

  <div className="map-container">
    <iframe
      title="Google Maps Location"
      src="https://www.google.com/maps/embed?pb=!1m18..."
      width="100%"
      height="300"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</section>

    </div>
  );
};

export default MainPage;
