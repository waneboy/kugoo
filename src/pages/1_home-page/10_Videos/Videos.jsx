import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Videos.scss';
import arrowIcon from '../img/icons/arrow.svg';
import playIcon from '../img/icons/play.svg';

const PREVIEWS = ['first', 'second', 'third'];
const VIDEOS = Array.from({ length: 27 }, (_, index) => ({
  preview: PREVIEWS[index % PREVIEWS.length],
  title: 'Крутой и городской? Обзор Kugoo XS Plus',
}));

export default function Videos() {
  return (
    <section className="videos">
      <div className="videos__content">
        <div className="videos__head">
          <div className="videos__head-top">
            <h1 className="videos__title">ВИДЕООБЗОРЫ</h1>
            <Link to="" className="videos__link">Смотреть все видеообзоры <img src={arrowIcon} alt="" /></Link>
          </div>
          <p className="videos__text">Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>
        </div>
        <Swiper
          className="videos__slider"
          modules={[Navigation]}
          navigation={true}
          speed={800}
          slidesPerView="auto"
          spaceBetween={30}
        >
          {VIDEOS.map((video, index) => (
            <SwiperSlide key={index}>
              <article className="videos__item">
                <div className={`videos__preview videos__preview--${video.preview}`}>
                  <button className="videos__play" type="button"><img src={playIcon} alt="" /></button>
                </div>
                <h5 className="videos__name">{video.title}</h5>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
