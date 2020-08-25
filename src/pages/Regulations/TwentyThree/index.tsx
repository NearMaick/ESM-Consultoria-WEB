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

const TwentyThree: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 23</h1>
          <h2>NR 23 – Prevenção e Combate a Incêndio</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar das normativas,
                dos equipamentos e preparar para agir em situações de incêndios
                alinhando a evacuação e comportamento a ser adotado, buscando a
                segurança, evitar pânico e preservar o patrimônio sempre que
                possível levando em conta sempre a vida em primeiro lugar.
              </p>
              <h3>Carga horária mínima: 4 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Legislação;</li>
                <li>Teoria do fogo;</li>
                <li>Meios de propagação do fogo;</li>
                <li>Equipamentos de combate ao fogo;</li>
                <li>Abandono de área;</li>
                <li>Técnicas de prevenção de incêndios;</li>
                <li>
                  Reconhecimento, utilização de extintores de incêndios e
                  hidrantes;
                </li>
                <li>
                  Procedimentos para evacuação dos locais de trabalho com
                  segurança;
                </li>
                <li>Ferimentos e hemorragias;</li>
                <li>Fraturas e imobilização;</li>
                <li>Queimaduras;</li>
                <li>Emergências clínicas;</li>
                <li>
                  Treinamento prático de reanimação cardíaca em manequim de
                  treinamento.
                </li>
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

export default TwentyThree;
