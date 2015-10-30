var React = require('react')

const Form = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    id: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      onSubmit: () => {},
        onCancel: () => {},
        id: null
    }
  },

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  },

  onCancel() {
    this.props.onCancel();
  },

  render() {
    let props = {
      className: "form",
      onSubmit: this.onSubmit,
      onReset: this.onCancel,
      id: this.props.id
    }
    return (
      <form {...props} >
        {this.props.children}
      </form>
    );
  }
})

module.exports = Form
