import PriceForm from '../PriceForm/PriceForm.jsx';
import './Offer.scss';
import checkIcon from '../img/icons/check.svg';

const BENEFITS = [
  'Ознакомитесь с актуальным каталогом;',
  'Узнаете, какие категории товаров пользуются наибольшим спросом;',
  'Получите доступ к выгодным ценам на закупку оптом.',
];

export default function Offer() {
  return (
    <section className="offer">
      <div className="offer__box">
        <div className="offer__content">
          <div className="offer__info">
            <h1 className="section-title">ОБСУДИТЕ ИНДИВИДУАЛЬНОЕ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ С ЛИЧНЫМ МЕНЕДЖЕРОМ</h1>
            <div className="offer__list">
              {BENEFITS.map((benefit) => (
                <div className="offer__item" key={benefit}>
                  <img src={checkIcon} alt="" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <PriceForm className="offer__form" />
        </div>
      </div>
    </section>
  );
}
