import { useEffectOnce } from 'usehooks-ts';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CategoriesStore from '../stores/CategoriesStore';

const useFetchCategories = () => {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);

  useEffectOnce(() => {
    store.fetchCategories();
  });

  return { categories };
};

export default useFetchCategories;
