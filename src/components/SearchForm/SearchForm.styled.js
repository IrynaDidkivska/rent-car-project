import { styled } from 'styled-components';
import { StyledBtn } from '../../styles/Button';

export const StyledSearchBtn = styled(StyledBtn)`
  min-width: 100px;
  padding-top: 12px;
  padding-bottom: 12px;
  @media screen and (min-width: 1280px) {
    min-width: 136px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;
export const StyledSearcgForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;
