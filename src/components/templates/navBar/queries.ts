import { gql } from "@apollo/client";

export const getUser = gql`
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
