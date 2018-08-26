import { gql, DocumentNode } from 'apollo-boost';

export const createProductCategory: DocumentNode = gql`
mutation createProductCategory ($name:String!) {
  createProductCategory(input: {
    name: $name
  })
}
`;


