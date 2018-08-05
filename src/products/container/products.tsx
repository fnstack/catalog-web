import * as React from 'react';
import { Button, Row, Col } from 'antd';
import { AddNewProduct } from '../components';

class Products extends React.Component {
  public render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 style={{marginLeft:10}}>Produits</h1>
              <div>                
                <AddNewProduct />
              </div>
            </div>
            <hr />
            <div style={{ paddingLeft: 10 }}>
              <b>Nom:</b>
              <br />
              <b>Description:</b>
              <br />
              <b>Catégorie:</b>
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
            <div style={{ paddingLeft: 10 }}>
              <b>Nom:</b>
              <br />
              <b>Description:</b>
              <br />
              <b>Catégorie:</b>
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
            <div style={{ paddingLeft: 10 }}>
              <b>Nom:</b>
              <br />
              <b>Description:</b>
              <br />
              <b>Catégorie:</b>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export { Products };
