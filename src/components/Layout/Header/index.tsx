import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  
  a {
    width: 20%;
    font-size: 2rem;
    padding: 1rem;
    
    &:hover {
      color: #000;
    }
  }
`;

function Header() {
  return (
    <StyledNavigation>
      <Link to="/">
        home
      </Link>
      <Link to="/products">
        products
      </Link>
    </StyledNavigation>
  );
}

export default Header;
