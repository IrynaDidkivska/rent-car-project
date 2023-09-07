import {
  StyledInputFrom,
  StyledInputTo,
  StyledLabelFilter,
} from "./Filter.styled";

export const Filter = () => {
  return (
    <div>
      <StyledLabelFilter>Сar mileage / km</StyledLabelFilter>
      <div>
        <StyledInputFrom type="number" name="from" placeholder="From" />
        <StyledInputTo type="number" name="to" placeholder="   To" />
      </div>
    </div>
  );
};
