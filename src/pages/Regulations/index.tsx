import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

const Regulations: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Content>
      <Link to="/regulations/five">05</Link>
      <Link to="/regulations/six">06</Link>
      <Link to="/regulations/ten">10</Link>
      <Link to="/regulations/eleven">11</Link>
      <Link to="/regulations/twelve">12</Link>
      <Link to="/regulations/five">05</Link>
      <Link to="/regulations/six">06</Link>
      <Link to="/regulations/ten">10</Link>
      <Link to="/regulations/eleven">11</Link>
      <Link to="/regulations/twelve">12</Link>
      <Link to="/regulations/five">05</Link>
      <Link to="/regulations/six">06</Link>
      <Link to="/regulations/ten">10</Link>
      <Link to="/regulations/eleven">11</Link>
      <Link to="/regulations/twelve">12</Link>
    </Content>
  </Container>
);

export default Regulations;
