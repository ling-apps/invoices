import React from 'react';
import uuid from 'uuid';

class FormField extends React.Component {
  componentWillMount() {
    this._guid = uuid.v4()
  }

  getId() {
    if(this.props.id)
      return this.props.id
    else
      return this._guid
  }

  renderInput() {
    let type = "text"
    if(this.props.hidden)
      type = "hidden"
    return (
      <input name={this.props.name} type={type} defaultValue={this.props.value} />
    )
  }

  renderSelect() {
    let options = this.props.options.map((option) => {
      return (<option value={option}>{option}</option>)
    });
    return (
      <select name={this.props.name} defaultValue={this.props.value}>
        {options}
      </select>
    )
  }

  renderTextarea() {
    return (
      <textarea name={this.props.name} defaultValue={this.props.value}>
      </textarea>
    )
  }

  render() {
    let label = null;
    if(this.props.label !== null)
      label = <label htmlFor={this.getId()}>{this.props.label}</label>
    let formControl = null;
    if(this.props.options)
      formControl = this.renderSelect();
    else if(this.props.multiline)
      formControl = this.renderTextarea();
    else
      formControl = this.renderInput();
    return (
      <div className="form-group">
        {label}
        {formControl}
      </div>
    );
  }
}

var props = React.PropTypes;
FormField.propTypes = {
  name: props.string.isRequired,
  label: props.string,
  value: props.oneOfType([props.string, props.number, props.bool]),
  hidden: props.bool,
  options: props.arrayOf(props.string),
  multiline: props.bool
};

FormField.defaultProps = {
  label: null,
  value: null,
  hidden: false,
  options: null,
  multiline: false
};

export default FormField;
