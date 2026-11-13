import ProductList from '../../../components/ProductCard/ProductList.jsx';
import { HIT, NEW } from '../../../components/ProductCard/labels.js';
import './Models.scss';

export default function Models() {
  return (
    <section className="models">
      <div className="models__content">
        <h1 className="section-title models__title">СЕЙЧАС ДЛЯ ТЕСТ ДРАЙВА И ОБУЧЕНИЯ ДОСТУПНЫ СЛЕДУЮЩИЕ МОДЕЛИ</h1>
        <ProductList className="models__list" cards={[HIT, NEW, HIT, NEW]} />
      </div>
    </section>
  );
}
