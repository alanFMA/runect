import styled from 'styled-components';

export const TeamContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to bottom, #f4dd19 0%, #f4dd19 30%, #0f3c19 100%);
  padding: 50px 0;
  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const TeamTitle = styled.h2`
  font-size: 2.2rem;
  color: #0f3c19;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;

export const TeamRetangle = styled.img`
  width: 60%;
  color: #0f3c19;
  align-self: flex-start;
  transform: scaleX()-1;
`;

export const TeamGrid = styled.div`
  display: grid;
  margin-top: 50px;
  column-gap: 50px;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
  }
`;

export const TeamGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamGridItemImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    @media screen and (max-width: 991px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const TeamGridItemText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1rem;
  color: white;
  align-items: center;
  h3 {
    margin: 20px 0 5px 0;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
