import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;

  &.payment-is-open {
    display: flex;
  }

  h3 {
    font-size: 16px;
    color: ${Cores.bege};
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: ${Cores.bege};
    margin-bottom: 16px;
  }

  .payment-button {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .has-error {
    border: 3px solid red;
    color: red;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${Cores.bege};
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    background-color: ${Cores.bege};
    color: black;
    border: 2px solid ${Cores.bege};
    margin-bottom: 8px;
  }

  &.mid-size {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 30px;

      input {
        width: 155px;
        margin-top: 8px;

        @media (max-width: ${breakpoints.tablet}) {
          width: 128px;
        }
      }
    }
  }

  #cardNumber {
    width: 228px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 168px;
    }
  }

  #cardCode {
    width: 84px;
  }
`
