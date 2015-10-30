var React = require('react')

const Title = React.createClass({
  render() {
    return (
      <h1 className="col col-title">{this.props.children}</h1>
    )
  }
})

module.exports = Title
