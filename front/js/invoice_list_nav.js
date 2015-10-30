var React = require('react')
var Context = require('./lib/context_menu')
var Title = require('./lib/title')
var ContextAction = require('./lib/context_action')
var Button = require('./lib/button')
var Router = require('react-router')
var {History, PropTypes} = Router

const InvoiceListNav = React.createClass({
  mixins: [History],

  createInvoice() {
    this.props.history.pushState({}, '/invoices/new')
  },

  render() {
    let buttonProps = {
      onClick: this.createInvoice,
      className: 'primary',
      label: 'Create an invoice'
    }
    return (
      <Context>
        <Title>
          Invoices
        </Title>
        <ContextAction>
          <Button {...buttonProps} />
        </ContextAction>
      </Context>
    )
  }
})

module.exports = InvoiceListNav
