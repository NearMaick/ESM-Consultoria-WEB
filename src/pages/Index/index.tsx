import React from 'react';
import { Link } from 'react-router-dom';
import { Main, Description, Container } from './styles';

import BurguerMenu from '../../components/BurguerMenu';

import ImageIndex from '../../assets/imageIndex01.png';
import Logo from '../../assets/logo.svg';
import Footer from '../../components/Footer';

const Index: React.FC = () => (
  <Container>
    <BurguerMenu />
    <Main>
      <section>
        <div id="image">
          <img src={Logo} alt="ESM Consultoria" />
        </div>
        <h1>ESM Consultoria</h1>
        <h2>Experiência em treinamentos moldado para seu negócio.</h2>
        <h3>
          <strong>Treinamentos de segurança do trabalho à distancia. </strong>
        </h3>
        <h3>Instrutores treinados e prontos para te atender.</h3>
      </section>
    </Main>

    <Description>
      <div className="description">
        <div className="desc">
          <h1>Quem Somos?</h1>
          <p>
            Somos uma
            <strong> empresa de treinamento em segurança do trabalho </strong>
            que está no mercado a
            <strong> mais de 15 anos trabalhando in company</strong>, já
            treinamos nas mais variadas áreas da segurança do trabalho e em
            diversas empresas tais como: Souza Cruz, Cadence, CELESC, Petrobrás
            entre outras.
          </p>
          <div>
            <Link to="/about">Conte-nos mais</Link>
          </div>
        </div>
        <div className="desc">
          <img src={ImageIndex} alt="Edgar consultoria" />
        </div>
      </div>
    </Description>
    <Footer />
  </Container>
);

export default Index;
