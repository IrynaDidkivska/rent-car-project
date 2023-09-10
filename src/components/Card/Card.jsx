import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SpriteSVG } from '../../../public/SpriteSVG';
import {
  StyledFavBtn,
  StyledFavIcon,
  StyledImg,
  StyledImgWrapper,
  StyledLearnMore,
  StyledName,
  StyledNameAccent,
  StyledWrapperName,
} from './Card.styled';
import { addFavorites, removeFavorites, modalOpen } from '../../redux/Slice';
import { StyledDescr } from '../../styles/Text';
import { renderPremium } from '../../helpers/premium';

export const Card = ({ item, isFavorite }) => {
  const dispatch = useDispatch();

  const toggleFavorites = () => {
    if (!isFavorite) {
      dispatch(addFavorites(item.id));
    } else {
      dispatch(removeFavorites(item.id));
    }
  };

  return (
    <li key={item.id}>
      <StyledImgWrapper>
        <StyledImg src={item.img} alt={item.make} width="274" />
        <StyledFavBtn onClick={toggleFavorites}>
          <StyledFavIcon $isFavorite={isFavorite}>
            <SpriteSVG name="favorite" />
          </StyledFavIcon>
        </StyledFavBtn>
      </StyledImgWrapper>
      <div>
        <StyledWrapperName>
          <StyledName>
            {item.make.toLowerCase()}
            <StyledNameAccent> {item.model}</StyledNameAccent>,{item.year}
          </StyledName>
          <StyledName>{item.rentalPrice}</StyledName>
        </StyledWrapperName>
        <StyledDescr>
          <p>{item.address.split(',')[1].trim()}</p>
          <p>{item.address.split(',')[2].trim()}</p>
          <p>{item.rentalCompany}</p>
          {renderPremium(item)}
        </StyledDescr>
        <StyledDescr>
          <p>{item.type}</p>
          <p>{item.model}</p>
          <p>{item.id}</p>
          <p>{item.functionalities[0]}</p>
        </StyledDescr>
        <StyledLearnMore
          type="button"
          onClick={() => dispatch(modalOpen(item.id))}
        >
          Learn more
        </StyledLearnMore>
      </div>
    </li>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
