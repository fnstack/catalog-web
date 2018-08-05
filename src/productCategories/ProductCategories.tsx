import * as React from 'react';
import { Button, List } from 'antd';
const data = [
  'Nom:',
  'Description:',
];

class ProductCategories extends React.Component {
  public render() {
    console.log('page-loaded');
    return (
      <div>
        <h1>Catégorie des produits</h1>
          <div>
            <Button type="primary">Ajouter</Button>
          </div>
          <div>

    <List


      bordered
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />

    <List



      bordered
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />

    <List



      bordered
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
  </div>
      </div>
    );
  }
}

export { ProductCategories };
