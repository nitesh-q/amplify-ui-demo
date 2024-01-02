/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodoModel = /* GraphQL */ `
  mutation CreateTodoModel(
    $input: CreateTodoModelInput!
    $condition: ModelTodoModelConditionInput
  ) {
    createTodoModel(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodoModel = /* GraphQL */ `
  mutation UpdateTodoModel(
    $input: UpdateTodoModelInput!
    $condition: ModelTodoModelConditionInput
  ) {
    updateTodoModel(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodoModel = /* GraphQL */ `
  mutation DeleteTodoModel(
    $input: DeleteTodoModelInput!
    $condition: ModelTodoModelConditionInput
  ) {
    deleteTodoModel(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
