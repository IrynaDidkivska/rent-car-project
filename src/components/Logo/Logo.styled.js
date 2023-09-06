import { styled } from "styled-components";
export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
//
export const StyledLogoIcon = styled.p`
  display: block;
  width: 40px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
`;
export const StyledLogoIconSec = styled.p`
  display: block;
  width: 40px;
  height: 15px;
  background-color: yellow;
`;

export const StyledLogo = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const StyledLogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
