import { Link } from 'react-router-dom';
import './Offers.scss';
import arrowIcon from '../img/icons/arrow.svg';

const OFFERS = [
  { title: 'ПОДБОР МОДЕЛИ ЭЛЕКТРОСАМОКАТА', text: 'Пройдите тест и выберите электросамокат по своим критериям', modifier: 'selection' },
  { title: 'СЕРВИСНОЕ ОБСЛУЖИВАНИЕ', text: 'Крупнейший сервисный центр в России для продуктов Kugoo', modifier: 'service' },
];

export default function Offers() {
  return (
    <section className="offers">
      <div className="offers__content">
        {OFFERS.map((offer) => (
          <article className={`offers__card offers__card--${offer.modifier}`} key={offer.modifier}>
            <div className="offers__info">
              <h2 className="offers__title">{offer.title}</h2>
              <p className="offers__text">{offer.text}</p>
              <Link to="" className="offers__link">Подобрать модель <img src={arrowIcon} alt="" /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
