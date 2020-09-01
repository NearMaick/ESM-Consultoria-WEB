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

const Eleven: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 11</h1>
          <h2>
            NR 11 - Segurança para transporte, armazenamento, movimentação e
            manuseio de materiais
          </h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar para normas
                técnicas visando os indivíduos que irão trabalhar direta ou
                indiretamente com transporte, armazenamento, movimentação e
                manuseio de materiais, buscando apresentar seus riscos,
                prevenções e condições de trabalho.
              </p>
              <h3>Carga horária mínima: 16 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Normas Técnicas;</li>
                <li>Amarrações;</li>
                <li>Acessórios;</li>
                <li>Tipos de EPI;</li>
                <li>Cabos de aço;</li>
                <li>Capacidade de Carga;</li>
                <li>Utilização e Segurança do Equipamento;</li>
                <li>Operacionalização do Equipamento;</li>
                <li>Simulação Prática;</li>
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

export default Eleven;
