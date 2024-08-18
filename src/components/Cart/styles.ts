import styled from 'styled-components'
import Lixeira from '../../assets/images/lixeira-icone.svg'
import { breakpoints, Cores } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  width: 100%;
  height: 100%;

  background-color: #000;
`

export const Aside = styled.aside`
  max-width: 360px;
  padding: 32px 8px;

  width: 100%;
  z-index: 1;

  background-color: ${Cores.salmao};

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;

  color: ${Cores.salmao};
  background-color: ${Cores.bege};

  width: 344px;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

  img {
    width: 80px;
    height: 80px;

    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 18px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 70px;

    width: 16px;
    height: 16px;

    cursor: pointer;
    border: none;
    background-image: url(${Lixeira});
    background-color: transparent;
  }
`

export const Button = styled.button`
  width: 100%;

  height: 24px;
  font-size: 14px;
  font-weight: 700;

  background-color: ${Cores.bege};
  color: ${Cores.salmao};

  border: none;
  cursor: pointer;
`
export const Preco = styled.h3`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;

  color: ${Cores.bege};
`
