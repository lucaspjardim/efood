import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

import { formataPreco } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acum, valorAtual) => {
      return (acum += valorAtual.preco!)
    }, 0)
  }

  const fecharCarrinho = () => {
    dispatch(close())
  }

  const removerPrato = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={fecharCarrinho} />
      <S.Aside>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)} </span>
              </div>
              <button onClick={() => removerPrato(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Preco>
          Valor Total <span>{formataPreco(getTotalPrice())}</span>
        </S.Preco>
        <S.Button type="button">Continuar com a entrega</S.Button>
      </S.Aside>
    </S.Container>
  )
}

export default Cart
