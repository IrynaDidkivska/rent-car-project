import { styled } from 'styled-components';
import { StyledBtn } from '../../styles/Button';

export const StyledSearchBtn = styled(StyledBtn)`
  min-width: 120px;
  padding-top: 14px;
  padding-bottom: 14px;
  @media screen and (min-width: 1280px) {
    min-width: 136px;
  }
`;
export const StyledSearcgForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 38px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
  }
`;
