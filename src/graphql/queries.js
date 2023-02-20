/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChild = /* GraphQL */ `
  query GetChild($id: ID!) {
    getChild(id: $id) {
      id
      firstName
      lastName
      dob
      gender
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listChildren = /* GraphQL */ `
  query ListChildren(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildren(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        dob
        gender
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const childrenByUserID = /* GraphQL */ `
  query ChildrenByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    childrenByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        dob
        gender
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      hasChildren
      physicalAddress {
        city
        country
        fullAddress
        coords {
          lat
          lng
        }
        province
      }
      isAdmin
      Children {
        items {
          id
          firstName
          lastName
          dob
          gender
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Cart {
        id
        Products {
          nextToken
        }
        User {
          id
          firstName
          lastName
          email
          hasChildren
          isAdmin
          dob
          createdAt
          updatedAt
          userCartId
        }
        createdAt
        updatedAt
        cartUserId
      }
      dob
      createdAt
      updatedAt
      userCartId
    }
  }
`;
export const listUsers = /* GraphQL */ `
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
        hasChildren
        physicalAddress {
          city
          country
          fullAddress
          province
        }
        isAdmin
        Children {
          nextToken
        }
        Cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        dob
        createdAt
        updatedAt
        userCartId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
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
        Products {
          nextToken
        }
        createdAt
        updatedAt
      }
      Carts {
        items {
          id
          productId
          cartId
          createdAt
          updatedAt
        }
        nextToken
      }
      collectionID
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
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
        Collection {
          id
          name
          url
          nofProducts
          createdAt
          updatedAt
        }
        Carts {
          nextToken
        }
        collectionID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByCollectionID = /* GraphQL */ `
  query ProductsByCollectionID(
    $collectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCollectionID(
      collectionID: $collectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
        Carts {
          nextToken
        }
        collectionID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      name
      url
      nofProducts
      Products {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCollections = /* GraphQL */ `
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
        Products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      Products {
        items {
          id
          productId
          cartId
          createdAt
          updatedAt
        }
        nextToken
      }
      User {
        id
        firstName
        lastName
        email
        hasChildren
        physicalAddress {
          city
          country
          fullAddress
          province
        }
        isAdmin
        Children {
          nextToken
        }
        Cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        dob
        createdAt
        updatedAt
        userCartId
      }
      createdAt
      updatedAt
      cartUserId
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Products {
          nextToken
        }
        User {
          id
          firstName
          lastName
          email
          hasChildren
          isAdmin
          dob
          createdAt
          updatedAt
          userCartId
        }
        createdAt
        updatedAt
        cartUserId
      }
      nextToken
    }
  }
`;
export const getProductsCart = /* GraphQL */ `
  query GetProductsCart($id: ID!) {
    getProductsCart(id: $id) {
      id
      productId
      cartId
      product {
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
        }
        Carts {
          nextToken
        }
        collectionID
        createdAt
        updatedAt
      }
      cart {
        id
        Products {
          nextToken
        }
        User {
          id
          firstName
          lastName
          email
          hasChildren
          isAdmin
          dob
          createdAt
          updatedAt
          userCartId
        }
        createdAt
        updatedAt
        cartUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProductsCarts = /* GraphQL */ `
  query ListProductsCarts(
    $filter: ModelProductsCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductsCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        cartId
        product {
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
        }
        cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsCartsByProductId = /* GraphQL */ `
  query ProductsCartsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsCartsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        cartId
        product {
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
        }
        cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsCartsByCartId = /* GraphQL */ `
  query ProductsCartsByCartId(
    $cartId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsCartsByCartId(
      cartId: $cartId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        cartId
        product {
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
        }
        cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
