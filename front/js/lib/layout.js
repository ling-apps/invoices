var React = require('react')

const Layout = React.createClass({
  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    )
  }
})

module.exports = Layout
