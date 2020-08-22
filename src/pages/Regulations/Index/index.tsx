import React from 'react';

import { Container, Content, Text } from '../regulations.styles';

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
  </Container>
);

export default Index;
