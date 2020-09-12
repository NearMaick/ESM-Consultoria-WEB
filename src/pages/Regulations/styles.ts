import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 3rem;
`;

export const RegulationsContent = styled.div`
  width: 100%;
  height: 44rem;

  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    height: 24rem;
    justify-content: center;
  }
`;

export const Content = styled.div`
  margin: 8rem 2rem 2rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2.8rem;

  a {
    background: var(--color-input-background);
    color: var(--color-text-base);
    border: 4px double var(--color-text-base);
    border-radius: 0.5rem;

    transform: rotate(45deg);

    display: flex;
    align-items: center;
    justify-content: center;

    justify-self: center;

    width: 60px;
    height: 60px;

    p {
      transform: rotate(-45deg);
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(10, 1fr);
  }
`;
