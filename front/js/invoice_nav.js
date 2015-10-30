var React = require('react')
var Context = require('./lib/context_menu')
var Title = require('./lib/title')
var ContextAction = require('./lib/context_action')
var Router = require('react-router')
var {History, Link} = Router
var Button = require('./lib/button')

const InvoiceNav = React.createClass({
  mixins: [History],

  render() {
    return (
      <Context>
        <Title>
          <Link to="/invoices">Back to list</Link>
        </Title>
        <ContextAction>
          <input className="button"
            type="submit" form="invoice-form" value="Save" />
        </ContextAction>
      </Context>
    )
  }
})

module.exports = InvoiceNav
