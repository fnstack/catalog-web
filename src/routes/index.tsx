import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from 'app';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
