import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  TeamContent,
  TeamGrid,
  TeamGridItem,
  TeamGridItemImage,
  TeamGridItemText,
  TeamRetangle,
  TeamTitle,
} from './styles';
import Elipse from '../../assets/elipse.svg';
import Darlan from '../../assets/elipse-darlan.svg';
import Davi from '../../assets/davi.png';
import Matheus from '../../assets/matheus.png';
import Enoque from '../../assets/enoque.jpg';
import Alan from '../../assets/alan.png';
import RuralShow from '../../assets/rural-show.svg';
import StartUpSummit from '../../assets/startup-summit.svg';
import Inovativa from '../../assets/inovativa.svg';
import Retangle from '../../assets/retangle-green.svg';

function Team() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <TeamContent>
      <TeamTitle>Nosso time:</TeamTitle>
      <TeamRetangle src={Retangle} alt="" />
      <TeamGrid>
        <TeamGridItem>
          <TeamGridItemImage>
            <img src={Matheus} alt="Websummit" />
          </TeamGridItemImage>
          <TeamGridItemText>
            <h3>Matheus Aranha</h3>
            <p>CEO - Diretor Executivo</p>
          </TeamGridItemText>
        </TeamGridItem>
        <TeamGridItem>
          <TeamGridItemImage>
            <img src={Davi} alt="Elipse" />
          </TeamGridItemImage>
          <TeamGridItemText>
            <h3>Davi Fonseca</h3>
            <p>CMO - Diretor de Marketing</p>
          </TeamGridItemText>
        </TeamGridItem>
        <TeamGridItem>
          <TeamGridItemImage>
            <img src={Enoque} alt="Support" />
          </TeamGridItemImage>
          <TeamGridItemText>
            <h3>Enoque Belmiro</h3>
            <p>Head de Inovação e Tecnologia</p>
          </TeamGridItemText>
        </TeamGridItem>
        <TeamGridItem>
          <TeamGridItemImage>
            <img src={Darlan} alt="Support" />
          </TeamGridItemImage>
          <TeamGridItemText>
            <h3>Darlan Targino</h3>
            <p>UX e UI Design</p>
          </TeamGridItemText>
        </TeamGridItem>
        <TeamGridItem>
          <TeamGridItemImage>
            <img src={Alan} alt="Support" />
          </TeamGridItemImage>
          <TeamGridItemText>
            <h3>Alan Monteiro</h3>
            <p>Analista de Sistemas</p>
          </TeamGridItemText>
        </TeamGridItem>
      </TeamGrid>
    </TeamContent>
  );
}

export default Team;
