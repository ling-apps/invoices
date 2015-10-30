var React = require('react')
var Router = require('react-router')
var History, PropTypes = Router
var Box = require('./lib/box')
var API = require('./api')

const CustomerShow = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      customer: API.getCustomer(this.props.params.id)
    }
  },

  render() {
    let customer = this.state.customer
    return (
      <Box>
        <h2>{customer.name}</h2>
        <address>
          <pre>
            {customer.address}
          </pre>
        </address>
        <div className="form-group">
          <span className="label">VAT</span>
          {customer.vat}
        </div>
        <div className="form-group">
          <span className="label">Currency</span>
          {customer.currency}
        </div>
      </Box>
    )
  }
})

module.exports = CustomerShow
