import React from 'react';
import moment from 'moment'
import FormField from './form_field';

let toLocaleDate = (date) => {
  return date.toLocaleString();
}

class Invoice extends React.Component {
  handleInvoiceSubmit() {
    console.log('submiting an invoice');
  }
  render() {
    let invoice = this.props.invoice;
    return (
      <div>
        <h1>Invoice</h1>
        <form onSubmit={this.handleInvoiceSubmit}>
          <FormField
            name="number"
            label="Invoice Number"
            value={invoice.number}
            options={['%', 'flat']} />
          <FormField name="name" label="Name" value={invoice.name} />
          <FormField name="author" label="Author" value={invoice.author} />
          <FormField name="dueDate" label="dueDate" value={toLocaleDate(invoice.dueDate)} />
          <FormField name="currency" label="currency" value={invoice.currency} />
          <FormField name="vat" label="VAT" value={invoice.vat} options={['%', 'flat']} />
          <FormField name="taxes" label="taxes" value={invoice.taxes} hidden={invoice.vat !== false} />
          <FormField name="notes" label="notes" value={invoice.notes} multiline={true} />
          <FormField name="terms" label="terms" value={invoice.terms} multiline={true} />
        </form>
      </div>
    )
  }
}

Invoice.propTypes = {
  invoice: React.PropTypes.object
};

Invoice.defaultProps = {
  invoice: {
    invoiceNumber: 0,
    name: "",
    author: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate: moment().add(15, "days"),
    date: new Date(),
    currency: "Eur",
    items: [
      {
        description: "",
        quantity: 0,
        rate: 30 }
    ],
    vat: false,
    taxes: null,
    notes: "",
    terms: ""
  }
}

export default Invoice;
