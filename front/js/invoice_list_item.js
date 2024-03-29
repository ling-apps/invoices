var React = require('react')
var Router = require('react-router')
var { Link } = Router
var Button = require('./lib/button')

const InvoiceListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },

  handleDeleteInvoiceClick(id) {
    this.props.onDelete(id)
  },

  render() {
    let invoice = this.props.item
    let showUrl = `/invoices/${invoice.id}`
    return (
      <div className="list-row">
        <div className="list-row-column">
          <Link to={showUrl}>
            {invoice.name || "NO NAME"}
          </Link>
        </div>
        <div className="list-row-column">
          {invoice.updatedAt.toLocaleString()}
        </div>
        <div className="list-row-column list-row-column-actions">
          <Link className="button" to={showUrl}>View</Link>
          <Button onClick={this.handleDeleteInvoiceClick.bind(this, invoice.id)}
            label="Delete"
            />
        </div>
      </div>
    )
  }
})

module.exports = InvoiceListItem
