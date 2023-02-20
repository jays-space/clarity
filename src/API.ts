/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWishlistInput = {
  id?: string | null,
  _version?: number | null,
  wishlistUserId?: string | null,
};

export type ModelWishlistConditionInput = {
  and?: Array< ModelWishlistConditionInput | null > | null,
  or?: Array< ModelWishlistConditionInput | null > | null,
  not?: ModelWishlistConditionInput | null,
  wishlistUserId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Wishlist = {
  __typename: "Wishlist",
  id: string,
  User?: User | null,
  Products?: ModelProductsWishlistConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  wishlistUserId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName?: string | null,
  email: string,
  dob?: string | null,
  hasChildren: boolean,
  Children?: ModelChildConnection | null,
  physicalAddress?: Address | null,
  Cart?: Cart | null,
  Wishlist?: Wishlist | null,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userCartId?: string | null,
  userWishlistId?: string | null,
};

export type ModelChildConnection = {
  __typename: "ModelChildConnection",
  items:  Array<Child | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Child = {
  __typename: "Child",
  id: string,
  firstName: string,
  lastName?: string | null,
  dob: string,
  gender: Gender,
  parentID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}


export type Address = {
  __typename: "Address",
  city?: string | null,
  country?: string | null,
  fullAddress: string,
  coords: Coords,
  province?: string | null,
};

export type Coords = {
  __typename: "Coords",
  lat: number,
  lng: number,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  Products?: ModelProductsCartConnection | null,
  User?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  cartUserId?: string | null,
};

export type ModelProductsCartConnection = {
  __typename: "ModelProductsCartConnection",
  items:  Array<ProductsCart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProductsCart = {
  __typename: "ProductsCart",
  id: string,
  cartId: string,
  productsId: string,
  cart: Cart,
  products: Products,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Products = {
  __typename: "Products",
  id: string,
  name: string,
  description?: string | null,
  price: number,
  units: number,
  quantity: number,
  pcs: number,
  url?: Array< string | null > | null,
  Carts?: ModelProductsCartConnection | null,
  Wishlists?: ModelProductsWishlistConnection | null,
  collectionID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductsWishlistConnection = {
  __typename: "ModelProductsWishlistConnection",
  items:  Array<ProductsWishlist | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProductsWishlist = {
  __typename: "ProductsWishlist",
  id: string,
  wishlistId: string,
  productsId: string,
  wishlist: Wishlist,
  products: Products,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateWishlistInput = {
  id: string,
  _version?: number | null,
  wishlistUserId?: string | null,
};

export type DeleteWishlistInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartInput = {
  id?: string | null,
  _version?: number | null,
  cartUserId?: string | null,
};

export type ModelCartConditionInput = {
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
  cartUserId?: ModelIDInput | null,
};

export type UpdateCartInput = {
  id: string,
  _version?: number | null,
  cartUserId?: string | null,
};

export type DeleteCartInput = {
  id: string,
  _version?: number | null,
};

export type CreateCollectionInput = {
  id?: string | null,
  name: string,
  url: string,
  nofProducts: number,
  _version?: number | null,
};

export type ModelCollectionConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  nofProducts?: ModelIntInput | null,
  and?: Array< ModelCollectionConditionInput | null > | null,
  or?: Array< ModelCollectionConditionInput | null > | null,
  not?: ModelCollectionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Collection = {
  __typename: "Collection",
  id: string,
  name: string,
  url: string,
  nofProducts: number,
  Products?: ModelProductsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCollectionInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  nofProducts?: number | null,
  _version?: number | null,
};

export type DeleteCollectionInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductsInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  price: number,
  units: number,
  quantity: number,
  pcs: number,
  url?: Array< string | null > | null,
  collectionID: string,
  _version?: number | null,
};

export type ModelProductsConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  units?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  pcs?: ModelIntInput | null,
  url?: ModelStringInput | null,
  collectionID?: ModelIDInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductsInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  units?: number | null,
  quantity?: number | null,
  pcs?: number | null,
  url?: Array< string | null > | null,
  collectionID?: string | null,
  _version?: number | null,
};

export type DeleteProductsInput = {
  id: string,
  _version?: number | null,
};

export type CreateChildInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
  dob: string,
  gender: Gender,
  parentID: string,
  _version?: number | null,
};

export type ModelChildConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  parentID?: ModelIDInput | null,
  and?: Array< ModelChildConditionInput | null > | null,
  or?: Array< ModelChildConditionInput | null > | null,
  not?: ModelChildConditionInput | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type UpdateChildInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  dob?: string | null,
  gender?: Gender | null,
  parentID?: string | null,
  _version?: number | null,
};

export type DeleteChildInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
  email: string,
  dob?: string | null,
  hasChildren: boolean,
  physicalAddress?: AddressInput | null,
  isAdmin: boolean,
  _version?: number | null,
  userCartId?: string | null,
  userWishlistId?: string | null,
};

export type AddressInput = {
  city?: string | null,
  country?: string | null,
  fullAddress: string,
  coords: CoordsInput,
  province?: string | null,
};

export type CoordsInput = {
  lat: number,
  lng: number,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  hasChildren?: ModelBooleanInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userCartId?: ModelIDInput | null,
  userWishlistId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  dob?: string | null,
  hasChildren?: boolean | null,
  physicalAddress?: AddressInput | null,
  isAdmin?: boolean | null,
  _version?: number | null,
  userCartId?: string | null,
  userWishlistId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductsWishlistInput = {
  id?: string | null,
  wishlistId: string,
  productsId: string,
  _version?: number | null,
};

export type ModelProductsWishlistConditionInput = {
  wishlistId?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  and?: Array< ModelProductsWishlistConditionInput | null > | null,
  or?: Array< ModelProductsWishlistConditionInput | null > | null,
  not?: ModelProductsWishlistConditionInput | null,
};

export type UpdateProductsWishlistInput = {
  id: string,
  wishlistId?: string | null,
  productsId?: string | null,
  _version?: number | null,
};

export type DeleteProductsWishlistInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductsCartInput = {
  id?: string | null,
  cartId: string,
  productsId: string,
  _version?: number | null,
};

export type ModelProductsCartConditionInput = {
  cartId?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  and?: Array< ModelProductsCartConditionInput | null > | null,
  or?: Array< ModelProductsCartConditionInput | null > | null,
  not?: ModelProductsCartConditionInput | null,
};

export type UpdateProductsCartInput = {
  id: string,
  cartId?: string | null,
  productsId?: string | null,
  _version?: number | null,
};

export type DeleteProductsCartInput = {
  id: string,
  _version?: number | null,
};

export type ModelWishlistFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelWishlistFilterInput | null > | null,
  or?: Array< ModelWishlistFilterInput | null > | null,
  not?: ModelWishlistFilterInput | null,
  wishlistUserId?: ModelIDInput | null,
};

export type ModelWishlistConnection = {
  __typename: "ModelWishlistConnection",
  items:  Array<Wishlist | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
  cartUserId?: ModelIDInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCollectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  nofProducts?: ModelIntInput | null,
  and?: Array< ModelCollectionFilterInput | null > | null,
  or?: Array< ModelCollectionFilterInput | null > | null,
  not?: ModelCollectionFilterInput | null,
};

export type ModelCollectionConnection = {
  __typename: "ModelCollectionConnection",
  items:  Array<Collection | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  units?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  pcs?: ModelIntInput | null,
  url?: ModelStringInput | null,
  collectionID?: ModelIDInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelChildFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  parentID?: ModelIDInput | null,
  and?: Array< ModelChildFilterInput | null > | null,
  or?: Array< ModelChildFilterInput | null > | null,
  not?: ModelChildFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  hasChildren?: ModelBooleanInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userCartId?: ModelIDInput | null,
  userWishlistId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductsWishlistFilterInput = {
  id?: ModelIDInput | null,
  wishlistId?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  and?: Array< ModelProductsWishlistFilterInput | null > | null,
  or?: Array< ModelProductsWishlistFilterInput | null > | null,
  not?: ModelProductsWishlistFilterInput | null,
};

export type ModelProductsCartFilterInput = {
  id?: ModelIDInput | null,
  cartId?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  and?: Array< ModelProductsCartFilterInput | null > | null,
  or?: Array< ModelProductsCartFilterInput | null > | null,
  not?: ModelProductsCartFilterInput | null,
};

export type ModelSubscriptionWishlistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionWishlistFilterInput | null > | null,
  or?: Array< ModelSubscriptionWishlistFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
};

export type ModelSubscriptionCollectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  nofProducts?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCollectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionCollectionFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  units?: ModelSubscriptionIntInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  pcs?: ModelSubscriptionIntInput | null,
  url?: ModelSubscriptionStringInput | null,
  collectionID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionChildFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  parentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChildFilterInput | null > | null,
  or?: Array< ModelSubscriptionChildFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  hasChildren?: ModelSubscriptionBooleanInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionProductsWishlistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  wishlistId?: ModelSubscriptionIDInput | null,
  productsId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductsWishlistFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsWishlistFilterInput | null > | null,
};

export type ModelSubscriptionProductsCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cartId?: ModelSubscriptionIDInput | null,
  productsId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductsCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsCartFilterInput | null > | null,
};

export type CreateWishlistMutationVariables = {
  input: CreateWishlistInput,
  condition?: ModelWishlistConditionInput | null,
};

export type CreateWishlistMutation = {
  createWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type UpdateWishlistMutationVariables = {
  input: UpdateWishlistInput,
  condition?: ModelWishlistConditionInput | null,
};

export type UpdateWishlistMutation = {
  updateWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type DeleteWishlistMutationVariables = {
  input: DeleteWishlistInput,
  condition?: ModelWishlistConditionInput | null,
};

export type DeleteWishlistMutation = {
  deleteWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type CreateCollectionMutationVariables = {
  input: CreateCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type CreateCollectionMutation = {
  createCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCollectionMutationVariables = {
  input: UpdateCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type UpdateCollectionMutation = {
  updateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCollectionMutationVariables = {
  input: DeleteCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type DeleteCollectionMutation = {
  deleteCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChildMutationVariables = {
  input: CreateChildInput,
  condition?: ModelChildConditionInput | null,
};

export type CreateChildMutation = {
  createChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChildMutationVariables = {
  input: UpdateChildInput,
  condition?: ModelChildConditionInput | null,
};

export type UpdateChildMutation = {
  updateChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChildMutationVariables = {
  input: DeleteChildInput,
  condition?: ModelChildConditionInput | null,
};

export type DeleteChildMutation = {
  deleteChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type CreateProductsWishlistMutationVariables = {
  input: CreateProductsWishlistInput,
  condition?: ModelProductsWishlistConditionInput | null,
};

export type CreateProductsWishlistMutation = {
  createProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductsWishlistMutationVariables = {
  input: UpdateProductsWishlistInput,
  condition?: ModelProductsWishlistConditionInput | null,
};

export type UpdateProductsWishlistMutation = {
  updateProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductsWishlistMutationVariables = {
  input: DeleteProductsWishlistInput,
  condition?: ModelProductsWishlistConditionInput | null,
};

export type DeleteProductsWishlistMutation = {
  deleteProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductsCartMutationVariables = {
  input: CreateProductsCartInput,
  condition?: ModelProductsCartConditionInput | null,
};

export type CreateProductsCartMutation = {
  createProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductsCartMutationVariables = {
  input: UpdateProductsCartInput,
  condition?: ModelProductsCartConditionInput | null,
};

export type UpdateProductsCartMutation = {
  updateProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductsCartMutationVariables = {
  input: DeleteProductsCartInput,
  condition?: ModelProductsCartConditionInput | null,
};

export type DeleteProductsCartMutation = {
  deleteProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetWishlistQueryVariables = {
  id: string,
};

export type GetWishlistQuery = {
  getWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type ListWishlistsQueryVariables = {
  filter?: ModelWishlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWishlistsQuery = {
  listWishlists?:  {
    __typename: "ModelWishlistConnection",
    items:  Array< {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWishlistsQueryVariables = {
  filter?: ModelWishlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWishlistsQuery = {
  syncWishlists?:  {
    __typename: "ModelWishlistConnection",
    items:  Array< {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartsQuery = {
  syncCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCollectionQueryVariables = {
  id: string,
};

export type GetCollectionQuery = {
  getCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCollectionsQueryVariables = {
  filter?: ModelCollectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectionsQuery = {
  listCollections?:  {
    __typename: "ModelCollectionConnection",
    items:  Array< {
      __typename: "Collection",
      id: string,
      name: string,
      url: string,
      nofProducts: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCollectionsQueryVariables = {
  filter?: ModelCollectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCollectionsQuery = {
  syncCollections?:  {
    __typename: "ModelCollectionConnection",
    items:  Array< {
      __typename: "Collection",
      id: string,
      name: string,
      url: string,
      nofProducts: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsByCollectionIDQueryVariables = {
  collectionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByCollectionIDQuery = {
  productsByCollectionID?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChildQueryVariables = {
  id: string,
};

export type GetChildQuery = {
  getChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChildrenQueryVariables = {
  filter?: ModelChildFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChildrenQuery = {
  listChildren?:  {
    __typename: "ModelChildConnection",
    items:  Array< {
      __typename: "Child",
      id: string,
      firstName: string,
      lastName?: string | null,
      dob: string,
      gender: Gender,
      parentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChildrenQueryVariables = {
  filter?: ModelChildFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChildrenQuery = {
  syncChildren?:  {
    __typename: "ModelChildConnection",
    items:  Array< {
      __typename: "Child",
      id: string,
      firstName: string,
      lastName?: string | null,
      dob: string,
      gender: Gender,
      parentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ChildrenByParentIDQueryVariables = {
  parentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChildFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChildrenByParentIDQuery = {
  childrenByParentID?:  {
    __typename: "ModelChildConnection",
    items:  Array< {
      __typename: "Child",
      id: string,
      firstName: string,
      lastName?: string | null,
      dob: string,
      gender: Gender,
      parentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductsWishlistQueryVariables = {
  id: string,
};

export type GetProductsWishlistQuery = {
  getProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsWishlistsQueryVariables = {
  filter?: ModelProductsWishlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsWishlistsQuery = {
  listProductsWishlists?:  {
    __typename: "ModelProductsWishlistConnection",
    items:  Array< {
      __typename: "ProductsWishlist",
      id: string,
      wishlistId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsWishlistsQueryVariables = {
  filter?: ModelProductsWishlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsWishlistsQuery = {
  syncProductsWishlists?:  {
    __typename: "ModelProductsWishlistConnection",
    items:  Array< {
      __typename: "ProductsWishlist",
      id: string,
      wishlistId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsWishlistsByWishlistIdQueryVariables = {
  wishlistId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsWishlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsWishlistsByWishlistIdQuery = {
  productsWishlistsByWishlistId?:  {
    __typename: "ModelProductsWishlistConnection",
    items:  Array< {
      __typename: "ProductsWishlist",
      id: string,
      wishlistId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsWishlistsByProductsIdQueryVariables = {
  productsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsWishlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsWishlistsByProductsIdQuery = {
  productsWishlistsByProductsId?:  {
    __typename: "ModelProductsWishlistConnection",
    items:  Array< {
      __typename: "ProductsWishlist",
      id: string,
      wishlistId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductsCartQueryVariables = {
  id: string,
};

export type GetProductsCartQuery = {
  getProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsCartsQueryVariables = {
  filter?: ModelProductsCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsCartsQuery = {
  listProductsCarts?:  {
    __typename: "ModelProductsCartConnection",
    items:  Array< {
      __typename: "ProductsCart",
      id: string,
      cartId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsCartsQueryVariables = {
  filter?: ModelProductsCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsCartsQuery = {
  syncProductsCarts?:  {
    __typename: "ModelProductsCartConnection",
    items:  Array< {
      __typename: "ProductsCart",
      id: string,
      cartId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsCartsByCartIdQueryVariables = {
  cartId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsCartsByCartIdQuery = {
  productsCartsByCartId?:  {
    __typename: "ModelProductsCartConnection",
    items:  Array< {
      __typename: "ProductsCart",
      id: string,
      cartId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsCartsByProductsIdQueryVariables = {
  productsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsCartsByProductsIdQuery = {
  productsCartsByProductsId?:  {
    __typename: "ModelProductsCartConnection",
    items:  Array< {
      __typename: "ProductsCart",
      id: string,
      cartId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistFilterInput | null,
};

export type OnCreateWishlistSubscription = {
  onCreateWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type OnUpdateWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistFilterInput | null,
};

export type OnUpdateWishlistSubscription = {
  onUpdateWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type OnDeleteWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistFilterInput | null,
};

export type OnDeleteWishlistSubscription = {
  onDeleteWishlist?:  {
    __typename: "Wishlist",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    wishlistUserId?: string | null,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    Products?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      email: string,
      dob?: string | null,
      hasChildren: boolean,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userWishlistId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartUserId?: string | null,
  } | null,
};

export type OnCreateCollectionSubscriptionVariables = {
  filter?: ModelSubscriptionCollectionFilterInput | null,
};

export type OnCreateCollectionSubscription = {
  onCreateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCollectionSubscriptionVariables = {
  filter?: ModelSubscriptionCollectionFilterInput | null,
};

export type OnUpdateCollectionSubscription = {
  onUpdateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCollectionSubscriptionVariables = {
  filter?: ModelSubscriptionCollectionFilterInput | null,
};

export type OnDeleteCollectionSubscription = {
  onDeleteCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    url: string,
    nofProducts: number,
    Products?:  {
      __typename: "ModelProductsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnCreateProductsSubscription = {
  onCreateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnUpdateProductsSubscription = {
  onUpdateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnDeleteProductsSubscription = {
  onDeleteProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    units: number,
    quantity: number,
    pcs: number,
    url?: Array< string | null > | null,
    Carts?:  {
      __typename: "ModelProductsCartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wishlists?:  {
      __typename: "ModelProductsWishlistConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    collectionID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChildSubscriptionVariables = {
  filter?: ModelSubscriptionChildFilterInput | null,
};

export type OnCreateChildSubscription = {
  onCreateChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChildSubscriptionVariables = {
  filter?: ModelSubscriptionChildFilterInput | null,
};

export type OnUpdateChildSubscription = {
  onUpdateChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChildSubscriptionVariables = {
  filter?: ModelSubscriptionChildFilterInput | null,
};

export type OnDeleteChildSubscription = {
  onDeleteChild?:  {
    __typename: "Child",
    id: string,
    firstName: string,
    lastName?: string | null,
    dob: string,
    gender: Gender,
    parentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    dob?: string | null,
    hasChildren: boolean,
    Children?:  {
      __typename: "ModelChildConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    physicalAddress?:  {
      __typename: "Address",
      city?: string | null,
      country?: string | null,
      fullAddress: string,
      province?: string | null,
    } | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    } | null,
    Wishlist?:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    } | null,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userWishlistId?: string | null,
  } | null,
};

export type OnCreateProductsWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionProductsWishlistFilterInput | null,
};

export type OnCreateProductsWishlistSubscription = {
  onCreateProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductsWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionProductsWishlistFilterInput | null,
};

export type OnUpdateProductsWishlistSubscription = {
  onUpdateProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductsWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionProductsWishlistFilterInput | null,
};

export type OnDeleteProductsWishlistSubscription = {
  onDeleteProductsWishlist?:  {
    __typename: "ProductsWishlist",
    id: string,
    wishlistId: string,
    productsId: string,
    wishlist:  {
      __typename: "Wishlist",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      wishlistUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductsCartSubscriptionVariables = {
  filter?: ModelSubscriptionProductsCartFilterInput | null,
};

export type OnCreateProductsCartSubscription = {
  onCreateProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductsCartSubscriptionVariables = {
  filter?: ModelSubscriptionProductsCartFilterInput | null,
};

export type OnUpdateProductsCartSubscription = {
  onUpdateProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductsCartSubscriptionVariables = {
  filter?: ModelSubscriptionProductsCartFilterInput | null,
};

export type OnDeleteProductsCartSubscription = {
  onDeleteProductsCart?:  {
    __typename: "ProductsCart",
    id: string,
    cartId: string,
    productsId: string,
    cart:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartUserId?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      units: number,
      quantity: number,
      pcs: number,
      url?: Array< string | null > | null,
      collectionID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
