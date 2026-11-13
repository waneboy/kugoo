import './ProductCard.scss';
import scooterImage from './img/scooter.png';
import compareIcon from './img/compare.svg';
import batteryIcon from './img/battery.svg';
import powerIcon from './img/power.svg';
import speedIcon from './img/speed.svg';
import timeIcon from './img/time.svg';
import cartIcon from './img/cart.svg';
import heartIcon from './img/heart.svg';

const PRODUCT = {
  name: 'Kugoo Kirin M4',
  image: scooterImage,
  stats: [
    { icon: batteryIcon, text: '2000 mAh' },
    { icon: powerIcon, text: '1,2 л.с.' },
    { icon: speedIcon, text: '60 км/ч' },
    { icon: timeIcon, text: '5 часов' },
  ],
  oldPrice: '39 900 ₽',
  price: '29 900 ₽',
};

export default function ProductCard({ label, type, preordered, onBuyClick }) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <div className="product-card__labels">
          <span className={`product-card__label product-card__label--${type}`}>{label}</span>
          <div className="product-card__compare"><img src={compareIcon} alt="" /></div>
        </div>
        <img src={PRODUCT.image} alt="" className="product-card__image" />
      </div>
      <div className="product-card__body">
        <h2 className="product-card__name">{PRODUCT.name}</h2>
        <div className="product-card__stats">
          {PRODUCT.stats.map((stat) => (
            <div className="product-card__stat" key={stat.text}>
              <img src={stat.icon} alt="" />
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
        <div className="product-card__panel">
          <div className="product-card__prices">
            <p className="product-card__old-price">{PRODUCT.oldPrice}</p>
            <p className="product-card__price">{PRODUCT.price}</p>
          </div>
          <div className="product-card__buttons">
            <button className="product-card__button" type="button"><img src={cartIcon} alt="" /></button>
            <button className="product-card__button" type="button"><img src={heartIcon} alt="" /></button>
          </div>
        </div>
        <button
          className={`product-card__buy${preordered ? ' product-card__buy--preordered' : ''}`}
          type="button"
          onClick={onBuyClick}
        >
          {preordered ? 'Оформить предзаказ' : 'Купить в 1 клик'}
        </button>
      </div>
    </article>
  );
}
