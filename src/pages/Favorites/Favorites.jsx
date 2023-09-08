import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';
import {
  selectModal,
  selectItem,
  selectCurrentPage,
  selectItemsPerPage,
  selectFavorites,
} from '../../redux/selectors';
import { loadMoreItems } from '../../redux/Slice';
import { Card } from '../../components/Card/Card';
import { StyledList, StyledLoadMore } from '../../components/Card/Card.styled';

export const Favorites = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  const items = useSelector(selectItem);
  const currentPage = useSelector(selectCurrentPage);
  const itemPerPage = useSelector(selectItemsPerPage);
  const favoriteItems = useSelector(selectFavorites);
  const filteredItems = items.filter(item => favoriteItems.includes(item.id));

  const showedItems = currentPage * itemPerPage;
  return (
    <>
      <StyledList>
        {filteredItems.map(item => (
          <Card key={item.id} item={item} isFavorite={true} />
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
