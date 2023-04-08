import styled from 'styled-components';
import useFetchProducts from '../../hooks/useFetchProducts';
import Products from '../../components/Products';

const StyledProducts = styled.div`
  padding: 50px 20px;
  
  h2 {
    font-size: 36px;
    padding: 1rem;
  }
`;

function PageProducts() {
  const { products } = useFetchProducts();

  return (
    <StyledProducts>
      <h2>Products</h2>
      <Products products={products} />
    </StyledProducts>
  );
}

export default PageProducts;
