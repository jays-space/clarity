import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE"
}

type EagerAddress = {
  readonly city?: string | null;
  readonly country?: string | null;
  readonly fullAddress: string;
  readonly coords: Coords;
  readonly province?: string | null;
}

type LazyAddress = {
  readonly city?: string | null;
  readonly country?: string | null;
  readonly fullAddress: string;
  readonly coords: Coords;
  readonly province?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerCoords = {
  readonly lat: number;
  readonly lng: number;
}

type LazyCoords = {
  readonly lat: number;
  readonly lng: number;
}

export declare type Coords = LazyLoading extends LazyLoadingDisabled ? EagerCoords : LazyCoords

export declare const Coords: (new (init: ModelInit<Coords>) => Coords)

type EagerWishlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wishlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: User | null;
  readonly Products?: (ProductsWishlist | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly wishlistUserId?: string | null;
}

type LazyWishlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wishlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Products: AsyncCollection<ProductsWishlist>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly wishlistUserId?: string | null;
}

export declare type Wishlist = LazyLoading extends LazyLoadingDisabled ? EagerWishlist : LazyWishlist

export declare const Wishlist: (new (init: ModelInit<Wishlist>) => Wishlist) & {
  copyOf(source: Wishlist, mutator: (draft: MutableModel<Wishlist>) => MutableModel<Wishlist> | void): Wishlist;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly email: string;
  readonly dob?: string | null;
  readonly hasChildren: boolean;
  readonly Children?: (Child | null)[] | null;
  readonly physicalAddress?: Address | null;
  readonly Cart?: Cart | null;
  readonly Wishlist?: Wishlist | null;
  readonly isAdmin: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
  readonly userWishlistId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly email: string;
  readonly dob?: string | null;
  readonly hasChildren: boolean;
  readonly Children: AsyncCollection<Child>;
  readonly physicalAddress?: Address | null;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly Wishlist: AsyncItem<Wishlist | undefined>;
  readonly isAdmin: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
  readonly userWishlistId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChild = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Child, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly dob: string;
  readonly gender: Gender | keyof typeof Gender;
  readonly parentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChild = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Child, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly dob: string;
  readonly gender: Gender | keyof typeof Gender;
  readonly parentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Child = LazyLoading extends LazyLoadingDisabled ? EagerChild : LazyChild

export declare const Child: (new (init: ModelInit<Child>) => Child) & {
  copyOf(source: Child, mutator: (draft: MutableModel<Child>) => MutableModel<Child> | void): Child;
}

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Products?: (ProductsCart | null)[] | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartUserId?: string | null;
}

type LazyCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Products: AsyncCollection<ProductsCart>;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartUserId?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
}

type EagerProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly units: number;
  readonly pcs: number;
  readonly url: string;
  readonly Carts?: (ProductsCart | null)[] | null;
  readonly Wishlists?: (ProductsWishlist | null)[] | null;
  readonly collectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly units: number;
  readonly pcs: number;
  readonly url: string;
  readonly Carts: AsyncCollection<ProductsCart>;
  readonly Wishlists: AsyncCollection<ProductsWishlist>;
  readonly collectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products>) => MutableModel<Products> | void): Products;
}

type EagerCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly nofProducts: number;
  readonly Products?: (Products | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly nofProducts: number;
  readonly Products: AsyncCollection<Products>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Collection = LazyLoading extends LazyLoadingDisabled ? EagerCollection : LazyCollection

export declare const Collection: (new (init: ModelInit<Collection>) => Collection) & {
  copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

type EagerProductsWishlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductsWishlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wishlistId?: string | null;
  readonly productsId?: string | null;
  readonly wishlist: Wishlist;
  readonly products: Products;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductsWishlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductsWishlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wishlistId?: string | null;
  readonly productsId?: string | null;
  readonly wishlist: AsyncItem<Wishlist>;
  readonly products: AsyncItem<Products>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductsWishlist = LazyLoading extends LazyLoadingDisabled ? EagerProductsWishlist : LazyProductsWishlist

export declare const ProductsWishlist: (new (init: ModelInit<ProductsWishlist>) => ProductsWishlist) & {
  copyOf(source: ProductsWishlist, mutator: (draft: MutableModel<ProductsWishlist>) => MutableModel<ProductsWishlist> | void): ProductsWishlist;
}

type EagerProductsCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductsCart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cartId?: string | null;
  readonly productsId?: string | null;
  readonly cart: Cart;
  readonly products: Products;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductsCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductsCart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cartId?: string | null;
  readonly productsId?: string | null;
  readonly cart: AsyncItem<Cart>;
  readonly products: AsyncItem<Products>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductsCart = LazyLoading extends LazyLoadingDisabled ? EagerProductsCart : LazyProductsCart

export declare const ProductsCart: (new (init: ModelInit<ProductsCart>) => ProductsCart) & {
  copyOf(source: ProductsCart, mutator: (draft: MutableModel<ProductsCart>) => MutableModel<ProductsCart> | void): ProductsCart;
}