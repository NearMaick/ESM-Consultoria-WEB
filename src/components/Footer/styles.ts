import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-box-footer);

  width: 100%;
  height: 35rem;

  border-radius: 15px;
`;

export const Content = styled.footer`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 300px;

    margin-bottom: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p,
  strong {
    color: #f7ebec;
  }

  strong {
    font-weight: bold;
    font-size: 2.4rem;
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const Contact = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 900px) {
    height: 50%;
  }

  a {
    color: #f7ebec;

    width: 300px;

    margin-bottom: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Socials = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  #contents {
    width: 70%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
