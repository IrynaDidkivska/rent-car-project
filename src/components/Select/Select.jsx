import { SpriteSVG } from '../../../public/SpriteSVG';
import {
  StyledIconDollar,
  StyledIconSelect,
  StyledLabelSelect,
  StyledSelectBrand,
  StyledSelectPrice,
  Wrapper,
} from './Select.styled';
export const Selects = () => {
  return (
    <>
      <Wrapper>
        <StyledLabelSelect>Car brand</StyledLabelSelect>
        <StyledSelectBrand
          placeholder="Enter the text"
          // options={normalized}
          // defaultValue={initialValue}
          // value={initialValue}
          classNamePrefix="react-select"
          // onChange={(e) => handleCategoriId(e)}
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
          // options={normalized}
          // defaultValue={initialValue}
          // value={initialValue}
          classNamePrefix="react-select"
          // onChange={(e) => handleCategoriId(e)}
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
