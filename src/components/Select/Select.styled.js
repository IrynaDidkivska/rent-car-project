import { styled } from 'styled-components';
import Select from 'react-select';
export const StyledSelect = styled(Select)`
  position: relative;

  /* Стили для выбранного значения */
  .react-select__single-value {
    margin: 0px;
    color: ${({ theme }) => theme.colors.mainBlack};
    font-family: Manrope-Regular;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
  .react-select__value-container {
    padding: 0;
    align-items: start;
  }
  .react-select__control {
    height: 48px;
    padding: 14px 18px 14px 18px;
    cursor: pointer;
    border-radius: 14px;
    background-color: #f7f7fb;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }

  .react-select__input-container {
    padding: 0;
    margin: 0;
  }

  /* Стили для опций (вариантов) */
  .react-select__option {
    color: ${({ theme }) => theme.colors.mainBlack};
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
  }

  .react-select__menu {
    padding: 14px 18px 14px 18px;
    border-radius: 14px;
    max-height: 272px;
    overflow: hidden;
    margin-bottom: 4px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    color: ${({ theme }) => theme.colors.mainBlack};
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }
  .react-select__menu-list {
    overflow-y: auto; /* Добавляем вертикальную прокрутку при необходимости */
    overflow-x: hidden; /* Скрываем горизонтальную полосу прокрутки */
  }
  .react-select__placeholder {
    margin: 0;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    color: ${({ theme }) => theme.colors.mainBlack};
  }

  .react-select__indicator-separator {
    display: none;
  }
  .react-select__control.react-select__control--menu-is-open
    .react-select__indicators {
    transform: rotate(-180deg);
  }
`;

export const StyledSelectBrand = styled(StyledSelect)`
  width: 170px;
  @media screen and (min-width: 1280px) {
    width: 224px;
  }
`;
export const StyledSelectPrice = styled(StyledSelect)`
  width: 125px;
`;

export const StyledIconSelect = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  stroke: ${({ theme }) => theme.colors.mainBlack};
  fill: transparent;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
`;

export const StyledIconDollar = styled.div`
  position: absolute;
  right: 34px;
  width: 11px;
  height: 20px;
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.colors.mainBlack};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
`;
export const StyledLabelSelect = styled.p`
  position: absolute;
  bottom: 60px;
  transform: translateY(50%);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.title};
`;
export const Wrapper = styled.div`
  position: relative;
`;
