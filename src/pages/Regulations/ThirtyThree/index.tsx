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

const ThirtyThree: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 33</h1>
          <h2>NR 33 – Espaço Confinado</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar das normativas,
                reconhecimento, identificação, análise e monitoramento/controle
                de riscos do espaço. Buscando trazer segurança e saúde aos
                indivíduos que estão ligados direta ou diretamente a área
                confinada.
              </p>
              <h3>Carga horária mínima: 16 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Legislação;</li>
                <li>Definições;</li>
                <li>Reconhecimento, avaliação e controle de riscos;</li>
                <li>Funcionamento de equipamentos;</li>
                <li>
                  Procedimentos e utilização da permissão de entrada e trabalho;
                </li>
                <li>Noções de resgate e primeiros socorros;</li>
                <li>
                  Simulação prática em espaços confinados, resgate e primeiros
                  socorros;
                </li>
                <li>Técnicas de ventilação e uso de EPR;</li>
                <li>Seleção dos equipamentos e seu correto uso;</li>
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

export default ThirtyThree;
