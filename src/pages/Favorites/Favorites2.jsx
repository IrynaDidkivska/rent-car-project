import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { Card2 } from "../../components/Card/Card2";
import { StyledLoadMore, StyledList } from "../../components/Card/Card2.styled";
import { Form } from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import {
  selectModal,
  selectItem,
  selectCurrentPage,
  selectItemsPerPage,
  selectFavorites,
} from "../../redux/selectors";
import { loadMoreItems } from "../../redux/Slice";

export const Favorites2 = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  const items = useSelector(selectItem);
  const currentPage = useSelector(selectCurrentPage);
  const itemPerPage = useSelector(selectItemsPerPage);
  const favoriteItems = useSelector(selectFavorites);
  const filteredItems = items.filter((item) => favoriteItems.includes(item.id));

  useEffect(() => {
    // TODO: IMPORTAD. Need call in Layout
    dispatch(fetchCars());
  }, [dispatch]);

  const showedItems = currentPage * itemPerPage;
  return (
    <>
      <StyledList>
        {filteredItems.map((item) => (
          <Card2 key={item.id} item={item} isFavorite={true} />
        ))}
      </StyledList>
      {showedItems < filteredItems.length && (
        <StyledLoadMore type="button" onClick={() => dispatch(loadMoreItems())}>
          Load more
        </StyledLoadMore>
      )}
      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </>
  );
};
