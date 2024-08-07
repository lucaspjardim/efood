import * as S from './styles'

import botaoFechar from '../../assets/images/botao_fechar.png'

import { Button } from '../Plates/styles'
import { modalType } from '../PlatesList'
import { Dispatch } from 'react'

interface Props extends modalType {
  setModal: Dispatch<modalType>
}

const Modal = ({
  id,
  descricao,
  foto,
  nome,
  porcao,
  preco,
  visivel,
  setModal
}: Props) => {
  const formataPreco = (number = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number)
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
          <Button>Adicionar ao carrinho - {formataPreco(preco)}</Button>
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
