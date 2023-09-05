import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

body{
    body {
  font-family: -apple-system, BlinkMacSystemFont, 'Manrope',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  margin: 0; 
  color: ${({ theme }) => theme.colors.mainBlack}; 
  background-color:${({ theme }) => theme.colors.background};
  font-family: Manrope-Regular, sans-serif;
  line-height: 1.5;    
}



p,
h1,
h2,
h3,
h4,input {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;
