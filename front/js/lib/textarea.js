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
    return (
      <div className='form-group'>
        {label}
        <textarea {...inputProps} />
      </div>
    );
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

SelectField.defaultProps = {
  label: '',
  value: '',
  id: uuid.v4(),
  onChange: null
};
