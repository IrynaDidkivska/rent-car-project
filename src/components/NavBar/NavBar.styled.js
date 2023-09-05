import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  font-family: Manrope-Medium;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.mainBlack};
  transition: all 300ms ease-in-out;
  &:hover {
    font-weight: 600;
  }
`;
