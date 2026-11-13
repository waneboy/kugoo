import { useState } from 'react';
import './Callback.scss';

export default function Callback() {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  function changePhone(event) {
    setPhone(event.target.value);
    setSent(false);
  }

  function sendForm(event) {
    event.preventDefault();
    setSent(true);
    setPhone('');
  }

  return (
    <section className="callback">
      <div className="callback__box">
        <div className="callback__content">
          <h1 className="callback__title">ДАВАЙТЕ ОБСУДИМ УСЛОВИЯ СОТРУДНИЧЕСТВА, КОТОРЫЕ ПОДХОДЯТ ИМЕННО ДЛЯ ВАШЕЙ КОМПАНИИ</h1>
          <form className="callback__form" onSubmit={sendForm}>
            <input
              className="callback__phone"
              type="tel"
              placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"
              value={phone}
              onChange={changePhone}
              required
            />
            <button className="callback__button" type="submit">
              {sent ? 'Заявка отправлена' : 'Скачать прайс-лист'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
