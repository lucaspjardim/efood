import { useState } from 'react'
import Modal from '../Modal'
import Plate from '../Plates'
import { PlatesListContainer } from './styles'

type Props = {
  plates: [
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

export interface modalType {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  visivel: boolean
}

const PlatesList = ({ plates }: Props) => {
  const [modal, setModal] = useState<modalType>({
    id: 0,
    descricao: '',
    foto: '',
    nome: '',
    porcao: '',
    preco: 0,
    visivel: false
  })

  const [plate, setPlate] = useState({})

  return (
    <>
      <PlatesListContainer className="container">
        {plates.map((plate) => (
          <Plate
            key={plate.id}
            id={plate.id}
            descricao={plate.descricao}
            foto={plate.foto}
            nome={plate.nome}
            porcao={plate.porcao}
            preco={plate.preco}
            onclick={() => {
              setModal({
                id: plate.id,
                descricao: plate.descricao,
                foto: plate.foto,
                nome: plate.nome,
                porcao: plate.porcao,
                preco: plate.preco,
                visivel: true
              })
              setPlate(plate)
            }}
          />
        ))}
      </PlatesListContainer>
      <Modal
        id={modal.id}
        descricao={modal.descricao}
        foto={modal.foto}
        nome={modal.nome}
        porcao={modal.porcao}
        preco={modal.preco}
        key={modal.id}
        visivel={modal.visivel}
        setModal={setModal}
        plate={plate}
      />
    </>
  )
}

export default PlatesList
