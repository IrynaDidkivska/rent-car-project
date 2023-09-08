import styled from 'styled-components';

export const StyledOptions = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;
export const StyledTextMain = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
`;
export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
export const StyledDescr = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  p:not(:last-child) {
    position: relative;
    margin-right: 12px;
  }
  p:not(:last-child)::after {
    content: '';
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
