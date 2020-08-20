import React from 'react';

import { Link } from 'react-router-dom';
import { ToggleOpenModalProps } from '../index';
import { StyledMenu } from './styles';

const Menu: React.FC<ToggleOpenModalProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre nós</Link>
      <a href="/">
        <span role="img" aria-label="contact">
          📩
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

export default Menu;
