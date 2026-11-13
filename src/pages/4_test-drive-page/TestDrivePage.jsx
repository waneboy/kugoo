import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import DriveHero from './1_DriveHero/DriveHero.jsx';
import Training from './2_Training/Training.jsx';
import Models from './3_Models/Models.jsx';
import Request from './4_Request/Request.jsx';

export default function TestDrivePage() {
  return (
    <>
      <Breadcrumbs title="Тест-драйв" />
      <main className="main">
        <DriveHero />
        <Training />
        <Models />
        <Request />
      </main>
    </>
  );
}
