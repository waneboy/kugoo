import { Link } from 'react-router-dom';
import './Categories.scss';
import managerImage from '../img/manager.png';

const CATEGORIES = [
  { title: 'Робот-пылесос', price: 'от 29 900 ₽', modifier: 'vacuum' },
  { title: 'Электровелосипеды', price: 'от 29 900 ₽', modifier: 'bike' },
  { title: 'Весы', price: 'от 29 900 ₽', modifier: 'scales' },
  { title: 'Робот-пылесос', price: 'от 29 900 ₽', modifier: 'vacuum' },
  { title: 'Весы', price: 'от 29 900 ₽', modifier: 'scales' },
  { title: 'Робот-пылесос', price: 'от 29 900 ₽', modifier: 'vacuum' },
  { title: 'Электровелосипеды', price: 'от 29 900 ₽', modifier: 'bike' },
  { title: 'Весы', price: 'от 29 900 ₽', modifier: 'scales' },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__content">
        <div className="categories__head">
          <h1 className="categories__title">ПОПУЛЯРНЫЕ КАТЕГОРИИ</h1>
          <div className="categories__manager">
            <img src={managerImage} alt="" />
            <div className="categories__manager-info">
              <p className="categories__manager-text">Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
              <Link to="" className="categories__manager-link">Задать вопрос</Link>
            </div>
          </div>
        </div>
        <div className="categories__list">
          {CATEGORIES.map((category, index) => (
            <article className={`categories__card categories__card--${category.modifier}`} key={index}>
              <div className="categories__info">
                <h4 className="categories__name">{category.title}</h4>
                <p className="categories__price">{category.price}</p>
              </div>
            </article>
          ))}
        </div>
        <Link to="" className="show-all">Смотреть все</Link>
      </div>
    </section>
  );
}
