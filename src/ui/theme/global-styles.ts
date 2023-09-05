import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    ${({ theme }) => css`
      color: ${theme.colors.gray80};
      background-color: ${theme.name === 'dark'
      ? theme.colors.gray10
      : theme.colors.gray0
    };
    `};
  }
  a {
    text-decoration: none;
  }
  input[type='text'] {
    font-size: 16px;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-justify {
    text-align: justify;
  }
  .ql-align-right {
    text-align: right;
  }
`
