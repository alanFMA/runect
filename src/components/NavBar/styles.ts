import styled from 'styled-components';

const Logo = styled.img`
  width: 40%;
  height: auto;

  @media screen and (min-width: 599px) {
    width: 30%;
  }

  @media screen and (min-width: 899px) {
    width: 20%;
  }
`;

export default Logo;
