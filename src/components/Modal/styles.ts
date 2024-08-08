import styled from 'styled-components'
import { Cores } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  color: ${Cores.branco};

  width: 1024px;
  height: 344px;
  z-index: 1;

  button {
    border: none;
    img {
      position: absolute;
      top: 8px;
      right: -8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  img {
    width: 280px;
    height: 280px;
    margin: 0 32px;
    object-fit: cover;
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 16px;
    }

    p {
      width: 656px;
      font-size: 14px;
    }

    button {
      width: 218px;
      margin-top: 20px;
    }
  }

  background-color: ${Cores.salmao};
`
