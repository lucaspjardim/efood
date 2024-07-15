import RestaurantClass from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurants: RestaurantClass[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List className="container">
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        categoria={restaurant.category}
        destaque={restaurant.highlights}
        imagem={restaurant.image}
        nome={restaurant.name}
        nota={restaurant.note}
        info={restaurant.info}
        link={restaurant.link}
      />
    ))}
  </List>
)

export default RestaurantList
