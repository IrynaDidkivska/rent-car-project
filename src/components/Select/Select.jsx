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
    items.map(
      ({ rentalPrice }) =>
        Math.round(Number(rentalPrice.replace('$', '')) / 10) * 10
    )
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
          aria-label="Select car brand"
          options={brandOptions}
          placeholder="Enter the text"
          // value={
          //   valueBrand
          //     ? { value: valueBrand, label: valueBrand }
          //     : { value: '', label: 'Enter the text' }
          // }
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
          aria-label="Select car price"
          placeholder={
            <>
              <StyledIconDollar>
                <SpriteSVG name={'dollar'} />
              </StyledIconDollar>
              To
            </>
          }
          options={priceOption}
          // value={{ value: valuePrice, label: valuePrice }}
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
