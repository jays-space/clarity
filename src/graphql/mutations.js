/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      userID
      createdAt
      updatedAt
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
      userID
      createdAt
      updatedAt
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
      userID
      createdAt
      updatedAt
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
export const createProduct = /* GraphQL */ `
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createProductsCart = /* GraphQL */ `
  mutation CreateProductsCart(
    $input: CreateProductsCartInput!
    $condition: ModelProductsCartConditionInput
  ) {
    createProductsCart(input: $input, condition: $condition) {
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
export const updateProductsCart = /* GraphQL */ `
  mutation UpdateProductsCart(
    $input: UpdateProductsCartInput!
    $condition: ModelProductsCartConditionInput
  ) {
    updateProductsCart(input: $input, condition: $condition) {
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
export const deleteProductsCart = /* GraphQL */ `
  mutation DeleteProductsCart(
    $input: DeleteProductsCartInput!
    $condition: ModelProductsCartConditionInput
  ) {
    deleteProductsCart(input: $input, condition: $condition) {
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
