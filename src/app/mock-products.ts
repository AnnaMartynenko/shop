import { ProductModel } from './product-model';

export const PRODUCTS: ProductModel[] = [
  { id: 1, name: 'Tomato', description: 'Fresh juicy tomatoes', price: 10, isAvailable: true},
  { id: 2, name: 'Hummus', description: 'Savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic',
  price: 20,  isAvailable: true},
  { id: 3, name: 'Potato', description: 'Fresh and tasty', price: 12,  isAvailable: false}
];
