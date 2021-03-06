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
    --color-background-dark: #dbcecf;
    --color-primary: #db8e65;
    --color-secundary: #8ef5af;
    --color-text-base: #494368;
    --color-input-background: #ebc634;
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
    font-family: 'Inria Serif', serif;
    font-size: 1.6rem;

    display: flex;
    justify-content: center;

    @media (min-width: 900px) {
      font-size: 1.8rem;
    }
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
