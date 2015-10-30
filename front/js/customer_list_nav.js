var React = require('react')
var Context = require('./lib/context_menu')
var Title = require('./lib/title')
var ContextAction = require('./lib/context_action')
var Button = require('./lib/button')
var Router = require('react-router')
var {History, PropTypes} = Router

const CustomerListNav = React.createClass({
  mixins: [History],

  createCustomer() {
    this.props.history.pushState({}, '/customers/new')
  },

  render() {
    let buttonProps = {
      onClick: this.createCustomer,
      className: 'primary',
      label: 'Create a customer'
    }
    return (
      <Context>
        <Title>
          Customers
        </Title>
        <ContextAction>
          <Button {...buttonProps} />
        </ContextAction>
      </Context>
    )
  }
})

module.exports = CustomerListNav
