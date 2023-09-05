import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../../redux/selectors";
import { SpriteSVG } from "../../../public/SpriteSVG";
import {
  StyledDescr,
  StyledFavBtn,
  StyledFavIcon,
  StyledImg,
  StyledImgWrapper,
  StyledLearnMore,
  StyledList,
  StyledName,
  StyledNameAccent,
  StyledWrapperName,
} from "./Card.styled";

export const Card = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);
  console.log(items);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div>
      <StyledList>
        {items.map((item) => (
          <li key={item.id}>
            <StyledImgWrapper>
              <StyledImg src={item.img} alt={item.make} width="274" />
              <StyledFavBtn>
                <StyledFavIcon>
                  <SpriteSVG name="favorite" />
                </StyledFavIcon>
              </StyledFavBtn>
            </StyledImgWrapper>
            <div>
              <StyledWrapperName>
                <StyledName>
                  {item.make}
                  <StyledNameAccent> {item.model}</StyledNameAccent>,{" "}
                  {item.year}
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
              </StyledDescr>
              <StyledLearnMore type="button">Learn more</StyledLearnMore>
            </div>
          </li>
        ))}
      </StyledList>
    </div>
  );
};
