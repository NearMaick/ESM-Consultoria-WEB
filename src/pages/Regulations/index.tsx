import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, Text } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

const Regulations: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Content>
      <Text>
        <Link to="/regulations/one-five">NRs parte01</Link>
        <Link to="/six-ten">NRs parte02</Link>
      </Text>
    </Content>
  </Container>
);

export default Regulations;
