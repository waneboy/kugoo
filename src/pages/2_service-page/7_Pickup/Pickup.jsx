import './Pickup.scss';
import checkIcon from '../img/icons/check.svg';

const PRICES = ['600 руб. в одну сторону', '1000 руб. туда-обратно'];

export default function Pickup() {
  return (
    <section className="pickup">
      <div className="pickup__banner">
        <div className="pickup__content">
          <div className="pickup__head">
            <h1 className="pickup__title">ЗАБЕРЕМ ВАШ САМОКАТ ДЛЯ РЕМОНТА И ВЕРНЕМ ОБРАТНО</h1>
            <p className="pickup__text">Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
          </div>
          <div className="pickup__prices">
            <h5 className="pickup__prices-title">Что дает гидроизоляция:</h5>
            <div className="pickup__rows">
              {PRICES.map((price) => (
                <div className="pickup__row" key={price}>
                  <img src={checkIcon} alt="" />
                  <p>{price}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="order-button" type="button">Заказать доставку</button>
        </div>
      </div>
    </section>
  );
}
