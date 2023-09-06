import { Logo } from "../Logo/Logo";
import { StyledLink, StyledList } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <nav>
      <StyledList>
        <li>
          <Logo />
        </li>
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
