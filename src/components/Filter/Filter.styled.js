import { styled } from 'styled-components';

export const StyledLabelFilter = styled.p`
  position: absolute;
  bottom: 60px;
  transform: translateY(50%);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.title};
`;
export const StyledInput = styled.input`
  width: 105px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #f7f7fb;
  &::placeholder {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    color: ${({ theme }) => theme.colors.mainBlack};
  }
  @media screen and (min-width: 1280px) {
    width: 160px;
  }
`;
export const StyledInputFrom = styled(StyledInput)`
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;
export const StyledInputTo = styled(StyledInput)`
  border-radius: 0px 14px 14px 0px;
`;
