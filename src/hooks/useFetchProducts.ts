import { useEffectOnce } from 'usehooks-ts';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductsStore from '../stores/ProductsStore';

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

const useFetchProducts = () => {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffectOnce(() => {
    store.fetchProducts();
  });

  return { products };
};

export default useFetchProducts;
