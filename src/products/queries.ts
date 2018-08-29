import { gql, DocumentNode } from 'apollo-boost';

export const products: DocumentNode = gql`
  query products {
    products {
      id
      name
      description
      category {name}
      brand{name}
    } 
    productBrands {
      id
      name
    }
    productCategories {
      id
      name
    }           
  }
`;