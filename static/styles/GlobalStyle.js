import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`

  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  *, *::before,  *::after{
    box-sizing: inherit;
  }

  body {
    font-size: 1rem;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',  Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #FFF;
    color: ${theme.colors.neutralBase};
    font-weight: 300;
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyle;
