import { Link } from 'react-router-dom';
import './About.scss';
import arrowWhiteIcon from '../img/icons/arrow-white.svg';
import listMarker from '../img/list-marker.png';

const BENEFITS = [
  'цены от завода-изготовителя Jilong;',
  'бесплатный тест-драйв самокатов;',
  'фирменную гарантию 1 год;',
  'ремонт и обслуживание от 1 дня в собственном сервисном центре;',
  'более 1 000 запчастей и аксессуаров в наличии',
];

export default function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__image">
          <div className="about__drive">
            <div className="about__drive-info">
              <h4 className="about__drive-title">Тест-драйв в Москве</h4>
              <p className="about__drive-text">Оцените все преимущества самокатов лично</p>
            </div>
            <Link to="" className="about__drive-link">Подробнее <img src={arrowWhiteIcon} alt="" /></Link>
          </div>
        </div>
        <div className="about__info">
          <div className="about__head">
            <h1 className="about__title">KUGOO-RUSSIA — ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР KUGOO KIRIN В РОССИИ</h1>
            <p className="about__text">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
          </div>
          <div className="about__benefits">
            <h5 className="about__benefits-title">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h5>
            <div className="about__list">
              {BENEFITS.map((benefit) => (
                <div className="about__item" key={benefit}>
                  <img src={listMarker} alt="" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <Link to="" className="about__link">Смотреть сертификат</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
