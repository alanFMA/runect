import React from 'react';
import Header from '../../components/Header';
import CadastroContent from '../../components/CadastroContent';
import Welcome from '../../components/Welcome';
import WhyChoose from '../../components/WhyChoose';
import HowTo from '../../components/HowTo';
import Partners from '../../components/Partners';
import Holdings from '../../components/Holdings';
import Team from '../../components/Team';
import Forms from '../../components/Forms';
import Footer from '../../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <Welcome />
    <WhyChoose />
    <HowTo />
    <Partners />
    <Holdings />
    <Team />
    <Forms />
    <Footer />
    {/* <br />
    <br />
    <h1>Site em Construção</h1> */}
  </>
);

export default Home;
