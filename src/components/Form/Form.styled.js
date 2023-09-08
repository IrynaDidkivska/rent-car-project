import { styled } from 'styled-components';
import { StyledSpan } from '../../styles/Text';

export const StyledForm = styled.form`
  width: 541px;
  overflow: hidden;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  gap: 24px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background};
  img {
    border-radius: 14px;
    background: #f3f3f2;
  }
`;
//Wrappers
export const ImgAnfTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;
export const AccAndFuncWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
export const StyledCloseIcon = styled.div`
  display: block;
  cursor: pointer;
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.mainBlack};
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const StyledLinkCall = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  border-radius: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  color: ${({ theme }) => theme.link.textColor};
  background: ${({ theme }) => theme.link.background};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.link.backgroundHover};
  }
`;

//SubTitle
export const StyledSubtitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
//Desc
export const StyledDescrForm = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;
//Rental Cond
export const StyledCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
export const StyledRentCondWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.secondaryBlack};
`;
export const StyledItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;
export const StyledSpanForm = styled(StyledSpan)`
  font-weight: 600;
`;
export const StyledImgForm = styled.img`
  object-fit: cover;
  width: 461px;
  height: 248px;
`;
export const StyledDiv = styled.div`
  display: flex;
`;
