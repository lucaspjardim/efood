import styled, { createGlobalStyle } from 'styled-components'
import logo from './assets/logo.svg'

export const Colors = {
  salmon: '#E66767',
  white: '#eee',
  background: '#FFF8F2'
}

export const Logo = styled.img`
  margin: 0 auto;
  width: 125px;
  height: 58px;
  background-image: url(${logo});
`

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Colors.background};
    color: ${Colors.salmon};
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

`
