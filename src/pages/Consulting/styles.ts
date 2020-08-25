import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
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
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  h2,
  img {
    width: 30rem;
    height: 30rem;

    border-radius: 1.8rem;
  }
`;

export const Text = styled.section`
  line-height: 2.4rem;
`;
