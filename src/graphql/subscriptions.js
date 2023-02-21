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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
