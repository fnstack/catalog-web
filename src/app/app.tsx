import * as React from 'react';
import { SideBar } from './components';
import { Route, Switch } from 'react-router-dom';
import { ProductCategories } from 'productCategories';
import { Products } from 'products';
import { ProductBrands } from 'productBrands';


class App extends React.Component {
  public render() {
    return (
      <div style={{ display: 'flex', width: '100vw' }}>
        <SideBar />
        <div style={{width: '100%'}} >
          <Switch>
            <Route exact path="/product-categories" component={ProductCategories} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product-brands" component={ProductBrands} />
          </Switch>
        </div>
      </div>
    );
  }
}

export { App };
