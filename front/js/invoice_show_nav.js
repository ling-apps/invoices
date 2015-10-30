var React = require('react')
var Context = require('./lib/context_menu')
var Title = require('./lib/title')
var ContextAction = require('./lib/context_action')
var Router = require('react-router')
var {Link} = Router
var Button = require('./lib/button')

const InvoiceShowNav = React.createClass({
  generatePDF() {
  },

  render() {
    let url = `/invoices/${this.props.params.id}/edit`
    return (
      <Context>
        <Title>
          <Link to="/invoices">Back to list</Link>
        </Title>
        <ContextAction>
          <Link to={url}>Edit</Link>
          <Button onClick={this.generatePDF} label="PDF" />
        </ContextAction>
      </Context>
    )
  }
})

module.exports = InvoiceShowNav
