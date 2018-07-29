import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Routes } from 'routes';

import './sass/app.scss';

ReactDom.render(<React.Fragment><Routes /></React.Fragment>, document.getElementById('root'));
