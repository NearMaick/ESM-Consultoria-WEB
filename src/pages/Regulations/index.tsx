import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

const Regulations: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Content>
      <Link to="/regulations/five">NRs parte02</Link>
      <Link to="/regulations/six">NRs parte02</Link>
      <Link to="/regulations/ten">NRs parte02</Link>
      <Link to="/regulations/eleven">NRs parte02</Link>
      <Link to="/regulations/twelve">NRs parte02</Link>
    </Content>
  </Container>
);

export default Regulations;
