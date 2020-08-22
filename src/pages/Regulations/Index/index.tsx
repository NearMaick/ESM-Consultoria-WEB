import React from 'react';

import { Container, Content, Text } from '../regulations.styles';
import Footer from '../../../components/Footer';

const Index: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentares</h1>
          <div className="text">
            <div className="partone">
              <p>
                Clique em qualquer norma regulamentar no cabeçalho para exibir
                seus detalhes:
              </p>
            </div>
          </div>
        </section>
      </Text>
    </Content>
    <Footer />
  </Container>
);

export default Index;
