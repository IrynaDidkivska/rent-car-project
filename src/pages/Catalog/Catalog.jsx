import { useDispatch, useSelector } from 'react-redux';

import { StyledLoadMore, StyledList } from '../../components/Card/Card.styled';

import {
  selectModal,
  selectItem,
  selectCurrentPage,
  selectItemsPerPage,
  selectFavorites,
  selectValueBrand,
  selectValuePrice,
  selectValueFrom,
  selectValueTo,
} from '../../redux/selectors';
import { loadMoreItems } from '../../redux/Slice';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Card } from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { Form } from '../../components/Form/Form';

export const Catalog = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  const items = useSelector(selectItem);
  const currentPage = useSelector(selectCurrentPage);
  const itemPerPage = useSelector(selectItemsPerPage);
  const favoriteItems = useSelector(selectFavorites);

  const valueBrand = useSelector(selectValueBrand);
  const valuePrice = useSelector(selectValuePrice);
  const valueFrom = useSelector(selectValueFrom);
  const valueTo = useSelector(selectValueTo);

  const filteredItems = items.filter(item => {
    if (valueBrand && item.make != valueBrand) {
      return false;
    }
    if (valuePrice) {
      const _price = Number(item.rentalPrice.replace('$', ''));
      if (_price > valuePrice) {
        return false;
      }
    }
    if (valueFrom && item.mileage < valueFrom) {
      return false;
    }
    if (valueTo && item.mileage > valueTo) {
      return false;
    }
    return true;
  });

  const showedItems = currentPage * itemPerPage;
  return (
    <>
      <SearchForm />
      <StyledList>
        {filteredItems.slice(0, showedItems).map(item => (
          <Card
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
