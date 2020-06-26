import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  * { margin: 0; padding: 0; }

  *,
  *:before,
  *:after {box-sizing: inherit; }

  html { 
    box-sizing: border-box; 
    /* font-size: 62.5%;  */
  }
  
  body {
    margin: 0 auto;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    min-height: 100vh;
    transition: all .6s ease-in;
  }
`

export default GlobalStyle

