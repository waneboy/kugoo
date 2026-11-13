import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import CatalogHero from './1_CatalogHero/CatalogHero.jsx';
import Categories from '../1_home-page/5_Categories/Categories.jsx';
import About from '../1_home-page/6_About/About.jsx';
import Videos from '../1_home-page/10_Videos/Videos.jsx';
import Blog from '../1_home-page/11_Blog/Blog.jsx';
import Popular from '../1_home-page/13_Popular/Popular.jsx';

export default function CatalogPage() {
  return (
    <>
      <Breadcrumbs title="Каталог" />
      <main className="main">
        <CatalogHero />
        <Categories />
        <About />
        <Videos />
        <Blog />
        <Popular />
      </main>
    </>
  );
}
