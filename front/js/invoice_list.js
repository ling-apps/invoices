import React from 'react';
import { Link } from 'react-router';
import List from './lib/list';
import InvoiceListItem from './invoice_list_item';

class InvoiceList extends React.Component {
  render() {
    return (
      <List items={this.props.invoices} format={InvoiceListItem} />
    )
  }
}

InvoiceList.propTypes = {
  invoices: React.PropTypes.array
};
InvoiceList.defaultProps = {
  invoices: [
    {id: 0, name: "Invoice Blandine aout", updatedAt: new Date(2015, 8, 10)},
    {id: 1, name: "Invoice Blandine september", updatedAt: new Date(2015, 9, 10)}
  ]
};

export default InvoiceList;
