import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { Category } from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
class CategoriesStore {
  // 데이터 담을 빈 배열 생성
  categories: Category[] = [];

  // fetch 함수 생성
  async fetchCategories() {
    this.setCategories([]);

    const categories = await apiService.fetchCategories();

    this.setCategories(categories ?? []);
  }

  // action 함수 생성
  @Action()
  setCategories(categories: Category[]) {
    this.categories = categories;
  }
}

export default CategoriesStore;
