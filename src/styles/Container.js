import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (min-width: 428px) {
    width: 428px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1158px) {
    width: 1158px;
    padding-right: 32px;
    padding-left: 32px;
  }
`;
