import React from 'react';
import { Link } from 'react-router';

class InvoiceList extends React.Component {
  render() {
    let invoices = this.props.invoices.map((invoice) => {
      let url = `/invoices/${invoice.id}`;
      return (
        <tr key={invoice.id}>
          <td><Link to={url}>{invoice.name}</Link></td>
          <td>{invoice.updatedAt.toLocaleString()}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {invoices}
        </tbody>
      </table>
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
