import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  WhyChooseContent,
  WhyChooseGrid,
  WhyChooseGridItem,
  WhyChooseGridItemImage,
  WhyChooseGridItemText,
  WhyChooseRetangle,
  WhyChooseTitle,
} from './styles';
import Retangle from '../../assets/retangle-whychoose.svg';
import Mobile from '../../assets/mobile-whychoose.svg';
import Security from '../../assets/security-whychoose.svg';
import Support from '../../assets/support-whychoose.svg';

function WhyChoose() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <WhyChooseContent>
      <WhyChooseTitle>Por que escolher a Runect?</WhyChooseTitle>
      <WhyChooseRetangle src={Retangle} alt="" />
      <WhyChooseGrid>
        <WhyChooseGridItem>
          <WhyChooseGridItemImage>
            <img
              src={Mobile}
              alt="Mobile"
              style={{ marginRight: isSmallScreen ? '15px' : '0px' }}
            />
          </WhyChooseGridItemImage>
          <WhyChooseGridItemText>
            <h3>Facilidade de Uso:</h3>
            <p>
              Nossa plataforma é intuitiva e fácil de usar, permitindo que você
              encontre rapidamente o técnico profissional certo para suas
              necessidades.
            </p>
          </WhyChooseGridItemText>
        </WhyChooseGridItem>
        <WhyChooseGridItem>
          <WhyChooseGridItemImage style={{ marginRight: '15px' }}>
            <img src={Security} alt="Mobile" />
          </WhyChooseGridItemImage>
          <WhyChooseGridItemText>
            <h3>Segurança e Confiança:</h3>
            <p>
              Todos os profissionais técnicos em nossa plataforma passam por um
              rigoroso processo de seleção, garantindo a qualidade e a
              confiabilidade dos serviços prestados.
            </p>
          </WhyChooseGridItemText>
        </WhyChooseGridItem>
        <WhyChooseGridItem>
          <WhyChooseGridItemImage style={{ marginRight: '15px' }}>
            <img src={Support} alt="Support" />
          </WhyChooseGridItemImage>
          <WhyChooseGridItemText>
            <h3>Suporte Contínuo:</h3>
            <p>
              Estamos sempre aqui para ajudar. <br /> Se você tiver alguma
              dúvida ou problema, nossa equipe de suporte dedicada está pronta
              para ajudar a resolver qualquer questão
            </p>
          </WhyChooseGridItemText>
        </WhyChooseGridItem>
      </WhyChooseGrid>
    </WhyChooseContent>
  );
}

export default WhyChoose;
