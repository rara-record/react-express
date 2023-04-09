import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
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
  const [params] = useSearchParams();

  const categoryId = params.get('categoryId') ?? undefined;

  const { products } = useFetchProducts({ categoryId });

  return (
    <StyledProducts>
      <h2>Products</h2>
      <Products products={products} />
    </StyledProducts>
  );
}

export default PageProducts;
