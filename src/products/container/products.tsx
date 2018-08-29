import * as React from 'react';
import { Button, Row, Col, Modal } from 'antd';
import { AddNewProduct } from '../components';
import { Query } from 'react-apollo';
import { products } from '../queries';

class Products extends React.Component {
 
  public render() {
    return (
      <Query key="getProducts" query={products}>
        {({loading, error, data}) => {
          if (loading) {
            return 'Loading...';
          } 
          else {
            console.log('data', data);
          }
          if (error) {
            return (
              Modal.error(
                { title:"Erreur",
                  content:<span>Erreur: {error.message}</span>}
              )              
            )
          };

          let results = [];

          if (Array.isArray(data.products)) {
            results = data.products.map(product =>(
              <React.Fragment>
                <div style={{ paddingLeft: 10 }}>
              <b>Nom: {product.name}</b>
              <br />
              <b>Description: {product.description}</b>
              <br />
              <b>Catégorie: {product.category.name}</b>
              <br />
              <b>Marque: {product.brand.name}</b>
              <br />
              <Button style={{ marginTop: 5 }} type="primary">
                Renommer
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{ marginTop: 5 }} type="primary">
                Supprimer
              </Button>
            </div>
            <hr />
              </React.Fragment>
            ));
          }

          return (         
        <div>
        <Row>
          <Col span={24}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 style={{marginLeft:10}}>Produits</h1>
              <div>                
                <AddNewProduct
                categories={data.productCategories}
                brands={data.productBrands} />
              </div>
            </div> 
            <hr />
            {results}           
          </Col>
        </Row>        
      </div>
       );
      }}
      </Query>
    );
  }
}

export { Products };