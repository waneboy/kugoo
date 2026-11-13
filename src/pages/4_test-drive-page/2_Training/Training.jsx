import './Training.scss';
import checkIcon from '../img/icons/check.svg';
import practiceImage from '../img/practice.png';
import trainingImage from '../img/training.png';

const TEST_DRIVE = [
  <><b>Понять </b>подходит ли вам конкретная модель;</>,
  <><b>Испытать </b>самокат в «реальной жизни»;</>,
  <><b>Оценить </b>удобство хранения и эксплуатации;</>,
  <><b>Узнать </b>реальные характеристики и возможности модели.</>,
];

const LESSON = [
  'Как подготовить самокат к поездке;',
  'Как «завести» самокат;',
  'Как вести себя во время поездки и обезопасить себя и окружающих;',
  'Как складывать и раскладывать электросамокат;',
  'Как ухаживать за своим девайсом.',
];

function TrainingList({ title, items }) {
  return (
    <div className="training__list">
      <p className="training__list-title">{title}</p>
      <div className="training__items">
        {items.map((item, index) => (
          <div className="training__item" key={index}>
            <img src={checkIcon} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Training() {
  return (
    <section className="training">
      <div className="training__content">
        <div className="training__row">
          <div className="training__info">
            <h1 className="section-title">ОПРЕДЕЛИТЕ МАКСИМАЛЬНО ПОДХОДЯЩУЮ ВАМ МОДЕЛЬ НЕ ТЕОРЕТИЧЕСКИ, А НА ПРАКТИКЕ</h1>
            <TrainingList title="Тест-драйв поможет:" items={TEST_DRIVE} />
          </div>
          <div>
            <img src={practiceImage} alt="" />
          </div>
        </div>
        <div className="training__row training__row--reverse">
          <div>
            <img src={trainingImage} alt="" />
          </div>
          <div className="training__info training__info--short">
            <h1 className="section-title">НАУЧИМ ПРАВИЛЬНОЙ И БЕЗОПАСНОЙ ЕЗДЕ В ГОРОДЕ ВАС ИЛИ ВАШЕГО РЕБЕНКА</h1>
            <TrainingList title="На обучении специалист расскажет:" items={LESSON} />
          </div>
        </div>
      </div>
    </section>
  );
}
