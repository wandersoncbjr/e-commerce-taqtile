import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
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
