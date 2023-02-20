import { gql } from "@apollo/client";

export const listCollections = gql`
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        nofProducts
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;

export const listAdminUsers = gql`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        isAdmin
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;

export const listProducts = gql`
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
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;

export const getCollection = gql`
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      name
      url
      nofProducts
      _deleted
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

export const getCupcake = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
      collections {
        nextToken
        startedAt
      }
      cartID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCollectionId
    }
  }
`;
