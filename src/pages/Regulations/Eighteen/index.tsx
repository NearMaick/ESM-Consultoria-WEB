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

const Eighteen: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 18</h1>
          <h2>NR 18 – Construção Civil</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar das normativas,
                planejamento e organização da indústria da construção civil para
                que auxilie em medidas de controle e proteção nos processos
                desse meio de trabalho.
              </p>
              <h3>Carga horária mínima: 6 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Legislação;</li>
                <li>Conceitos;</li>
                <li>Treinamentos;</li>
                <li>Áreas de Vivências;</li>
                <li>Equipamento de proteção coletiva/individual – EPC/EPI;</li>
                <li>Tipo de EPI’s e EPC’s;</li>
                <li>Trabalho em altura;</li>
                <li>Movimentação e transporte de materiais;</li>
                <li>Ferramentas manuais;</li>
                <li>Instalações elétricas;</li>
                <li>Noções de Primeiros socorros;</li>
                <li>Responsabilidade.</li>
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

export default Eighteen;
