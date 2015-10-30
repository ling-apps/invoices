var React = require('react')

const ContextAction = React.createClass({
  render() {
    return (
      <div className="col col-action">
        {this.props.children}
      </div>
    )
  }
})

module.exports = ContextAction
