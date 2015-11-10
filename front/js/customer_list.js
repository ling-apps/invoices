var React = require('react')
var List = require('./lib/list')
var CustomerListItem = require('./customer_list_item')
var API = require('./api')

const CustomerList = React.createClass({
  getInitialState() {
    return {
      customers: API.getCustomers()
    }
  },

  onDeleteCustomer(id) {
    API.removeCustomer(id)
    this.setState({customers: API.getCustomers()})
  },

  render() {
    return (
      <List items={this.state.customers} format={CustomerListItem}
        onDelete={this.onDeleteCustomer} />
    )
  }
})

module.exports = CustomerList
