import React from 'react';

import BurguerMenu from '../../components/BurguerMenu';
import { Container, Content, Text } from './styles';

const Consulting: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Content>
      <Text>
        <h1>Consultoria</h1>
        <p>
          Com dificuldades nas normas técnicas? Não sabe por onde começar ou
          acabar? Ligue e marque já um orçamento, sempre estaremos com
          profissionais prontos para buscar a melhor solução para você.
        </p>
        <h1>Palestras</h1>
        <p>
          Está tendo problemas em conseguir passar as diretrizes de segurança
          para os seus funcionários sem ser maçante? Estamos prontos para
          auxiliá-los, com profissionais especializados e prontos para passar o
          conhecimento de maneira focada e diferente. Ligue e marque já um
          orçamento.
        </p>
      </Text>
      <h2>Imagem</h2>
    </Content>
    <Content>
      <Text>
        <h1>SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho)</h1>
        <p>
          Precisa fazer a semana de prevenção? Estamos prontos para auxílio com
          uma das melhores equipes para passar de uma maneira diferente a
          segurança de trabalho para seus colaboradores. Ligue e marque já um
          orçamento.{' '}
        </p>
      </Text>
      <h2>Imagem</h2>
    </Content>
    <Content>
      <Text>
        <h1>Plano de Evacuação e abandono de área</h1>
        <p>
          Necessita fazer um plano de evacuação para sua indústria ou complexo?
          Nossa equipe está pronta para auxiliar sua empresa a criar o plano de
          evacuação que melhor se adequa a você, marque uma visita já para
          podermos planejar.
        </p>
      </Text>
      <h2>Imagem</h2>
    </Content>
  </Container>
);

export default Consulting;
