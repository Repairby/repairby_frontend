import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

const GlobalStyle = createGlobalStyle`
    ${reset};
    a { text-decoration: none; outline: none }
    a:visited, a:link, a:hover, a:active {
        color : black;
        text-decoration: none;
      }
    body{
        -ms-overflow-style: none;
      }
        
      ::-webkit-scrollbar {
        display: none;
      }
  input {
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
              outline: none;
  }
  input:focus {
    outline: none;
}
`;

export default GlobalStyle;
