import './Video.scss';
import playIcon from '../img/icons/play.svg';

export default function Video() {
  return (
    <section className="video">
      <div className="video__content">
        <button className="video__play" type="button"><img src={playIcon} alt="" /></button>
      </div>
    </section>
  );
}
