require('../css/main.css');

import React from 'react';
import { Link } from 'react-router';
import Layout from './lib/layout';
import Navigation from './lib/navigation';
import Header from './lib/header';
import Content from './lib/content';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header title="Ling invoicing"></Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default App;
