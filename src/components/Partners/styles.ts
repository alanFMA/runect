import styled from 'styled-components';

export const PartnersContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #0f3c19;
  padding-bottom: 100px;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const PartnersTitle = styled.h2`
  font-size: 2.2rem;
  color: white;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;

export const PartnersRetangle = styled.img`
  width: 60%;
  align-self: flex-start;
  transform: scaleX(-1);
`;

export const PartnersGrid = styled.div`
  display: grid;
  margin-top: 50px;
  column-gap: 30px;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
  }
`;

export const PartnersGridItem = styled.div`
  display: flex;
`;

export const PartnersGridItemImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    @media screen and (max-width: 991px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const PartnersGridItemText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1rem;
  color: white;
  h3 {
    margin-bottom: 10px;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
