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

const Seventeen: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 17</h1>
          <h2>NR 17 – Ergonomia</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar das normativas,
                parâmetros e procedimentos das condições do ambiente de
                trabalho, buscando proporcionar a excelência aos trabalhadores
                do mesmo.
              </p>
              <h3>Carga horária mínima: 8 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Apresentação;</li>
                <li>Análise Ergonômica Manejo;</li>
                <li>Manual de Cargas;</li>
                <li>Mobiliário dos Postos de Trabalho;</li>
                <li>Equipamentos dos Postos de Trabalho;</li>
                <li>Condições Ambientais de Trabalho;</li>
                <li>Organização do Trabalho;</li>
                <li>
                  Atividades com Sobrecarga Muscular Estática ou Dinâmica;
                </li>
                <li>
                  Equação do Nioschi para o Levantamento Manual de Cargas;
                </li>
                <li>LER e DORT (Lesão por esforço repetitivo);</li>
                <li>
                  Operadores de Caixa - Organização e Aspectos Psicossociais do
                  Trabalho;
                </li>
                <li>Operadores de Caixa - Formação;</li>
                <li>
                  Operadores de Telemarketing - Equipamentos e Ambiente do Posto
                  de Trabalho;
                </li>
                <li>Operadores de Telemarketing - Organização do Trabalho;</li>
                <li>
                  Operadores de Telemarketing - Capacitação dos Trabalhadores;
                </li>
                <li>Operadores de Telemarketing - PCMSO;</li>
                <li>Operadores de Telemarketing - Outras Disposições.</li>
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

export default Seventeen;
