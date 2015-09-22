import React, {Component, PropTypes} from 'react';
import uuid from 'uuid';

export default class SelectField extends Component {
  onChange(e) {
    if (this.props.onChange)
      this.props.onChange(e.target.value);
  }

  renderLabel() {
    if(this.props.label === '') return false
    return (
      <label className='label' htmlFor={this.props.id}>{this.props.label}</label>
    )
  }

  renderOptions() {
    return this.props.options.map((option) => {
      let key = `${this.props.id}-${option}`;
      return (<option key={key} value={option}>{option}</option>)
    });
  }

  render() {
    let inputProps = {
      type: 'text',
      name: this.props.name,
      id: this.props.id,
      defaultValue: this.props.value,
      className: 'form-control',
      onChange: this.onChange.bind(this)
    };
    let label = this.renderLabel();
    let options = this.renderOptions();
    return (
      <div className='form-group'>
        {label}
        <select {...inputProps}>
          {options}
        </select>
      </div>
    );
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

SelectField.defaultProps = {
  label: '',
  value: '',
  id: uuid.v4(),
  onChange: null
};
