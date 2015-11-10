var List = require('lib/list')
var CustomerListItem = require('components/customer_list_item')

const CustomerList = ({
  onDelete,
  customers
}) => {
  (
   <List items={customers} format={CustomerListItem}
     onDelete={onDelete} />
  )
}

module.exports = CustomerList
