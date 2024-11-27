import React from 'react';
import { useMediaQuery } from '@mui/material';
import RunectAgro from '../../assets/runect-agro.png';
import Instagram from '../../assets/instagram.png';
import Whatsapp from '../../assets/whatsapp.png';
import Linkedin from '../../assets/linkedin.png';
import Mobile from '../../assets/mobile-whychoose.svg';
import Security from '../../assets/security-whychoose.svg';
import Support from '../../assets/support-whychoose.svg';
import { FooterContent, FooterDiv, FooterLogo, FooterSocial } from './styles';

function Footer() {
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <FooterContent>
      <FooterDiv>
        <FooterLogo>
          <img src={RunectAgro} alt="runect" />
        </FooterLogo>
        <FooterSocial>
          <a
            href="https://wa.me/5569993594809?text=Quero%20saber%20mais%20sobre%20o%20Runect%20App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/runect.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/runect-app/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </FooterSocial>
      </FooterDiv>
    </FooterContent>
  );
}

export default Footer;
