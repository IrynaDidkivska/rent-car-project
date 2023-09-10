import { useDispatch, useSelector } from 'react-redux';
import { StyledLoadMore, StyledList } from '../../components/Card/Card.styled';
import {
  selectModal,
  selectItem,
  selectCurrentPage,
  selectItemsPerPage,
  selectFavorites,
  selectCarValues,
} from '../../redux/selectors';
import { loadMoreItems } from '../../redux/Slice';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Card } from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { Form } from '../../components/Form/Form';
import { filterItems } from '../../helpers/filter';

const Catalog = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  const items = useSelector(selectItem);
  const currentPage = useSelector(selectCurrentPage);
  const itemPerPage = useSelector(selectItemsPerPage);
  const favoriteItems = useSelector(selectFavorites);

  const { valueBrand, valuePrice, valueFrom, valueTo } =
    useSelector(selectCarValues);

  const filteredItems = filterItems(
    items,
    valueBrand,
    valuePrice,
    valueFrom,
    valueTo
  );

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
export default Catalog;
