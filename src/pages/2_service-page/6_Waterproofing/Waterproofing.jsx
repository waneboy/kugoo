import { useState } from 'react';
import './Waterproofing.scss';

const MODELS = [
  'Kugoo S3', 'Kugoo S3 Pro', 'Kugoo S1', 'Kugoo M2 Pro', 'Kugoo HX', 'Kugoo HX Pro', 'Kugoo ES3', 'Kugoo G-Max', 'Kugoo C1',
  'Kugoo M2', 'Kugoo Max Speed', 'Kugoo M4', 'Kugoo M4 Pro 13/17/18 Ah', 'Kugoo M5', 'Kugoo G1', 'Kugoo G2 Pro', 'Kugoo G-Booster', 'Kugoo GX',
];

const EXPENSIVE = ['Kugoo ES3', 'Kugoo G-Max', 'Kugoo C1', 'Kugoo G2 Pro', 'Kugoo G-Booster', 'Kugoo GX'];

const TABS = [
  { title: 'Гидроизоляция', price: '2 790 ₽', expensivePrice: '3 490 ₽' },
  { title: 'Настройка', price: '3 790 ₽', expensivePrice: '4 490 ₽' },
  { title: 'Гидроизоляция + настройка', price: '4 790 ₽', expensivePrice: '5 490 ₽' },
];

export default function Waterproofing() {
  const [activeTab, setActiveTab] = useState(0);
  const { price, expensivePrice } = TABS[activeTab];

  return (
    <section className="waterproofing">
      <div className="waterproofing__content">
        <div className="waterproofing__head">
          <h1 className="waterproofing__title">СТОИМОСТЬ ГИДРОИЗОЛЯЦИИ И НАСТРОЙКИ</h1>
          <p className="waterproofing__text">Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>
        </div>
        <div className="waterproofing__tabs">
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
        <div className="waterproofing__list">
          {MODELS.map((model) => (
            <div className="waterproofing__cell" key={model}>
              <p>{model}</p>
              <h1>{EXPENSIVE.includes(model) ? expensivePrice : price}</h1>
            </div>
          ))}
        </div>
        <button className="order-button" type="button">Заказать гидроизоляцию</button>
      </div>
    </section>
  );
}
