import styled from 'styled-components';

export const HowToContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  width: 100%;
  background: linear-gradient(to bottom, #f4dd19 60%, #0f3c19 40%);

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const HowToDiv = styled.div`
  display: flex;
`;

export const HowToTitle = styled.h2`
  font-size: 2.2rem;
  color: #0f3c19;
  font-weight: 700;
  margin-left: 25%;
`;

export const HowToImage = styled.img`
  width: 50%;
  margin-top: -80px;
  z-index: +1;

  @media screen and (max-width: 991px) {
    height: 20%;
    align-self: center;
  }
`;

export const HowToGrid = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 20px;
  background-color: #84c94f;
  align-self: center;
  grid-template-columns: 1fr;
  height: 80vh;
  margin-left: -15%;
  padding: 5% 0 5% 10%;
  border-radius: 10% 0 0 10%;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr; /* Uma coluna no layout desktop */
  }
`;

export const HowToGridItem = styled.div`
  width: 50%;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const HowToGridItemImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    @media screen and (max-width: 991px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const HowToGridItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  line-height: 1rem;
  color: #0f3c19;
  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 991px) {
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
