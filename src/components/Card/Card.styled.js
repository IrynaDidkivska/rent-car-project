import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  row-gap: 50px;
  column-gap: ${({ theme }) => theme.spacing(2)};
`;
export const StyledFavBtn = styled.button`
  display: block;
  border: none;
  background-color: transparent;
`;
export const StyledFavIcon = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing(1)};
  right: ${({ theme }) => theme.spacing(1)};
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
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(1)};
`;

export const StyledWrapperName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledName = styled.p`
  text-transform: capitalize;
  font-weight: 500;
`;
export const StyledNameAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
export const StyledLearnMore = styled.button`
  min-width: 274px;
  margin-top: ${({ theme }) => theme.spacing(2)};
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  p {
    position: relative;
    margin-right: 12px;
  }
  p:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    margin: 0 auto;
    width: 1px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.text};
  }
`;
export const StyledLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0;
  border: none;
  border-bottom: 1px solid #3470ff;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.button.textColor};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.button.textColorHover};
  }
`;
