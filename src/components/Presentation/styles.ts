import styled from 'styled-components'
import { Cores } from '../../styles'

type Props = {
  imagem: string
}

export const ItalianBanner = styled.div<Props>`
  position: relative; /* Adicionado para posicionamento correto */
  height: 280px;
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: 900;
  background-image: url(${(props) => props.imagem});
  background-size: cover;

  .overlay {
    position: absolute; /* Adicionado para garantir que a overlay cubra o banner */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    position: relative; /* Adicionado para posicionamento correto */
    z-index: 2; /* Garantir que o conteúdo esteja acima da overlay */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;
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
