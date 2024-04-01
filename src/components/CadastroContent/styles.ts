/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row;
  color: #fff;

  @media screen and (max-width: 901px) {
    flex-direction: column;
    width: 100%;
  }
`;
