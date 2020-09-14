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

const Five: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 05</h1>
          <h2>NR 05 – CIPA (Comissão interna de prevenção de acidentes)</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir a importância, normas,
                rotinas e a busca de prevenção de acidentes e doenças
                decorrentes do ambiente de trabalho. Instruindo também quais são
                as competências e como utilizar as atribuições da CIPA, sempre
                mostrando a suas atuações e a busca contínua de identificar os
                riscos ambientais.
              </p>
              <h3>Carga horária mínima: 20 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Atribuições dos cipeiros;</li>
                <li>Atuação dos membros da cipa;</li>
                <li>Organização da cipa;</li>
                <li>Riscos ambientais;</li>
                <li>Mapa de riscos;</li>
                <li>Inspeção de segurança;</li>
                <li>EPI – Equipamento de Proteção Individual;</li>
                <li>Noções de prevenção e combate a incêndio;</li>
                <li>Acidente do trabalho;</li>
                <li>Conseqüências dos acidentes;</li>
                <li>Tipos de acidentes;</li>
                <li>Causas dos acidentes;</li>
                <li>CAT – Comunicação do Acidente de Trabalho;</li>
                <li>Benefícios previdenciários para o acidentado;</li>
                <li>Investigação dos acidentes;</li>
                <li>Noções sobre aids;</li>
                <li>Campanhas de segurança;</li>
                <li>Reunião da cipa - como se realiza.</li>
              </ul>
            </TextContent>
            <div>
              <a href="#top">Voltar ao topo</a>
              <a href="#none">Ir ao vídeo</a>
            </div>
          </TextContainer>
        </section>
      </Text>
      <Footer />
    </Content>
  </Container>
);

export default Five;
