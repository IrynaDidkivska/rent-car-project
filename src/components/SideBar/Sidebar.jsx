import { GrHomeRounded } from 'react-icons/gr';
import { LiaCarSideSolid } from 'react-icons/lia';
import { StyledLink } from '../NavBar/NavBar.styled';

function SideBar() {
  return (
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
  );
}

export default SideBar;
