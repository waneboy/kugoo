import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Team.scss';
import repairIcon from '../img/team-repair.png';
import consultantIcon from '../img/team-consultant.png';
import member1 from '../img/team/member-1.png';
import member2 from '../img/team/member-2.png';
import member3 from '../img/team/member-3.png';
import member4 from '../img/team/member-4.png';
import member5 from '../img/team/member-5.png';

const MEMBERS = [
  { photo: member1, name: 'Дмитрий Никитенко', job: 'Руководитель сервисного центра' },
  { photo: member2, name: 'Анастасия Горина', job: 'Заместитель директора' },
  { photo: member3, name: 'Юлия Кортич', job: 'Менеджер по продажам' },
  { photo: member4, name: 'Сергей Бойко', job: 'Мастер по ремонту самокатов' },
  { photo: member5, name: 'Дмитрий Никитенко', job: 'Руководитель сервисного центра' },
];

const SLIDES = Array(9).fill(MEMBERS).flat();

export default function Team() {
  return (
    <section className="team">
      <div className="team__head">
        <h1 className="team__title">КОМАНДА СЕРВИСНОГО ЦЕНТРА</h1>
        <div className="team__features">
          <div className="team__feature">
            <img src={repairIcon} alt="" />
            <p>
              Специалисты сервисного центра <span>подготавливают самокаты </span>к отправке вам,{' '}
              <span>проводят техническое обслуживание, тюнингуют </span>и при необходимости{' '}
              <span>ремонтируют </span>их
            </p>
          </div>
          <div className="team__feature">
            <img src={consultantIcon} alt="" />
            <p>
              Консультант сервисного центра <span>сопровождает вас </span>на протяжении всего времени
              эксплуатации и <span>помогает решить возникающие вопросы.</span>
            </p>
          </div>
        </div>
      </div>
      <Swiper
        className="team__slider"
        modules={[Navigation]}
        navigation={true}
        speed={800}
        slidesPerView="auto"
        spaceBetween={30}
      >
        {SLIDES.map((member, index) => (
          <SwiperSlide key={index}>
            <Link to="" className="team__card">
              <img src={member.photo} alt="" />
              <div className="team__info">
                <h4 className="team__name">{member.name}</h4>
                <p className="team__job">{member.job}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
