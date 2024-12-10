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
    flex-direction: column;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const FooterLogo = styled.div`
  width: 50%;
  img {
    width: 25%;
    min-width: 200px;
    max-width: 300px;
  }
`;
export const FooterSocial = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 60%;
    min-width: 40px;
  }

  @media screen and (max-width: 991px) {
    height: 100px;
    margin-top: 15px;
  }
`;
