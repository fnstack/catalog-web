import * as React from 'React';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Query } from 'react-apollo';
import { productBrands } from 'productBrands';

class ProductBrands extends React.Component {
  public render() {
    return (
      <Query query={productBrands}>
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

          if (Array.isArray(data.productBrands)) {
            results = data.productBrands.map(brand => (
              <React.Fragment>
                <div>
                  <b>Nom : {brand.name}</b>
                  <br />
                  <b>Description :</b>
                  <br />
                  <Button type="primary">Renomer</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button type="primary">Supprimer</Button>
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
                    <h1>Product Brand</h1>
                    <Button type="primary">Ajouter</Button>
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

export { ProductBrands };
