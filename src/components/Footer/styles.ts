import styled from 'styled-components';

export const FooterContent = styled.main`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background: #f4dd19;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
`;

export const FooterLogo = styled.div`
  width: 50%;
`;
export const FooterSocial = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 60px;
  }
`;
