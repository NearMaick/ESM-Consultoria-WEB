import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, RegulationsContent } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

const Regulations: React.FC = () => (
  <Container>
    <BurguerMenu />
    <RegulationsContent>
      <Content>
        <Link to="/regulations/five">05</Link>
        <Link to="/regulations/six">06</Link>
        <Link to="/regulations/ten">10</Link>
        <Link to="/regulations/eleven">11</Link>
        <Link to="/regulations/twelve">12</Link>
        <Link to="/regulations/seventeen">17</Link>
        <Link to="/regulations/eighteen">18</Link>
        <Link to="/regulations/twenty-three">23</Link>
        <Link to="/regulations/thirty-three">33</Link>
        <Link to="/regulations/thirty-five">35</Link>
      </Content>
    </RegulationsContent>
  </Container>
);

export default Regulations;
