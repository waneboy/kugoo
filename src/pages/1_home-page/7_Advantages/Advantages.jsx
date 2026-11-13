import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Advantages.scss';
import arrowIcon from '../img/icons/arrow.svg';
import cartIcon from '../img/icons/advantage-cart.svg';
import walletIcon from '../img/icons/advantage-wallet.svg';
import guaranteeIcon from '../img/icons/advantage-guarantee.svg';
import deliveryIcon from '../img/icons/advantage-delivery.svg';
import discountIcon from '../img/icons/advantage-discount.svg';

const TABS = [
  {
    title: 'Интернет-магазин',
    cards: [
      { icon: cartIcon, title: 'Х товаров в каталоге', text: 'Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.' },
      { icon: walletIcon, title: '5 способов оплаты', text: 'Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».' },
      { icon: guaranteeIcon, title: 'Полная документация и гарантия 1 год', text: 'При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.' },
      { icon: deliveryIcon, title: 'Отправка заказа день в день', text: 'Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре' },
      { icon: discountIcon, title: 'Рассрочка без переплат', text: 'В нашем магазине можно приобрести любой товар в рассрочку', link: 'Подробнее про условия рассрочки' },
    ],
    extra: { title: 'Больше в сервисе', modifier: 'service' },
  },
  {
    title: 'Сервисный центр',
    cards: [
      { icon: cartIcon, title: 'Ремонт от 1 дня', text: 'Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.' },
      { icon: walletIcon, title: 'Гидроизоляция для долгой службы', text: 'Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.' },
      { icon: guaranteeIcon, title: 'Ремонтируем только то, что сломалось', text: 'Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.' },
      { icon: deliveryIcon, title: 'Даем гарантию 14 дней на ремонт' },
      { icon: discountIcon, title: 'Оригинальные запчасти', text: 'Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.' },
    ],
    extra: { title: 'Больше в каталоге', modifier: 'catalog' },
  },
];

export default function Advantages() {
  const [activeTab, setActiveTab] = useState(0);
  const { cards, extra } = TABS[activeTab];

  return (
    <section className="advantages">
      <div className="advantages__content">
        <div className="advantages__head">
          <h1 className="advantages__title">ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК</h1>
          <p className="advantages__text">и заботимся об удобстве покупателей</p>
        </div>
        <div className="advantages__tabs">
          {TABS.map((tab, index) => (
            <button
              className={`tab${activeTab === index ? ' tab--active' : ''}`}
              type="button"
              key={tab.title}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="advantages__list">
          {cards.map((card) => (
            <article className="advantages__card" key={card.title}>
              <img src={card.icon} alt="" />
              <div className="advantages__card-info">
                <h3 className="advantages__card-title">{card.title}</h3>
                {card.text && (
                  <div className="advantages__card-text">
                    <p>{card.text}</p>
                    {card.link && <Link to="">{card.link}</Link>}
                  </div>
                )}
              </div>
            </article>
          ))}
          <article className={`advantages__extra advantages__extra--${extra.modifier}`}>
            <div className="advantages__extra-info">
              <h3 className="advantages__extra-title">{extra.title}</h3>
              <Link to="" className="advantages__extra-link">Перейти <img src={arrowIcon} alt="" /></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
