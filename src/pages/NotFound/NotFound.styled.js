import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 5px;
  font-family: Manrope-SemiBold;
  font-size: 24px;
  color: ${({ theme }) => theme.link.textColor};
  cursor: pointer;

  transition: all 300ms ease-in-out;
  &:hover {
    font-size: 26px;
    text-decoration: underline;
    color: ${({ theme }) => theme.link.textColor};
  }
`;
export const StyledThumb = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  background: linear-gradient(
    220deg,
    rgb(6 104 252 / 90%) 3.47%,
    rgb(16 155 222 / 60%) 90.06%
  );
`;
export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainBlack};
`;
export const StyledTextErr = styled.p`
  font-family: Manrope-Medium;
  font-size: 100px;
  color: ${({ theme }) => theme.colors.mainBlack};
`;
export const StyledText = styled.p`
  font-family: Manrope-Medium;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.mainBlack};
`;
