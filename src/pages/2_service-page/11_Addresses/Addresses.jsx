import './Addresses.scss';
import geoIcon from '../img/icons/geo.svg';
import phoneIcon from '../img/icons/phone.svg';
import warningIcon from '../img/icons/warning.svg';

const CENTERS = [
  { city: 'МОСКВА', street: 'Ткацкая улица, 5с16', time: 'Пн - Вс 10:00 - 19:00', phone: '+7 (499) 350-76-92', map: 'https://maps.app.goo.gl/XT6FQNeKo1NWhPpj9' },
  { city: 'САНКТ-ПЕТЕРБУРГ', street: 'Фрунзе улица, 2', time: 'Пн - Вс 10:00 - 20:00', phone: '+7 (499) 350-76-92', map: 'https://maps.app.goo.gl/rr8ncPhhSseRHcQE7' },
  { city: 'КРАСНОДАР', street: 'Восточно-Кругликовская улица, 86', time: 'Вт - Сб 10:00 - 20:00', phone: '+7 (499) 350-76-92', map: 'https://maps.app.goo.gl/azz85aAM5MqCrUzMA' },
];

export default function Addresses() {
  return (
    <section className="addresses">
      <div className="addresses__content">
        <h1 className="section-title">АДРЕСА СЕРВИСНЫХ ЦЕНТРОВ</h1>
        <div className="addresses__box">
          <div className="addresses__main">
            <div className="addresses__list">
              {CENTERS.map((center) => (
                <div className="addresses__item" key={center.city}>
                  <h2 className="addresses__city">{center.city}</h2>
                  <div className="addresses__place">
                    <img src={geoIcon} alt="" />
                    <div>
                      <h4 className="addresses__street">{center.street}</h4>
                      <p className="addresses__time">{center.time}</p>
                      <a href={center.map} target="_blank" className="text-link">Смотреть на карте</a>
                    </div>
                  </div>
                  <div className="addresses__phone">
                    <img src={phoneIcon} alt="" />
                    <h3>{center.phone}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="addresses__note">
              <img src={warningIcon} alt="" />
              <p>При себе иметь паспорт для прохождения через пропускной пункт</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
