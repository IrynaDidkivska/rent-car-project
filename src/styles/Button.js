import { styled } from "styled-components";

export const StyledBtn = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.43;
  color: ${({ theme }) => theme.link.textColor};
  background-color: ${({ theme }) => theme.link.background};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.link.backgroundHover};
  }
`;
