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
  readonly coords?: Coords | null;
  readonly province?: string | null;
}

type LazyAddress = {
  readonly city?: string | null;
  readonly country?: string | null;
  readonly fullAddress: string;
  readonly coords?: Coords | null;
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

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: User | null;
  readonly Products?: (CartProduct | null)[] | null;
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
  readonly User: AsyncItem<User | undefined>;
  readonly Products: AsyncCollection<CartProduct>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartUserId?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
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
  readonly hasChildren: boolean;
  readonly physicalAddress?: Address | null;
  readonly isAdmin: boolean;
  readonly dob?: string | null;
  readonly Cart?: Cart | null;
  readonly Children?: (Child | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
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
  readonly hasChildren: boolean;
  readonly physicalAddress?: Address | null;
  readonly isAdmin: boolean;
  readonly dob?: string | null;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly Children: AsyncCollection<Child>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
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
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly userID: string;
  readonly User?: User | null;
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
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly userID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Child = LazyLoading extends LazyLoadingDisabled ? EagerChild : LazyChild

export declare const Child: (new (init: ModelInit<Child>) => Child) & {
  copyOf(source: Child, mutator: (draft: MutableModel<Child>) => MutableModel<Child> | void): Child;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly units: number;
  readonly pcs: number;
  readonly url: string;
  readonly carts?: (CartProduct | null)[] | null;
  readonly collectionID: string;
  readonly Collection?: Collection | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly units: number;
  readonly pcs: number;
  readonly url: string;
  readonly carts: AsyncCollection<CartProduct>;
  readonly collectionID: string;
  readonly Collection: AsyncItem<Collection | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly Products?: (Product | null)[] | null;
  readonly nofProducts: number;
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
  readonly Products: AsyncCollection<Product>;
  readonly nofProducts: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Collection = LazyLoading extends LazyLoadingDisabled ? EagerCollection : LazyCollection

export declare const Collection: (new (init: ModelInit<Collection>) => Collection) & {
  copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

type EagerCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cartId?: string | null;
  readonly productId?: string | null;
  readonly cart: Cart;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cartId?: string | null;
  readonly productId?: string | null;
  readonly cart: AsyncItem<Cart>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProduct : LazyCartProduct

export declare const CartProduct: (new (init: ModelInit<CartProduct>) => CartProduct) & {
  copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct>) => MutableModel<CartProduct> | void): CartProduct;
}