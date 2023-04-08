import { ProductDetail } from '../types';

const products: ProductDetail[] = [
  {
    id: '0BV000PRO0001',
    category: {
      id: '0BV000CAT0001',
      name: 'top',
    },
    images: [
      {
        url: 'https://example.com/products/01.jpg',
      },
    ],
    name: '맨투맨',
    price: 128000,
    options: [
      {
        id: '0BV000OPT0001',
        name: '컬러',
        items: [
          {
            id: '0BV000ITEM001',
            name: 'black',
          },
          {
            id: '0BV000ITEM002',
            name: 'white',
          },
        ],
      },
      {
        id: '0BV000OPT0002',
        name: '사이즈',
        items: [
          {
            id: '0BV000ITEM003',
            name: 'S',
          },
          {
            id: '0BV000ITEM004',
            name: 'M',
          },
        ],
      },
    ],
    description: '편하게 입을 수 있는 맨투맨',
  },
];

export default products;
