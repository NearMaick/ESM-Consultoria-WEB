import React from 'react';

import { Container, Content, Text } from '../regulations.styles';

const Eleven: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section id="nr11">
          <h1>Norma Regulamentar 11</h1>
          <h2>
            NR 11 - Segurança para transporte, armazenamento, movimentação e
            manuseio de materiais
          </h2>
          <div className="text">
            <div className="partone">
              <p>
                Este curso tem como intuito instruir e capacitar para normas
                técnicas visando os indivíduos que iram trabalhar direta ou
                indiretamente com transporte, armazenamento, movimentação e
                manuseio de materiais, buscando apresentar seus riscos,
                prevenções e condições de trabalho.
              </p>
              <h3>Carga horária mínima: 16 horas.</h3>
              <a href="#top">Voltar ao topo</a>
            </div>
            <div className="parttwo">
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
            </div>
          </div>
        </section>
      </Text>
    </Content>
  </Container>
);

export default Eleven;
