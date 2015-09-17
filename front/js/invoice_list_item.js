import React from 'react';
import { Link } from 'react-router';

class InvoiceListItem extends React.Component {
  render() {
    let invoice = this.props.item;
    let url = `/invoices/${invoice.id}`;
    return (
      <div className="list-row">
        <div className="list-row-column"><Link to={url}>{invoice.name}</Link></div>
        <div className="list-row-column">{invoice.updatedAt.toLocaleString()}</div>
      </div>
    );
  }
}

export default InvoiceListItem;
