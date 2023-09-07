import { Wrapper } from '../Select/Select.styled';
import {
  StyledInputFrom,
  StyledInputTo,
  StyledLabelFilter,
} from './Filter.styled';

export const Filter = () => {
  return (
    <Wrapper>
      <StyledLabelFilter>Сar mileage / km</StyledLabelFilter>
      <div>
        <StyledInputFrom type="number" name="from" placeholder="From" />
        <StyledInputTo type="number" name="to" placeholder="   To" />
      </div>
    </Wrapper>
  );
};
