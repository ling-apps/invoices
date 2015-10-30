var React = require('react')
var Router = require('react-router')
var createBrowserHistory = require('history/lib/createBrowserHistory')
var routes = require('./routes')

React.render(<Router.Router history={createBrowserHistory()} children={routes} />, document.body);
