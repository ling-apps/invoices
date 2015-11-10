var {Link} = require('react-router')
var Button = require('lib/button')

const CustomerListItem = ({
  item,
  onDelete
}) => {
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
        <Button onClick={onDelete.bind(null, item.id)}
          label="Delete"
          />
      </div>
    </div>
  )
}

module.exports = CustomerListItem
