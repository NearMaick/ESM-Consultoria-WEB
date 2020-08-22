import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 400px;
  height: 16rem;

  margin-top: 1.6rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  a {
    background: #f0f;

    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    justify-self: center;

    margin: 2px;

    width: 30px;
    height: 30px;
  }
`;

export const Text = styled.div``;
