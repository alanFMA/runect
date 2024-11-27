import styled from 'styled-components';

export const HoldingsContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f4dd19;
  padding: 100px 0 50px 0;
  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const HoldingsTitle = styled.h2`
  font-size: 2.2rem;
  color: #0f3c19;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;

export const HoldingsRetangle = styled.img`
  width: 60%;
  color: #0f3c19;
  align-self: flex-end;
`;

export const HoldingsGrid = styled.div`
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

export const HoldingsGridItem = styled.div`
  display: flex;
`;

export const HoldingsGridItemImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    @media screen and (max-width: 991px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const HoldingsGridItemText = styled.div`
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
