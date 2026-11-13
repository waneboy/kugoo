import { useState } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ className, cards }) {
  const [preordered, setPreordered] = useState([]);

  function togglePreorder(index) {
    setPreordered((current) => (current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]));
  }

  return (
    <div className={className}>
      {cards.map((card, index) => (
        <ProductCard
          key={index}
          label={card.label}
          type={card.type}
          preordered={preordered.includes(index)}
          onBuyClick={() => togglePreorder(index)}
        />
      ))}
    </div>
  );
}
