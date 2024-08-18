import { useDispatch } from 'react-redux'
import { Dispatch } from 'react'

import { add, open } from '../../store/reducers/cart'

import * as S from './styles'
import { Button } from '../Plates/styles'
import { modalType } from '../PlatesList'

import botaoFechar from '../../assets/images/botao_fechar.png'

interface Props extends modalType {
  setModal: Dispatch<modalType>
  plate: any
}
export const formataPreco = (number = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
}

const Modal = ({
  id,
  descricao,
  foto,
  nome,
  porcao,
  preco,
  visivel,
  setModal,
  plate
}: Props) => {
  const dispatch = useDispatch()

  const abreCarrinho = () => {
    dispatch(add(plate))
    setModal({
      id: 0,
      descricao: '',
      foto: '',
      nome: '',
      porcao: '',
      preco: 0,
      visivel: false
    })
    dispatch(open())
  }

  return (
    <S.Modal className={visivel ? 'visible' : ''} key={id}>
      <S.ModalContent>
        <button>
          <img
            onClick={() => {
              setModal({
                id: 0,
                descricao: '',
                foto: '',
                nome: '',
                porcao: '',
                preco: 0,
                visivel: false
              })
            }}
            src={botaoFechar}
            alt="botão fechar"
          />
        </button>
        <img src={foto} alt="Nome do prato" />

        <div>
          <h3>{nome}</h3>
          <p>
            {descricao} <br /> <br />
            Serve de: {porcao}
          </p>
          <Button onClick={abreCarrinho}>
            Adicionar ao carrinho - {formataPreco(preco)}
          </Button>
        </div>
      </S.ModalContent>
      <div
        onClick={() => {
          setModal({
            id: 0,
            descricao: '',
            foto: '',
            nome: '',
            porcao: '',
            preco: 0,
            visivel: false
          })
        }}
        className="overlay"
      ></div>
    </S.Modal>
  )
}

export default Modal
