import styled from 'styled-components';

export const Container = styled.div`
  background: #f00;

  height: 140rem;
  width: 600px;
`;

export const Content = styled.div`
  background: #f0f;
  height: 170rem;

  margin-bottom: 2.4rem;
`;

export const Text = styled.div`
  h1,
  h2 {
    background: #fcc;
    margin: 1.6rem;
  }

  h1 {
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextTitle = styled.article`
  background: #0f0;

  width: 60%;
  height: 50rem;

  margin: 1.6rem 0;
  padding: 0 1.6rem;
  border: solid 3px #000;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 1.8rem;
  }
`;

export const TextContent = styled.article`
  background: #666;

  width: 80%;
  height: 100rem;

  border-radius: 1.6rem;

  h3 {
    margin: 1.6rem 0;
    text-align: center;
  }

  ul {
    background: #eee;

    height: 80rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style-type: none;
  }
`;
