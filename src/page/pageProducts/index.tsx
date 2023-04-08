import styled from 'styled-components';
import useFetchProducts from '../../hooks/useFetchProducts';
import Products from '../../components/Products';

const StyledProducts = styled.div``;

function PageProducts() {
  const { products } = useFetchProducts();

  return (
    <StyledProducts>
      <Products products={products} />
    </StyledProducts>
  );
}

export default PageProducts;
