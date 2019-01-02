import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #9B65E6;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, Helvetica, sans-serif !important;
}

`;

export default GlobalStyles;
