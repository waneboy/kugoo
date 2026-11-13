import { Fragment } from 'react';
import './Scheme.scss';
import step1 from '../img/scheme/step-1.png';
import step2 from '../img/scheme/step-2.png';
import step3 from '../img/scheme/step-3.png';
import step4 from '../img/scheme/step-4.png';
import step5 from '../img/scheme/step-5.png';
import step6 from '../img/scheme/step-6.png';
import step7 from '../img/scheme/step-7.png';
import step8 from '../img/scheme/step-8.png';
import arrowRight from '../img/icons/scheme-arrow-right.svg';
import arrowLeft from '../img/icons/scheme-arrow-left.svg';
import arrowUp from '../img/icons/scheme-arrow-up.svg';
import arrowDown from '../img/icons/scheme-arrow-down.svg';

const TOP_LINE = [
  { icon: step1, title: 'Покупатель' },
  { icon: step2, title: 'Делает заказ' },
  { icon: step3, title: 'Оплачивает вам' },
  { icon: step4, title: 'Продавец (Вы)' },
];

const BOTTOM_LINE = [
  { icon: step5, title: 'Отправка покупателю' },
  { icon: step6, title: 'Товар' },
  { icon: step7, title: <>Поставщик (Мы) <br /> обрабатывает заказ</> },
  { icon: step8, title: <>Заказывает товар <br /> на адрес покупателя</> },
];

function SchemeLine({ steps, arrow }) {
  return (
    <div className="scheme__line">
      {steps.map((step, index) => (
        <Fragment key={index}>
          {index > 0 && <img src={arrow} alt="" />}
          <div className="scheme__step">
            <div className="scheme__icon"><img src={step.icon} alt="" /></div>
            <h4>{step.title}</h4>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default function Scheme() {
  return (
    <section className="scheme">
      <div className="scheme__content">
        <div className="scheme__head">
          <h1 className="section-title">ПОКУПАЙТЕ ТОВАР ТОГДА, КОГДА ПОЛУЧИТЕ НА НЕГО ЗАКАЗ И ОПЛАТУ ОТ СВОЕГО КЛИЕНТА</h1>
          <p className="scheme__text">За 4 года разработали удобную схему дропшипинга</p>
        </div>
        <div className="scheme__main">
          <SchemeLine steps={TOP_LINE} arrow={arrowRight} />
          <div className="scheme__turns">
            <div className="scheme__turn"><img src={arrowUp} alt="" /></div>
            <div className="scheme__turn"><img src={arrowDown} alt="" /></div>
          </div>
          <SchemeLine steps={BOTTOM_LINE} arrow={arrowLeft} />
        </div>
      </div>
    </section>
  );
}
