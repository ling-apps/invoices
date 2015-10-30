var React = require('react')
var moment = require('moment')
var Box = require('./lib/box')
var Form = require('./lib/form')
var TextField = require('./lib/text_field')
var SelectField = require('./lib/select_field')
var Textarea = require('./lib/textarea')
var Button = require('./lib/button')
var InvoiceItem = require('./invoice_item')
var API = require('./api')
var Router = require('react-router')
var {History, PropTypes} = Router

function toLocaleDate(date) {
  return date.toLocaleString()
}

function createInvoiceItem() {
  return {
    description: '',
    quantity: 0,
    rate: 30
  }
}

const Invoice = React.createClass({
  mixins: [History],

  propTypes() {
    return {invoice: React.PropTypes.object}
  },

  getDefaultProps() {
    return {
      invoice: {
        customerName: '',
        customerAddress: '',
        customerVAT: '',
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
  },

  getInitialState() {
    return {
      invoice: API.getInvoice(this.props.params.id) || this.props.invoice
    }
  },

  handleInvoiceSubmit() {
    API.saveInvoice(this.state.invoice)
    this.props.history.pushState({}, '/invoices')
  },

  saveField(fieldName, value) {
    let state = this.state
    state.invoice[fieldName] = value
    this.setState(state)
  },

  saveItem(item, newItem) {
    let state = this.state
    let index = state.invoice.items.indexOf(item)
    state.invoice.items.splice(index, 1, newItem)
    this.setState(state)
  },

  removeItem(item) {
    let state = this.state
    let index = state.invoice.items.indexOf(item)
    state.invoice.items.splice(index, 1)
    this.setState(state)
  },

  addInvoiceItem() {
    let state = this.state
    state.invoice.items.push(createInvoiceItem())
    this.setState(state)
  },

  render() {
    let invoice = this.state.invoice
    let showTaxes = invoice.vat === 'none'
    let invoiceItems = this.state.invoice.items.map( (item, index) => {
      let props = {
        item: item,
        key: index,
        onChange: this.saveItem.bind(this, item),
        onRemove: this.removeItem.bind(this, item)
      }
      return <InvoiceItem {...props} />
    })
    let invoiceTotal = this.state.invoice.items.reduce((sum, item) => {
      return sum + item.rate * item.quantity
    }, 0)
    return (
      <Box>
        <Form onSubmit={this.handleInvoiceSubmit} className="invoice-form" id="invoice-form">
          <div className="invoice-company-block">
            <h3>Ling Consulting</h3>
            <p>
            13 Rue du Corps Franc Pommies <br/>
            31170 TOURNEFEUILLE <br/>
            FRANCE <br/>
            contact@ling.fr <br/>
            </p>
          </div>
          <div className="invoice-customer-block">
            <h3>
              <TextField onChange={this.saveField.bind(this, 'customerName')}
                name="customer.name" placeholder="Customer name" value={invoice.customer} />
            </h3>
            <p>
              <Textarea onChange={this.saveField.bind(this, 'customerAddress')}
                name="customer.address" placeholder="Customer address" value={invoice.customerAddress} />
            </p>
          </div>
          <div className="invoice-info-block">
            <p>
            <span className="label">Billed on</span>
            <span>
              <TextField onChange={this.saveField.bind(this, 'date')}
                name="invoice-date" name="invoice.date" placeholder="Invoice date" value={invoice.date} />
            </span><br />
            <span className="label">Due on</span>
            <span>
              <TextField onChange={this.saveField.bind(this, 'dueDate')}
                name="invoice-due-date" name="invoice.dueDate" placeholder="Due date" value={invoice.dueDate} />
            </span><br/>
            <span className="label">Invoice #</span> <span>{invoice.number}</span><br/>
            </p>
          </div>
          <div className="invoice-detail-block">
            <table className="invoice-detail-items-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total ex. tax</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems}
              <tr>
                <td colSpan="4">
                  <Button onClick={this.addInvoiceItem}
                    label="Add item"/>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">Total</th>
                <td className="euro">{invoiceTotal}</td>
                <td></td>
              </tr>
            </tfoot>
            </table>
          </div>
          <div className="invoice-payment-block">
            <h3>Payment</h3>
            <p>
              <span className="label">IBAN</span> FR48 2004 1010 1614 5347 1B03 734 <br/>
              <span className="label">SWIFT/BIC</span> PSSTFRPPTOU <br/>
              <span className="note">
                Please include the invoice number: <span className="value">{invoice.number}</span>
              </span>
            </p>

            <h3>Notes</h3>
            <p>
              Reverse charge, Article 196 VAT Directive <br/>
              <span className="label">{invoice.customerName} VAT number</span>
              <TextField onChange={this.saveField.bind(this, 'customerVAT')}
                name="invoice-customer-vat" placeholder="Customer VAT"
                value={invoice.customerVAT} inline />
              <span className="label">Ling VAT number</span> FR 54 813121332
            </p>
          </div>
        </Form>
      </Box>
    )
  }
})

module.exports = Invoice
