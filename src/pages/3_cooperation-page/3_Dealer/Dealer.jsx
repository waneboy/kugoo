import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Dealer.scss';
import checkIcon from '../img/icons/check.svg';
import certificateImage from '../img/certificate.png';

const BENEFITS = [
  'Гарантию на товары 1 месяц и возможность приобрести годовую гарантию',
  'Медиаконтент, который можно разместить на своем сайте и соцсетях',
  'Удобные способы оплаты — наличный и безналичный расчет',
  'Отсутствие демпинга на рынке за счет контролируемой МРЦ',
];

const STATS = [
  { title: <>До <span>25%</span></>, text: 'ваша прибыль с продажи \n единицы товара Kugoo' },
  { title: <>от <span>3 ШТ.</span></>, text: 'минимальная \n оптовая партия' },
];

const CERTIFICATES = Array(8).fill(certificateImage);

export default function Dealer() {
  return (
    <section className="dealer">
      <div className="dealer__content">
        <div className="dealer__info">
          <div>
            <h1 className="section-title">ВЫБИРАЙТЕ ПОПУЛЯРНЫЕ ТОВАРЫ БЕЗ НАЦЕНОК ПОСРЕДНИКОВ</h1>
            <p className="dealer__text">являясь официальным дилером Kugoo в России</p>
          </div>
          <div className="dealer__benefits">
            <h4 className="dealer__benefits-title">Сотрудничая с нами, вы получите:</h4>
            <div className="dealer__list">
              {BENEFITS.map((benefit) => (
                <div className="dealer__item" key={benefit}>
                  <img src={checkIcon} alt="" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="dealer__stats">
            {STATS.map((stat) => (
              <div className="dealer__stat" key={stat.text}>
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dealer__aside">
          <div className="dealer__percent">
            <h2>93%</h2>
            <p>партнеров  становятся постоянными, благодаря нашему подходу</p>
          </div>
          <Swiper
            className="dealer__slider"
            modules={[Navigation]}
            navigation={true}
            speed={800}
            slidesPerView={1}
            spaceBetween={0}
          >
            {CERTIFICATES.map((certificate, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={certificate} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
