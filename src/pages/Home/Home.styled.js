import { styled } from "styled-components";

export const StyledWrapTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const StyledWrapList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
  flex-direction: column;
`;
export const StyledList = styled.ul`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
`;
export const StyledItem = styled.li`
  p {
    font-size: 20px;
  }
`;
export const StyledItemService = styled.li`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;

  padding: 5px;
  border-radius: 14px;
  width: 33%;
  p {
    font-size: 20px;
  }
`;
export const StyledHomeIcon = styled.div`
  fill: ${({ theme }) => theme.link.background};
  width: 50px;
`;
export const StyledSubTitle = styled.h3`
  text-align: center;
  font-size: 24px;
`;

export const StyledTextLink = styled.a`
  font-family: inherit;
  color: ${({ theme }) => theme.link.background};
  font-size: 20px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.link.backgroundHover};
    text-decoration: underline;
  }
`;
