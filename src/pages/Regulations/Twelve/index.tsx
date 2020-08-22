import React from 'react';

import { Container, Content, Text } from '../regulations.styles';

const Twelve: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section id="nr12">
          <h1>Norma Regulamentar 12</h1>
          <h2>NR 12 - Segurança de trabalho em máquinas e equipamentos</h2>
          <div className="text">
            <div className="partone">
              <p>
                Este curso tem como intuito instruir e capacitar para normas
                técnicas visando os indivíduos que iram trabalhar direta ou
                indiretamente com máquinas e equipamentos, buscando apresentar
                seus riscos, manutenções, prevenções, manuseios e condições de
                trabalho.
              </p>
              <h3>Carga horária mínima: 16 horas.</h3>
              <a href="#top">Voltar ao topo</a>
            </div>
            <div className="parttwo">
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Normas Técnicas;</li>
                <li>
                  Descrição, identificação dos riscos associados com máquinas e
                  equipamentos;
                </li>
                <li>Funcionamento dos equipamento de proteção;</li>
                <li>Princípios de segurança;</li>
                <li>
                  Segurança para riscos mecânicos, elétricos e outros
                  relevantes;
                </li>
                <li>Método de trabalho seguro;</li>
                <li>Utilização e Segurança do Equipamento;</li>
                <li>Operacionalização do Equipamento;</li>
                <li>Permissão de trabalho;</li>
                <li>Sistemas de bloqueio durante operações;</li>
                <li>Simulação Prática;</li>
              </ul>
            </div>
          </div>
        </section>
      </Text>
    </Content>
  </Container>
);

export default Twelve;
