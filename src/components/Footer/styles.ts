import styled from 'styled-components';

export const FooterContent = styled.main`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background: #f4dd19;
  padding-bottom: 100px;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  width: 100%;
`;
