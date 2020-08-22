import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  /* background: #f00; */

  width: 400px;
  height: 20rem;

  margin-top: 4.6rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1.8rem;

  a {
    background: #f0f;

    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    justify-self: center;

    width: 60px;
    height: 60px;
  }
`;

export const Text = styled.div``;
