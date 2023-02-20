import { ModelProductsCartConnection, ModelProductConnection, 
 } from "@/API";

export type CollectionType = {
  __typename: "Collection";
  id: string;
  name: string;
  url: string;
  nofProducts: number;
  Products?: ModelProductConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null | undefined;
  _lastChangedAt: number;
};

export type CupcakeType = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price: number;
  units: number;
  pcs: number;
  url: string;
  Carts?: ModelProductsCartConnection | null;
  collectionID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};
