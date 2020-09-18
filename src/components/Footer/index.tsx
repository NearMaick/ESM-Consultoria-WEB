import React from 'react';
import { Link } from 'react-router-dom';
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
          <div>
            <p>
              <FiPhone color={'#F7EBEC'} size={36} /> +55 47 99191-9241
            </p>
            <a href="mailto:contato@emseg.com.br">
              <FiMail color={'#F7EBEC'} size={36} /> contato@emseg.com.br
            </a>
          </div>
        </Contact>
        <Socials>
          <div>
            <strong>Redes Sociais</strong>
          </div>
          <div id="contents">
            <Link
              to={{ pathname: 'https://www.facebook.com/esmseg' }}
              target="_blank"
            >
              <FiFacebook color={'#F7EBEC'} size={48} />
            </Link>
            <Link
              to={{ pathname: 'https://www.instagram.com/meloedgarsilvade/' }}
              target="_blank"
            >
              <FiInstagram color={'#F7EBEC'} size={48} />
            </Link>
          </div>
        </Socials>
      </Content>
    </Container>
  );
};

export default Footer;
