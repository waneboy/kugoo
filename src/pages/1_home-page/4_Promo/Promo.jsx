import { Link } from 'react-router-dom';
import './Promo.scss';

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__banner">
        <div className="promo__content">
          <span className="promo__label">Акция</span>
          <h2 className="promo__title">БЕСПЛАТНАЯ ДОСТАВКА ЭЛЕКТРОСАМОКАТОВ ПО РОССИИ ДО 01.09</h2>
          <Link to="" className="promo__link">Подробнее</Link>
        </div>
      </div>
    </section>
  );
}
