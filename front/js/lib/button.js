import React, {Component, PropTypes} from 'react';

export default class Button extends Component {
  onClick(e) {
    e.preventDefault();
    if(this.props.onClick)
      this.props.onClick(e);
  }

  render() {
    let buttonProps = {
      onClick: this.onClick.bind(this),
      disabled: this.props.disabled
    }
    return (
      <button {...buttonProps} >{this.props.label}</button>
    );
  }
}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  onClick: null
};
