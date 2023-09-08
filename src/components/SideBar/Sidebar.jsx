import { StyledLink } from '../NavBar/NavBar.styled';
import { GrHomeRounded } from 'react-icons/gr';
import { LiaCarSideSolid } from 'react-icons/lia';

function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/">
            Home
            <GrHomeRounded />
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">
            Catalog
            <LiaCarSideSolid style={{ width: '1.5em', height: '1.5em' }} />
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
