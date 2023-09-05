import { StyledLink, StyledList } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <nav>
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
      </StyledList>
    </nav>
  );
};
