var React = require('react')

const Button = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      disabled: false,
      onClick: null
    }
  },

  onClick(e) {
    e.preventDefault()
    if(this.props.onClick)
      this.props.onClick(e)
  },

  render() {
    let buttonProps = {
      onClick: this.onClick,
      disabled: this.props.disabled,
      className: 'button'
    }
    return (
      <button {...buttonProps} >{this.props.label}</button>
    )
  }
})

module.exports = Button
