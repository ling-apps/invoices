var React = require('react')
var uuid = require('uuid')

const Textarea = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any,
    label: React.PropTypes.string,
    id: React.PropTypes.string,
    onChange: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      label: '',
      value: '',
      id: uuid.v4(),
      onChange: null
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
    let inputProps = {
      type: 'text',
      name: this.props.name,
      id: this.props.id,
      defaultValue: this.props.value,
      className: 'form-control',
      onChange: this.onChange
    }
    let label = this.renderLabel()
    return (
      <div className='form-group'>
        {label}
        <textarea {...inputProps} />
      </div>
    )
  }
})

module.exports = Textarea
