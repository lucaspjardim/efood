import Banner from '../../components/Banner'
import RestaurantClass from '../../models/Restaurant'

import Hioki from '../../assets/images/japanese_restaurant.png'
import VitaTrattoria from '../../assets/images/italian_restaurant.png'
import RestaurantList from '../../components/RestaurantList'

export const Restaurants: RestaurantClass[] = [
  {
    id: 1,
    highlights: true,
    category: 'Japonesa',
    image: Hioki,
    name: 'Hioki Sushi',
    note: '4.9',
    info: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    link: '/ladolcevita'
  },
  {
    id: 2,
    highlights: false,
    category: 'Italiana',
    image: VitaTrattoria,
    name: 'La Dolce Vita Trattoria',
    note: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 3,
    highlights: false,
    category: 'Italiana',
    image: VitaTrattoria,
    name: 'La Dolce Vita Trattoria',
    note: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 4,
    highlights: false,
    category: 'Italiana',
    image: VitaTrattoria,
    name: 'La Dolce Vita Trattoria',
    note: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 5,
    highlights: false,
    category: 'Italiana',
    image: VitaTrattoria,
    name: 'La Dolce Vita Trattoria',
    note: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 6,
    highlights: false,
    category: 'Italiana',
    image: VitaTrattoria,
    name: 'La Dolce Vita Trattoria',
    note: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  }
]

const Home = () => (
  <>
    <Banner />
    <RestaurantList restaurants={Restaurants} />
  </>
)

export default Home
