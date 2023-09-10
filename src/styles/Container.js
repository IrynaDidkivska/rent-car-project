import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 150px;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (min-width: 428px) {
    width: 428px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 32px;
    padding-left: 32px;
  }
`;
