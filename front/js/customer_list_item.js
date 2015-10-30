var React = require('react')
var Router = require('react-router')
var {Link} = Router
var API = require('./api')
var Button = require('./lib/button')

const CustomerListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },

  handleDeleteCustomerClick(id) {
    this.props.onDelete(id)
  },

  render() {
    let item = this.props.item
    let showUrl = `/customers/${item.id}`
    return (
      <div className="list-row">
        <div className="list-row-column">
          <Link to={showUrl}>
            {item.name}
          </Link>
        </div>
        <div className="list-row-column">
          {item.currency}
        </div>
        <div className="list-row-column list-row-column-actions">
          <Link className="button" to={showUrl}>View</Link>
          <Button onClick={this.handleDeleteCustomerClick.bind(this, item.id)}
            label="Delete"
            />
        </div>
      </div>
    )
  }
})

module.exports = CustomerListItem
