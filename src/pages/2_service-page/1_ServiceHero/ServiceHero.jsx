import './ServiceHero.scss';
import locationIcon from '../img/icons/location.svg';
import guardIcon from '../img/icons/guard.svg';
import gearIcon from '../img/icons/gear.svg';

const BENEFITS = [
  { icon: locationIcon, text: 'Сервисные центры в Москве, \n Санкт-Петербурге и Краснодаре' },
  { icon: guardIcon, text: 'Гарантия 14 дней \n на ремонт' },
  { icon: gearIcon, text: 'Всегда в наличии оригинальные \n запчасти от производителя' },
];

export default function ServiceHero() {
  return (
    <section className="service-hero">
      <div className="service-hero__banner">
        <div className="service-hero__content">
          <div className="service-hero__head">
            <h1 className="service-hero__title">РЕМОНТ И ОБСЛУЖИВАНИЕ ТОВАРОВ KUGOO KIRIN</h1>
            <p className="service-hero__text">в фирменных сервисных центрах</p>
          </div>
          <div className="service-hero__benefits">
            {BENEFITS.map((benefit) => (
              <div className="service-hero__benefit" key={benefit.text}>
                <div className="service-hero__benefit-icon"><img src={benefit.icon} alt="" /></div>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
          <button className="service-hero__button" type="button">Записаться</button>
        </div>
      </div>
    </section>
  );
}
