import ServiceHero from './1_ServiceHero/ServiceHero.jsx';
import Diagnostics from './2_Diagnostics/Diagnostics.jsx';
import RepairPrices from './3_RepairPrices/RepairPrices.jsx';
import RemoteDiagnostics from './4_RemoteDiagnostics/RemoteDiagnostics.jsx';
import Setup from './5_Setup/Setup.jsx';
import Waterproofing from './6_Waterproofing/Waterproofing.jsx';
import Pickup from './7_Pickup/Pickup.jsx';
import Team from './8_Team/Team.jsx';
import Works from './9_Works/Works.jsx';
import Faq from '../../components/Faq/Faq.jsx';
import Addresses from './11_Addresses/Addresses.jsx';

const QUESTIONS = [
  { question: 'Есть ли гарантия на ремонт?', answer: 'нет' },
  { question: 'Есть ли ваш сервисный центр в моем городе?', answer: 'нет' },
  { question: 'Как специалист может решить проблему удаленно?', answer: 'никак' },
  { question: 'Самокат был приобретен у вас, но я нахожусь в городе, где нет вашего сервисного центра. Как вы будете, в случае чего, ремонтировать мой самокат по гарантии?', answer: 'не будем' },
  { question: 'У меня сделана гидроизоляция. Мне придется заново платить за нее после ремонта?', answer: 'да' },
  { question: 'Можете ли вы сделать ремонт по гарантии, если самокат был куплен не в вашем магазине?', answer: 'нет' },
  { question: 'Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?', answer: 'никак. гарантий нет' },
  { question: 'Как специалист может решить проблему удаленно?', answer: 'никак' },
  { question: 'Осуществляете ли вы ремонт с выездом мастера на дом?', answer: 'нет' },
  { question: 'Какие запчасти используются при ремонте?', answer: 'дешевые' },
  { question: 'Какие документы выдаются после завершения ремонта?', answer: 'поддельные' },
];

export default function ServicePage() {
  return (
    <main className="main">
      <ServiceHero />
      <Diagnostics />
      <RepairPrices />
      <RemoteDiagnostics />
      <Setup />
      <Waterproofing />
      <Pickup />
      <Team />
      <Works />
      <Faq questions={QUESTIONS} long />
      <Addresses />
    </main>
  );
}
