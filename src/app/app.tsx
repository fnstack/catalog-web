import * as React from 'react';
import { SideBar } from './components';
import { Route, Switch } from 'react-router-dom';
import { ProductCategories } from 'productCategories';
import { Products } from 'products';

class App extends React.Component {
  public render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>
          <Switch>
            <Route exact path="/product-categories" component={ProductCategories} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </div>
      </div>
    );
  }
}

export { App };
