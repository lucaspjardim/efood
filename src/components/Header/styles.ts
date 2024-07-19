import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { Cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 166px;
  font-size: 18px;
  font-weight: 900;
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${Cores.salmao};
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${Cores.salmao};
`
