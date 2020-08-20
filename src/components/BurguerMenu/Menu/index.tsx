import React from 'react';

import { Link } from 'react-router-dom';
import { ToggleOpenModalProps } from '../index';
import { StyledMenu } from './styles';

const Menu: React.FC<ToggleOpenModalProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      <Link to="/consulting">Consultoria</Link>
      <Link to="/regulations">Normas Regulamentares</Link>
      <Link to="/about">Sobre nós</Link>
    </StyledMenu>
  );
};

export default Menu;
