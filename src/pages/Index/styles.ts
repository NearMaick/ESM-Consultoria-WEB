import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;

  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  @media (min-width: 900px) {
    width: 900px;
    margin-top: 6rem;
  }
`;

export const Main = styled.div`
  section {
    width: 35rem;
    height: 50rem;

    padding: 0 1.5rem;

    margin-bottom: 9rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border-radius: 1.6rem;

    #image {
      height: 35rem;
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

  @media (min-width: 900px) {
    width: 900px;
    margin-top: 6rem;

    display: flex;
    justify-content: center;

    h1,
    h2,
    h3 {
      width: 70rem;
    }

    h1 {
      margin-bottom: 2.4rem;
    }
  }
`;

export const Description = styled.section`
  width: 35rem;
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

  div.description {
    @media (min-width: 900px) {
      width: 900px;
      display: flex;
      flex-direction: row;
    }
  }

  div.desc {
    width: 100%;

    text-align: justify;
    line-height: 2.4rem;

    img {
      width: 100%;
      height: 30rem;

      padding: 1.6rem;
      margin-bottom: 6rem;

      border-radius: 2.4rem;
    }

    p {
      margin-bottom: 1.6rem;
    }

    div {
      width: 100%;

      display: flex;
      justify-content: center;
    }

    a {
      background: var(--color-input-background);

      padding: 16px;

      text-decoration: none;
      border-radius: 15px;
    }
  }
`;
