import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard/ProductCard.jsx';
import { HIT, NEW } from '../../../components/ProductCard/labels.js';
import './Catalog.scss';

const CARDS_COUNT = 8;

const TABS = [
  { title: 'Хиты продаж', cards: Array.from({ length: CARDS_COUNT }, (_, index) => (index % 2 === 0 ? HIT : NEW)) },
  { title: 'Для города', cards: Array(CARDS_COUNT).fill({ label: 'Для города', type: 'new' }) },
  { title: 'Для взрослых', cards: Array(CARDS_COUNT).fill({ label: 'Для взрослых', type: 'hit' }) },
  { title: 'Для детей', cards: Array(CARDS_COUNT).fill({ label: 'Для детей', type: 'new' }) },
];

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(0);
  const [preordered, setPreordered] = useState([]);

  function togglePreorder(id) {
    setPreordered((current) => (current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]));
  }

  return (
    <section className="catalog">
      <div className="catalog__content">
        <div className="catalog__head">
          <h1 className="catalog__title">ЭЛЕКТРОСАМОКАТЫ</h1>
          <div className="catalog__tabs">
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
        </div>
        <div className="catalog__list">
          {TABS[activeTab].cards.map((card, index) => (
            <ProductCard
              key={index}
              label={card.label}
              type={card.type}
              preordered={preordered.includes(`${activeTab}-${index}`)}
              onBuyClick={() => togglePreorder(`${activeTab}-${index}`)}
            />
          ))}
        </div>
        <Link to="" className="show-all">Смотреть все</Link>
      </div>
    </section>
  );
}
