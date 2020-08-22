import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 100%;

  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
  }

  h1,
  p {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  /* background: var(--color-secundary); */

  /* height: 60rem; */

  margin-bottom: 20px;

  h2,
  img {
    width: 40rem;
    height: 30rem;

    margin: 0 1.5%;

    border-radius: 1.8rem;
  }
`;

export const Text = styled.section`
  line-height: 2.4rem;
`;
