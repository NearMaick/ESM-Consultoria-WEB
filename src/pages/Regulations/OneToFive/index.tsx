import React from 'react';

import { Container, Content, Text } from './styles';

const OneToFive: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section id="nr05">
          <h1>Norma Regulamentar 05</h1>
          <h2>NR 05 – CIPA (Comissão interna de prevenção de acidentes)</h2>
          <div className="text">
            <div className="partone">
              <p>
                Este curso tem como intuito instruir a importância, normas,
                rotinas e a busca de prevenção de acidentes e doenças
                decorrentes do ambiente de trabalho. Instruindo também quais são
                as competências e como utilizar as atribuições da CIPA, sempre
                mostrando a suas atuações e a busca contínua de identificar os
                riscos ambientais.
              </p>
              <h3>Carga horária mínima: 20 horas.</h3>
              <a href="#top">Voltar ao topo</a>
            </div>
            <div className="parttwo">
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
            </div>
          </div>
        </section>
        <section id="nr06">
          <h1>Norma Regulamentar 06</h1>
          <h2>NR 06 – EPI (Equipamento de proteção individual)</h2>
          <div className="text">
            <div className="partone">
              <p>
                Este curso tem como intuito instruir as normas técnicas,
                ressaltar a importância, identificação, manutenção e ciclo de
                vida geral dos equipamentos de proteção individuais.
              </p>
              <h3>Carga horária mínima: 4 horas.</h3>
              <a href="#top">Voltar ao topo</a>
            </div>
            <div className="parttwo">
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Conceitos e Definições;</li>
                <li>Certificado de Aprovação – CA;</li>
                <li>Responsabilidades e Competências;</li>
                <li>Tipos de EPI;</li>
                <li>EPI para Proteção da Cabeça;</li>
                <li>EPI para Proteção dos Olhos e Face;</li>
                <li>EPI para Proteção Auditiva;</li>
                <li>EPI para Proteção Respiratória;</li>
                <li>EPI para proteção do Tronco;</li>
                <li>EPI para Proteção dos Membros Superiores;</li>
                <li>EPI para Proteção dos Membros Inferiores;</li>
                <li>EPI para Proteção do Corpo Inteiro;</li>
                <li>EPI para Proteção Contra Quedas com Diferença de Nível.</li>
                <li>Validade do EPI;</li>
                <li>Manutenção, Conservação e Limpeza.</li>
              </ul>
            </div>
          </div>
        </section>
      </Text>
    </Content>
  </Container>
);

export default OneToFive;
