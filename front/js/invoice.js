import React, {Component, PropTypes} from 'react';
import moment from 'moment'
import Box from './lib/box';
import Form from './lib/form';
import TextField from './lib/text_field';
import SelectField from './lib/select_field';
import Textarea from './lib/textarea';
import Button from './lib/button';
import InvoiceItem from './invoice_item';

function toLocaleDate(date) {
  return date.toLocaleString();
}

function createInvoiceItem() {
  return {
    description: '',
    quantity: 0,
    rate: 30
  };
}

export default class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: props.invoice
    };
  }

  handleInvoiceSubmit() {
    console.log('submiting an invoice');
  }

  saveField(fieldName, value) {
    let state = this.state;
    state.invoice[fieldName] = value;
    this.setState(state);
  }

  saveItem(item, newItem) {
    let state = this.state;
    let index = state.invoice.items.indexOf(item);
    state.invoice.items.splice(index, 1, newItem);
    this.setState(state);
  }

  removeItem(item) {
    let state = this.state;
    let index = state.invoice.items.indexOf(item);
    state.invoice.items.splice(index, 1);
    this.setState(state);
  }

  addInvoiceItem() {
    let state = this.state;
    state.invoice.items.push(createInvoiceItem());
    this.setState(state);
  }

  render() {
    let invoice = this.state.invoice;
    console.log(invoice);
    let showTaxes = invoice.vat === 'none';
    let invoiceItems = this.state.invoice.items.map( (item, index) => {
      let props = {
        item: item,
        key: index,
        onChange: this.saveItem.bind(this, item),
        onRemove: this.removeItem.bind(this, item)
      }
      return <InvoiceItem {...props} />
    });
    return (
      <Box>
        <Form className="invoice-form">
          <div className="invoice-company-block">
            <h3>Ling Consulting</h3>
            <p>
            13 Rue du Corps Franc Pommies <br/>
            31170 TOURNEFEUILLE <br/>
            FRANCE <br/>
            email: finance@ling.fr <br/>
            </p>
          </div>
          <div className="invoice-customer-block">
            <h3>Mynewsdesk</h3>
            <p>
            Rosenlundsgatan 40 <br/>
            Stockholm, Stockholm 118 53 <br/>
            Sweden <br/>
            </p>
          </div>
          <div className="invoice-info-block">
            <p>
            <span className="label">Billed on</span> <span>January 17, 2015</span><br />
            <span className="label">Due on</span> <span>January 31, 2015</span><br/>
            <span className="label">Invoice #</span> <span>01</span><br/>
            </p>
          </div>
          <div className="invoice-detail-block">
            <table className="invoice-detail-items-table">
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total ex. tax</th>
              </tr>
              <tr>
                <td>Consulting from july 20th to july 31th</td>
                <td>72</td>
                <td>30</td>
                <td>2160</td>
              </tr>
              <tr>
                <td>Consulting from august 1st to august 31th</td>
                <td>160</td>
                <td>30</td>
                <td>4800</td>
              </tr>
            </table>
          </div>
          <div className="invoice-payment-block">
            <p>
              IBAN: FR48 2004 1010 1614 5347 1B03 734 <br/>
              Ling VAT number: FR 54 813121332
            </p>

            <p>
              Reverse charge, Article 196 VAT Directive <br/>
              Mynewsdesk VAT number: SE 55 66341276011 
            </p>
          </div>
          <div className="invoice-total-block">
            <table>
              <tr>
                <th>Total</th>
                <td>6960</td>
              </tr>
            </table>
          </div>
        </Form>
      </Box>
    )
  }
}

Invoice.propTypes = {
  invoice: PropTypes.object
};

Invoice.defaultProps = {
  invoice: {
    number: 0,
    name: '',
    author: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate: moment().add(15, 'days'),
    date: new Date(),
    currency: 'Eur',
    items: [
      {
        description: '',
        quantity: 0,
        rate: 30 }
    ],
    vat: 'none',
    taxes: null,
    notes: '',
    terms: ''
  }
}
