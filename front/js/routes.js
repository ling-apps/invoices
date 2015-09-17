import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './app';
import InvoiceList from './invoice_list';
import Invoice from './invoice';

var routes = <Route path="/" component={App}>
  <Redirect from="/" to="/invoices"/>
  <Route path="invoices" component={InvoiceList}/>
  <Route path="invoices/new" component={Invoice} />
  <Route path="invoices/:id" component={Invoice} />
</Route>

export default routes;
