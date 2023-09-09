import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../Select/Select.styled';
import {
  StyledInputFrom,
  StyledInputTo,
  StyledLabelFilter,
} from './Filter.styled';
import { selectCarValues } from '../../redux/selectors';
import { selectFrom, selectTo } from '../../redux/Select/selectSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const { valueFrom, valueTo } = useSelector(selectCarValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'from') {
      dispatch(selectFrom(value));
    } else if (name === 'to') {
      dispatch(selectTo(value));
    }
  };

  return (
    <Wrapper>
      <StyledLabelFilter>Сar mileage / km</StyledLabelFilter>
      <div>
        <StyledInputFrom
          type="number"
          name="from"
          placeholder="From"
          pattern="/^[+]?\d+(,\d+)?$/"
          value={valueFrom}
          onChange={handleInputChange}
        />
        <StyledInputTo
          type="number"
          name="to"
          placeholder="To"
          pattern="/^[+]?\d+(,\d+)?$/"
          value={valueTo}
          onChange={handleInputChange}
        />
      </div>
    </Wrapper>
  );
};
