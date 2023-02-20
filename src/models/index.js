// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "FEMALE": "FEMALE",
  "MALE": "MALE"
};

const { Wishlist, User, Child, Cart, Products, Collection, ProductsWishlist, ProductsCart, Address, Coords } = initSchema(schema);

export {
  Wishlist,
  User,
  Child,
  Cart,
  Products,
  Collection,
  ProductsWishlist,
  ProductsCart,
  Gender,
  Address,
  Coords
};