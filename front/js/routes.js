var React = require('react')
var Router = require('react-router')
var { Redirect, IndexRoute, Route } = Router
var App = require('./app')
var InvoiceList = require('./invoice_list')
var Invoice = require('./invoice')
var InvoiceShow = require('./invoice_show')
var InvoiceListNav = require('./invoice_list_nav')
var InvoiceShowNav = require('./invoice_show_nav')
var InvoiceNav = require('./invoice_nav')
var CustomerList = require('./customer_list')
var CustomerListNav = require('./customer_list_nav')
var Customer = require('./customer')
var CustomerNav = require('./customer_nav')
var CustomerShow = require('./customer_show')
var CustomerShowNav = require('./customer_show_nav')

const routes =
<Route path="/" component={App}>
  <Route path="invoices" components={{main: InvoiceList, contextMenu: InvoiceListNav}} />
  <Route path="invoices/new"
    components={{main: Invoice, contextMenu: InvoiceNav}} />
  <Route path="invoices/:id"
    components={{main: InvoiceShow, contextMenu: InvoiceShowNav}} />
  <Route path="invoices/:id/edit"
    components={{main: Invoice, contextMenu: InvoiceNav}} />
  <Route path="customers"
    components={{main: CustomerList, contextMenu: CustomerListNav}} />
  <Route path="customers/new"
    components={{main: Customer, contextMenu: CustomerNav}} />
  <Route path="customers/:id"
    components={{main: CustomerShow, contextMenu: CustomerShowNav}} />
  <Route path="customers/:id/edit"
    components={{main: Customer, contextMenu: CustomerNav}} />
</Route>

module.exports = routes
