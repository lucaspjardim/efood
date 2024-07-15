import Header from '../../components/Header'
import PlatesList from '../../components/MenuList'
import Presentation from '../../components/RestaurantName'
import { Restaurants } from '../Home'

import VitaTrattoria from '../../assets/images/italian_restaurant.png'

const LaDolceVita = () => (
  <>
    <Header />
    <Presentation
      category={Restaurants[4].category}
      name={Restaurants[4].name}
      image={VitaTrattoria}
    />
    <PlatesList />
  </>
)

export default LaDolceVita
