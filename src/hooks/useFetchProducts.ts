import { useFetch } from 'usehooks-ts';
import { ProductSummary } from '../types';

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

const useFetchProducts = () => {
  type TProductsData = {
    products: ProductSummary[]
  }

  const { data } = useFetch<TProductsData>(`${apiBaseUrl}/Products`);

  return { products: data?.products ?? [] };
};

export default useFetchProducts;
