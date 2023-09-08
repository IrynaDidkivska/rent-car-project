import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../Select/Select.styled';
import {
  StyledInputFrom,
  StyledInputTo,
  StyledLabelFilter,
} from './Filter.styled';
import { selectValueFrom, selectValueTo } from '../../redux/selectors';
import { selectFrom, selectTo } from '../../redux/Slice';

export const Filter = () => {
  const dispatch = useDispatch();
  // const items = useSelector(selectItem);
  const valueFrom = useSelector(selectValueFrom);
  const valueTo = useSelector(selectValueTo);
  // console.log(valueFrom);

  // const valueTo = useSelector(selectValueTo);

  // const fromValue = uniq(
  //   items.map(({ mileage }) => mileage.toLocaleString('en-US'))
  // )
  //   .sort()
  //   .map(mileage => ({
  //     value: mileage,
  //     label: mileage,
  //   }));
  return (
    <Wrapper>
      <StyledLabelFilter>Сar mileage / km</StyledLabelFilter>
      <div>
        <StyledInputFrom
          type="number"
          name="from"
          placeholder="From"
          value={valueFrom}
          onChange={e => dispatch(selectFrom(e.target.value))}
        />
        <StyledInputTo
          type="number"
          name="to"
          placeholder="To"
          value={valueTo}
          onChange={e => dispatch(selectTo(e.target.value))}
        />
      </div>
    </Wrapper>
  );
};
