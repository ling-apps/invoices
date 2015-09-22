import React, {Component, PropTypes} from 'react';

export default class Form extends Component {
  onSubmit() {
    this.props.onSubmit(this.state)
  }

  onChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    this.props.onChange(this.state)
  }

  onCancel() {
    this.props.onCancel();
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit} onReset={this.onCancel}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

Form.defaultPropTypes = {
  onSubmit: () => {},
  onCancel: () => {}
};
