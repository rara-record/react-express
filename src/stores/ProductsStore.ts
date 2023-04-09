import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { ProductSummary } from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
class ProductsStore {
  // 데이터 담을 빈 배열 생성
  products: ProductSummary[] = [];

  // fetch 함수 생성
  async fetchProducts() {
    this.setProducts([]);

    const products = await apiService.fetchProducts();

    this.setProducts(products ?? []);
  }

  // action 함수 생성
  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}

export default ProductsStore;
