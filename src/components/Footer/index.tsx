import React from 'react';
import { useMediaQuery } from '@mui/material';
import RunectAgro from '../../assets/runect-agro.png';
import Instagram from '../../assets/instagram.png';
import Whatsapp from '../../assets/whatsapp.png';
import Linkedin from '../../assets/linkedin.png';
import Mobile from '../../assets/mobile-whychoose.svg';
import Security from '../../assets/security-whychoose.svg';
import Support from '../../assets/support-whychoose.svg';
import { FooterContent, FooterDiv } from './styles';

function Footer() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <FooterContent>
      <FooterDiv>
        <img src={RunectAgro} alt="runect" />
      </FooterDiv>
      <FooterDiv>
        <img src={Whatsapp} alt="Whatsapp" />
        <img src={Instagram} alt="Instagram" />
        <img src={Linkedin} alt="Linkedin" />
      </FooterDiv>
    </FooterContent>
  );
}

export default Footer;
