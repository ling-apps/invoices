var React = require('react')

const Box = React.createClass({
  render() {
    return (
      <div className="box">
        {this.props.children}
      </div>
    )
  }
})

module.exports = Box
