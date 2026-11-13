import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import applePayIcon from './img/pay-apple-pay.svg';
import googlePayIcon from './img/pay-google-pay.svg';
import maestroIcon from './img/pay-maestro.svg';
import mastercardIcon from './img/pay-mastercard.svg';
import webmoneyIcon from './img/pay-webmoney.svg';
import qiwiIcon from './img/pay-qiwi.svg';
import visaIcon from './img/pay-visa.svg';
import vkIcon from './img/social-vk.svg';
import instagramIcon from './img/social-instagram.svg';
import youtubeIcon from './img/social-youtube.svg';
import telegramIcon from './img/social-telegram.svg';
import viberChatIcon from './img/chat-viber.svg';
import telegramChatIcon from './img/chat-telegram.svg';
import whatsappChatIcon from './img/chat-whatsapp.svg';
import googlePlayImage from './img/google-play.png';
import appStoreImage from './img/app-store.png';

const CATALOG = ['Электросамокаты', 'Электроскутеры', 'Электровелосипеды', 'Электровелосипеды'];

const FOR_CUSTOMERS = [
  { text: 'Сервисный центр', link: '/page2' },
  { text: 'Блог', link: '' },
  { text: 'Доставка и оплата', link: '' },
  { text: 'Сотрудничество', link: '/page3' },
  { text: 'Рассрочка', link: '' },
  { text: 'Контакты', link: '' },
  { text: 'Тест-драйв', link: '/page4' },
  { text: 'Акции', link: '' },
];

const PHONES = [
  { title: 'Call-центр', number: '+7 (800) 505-54-61', time: 'Пн-Вс 10:00 - 20:00' },
  { title: 'Сервисный центр', number: '+7 (499) 350-76-92', time: 'Пн-Вс 10:00 - 20:00' },
];

const SHOPS = [
  { title: 'Магазин в Москве ул. Ткацкая, 5 стр. 16', phone: '+7 (499) 406 15 87' },
  { title: 'Магазин в Санкт-Петербурге ул. Фрунзе, 2', phone: '+7 (499) 406 15 87' },
  { title: 'Магазин в Краснодаре ул. Восточно-Кругликовская, 86', phone: '+ 7 (800) 505 54 61' },
];

const SOCIALS = [
  { name: 'Вконтакте', count: '3 300', icon: vkIcon, url: 'https://vk.ru/' },
  { name: 'Instagram', count: '10 602', icon: instagramIcon, url: 'https://www.instagram.com/' },
  { name: 'YouTube', count: '3 603', icon: youtubeIcon, url: 'https://www.youtube.com/' },
  { name: 'Telegram', count: '432', icon: telegramIcon, url: 'https://telegram.org' },
];

const PAYS = [applePayIcon, googlePayIcon, maestroIcon, mastercardIcon, webmoneyIcon, qiwiIcon, visaIcon];

const CHATS = [
  { icon: viberChatIcon, url: 'https://www.viber.com/' },
  { icon: telegramChatIcon, url: 'https://telegram.org' },
  { icon: whatsappChatIcon, url: 'https://www.whatsapp.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function changeEmail(event) {
    setEmail(event.target.value);
    setSubscribed(false);
  }

  function sendForm(event) {
    event.preventDefault();
    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="footer">
      <div className="footer__subscribe">
        <div className="footer__subscribe-content">
          <h2 className="footer__subscribe-title">ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ</h2>
          <form className="footer__subscribe-form" onSubmit={sendForm}>
            <input
              className="footer__subscribe-input"
              type="email"
              placeholder="Введите Ваш email"
              value={email}
              onChange={changeEmail}
              required
            />
            <button className="footer__subscribe-button" type="submit">
              {subscribed ? 'Готово!' : 'Подписаться'}
            </button>
          </form>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__column">
            <h3 className="footer__title">Каталог товаров</h3>
            <ul className="footer__list">
              {CATALOG.map((text, index) => (
                <li key={index}><Link to="/page5" className="footer__link">{text}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Покупателям</h3>
            <ul className="footer__list footer__list--grid">
              {FOR_CUSTOMERS.map((item) => (
                <li key={item.text}><Link to={item.link} className="footer__link">{item.text}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer__column footer__column--contacts">
            <div className="footer__contacts-head">
              <h3 className="footer__title">Контакты</h3>
              <button className="footer__call" type="button">Заказать звонок</button>
            </div>
            <div className="footer__contacts">
              <div className="footer__contacts-row">
                {PHONES.map((phone) => (
                  <div className="footer__contact" key={phone.title}>
                    <p className="footer__contact-title">{phone.title}</p>
                    <h2 className="footer__contact-number">{phone.number}</h2>
                    <p className="footer__contact-text">{phone.time}</p>
                  </div>
                ))}
              </div>
              <div className="footer__contacts-row">
                {SHOPS.map((shop) => (
                  <div className="footer__contact" key={shop.title}>
                    <p className="footer__contact-title footer__contact-title--big">{shop.title}</p>
                    <p className="footer__contact-text">{shop.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <Link to="/" className="logo">KUGOO</Link>
          <div className="footer__apps">
            <div><img src={googlePlayImage} alt="" /></div>
            <div><img src={appStoreImage} alt="" /></div>
          </div>
          <div className="footer__socials">
            {SOCIALS.map((social) => (
              <a href={social.url} className="footer__social" key={social.name}>
                <img src={social.icon} alt="" />
                <div className="footer__social-info">
                  <h4 className="footer__social-name">{social.name}</h4>
                  <p className="footer__social-count">{social.count}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__docs">
            <p>Реквизиты</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div className="footer__bottom-right">
            <div className="footer__pays">
              {PAYS.map((icon) => (
                <div className="footer__pay" key={icon}><img src={icon} alt="" /></div>
              ))}
            </div>
            <div className="footer__chat">
              <p>Online чат:</p>
              {CHATS.map((chat) => (
                <a href={chat.url} className="footer__chat-link" key={chat.url}><img src={chat.icon} alt="" /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
