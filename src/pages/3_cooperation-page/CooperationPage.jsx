import Wholesale from './1_Wholesale/Wholesale.jsx';
import Bestsellers from './2_Bestsellers/Bestsellers.jsx';
import Dealer from './3_Dealer/Dealer.jsx';
import Callback from './4_Callback/Callback.jsx';
import Shipping from './5_Shipping/Shipping.jsx';
import Scheme from './6_Scheme/Scheme.jsx';
import Plan from './7_Plan/Plan.jsx';
import Brand from './8_Brand/Brand.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import Socials from './10_Socials/Socials.jsx';
import Faq from '../../components/Faq/Faq.jsx';
import Offer from './12_Offer/Offer.jsx';

const QUESTIONS = [
  { question: 'Когда происходит отправка заказа?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius.' },
  { question: 'Есть ли гарантия на товары?', answer: 'Lorem ipsum dolor sit amet, varius.' },
  { question: 'Сколько стоит доставка товара до клиента?', answer: 'Lorem ipsum consectetur adipiscing elit. Nunc varius.' },
  { question: 'Проверяется ли товар перед отправкой?', answer: 'Lorem ipsum dolor sit amet. Nunc varius.' },
  { question: 'Какими ТК вы отправляете заказы?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function CooperationPage() {
  return (
    <main className="main">
      <Wholesale />
      <Bestsellers />
      <Dealer />
      <Callback />
      <Shipping />
      <Scheme />
      <Plan />
      <Brand />
      <Reviews title="1 600+ ПОЛОЖИТЕЛЬНЫХ ОЦЕНОК ПОКУПАТЕЛЕЙ О ПРОДУКТАХ KUGOO" />
      <Socials />
      <Faq questions={QUESTIONS} />
      <Offer />
    </main>
  );
}
