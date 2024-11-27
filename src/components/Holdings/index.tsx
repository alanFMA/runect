import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  HoldingsContent,
  HoldingsGrid,
  HoldingsGridItem,
  HoldingsGridItemImage,
  HoldingsRetangle,
  HoldingsTitle,
} from './styles';
import Websummit from '../../assets/web-summit.svg';
import InovaAmazonia from '../../assets/inova-amazonia.svg';
import RuralShow from '../../assets/rural-show.svg';
import StartUpSummit from '../../assets/startup-summit.svg';
import Inovativa from '../../assets/inovativa.svg';
import Retangle from '../../assets/retangle-green.svg';

function Holdings() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <HoldingsContent>
      <HoldingsTitle>Participações:</HoldingsTitle>
      <HoldingsRetangle src={Retangle} alt="" />
      <HoldingsGrid>
        <HoldingsGridItem>
          <HoldingsGridItemImage>
            <img
              src={Websummit}
              alt="Websummit"
              style={{ marginRight: isSmallScreen ? '15px' : '0px' }}
            />
          </HoldingsGridItemImage>
        </HoldingsGridItem>
        <HoldingsGridItem>
          <HoldingsGridItemImage style={{ marginRight: '15px' }}>
            <img src={InovaAmazonia} alt="InovaAmazonia" />
          </HoldingsGridItemImage>
        </HoldingsGridItem>
        <HoldingsGridItem>
          <HoldingsGridItemImage style={{ marginRight: '15px' }}>
            <img src={RuralShow} alt="Support" />
          </HoldingsGridItemImage>
        </HoldingsGridItem>
        <HoldingsGridItem>
          <HoldingsGridItemImage style={{ marginRight: '15px' }}>
            <img src={StartUpSummit} alt="Support" />
          </HoldingsGridItemImage>
        </HoldingsGridItem>
        <HoldingsGridItem>
          <HoldingsGridItemImage style={{ marginRight: '15px' }}>
            <img src={Inovativa} alt="Support" />
          </HoldingsGridItemImage>
        </HoldingsGridItem>
      </HoldingsGrid>
    </HoldingsContent>
  );
}

export default Holdings;
