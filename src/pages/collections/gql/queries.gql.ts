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
