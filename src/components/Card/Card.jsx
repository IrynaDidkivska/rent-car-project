import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectItem,
  selectItemsPerPage,
  selectFavorites,
} from "../../redux/selectors";
import { SpriteSVG } from "../../../public/SpriteSVG";
import {
  StyledDescr,
  StyledFavBtn,
  StyledFavIcon,
  StyledFavIconChecked,
  StyledImg,
  StyledImgWrapper,
  StyledLearnMore,
  StyledList,
  StyledLoadMore,
  StyledName,
  StyledNameAccent,
  StyledWrapperName,
} from "./Card.styled";
import {
  addFavorites,
  removeFavorites,
  loadMoreItems,
  modalOpen,
} from "../../redux/Slice";

export const Card = ({ isFavorite }) => {
  const dispatch = useDispatch();
  let items = useSelector(selectItem);
  const currentPage = useSelector(selectCurrentPage);
  const itemPerPage = useSelector(selectItemsPerPage);
  const favoriteItems = useSelector(selectFavorites);

  console.log("isFavorite", isFavorite);
  console.log("favoriteItems", favoriteItems);
  console.log("items1", items);

  if (isFavorite) {
    items = items.filter((item) => favoriteItems.includes(item.id));
  }

  console.log("items2", items);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreItems());
  };

  const showedItems = currentPage * itemPerPage;
  return (
    <div>
      <StyledList>
        {items.slice(0, showedItems).map((item) => (
          <li key={item.id}>
            <StyledImgWrapper>
              <StyledImg src={item.img} alt={item.make} width="274" />
              <StyledFavBtn>
                {(favoriteItems.includes(item.id) && (
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
        ))}
      </StyledList>
      {showedItems < items.length && (
        <StyledLoadMore type="button" onClick={handleLoadMore}>
          Load more
        </StyledLoadMore>
      )}
    </div>
  );
};
