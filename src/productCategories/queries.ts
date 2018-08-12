import { gql, DocumentNode } from 'apollo-boost';

export const productcategories: DocumentNode = gql`
query productcategories {
  productCategories {
    name
    description

  }
}
`;

