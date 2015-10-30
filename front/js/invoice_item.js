var React = require('react');
var TextField = require('./lib/text_field')
var Button = require('./lib/button');

const InvoiceItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func,
    onRemove: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      onChange: () => {},
      onRemove: () => {}
    }
  },

  getInitialState() {
    return this.props.item;
  },

  saveField(fieldName, value) {
    let state = this.state;
    state[fieldName] = value;
    this.setState(state);
    if(this.props.onChange)
      this.props.onChange(state);
  },

  onRemove() {
    if(this.props.onRemove)
      this.props.onRemove()
  },

  render() {
    let item = this.state;
    let total = item.rate * item.quantity;
    return (
      <tr className="invoice-item">
        <td>
          <div className="invoice-item-description">
            <TextField onChange={this.saveField.bind(this, 'description')}
              name="item-description" value={item.description}
              placeholder="Description" />
          </div>
        </td>
        <td>
          <div className="invoice-item-quantity">
            <TextField onChange={this.saveField.bind(this, "quantity")}
              name="item-quantity" value={item.quantity} />
          </div>
        </td>
        <td>
          <div className="invoice-item-rate">
            <TextField onChange={this.saveField.bind(this, "rate")}
              name="item-rate" value={item.rate} />
          </div>
        </td>
        <td>
          <div className="invoice-item-total">
            {total}
          </div>
        </td>
        <td>
          <Button label="X" onClick={this.onRemove} />
        </td>
      </tr>
    );
  }
})

module.exports = InvoiceItem
