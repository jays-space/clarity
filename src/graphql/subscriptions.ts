/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWishlist = /* GraphQL */ `
  subscription OnCreateWishlist($filter: ModelSubscriptionWishlistFilterInput) {
    onCreateWishlist(filter: $filter) {
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
export const onUpdateWishlist = /* GraphQL */ `
  subscription OnUpdateWishlist($filter: ModelSubscriptionWishlistFilterInput) {
    onUpdateWishlist(filter: $filter) {
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
export const onDeleteWishlist = /* GraphQL */ `
  subscription OnDeleteWishlist($filter: ModelSubscriptionWishlistFilterInput) {
    onDeleteWishlist(filter: $filter) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChild = /* GraphQL */ `
  subscription OnCreateChild($filter: ModelSubscriptionChildFilterInput) {
    onCreateChild(filter: $filter) {
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
export const onUpdateChild = /* GraphQL */ `
  subscription OnUpdateChild($filter: ModelSubscriptionChildFilterInput) {
    onUpdateChild(filter: $filter) {
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
export const onDeleteChild = /* GraphQL */ `
  subscription OnDeleteChild($filter: ModelSubscriptionChildFilterInput) {
    onDeleteChild(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProductsWishlist = /* GraphQL */ `
  subscription OnCreateProductsWishlist(
    $filter: ModelSubscriptionProductsWishlistFilterInput
  ) {
    onCreateProductsWishlist(filter: $filter) {
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
export const onUpdateProductsWishlist = /* GraphQL */ `
  subscription OnUpdateProductsWishlist(
    $filter: ModelSubscriptionProductsWishlistFilterInput
  ) {
    onUpdateProductsWishlist(filter: $filter) {
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
export const onDeleteProductsWishlist = /* GraphQL */ `
  subscription OnDeleteProductsWishlist(
    $filter: ModelSubscriptionProductsWishlistFilterInput
  ) {
    onDeleteProductsWishlist(filter: $filter) {
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
export const onCreateProductsCart = /* GraphQL */ `
  subscription OnCreateProductsCart(
    $filter: ModelSubscriptionProductsCartFilterInput
  ) {
    onCreateProductsCart(filter: $filter) {
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
export const onUpdateProductsCart = /* GraphQL */ `
  subscription OnUpdateProductsCart(
    $filter: ModelSubscriptionProductsCartFilterInput
  ) {
    onUpdateProductsCart(filter: $filter) {
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
export const onDeleteProductsCart = /* GraphQL */ `
  subscription OnDeleteProductsCart(
    $filter: ModelSubscriptionProductsCartFilterInput
  ) {
    onDeleteProductsCart(filter: $filter) {
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
