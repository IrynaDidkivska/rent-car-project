import { useDispatch, useSelector } from 'react-redux';
import { SpriteSVG } from '../../../public/SpriteSVG';
import {
  selectItem,
  selectValueBrand,
  selectValuePrice,
} from '../../redux/selectors';
import {
  StyledIconDollar,
  StyledIconSelect,
  StyledLabelSelect,
  StyledSelectBrand,
  StyledSelectPrice,
  Wrapper,
} from './Select.styled';
import uniq from 'lodash.uniq';
import { selectBrand, selectPrice } from '../../redux/Slice';

export const Selects = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);
  const valueBrand = useSelector(selectValueBrand);

  const valuePrice = useSelector(selectValuePrice);

  const brandOptions = uniq(items.map(({ make }) => make))
    .sort()
    .map(brand => ({
      value: brand,
      label: brand,
    }));

  const priceOption = uniq(
    items.map(({ rentalPrice }) => Number(rentalPrice.replace('$', '')))
  )
    .sort((a, b) => a - b)
    .map(price => ({
      value: price,
      label: price,
    }));

  return (
    <>
      <Wrapper>
        <StyledLabelSelect>Car brand</StyledLabelSelect>
        <StyledSelectBrand
          placeholder="Enter the text"
          options={brandOptions}
          value={{ value: valueBrand, label: valueBrand }}
          classNamePrefix="react-select"
          onChange={e => dispatch(selectBrand(e.value))}
          components={{
            DropdownIndicator: () => (
              <StyledIconSelect>
                <SpriteSVG name={'select'} />
              </StyledIconSelect>
            ),
          }}
        ></StyledSelectBrand>
      </Wrapper>
      <Wrapper>
        <StyledLabelSelect>Price/ 1 hour</StyledLabelSelect>
        <StyledSelectPrice
          placeholder={
            <>
              <StyledIconDollar>
                <SpriteSVG name={'dollar'} />
              </StyledIconDollar>
              To
            </>
          }
          options={priceOption}
          value={{ value: valuePrice, label: valuePrice }}
          classNamePrefix="react-select"
          onChange={e => dispatch(selectPrice(e.value))}
          components={{
            DropdownIndicator: () => (
              <StyledIconSelect>
                <SpriteSVG name={'select'} />
              </StyledIconSelect>
            ),
          }}
        ></StyledSelectPrice>
      </Wrapper>
    </>
  );
};
