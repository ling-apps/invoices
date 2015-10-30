var React = require('react')
var Router = require('react-router')
var Context = require('./lib/context_menu')
var Title = require('./lib/title')
var ContextAction = require('./lib/context_action')
var {History, Link} = Router

const CustomerShowNav = React.createClass({
  mixins: [History],

  render() {
    let editUrl = `/customers/${this.props.params.id}/edit`
    return (
      <Context>
        <Title>
          <Link to="/customers">Back to list</Link>
        </Title>
        <ContextAction>
          <Link className="button" to={editUrl}>Edit</Link>
        </ContextAction>
      </Context>
    )
  }
})

module.exports = CustomerShowNav
