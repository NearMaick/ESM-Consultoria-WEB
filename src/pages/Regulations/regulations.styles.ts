import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 3rem;

  height: 230rem;
  width: 400px;

  @media (min-width: 900px) {
    width: 900px;
    margin-top: 8rem;
  }

  @media (min-width: 1600px) {
    width: 1600px;
    height: 150rem;
  }
`;

export const Content = styled.div`
  height: 200rem;

  margin-bottom: 2.4rem;

  @media (min-width: 1600px) {
    height: 150rem;
  }
`;

export const Text = styled.div`
  h1,
  h2,
  p {
    margin: 1.6rem;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    background: var(--color-input-background);

    padding: 16px;

    margin: 1.6rem;

    text-decoration: none;
    border-radius: 15px;
  }

  @media (min-width: 1600px) {
    flex-direction: row;
    justify-content: space-around;
    a {
      display: none;
    }
  }
`;

export const TextTitle = styled.article`
  background: var(--color-secundary);

  width: 60%;
  height: 50rem;

  margin: 1.6rem 0;
  padding: 0 1.6rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 1.8rem;
  }

  @media (min-width: 1600px) {
    width: 30%;
  }
`;

export const TextContent = styled.article`
  width: 80%;
  height: 130rem;

  border-radius: 1.6rem;

  h3 {
    margin: 1.6rem 0;
    text-align: center;
  }

  ul {
    background: var(--color-background-dark);
    border-radius: 1.6rem;
    padding-left: 1.6rem;
    height: 120rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    text-align: left;
    color: var(--color-text-base);
  }

  @media (min-width: 1600px) {
    width: 50%;
  }
`;
