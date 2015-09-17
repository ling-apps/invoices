import React from 'react';
import { Router, BrowserHistory as history } from 'react-router';
import routes from './routes'

React.render(<Router history={history} children={routes} />, document.body);
