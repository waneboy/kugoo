import ProductList from '../../../components/ProductCard/ProductList.jsx';
import { HIT, NEW } from '../../../components/ProductCard/labels.js';
import './Bestsellers.scss';

export default function Bestsellers() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__content">
        <h1 className="bestsellers__title">ПОКУПАЙТЕ ПОПУЛЯРНЫЕ ТОВАРЫ БЕЗ НАЦЕНОК ПОСРЕДНИКОВ</h1>
        <ProductList className="bestsellers__list" cards={[HIT, NEW, HIT, NEW]} />
      </div>
    </section>
  );
}
