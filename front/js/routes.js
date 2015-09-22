import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './app';
import InvoiceList from './invoice_list';
import Invoice from './invoice';

var routes =
<Route path="/" component={App}>
  <IndexRoute component={InvoiceList} />
  <Route path="invoices/new" component={Invoice} />
  <Route path="invoices/:id" component={Invoice} />
</Route>

export default routes;
