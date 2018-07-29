import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from 'app';
import { ProductCategories } from 'productCategories';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
