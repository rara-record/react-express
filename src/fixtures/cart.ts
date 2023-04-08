import { Cart } from '../types';

const cart:Cart = {
  lineItems: [
    {
      id: '0BV000CLI0001',
      product: {
        id: '0BV000PRO0001',
        name: '맨투맨',
      },
      options: [
        {
          name: '컬러',
          item: {
            name: 'black',
          },
        },
      ],
      unitPrice: 128000,
      quantity: 2,
      totalPrice: 256000,
    },
  ],
  totalPrice: 256000,
};

export default cart;
