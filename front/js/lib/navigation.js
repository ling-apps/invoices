var React = require('react')

const Navigation = React.createClass({
  render() {
    return (
      <nav className={this.props.className}>
        {this.props.children}
      </nav>
    )
  }
})

module.exports = Navigation
