import { styled } from "styled-components";

export const StyledLabelFilter = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.title};
`;
export const StyledInput = styled.input`
  width: 160px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  border: none;
  outline: none;

  background-color: #f7f7fb;
  &::placeholder {
    color: ${({ theme }) => theme.colors.mainBlack};
  }
`;
export const StyledInputFrom = styled(StyledInput)`
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;
export const StyledInputTo = styled(StyledInput)`
  border-radius: 0px 14px 14px 0px;
`;
