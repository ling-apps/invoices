var React = require('react')
var Box = require('./lib/box')
var API = require('./api')

const InvoiceShow = React.createClass({
  getInitialState() {
    return {
      invoice: API.getInvoice(this.props.params.id)
    }
  },

  renderInvoiceItems() {
    return this.state.invoice.items.map( (item, index) => {
      return (<tr key={index}>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.rate}</td>
        <td>{item.quantity * item.rate}</td>
      </tr>)
    })
  },

  render() {
    let invoice = this.state.invoice
    let invoiceItems = this.renderInvoiceItems()
    let invoiceTotal = 0
    invoice.items.forEach(item => invoiceTotal += item.rate * item.quantity)
    return (
      <Box>
        <div className="invoice-form">
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
            <h3>{invoice.customerName}</h3>
            <p>
            {invoice.customerAddress}
            </p>
          </div>
          <div className="invoice-info-block">
            <p>
            <span className="label">Billed on</span> <span>{invoice.date}</span><br />
            <span className="label">Due on</span> <span>{invoice.dueDate}</span><br/>
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
              </tr>
            </thead>
            <tbody>
              {invoiceItems}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">Total</th>
                <td className="euro">{invoiceTotal}</td>
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
              <span className="label">{invoice.customerName} VAT number</span> {invoice.customerVAT}
              <span className="label">Ling VAT number</span> FR 54 813121332
            </p>
          </div>
        </div>
      </Box>
    )
  }
})

module.exports = InvoiceShow
