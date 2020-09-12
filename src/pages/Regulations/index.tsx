import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, RegulationsContent } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

const Regulations: React.FC = () => (
  <Container>
    <BurguerMenu />
    <RegulationsContent>
      <Content>
        <Link to="/regulations/five">
          <p>05</p>
        </Link>
        <Link to="/regulations/six">
          <p>06</p>
        </Link>
        <Link to="/regulations/ten">
          <p>10</p>
        </Link>
        <Link to="/regulations/eleven">
          <p>11</p>
        </Link>
        <Link to="/regulations/twelve">
          <p>12</p>
        </Link>
        <Link to="/regulations/seventeen">
          <p>17</p>
        </Link>
        <Link to="/regulations/eighteen">
          <p>18</p>
        </Link>
        <Link to="/regulations/twenty-three">
          <p>23</p>
        </Link>
        <Link to="/regulations/thirty-three">
          <p>33</p>
        </Link>
        <Link to="/regulations/thirty-five">
          <p>35</p>
        </Link>
      </Content>
    </RegulationsContent>
  </Container>
);

export default Regulations;
