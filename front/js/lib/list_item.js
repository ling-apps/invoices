var React = require('react')
var uuid = require('uuid')

const ListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    itemKey: React.PropTypes.number.isRequired
  },

  render() {
    let item = this.props.item
    let columns = Object.keys(item).map((propName) => {
      let key = `${this.props.itemKey}-${uuid.v4()}`
      let value = item[propName].toString()
      return (<div className="list-row-column" key={key}>{value}</div>)
    })
    return (
      <div className="list-row">
        {columns}
      </div>
    )
  }
})

module.exports = ListItem
