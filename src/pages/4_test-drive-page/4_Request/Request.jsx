import { useState } from 'react';
import './Request.scss';
import requestImage from '../img/request.png';

export default function Request() {
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [sent, setSent] = useState(false);

  function changePhone(event) {
    setPhone(event.target.value);
    setSent(false);
  }

  function toggleAgreed() {
    setAgreed(!agreed);
  }

  function sendForm(event) {
    event.preventDefault();
    setSent(true);
    setPhone('');
  }

  return (
    <section className="request">
      <div className="request__box">
        <div className="request__content">
          <div className="request__head">
            <h1 className="section-title">НЕТ НУЖНОЙ МОДЕЛИ, КОТОРУЮ ХОТИТЕ ПРОТЕСТИРОВАТЬ?</h1>
            <p className="request__text">Оставьте заявку, и менеджер подберет нужный самокат</p>
          </div>
          <form className="request__form" onSubmit={sendForm}>
            <input
              className="request__phone"
              type="tel"
              placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"
              value={phone}
              onChange={changePhone}
              required
            />
            <button className="request__button" type="submit" disabled={!agreed}>
              {sent ? 'Заявка отправлена' : 'Оставить заявку на тест-драйв'}
            </button>
          </form>
          <div className="request__agree">
            <input type="checkbox" checked={agreed} onChange={toggleAgreed} />
            <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span></p>
          </div>
        </div>
        <img src={requestImage} alt="" className="request__image" />
      </div>
    </section>
  );
}
