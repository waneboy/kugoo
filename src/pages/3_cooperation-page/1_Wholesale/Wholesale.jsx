import PriceForm from '../PriceForm/PriceForm.jsx';
import './Wholesale.scss';
import walletIcon from '../img/icons/wallet.svg';
import boxIcon from '../img/icons/box.svg';
import updateIcon from '../img/icons/update.svg';
import pictureIcon from '../img/icons/picture.svg';

const BENEFITS = [
  { icon: walletIcon, text: 'Отсутствие демпинга — \n контроль цен и МРЦ' },
  { icon: boxIcon, text: 'Бесплатная доставка \n до любой ТК' },
  { icon: updateIcon, text: 'Беспроблемный \n возврат и замена брака' },
  { icon: pictureIcon, text: 'Готовый медиаконтент \n для вашего сайта и соцсетей' },
];

export default function Wholesale() {
  return (
    <section className="wholesale">
      <div className="wholesale__box">
        <div className="wholesale__content">
          <div className="wholesale__info">
            <div className="wholesale__head">
              <h1 className="section-title">ПОКУПАЙТЕ ТОВАРЫ KUGOO ПО ОПТОВЫМ ЦЕНАМ <br /> ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
              <p className="wholesale__text">Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара</p>
            </div>
            <div className="wholesale__benefits">
              {BENEFITS.map((benefit) => (
                <div className="wholesale__benefit" key={benefit.text}>
                  <div className="wholesale__benefit-icon"><img src={benefit.icon} alt="" /></div>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
          <PriceForm />
        </div>
      </div>
    </section>
  );
}
