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

const Ten: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <section>
          <h1>Norma Regulamentar 10</h1>
          <h2>NR 10 – Segurança em instalações elétricas</h2>
          <TextContainer>
            <TextTitle>
              <p>
                Este curso tem como intuito instruir e capacitar para normas
                técnicas visando os indivíduos que iram trabalhar direta ou
                indiretamente com instalações e serviços elétricos quer seja em
                nível industrial ou comercial.
              </p>
              <h3>Carga horária mínima: 40 horas.</h3>
            </TextTitle>
            <TextContent>
              <h3>Conteúdo Programático</h3>
              <ul>
                <li>Apresentação da Norma NR 10;</li>
                <li>Introdução à Eletricidade;</li>
                <li>Energia Elétrica - Geração, Transmissão e Distribuição;</li>
                <li>
                  Atividades de Manutenção e Inspeção na Geração, Transmissão e
                  Distribuição;
                </li>
                <li>
                  Riscos em Instalações e Serviços com Eletricidade - Choque
                  Elétrico;
                </li>
                <li>Tipos de Choques Elétricos;</li>
                <li>Efeitos do Choque Elétrico - Contrações Musculares;</li>
                <li>Efeitos do Choque Elétrico - Queimaduras;</li>
                <li>Causas Determinantes de Choques Elétricos;</li>
                <li>Os Perigos do Arco Elétrico;</li>
                <li>Campos Eletromagnéticos;</li>
                <li>Outros Perigos e Riscos de Ambiente;</li>
                <li>Causas Diretas de Acidentes com Eletricidade;</li>
                <li>Causas Indiretas de Acidentes com Eletricidade;</li>
                <li>Medidas de Controle do Risco Elétrico - MCRE;</li>
                <li>MCRE - Desenergização;</li>
                <li>
                  MCRE - Aterramento Funcional, de Proteção e Temporário (TN /
                  TT / IT);
                </li>
                <li>MCRE - Equipotencialização;</li>
                <li>MCRE - Seccionamento Automático da Alimentação;</li>
                <li>
                  MCRE - Dispositivo de proteção a corrente diferencial-residual
                  –DR;
                </li>
                <li>MCRE - Proteção por Extrabaixa Tensão: SELV E PELV;</li>
                <li>MCRE - Barreiras e Invólucros;</li>
                <li>MCRE - Bloqueios e Impedimentos;</li>
                <li>MCRE - Isolamento;</li>
                <li>
                  MCRE - Proteção por Colocação Fora de Alcance e Separação
                  Elétrica;
                </li>
                <li>
                  Equipamentos de Proteção Coletiva e Individual (EPC/EPI);
                </li>
                <li>
                  Primeiros Socorros em Caso de Acidente com Eletricidade;
                </li>
                <li>Documentação de Instalações Elétricas;</li>
                <li>Normas ABNT sobre Instalações Elétricas.</li>
              </ul>
            </TextContent>
            <a href="#top">Voltar ao topo</a>
          </TextContainer>
        </section>
      </Text>
    </Content>
    <Footer />
  </Container>
);

export default Ten;
