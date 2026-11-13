import ProductList from '../../../components/ProductCard/ProductList.jsx';
import { HIT, NEW } from '../../../components/ProductCard/labels.js';
import './Popular.scss';

export default function Popular() {
  return (
    <section className="popular">
      <div className="popular__content">
        <h1 className="popular__title">ЧАСТО ПОКУПАЮТ</h1>
        <ProductList className="popular__list" cards={[HIT, NEW, HIT, NEW]} />
      </div>
    </section>
  );
}
