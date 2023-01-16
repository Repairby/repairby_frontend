import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

const GlobalStyle = createGlobalStyle`
    ${reset};
    a { text-decoration: none; outline: none }
    a:visited, a:link, a:hover, a:active {
        color : black;
        text-decoration: none;
      }
`;

export default GlobalStyle;
