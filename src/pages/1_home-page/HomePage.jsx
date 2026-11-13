import Hero from './1_Hero/Hero.jsx';
import Catalog from './2_Catalog/Catalog.jsx';
import Offers from './3_Offers/Offers.jsx';
import Promo from './4_Promo/Promo.jsx';
import Categories from './5_Categories/Categories.jsx';
import About from './6_About/About.jsx';
import Advantages from './7_Advantages/Advantages.jsx';
import Video from './8_Video/Video.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import Videos from './10_Videos/Videos.jsx';
import Blog from './11_Blog/Blog.jsx';
import Faq from '../../components/Faq/Faq.jsx';
import Popular from './13_Popular/Popular.jsx';
import './HomePage.scss';

const ANSWER = 'При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне. \n \n Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда. \n \n Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет. \n \n В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней.';

const QUESTIONS = [
  { question: 'Есть ли  гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?', answer: ANSWER },
  { question: 'У меня в городе самокаты Kugoo дешевле. Почему?', answer: ANSWER },
  { question: 'Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?', answer: ANSWER },
  { question: 'Где находятся пункты самовывоза в моем городе?', answer: ANSWER },
];

export default function HomePage() {
  return (
    <main className="main">
      <div className="main__top">
        <Hero />
        <Catalog />
      </div>
      <Offers />
      <Promo />
      <Categories />
      <About />
      <Advantages />
      <Video />
      <Reviews title="ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ" />
      <Videos />
      <Blog />
      <Faq questions={QUESTIONS} openIndex={0} />
      <Popular />
    </main>
  );
}
