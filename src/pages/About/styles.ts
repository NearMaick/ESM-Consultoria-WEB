import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;

  width: 360px;

  @media (min-width: 900px) {
    width: 900px;
    margin-top: 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  p {
    text-align: justify;
    padding: 1rem;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
  }

  img {
    padding: 1rem;

    width: 36rem;
    height: 50rem;
    border-radius: 1.8rem;
  }

  a {
    background: var(--color-input-background);

    padding: 16px;

    text-decoration: none;
    border-radius: 15px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const Text = styled.section`
  div {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: -1.6rem;
  }
`;
