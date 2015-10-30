var React = require('react')
var Router = require('react-router')
var History, PropTypes = Router
var Box = require('./lib/box')
var Form = require('./lib/form')
var TextField = require('./lib/text_field')
var SelectField = require('./lib/select_field')
var Textarea = require('./lib/textarea')
var Button = require('./lib/button')
var API = require('./api')

const Customer = React.createClass({
  mixins: [History],

  propTypes() {
    return {
      customer: React.PropTypes.object
    }
  },

  getDefaultProps() {
    return {
      customer: {
        name: "",
        address: "",
        reverseCharge: false,
        vat: "",
        currency: "EUR"
      }
    }
  },

  getInitialState() {
    return {customer: API.getCustomer(this.props.params.id) || this.props.customer}
  },

  handleCustomerSubmit() {
    API.saveCustomer(this.state.customer)
    this.props.history.pushState({}, '/customers')
  },

  saveField(fieldName, value) {
    let state = this.state
    state.customer[fieldName] = value
    this.setState(state)
  },

  render() {
    let customer = this.state.customer
    return (
      <Box>
        <Form onSubmit={this.handleCustomerSubmit} className="customer-form"
          id="customer-form">
          <TextField name="customer.name" placeholder="Name"
            onChange={this.saveField.bind(this, 'name')}
            value={customer.name}/>
          <Textarea name="customer.address" label="Address"
            onChange={this.saveField.bind(this, 'address')}
            value={customer.address} />
          <TextField name="customer.vat" placeholder="VAT Number"
            onChange={this.saveField.bind(this, 'vat')}
            value={customer.vat} />
          <SelectField name="customer.currency" label="Currency"
            onChange={this.saveField.bind(this, 'currency')}
            options={["EUR", "SEK"]} value={customer.currency} />
        </Form>
      </Box>
    )
  }
})

module.exports = Customer
