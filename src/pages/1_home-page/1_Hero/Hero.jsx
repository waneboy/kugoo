import { Link } from 'react-router-dom';
import './Hero.scss';
import yandexIcon from '../img/icons/yandex.svg';
import starIcon from '../img/icons/star.svg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__banner">
        <div className="hero__content">
          <span className="hero__label">Новинка</span>
          <div className="hero__info">
            <h1 className="hero__title">ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
            <p className="hero__text">с бесплатной доставкой по РФ от 1 дня</p>
            <Link to="" className="hero__link">Перейти в каталог</Link>
          </div>
          <div className="hero__slider">
            <button type="button"></button> 
            <p>1 - — 5</p>
            <button type="button"></button>
          </div>
        </div>
      </div>
      <div className="hero__benefits">
        <div className="hero__benefit">
          <h2 className="hero__benefit-title">ГАРАНТИЯ 1 ГОД</h2>
          <p className="hero__benefit-text">на весь ассортимент</p>
        </div>
        <div className="hero__benefit">
          <h2 className="hero__benefit-title">РАССРОЧКА</h2>
          <p className="hero__benefit-text">от 6 месяцев</p>
        </div>
        <div className="hero__benefit">
          <h2 className="hero__benefit-title">ПОДАРКИ</h2>
          <p className="hero__benefit-text">и бонусы к покупкам</p>
        </div>
        <div className="hero__rating">
          <img src={yandexIcon} alt="" />
          <div className="hero__rating-info">
            <p className="hero__rating-text">Яндекс отзывы</p>
            <span className="hero__rating-value"><img src={starIcon} alt="" />4,9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
