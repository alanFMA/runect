import styled from 'styled-components';

export const WhyChooseContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  width: 100%;
  background: #0f3c19;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const WhyChooseTitle = styled.h2`
  font-size: 2.2rem;
  color: white;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;

export const WhyChooseRetangle = styled.img`
  width: 70%;
  align-self: flex-end;
`;

export const WhyChooseGrid = styled.div`
  display: grid;
  margin-top: 70px;
  width: 80%;
  max-width: 1100px;
  column-gap: 30px;
  align-self: center;
  grid-template-columns: 30% 34% 36%;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

export const WhyChooseGridItem = styled.div`
  display: flex;
  height: 70%;
`;

export const WhyChooseGridItemImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    @media screen and (max-width: 991px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const WhyChooseGridItemText = styled.div`
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
