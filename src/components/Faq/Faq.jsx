import { useState } from 'react';
import './Faq.scss';
import plusIcon from './img/plus.svg';

export default function Faq({ questions, openIndex = null, long = false }) {
  const [openedIndex, setOpenedIndex] = useState(openIndex);

  function toggleQuestion(index) {
    setOpenedIndex((current) => (current === index ? null : index));
  }

  return (
    <section className={`faq${long ? ' faq--long' : ''}`}>
      <div className="faq__content">
        <h1 className="faq__title">ОТВЕЧАЕМ НА ВОПРОСЫ ПОЛЬЗОВАТЕЛЕЙ</h1>
        <div className="faq__list">
          {questions.map((item, index) => (
            <article className={`faq__item${openedIndex === index ? ' faq__item--open' : ''}`} key={index}>
              <div className="faq__question" onClick={() => toggleQuestion(index)}>
                <h4>{item.question}</h4>
                <img src={plusIcon} alt="" />
              </div>
              <p className="faq__answer">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
