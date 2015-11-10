require('../css/main.css')

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Layout = require('./lib/layout')
var Navigation = require('./lib/navigation')
var Header = require('./lib/header')
var Title = require('./lib/title')
var Nav = require('./lib/navigation')
var Content = require('./lib/content')

const App = ({
  contextMenu,
  main
}) => (
  <Layout>
    <Header>
      <Title>Ling Consulting</Title>
      <Nav className="main-nav">
        <Link to="/customers" activeClassName="active" className="main-nav-item">
          Customers
        </Link>
        <Link to="/invoices" activeClassName="active" className="main-nav-item">
          Invoices
        </Link>
        <Link to="/users" activeClassName="active" className="main-nav-item">
          Users
        </Link>
      </Nav>
    </Header>
    <Content>
      {contextMenu}
      {main}
    </Content>
  </Layout>
)

module.exports = App
