import { styled } from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: 15px 40px 52px 35px;
  border-radius: ${({ theme }) => theme.spacing(6)};
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
