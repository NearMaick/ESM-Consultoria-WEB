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

const Six: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 06</h1>
          <h2>NR 06 – EPI (Equipamento de proteção individual)</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir as normas técnicas,
                ressaltar a importância, identificação, manutenção e ciclo de
                vida geral dos equipamentos de proteção individuais.
              </p>
              <h3>Carga horária mínima: 4 horas.</h3>
            </TextTitle>
            <TextContent>
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

export default Six;
