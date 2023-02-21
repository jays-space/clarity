// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "FEMALE": "FEMALE",
  "MALE": "MALE"
};

const { Cart, User, Child, Product, Collection, CartProduct, Address, Coords } = initSchema(schema);

export {
  Cart,
  User,
  Child,
  Product,
  Collection,
  CartProduct,
  Gender,
  Address,
  Coords
};