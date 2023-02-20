/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWishlist = /* GraphQL */ `
  query GetWishlist($id: ID!) {
    getWishlist(id: $id) {
      id
      User {
        id
        firstName
        lastName
        email
        dob
        hasChildren
        isAdmin
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userWishlistId
      }
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      wishlistUserId
    }
  }
`;
export const listWishlists = /* GraphQL */ `
  query ListWishlists(
    $filter: ModelWishlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        wishlistUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWishlists = /* GraphQL */ `
  query SyncWishlists(
    $filter: ModelWishlistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWishlists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        wishlistUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      Products {
        nextToken
        startedAt
      }
      User {
        id
        firstName
        lastName
        email
        dob
        hasChildren
        isAdmin
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userWishlistId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      nextToken
      startedAt
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
export const syncCollections = /* GraphQL */ `
  query SyncCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      name
      description
      price
      units
      quantity
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
      createdBy
      collectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
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
        quantity
        pcs
        url
        createdBy
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
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        price
        units
        quantity
        pcs
        url
        createdBy
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
export const productsByCreatedBy = /* GraphQL */ `
  query ProductsByCreatedBy(
    $createdBy: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCreatedBy(
      createdBy: $createdBy
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
        quantity
        pcs
        url
        createdBy
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
export const productsByCollectionID = /* GraphQL */ `
  query ProductsByCollectionID(
    $collectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsFilterInput
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
        quantity
        pcs
        url
        createdBy
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
export const getChild = /* GraphQL */ `
  query GetChild($id: ID!) {
    getChild(id: $id) {
      id
      firstName
      lastName
      dob
      gender
      parentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        parentID
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
export const syncChildren = /* GraphQL */ `
  query SyncChildren(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChildren(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        dob
        gender
        parentID
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
export const childrenByParentID = /* GraphQL */ `
  query ChildrenByParentID(
    $parentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    childrenByParentID(
      parentID: $parentID
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
        parentID
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      dob
      hasChildren
      Children {
        nextToken
        startedAt
      }
      physicalAddress {
        city
        country
        fullAddress
        province
      }
      Cart {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      Wishlist {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        wishlistUserId
      }
      isAdmin
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userWishlistId
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
        dob
        hasChildren
        isAdmin
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userWishlistId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        dob
        hasChildren
        isAdmin
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userWishlistId
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductsWishlist = /* GraphQL */ `
  query GetProductsWishlist($id: ID!) {
    getProductsWishlist(id: $id) {
      id
      wishlistId
      productsId
      wishlist {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        wishlistUserId
      }
      products {
        id
        name
        description
        price
        units
        quantity
        pcs
        url
        createdBy
        collectionID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProductsWishlists = /* GraphQL */ `
  query ListProductsWishlists(
    $filter: ModelProductsWishlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductsWishlists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wishlistId
        productsId
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
export const syncProductsWishlists = /* GraphQL */ `
  query SyncProductsWishlists(
    $filter: ModelProductsWishlistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductsWishlists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        wishlistId
        productsId
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
export const productsWishlistsByWishlistId = /* GraphQL */ `
  query ProductsWishlistsByWishlistId(
    $wishlistId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsWishlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsWishlistsByWishlistId(
      wishlistId: $wishlistId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wishlistId
        productsId
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
export const productsWishlistsByProductsId = /* GraphQL */ `
  query ProductsWishlistsByProductsId(
    $productsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsWishlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsWishlistsByProductsId(
      productsId: $productsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wishlistId
        productsId
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
export const getProductsCart = /* GraphQL */ `
  query GetProductsCart($id: ID!) {
    getProductsCart(id: $id) {
      id
      cartId
      productsId
      cart {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      products {
        id
        name
        description
        price
        units
        quantity
        pcs
        url
        createdBy
        collectionID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        cartId
        productsId
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
export const syncProductsCarts = /* GraphQL */ `
  query SyncProductsCarts(
    $filter: ModelProductsCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductsCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cartId
        productsId
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
        cartId
        productsId
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
export const productsCartsByProductsId = /* GraphQL */ `
  query ProductsCartsByProductsId(
    $productsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsCartsByProductsId(
      productsId: $productsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        productsId
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
