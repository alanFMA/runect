/* eslint-disable */
import React from 'react';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import {
  WelcomeContent,
  WelcomeImage,
  WelcomeLogo,
  WelcomeParagraph,
  WelcomeText,
  WelcomeTitle,
} from './styles';
import Phone from '../../assets/welcome-phone-teste.png';
import Logo from '../../assets/logo-runect.svg';

interface WelcomeProps {
  formRef: React.RefObject<HTMLDivElement>;
}

const Welcome: React.FC<WelcomeProps> = ({ formRef }) => {
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <WelcomeContent>
      <Container
        sx={{
          maxWidth: '1000px !important',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <WelcomeText>
          <WelcomeTitle>Bem vindo a</WelcomeTitle>
          <WelcomeLogo src={Logo} alt="" />
          <WelcomeParagraph>
            Conectamos de forma eficiente produtores rurais e especialistas
            técnicos agilizando a resolução de problemas e a implementação de
            soluções inovadoras no agronegócio.
          </WelcomeParagraph>
          <Button
            sx={{
              my: 2,
              color: '#0F3C19',
              fontWeight: 'bold',
              minWidth: '200px',
              textAlign: 'center',
              display: 'block',
              fontSize: '1.2rem',
              borderRadius: '10px',
              background: '#f4dd19',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                background: '#f4dd19',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
              },
            }}
            onClick={handleScrollToForm} // Adiciona o evento de clique
          >
            Saiba Mais
          </Button>
        </WelcomeText>
        <WelcomeImage src={Phone} alt="" />
      </Container>
    </WelcomeContent>
  );
};

export default Welcome;
