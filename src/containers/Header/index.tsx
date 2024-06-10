import * as S from './styles'
import { Logo } from '../../styles'

const Header = () => (
  <S.Header>
    <div className="container">
      <Logo as={'h1'} />
      <S.TitleHeader>
        Viva experências gastronômicas no conforto da sua casa
      </S.TitleHeader>
    </div>
  </S.Header>
)

export default Header
