import styled from 'styled-components';
import { StyledList } from '../../components/Card/Card.styled';

export const WithNav = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const SideBarThumb = styled.div`
  width: 40%;
  padding: 20px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const StyledListFav = styled(StyledList)`
  justify-content: flex-end;
  margin-top: 0;
`;
