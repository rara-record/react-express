import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetchCategories from '../../../hooks/useFetchCategories';

const StyledNavigation = styled.nav`
  width: 100%;
  height: 70px;
  
  padding: 20px 0;
  
  border-bottom: 1px solid #bcbcbc;
  
  ul {
    display: flex;
    justify-content: space-around;
  }
  
  a {

    font-size: 2rem;
    padding: 1rem;
    
    &:hover {
      color: #000;
    }
  }
`;

function Header() {
  const { categories } = useFetchCategories();

  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">
            home
          </Link>
        </li>
        <li>
          <Link to="/products">
            products
          </Link>
          {!!categories.length && (
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/products?categoryId=${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/cart">
            cart
          </Link>
        </li>
      </ul>

    </StyledNavigation>
  );
}

export default Header;
