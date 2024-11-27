import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  PartnersContent,
  PartnersGrid,
  PartnersGridItem,
  PartnersGridItemImage,
  PartnersGridItemText,
  PartnersRetangle,
  PartnersTitle,
} from './styles';
import Hubro from '../../assets/logo-hubro.svg';
import Mogno from '../../assets/logo-mogno.svg';
import Sebrae from '../../assets/sebrae-logo141014114709.svg';
import Tr3s from '../../assets/logo-tr3s.svg';
import Tambaqui from '../../assets/logo-tambaqui.svg';
import Retangle from '../../assets/retangle-whychoose.svg';

function Partners() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <PartnersContent>
      <PartnersTitle>Parceiros:</PartnersTitle>
      <PartnersRetangle src={Retangle} alt="" />
      <PartnersGrid>
        <PartnersGridItem>
          <PartnersGridItemImage>
            <img
              src={Hubro}
              alt="Hubro"
              style={{ marginRight: isSmallScreen ? '15px' : '0px' }}
            />
          </PartnersGridItemImage>
        </PartnersGridItem>
        <PartnersGridItem>
          <PartnersGridItemImage style={{ marginRight: '15px' }}>
            <img src={Mogno} alt="Mogno" />
          </PartnersGridItemImage>
        </PartnersGridItem>
        <PartnersGridItem>
          <PartnersGridItemImage style={{ marginRight: '15px' }}>
            <img src={Sebrae} alt="Support" />
          </PartnersGridItemImage>
        </PartnersGridItem>
        <PartnersGridItem>
          <PartnersGridItemImage style={{ marginRight: '15px' }}>
            <img src={Tr3s} alt="Support" />
          </PartnersGridItemImage>
        </PartnersGridItem>
        <PartnersGridItem>
          <PartnersGridItemImage style={{ marginRight: '15px' }}>
            <img src={Tambaqui} alt="Support" />
          </PartnersGridItemImage>
        </PartnersGridItem>
      </PartnersGrid>
    </PartnersContent>
  );
}

export default Partners;
