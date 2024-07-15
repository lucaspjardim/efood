import Pizza from '../../assets/images/pizza_marguerita.png'
import * as S from './styles'

const Plates = () => (
  <S.Container>
    <img src={Pizza} alt="Pizza" />
    <h2>Pizza Marguerita</h2>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.Container>
)

export default Plates
