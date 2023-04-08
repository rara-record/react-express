import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductSummary } from '../../types';

type ProductProps = {
  product: ProductSummary
}

type ProductsProps = {
  products: ProductSummary[];
}

const StyledProductsContainer = styled.div``;

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
  return (
    <StyledProductsContainer>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </StyledProductsContainer>
  );
}

export default Products;
