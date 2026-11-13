import { useState } from 'react';
import './RepairPrices.scss';

function makeModels(names, tabIndex) {
  return names.map((name, modelIndex) => ({
    name,
    prices: Array.from({ length: 6 }, (_, serviceIndex) => (modelIndex + 1) * 1000 + 510 + tabIndex * 10 + serviceIndex * 100),
  }));
}

const TABS = [
  { title: 'Электросамокаты', models: makeModels(['Kugoo Kirin M4', 'Kugoo Kirin S2', 'Kugoo Kirin M5', 'Kugoo Kirin M7', 'Kugoo Kirin M8'], 0) },
  { title: 'Электровелосипеды', models: makeModels(['Электровелосипед 1', 'Электровелосипед 2', 'Электровелосипед 3', 'Электровелосипед 4', 'Электровелосипед 5'], 1) },
  { title: 'Робот-пылесос', models: makeModels(['Робот-пылесос 1', 'Робот-пылесос 2', 'Робот-пылесос 3', 'Робот-пылесос 4', 'Робот-пылесос 5'], 2) },
  { title: 'Электровелосипеды', models: makeModels(['Электровелосипед 6', 'Электровелосипед 7', 'Электровелосипед 8', 'Электровелосипед 9', 'Электровелосипед 10'], 3) },
];

export default function RepairPrices() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeModel, setActiveModel] = useState(0);
  const { models } = TABS[activeTab];

  function switchTab(index) {
    setActiveTab(index);
    setActiveModel(0);
  }

  return (
    <section className="repair-prices">
      <div className="repair-prices__content">
        <div className="repair-prices__head">
          <div className="repair-prices__heading">
            <h1 className="repair-prices__title">СТОИМОСТЬ РЕМОНТА</h1>
            <p className="repair-prices__text">Точную стоимость работ вам озвучит специалист сервисного центра после диагностики. Примерные цены на ремонт без учета запчастей смотрите ниже.</p>
          </div>
          <div className="repair-prices__tabs">
            {TABS.map((tab, index) => (
              <button
                className={`tab${activeTab === index ? ' tab--active' : ''}`}
                type="button"
                key={index}
                onClick={() => switchTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="repair-prices__body">
          <div className="repair-prices__models">
            {models.map((model, index) => (
              <button
                className={`repair-prices__model${activeModel === index ? ' repair-prices__model--active' : ''}`}
                type="button"
                key={model.name}
                onClick={() => setActiveModel(index)}
              >
                {model.name}
              </button>
            ))}
          </div>
          <div className="repair-prices__list">
            {models[activeModel].prices.map((price) => (
              <div className="repair-prices__row" key={price}>
                <p>Замена/установка контроллера</p>
                <h4>от {price} руб.</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
