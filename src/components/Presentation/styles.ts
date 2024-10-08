import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'

type Props = {
  imagem: string
}

export const ItalianBanner = styled.div<Props>`
  position: relative;
  height: 280px;
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: 900;

  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-position: center; /* Ajustado para centralizar a imagem */

  &::after {
    content: ''; /* Adicionado para garantir a renderização do pseudo-elemento */
    position: absolute; /* Adicionado para garantir que a overlay cubra o banner */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px;
  }

  div {
    position: relative; /* Adicionado para posicionamento correto */
    z-index: 3; /* Garantir que o conteúdo esteja acima da overlay */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;
    height: 100%;
    padding: 20px; /* Adicionado para espaçamento interno */
    color: ${Cores.branco};

    height: 100%;

    color: ${Cores.branco};
  }

  span {
    font-weight: 100;
    margin-top: 24px;
    font-size: 32px;
  }

  h1 {
    margin-bottom: 32px;
    font-size: 32px;
  }
`
