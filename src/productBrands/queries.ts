import { gql, DocumentNode } from 'apollo-boost';

export const productBrands: DocumentNode = gql`
  query productBrands {
    productBrands {
      id
      name
    }
  }
`;
