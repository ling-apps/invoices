var Box = require('lib/box')

const CustomerShow = ({customer}) => (
  <Box>
    <h2>{customer.name}</h2>
    <address>
      <pre>
        {customer.address}
      </pre>
    </address>
    <div className="form-group">
      <span className="label">VAT</span>
      {customer.vat}
    </div>
    <div className="form-group">
      <span className="label">Currency</span>
      {customer.currency}
    </div>
  </Box>
)

module.exports = CustomerShow
