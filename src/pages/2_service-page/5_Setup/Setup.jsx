import { Link } from 'react-router-dom';
import './Setup.scss';
import playIcon from '../img/icons/play.svg';
import checkIcon from '../img/icons/check.svg';

const WATERPROOFING = {
  title: 'СДЕЛАЕМ ГИДРОИЗОЛЯЦИЮ ЭЛЕКТРОСАМОКАТА',
  subtitle: 'которая позволит вам кататься в любую погоду',
  text: 'Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.',
  listTitle: 'Что дает гидроизоляция?',
  list: [
    'Возможность выезжать в дождь или после дождя',
    'Можно ездить в любое время года',
    'Защита от влаги, пыли и грязи продлит срок беспроблемного использования.',
  ],
  more: 'Подробнее про гидроизоляцию прочитайте в',
};

const TUNING = {
  title: 'ПРОДЛИМ СРОК СЛУЖБЫ ВАШЕГО САМОКАТА В 2 РАЗА',
  subtitle: 'благодаря настройкам от специалистов с опытом 7+ лет',
  text: 'Перед продажей каждый покупатель может заказать у нас дополнительную услугу – настройка самоката. Для разных моделей Kugoo настройка может отличаться.',
  listTitle: 'Что входит в настройку:',
  list: [
    'Регулировка натяжения тормозного троса',
    'Регулировка положения тормозной ручки',
    'Регулировка тормозных механизмов',
    'Протяжка всех соединений',
    'И еще более 35 работ.',
  ],
  more: 'Подробнее про настройку прочитайте в',
};

function SetupInfo({ info }) {
  return (
    <div className="setup__info">
      <div className="setup__head">
        <h1 className="setup__title">{info.title}</h1>
        <h5 className="setup__subtitle">{info.subtitle}</h5>
      </div>
      <p>{info.text}</p>
      <h4>{info.listTitle}</h4>
      <div className="setup__pluses">
        {info.list.map((item) => (
          <div className="setup__plus" key={item}>
            <img src={checkIcon} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <p className="setup__link">{info.more} <Link to="">нашей статье</Link></p>
    </div>
  );
}

export default function Setup() {
  return (
    <section className="setup">
      <div className="setup__content">
        <div className="setup__top">
          <div className="setup__video">
            <button type="button"><img src={playIcon} alt="" /></button>
          </div>
          <SetupInfo info={WATERPROOFING} />
        </div>
        <div className="setup__bottom">
          <SetupInfo info={TUNING} />
          <div className="setup__image"></div>
        </div>
      </div>
    </section>
  );
}
