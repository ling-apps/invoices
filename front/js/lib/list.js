var React = require('react')
var ListItem = require('./list_item')

const List = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    format: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      format: ListItem
    }
  },

  render() {
    let rows = this.props.items.map((item, i) => {
      let props = Object.assign({}, this.props, {item: item, itemKey: i})
      return React.createElement(this.props.format, props)
    })
    return (
      <div className="box">
        <ul className="list">
          {rows}
        </ul>
      </div>
    )
  }
})

module.exports = List
