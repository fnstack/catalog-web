import * as React from 'react';
import { Button, Row, Col } from 'antd';
import { Query } from 'react-apollo';
import { productcategories } from 'productCategories/queries';
import { Addnewproductcategorie } from '../compnents';

class ProductCategories extends React.Component {
  public render() {
    // console.log('page-loaded');
    return (
      <Query query={productcategories}>
      {({ loading, error, data }) => {
          if (loading) {
            return 'Loading...';
          } else {
            console.log('data', data);
          }

          if (error) {
            return <span>Erreur: {error.message}</span>;
          }

          let results = [];

          if (Array.isArray(data.productCategories)) {
            results = data.productCategories.map(category => (
              <React.Fragment>
              <div style={{marginLeft:10}}>
                <b>Nom : {category.name}</b>
                <br/>
                <b>Description : {category.description} </b>
                <br/>
                <Button type="primary">Renomer</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="primary">Supprimer</Button>
              </div>
              <hr/>
              </React.Fragment>
            ));
          }

          return(
            <div>
              <Row>
                <Col span={24}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Categories des produits </h1>
                    
                    <Addnewproductcategorie/>
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

export { ProductCategories };
