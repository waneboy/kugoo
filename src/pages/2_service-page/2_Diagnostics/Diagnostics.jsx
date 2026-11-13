import './Diagnostics.scss';
import playIcon from '../img/icons/play.svg';

const LEFT = [
  { title: 'РЕМОНТ ОТ 1 ДНЯ', text: 'Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт \n сложный — предупредим заранее.' },
  { title: 'РЕМОНТИРУЕМ ТОЛЬКО ТО, ЧТО СЛОМАЛОСЬ', text: 'Не навязываем услуги, диагностируем \n и заранее обговариваем стоимость ремонта.' },
  { title: 'ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ', text: 'Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.' },
];

const RIGHT = [
  { title: 'ГАРАНТИЯ', text: '14 дней на ремонт' },
  { title: 'БЕСПЛАТНЫЙ РЕМОНТ', text: 'в течение 1 года после покупки' },
  { title: 'РАСШИРЕННАЯ ГАРАНТИЯ', text: 'до 36 месяцев' },
];

function DiagnosticsColumn({ items, left = false }) {
  return (
    <div className={`diagnostics__column${left ? ' diagnostics__column--left' : ''}`}>
      {items.map((item) => (
        <div className="diagnostics__item" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function Diagnostics() {
  return (
    <section className="diagnostics">
      <div className="diagnostics__content">
        <h1 className="diagnostics__title">ПРОВЕДИ ДИАГНОСТИКУ<br />И ОТРЕМОНТИРУЕМ ЛЮБУЮ НЕИСПРАВНОСТЬ</h1>
        <div className="diagnostics__main">
          <DiagnosticsColumn items={LEFT} left />
          <div className="diagnostics__circle">
            <div className="diagnostics__circle-inner">
              <div className="diagnostics__circle-image">
                <button className="diagnostics__play" type="button"><img src={playIcon} alt="" /></button>
              </div>
            </div>
          </div>
          <DiagnosticsColumn items={RIGHT} />
        </div>
      </div>
    </section>
  );
}
