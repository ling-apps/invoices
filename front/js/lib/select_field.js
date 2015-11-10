var React = require('react')
var uuid = require('uuid')

const SelectField = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any,
    label: React.PropTypes.string,
    id: React.PropTypes.string,
    options: React.PropTypes.array.isRequired,
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

  renderOptions() {
    return this.props.options.map((option) => {
      let value, label = option
      if (undefined !== option.value) {
        value = option.value
        label = option.label
      }
      console.log(value, label)
      let key = `${this.props.id}-${value}`
      return (<option key={key} value={value}>{label}</option>)
    })
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
    let options = this.renderOptions()
    return (
      <div className='form-group'>
        {label}
        <select {...inputProps}>
          {options}
        </select>
      </div>
    )
  }
})

module.exports = SelectField
