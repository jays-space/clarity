/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChild = /* GraphQL */ `
  subscription OnCreateChild($filter: ModelSubscriptionChildFilterInput) {
    onCreateChild(filter: $filter) {
      id
      firstName
      lastName
      dob
      gender
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChild = /* GraphQL */ `
  subscription OnUpdateChild($filter: ModelSubscriptionChildFilterInput) {
    onUpdateChild(filter: $filter) {
      id
      firstName
      lastName
      dob
      gender
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChild = /* GraphQL */ `
  subscription OnDeleteChild($filter: ModelSubscriptionChildFilterInput) {
    onDeleteChild(filter: $filter) {
      id
      firstName
      lastName
      dob
      gender
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
        startedAt
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
      dob
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
        startedAt
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
      dob
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
        startedAt
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
      dob
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
      Carts {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
      Carts {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
      Carts {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onCreateCollection(filter: $filter) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onUpdateCollection(filter: $filter) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onDeleteCollection(filter: $filter) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
        hasChildren
        isAdmin
        dob
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
        hasChildren
        isAdmin
        dob
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
        hasChildren
        isAdmin
        dob
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
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
export const onCreateProductsCart = /* GraphQL */ `
  subscription OnCreateProductsCart(
    $filter: ModelSubscriptionProductsCartFilterInput
  ) {
    onCreateProductsCart(filter: $filter) {
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
        _version
        _deleted
        _lastChangedAt
      }
      cart {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProductsCart = /* GraphQL */ `
  subscription OnUpdateProductsCart(
    $filter: ModelSubscriptionProductsCartFilterInput
  ) {
    onUpdateProductsCart(filter: $filter) {
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
        _version
        _deleted
        _lastChangedAt
      }
      cart {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProductsCart = /* GraphQL */ `
  subscription OnDeleteProductsCart(
    $filter: ModelSubscriptionProductsCartFilterInput
  ) {
    onDeleteProductsCart(filter: $filter) {
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
        _version
        _deleted
        _lastChangedAt
      }
      cart {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
