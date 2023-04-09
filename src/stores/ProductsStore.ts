import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import axios from 'axios/index';
import { ProductSummary } from '../types';

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

@singleton()
@Store()
class ProductsStore {
  // 데이터 담을 빈 배열 생성
  products: ProductSummary[] = [];

  // fetch 함수 생성
  async fetchProducts() {
    this.setProducts([]);

    const { data } = await axios.get(`${apiBaseUrl}/products`);
    const { products } = data;

    this.setProducts(products ?? []);
  }

  // action 함수 생성
  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}

export default ProductsStore;
