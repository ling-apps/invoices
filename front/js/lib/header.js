var React = require('react')

const Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div className="header-box">
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Header
