import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { breakpoints, Cores } from '../../styles'

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 384px;
  margin-bottom: 80px;

  background-image: url(${fundo});
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`

export const H1 = styled.h1`
  text-align: center;

  font-weight: 900;
  width: 539px;
  height: 84px;
  font-size: 36px;

  color: ${Cores.salmao};

  @media (max-width: ${breakpoints.desktop}) {
    width: 359px;
  ]}
`
