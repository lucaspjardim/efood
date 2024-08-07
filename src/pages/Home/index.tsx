import Banner from '../../components/Banner'

import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

export type restaurantsType = {
  id: number
  titulo: string
  destaque: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: [
    {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<restaurantsType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Banner />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
