export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  providerId: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    providerId: 1
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    providerId: 2
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    providerId: 3
  },
  {
    id: 4,
    name: 'Phone 4',
    price: 399,
    description: 'The fourth phone of its class',
    providerId: 2
  },
  {
    id: 5,
    name: 'Phone 5',
    price: 199,
    description: '',
    providerId: 1
  },
  {
    id: 6,
    name: 'Phone 6',
    price: 1199,
    description: 'A perfect phone for a programmer',
    providerId: 3
  }
];