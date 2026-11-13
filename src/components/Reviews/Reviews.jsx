import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import './Reviews.scss';
import arrowIcon from './img/arrow.svg';
import starsIcon from './img/stars.svg';
import avatarImage from './img/avatar.png';
import photo1 from './img/photo-1.jpg';
import photo2 from './img/photo-2.jpg';
import photo3 from './img/photo-3.jpg';
import photo4 from './img/photo-4.jpg';
import photo5 from './img/photo-5.jpg';
import photo6 from './img/photo-6.jpg';
import photo7 from './img/photo-7.jpg';
import photo8 from './img/photo-8.jpg';
import photo9 from './img/photo-9.jpg';
import photo10 from './img/photo-10.jpg';
import photo11 from './img/photo-11.jpg';
import photo12 from './img/photo-12.jpg';

const REVIEW = {
  avatar: avatarImage,
  name: 'Илья М.',
  status: 'Знаток города 2 уровня',
  date: '23 сентября 2020',
  text: 'Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а если чего нет сейчас в наличии, то можно без проблем заказать на сайте, так что всем рекомендую!',
};

const FIRST_SET = [{ photo: photo1 }, { photo: photo2 }, { photo: photo3, review: REVIEW }, { photo: photo4, review: REVIEW }, { photo: photo5 }];
const SECOND_SET = [
  { photo: photo6 }, { photo: photo7 }, { photo: photo8, review: REVIEW }, { photo: photo9 },
  { photo: photo10 }, { photo: photo11 }, { photo: photo12, review: REVIEW },
];

const ITEMS = [...Array(8).fill(FIRST_SET).flat(), ...Array(8).fill(SECOND_SET).flat()];
const ROWS = [ITEMS.slice(0, ITEMS.length / 2), ITEMS.slice(ITEMS.length / 2)];

export default function Reviews({ title }) {
  return (
    <section className="reviews">
      <div className="reviews__content">
        <div className="reviews__head">
          <h1 className="reviews__title">{title}</h1>
          <Link to="" className="reviews__link">Читать отзывы на Яндекс <img src={arrowIcon} alt="" /></Link>
        </div>
        <Swiper
          className="reviews__slider"
          modules={[FreeMode, Mousewheel]}
          slidesPerView="auto"
          grabCursor={true}
          resistanceRatio={0.85}
          freeMode={{
            enabled: true,
            momentum: true,
            sticky: false,
            momentumVelocityRatio: 1,
            momentumRatio: 0.3,
            minimumVelocity: 0.02,
          }}
        >
          <SwiperSlide>
            <div className="reviews__rows">
              {ROWS.map((row, rowIndex) => (
                <div className="reviews__row" key={rowIndex}>
                  {row.map((item, index) => (
                    <article className="reviews__item" key={index}>
                      <img src={item.photo} alt="" className="reviews__photo" draggable={false} />
                      {item.review && (
                        <div className="reviews__card">
                          <div className="reviews__author">
                            <img src={item.review.avatar} alt="" />
                            <div className="reviews__author-info">
                              <h4 className="reviews__name">{item.review.name}</h4>
                              <p className="reviews__status">{item.review.status}</p>
                            </div>
                          </div>
                          <div className="reviews__rate">
                            <img src={starsIcon} alt="" />
                            <p>{item.review.date}</p>
                          </div>
                          <p className="reviews__text">{item.review.text}</p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
