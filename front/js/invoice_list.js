var React = require('react')
var Router = require('react-router')
var { Link } = Router
var List = require('./lib/list')
var InvoiceListItem = require('./invoice_list_item')
var API = require('./api')

const InvoiceList = React.createClass({
  getInitialState() {
    return {
      invoices: API.getInvoices()
    }
  },

  onDeleteInvoice(id) {
    API.removeInvoice(id)
    this.setState({invoices: API.getInvoices()})
  },

  render() {
    return (
      <List items={this.state.invoices} format={InvoiceListItem}
        onDelete={this.onDeleteInvoice} />
    )
  }
})

module.exports = InvoiceList
