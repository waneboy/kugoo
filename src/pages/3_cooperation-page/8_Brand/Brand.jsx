import './Brand.scss';
import brandImage from '../img/brand.png';

export default function Brand() {
  return (
    <section className="brand">
      <div className="brand__content">
        <div className="brand__info">
          <h1 className="section-title">KUGOO — САМЫЙ ПОПУЛЯРНЫЙ БРЕНД ЭЛЕКТРОТРАНСПОРТА В РОССИИ</h1>
          <p className="brand__text">Количество поисковых запросов от потенциальных клиентов в 2020 г.
            по сравнению с 2019 г. выросло в 2 раза согласно сервису оценки
            спроса и популярности.</p>
          <p className="brand__text">Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос
            на продукцию от завода Jilong выше в несколько раз.</p>
        </div>
        <div className="brand__image">
          <img src={brandImage} alt="" />
        </div>
      </div>
    </section>
  );
}
