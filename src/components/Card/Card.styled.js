import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  row-gap: 50px;
  column-gap: 28px;
`;
export const StyledFavBtn = styled.button`
  display: block;
  border: none;
  background-color: transparent;
`;
export const StyledFavIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.mainWhite};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: scale(1.1);
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;
export const StyledImgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  border-radius: 14px;
`;
export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const StyledWrapperName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledName = styled.p`
  font-weight: 500;
`;
export const StyledNameAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
export const StyledLearnMore = styled.button`
  min-width: 274px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.link.textColor};
  background-color: ${({ theme }) => theme.link.background};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.link.backgroundHover};
  }
`;

export const StyledDescr = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;
