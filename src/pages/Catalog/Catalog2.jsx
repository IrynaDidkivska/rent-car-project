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

export const Catalog2 = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  const items = useSelector(selectItem);
  const currentPage = useSelector(selectCurrentPage);
  const itemPerPage = useSelector(selectItemsPerPage);
  const favoriteItems = useSelector(selectFavorites);

  useEffect(() => {
    // TODO: IMPORTAD. Need call in Layout
    dispatch(fetchCars());
  }, [dispatch]);

  const showedItems = currentPage * itemPerPage;
  return (
    <>
      <StyledList>
        {items.slice(0, showedItems).map((item) => (
          <Card2
            key={item.id}
            item={item}
            isFavorite={favoriteItems.includes(item.id)}
          />
        ))}
      </StyledList>
      {showedItems < items.length && (
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
