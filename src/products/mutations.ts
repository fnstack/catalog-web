import { gql, DocumentNode } from 'apollo-boost';

export const createProduct: DocumentNode = gql`
mutation createProduct ($name: String!, $categoryId: ID, $brandId: ID, $description: String) {
    createProduct(input: {
        name: $name,
        description: $description,
        brandId: $brandId, 
        categoryId: $categoryId
    })
  }
`;
