import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';
import homeIcon from './img/home.svg';

export default function Breadcrumbs({ title }) {
  return (
    <nav className="breadcrumbs">
      <div className="breadcrumbs__content">
        <img src={homeIcon} alt="" />
        <Link to="/">Главная</Link>
        <p>/</p>
        <Link to="">{title}</Link>
      </div>
    </nav>
  );
}
