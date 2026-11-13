import { Link } from 'react-router-dom';
import './Socials.scss';
import arrowIcon from '../img/icons/arrow.svg';
import vkIcon from '../img/icons/social-vk-white.svg';
import instagramIcon from '../img/icons/social-instagram-white.svg';
import youtubeIcon from '../img/icons/social-youtube-white.svg';
import telegramIcon from '../img/icons/social-telegram-white.svg';

const SOCIALS = [
  { icon: vkIcon, name: 'Вконтакте', count: '3 300', modifier: 'vk' },
  { icon: instagramIcon, name: 'Instagram', count: '10 602', modifier: 'instagram' },
  { icon: youtubeIcon, name: 'YouTube', count: '3 603', modifier: 'youtube' },
  { icon: telegramIcon, name: 'Telegram', count: '432', modifier: 'telegram' },
];

export default function Socials() {
  return (
    <section className="socials">
      <div className="socials__content">
        <div className="socials__info">
          <h1 className="section-title">ОБЩАЕМСЯ С КЛИЕНТАМИ, ЧТОБЫ ЗНАТЬ ПОЖЕЛАНИЯ И ПРЕДЛАГАТЬ ЛУЧШИЙ АССОРТИМЕНТ И СЕРВИС</h1>
          <p className="socials__text">И еще приняли активное участие в выставке «Велокульт 2021»</p>
          <Link to="" className="text-link">Смотреть как это было <img src={arrowIcon} alt="" /></Link>
        </div>
        <div className="socials__list">
          {SOCIALS.map((social) => (
            <div className={`socials__item socials__item--${social.modifier}`} key={social.modifier}>
              <div className="socials__name">
                <img src={social.icon} alt="" />
                <h5>{social.name}</h5>
              </div>
              <p>{social.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
