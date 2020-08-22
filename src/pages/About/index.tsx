import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Text } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

import AboutImage from '../../assets/aboutImage.png';
import Footer from '../../components/Footer';

const About: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Content>
      <Text>
        <p>
          A ESM SEG, é uma empresa que nasceu em 2012, com propósito de aumentar
          a cultura de segurança nos colaboradores. Devido aos treinamentos em
          todo território nacional, e seguindo uma tendência mundial, que visa a
          erradicação ou a diminuição dos acidentes de trabalho. Levamos uma
          didática diferenciada, voltada principalmente em um fácil entendimento
          para os alunos e colaboradores e o público em geral, sempre trazendo a
          segurança e a responsabilidade em primeiro lugar, com temas atuais e
          íntegros, mas com fácil entendimento e com muita empatia, para um
          melhor link entre os instrutores e os participantes(alunos e
          colaboradores). Com isso visamos uma melhora na cultura da segurança e
          nas atividades com o uso corretos dos equipamentos e das técnicas de
          um sistema de gestão de segurança integrada, quase que,
          instintivamente para uma melhora efetiva nos quadros de acidentes ou
          de incidentes.
        </p>
        <Link to="/consulting">Nossa consultoria</Link>
      </Text>
      <img src={AboutImage} alt="Sobre nós" />
    </Content>
    <Footer />
  </Container>
);

export default About;
