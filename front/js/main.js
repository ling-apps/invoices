var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router')
var createBrowserHistory = require('history/lib/createBrowserHistory')
var routes = require('./routes')

var node = document.getElementById('app')

ReactDOM.render(<Router.Router history={createBrowserHistory()} children={routes} />, node);
