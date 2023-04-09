import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductSummary } from '../../types';
import numberFormat from '../../utils/numberFormat';

type ProductProps = {
  product: ProductSummary
}

type ProductsProps = {
  products: ProductSummary[];
}

const StyledProductsContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  li {
    width: 20%;
    padding: 1rem;
  }
  
  a {
    display: block;
  }
  
`;

const StyledThumbnail = styled.img.attrs({
  alt: 'Thumbnail',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;

`;

function Product({ product }: ProductProps) {
  return (
    <div>
      <StyledThumbnail src={product.thumbnail.url} />
      <div>{product.name}</div>
    </div>

  );
}

function Products({ products }: ProductsProps) {
  if (!products.length) {
    return <div>loading...</div>;
  }

  return (
    <StyledProductsContainer>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
              <div>{numberFormat(product.price)}</div>
            </Link>
          </li>
        ))}
      </ul>
    </StyledProductsContainer>
  );
}

export default Products;
