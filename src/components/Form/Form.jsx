import { useDispatch, useSelector } from 'react-redux';
import { SpriteSVG } from '../../../public/SpriteSVG';
import {
  AccAndFuncWrapper,
  ImgAnfTitleWrapper,
  StyledCloseIcon,
  StyledCont,
  StyledDescrForm,
  StyledForm,
  StyledItem,
  StyledLinkCall,
  StyledRentCondWrapper,
  StyledSubtitle,
} from './Form.styled';
import { selectId, selectItem } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { modalClose } from '../../redux/Slice';

import {
  StyledDescr,
  StyledOptions,
  StyledSpan,
  StyledTextMain,
} from '../../styles/Text';

export const Form = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);
  const id = useSelector(selectId);

  const filteredItem = items.filter(el => el.id === id)[0];
  console.log('Filtered', filteredItem);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(modalClose());
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledCloseIcon
        onClick={() => {
          console.log('Close icon');
          dispatch(modalClose());
        }}
      >
        <SpriteSVG name={'close'} />
      </StyledCloseIcon>
      <ImgAnfTitleWrapper>
        <img src={filteredItem.img} alt={filteredItem.make} />
        <StyledTextMain>
          {filteredItem.make.toLowerCase()}
          <StyledSpan> {filteredItem.model}</StyledSpan>, {filteredItem.year}
        </StyledTextMain>
        <StyledDescr>
          <p>{filteredItem.address.split(',')[1].trim()}</p>
          <p>{filteredItem.address.split(',')[2].trim()}</p>
          <p>Id: {filteredItem.id}</p>
          <p>Year: {filteredItem.year}</p>
          <p>Type: {filteredItem.type}</p>
          <p>Fuel Consumption: {filteredItem.fuelConsumption}</p>
          <p>Engine Size: {filteredItem.engineSize.split('-')[0].trim()}</p>
        </StyledDescr>
        <StyledDescrForm> {filteredItem.description}</StyledDescrForm>
      </ImgAnfTitleWrapper>
      <AccAndFuncWrapper>
        <StyledSubtitle>Accessories and functionalities:</StyledSubtitle>
        <StyledOptions>
          <p>{filteredItem.accessories.join(' | ')}</p>
          <p>{filteredItem.functionalities.join(' | ')}</p>
        </StyledOptions>
      </AccAndFuncWrapper>

      <StyledCont>
        <StyledSubtitle> Rental Conditions:</StyledSubtitle>
        <StyledRentCondWrapper>
          <StyledItem>
            <p>
              Minimum age :{' '}
              <StyledSpan>
                {filteredItem.rentalConditions.split('\n')[0].split(': ')[1]}
              </StyledSpan>
            </p>
          </StyledItem>
          <StyledItem>
            <p>{filteredItem.rentalConditions.split('\n')[1]}</p>
          </StyledItem>
          <StyledItem>
            <p>{filteredItem.rentalConditions.split('\n')[2]} </p>
          </StyledItem>
          <StyledItem>
            <p>
              Mileage:{' '}
              <StyledSpan>
                {filteredItem.mileage.toLocaleString('en-US')}
              </StyledSpan>
            </p>
          </StyledItem>
          <StyledItem>
            <p>
              Price:{' '}
              <StyledSpan>{filteredItem.rentalPrice.substring(1)}$</StyledSpan>
            </p>
          </StyledItem>
        </StyledRentCondWrapper>
      </StyledCont>
      <StyledLinkCall href="tel:+380730000000">Rental car</StyledLinkCall>
    </StyledForm>
  );
};
