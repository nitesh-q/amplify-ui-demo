/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoModel = /* GraphQL */ `
  query GetTodoModel($id: ID!) {
    getTodoModel(id: $id) {
      id
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodoModels = /* GraphQL */ `
  query ListTodoModels(
    $filter: ModelTodoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
