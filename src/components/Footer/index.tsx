import React from 'react';
import { FiFacebook, FiInstagram, FiPhone, FiMail } from 'react-icons/fi';

import { Container, Content, Contact, Socials } from './styles';

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
              <FiPhone color={'#F7EBEC'} size={36} /> +55 47 99191-9241
            </p>
            <p>
              <FiMail color={'#F7EBEC'} size={36} /> contato@emseg.com.br
            </p>
          </div>
        </Contact>
        <Socials>
          <div>
            <strong>Redes Sociais</strong>
          </div>
          <div id="contents">
            <FiFacebook color={'#F7EBEC'} size={48} />
            <FiInstagram color={'#F7EBEC'} size={48} />
          </div>
        </Socials>
      </Content>
    </Container>
  );
};

export default Footer;
