import React from 'react';

import { Container, Content, Text } from '../regulations.styles';

const Six: React.FC = () => (
  <Container>
    <Content>
      <Text>
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

export default Six;
