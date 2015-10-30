var React = require('react')
var uuid = require('uuid')

const TextField = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any,
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string,
    inline: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      label: '',
      value: '',
      placeholder: '',
      id: uuid.v4(),
      hidden: false,
      inline: false,
      onChange: () => {}
    }
  },

  onChange(e) {
    if (this.props.onChange)
      this.props.onChange(e.target.value)
  },

  renderLabel() {
    if(this.props.label === '') return false
    return (
      <label className='label' htmlFor={this.props.id}>{this.props.label}</label>
    )
  },

  render() {
    if(this.props.hidden) return false

    let inputProps = {
      type: 'text',
      name: this.props.name,
      placeholder: this.props.placeholder,
      id: this.props.id,
      defaultValue: this.props.value,
      className: 'form-control',
      onChange: this.onChange
    }

    if(this.props.inline)
      inputProps.className += " form-control-inline"

    let label = this.renderLabel()
    return (
      <div className='form-group'>
        {label}
        <input {...inputProps} />
      </div>
    )
  }
})

module.exports = TextField
