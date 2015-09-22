import React, {Component, PropTypes} from 'react';
import TextField from './lib/text_field'
import Button from './lib/button';

export default class InvoiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }

  saveField(fieldName, value) {
    let state = this.state;
    state[fieldName] = value;
    this.setState(state);
    if(this.props.onChange)
      this.props.onChange(state);
  }

  onRemove() {
    if(this.props.onRemove)
      this.props.onRemove()
  }

  render() {
    let item = this.state;
    let total = item.rate * item.quantity;
    return (
      <tr className="invoice-item">
        <td>
          <div className="invoice-item-description">
            <TextField onChange={this.saveField.bind(this, "description")}
              name="item-description[]" value={item.description} />
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
          <Button label="X" onClick={this.onRemove.bind(this)} />
        </td>
      </tr>
    );
  }
}

InvoiceItem.PropTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onRemove: PropTypes.func
};

