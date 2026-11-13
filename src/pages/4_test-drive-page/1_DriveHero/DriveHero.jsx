import './DriveHero.scss';
import geoIcon from '../img/icons/geo.svg';
import scooterIcon from '../img/icons/scooter.svg';
import energyIcon from '../img/icons/energy.svg';

export default function DriveHero() {
  return (
    <section className="drive-hero">
      <div className="drive-hero__banner">
        <div className="drive-hero__content">
          <div className="drive-hero__place">
            <img src={geoIcon} alt="" />
            <p className="drive-hero__address">Восточно-Кругликовская улица, 86</p>
            <p className="drive-hero__time">Вт - Сб 10:00 - 20:00</p>
          </div>
          <div className="drive-hero__head">
            <h1 className="drive-hero__title">ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ ЭЛЕКТРОСАМОКАТОВ</h1>
            <p className="drive-hero__text">в Москве без ограничения по времени</p>
          </div>
          <div className="drive-hero__benefits">
            <div className="drive-hero__benefit">
              <div className="drive-hero__benefit-icon"><img src={scooterIcon} alt="" /></div>
              <p>Поймете, какая модель вам подходит</p>
            </div>
            <div className="drive-hero__benefit">
              <div className="drive-hero__benefit-icon"><img src={energyIcon} alt="" /></div>
              <p>Проверите лучшие самокаты в деле</p>
            </div>
          </div>
          <button className="drive-hero__button" type="button">Записаться</button>
        </div>
      </div>
    </section>
  );
}
