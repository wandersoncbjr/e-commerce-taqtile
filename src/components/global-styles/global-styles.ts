import { createGlobalStyle } from "styled-components";
import { colors } from "../typography/colors";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
}

 body {
    background-color: ${colors.baseBackground}; 
  }
  
menu, ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
