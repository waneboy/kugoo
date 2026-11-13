import { Link } from 'react-router-dom';
import './Header.scss';
import catalogIcon from './img/catalog.svg';
import dropdownIcon from './img/dropdown.svg';
import searchIcon from './img/search.svg';
import plusIcon from './img/plus.svg';
import viberIcon from './img/viber.svg';
import whatsappIcon from './img/whatsapp.svg';
import telegramIcon from './img/telegram.svg';
import compareIcon from './img/compare.svg';
import heartIcon from './img/heart.svg';
import cartIcon from './img/cart.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-content">
          <div className="header__top-left">
            <ul className="header__links">
              <li><Link to="/page2" className="header__link">Сервис</Link></li>
              <li><Link to="/page3" className="header__link">Сотрудничество</Link></li>
              <li><Link to="" className="header__link">Заказать звонок</Link></li>
            </ul>
            <ul className="header__messengers">
              <li><Link to="" className="header__link"><img src={viberIcon} alt="" /></Link></li>
              <li><Link to="" className="header__link"><img src={whatsappIcon} alt="" /></Link></li>
              <li><Link to="" className="header__link"><img src={telegramIcon} alt="" /></Link></li>
            </ul>
          </div>
          <div className="header__contacts">
            <p className="header__phone">+7 (800) 505-54-61</p>
            <button className="header__phone-button" type="button"><img src={plusIcon} alt="" /></button>
          </div>
        </div>
      </div>
      <nav className="header__nav">
        <div className="header__nav-content">
          <Link to="/" className="logo">KUGOO</Link>
          <Link to="/page5" className="header__catalog"><img src={catalogIcon} alt="" />Каталог</Link>
          <div className="header__search">
            <button className="header__search-where" type="button">Везде<img src={dropdownIcon} alt="" /></button>
            <div className="header__search-field">
              <input className="header__search-input" type="text" placeholder="Искать самокат KUGOO" />
              <button className="header__search-button" type="button"><img src={searchIcon} alt="" /></button>
            </div>
          </div>
          <div className="header__actions">
            <Link to="" className="header__action"><img src={compareIcon} alt="" /></Link>
            <Link to="" className="header__action"><img src={heartIcon} alt="" /></Link>
            <Link to="" className="header__action"><img src={cartIcon} alt="" />Корзина</Link>
          </div>
        </div>
      </nav>
      <div className="header__bottom">
        <ul className="header__menu">
          <li><Link to="" className="header__menu-link">О магазине</Link></li>
          <li>
            <Link to="" className="header__menu-link">
              Доставка и оплата
              <span className="header__menu-badge">Доступная рассрочка</span>
            </Link>
          </li>
          <li><Link to="/page4" className="header__menu-link">Тест-драйв</Link></li>
          <li><Link to="" className="header__menu-link">Блог</Link></li>
          <li><Link to="" className="header__menu-link">Контакты</Link></li>
          <li>
            <Link to="" className="header__menu-link">
              Акции
              <span className="header__menu-badge">%</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
