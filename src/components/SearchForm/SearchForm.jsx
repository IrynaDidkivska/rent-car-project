import { Filter } from '../Filter/Filter';
import { Selects } from '../Select/Select';
import { StyledSearcgForm, StyledSearchBtn } from './SearchForm.styled';

export default function SearchForm() {
  const handleSearch = e => {
    e.preventDefault();
    console.log('ffff', e);
  };
  return (
    <StyledSearcgForm onSubmit={handleSearch}>
      <Selects />
      <Filter />
      <StyledSearchBtn type="submit">Search</StyledSearchBtn>
    </StyledSearcgForm>
  );
}
