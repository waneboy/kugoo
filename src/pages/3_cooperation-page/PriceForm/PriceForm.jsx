import { useState } from 'react';
import './PriceForm.scss';

export default function PriceForm({ className }) {
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
    <form className={`price-form${className ? ` ${className}` : ''}`} onSubmit={sendForm}>
      <div className="price-form__head">
        <h3 className="price-form__title">ПОЛУЧИТЕ ПРАЙС-ЛИСТ С ОПТОВЫМИ ЦЕНАМИ</h3>
        <p className="price-form__text">а также рассчитаем вашу прибыль от продажи товаров Kugoo</p>
      </div>
      <input
        className="price-form__phone"
        type="tel"
        placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"
        value={phone}
        onChange={changePhone}
        required
      />
      <button className="price-form__button" type="submit" disabled={!agreed}>
        {sent ? 'Заявка отправлена' : 'Скачать прайс-лист'}
      </button>
      <div className="price-form__agree">
        <input type="checkbox" checked={agreed} onChange={toggleAgreed} />
        <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span></p>
      </div>
    </form>
  );
}
