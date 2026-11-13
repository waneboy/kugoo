import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Blog.scss';
import dateIcon from '../img/icons/date.svg';
import viewsIcon from '../img/icons/views.svg';

const IMAGES = ['first', 'second', 'third', 'fourth'];
const ARTICLES = Array.from({ length: 12 }, (_, index) => ({
  image: IMAGES[index % IMAGES.length],
  title: 'Как правильно заряжать электросамокат',
  text: 'Один из первых вопросов, который волнует после покупки электросамоката.',
  date: '01.09.2021',
  views: '53',
}));

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog__content">
        <h1 className="blog__title">НОВЫЕ СТАТЬИ В БЛОГЕ</h1>
        <Swiper
          className="blog__slider"
          modules={[Navigation]}
          navigation={true}
          speed={800}
          slidesPerView="auto"
          spaceBetween={30}
        >
          {ARTICLES.map((article, index) => (
            <SwiperSlide key={index}>
              <Link to="" className="blog__card">
                <div className={`blog__image blog__image--${article.image}`}></div>
                <div className="blog__info">
                  <h3 className="blog__name">{article.title}</h3>
                  <p className="blog__text">{article.text}</p>
                  <div className="blog__stats">
                    <div className="blog__stat"><img src={dateIcon} alt="" /><p>{article.date}</p></div>
                    <div className="blog__stat"><img src={viewsIcon} alt="" /><p>{article.views}</p></div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
