import * as React from 'React';
import {Button} from 'antd';
import {Row,Col} from 'antd';

class ProductBrands extends React.Component {
  public render() {
    console.log('page-loader');
    return (

      <div>
        <Row>
          <Col span={24}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Product Brand</h1>
        <Button type="primary">Ajouter</Button>
      </div>
        <hr />
        <div >
          <b>Nom :</b>
          <br />
          <b>Description :</b>
          <br />
          <Button type="primary">Renomer</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary">Supprimer</Button>

        </div>
        <hr />
        <div>
          <b>Nom :</b>
          <br />
          <b>Description :</b>
          <br />
          <Button type="primary">Renomer</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary">Supprimer</Button>
          <hr />
          </div>
         <div>
           <b>Nom :</b>
           <br />
           <b>Description</b>
           <br />
           <Button type="primary">Renomer</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary">Supprimer</Button>
           <hr />
         </div>
         </Col>
         </Row>
        </div>



    );
  }
}

export { ProductBrands };
