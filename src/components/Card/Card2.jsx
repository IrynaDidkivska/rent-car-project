import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SpriteSVG } from "../../../public/SpriteSVG";
import {
  StyledDescr,
  StyledFavBtn,
  StyledFavIcon,
  StyledFavIconChecked,
  StyledImg,
  StyledImgWrapper,
  StyledLearnMore,
  StyledName,
  StyledNameAccent,
  StyledWrapperName,
} from "./Card2.styled";
import { addFavorites, removeFavorites, modalOpen } from "../../redux/Slice";

export const Card2 = ({ item, isFavorite }) => {
  const dispatch = useDispatch();

  return (
    <li key={item.id}>
      <StyledImgWrapper>
        <StyledImg src={item.img} alt={item.make} width="274" />
        <StyledFavBtn>
          {(isFavorite && (
            <StyledFavIconChecked
              onClick={() => {
                dispatch(removeFavorites(item.id));
              }}
            >
              <SpriteSVG name="favorite" />
            </StyledFavIconChecked>
          )) || (
            <StyledFavIcon
              onClick={() => {
                dispatch(addFavorites(item.id));
              }}
            >
              <SpriteSVG name="favorite" />
            </StyledFavIcon>
          )}
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
          <p>{item.address.split(",")[1].trim()}</p>
          <p>{item.address.split(",")[2].trim()}</p>
          <p>{item.rentalCompany}</p>
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

Card2.propTypes = {
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
