import { styled } from 'styled-components';

export const StyledForm = styled.form`
  width: 541px;
  height: 752px;
  overflow: hidden;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 15px 40px 52px 35px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background};
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
//Title
export const StyledNameForm = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
`;
export const StyledNameAccentForm = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

//Desc
export const StyledDescrForm = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;
