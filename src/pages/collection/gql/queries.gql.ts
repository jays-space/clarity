import { gql } from "@apollo/client";

export const getCollection = gql`
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      name
      url
      nofProducts
      Products {
        nextToken
        startedAt
      }
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
