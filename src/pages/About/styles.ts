import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;

  width: 500px;
  /* height: 100%; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  p {
    text-align: justify;
    padding: 1rem;
    line-height: 2.4rem;
  }

  img {
    padding: 1rem;

    width: 40rem;
    height: 50rem;
    border-radius: 1.8rem;
  }

  a {
    background: var(--color-input-background);

    padding: 16px;

    margin: 30%;

    text-decoration: none;
    border-radius: 15px;
  }
`;

export const Text = styled.section``;
