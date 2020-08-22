import React from 'react';

import { Container, Content, Contact, Socials } from './styles';

import facebook from '../../assets/icon/facebook.svg';
import insta from '../../assets/icon/insta.svg';
import email from '../../assets/icon/email.svg';
import tel from '../../assets/icon/tel.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Contact>
          <div>
            <strong>Entre em contato conosco</strong>
          </div>
          <div id="contents">
            <p>
              <img src={tel} alt="tel" /> +55 47 99191-9241
            </p>
            <p>
              <img src={email} alt="email" /> contato@emseg.com.br
            </p>
          </div>
        </Contact>
        <Socials>
          <div>
            <strong>Redes Sociais</strong>
          </div>
          <div id="contents">
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="instagram" />
          </div>
        </Socials>
      </Content>
    </Container>
  );
};

export default Footer;
