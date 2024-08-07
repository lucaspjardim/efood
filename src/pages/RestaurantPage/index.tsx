import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import { useEffect, useState } from 'react'
import { restaurantsType } from '../Home'
import PlatesList from '../../components/PlatesList'

const RestaurantPage = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<restaurantsType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <Header />
      <Presentation
        categoria={restaurant.tipo}
        imagem={restaurant.capa}
        nome={restaurant.titulo}
        key={restaurant.id}
      />
      <PlatesList plates={restaurant.cardapio} />
    </>
  )
}

export default RestaurantPage
