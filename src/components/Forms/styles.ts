import styled from 'styled-components';

export const FormsContent = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #0f3c19;
  padding-bottom: 100px;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const FormsTitle = styled.h2`
  font-size: 2.2rem;
  color: #f4dd19;
  font-weight: 700;
  text-align: center;
  margin: 40px auto;
`;

export const FormsDiv = styled.div`
  width: 40%;
  height: 50%;
  background-color: #f4f3f3;
`;

export const Container = styled.div`
  width: 60%;
  border: 1px solid red;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContent = styled.div`
  width: 75%;
  text-align: justify;
  color: #0f3c19;
  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;
