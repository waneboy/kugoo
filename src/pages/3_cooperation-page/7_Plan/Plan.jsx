import PriceForm from '../PriceForm/PriceForm.jsx';
import './Plan.scss';
import checkWhiteIcon from '../img/icons/check-white.svg';

const PLAN = [
  'индивидуальный прайс-лист',
  'расчет прогнозируемой прибыли и сроков окупаемости',
  'бренд-зону Kugoo',
  'разработку сайта',
  'и еще +15 услуг под ключ',
];

export default function Plan() {
  return (
    <section className="plan">
      <div className="plan__box">
        <div className="plan__content">
          <div className="plan__info">
            <span className="plan__label">Бесплатно</span>
            <h1 className="section-title plan__title">ПОЛУЧИТЕ ГОТОВЫЙ ПЛАН РАЗВИТИЯ БИЗНЕСА <br /> ПО ПРОДАЖЕ ТОВАРОВ KUGOO</h1>
            <div className="plan__list">
              <h5 className="plan__list-title">Подготовим для вас бизнес-план, который включает:</h5>
              <div className="plan__items">
                {PLAN.map((item) => (
                  <div className="plan__item" key={item}>
                    <img src={checkWhiteIcon} alt="" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PriceForm className="plan__form" />
        </div>
      </div>
    </section>
  );
}
