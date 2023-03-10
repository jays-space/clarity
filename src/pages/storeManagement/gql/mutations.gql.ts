import { gql } from "@apollo/client";

export const createCollection = gql`
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
      id
      name
      url
      nofProducts
    }
  }
`;

export const createCupcake = gql`
 mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      units
      pcs
      url
      Collection {
        id
        name
        url
        nofProducts
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      collectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const listProductsByCollection = gql`
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        units
        pcs
        url
        collectionID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

export const getProducts = gql`
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      name
      description
      price
      units
      pcs
      url
      Carts {
        nextToken
        startedAt
      }
      Wishlists {
        nextToken
        startedAt
      }
      collectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

