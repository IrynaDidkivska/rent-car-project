import { Filter } from "../Filter/Filter";
import { Selects } from "../Select/Select";
import { StyledSearcgForm, StyledSearchBtn } from "./SearchForm.styled";

export default function SearchForm() {
  return (
    <StyledSearcgForm>
      <Selects />
      <Filter />
      <StyledSearchBtn type="submit">Search</StyledSearchBtn>
    </StyledSearcgForm>
  );
}
