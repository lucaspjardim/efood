import { useState } from 'react'
import { PlatesListContainer } from './styles'
import Modal from '../Modal'
import Plates from '../Plates'

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

  return (
    <>
      <PlatesListContainer className="container">
        {plates.map((plate) => (
          <Plates
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
      />
    </>
  )
}

export default PlatesList
