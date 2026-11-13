import './Works.scss';
import worksIcon from '../img/works-icon.png';
import work1 from '../img/works/work-1.png';
import work2 from '../img/works/work-2.png';
import work3 from '../img/works/work-3.png';
import work4 from '../img/works/work-4.png';
import work5 from '../img/works/work-5.png';
import work6 from '../img/works/work-6.png';

const PHOTOS = [work1, work2, work3, work4, work5, work6];

export default function Works() {
  return (
    <section className="works">
      <div className="works__content">
        <div className="works__head">
          <h1 className="works__title">ПОСМОТРИТЕ <br /> НА ПРОЦЕСС РАБОТЫ</h1>
          <div className="works__stats">
            <img src={worksIcon} alt="" />
            <div className="works__stats-info">
              <p className="works__stats-caption">В среднем</p>
              <h3 className="works__stats-value">350 доработок</h3>
              <p className="works__stats-text">специалисты выполняют за 1 месяц</p>
            </div>
          </div>
        </div>
        <div className="works__list">
          {PHOTOS.map((photo) => (
            <img src={photo} alt="" key={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
