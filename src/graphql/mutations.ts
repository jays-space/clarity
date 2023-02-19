/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWishlist = /* GraphQL */ `
  mutation CreateWishlist(
    $input: CreateWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    createWishlist(input: $input, condition: $condition) {
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
export const updateWishlist = /* GraphQL */ `
  mutation UpdateWishlist(
    $input: UpdateWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    updateWishlist(input: $input, condition: $condition) {
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
export const deleteWishlist = /* GraphQL */ `
  mutation DeleteWishlist(
    $input: DeleteWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    deleteWishlist(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
export const createChild = /* GraphQL */ `
  mutation CreateChild(
    $input: CreateChildInput!
    $condition: ModelChildConditionInput
  ) {
    createChild(input: $input, condition: $condition) {
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
export const updateChild = /* GraphQL */ `
  mutation UpdateChild(
    $input: UpdateChildInput!
    $condition: ModelChildConditionInput
  ) {
    updateChild(input: $input, condition: $condition) {
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
export const deleteChild = /* GraphQL */ `
  mutation DeleteChild(
    $input: DeleteChildInput!
    $condition: ModelChildConditionInput
  ) {
    deleteChild(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProductsWishlist = /* GraphQL */ `
  mutation CreateProductsWishlist(
    $input: CreateProductsWishlistInput!
    $condition: ModelProductsWishlistConditionInput
  ) {
    createProductsWishlist(input: $input, condition: $condition) {
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
export const updateProductsWishlist = /* GraphQL */ `
  mutation UpdateProductsWishlist(
    $input: UpdateProductsWishlistInput!
    $condition: ModelProductsWishlistConditionInput
  ) {
    updateProductsWishlist(input: $input, condition: $condition) {
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
export const deleteProductsWishlist = /* GraphQL */ `
  mutation DeleteProductsWishlist(
    $input: DeleteProductsWishlistInput!
    $condition: ModelProductsWishlistConditionInput
  ) {
    deleteProductsWishlist(input: $input, condition: $condition) {
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
export const createProductsCart = /* GraphQL */ `
  mutation CreateProductsCart(
    $input: CreateProductsCartInput!
    $condition: ModelProductsCartConditionInput
  ) {
    createProductsCart(input: $input, condition: $condition) {
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
export const updateProductsCart = /* GraphQL */ `
  mutation UpdateProductsCart(
    $input: UpdateProductsCartInput!
    $condition: ModelProductsCartConditionInput
  ) {
    updateProductsCart(input: $input, condition: $condition) {
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
export const deleteProductsCart = /* GraphQL */ `
  mutation DeleteProductsCart(
    $input: DeleteProductsCartInput!
    $condition: ModelProductsCartConditionInput
  ) {
    deleteProductsCart(input: $input, condition: $condition) {
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
