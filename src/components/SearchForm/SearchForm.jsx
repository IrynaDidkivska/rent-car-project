import { useDispatch } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { Selects } from '../Select/Select';
import { StyledSearcgForm, StyledSearchBtn } from './SearchForm.styled';
import { clearFilter } from '../../redux/Select/selectSlice';

export default function SearchForm() {
  const dispatch = useDispatch();
  const handleSearch = e => {
    e.preventDefault();
    dispatch(clearFilter());
  };
  return (
    <StyledSearcgForm onSubmit={handleSearch}>
      <Selects />
      <Filter />
      <StyledSearchBtn type="submit">Search</StyledSearchBtn>
    </StyledSearcgForm>
  );
}
