var uuid = require('uuid')

const API = {
  saveInvoice(invoice) {
    let invoices = JSON.parse(localStorage.getItem('invoices')) || []
    if(invoice.id) {
      let index = invoices.findIndex(c => c.id === invoice.id)
      invoices.splice(index, 1, invoice)
    } else {
      invoice.id = uuid.v4()
      invoices.push(invoice)
    }
    invoices.push(invoice)
    return localStorage.setItem('invoices', JSON.stringify(invoices))
  },

  getInvoice(id) {
    let invoices = JSON.parse(localStorage.getItem('invoices')) || []
    return invoices.find(invoice => invoice.id === id)
  },

  removeInvoice(id) {
    let invoices = JSON.parse(localStorage.getItem('invoices'))
    let invoice = invoices.find( invoice => invoice.id === id)
    let index = invoices.indexOf(invoice)
    invoices.splice(index, 1)
    return localStorage.setItem('invoices', JSON.stringify(invoices))
  },

  getInvoices() {
    let invoices = JSON.parse(localStorage.getItem('invoices')) || []
    return invoices
  },

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || []
  },

  getUser(id) {
    let users = JSON.parse(localStorage.getItem('users')) || []
    return users.find(user => user.id === id)
  },

  saveUser(user) {
    user.id = uuid.v4()
    let users = JSON.parse(localStorage.getItem('users')) || []
    users.push(user)
    return localStorage.setItem('users', JSON.stringify(users))
  },

  removeUser(id) {
    let users = JSON.parse(localStorage.getItem('users')) || []
    let user = users.find(user => user.id === id)
    let index = users.indexOf(user)
    users.splice(index, 1)
    return localStorage.setItem('users', JSON.stringify(users))
  },

  getCustomers() {
    return JSON.parse(localStorage.getItem('customers')) || []
  },

  getCustomer(id) {
    let customers = JSON.parse(localStorage.getItem('customers')) || []
    return customers.find(customer => customer.id === id)
  },

  saveCustomer(customer) {
    let customers = JSON.parse(localStorage.getItem('customers')) || []
    if(customer.id) {
      let index = customers.findIndex(c => c.id === customer.id)
      customers.splice(index, 1, customer)
    } else {
      customer.id = uuid.v4()
      customers.push(customer)
    }
    return localStorage.setItem('customers', JSON.stringify(customers))
  },

  removeCustomer(id) {
    let customers = JSON.parse(localStorage.getItem('customers')) || []
    let customer = customers.find(customer => customer.id === id)
    let index = customers.indexOf(customer)
    customers.splice(index, 1)
    return localStorage.setItem('customers', JSON.stringify(customers))
  }
}

module.exports = API
