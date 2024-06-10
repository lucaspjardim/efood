import styled from 'styled-components'
import { Colors } from '../../styles'

import backgroundImage from '../../assets/fundo.svg'

export const Header = styled.header`
  padding: 40px 0;
  text-align: center;
  color: ${Colors.salmon};
  background-image: url(${backgroundImage});
`

export const TitleHeader = styled.h2`
  margin: 0 auto;
  margin-top: 136px;
  max-width: 540px;
  font-weight: 900;
  font-size: 36px;
`
