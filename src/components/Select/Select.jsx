import { useDispatch, useSelector } from 'react-redux';

import { SpriteSVG } from '../../../public/SpriteSVG';
import { selectCarValues, selectItem } from '../../redux/selectors';
import {
  StyledIconDollar,
  StyledIconSelect,
  StyledLabelSelect,
  StyledSelectBrand,
  StyledSelectPrice,
  Wrapper,
} from './Select.styled';
import uniq from 'lodash.uniq';
import { selectBrand, selectPrice } from '../../redux/Select/selectSlice';

export const Selects = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);
  const { valueBrand, valuePrice } = useSelector(selectCarValues);
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
          clearValue={null}
          value={valueBrand ? { value: valueBrand, label: valueBrand } : null}
          onChange={selectedOption =>
            dispatch(selectBrand(selectedOption ? selectedOption.value : ''))
          }
          classNamePrefix="react-select"
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
          clearValue={null}
          options={priceOption}
          value={valuePrice ? { value: valuePrice, label: valuePrice } : null}
          classNamePrefix="react-select"
          onChange={selectedOption =>
            dispatch(selectPrice(selectedOption ? selectedOption.value : ''))
          }
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
