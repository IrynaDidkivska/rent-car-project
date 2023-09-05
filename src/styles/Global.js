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
@font-face {
  font-family: 'Manrope-Regular';
  src: url(./assets/fonts/Manrope-Regular.woff) format('woff'),
       url(./assets/fonts/Manrope-Regular.woff2) format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope-Medium';
  src: url(./assets/fonts/Manrope-Medium.woff) format('woff'),
       url(./assets/fonts/Manrope-Medium.woff2) format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope-SemiBold';
  src: url(./assets/fonts/Manrope-SemiBold.woff) format('woff'),
       url(./assets/fonts/Manrope-SemiBold.woff2) format('woff2');
  font-weight: 600;
  font-style: normal;
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
   width:100%;
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
