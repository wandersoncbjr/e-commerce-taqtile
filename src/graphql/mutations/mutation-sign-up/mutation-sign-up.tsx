import gql from "graphql-tag";

export const SIGN_UP_MUTATION = gql`
  mutation Mutation($data: UserInput!) {
    createUser(data: $data)
  }
`;
