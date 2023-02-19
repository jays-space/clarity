// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "FEMALE": "FEMALE",
  "MALE": "MALE"
};

const { Admin, Wishlist, User, Child, Cart, Products, ProductsWishlist, ProductsCart, Address, Coords } = initSchema(schema);

export {
  Admin,
  Wishlist,
  User,
  Child,
  Cart,
  Products,
  ProductsWishlist,
  ProductsCart,
  Gender,
  Address,
  Coords
};