import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-offset: 0;
  }

  :root {
    --color-background: #F7EBEC;
    /* --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA; */
    --color-primary: #d45b1b;
    /* --color-primary-dark: #774DD6; */
    /* --color-primary-darker: #6842C2; */
    --color-secundary: #04f06a;
    /* --color-secundary-dark: #04BF58; */
    /* --color-title-in-primary: #FFFFFF; */
    /* --color-text-in-primary: #D4C2FF; */
    /* --color-text-title: #32264D; */
    /* --color-text-complement: #9C98A6; */
    --color-text-base: #494368;
    /* --color-line-in-white: #E6E6F0; */
    --color-input-background: #fcba04;
    /* --color-button-text: #FFFFFF; */
    /* --color-box-base: #FFFFFF; */
    --color-box-footer: #0d1821;

    font-size: 60%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    background: var(--color-background);
    font-family: serif;
    font-size: 1.6rem;

    display: flex;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6, strong, a, p {
    color: var(--color-text-base);
    font-weight: 500;
  }

  h1 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
