import axios from 'axios/index';
import { Category, ProductSummary } from '../types';

// API의 base URL을 지정하기 위해 환경변수를 활용한다.
const API_BASE_URL = process.env.API_BASE_URL
  || 'https://shop-demo-api-01.fly.dev';

// API 호출을 모아주는 ApiService를 만든다.
export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  async fetchProducts():Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products');
    const { products } = data;
    return products;
  }
}

export const apiService = new ApiService();
