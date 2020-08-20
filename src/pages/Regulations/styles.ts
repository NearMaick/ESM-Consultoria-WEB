import styled from 'styled-components';

export const Container = styled.div`
  background: #f00;

  width: 100%;
  height: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  a {
    width: 10rem;
    height: 2.4rem;
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const Text = styled.div``;
