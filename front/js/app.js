require('../css/main.css');

import React from 'react';
import { Link } from 'react-router';
import InvoiceListItem from './invoice_list_item';
import Layout from './lib/layout';
import Navigation from './lib/navigation';
import Header from './lib/header';
import Content from './lib/content';
import List from './lib/list';

class App extends React.Component {
  createNewInvoice() {}

  render() {
    let invoices = [
      {id: 0, name: "Invoice Blandine aout", updatedAt: new Date(2015, 8, 10)},
      {id: 1, name: "Invoice Blandine september", updatedAt: new Date(2015, 9, 10)}
    ];
    return (
      <Layout>
        <Header title="Ling invoicing"></Header>
        <Content>
          <List items={invoices} format={InvoiceListItem} />
        </Content>
      </Layout>
    );
  }
}

export default App;
