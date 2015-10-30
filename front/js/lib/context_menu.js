var React = require('react')

const ContextMenu = React.createClass({
  render() {
    return (
      <div className="context-menu">
        <div className="box">
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = ContextMenu
