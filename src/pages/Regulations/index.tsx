import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

const Regulations: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Content>
      <Link className="um" to="/regulations/one-five">
        NRs parte01
      </Link>
      <Link className="dois" to="/regulations/six-ten">
        NRs parte02
      </Link>
      <Link className="dois" to="/regulations/six-ten">
        NRs parte02
      </Link>
      <Link className="dois" to="/regulations/six-ten">
        NRs parte02
      </Link>
      <Link className="dois" to="/regulations/six-ten">
        NRs parte02
      </Link>
      <Link className="dois" to="/regulations/six-ten">
        NRs parte02
      </Link>
    </Content>
  </Container>
);

export default Regulations;
