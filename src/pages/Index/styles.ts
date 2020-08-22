import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 100%;

  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`;

export const Main = styled.div`
  section {
    width: 40rem;
    height: 50rem;

    padding: 0 1.5rem;

    margin-bottom: 1.6rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border-radius: 1.6rem;

    /* background: var(--color-secundary); */

    #image {
      height: 30rem;
      width: 30rem;

      display: flex;
      justify-content: center;

      margin-bottom: 2.4rem;

      img {
        height: 25rem;
        width: 25rem;
      }
    }

    h1,
    h2,
    h3 {
      padding: 1rem;
      text-align: center;
    }
  }
`;

export const Description = styled.section`
  width: 40rem;
  height: 50rem;

  margin: 3rem 0;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 1.6rem;

  h1 {
    padding: 1.8rem;
    text-align: center;
  }

  div.desc {
    width: 100%;

    text-align: justify;
    line-height: 2.4rem;

    margin: 1.6rem 0;

    img {
      width: 100%;
      height: 30rem;

      padding: 1.6rem;

      border-radius: 2.4rem;
    }

    p {
      margin-bottom: 1.6rem;
    }

    a {
      background: var(--color-input-background);

      padding: 16px;

      margin: 30%;

      text-decoration: none;
      border-radius: 15px;
    }
  }
`;
