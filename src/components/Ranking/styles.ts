import styled from 'styled-components';

export const Titulo = styled.h2`
  text-align: center;
  margin: 25px 0;
`;

export const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Aluno = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px auto;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  &:first-child {
    img {
      border: 5px solid #ffd700;
    }
  }

  &:nth-child(2) {
    img {
      border: 5px solid #c0c0c0;
    }
  }
  &:nth-child(3) {
    img {
      border: 5px solid #cd7f32;
    }
  }
`;

export const Description = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
