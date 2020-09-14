import React from 'react';

import {
  Container,
  Content,
  Text,
  TextContainer,
  TextTitle,
  TextContent,
} from '../regulations.styles';
import Footer from '../../../components/Footer';

const ThirtyFive: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 35</h1>
          <h2>NR 35 –Trabalho em Altura</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar das normativas,
                práticas e procedimentos de trabalho em altura, visando a
                segurança, saúde do ambiente.
              </p>
              <h3>Carga horária mínima: 16 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Legislação;</li>
                <li>Análise de risco e condições impeditivas;</li>
                <li>
                  Riscos potenciais inerentes ao trabalho em altura e medidas de
                  prevenção e controle;
                </li>
                <li>
                  Sistemas, equipamentos e procedimentos de proteção coletiva;
                </li>
                <li>
                  Equipamentos de proteção individual para trabalho em altura:
                  seleção, inspeção, conservação e limitação de uso;
                </li>
                <li>Acidentes típicos;</li>
                <li>
                  Condutas em situações de emergência, incluindo noções de
                  técnicas de resgate e primeiros socorros;
                </li>
                <li>Simulação prática.</li>
                <a href="#none">Ir ao vídeo</a>
              </ul>
            </TextContent>
            <a href="#top">Voltar ao topo</a>
          </TextContainer>
        </section>
      </Text>
      <Footer />
    </Content>
  </Container>
);

export default ThirtyFive;
