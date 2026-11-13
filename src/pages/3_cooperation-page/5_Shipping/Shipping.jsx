import './Shipping.scss';
import mapImage from '../img/map.png';

export default function Shipping() {
  return (
    <section className="shipping">
      <div className="shipping__content">
        <div className="shipping__head">
          <h1 className="shipping__title">
            ДОСТАВЛЯЕМ СО СКЛАДОВ ПО <span>МОСКВЕ, <br /> КРАСНОДАРУ
            И МИНСКУ БЕСПЛАТНО</span>, ПО РОССИИ — <br /> ЛЮБОЙ
            ТРАНСПОРТНОЙ КОМПАНИЕЙ НА ВАШ ВЫБОР
          </h1>
          <p className="shipping__text">
            Ежегодно оформляем и доставляем более 1 000 оптовых
            и розничных заказов. Всегда в наличии на складах весь
            ассортимент, представленный в каталоге.
          </p>
        </div>
        <div>
          <img src={mapImage} alt="" />
        </div>
      </div>
    </section>
  );
}
