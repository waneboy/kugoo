import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/1_home-page/HomePage.jsx';
import ServicePage from './pages/2_service-page/ServicePage.jsx';
import CooperationPage from './pages/3_cooperation-page/CooperationPage.jsx';
import TestDrivePage from './pages/4_test-drive-page/TestDrivePage.jsx';
import CatalogPage from './pages/5_catalog-page/CatalogPage.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page2" element={<ServicePage />} />
        <Route path="/page3" element={<CooperationPage />} />
        <Route path="/page4" element={<TestDrivePage />} />
        <Route path="/page5" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </>
  );
}
