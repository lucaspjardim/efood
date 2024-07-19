import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { TextContainer, HeaderContainer, TextLink } from './styles'

const Header = () => (
  <HeaderContainer>
    <TextContainer>
      <TextLink to="/">Restaurantes</TextLink>
      <Link to="/" style={{ margin: '0 auto' }}>
        <img src={logo} alt="Efood Logo" />
      </Link>
      <p>0 produto(s) no carrinho</p>
    </TextContainer>
  </HeaderContainer>
)

export default Header
