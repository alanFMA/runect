import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  HowToContent,
  HowToDiv,
  HowToGrid,
  HowToGridItem,
  HowToGridItemText,
  HowToImage,
  HowToTitle,
} from './styles';

import PhoneImage from '../../assets/howto-mockup.png';

function HowTo() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <HowToContent>
      <HowToTitle>Como funciona:</HowToTitle>
      <HowToDiv>
        <HowToImage src={PhoneImage} />
        <HowToGrid>
          <HowToGridItem>
            <HowToGridItemText>
              <h3>1. Conexão Direta:</h3>
              <p>
                Conectamos produtores rurais com profissionais técnicos de forma
                direta e eficiente. Não há intermediários, apenas uma conexão
                direta que agiliza o processo de contratação.
              </p>
            </HowToGridItemText>
          </HowToGridItem>
          <HowToGridItem>
            <HowToGridItemText>
              <h3>2. Eficiência e Velocidade:</h3>
              <p>
                Com a Runect, os produtores rurais podem contratar serviços com
                eficiência e velocidade. Não há mais perda de tempo buscando
                profissionais disponíveis - nós os encontramos para você.
              </p>
            </HowToGridItemText>
          </HowToGridItem>
          <HowToGridItem>
            <HowToGridItemText>
              <h3>3. Mais contratos fechados:</h3>
              <p>
                Para os profissionais técnicos, a Runect significa um aumento
                significativo no faturamento. Ao serem indicados diretamente aos
                produtores rurais, eles têm a oportunidade de expandir sua base
                de clientes e aumentar seus ganhos.
              </p>
            </HowToGridItemText>
          </HowToGridItem>
        </HowToGrid>
      </HowToDiv>
    </HowToContent>
  );
}

export default HowTo;
